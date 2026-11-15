type SectionProps = {
  id: string;
  index: number;
  title: string;
  /** Optional link/action rendered on the right of the heading row. */
  aside?: React.ReactNode;
  children: React.ReactNode;
};

export function Section({ id, index, title, aside, children }: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className="border-t border-border py-15">
      <div className="mb-10 flex items-baseline justify-between gap-4">
        <div className="font-mono text-xl tracking-tight text-muted">
          <span className="text-accent" aria-hidden="true">
            {String(index).padStart(2, "0")}
          </span>
          <span aria-hidden="true"> ~/</span>
          <h2 id={headingId} className="inline text-fg">
            {title}
          </h2>
        </div>
        {aside}
      </div>
      {children}
    </section>
  );
}

type ExternalLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  /** rel="me": marks the target as another profile of the same person (identity verification). */
  me?: boolean;
};

export function ExternalLink({ href, children, className = "", me = false }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel={me ? "me noopener noreferrer" : "noopener noreferrer"}
      className={`underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent ${className}`}
    >
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
