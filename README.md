# Software for the everyday.

Zulsyahmi Zulkefli’s portfolio. Selected work, live product captures, and inspectable decisions.

## Development

Node.js 24, npm. Run `npm ci`, then `npm run dev`. Production: `npm run build` and `npm start`.

`npm run typecheck`, `npm run lint`, and `npm test` check the implementation. `npm run check:links` checks public evidence links; `SMOKE_URL=https://your-deployment npm run check:links` checks deployed routes. LinkedIn may reject automated clients and is checked manually.

## Structure

- `lib/projects.ts`: canonical project order, names, links, media, status and evidence dates.
- `lib/case-screens.ts`: captured product screens, dimensions and descriptions.
- `lib/contributions.ts` and `app/api/contributions/route.ts`: public merged-PR feed, validation and verified fallback.
- `content/*.mdx`: static case studies; preserve attribution and distinguish observed behavior from source inspection.
- `components/`: shared navigation, project actions and media.
- `app/globals.css`: typography, shared tokens, responsive layout and reduced-motion behavior.
- `docs/OPERATIONS.md`: evidence, release and rollback procedure.

## Design

The approved Mecha-inspired direction uses a white canvas, editorial Instrument Serif headings, Inter controls, a persistent index and original folded-ribbon artwork. The reference informed composition; this is an independent implementation. Fonts are bundled locally through Fontsource. Product screenshots are actual captures, never interactive app facsimiles.

No analytics, tracking, account system or contact form is required. Contact goes to LinkedIn. Project origins remain in their respective repositories.

Case-study references, media scope and contribution refresh behavior: [visual case studies and contribution feed](docs/VISUAL-CASE-STUDIES-2026-11-09.md). Current release evidence: [design QA](design-qa.md).
