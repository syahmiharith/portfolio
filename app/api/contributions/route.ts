import { contributionQuery, parseContributions, verifiedContributions } from "@/lib/contributions";

export const revalidate = 60;

export async function GET() {
  const url = new URL("https://api.github.com/search/issues");
  url.search = new URLSearchParams({ q: contributionQuery, sort: "updated", order: "desc", per_page: "100" }).toString();
  try {
    const response = await fetch(url, {
      next: { revalidate: 60 },
      headers: { Accept: "application/vnd.github+json", "User-Agent": "syahmiharith-portfolio" },
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) throw new Error("GitHub contribution feed unavailable");
    const entries = parseContributions(await response.json());
    return Response.json({ entries, source: "github" });
  } catch {
    return Response.json({ entries: verifiedContributions, source: "snapshot" });
  }
}
