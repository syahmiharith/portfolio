# Portfolio review — 8 November 2026

## Scope and evidence

Inspected the public homepage and all three case studies using current Firecrawl HTML/metadata retrieval, the live browser, repository source and linked releases. All four pages returned HTTP 200. The existing production site already had unique descriptions, canonical URLs, social metadata, JSON-LD, sitemap and robots routes; this was not a missing-SEO-basics rebuild.

The Inventory story and image described an older interface and a verification boundary from 3–4 November. PRs 12–17 and their deployed workflow evidence support the updated account of stock recovery, workspace isolation, graphical metrics, controls and release ownership. The new product image is an actual 8 November capture using seeded demo data. Existing attribution is preserved.

SplitFlow's public canonical demo was inspected: it exposes a seeded agreement workspace and explicitly says payment claims are not bank-verified. Its story remains scoped to that prototype. Receipt-to-Form PR 43 is merged; its existing live-editor media and detailed case study are retained.

## Changes

- Lead selected work with the live Receipt-to-Form product, then Inventory's operational demo, then the SplitFlow prototype. Keep the established editorial/ribbon design.
- Make role, availability, project status, contribution, core decision and technology visible without reading a whole story.
- Give each case an explicit task visitors can try, dated verification scope, implementation evidence and a contact path.
- Replace stale Inventory material with the complete request → approve → receive → issue journey, transactional and replay behavior, and the maintained preview/production boundary.
- Use descriptive titles and descriptions, a project ItemList in JSON-LD, current image alt text, corrected story image sizing, a favicon, and explicit preview noindex metadata. Production canonical URLs stay on the stable public origin. Previews omit the production sitemap while allowing crawlers to read noindex.
- Add no adoption counts, customer quotes, extraction accuracy, time-saved figures or commercial outcomes.

## Search guidance and limits

Google's guidance favors descriptive, concise titles and accurate summaries: [title links](https://developers.google.com/search/docs/appearance/title-link), [snippets](https://developers.google.com/search/docs/appearance/snippet). Metadata, sitemap and structured data improve the information supplied to search engines; they do not establish ranking, traffic, indexing or rich-result eligibility.

Search Console access, query/ranking data, backlinks and current real-user Core Web Vitals were not available in this review. No traffic or ranking gain is claimed. Request recrawling through the owner's Search Console after release if that property is configured. Keep free-tier hosting; no paid analytics or services are introduced.

## Release checks

Use typecheck, lint, tests, production build and the existing route/metadata/link smoke script. Check desktop, tablet, 390px and 320px rendering, project index/order, all story routes, next-story links and contact navigation. Verify deployed canonicals, robots, sitemap, JSON-LD, social images, favicon and 404s. Review all public evidence URLs. Record the release in the PR.
