"use client";

import { useRef, useState } from "react";
import { getTheme, setTheme, type Theme } from "@/lib/theme";
import { openContact } from "./ContactDialog";

type Section = { id: string; title: string };
type Props = { sections: Section[]; handle: string; roles: string[] };
type Line = { kind: "cmd" | "out" | "err"; text: string };

const HELP = "commands: ls, cd <dir>, whoami, theme [light|dark|system], sudo hire sunny, clear, exit";

/**
 * Mobile navigation as a tiny shell. The sections are listed as directories by `ls -la`
 * (revealed line by line), and visitors can tap one or type commands with completion chips.
 * Uses a native <dialog> for focus trapping, Escape-to-close and an inert page behind it.
 */
export function TerminalNav({ sections, handle, roles }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [history, setHistory] = useState<Line[]>([]);
  const [input, setInput] = useState("");

  const dirs = sections.map((s) => s.id);
  const arg = input.trim().replace(/^cd\s+/, "");
  const suggestions = input.trim() ? dirs.filter((d) => d.startsWith(arg) && d !== arg) : [];

  const open = () => {
    setHistory([]);
    setInput("");
    dialog.current?.showModal();
  };
  const close = () => dialog.current?.close();

  const go = (id: string) => {
    close();
    // Scroll once the dialog has closed and returned focus, or the restore interrupts it.
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView();
      window.history.replaceState(null, "", `#${id}`);
    });
  };

  function run(raw: string) {
    const cmd = raw.trim();
    if (!cmd) return;
    const echo: Line = { kind: "cmd", text: cmd };
    const print = (...out: Line[]) => setHistory((h) => [...h, echo, ...out]);
    const target = cmd.replace(/^cd\s+/, "").replace(/\/$/, "").replace(/^~\//, "");

    if (cmd === "clear") return setHistory([]);
    if (cmd === "exit") return close();
    if (cmd === "ls" || cmd === "ls -la") return print({ kind: "out", text: dirs.map((d) => `${d}/`).join("  ") });
    if (cmd === "help") return print({ kind: "out", text: HELP });
    if (cmd === "theme") return print({ kind: "out", text: `theme: ${getTheme()} (usage: theme light|dark|system)` });
    const themeArg = cmd.match(/^theme\s+(light|dark|system)$/)?.[1] as Theme | undefined;
    if (themeArg) {
      setTheme(themeArg);
      return print({ kind: "out", text: `theme set to ${themeArg}` });
    }
    if (cmd === "whoami") return print({ kind: "out", text: roles.join(" · ") });
    if (cmd === "sudo hire sunny") {
      print({ kind: "out", text: "[sudo] permission granted. opening mail…" });
      close();
      return openContact();
    }
    if (cmd === "cd" || cmd === "cd ~") return go("top");
    if (dirs.includes(target)) return go(target);
    if (cmd.startsWith("sudo")) return print({ kind: "err", text: `${handle} is not in the sudoers file. Nice try.` });
    print({ kind: "err", text: `command not found: ${cmd}. try "help"` });
  }

  return (
    <>
      <button
        type="button"
        onClick={open}
        aria-haspopup="dialog"
        className="rounded border border-border px-3 py-1 text-fg sm:hidden"
      >
        <span className="text-accent">$</span> cd<span className="cursor" aria-hidden="true" />
        <span className="sr-only"> open navigation</span>
      </button>

      <dialog
        ref={dialog}
        aria-label="Navigation terminal"
        className="term m-0 h-dvh max-h-none w-full max-w-none bg-bg/95 p-0 font-mono text-sm text-fg backdrop-blur backdrop:bg-transparent"
      >
        <div className="flex h-full flex-col px-4 pt-4 pb-6">
          <div className="flex items-center justify-between border-b border-border pb-3 text-muted">
            <span>
              <span className="text-ok">guest@{handle}</span>:<span className="text-accent">~</span>
            </span>
            <button type="button" onClick={close} className="rounded border border-border px-2 py-0.5 hover:text-fg">
              exit
            </button>
          </div>

          <div className="mt-4 flex-1 overflow-y-auto">
            <p className="term-line" style={{ "--i": 0 } as React.CSSProperties}>
              <span className="text-accent">$</span> ls -la ~/
            </p>
            <ul className="mt-2">
              {sections.map((s, i) => (
                <li key={s.id} className="term-line" style={{ "--i": i + 1 } as React.CSSProperties}>
                  <a
                    href={`#${s.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      go(s.id);
                    }}
                    className="flex gap-3 py-2 active:text-accent"
                  >
                    <span className="text-muted" aria-hidden="true">
                      drwxr-xr-x
                    </span>
                    <span className="text-accent">{s.title}/</span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="term-line mt-3 text-muted" style={{ "--i": sections.length + 1 } as React.CSSProperties}>
              tap a directory, or type a command. try &quot;help&quot;
            </p>

            <ol className="mt-3 space-y-1" aria-live="polite">
              {history.map((l, i) => (
                <li key={i} className={l.kind === "err" ? "text-accent" : l.kind === "out" ? "text-muted" : ""}>
                  {l.kind === "cmd" && <span className="text-accent">$ </span>}
                  {l.text}
                </li>
              ))}
            </ol>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              run(input);
              setInput("");
            }}
            className="border-t border-border pt-3"
          >
            {suggestions.length > 0 && (
              <div className="mb-2 flex flex-wrap gap-2" aria-label="Completions">
                {suggestions.map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setInput(`cd ${d}`)}
                    className="rounded border border-border bg-surface px-2 py-0.5 text-muted"
                  >
                    {d}/
                  </button>
                ))}
              </div>
            )}
            <label className="flex items-center gap-2">
              <span className="text-accent" aria-hidden="true">
                $
              </span>
              <span className="sr-only">Command</span>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Tab" && suggestions.length === 1) {
                    e.preventDefault();
                    setInput(`cd ${suggestions[0]}`);
                  }
                }}
                autoCapitalize="off"
                autoCorrect="off"
                autoComplete="off"
                spellCheck={false}
                enterKeyHint="go"
                placeholder="cd skills"
                className="min-w-0 flex-1 bg-transparent text-base text-fg outline-none placeholder:text-muted"
              />
            </label>
          </form>
        </div>
      </dialog>
    </>
  );
}
