import type { Achievement } from "@/content/profile";

export function Achievements({ summary, items }: { summary: string; items: Achievement[] }) {
  return (
    <>
      <p className="max-w-3xl text-lg leading-relaxed text-pretty">{summary}</p>
      <ol className="mt-12 divide-y divide-border border-t border-border">
        {items.map((a) => (
          <li key={a.title} className="grid gap-3 py-8 sm:grid-cols-[11rem_1fr] sm:gap-8">
            <div>
              {a.metric && <p className="font-mono text-lg font-medium leading-tight text-accent">{a.metric}</p>}
              <p className="mt-1 font-mono text-xs text-muted">
                {a.org} · {a.period}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium">{a.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{a.description}</p>
              <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-muted" aria-label="Technologies and practices">
                {a.tags.map((t) => (
                  <li key={t}>#{t.toLowerCase().replace(/[\s/]+/g, "-")}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </>
  );
}
