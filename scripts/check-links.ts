import { projects, linkedin, github } from "../lib/projects";
const base = process.env.SMOKE_URL;
const urls = base
  ? [
      base,
      ...projects.map((p) => `${base}/work/${p.slug}`),
      `${base}/sitemap.xml`,
      `${base}/robots.txt`,
      `${base}/opengraph-image`,
    ]
  : [
      ...projects.flatMap((p) => [
        p.live,
        p.code,
        ...p.evidence.map((e) => e.url),
      ]),
      github,
      "https://github.com/career-ops-hq/career-ops/pull/41",
      "https://github.com/career-ops-hq/career-ops/pull/444",
    ];
let failed = false;
const documents = new Map<string, string>();
for (const url of [...new Set(urls)]) {
  try {
    const r = await fetch(url, {
      redirect: "follow",
      signal: AbortSignal.timeout(25000),
    });
    const redirectedOutside = Boolean(
      base && new URL(r.url).origin !== new URL(base).origin,
    );
    console.log(
      `${r.status} ${url}${redirectedOutside ? " UNEXPECTED REDIRECT " + r.url : ""}`,
    );
    if (!r.ok || redirectedOutside) failed = true;
    if (
      base &&
      r.headers.get("content-type")?.includes("text/html") &&
      !redirectedOutside
    ) {
      const html = await r.text();
      documents.set(new URL(url).pathname, html);
      if (
        !html.includes("Zulsyahmi Zulkefli") ||
        !html.includes("Try product")
      ) {
        console.error("Expected portfolio content missing");
        failed = true;
      }
    }
  } catch (e) {
    console.error(url, String(e));
    failed = true;
  }
}
if (base) {
  for (const [path, html] of documents) {
    for (const match of html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)) {
      const target = new URL(match[1].replaceAll("&amp;", "&"), new URL(path, base));
      if (target.origin !== new URL(base).origin) continue;
      const destination = documents.get(target.pathname);
      if (!destination || (target.hash && !destination.includes(`id="${decodeURIComponent(target.hash.slice(1))}"`))) {
        console.error(`Broken navigation: ${path} -> ${target.pathname}${target.hash}`);
        failed = true;
      }
    }
  }
  console.log(`Checked internal links and fragment targets on ${documents.size} pages`);
  const r = await fetch(`${base}/missing-page-smoke-test`, {
    redirect: "manual",
  });
  console.log(`${r.status} expected 404`);
  if (r.status !== 404) failed = true;
  const missingStory = await fetch(`${base}/work/missing-project`, { redirect: "manual" });
  console.log(`${missingStory.status} expected 404 for unknown project`);
  if (missingStory.status !== 404) failed = true;
}
console.log(`LinkedIn requires manual verification: ${linkedin}`);
if (failed) process.exitCode = 1;
