/**
 * Theme preference: "system" follows the OS (prefers-color-scheme); "light"/"dark" override it.
 * The choice lives only in this browser's localStorage, so the page stays statically rendered.
 * An inline script in app/layout.tsx applies a saved override before the first paint (no flash);
 * these helpers handle changes after that. Browser-only: call from event handlers or effects.
 */
export type Theme = "system" | "light" | "dark";
export type ResolvedTheme = "light" | "dark";

const KEY = "theme";
const EVENT = "themechange";
export const THEME_COLORS: Record<ResolvedTheme, string> = { dark: "#0d0d0c", light: "#f7f6f2" };

// The theme-color <meta> tags from app/layout.tsx are managed by React, so we never edit them. A manual
// choice adds its own tag at the top of <head> instead: browsers use the first one that applies.
const OVERRIDE_ID = "theme-color-override";

/** Runs before first paint. Kept tiny and self-contained because it's inlined into <head>. */
export const themeScript = `(function(){try{var t=localStorage.getItem("${KEY}");if(t==="light"||t==="dark"){document.documentElement.setAttribute("data-theme",t);var m=document.createElement("meta");m.name="theme-color";m.id="${OVERRIDE_ID}";m.content=t==="light"?"${THEME_COLORS.light}":"${THEME_COLORS.dark}";document.head.prepend(m)}}catch(e){}})()`;

export function getTheme(): Theme {
  try {
    const t = localStorage.getItem(KEY);
    return t === "light" || t === "dark" ? t : "system";
  } catch {
    return "system";
  }
}

export function resolvedTheme(): ResolvedTheme {
  const t = document.documentElement.dataset.theme;
  if (t === "light" || t === "dark") return t;
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function apply(theme: Theme) {
  const root = document.documentElement;
  if (theme === "system") delete root.dataset.theme;
  else root.dataset.theme = theme;
  // Keep the mobile browser's toolbar colour in step with the page (see OVERRIDE_ID above).
  let override = document.getElementById(OVERRIDE_ID) as HTMLMetaElement | null;
  if (theme === "system") {
    override?.remove();
    return;
  }
  if (!override) {
    override = document.createElement("meta");
    override.name = "theme-color";
    override.id = OVERRIDE_ID;
    document.head.prepend(override);
  }
  override.content = THEME_COLORS[theme];
}

export function setTheme(theme: Theme) {
  try {
    if (theme === "system") localStorage.removeItem(KEY);
    else localStorage.setItem(KEY, theme);
  } catch {
    // Storage blocked (private mode etc.): still apply for this page view.
  }
  apply(theme);
  window.dispatchEvent(new Event(EVENT));
}

/** For useSyncExternalStore: re-render on changes here, in other tabs, or to the OS setting. */
export function subscribeTheme(onChange: () => void) {
  const fromOtherTab = (e: StorageEvent) => {
    if (e.key !== KEY) return;
    apply(getTheme());
    onChange();
  };
  const media = window.matchMedia("(prefers-color-scheme: light)");
  window.addEventListener(EVENT, onChange);
  window.addEventListener("storage", fromOtherTab);
  media.addEventListener("change", onChange);
  return () => {
    window.removeEventListener(EVENT, onChange);
    window.removeEventListener("storage", fromOtherTab);
    media.removeEventListener("change", onChange);
  };
}
