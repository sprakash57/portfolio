import { XMLParser } from "fast-xml-parser";

export type Post = {
  title: string;
  url: string;
  date: string;
  excerpt: string;
  image?: string;
  tags: string[];
};

const strip = (html: string) =>
  html
    .replace(/<[^>]+>/g, " ")
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&nbsp;/g, " ")
    .replace(/&rsquo;/g, "’")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();

const truncate = (text: string, max: number) =>
  text.length <= max ? text : `${text.slice(0, text.lastIndexOf(" ", max))}…`;

const asArray = <T,>(v: T | T[] | undefined): T[] => (v === undefined ? [] : Array.isArray(v) ? v : [v]);

/** Fetches the Medium RSS feed. Revalidated hourly; returns [] on failure so the page still renders. */
export async function getPosts(user: string, limit = 10): Promise<Post[]> {
  try {
    const res = await fetch(`https://medium.com/feed/@${user}`, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const xml = await res.text();
    const feed = new XMLParser({ ignoreAttributes: true }).parse(xml);

    return asArray<Record<string, unknown>>(feed?.rss?.channel?.item)
      .slice(0, limit)
      .map((item) => {
        const html = String(item.description ?? item["content:encoded"] ?? "");
        const snippet = html.match(/class="medium-feed-snippet">([\s\S]*?)<\/p>/)?.[1];
        const firstPara = html.match(/<p>([\s\S]*?)<\/p>/)?.[1];
        return {
          title: String(item.title),
          url: String(item.link).split("?")[0],
          date: new Date(String(item.pubDate)).toISOString(),
          excerpt: truncate(strip(snippet ?? firstPara ?? ""), 160),
          image: html.match(/<img[^>]+src="(https:\/\/cdn-images-1\.medium\.com[^"]+)"/)?.[1],
          tags: asArray<string>(item.category as string | string[]).slice(0, 3),
        };
      });
  } catch {
    return [];
  }
}
