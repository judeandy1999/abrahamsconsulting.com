# Phase 1 Context - Platform MVP Foundation

## Goal

Users can reliably access a fast static-first marketing site foundation while the team can safely update content through validated code workflows.

## Requirement Mapping

- `PLAT-01`: Public site is reachable through stable Vercel preview and production deployment flows.
- `PLAT-02`: Core marketing routes use a static-first rendering strategy for fast load and navigation.
- `PLAT-03`: Content changes happen in code-managed files and fail fast on schema/type validation.

## Decisions

- `D-01` (Locked): Use Next.js App Router on Vercel as the deployment/runtime baseline.
- `D-02` (Locked): Implement static-first rendering (`SSG/ISR`) as the default behavior for core marketing pages.
- `D-03` (Locked): Keep v1 content code-managed and enforce typed schema validation before deploy.
- `D-04` (Locked): Keep implementation in vertical MVP slices with practical, executable tasks.

## Deferred Ideas (Do Not Plan in Phase 1)

- Full CMS adoption.
- Multilingual rollout.
- Heavy martech/CRM automation integration.
- Animation-heavy UI that risks Core Web Vitals.

## Claude's Discretion

- Pick practical CI command structure (`lint`, `typecheck`, and validation script) as long as it enforces pre-deploy quality gates.
- Choose whether content validation runs on `prebuild`, dedicated `npm run content:check`, or both.
- Choose folder-level naming details (`src/content`, `lib/content`) while preserving typed content pipeline semantics.

## Source Audit (Multi-Source Coverage)

| Source | Item | Status | Covered By |
|--------|------|--------|------------|
| GOAL | Reliable access via preview + production | COVERED | `01-01-PLAN.md` |
| GOAL | Fast static-first marketing foundation | COVERED | `01-02-PLAN.md` |
| GOAL | Safe validated content updates | COVERED | `01-03-PLAN.md` |
| REQ | `PLAT-01` | COVERED | `01-01-PLAN.md` |
| REQ | `PLAT-02` | COVERED | `01-02-PLAN.md` |
| REQ | `PLAT-03` | COVERED | `01-03-PLAN.md` |
| RESEARCH | App Router marketing shell + Vercel preview/prod flow | COVERED | `01-01-PLAN.md` |
| RESEARCH | Static/ISR-first routing + metadata baseline | COVERED | `01-02-PLAN.md` |
| RESEARCH | Typed content modules + `zod` validation path | COVERED | `01-03-PLAN.md` |
| CONTEXT | `D-01` Next.js on Vercel | COVERED | `01-01-PLAN.md` |
| CONTEXT | `D-02` static-first rendering | COVERED | `01-02-PLAN.md` |
| CONTEXT | `D-03` typed code-managed content | COVERED | `01-03-PLAN.md` |
| CONTEXT | `D-04` vertical MVP sequencing | COVERED | All plans |

No uncovered source items were detected.
