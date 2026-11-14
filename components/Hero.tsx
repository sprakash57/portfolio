import Image from "next/image";
import { links, profile } from "@/content/profile";
import { BrandIcon, isBrand } from "./BrandIcon";
import { ContactButton } from "./ContactDialog";
import { ExternalLink } from "./Section";

// Literal class names so Tailwind can see them.
const statCols: Record<number, string> = { 1: "sm:grid-cols-1", 2: "sm:grid-cols-2", 3: "sm:grid-cols-3", 4: "sm:grid-cols-4" };

export function Hero({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <section id="top" aria-labelledby="hero-heading" className="pt-14 pb-16 sm:pt-24 sm:pb-20">
      <div className="flex flex-col-reverse gap-10 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-2xl">
          <p className="font-mono text-sm text-muted">
            <span className="text-ok">guest@sunnyprakash.com</span>:<span className="text-accent">~</span>$ whoami
          </p>
          <h1 id="hero-heading" className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
            {profile.name}
            <span className="cursor" aria-hidden="true" />
          </h1>
          <p className="mt-3 font-mono text-lg text-accent sm:text-xl">{profile.roles.join(" · ")}</p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted text-pretty">{profile.pitch}</p>

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-sm text-muted">
            <span>{profile.location}</span>
            {profile.openToWork && (
              <span className="inline-flex items-center gap-2 text-ok">
                <span className="size-2 rounded-full bg-ok" aria-hidden="true" />
                open to new roles
              </span>
            )}
          </div>

          <div className="mt-8 flex flex-wrap gap-3 font-mono text-sm">
            <ContactButton className="rounded bg-accent px-4 py-2 font-medium text-bg transition-opacity hover:opacity-90">
              get in touch
            </ContactButton>
          </div>
          <p className="mt-6 flex flex-wrap gap-x-4 gap-y-1 font-mono text-sm text-muted">
            {Object.entries(links).map(([key, l]) => (
              <ExternalLink key={key} href={l.href} me>
                {isBrand(key) && <BrandIcon name={key} className="mr-1.5 inline-block size-3.5 align-[-2px]" />}
                {l.label.toLowerCase()}
              </ExternalLink>
            ))}
          </p>
        </div>

        <Image
          src={profile.photo}
          alt={`Portrait of ${profile.name}`}
          width={160}
          height={160}
          loading="eager"
          className="size-24 rounded-lg border border-border object-cover grayscale transition-[filter] duration-500 hover:grayscale-0 sm:size-40"
        />
      </div>

      {stats.length > 0 && (
        <dl className={`mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border ${statCols[stats.length] ?? "sm:grid-cols-4"}`}>
          {stats.map((s) => (
            <div key={s.label} className="bg-bg p-4 last:odd:col-span-2 sm:p-5 sm:last:odd:col-span-1">
              <dt className="font-mono text-xs text-muted">{s.label}</dt>
              <dd className="mt-1 text-2xl font-semibold tracking-tight">{s.value}</dd>
            </div>
          ))}
        </dl>
      )}
    </section>
  );
}
