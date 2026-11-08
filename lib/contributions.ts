export type Contribution = {
  url: string;
  title: string;
  repository: string;
  number: number;
  mergedAt: string;
};
export type ContributionFeed = {
  entries: Contribution[];
  source: "github" | "snapshot";
};
export const contributionAuthor = "syahmiharith";
export const contributionQuery = `is:pr is:merged author:${contributionAuthor} -user:${contributionAuthor}`;
export const allContributionsUrl = `https://github.com/search?q=${encodeURIComponent(contributionQuery)}&type=pullrequests`;

// Public merged PRs verified on 9 November 2026. Remains readable without JS or GitHub.
export const verifiedContributions: Contribution[] = [
  { url: "https://github.com/career-ops-hq/career-ops/pull/444", title: "feat: add structured machine summaries to evaluations", repository: "career-ops-hq/career-ops", number: 444, mergedAt: "2026-05-22T16:50:57Z" },
  { url: "https://github.com/career-ops-hq/career-ops/pull/41", title: "Add Codex support to Career-Ops", repository: "career-ops-hq/career-ops", number: 41, mergedAt: "2026-04-08T16:31:50Z" },
];

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

/** Accept only public GitHub PR URLs with an explicit merge date and matching author. */
export function parseContributions(payload: unknown): Contribution[] {
  if (!isRecord(payload) || !Array.isArray(payload.items) || payload.incomplete_results === true)
    throw new Error("Incomplete GitHub contribution response");
  const entries = new Map<string, Contribution>();
  for (const item of payload.items) {
    if (!isRecord(item) || !isRecord(item.user) || !isRecord(item.pull_request)) continue;
    const match = typeof item.html_url === "string"
      ? /^https:\/\/github\.com\/([\w.-]+)\/([\w.-]+)\/pull\/([1-9]\d*)$/.exec(item.html_url)
      : null;
    if (!match || match[1].toLowerCase() === contributionAuthor ||
      typeof item.user.login !== "string" || item.user.login.toLowerCase() !== contributionAuthor ||
      typeof item.title !== "string" || !item.title.trim() ||
      typeof item.pull_request.merged_at !== "string" || !Number.isFinite(Date.parse(item.pull_request.merged_at)) ||
      item.number !== Number(match[3])) continue;
    entries.set(item.html_url as string, {
      url: item.html_url as string,
      title: item.title.trim(),
      repository: `${match[1]}/${match[2]}`,
      number: item.number as number,
      mergedAt: item.pull_request.merged_at,
    });
  }
  return [...entries.values()].sort((a, b) => Date.parse(b.mergedAt) - Date.parse(a.mergedAt));
}
