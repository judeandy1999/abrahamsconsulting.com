# Phase 2 Context - Core Conversion Journeys

## Goal

Users can immediately understand the company offer and navigate high-intent service and procurement pages with a clear consultation path.

## Requirement Mapping

- `IA-01`: User can understand the company's value proposition within the Home page hero and primary sections.
- `IA-02`: User can navigate to service/capability pages that clearly explain consulting, staffing, and niche solution offerings.
- `IA-03`: User can discover contract vehicles and procurement-relevant capabilities from primary navigation and internal links.
- `LEAD-01`: User can reach a single clear consultation CTA from the Home page and key service pages.

## Decisions

- `D-01` (Locked): Deliver Phase 2 as vertical conversion slices using the existing static-first App Router baseline from Phase 1.
- `D-02` (Locked): Home, Services, and Contracts journeys must be content-driven through typed modules and validated loaders (no ad-hoc hardcoded branch logic).
- `D-03` (Locked): Introduce one explicit consultation route and reuse that single destination for CTA links from Home and service/capability pages.
- `D-04` (Locked): Prioritize IA and conversion navigation for `IA-01`, `IA-02`, `IA-03`, and `LEAD-01`; do not expand into Phase 3 form-submission scope.

## Deferred Ideas (Do Not Plan in Phase 2)

- Contact form submission workflow and lead delivery integrations (`LEAD-02`, `LEAD-03`) - Phase 3 scope.
- Trust proof pages and case snapshot publishing (`TRST-*`) - Phase 3 scope.
- Full launch SEO/performance/a11y hardening (`SEO-*`, `PERF-01`, `A11Y-01`) - Phase 4 scope.
- CMS migration, multilingual support, and heavy martech integrations - roadmap out of scope for v1 MVP.

## Claude's Discretion

- Choose whether consultation CTA copy is action-first ("Book Consultation") or intent-first ("Request Consultation"), as long as destination is consistent per `D-03`.
- Choose whether service capability detail pages are nested under `/services/[slug]` or route-grouped equivalents, as long as discoverability and internal linking satisfy `IA-02` and `IA-03`.
- Choose concise procurement language structure on contracts/service pages while preserving requirement-level clarity for enterprise/government buyers.

## Source Audit (Multi-Source Coverage)

| Source | Item | Status | Covered By |
|--------|------|--------|------------|
| GOAL | Immediate value proposition clarity | COVERED | `02-02-PLAN.md` |
| GOAL | High-intent service + procurement navigation | COVERED | `02-03-PLAN.md` |
| GOAL | Single clear consultation path | COVERED | `02-01-PLAN.md`, `02-02-PLAN.md`, `02-03-PLAN.md` |
| REQ | `IA-01` | COVERED | `02-02-PLAN.md` |
| REQ | `IA-02` | COVERED | `02-03-PLAN.md` |
| REQ | `IA-03` | COVERED | `02-01-PLAN.md`, `02-03-PLAN.md` |
| REQ | `LEAD-01` | COVERED | `02-01-PLAN.md`, `02-02-PLAN.md`, `02-03-PLAN.md` |
| RESEARCH | Conversion core sequence (Home -> Services -> Contracts -> Contact path) | COVERED | `02-01-PLAN.md`, `02-02-PLAN.md`, `02-03-PLAN.md` |
| RESEARCH | Preserve static-first route behavior for marketing pages | COVERED | All Phase 2 plans |
| RESEARCH | Keep code-managed typed content for v1 speed/quality | COVERED | `02-01-PLAN.md` |
| CONTEXT | `D-01` vertical conversion slices on Phase 1 baseline | COVERED | All Phase 2 plans |
| CONTEXT | `D-02` typed content-driven journeys | COVERED | `02-01-PLAN.md`, `02-02-PLAN.md`, `02-03-PLAN.md` |
| CONTEXT | `D-03` single consultation CTA destination | COVERED | `02-01-PLAN.md`, `02-02-PLAN.md`, `02-03-PLAN.md` |
| CONTEXT | `D-04` keep scope to IA/CTA, not form backend | COVERED | All Phase 2 plans |

No uncovered source items were detected.
