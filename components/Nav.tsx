import { profile } from "@/content/profile";
import { TerminalNav } from "./TerminalNav";

export function Nav({ sections }: { sections: { id: string; title: string }[] }) {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-bg/85 backdrop-blur">
      <nav aria-label="Primary" className="mx-auto flex h-14 max-w-5xl items-center gap-6 px-4 font-mono text-sm sm:px-6">
        <a href="#top" className="shrink-0 text-fg">
          <span className="text-accent">~</span>/{profile.handle}
        </a>
        <ul className="-mx-2 hidden min-w-0 flex-1 gap-1 sm:flex">
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="block whitespace-nowrap rounded px-2 py-1 text-muted transition-colors hover:text-fg">
                {s.title}
              </a>
            </li>
          ))}
        </ul>
        <TerminalNav
          sections={sections}
          handle={profile.handle}
          roles={[...profile.roles]}
        />
      </nav>
    </header>
  );
}
