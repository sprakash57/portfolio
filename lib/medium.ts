import { XMLParser } from "fast-xml-parser";
import { unavailable } from "./cache-policy";

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

/**
 * The feed is external input that ends up in href attributes. Only accept https URLs, so a tampered
 * feed can't inject javascript:/data: links. Any host is allowed: Medium publications use their own
 * domains (e.g. javascript.plainenglish.io).
 */
function safeMediumUrl(raw: unknown): string | null {
  try {
    const url = new URL(String(raw));
    if (url.protocol !== "https:") return null;
    url.search = "";
    url.hash = "";
    return url.toString();
  } catch {
    return null;
  }
}

/** Fetches the Medium RSS feed. Revalidated hourly; returns [] on failure so the page still renders. */
export async function getPosts(user: string, limit = 10): Promise<Post[]> {
  try {
    const res = await fetch(`https://medium.com/feed/@${encodeURIComponent(user)}`, {
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(8000), // don't let a slow feed stall the build or revalidation
    });
    if (!res.ok) return unavailable(`Medium feed (HTTP ${res.status})`, []);
    const xml = await res.text();
    const feed = new XMLParser({ ignoreAttributes: true }).parse(xml);

    return asArray<Record<string, unknown>>(feed?.rss?.channel?.item)
      .slice(0, limit)
      .flatMap((item) => {
        const url = safeMediumUrl(item.link);
        const published = new Date(String(item.pubDate));
        if (!url || Number.isNaN(published.getTime())) return []; // skip malformed items
        const html = String(item.description ?? item["content:encoded"] ?? "");
        const snippet = html.match(/class="medium-feed-snippet">([\s\S]*?)<\/p>/)?.[1];
        const firstPara = html.match(/<p>([\s\S]*?)<\/p>/)?.[1];
        return {
          title: String(item.title).slice(0, 200),
          url,
          date: published.toISOString(),
          excerpt: truncate(strip(snippet ?? firstPara ?? ""), 160),
          image: html.match(/<img[^>]+src="(https:\/\/cdn-images-1\.medium\.com[^"]+)"/)?.[1],
          tags: asArray<string>(item.category as string | string[]).slice(0, 3),
        };
      });
  } catch (error) {
    return unavailable("Medium feed", [], error);
  }
}
