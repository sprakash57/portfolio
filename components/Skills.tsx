import type { SkillGroup } from "@/content/profile";

export function Skills({ groups, languages }: { groups: SkillGroup[]; languages: string[] }) {
  const rows = languages.length ? [...groups, { label: "speaks", items: languages }] : groups;
  return (
    <dl className="space-y-5 font-mono text-sm">
      {rows.map((g) => (
        <div key={g.label} className="grid gap-2 sm:grid-cols-[8rem_1fr] sm:gap-6">
          <dt className="text-accent">{g.label}:</dt>
          <dd>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <li key={item} className="rounded border border-border bg-surface px-2 py-1 text-fg">
                  {item}
                </li>
              ))}
            </ul>
          </dd>
        </div>
      ))}
    </dl>
  );
}
