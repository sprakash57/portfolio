import type { Project } from "@/content/profile";
import type { DownloadCount } from "@/lib/downloads";
import type { RepoStats } from "@/lib/github";

const relative = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
function updatedAgo(iso: string) {
  const days = Math.round((Date.parse(iso) - Date.now()) / 86_400_000);
  if (days > -30) return relative.format(days, "day");
  if (days > -365) return relative.format(Math.round(days / 30), "month");
  return relative.format(Math.round(days / 365), "year");
}

const lastUpdated = (p: Project, stats: Map<string, RepoStats>) =>
  (p.repo && stats.get(p.repo)?.pushedAt) || p.updated;

/** Newest first; items with no known date go last, keeping their order from profile.ts. */
function byNewest(projects: Project[], stats: Map<string, RepoStats>) {
  const time = (p: Project) => {
    const d = lastUpdated(p, stats);
    return d ? Date.parse(d) : -Infinity;
  };
  return [...projects].sort((a, b) => time(b) - time(a));
}

const monthYear = new Intl.DateTimeFormat("en", { month: "short", year: "numeric", timeZone: "UTC" });

type ProjectsProps = {
  projects: Project[];
  stats: Map<string, RepoStats>;
  /** Live install totals, keyed by project name. */
  downloads: Map<string, DownloadCount>;
};

export function Projects({ projects, stats, downloads }: ProjectsProps) {
  return (
    <ul className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
      {byNewest(projects, stats).map((p) => {
        const live = p.repo ? stats.get(p.repo) : undefined;
        const installs = downloads.get(p.name);
        const metric = installs
          ? `${installs.total.toLocaleString("en")} installs since ${monthYear.format(new Date(installs.since))}`
          : p.metric;
        return (
          <li key={p.name} className="group relative flex flex-col bg-bg p-6 transition-colors hover:bg-surface md:last:odd:col-span-2">
            <div className="flex items-center justify-between gap-4 font-mono text-xs text-muted">
              <span className="rounded border border-border px-1.5 py-0.5">{p.kind}</span>
              {live && (
                <span className="flex gap-3" aria-label="GitHub stats">
                  {live.language && <span>{live.language}</span>}
                  <span aria-label={`${live.stars} stars`}>★ {live.stars}</span>
                  <span>{updatedAgo(live.pushedAt)}</span>
                </span>
              )}
              {!live && p.updated && <span>updated {updatedAgo(p.updated)}</span>}
            </div>
            <h3 className="mt-4 text-lg font-medium">
              {/* Stretched link: the whole card is clickable, with one tab stop. */}
              <a href={p.href} target="_blank" rel="noopener noreferrer" className="after:absolute after:inset-0">
                {p.name}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <span aria-hidden="true" className="ml-2 inline-block text-accent transition-transform group-hover:translate-x-1">
                →
              </span>
            </h3>
            <p className="font-mono text-sm text-accent">{p.tagline}</p>
            <p className="mt-3 flex-1 leading-relaxed text-muted">{p.description}</p>
            {metric && <p className="mt-4 font-mono text-sm text-ok">{metric}</p>}
            <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-muted" aria-label="Tech stack">
              {p.stack.map((s) => (
                <li key={s}>#{s.toLowerCase().replace(/\s+/g, "-")}</li>
              ))}
            </ul>
          </li>
        );
      })}
    </ul>
  );
}
