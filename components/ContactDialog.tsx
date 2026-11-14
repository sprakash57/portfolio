"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { sendContact, type ContactField, type ContactState } from "@/app/actions/contact";

const OPEN_EVENT = "contact:open";

/** Opens the contact form from anywhere (buttons, the mobile terminal's `sudo hire sunny`). */
export const openContact = () => window.dispatchEvent(new Event(OPEN_EVENT));

export function ContactButton({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <button type="button" onClick={openContact} aria-haspopup="dialog" className={className}>
      {children}
    </button>
  );
}

type Turnstile = {
  render: (el: HTMLElement, opts: Record<string, unknown>) => string;
  reset: (id: string) => void;
  remove: (id: string) => void;
};
declare global {
  interface Window {
    turnstile?: Turnstile;
  }
}

// Cloudflare's documented always-pass test key, used only in development when no key is set.
const SITE_KEY =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || (process.env.NODE_ENV !== "production" ? "1x00000000000000000000AA" : "");
const TURNSTILE_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

/** Loads Turnstile once, on first open, so the page itself never pays for it. */
function loadTurnstile(): Promise<Turnstile> {
  if (window.turnstile) return Promise.resolve(window.turnstile);
  return new Promise((resolve, reject) => {
    let script = document.querySelector<HTMLScriptElement>(`script[src="${TURNSTILE_SRC}"]`);
    if (!script) {
      script = document.createElement("script");
      script.src = TURNSTILE_SRC;
      script.async = true;
      document.head.appendChild(script);
    }
    script.addEventListener("load", () => (window.turnstile ? resolve(window.turnstile) : reject(new Error("turnstile"))));
    script.addEventListener("error", () => reject(new Error("turnstile")));
  });
}

const initial: ContactState = { status: "idle" };

export function ContactDialog() {
  const dialog = useRef<HTMLDialogElement>(null);
  // A new session per open remounts the form, so a previous "sent" state or error never lingers.
  const [session, setSession] = useState(0);

  useEffect(() => {
    const open = () => {
      setSession((n) => n + 1);
      dialog.current?.showModal();
    };
    window.addEventListener(OPEN_EVENT, open);
    return () => window.removeEventListener(OPEN_EVENT, open);
  }, []);

  const close = () => dialog.current?.close();

  return (
    <dialog
      ref={dialog}
      aria-labelledby="contact-title"
      className="term m-auto w-[calc(100%-2rem)] max-w-lg rounded-lg border border-border bg-bg p-0 text-fg backdrop:bg-black/60 backdrop:backdrop-blur-sm"
    >
      <div className="flex items-center justify-between border-b border-border px-5 py-3 font-mono text-sm text-muted">
        <h2 id="contact-title">
          <span className="text-accent">$</span> mail sunny
        </h2>
        <button type="button" onClick={close} className="rounded border border-border px-2 py-0.5 hover:text-fg">
          close
        </button>
      </div>
      {session > 0 && <ContactForm key={session} onDone={close} />}
    </dialog>
  );
}

function ContactForm({ onDone }: { onDone: () => void }) {
  const form = useRef<HTMLFormElement>(null);
  const widget = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);
  const [started] = useState(() => Date.now());
  const [checkFailed, setCheckFailed] = useState(false);
  const [state, action, pending] = useActionState(sendContact, initial);

  // Render the Turnstile widget for this session; remove it when the form unmounts.
  useEffect(() => {
    let cancelled = false;
    loadTurnstile()
      .then((turnstile) => {
        if (cancelled || !widget.current || !SITE_KEY) return;
        widgetId.current = turnstile.render(widget.current, {
          sitekey: SITE_KEY,
          action: "contact",
          theme: "auto",
          size: "flexible",
        });
      })
      .catch(() => setCheckFailed(true));
    return () => {
      cancelled = true;
      if (widgetId.current) window.turnstile?.remove(widgetId.current);
    };
  }, []);

  // A Turnstile token is single-use: issue a fresh one after a failed attempt. On success the form (and the
  // widget's element) is replaced by the confirmation, so remove the widget instead of leaving it orphaned.
  useEffect(() => {
    if (!widgetId.current) return;
    if (state.status === "error") window.turnstile?.reset(widgetId.current);
    if (state.status === "success") {
      window.turnstile?.remove(widgetId.current);
      widgetId.current = null;
    }
  }, [state]);

  const error = (f: ContactField) => state.fieldErrors?.[f];
  const inputClass =
    "mt-1 w-full rounded border border-border bg-surface px-3 py-2 font-sans text-base text-fg outline-none focus:border-accent aria-[invalid=true]:border-accent";

  if (state.status === "success") {
    return (
      <div className="px-5 py-8 font-mono text-sm" role="status">
        <p className="text-ok">✓ message sent</p>
        <p className="mt-2 font-sans text-base text-muted">Thanks for reaching out. I&apos;ll get back to you soon.</p>
        <button type="button" onClick={onDone} className="mt-6 rounded bg-accent px-4 py-2 font-medium text-bg">
          done
        </button>
      </div>
    );
  }

  return (
    <form ref={form} action={action} noValidate className="space-y-4 px-5 py-5">
      <input type="hidden" name="started" value={started} />
      {/* Honeypot: invisible to people and screen readers, irresistible to form-filling bots. The name and
          label are deliberately meaningless so browser autofill never fills it for a real visitor. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Leave this empty
          <input name="hp_extra" type="text" tabIndex={-1} autoComplete="new-password" defaultValue="" data-1p-ignore data-lpignore="true" />
        </label>
      </div>

      <Field id="name" label="name" error={error("name")}>
        <input id="contact-name" name="name" required maxLength={100} autoComplete="name" defaultValue={state.values?.name ?? ""}
          aria-invalid={!!error("name")} aria-describedby={error("name") ? "contact-name-error" : undefined} className={inputClass} />
      </Field>
      <Field id="email" label="email" error={error("email")}>
        <input id="contact-email" name="email" type="email" required maxLength={254} autoComplete="email" defaultValue={state.values?.email ?? ""}
          aria-invalid={!!error("email")} aria-describedby={error("email") ? "contact-email-error" : undefined} className={inputClass} />
      </Field>
      <Field id="message" label="message" error={error("message")}>
        <textarea id="contact-message" name="message" required minLength={10} maxLength={5000} rows={5} defaultValue={state.values?.message ?? ""}
          aria-invalid={!!error("message")} aria-describedby={error("message") ? "contact-message-error" : undefined}
          className={`${inputClass} resize-y`} />
      </Field>

      <div ref={widget} className="min-h-[65px]" />
      {checkFailed && (
        <p className="text-sm text-accent">The human check couldn&apos;t load. Please disable blockers for this site and retry.</p>
      )}

      <div className="flex items-center justify-between gap-4">
        <p className="min-h-5 text-sm text-accent" role="alert" aria-live="assertive">
          {state.status === "error" && state.message}
        </p>
        <button type="submit" disabled={pending}
          className="shrink-0 rounded bg-accent px-4 py-2 font-mono font-medium text-bg transition-opacity hover:opacity-90 disabled:opacity-60">
          {pending ? "sending…" : "send"}
        </button>
      </div>
    </form>
  );
}

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={`contact-${id}`} className="font-mono text-sm text-muted">
        {label}
      </label>
      {children}
      {error && (
        <p id={`contact-${id}-error`} className="mt-1 text-sm text-accent">
          {error}
        </p>
      )}
    </div>
  );
}
