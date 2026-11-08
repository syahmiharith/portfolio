# Visual case studies and public contribution feed

## Design decisions

Keep the existing editorial type, ribbon/sidebar, routes, product status and evidence boundaries. The target is the shared case-study content and, following the user's additional instruction, the homepage contribution section.

The selected Mobbin direction pairs a focused product view with a short explanation. [Framer](https://mobbin.com/sites/sections/16fc8417-50fc-445e-8cca-e87fc08073ce) and [Better Stack](https://mobbin.com/sites/sections/7295b73f-1281-49d3-99dd-3701cae70072) show this structure. Adopt the screen/explanation grouping, not their colors, backgrounds, typefaces or cards. The brief section navigation and exact case-study wording are implementation judgments.

Three decisions per project pair real captured interfaces with rationale. Screens remain available at full size, with meaningful alternative text. The workflow, engineering details, verification limits and existing source links remain readable in the page. Narrow layouts stack the rationale and image.

For contributions, [GitHub's compact supporting links](https://mobbin.com/sites/sections/d62bf220-9cee-4179-b2d2-9f7d19ad0586) are a single reference example. Replace the standalone large heading/rows with a smaller supporting list inside About. Keep both verified merged PRs. The staggered upward entrance is the user's requested animation, not a pattern inferred from Mobbin. Each real item enters once, with reduced-motion support and no looping or inflated counts.

## Product media

Nine captures were taken from the public working products on 9 November 2026 using synthetic samples/seeded visitor data. They are interface captures, not generated images. Framing was inspected after export. The Inventory receipt form is shown before submission; it is not evidence of a completed delivery. Receipt batch samples are ready; failed-only recovery is supported by linked release/tests, not fabricated in the capture. SplitFlow remains a public prototype with no bank verification.

## Automatic contributions

`/api/contributions` reads the public GitHub search API for merged PRs authored by `syahmiharith`, excluding repositories owned by that account. It accepts explicit merge dates, deduplicates URLs, validates the author/destination and sorts by merge date. Only a bounded recent list is rendered; the GitHub search link opens the full matching history.

The endpoint and upstream response revalidate after 60 seconds. Visible foreground feeds refresh each minute, so GitHub indexing and cache revalidation can delay new entries. This is automatic polling, not an instantaneous webhook. No token, scheduled job, database, new dependency or paid service is needed. [GitHub search API documentation](https://docs.github.com/en/rest/search/search#search-issues-and-pull-requests) describes its indexing/search limits.

On failures, the endpoint serves the two public PRs verified on 9 November; an already-open page retains its last successful result and marks the feed unavailable. Successful refresh restores automatic status. The page also has readable verified entries without JavaScript.

## Verification

Typecheck, lint, tests and production build cover the release. Contribution tests exercise newly merged older PRs, duplicates, open PRs, other authors, owned repositories, unsafe destinations, incomplete search results, rate limiting and network failure. Route smoke checks include every case, section target, all nine source images, metadata, sitemap, favicon, the feed and unknown-route 404s. Browser checks cover the case-study layout, full-size links, narrow widths, actual feed synchronization and reduced motion. Deployment verification is recorded in the PR.
