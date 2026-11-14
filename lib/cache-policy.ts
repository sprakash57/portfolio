/**
 * How external data (GitHub, Medium, install counts) behaves when a source is unavailable.
 *
 * Every fetch is cached by Next.js for an hour (`next: { revalidate: 3600 }`) and the page is
 * regenerated in the background at most hourly (ISR), so production makes roughly one request
 * per source per hour, with no API tokens needed.
 *
 * - During `next build` and `next dev` there is no earlier page to fall back on, so we render
 *   without the data rather than failing.
 * - During a background regeneration in production we throw instead. Next.js then keeps serving
 *   the last successfully generated page (with the previous data) and retries on the next request,
 *   so a GitHub rate limit or Medium outage never replaces good data with an empty section.
 */
const canFallBackToCache = () =>
  process.env.NODE_ENV === "production" && process.env.NEXT_PHASE !== "phase-production-build";

export class SourceUnavailableError extends Error {
  constructor(source: string, cause?: unknown) {
    super(`${source} unavailable; keeping the previously cached page`, { cause });
    this.name = "SourceUnavailableError";
  }
}

export function unavailable<T>(source: string, fallback: T, cause?: unknown): T {
  if (cause instanceof SourceUnavailableError) throw cause; // already decided upstream
  if (canFallBackToCache()) throw new SourceUnavailableError(source, cause);
  return fallback;
}
