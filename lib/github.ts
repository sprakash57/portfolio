import { unavailable } from "./cache-policy";

export type RepoStats = {
  stars: number;
  forks: number;
  language: string | null;
  pushedAt: string;
};

/**
 * Fetches public repo stats for a user in a single unauthenticated request. Next.js caches the
 * response for an hour, so production stays far below GitHub's 60 requests/hour anonymous limit.
 * See lib/cache-policy.ts for what happens when GitHub is unavailable.
 */
export async function getRepoStats(user: string): Promise<Map<string, RepoStats>> {
  const stats = new Map<string, RepoStats>();
  let res: Response;
  try {
    res = await fetch(`https://api.github.com/users/${encodeURIComponent(user)}/repos?per_page=100&type=owner`, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(8000),
    });
  } catch (error) {
    return unavailable("GitHub", stats, error);
  }
  if (!res.ok) return unavailable(`GitHub (HTTP ${res.status})`, stats);

  try {
    const repos: { name: string; fork: boolean; stargazers_count: number; forks_count: number; language: string | null; pushed_at: string }[] =
      await res.json();
    for (const r of repos) {
      if (r.fork) continue;
      stats.set(r.name, { stars: r.stargazers_count, forks: r.forks_count, language: r.language, pushedAt: r.pushed_at });
    }
  } catch (error) {
    return unavailable("GitHub (unexpected response)", stats, error);
  }
  return stats;
}
