export type RepoStats = {
  stars: number;
  forks: number;
  language: string | null;
  pushedAt: string;
};

/**
 * Fetches public repo stats for a user in a single request, revalidated hourly.
 * Set GITHUB_TOKEN to avoid the 60 req/hour unauthenticated limit on busy builds.
 */
export async function getRepoStats(user: string): Promise<Map<string, RepoStats>> {
  const stats = new Map<string, RepoStats>();
  try {
    const headers: HeadersInit = { Accept: "application/vnd.github+json" };
    if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

    const res = await fetch(`https://api.github.com/users/${user}/repos?per_page=100&type=owner`, {
      headers,
      next: { revalidate: 3600 },
    });
    if (!res.ok) return stats;

    const repos: { name: string; fork: boolean; stargazers_count: number; forks_count: number; language: string | null; pushed_at: string }[] =
      await res.json();
    for (const r of repos) {
      if (r.fork) continue;
      stats.set(r.name, { stars: r.stargazers_count, forks: r.forks_count, language: r.language, pushedAt: r.pushed_at });
    }
  } catch {
    // Render without live stats rather than failing the page.
  }
  return stats;
}
