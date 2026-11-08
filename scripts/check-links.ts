import { fetchPublicPage } from "./public-page";
import { projects, linkedin, github, siteUrl } from "../lib/projects";
import { caseScreens } from "../lib/case-screens";
const base = process.env.SMOKE_URL;
const imagePaths = new Set(Object.keys(caseScreens).map((screen) => `/images/case-studies/${screen}.webp`));
const urls = base
  ? [
      base,
      ...projects.map((p) => `${base}/work/${p.slug}`),
      `${base}/sitemap.xml`,
      `${base}/robots.txt`,
      `${base}/opengraph-image`,
      `${base}/icon.svg`,
      `${base}/api/contributions`,
      ...[...imagePaths].map((path) => `${base}${path}`),
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
    const r = await fetchPublicPage(url);
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
  const titles = new Set<string>();
  const descriptions = new Set<string>();
  for (const [path, html] of documents) {
    const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
    const description = html.match(
      /<meta name="description" content="([^"]+)"/,
    )?.[1];
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
    if (
      !title ||
      titles.has(title) ||
      !description ||
      descriptions.has(description) ||
      !canonical ||
      new URL(canonical).href !== new URL(path, siteUrl).href
    ) {
      console.error(
        `Missing, duplicated or incorrect search metadata: ${path}`,
      );
      failed = true;
    }
    if (title) titles.add(title);
    if (description) descriptions.add(description);
    for (const field of [
      "og:image",
      "og:title",
      "og:description",
      "twitter:card",
      "twitter:image",
    ]) {
      if (!html.includes(`content="`) || !html.includes(`="${field}"`)) {
        console.error(`Missing ${field}: ${path}`);
        failed = true;
      }
    }
    const structured = [
      ...html.matchAll(
        /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
      ),
    ];
    if (!structured.length) {
      console.error(`Missing structured data: ${path}`);
      failed = true;
    }
    for (const entry of structured) {
      try {
        JSON.parse(entry[1]);
      } catch {
        console.error(`Invalid structured data: ${path}`);
        failed = true;
      }
    }
    for (const match of html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)) {
      const target = new URL(
        match[1].replaceAll("&amp;", "&"),
        new URL(path, base),
      );
      if (target.origin !== new URL(base).origin) continue;
      if (imagePaths.has(target.pathname) && !target.hash) continue;
      const destination = documents.get(target.pathname);
      if (
        !destination ||
        (target.hash &&
          !destination.includes(
            `id="${decodeURIComponent(target.hash.slice(1))}"`,
          ))
      ) {
        console.error(
          `Broken navigation: ${path} -> ${target.pathname}${target.hash}`,
        );
        failed = true;
      }
    }
  }
  console.log(
    `Checked internal links and fragment targets on ${documents.size} pages`,
  );
  const r = await fetch(`${base}/missing-page-smoke-test`, {
    redirect: "manual",
  });
  console.log(`${r.status} expected 404`);
  if (r.status !== 404) failed = true;
  const missingStory = await fetch(`${base}/work/missing-project`, {
    redirect: "manual",
  });
  console.log(`${missingStory.status} expected 404 for unknown project`);
  if (missingStory.status !== 404) failed = true;
}
console.log(`LinkedIn requires manual verification: ${linkedin}`);
if (failed) process.exitCode = 1;
