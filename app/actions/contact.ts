"use server";

import { headers } from "next/headers";
import nodemailer from "nodemailer";

export type ContactField = "name" | "email" | "message";
export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<ContactField, string>>;
  /** Echoed back on errors: React resets the form after an action, so this keeps what was typed. */
  values?: Record<ContactField, string>;
};

const LIMITS = { name: 100, email: 254, messageMin: 10, messageMax: 5000 };
const MIN_FILL_MS = 3000; // humans take longer than this to write a message; scripts usually don't
const RATE = { max: 5, windowMs: 10 * 60 * 1000 }; // per IP

// Cloudflare's documented always-pass test secret, used only in development when no key is set.
const DEV_TURNSTILE_SECRET = "1x0000000000000000000000000000000AA";

// Best-effort, per-instance limiter. Serverless instances don't share memory, so this slows down a
// single noisy client rather than guaranteeing a global limit; Turnstile is the real gate.
const recent = new Map<string, number[]>();
function rateLimited(ip: string): boolean {
  const now = Date.now();
  const hits = (recent.get(ip) ?? []).filter((t) => now - t < RATE.windowMs);
  hits.push(now);
  recent.set(ip, hits);
  if (recent.size > 5000) recent.clear(); // bound memory under a flood
  return hits.length > RATE.max;
}

const field = (form: FormData, key: string) => {
  const value = form.get(key);
  return typeof value === "string" ? value.trim() : "";
};

/** Strips line breaks so user input can never add email headers (e.g. via the name in Reply-To). */
const oneLine = (s: string) => s.replace(/[\r\n]+/g, " ");

async function verifyTurnstile(token: string, ip: string): Promise<boolean> {
  const secret =
    process.env.TURNSTILE_SECRET_KEY || (process.env.NODE_ENV !== "production" ? DEV_TURNSTILE_SECRET : "");
  if (!secret) {
    console.error("[contact] TURNSTILE_SECRET_KEY is not set; rejecting submission");
    return false;
  }
  if (!token || token.length > 2048) return false;
  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: new URLSearchParams({ secret, response: token, remoteip: ip }),
      signal: AbortSignal.timeout(8000),
      cache: "no-store",
    });
    const result = (await res.json()) as { success?: boolean; action?: string };
    // In production also require the token to have been issued for this form's action.
    return result.success === true && (process.env.NODE_ENV !== "production" || result.action === "contact");
  } catch (error) {
    console.error("[contact] Turnstile verification failed", error);
    return false;
  }
}

export async function sendContact(_prev: ContactState, form: FormData): Promise<ContactState> {
  const ip = (await headers()).get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  // 1. Honeypot: a filled hidden field means a bot. Report success so it learns nothing; send nothing.
  if (field(form, "company") !== "") return { status: "success" };

  const name = oneLine(field(form, "name")).slice(0, 200);
  const email = field(form, "email").slice(0, 300);
  const message = field(form, "message").slice(0, 6000);
  const values = { name, email, message };

  // 2. Rate limit.
  if (rateLimited(ip)) {
    return { status: "error", values, message: "Too many messages from your connection. Please try again in a few minutes." };
  }

  // 3. Validate input on the server (the browser's checks are a convenience, not a boundary).
  const fieldErrors: ContactState["fieldErrors"] = {};
  if (!name) fieldErrors.name = "Please enter your name.";
  else if (name.length > LIMITS.name) fieldErrors.name = `Please keep your name under ${LIMITS.name} characters.`;
  if (email.length > LIMITS.email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    fieldErrors.email = "Please enter a valid email address so I can reply.";
  }
  if (message.length < LIMITS.messageMin) fieldErrors.message = "Please write a little more (at least 10 characters).";
  else if (message.length > LIMITS.messageMax) fieldErrors.message = `Please keep it under ${LIMITS.messageMax} characters.`;
  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", values, message: "Please fix the highlighted fields.", fieldErrors };
  }

  // 4. Timing trap, after validation so a person who clicks "send" too early sees field errors instead.
  //    A complete, valid message in under 3 seconds is a script: fake success, send nothing.
  const started = Number(field(form, "started"));
  if (!Number.isFinite(started) || Date.now() - started < MIN_FILL_MS) return { status: "success" };

  // 5. Human check, verified server-side with Cloudflare.
  if (!(await verifyTurnstile(field(form, "cf-turnstile-response"), ip))) {
    return { status: "error", values, message: "The human check didn't pass. Please complete it and try again." };
  }

  // 6. Send. Plain text only, so nothing the visitor typed is ever rendered as HTML.
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO, CONTACT_FROM } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_TO) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[contact] SMTP not configured; message not sent (development):", { name, email, message });
      return { status: "success" };
    }
    console.error("[contact] SMTP environment variables are missing");
    return { status: "error", values, message: "The contact form is temporarily unavailable. Please reach out on LinkedIn." };
  }

  try {
    const port = Number(SMTP_PORT) || 465;
    const transport = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465, // 465 = implicit TLS; 587 upgrades with STARTTLS (required below)
      requireTLS: port !== 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
      connectionTimeout: 10_000,
      socketTimeout: 15_000,
    });
    await transport.sendMail({
      from: { name: "Portfolio contact form", address: CONTACT_FROM || SMTP_USER },
      to: CONTACT_TO,
      replyTo: { name, address: email },
      subject: `Portfolio: message from ${name}`,
      text: `${message}\n\n--\nFrom: ${name} <${email}>\nSent via the contact form on sunnyprakash.com`,
    });
    return { status: "success" };
  } catch (error) {
    console.error("[contact] Sending failed", error);
    return { status: "error", values, message: "Your message couldn't be sent right now. Please try again in a moment." };
  }
}
