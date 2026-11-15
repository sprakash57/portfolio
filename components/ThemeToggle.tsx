"use client";

import { useSyncExternalStore } from "react";
import { getTheme, setTheme, subscribeTheme, type Theme } from "@/lib/theme";

const NEXT: Record<Theme, Theme> = { system: "light", light: "dark", dark: "system" };
// Inline SVGs rather than ☀/☾ characters: the mono font has no glyphs for those, so they render tiny.
function Icon({ theme }: { theme: Theme }) {
  const common = { width: 14, height: 14, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, "aria-hidden": true };
  if (theme === "light")
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    );
  if (theme === "dark")
    return (
      <svg {...common}>
        <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />
      </svg>
    );
  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Cycles system → light → dark. Renders a neutral placeholder on the server (the choice is client-only). */
export function ThemeToggle({ className = "" }: { className?: string }) {
  const theme = useSyncExternalStore(subscribeTheme, getTheme, () => null);

  return (
    <button
      type="button"
      onClick={() => theme && setTheme(NEXT[theme])}
      aria-label={theme ? `Theme: ${theme}. Switch to ${NEXT[theme]}.` : "Change theme"}
      title={theme ? `theme: ${theme}` : undefined}
      className={`shrink-0 rounded border border-border px-2.5 py-1 font-mono text-muted transition-colors hover:border-fg hover:text-fg ${className}`}
    >
      <span className="inline-flex align-[-2px] text-accent">
        <Icon theme={theme ?? "system"} />
      </span>
      <span aria-hidden="true" className="ml-1.5 hidden lg:inline">
        {theme ?? "theme"}
      </span>
    </button>
  );
}
