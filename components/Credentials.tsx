import type { Credential, Recommendation } from "@/content/profile";
import { ExternalLink } from "./Section";

export function Recommendations({ items }: { items: Recommendation[] }) {
  return (
    <ul className="grid gap-6 md:grid-cols-2">
      {items.map((r) => (
        <li key={r.name}>
          <figure className="h-full rounded-lg border border-border bg-surface p-6">
            <blockquote className="leading-relaxed text-pretty">
              <span className="font-mono text-accent" aria-hidden="true">
                &gt;{" "}
              </span>
              {r.quote}
            </blockquote>
            <figcaption className="mt-5 text-sm">
              <span className="font-medium">{r.url ? <ExternalLink href={r.url}>{r.name}</ExternalLink> : r.name}</span>
              <span className="block text-muted">
                {r.role}
                {r.company && <> at {r.company}</>}
              </span>
              <span className="mt-1 block font-mono text-xs text-muted">{r.relation}</span>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}

const kindLabel: Record<Credential["kind"], string> = { degree: "degree", certification: "cert", award: "award" };

export function Credentials({ items }: { items: Credential[] }) {
  return (
    <ul className="divide-y divide-border border-t border-border">
      {items.map((c) => (
        <li key={`${c.title}-${c.year}`} className="grid gap-1 py-4 sm:grid-cols-[6rem_1fr_auto] sm:items-baseline sm:gap-6">
          <span className="font-mono text-xs text-accent">{kindLabel[c.kind]}</span>
          <span>
            <span className="font-medium">{c.url ? <ExternalLink href={c.url}>{c.title}</ExternalLink> : c.title}</span>
            <span className="text-muted"> · {c.issuer}</span>
          </span>
          <span className="font-mono text-sm text-muted">{c.year}</span>
        </li>
      ))}
    </ul>
  );
}
