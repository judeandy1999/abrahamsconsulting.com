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

- `D-01` (Locked): Maintain a validated launch SEO registry in `src/content/seo.ts` with lookups in `lib/seo/page-seo.ts` so every launch route gets intent-aligned title, description, and canonical metadata via `buildMarketingMetadata`.
- `D-02` (Locked): Use `lib/seo/routes.ts` as the single launch route registry for sitemap generation, robots linkage, and internal-link contract tests (static paths plus `/services/{slug}` from typed content).
- `D-03` (Locked): Emit JSON-LD for `Organization` (marketing layout), `Service` (service detail), and `BreadcrumbList` (nested launch routes), generated from typed content and canonical URLs only.
- `D-04` (Locked): Enforce launch CWV budgets of **LCP ≤ 2.5s**, **INP ≤ 200ms**, and **CLS ≤ 0.1** at p75 using `@vercel/speed-insights` plus Lighthouse CI (`@lhci/cli`) on primary launch routes in GitHub Actions.
- `D-05` (Locked): Meet WCAG 2.2 AA-oriented launch behavior: skip link to main content, visible `:focus-visible` styles, labeled consultation form controls, and `eslint-plugin-jsx-a11y` guardrails with Lighthouse accessibility budgets.
- `D-06` (Locked): Preserve static-first marketing routes (`export const dynamic = "force-static"`) while adding SEO, performance, and accessibility hardening — no runtime data fetches on launch pages.

## Deferred Ideas (Do Not Plan in Phase 4)

- Full Playwright conversion E2E suite beyond launch-quality smoke checks.
- `@vercel/analytics` product analytics rollout (not mapped to Phase 4 requirements).
- URL migration redirect map automation (no legacy host cutover artifact in this repo yet).
- Multilingual SEO, CMS editorial workflows, CRM/martech integrations.
- Animation-heavy UI or autoplay media that would violate performance budgets.

## Claude's Discretion

- Choose whether `/consultation/success` is indexable or `noindex` as long as the decision is documented in plan SUMMARY and sitemap/registry stay consistent.
- Choose exact Lighthouse CI collection settings (runs per URL, start-server wait) as long as CI enforces STACK CWV budgets on `/`, `/services`, `/contracts`, `/trust`, `/consultation`.
- Choose minor global CSS token names for focus/skip-link styling as long as contract tests and Lighthouse accessibility budgets pass.

## Source Audit (Multi-Source Coverage)

| Source | Item | Status | Covered By |
|--------|------|--------|------------|
| GOAL | Launch SEO/performance/accessibility quality bars met | COVERED | `04-01`–`04-04` |
| REQ | `SEO-01` | COVERED | `04-01-PLAN.md` |
| REQ | `SEO-02` | COVERED | `04-02-PLAN.md` |
| REQ | `SEO-03` | COVERED | `04-02-PLAN.md` |
| REQ | `PERF-01` | COVERED | `04-03-PLAN.md` |
| REQ | `A11Y-01` | COVERED | `04-04-PLAN.md` |
| RESEARCH | Metadata/sitemap/robots/CWV/accessibility release gates | COVERED | All plans |
| RESEARCH | `@vercel/speed-insights` for field CWV | COVERED | `04-03-PLAN.md` |
| RESEARCH | CWV thresholds LCP/INP/CLS at p75 | COVERED | `04-03-PLAN.md` |
| RESEARCH | WCAG 2.2 AA checks before final QA | COVERED | `04-04-PLAN.md` |
| CONTEXT | `D-01` typed SEO registry | COVERED | `04-01-PLAN.md` |
| CONTEXT | `D-02` launch route registry | COVERED | `04-02-PLAN.md` |
| CONTEXT | `D-03` JSON-LD | COVERED | `04-02-PLAN.md` |
| CONTEXT | `D-04` Speed Insights + Lighthouse CI | COVERED | `04-03-PLAN.md` |
| CONTEXT | `D-05` a11y shell and form | COVERED | `04-04-PLAN.md` |
| CONTEXT | `D-06` static-first preserved | COVERED | `04-02-PLAN.md`, `04-03-PLAN.md`, `04-04-PLAN.md` |

No uncovered source items were detected.
