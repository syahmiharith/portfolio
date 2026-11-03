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
    ];
let failed = false;
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
  const r = await fetch(`${base}/missing-page-smoke-test`, {
    redirect: "manual",
  });
  console.log(`${r.status} expected 404`);
  if (r.status !== 404) failed = true;
}
console.log(`LinkedIn requires manual verification: ${linkedin}`);
if (failed) process.exitCode = 1;
