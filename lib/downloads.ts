import { unavailable } from "./cache-policy";

export type DownloadCount = { total: number; since: string };

/**
 * Reads a JSON file of daily counts ({ "2026-10-28": 12, ... }) and returns the running total.
 * usage-line's GitHub Action records its clone counts this way in .github/clones.json, so the
 * site stays in sync with the README badge without needing a token. Cached for an hour; see
 * lib/cache-policy.ts for failures (the card falls back to its static metric at build time).
 */
export async function getDownloadCount(url: string): Promise<DownloadCount | null> {
  try {
    const res = await fetch(url, { next: { revalidate: 3600 }, signal: AbortSignal.timeout(8000) });
    if (!res.ok) return unavailable(`Install counts (HTTP ${res.status})`, null);
    const daily: unknown = await res.json();
    if (!daily || typeof daily !== "object") return unavailable("Install counts (unexpected response)", null);

    let total = 0;
    let since = "";
    for (const [day, count] of Object.entries(daily).sort(([a], [b]) => a.localeCompare(b))) {
      if (!/^\d{4}-\d{2}-\d{2}$/.test(day) || typeof count !== "number" || !Number.isFinite(count) || count < 0) continue;
      total += count;
      if (!since && count > 0) since = day; // first day with installs, skipping leading zeros
    }
    return total > 0 ? { total, since } : null;
  } catch (error) {
    return unavailable("Install counts", null, error);
  }
}
