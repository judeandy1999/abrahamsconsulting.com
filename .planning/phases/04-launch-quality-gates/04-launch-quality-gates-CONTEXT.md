# Phase 4 Context - Launch Quality Gates

## Goal

Users and search engines experience production pages that meet launch SEO, performance, and accessibility quality bars.

## Requirement Mapping

- `SEO-01`: User can access pages with complete technical metadata (title, description, canonical) aligned to each page intent.
- `SEO-02`: Search engines can crawl and index the site via valid `sitemap.xml`, `robots.txt`, and clean internal linking.
- `SEO-03`: Search engines can interpret structured business context via valid Organization/Service/Breadcrumb schema where applicable.
- `PERF-01`: Users on real devices experience launch pages that meet agreed Core Web Vitals targets (LCP, INP, CLS) at p75.
- `A11Y-01`: Keyboard and assistive-technology users can navigate primary pages and complete the contact form with WCAG 2.2 AA-aligned behavior.

## Decisions

- `D-01` (Locked): Extend the existing typed content pipeline with validated per-route SEO definitions (title, description, path) as the single source of truth for metadata generation.
- `D-02` (Locked): Use one centralized launch route registry to drive sitemap generation, crawl contract tests, and internal-link coverage checks so new routes cannot ship without SEO discoverability updates.
- `D-03` (Locked): Generate JSON-LD Organization, Service, and BreadcrumbList markup from the same typed marketing content and SEO registry used for metadata (no duplicate business facts in page files).
- `D-04` (Locked): Enforce launch CWV thresholds at p75 of LCP <= 2.5s, INP <= 200ms, and CLS <= 0.1 per `.planning/research/STACK.md`, validated through Lighthouse CI budgets on primary launch routes plus production RUM via `@vercel/speed-insights`.
- `D-05` (Locked): Treat WCAG 2.2 AA as a launch gate with automated checks on primary routes and the consultation form path, plus explicit keyboard/focus/skip-link behavior in the marketing shell.
- `D-06` (Locked): Keep marketing routes static-first; performance and accessibility work must not introduce request-time rendering or heavy client bundles on primary pages.

## Deferred Ideas (Do Not Plan in Phase 4)

- Post-launch 30–90 day monitoring cadence and optimization backlog (research Phase 5 scope).
- Full Playwright conversion E2E suite beyond launch-gate smoke checks.
- CRM/marketing automation, CMS migration, multilingual rollout, and heavy martech scripting.
- Capability finder, download center, and conversion experimentation (`GROW-*` requirements).

## Claude's Discretion

- Choose exact Lighthouse CI route list and budget numeric thresholds as long as they map to STACK CWV targets and cover Home, Services, Contracts, Trust, and Consultation paths.
- Choose whether JSON-LD components are colocated in `lib/seo/json-ld.ts` or split by schema type, as long as all schema output is generated from shared typed sources per `D-03`.
- Choose minimal a11y test strategy (source contracts + Lighthouse accessibility category vs adding axe Playwright) as long as `A11Y-01` keyboard and form completion behaviors are objectively gated in CI.

## Current Baseline (Phases 1–3)

- `lib/seo/metadata.ts` provides `buildMarketingMetadata` with canonical and Open Graph fields; only a subset of launch routes export page metadata today.
- `app/sitemap.ts` and `app/robots.ts` exist but sitemap omits `/services/[slug]` detail URLs and metadata coverage is incomplete on routes such as `/about`, `/services`, `/contracts`, and service detail pages.
- No JSON-LD (`application/ld+json`) is emitted yet.
- CI runs lint, typecheck, and build only; no Lighthouse or accessibility performance gates.
- `@vercel/speed-insights` is not installed; consultation form has labels but shell lacks skip-link and consistent focus-visible treatment.

## Source Audit (Multi-Source Coverage)

| Source | Item | Status | Covered By |
|--------|------|--------|------------|
| GOAL | Launch SEO, performance, and accessibility quality bars | COVERED | `04-01` through `04-04` |
| REQ | `SEO-01` | COVERED | `04-01-PLAN.md` |
| REQ | `SEO-02` | COVERED | `04-02-PLAN.md` |
| REQ | `SEO-03` | COVERED | `04-02-PLAN.md` |
| REQ | `PERF-01` | COVERED | `04-03-PLAN.md` |
| REQ | `A11Y-01` | COVERED | `04-04-PLAN.md` |
| RESEARCH | Metadata/canonical/sitemap/robots consistency audit | COVERED | `04-01-PLAN.md`, `04-02-PLAN.md` |
| RESEARCH | CWV budgets + Speed Insights RUM | COVERED | `04-03-PLAN.md` |
| RESEARCH | WCAG 2.2 AA checks before launch | COVERED | `04-04-PLAN.md` |
| RESEARCH | JSON-LD from typed content source of truth | COVERED | `04-02-PLAN.md` |
| CONTEXT | `D-01` typed SEO registry | COVERED | `04-01-PLAN.md` |
| CONTEXT | `D-02` centralized route registry | COVERED | `04-02-PLAN.md` |
| CONTEXT | `D-03` shared-source JSON-LD | COVERED | `04-02-PLAN.md` |
| CONTEXT | `D-04` CWV thresholds + RUM | COVERED | `04-03-PLAN.md` |
| CONTEXT | `D-05` WCAG 2.2 AA gates | COVERED | `04-04-PLAN.md` |
| CONTEXT | `D-06` static-first preservation | COVERED | All Phase 4 plans |

No uncovered source items were detected.
