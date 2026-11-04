# Initial release record

- Application source: `ee5ba03e48b54673e0fb5211e5d77ab12c444e33`.
- GitHub Verify: https://github.com/syahmiharith/portfolio/actions/runs/41664044468 — passed, including production smoke.
- Vercel project: `prj_A7glZO2T9IRs20xtP7zHMLnknJH0`.
- Final source deployment: `dpl_DEi1PbMi76vXMcyiwjpnCu37Ct5x`.
- Production alias: https://portfolio-syahmiharith.vercel.app.
- Production access was approved and made public on 4 November 2026; previews remain SSO-protected.
- GitHub integration is not connected; source was uploaded through the authenticated Vercel connector. A repository push alone does not deploy this project yet.
- GitHub profile name, bio, README and pin order verified. Selected pins: SplitFlow, Receipt-to-Form, Inventory Request System; Career-Ops retained fourth.
- Human comprehension study remains pending. See `design-qa.md` and `docs/OPERATIONS.md`.

## Navigation and minimal-copy release — 4 November 2026

Deployment: `dpl_F6w3LzhrESiVR8geaoTnkhSggmXJ`.

- Fixed project links extending below a short desktop viewport. Tested at 900 × 400 CSS pixels: index bottom 376px.
- Replaced intersection-only scroll tracking with animation-frame-coalesced scroll, resize and history-restoration updates; case-study selection follows the current route.
- Added a visible mobile active state and larger navigation/action targets.
- Removed the repeated hero summary, chapter titles, education introduction, homepage screenshot captions, duplicate README links and repetitive release commentary.
- Added deployed checks for every internal href/fragment and unknown project routes.
- Browser checks: all three stories, next-story navigation, name-to-home, Home, About, Contact, project anchors, back-to-top, Back/Forward, keyboard skip, reduced motion, 320px mobile and short desktop. All three live-product links and LinkedIn opened their intended destinations.
- External source, evidence and contribution URLs returned HTTP 200. No demo data was changed.
- Lint, type checking, unit tests and production build passed.

Automatic Git deployments and the five-visitor comprehension study remain pending; neither blocks opening the current public release.

Public release verification: final deployment READY; unauthenticated production smoke passed all four pages, fragments, sitemap, robots, social image and both 404 routes. GitHub Verify passed for `e0e4ab0`: https://github.com/syahmiharith/portfolio/actions/runs/41775018122.

Lighthouse 13.6.0 on 2026-11-04T04:45:35.093Z: **97 performance / 100 accessibility**, LCP 2.3s, TBT 80ms, CLS 0. Public production URL; mobile emulation; simulated throttling, 4× CPU slowdown. This is a lab run, not a real-user guarantee.

## Evidence-focused editorial review — 4 November 2026

Deployment: `dpl_Gjr8NaX1J7BugcAV4wVhiTgcaR1S`.

Replaced general project slogans with concrete user tasks. Removed the generic About paragraph and redundant processor/home icon. Rewrote stories around implementation decisions and completed maintenance changes instead of future plans. The homepage remains free of extra evidence badges and explanatory subtext.

Source review:
- SplitFlow commit `929425f`: disputed claims included in readiness; financial-invariant regression cases.
- Receipt-to-Form commit `556d3d9`: dependency upgrade with nullable/malformed receipt regression cases.
- Inventory commit `00d4dac`: fulfillment service and integration tests; no stock reservation on approval, transactional rollback on insufficient stock. Commit `11393eb`: Ubuntu 24.04 CI pin for Playwright.

These are inspected source changes, not claims that the product test suites were rerun or that new live end-to-end flows were verified. Product capture dates remain unchanged. Long-term production operation and adoption remain unproven.

Portfolio lint, unit tests, production build and type checking passed. All new evidence links returned HTTP 200.
