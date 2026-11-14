import Image from "next/image";
import type { Post } from "@/lib/medium";
import { links } from "@/content/profile";
import { ExternalLink } from "./Section";

const dateFmt = new Intl.DateTimeFormat("en", { month: "short", year: "numeric" });

export function Writing({ posts }: { posts: Post[] }) {
  if (posts.length === 0) {
    return (
      <p role="status" className="text-muted">
        The latest posts couldn&apos;t be loaded right now. Read them on{" "}
        <ExternalLink href={links.medium.href}>Medium</ExternalLink>.
      </p>
    );
  }

  const [lead, ...rest] = posts;
  return (
    <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
      <article className="group relative">
        {lead.image && (
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-border">
            <Image
              src={lead.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 540px, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        )}
        <p className="mt-4 font-mono text-xs text-muted">
          <span className="text-accent">latest</span> · <time dateTime={lead.date}>{dateFmt.format(new Date(lead.date))}</time>
        </p>
        <h3 className="mt-2 text-xl font-medium text-balance">
          <a href={lead.url} target="_blank" rel="noopener noreferrer" className="after:absolute after:inset-0 group-hover:text-accent">
            {lead.title}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </h3>
        {lead.excerpt && <p className="mt-2 leading-relaxed text-muted">{lead.excerpt}</p>}
      </article>

      <ul className="divide-y divide-border border-t border-border">
        {rest.map((post) => (
          <li key={post.url} className="group relative py-4">
            <p className="font-mono text-xs text-muted">
              <time dateTime={post.date}>{dateFmt.format(new Date(post.date))}</time>
              {post.tags.length > 0 && <> · {post.tags.slice(0, 2).join(", ")}</>}
            </p>
            <h3 className="mt-1 font-medium leading-snug group-hover:text-accent">
              <a href={post.url} target="_blank" rel="noopener noreferrer" className="after:absolute after:inset-0">
                {post.title}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

