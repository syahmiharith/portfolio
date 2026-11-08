# Design and release QA

## Current release: 9 November 2026

**Public release result: passed.** [PR #4](https://github.com/syahmiharith/portfolio/pull/4) added the visual case studies and compact public contribution feed; [PR #5](https://github.com/syahmiharith/portfolio/pull/5) corrected desktop portrait spacing. Production revision `ad9b8ebc4f8b5bef61fecb05587eebfa2a6d9330`, deployment `dpl_9vKKJ7W737Y6aFowCUFtV1M1W48W`, was Ready and verified on the public alias.

- All three cases render three decisions paired with real product captures. All nine image URLs, section fragments, search metadata, sitemap, favicon, social image and unknown-route 404s pass live smoke checks.
- Narrow mobile layouts were inspected at actual CSS widths of 269px and 327px; the tablet check used 645px after browser zoom. No horizontal overflow. The screenshot follows the summary before longer rationale on mobile. Desktop portrait explanations retain 32px gaps.
- The public contribution endpoint returned `source: github` with the two verified external merged PRs. The live page showed automatic status, 85ms stagger delays and no obsolete contribution rows.
- A local browser response fixture added a new contribution on the next scheduled foreground refresh without a page reload. Interception was cleared and real data restored. Reduced motion disables the entrance animation.
- Typecheck, lint, ten tests, production build and both CI jobs passed. No adoption, time-saving, traffic, ranking or new Lighthouse result is claimed.

References and operational behavior: [visual case studies and contribution feed](docs/VISUAL-CASE-STUDIES-2026-11-09.md).

## Initial release record (historical)

The remaining sections describe the initial implementation. Their production-access blocker and original contribution layout are superseded by the current release above.

**Initial local visual result: passed with the documented differences below.**

## Visual authority and method

Approved Option 1: `exec-1ff8966c-b849-41e7-a03c-5a4ff430f05c.png` supplied in the implementation request. Coordinated lower-page, case-study and mobile references were generated before implementation using Product Design and Frontend App Builder workflows.

IAB rendered review at **1487 × 1058 CSS pixels**, with browser scale 1.19. Initial native captures were clipped by the browser pane; they were discarded. The final CDP capture used a 1770 × 1259 clip scaled by 1/1.19 to normalize density. See [final homepage](docs/qa/home-desktop.png) and [reference/render comparison](docs/qa/comparison.png). Both images were opened together for the final visual inspection.

## Fidelity ledger

| Surface | Finding and correction | Final assessment |
| --- | --- | --- |
| Typography | Initial Instrument Serif rendering was narrower than the generated target. Adjusted editorial optical width, headline line-height and flagship title width. Locally bundled Instrument Serif and Inter load through `next/font/local`. | Two-line headline and hierarchy retained; actual font outlines differ from generated lettering. |
| Layout and rhythm | Corrected browser scale before judging proportions; tightened the first chapter’s bottom space and lower sections. | 30.6% fixed rail, aligned content margin, generous project preview, fine chapter rules; next chapter visible in the reference viewport. |
| Color | White canvas, near-black headings, gray rules. Initial reveal opacity reduced contrast. Changed reveal start opacity from .6 to .95. | No decorative colored panels; blue belongs to product imagery and interactive focus states. Accessibility audit 100. |
| Images | Replaced all generated product interfaces with actual live captures. Generated the ribbon separately, then optimized it to WebP. Corrected preview dimensions and story cropping. | No generated product UI published; previews have descriptive alternatives and static-preview captions. |
| Copy | Compared the headline, identity, hero summary, first project description, navigation and three action labels to the authority. | Above-fold copy preserved. Added a capture-date/static-preview caption to make evidence unambiguous. |
| Icons and controls | Replaced the initial scan icon with a CPU-style mark matching the reference. Checked arrows, fine button rules and focus outlines. | Shared icon treatment and visible keyboard focus. |
| Lower sections | Initial About/contact treatment was more expansive than the continuation reference. Shortened About, removed extra labels, restored a single-line desktop contact heading. | Ruled contribution rows, concise education/availability, direct LinkedIn contact. |

Intentional content differences: case studies use truthful current evidence and limitations rather than the generated concept’s hypothetical capabilities. Product screenshots necessarily differ from concept previews. No adoption, accuracy, uptime or improvement metrics were invented. Case studies expand beyond the visual template to include role, limitations and maintenance context.

## Interaction and responsive checks

- IAB: desktop 1487px, tablet 768px, mobile 390px, narrow mobile 320px; no horizontal overflow in the inspected routes.
- Mobile: compact identity/index, stacked project copy and preview, all three project actions available.
- Clicked project index, confirmed fragment and active state; checked direct Receipt-to-Form fragment, Inventory navigation and browser Back returning to Receipt-to-Form.
- Opened case studies from homepage; inspected rendered story headings, evidence, workflow and canonical metadata.
- Keyboard: visible skip-link focus; Enter moves focus to `main` after adding `tabIndex=-1`.
- Reduced motion emulation: artwork transform `none`, all lower-section opacity `1`, animation `none`, document scroll behavior `auto`.
- Inspected the useful 404 and its return-to-work link.
- All canonical product, code and evidence links returned HTTP 200. LinkedIn destination matches the public GitHub profile; it can require login.

## Build and performance evidence

- TypeScript, ESLint, registry/media/story tests, and production build passed.
- All three MDX stories and the homepage are statically generated.
- Production smoke: homepage, three stories, sitemap, robots and OG image returned 200; unknown page returned 404. Smoke checks reject redirects to another origin, including a Vercel login page. CI runs the production smoke script after building.
- Final local mobile Lighthouse **95 performance / 100 accessibility**, LCP 2.8s, TBT 110ms, CLS 0. Version 13.6.0; production Next server on localhost; mobile 412 × 823, simulated mobile network, 4× CPU slowdown. Full conditions: [Lighthouse record](docs/qa/lighthouse.json). These are lab results, not real-user or deployed-site measurements.
- Dependency review: the image processor was updated to patched sharp 0.35.5. Remaining npm audit findings were moderate development-tool dependency findings; no forced major downgrade was applied.

## Release gates

- GitHub repository created; profile README and pins aligned to SplitFlow, Receipt-to-Form, Inventory Request System, followed by the preserved upstream contribution.
- Vercel source deployment builds successfully, but production currently redirects to Vercel login. Automatic approval review rejected changing SSO protection to previews only without explicit owner approval. No workaround was applied.
- Vercel’s GitHub integration could not access the new repository, and the local Vercel CLI is logged out. Initial release therefore used the connected Vercel source-upload API. Automatic push deployments remain unconnected.
- Five unfamiliar visitors: **not conducted**. Protocol is in [operations](docs/OPERATIONS.md); no agent simulation is counted as participant evidence.
- After access approval: verify public routes in IAB, repeat deployed smoke and mobile Lighthouse, then add the public portfolio link to the GitHub profile.
