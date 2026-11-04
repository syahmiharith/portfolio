# Maintaining the portfolio

## Evidence refresh

1. Open the current deployed product. Record date, URL, deployed revision if available, browser and the exact path exercised.
2. Run the relevant journey using safe demo data. A visible entry page does not verify downstream extraction, export, payment, persistence or fulfillment.
3. Capture a real product screen without personal data. Preserve image dimensions and replace the appropriate file in `public/images`.
4. Update `lib/projects.ts` and the MDX together. Preserve project origins and attribution. Distinguish browser observations, source inspection and measured results.
5. Include only confirmed releases from other chats. Never turn a planned capability into a shipped claim. Keep unresolved limitations explicit in the story.
6. Review every external link and the mobile image crop. Date all evidence.

## Release

The source repository is `syahmiharith/portfolio`. The initial Vercel release was uploaded through the authenticated Vercel connector because the GitHub integration could not access the new repository. Automatic push deployments are **not connected yet**. Until connected, deploy the reviewed source through Vercel and record its Git revision and deployment ID. Set `NEXT_PUBLIC_SITE_URL` to the stable production origin before building if it differs from the default. Check canonical metadata, sitemap and social image against that origin.

Initial project: `prj_A7glZO2T9IRs20xtP7zHMLnknJH0`, team `syahmiharith`. Production alias: `https://portfolio-syahmiharith.vercel.app`. On 4 November 2026, the owner approved public production access. Vercel SSO protection now applies to previews only. Do not treat a redirect to a login page as a successful smoke test.

Run typecheck, lint, tests, production build and deployed smoke checks. Review desktop (1487×1058), tablet (768px), mobile (390px and 320px), keyboard focus, project hashes, Back, reduced motion, 404 and all three product actions. Capture the rendered portfolio and compare it with the accepted reference. Record actual outcomes in `design-qa.md`.

Lighthouse: use a production build with mobile emulation, record tool version, throttling, environment and run date. Target performance and accessibility ≥95. A score is a lab result, not a real-user guarantee.

## Rollback

Use Vercel’s previous known-good production deployment to roll back immediately; then revert the regression in Git and run the checks before redeploying. Confirm the root route, three stories and product links after rollback. Keep the previous media and evidence claims in Git history.

## Human comprehension check — pending

Recruit five unfamiliar visitors; do not coach them. Ask each to find the flagship, open its demo, explain one meaningful product decision and locate contact. Record each task independently and the point of confusion. Acceptance: at least four of five complete the whole sequence without guidance. This cannot be replaced by automated or simulated agents. No participant results have been collected.
