# Phase 3 Context - Trust and Lead Capture

## Goal

Users can evaluate credibility signals and submit qualified consultation inquiries through a complete working contact path.

## Requirement Mapping

- `TRST-01`: User can view certifications and qualification signals (including MWBE-related credentials) on dedicated trust content.
- `TRST-02`: User can review at least two publishable project/case snapshots with outcomes-oriented summaries.
- `TRST-03`: User can see approved client/partner trust indicators without blocking page performance.
- `LEAD-02`: User can submit a short contact form with essential qualification fields and receive successful submission confirmation.
- `LEAD-03`: Internal team can receive lead submissions reliably through the initial email-based routing path.

## Decisions

- `D-01` (Locked): Keep trust and lead-capture content code-managed with typed schema validation, extending existing `zod`-validated content patterns.
- `D-02` (Locked): Add a dedicated trust route that publishes certifications plus at least two outcomes-focused case snapshots.
- `D-03` (Locked): Render approved client/partner trust indicators using performance-safe static assets and static-first route behavior.
- `D-04` (Locked): Use canonical `/consultation` as the qualified lead intake page, upgraded to a working form with explicit success confirmation.
- `D-05` (Locked): Implement a server-side lead submission endpoint with validation, anti-spam controls, and email-based delivery to the internal inbox.

## Deferred Ideas (Do Not Plan in Phase 3)

- CRM or marketing automation syncing for submitted leads.
- Multi-step/conditional lead funnels and chatbot-assisted qualification.
- Full SEO/a11y/performance hardening gates (`SEO-*`, `PERF-01`, `A11Y-01`) reserved for Phase 4.
- CMS migration, multilingual rollout, and heavy martech scripting.

## Claude's Discretion

- Choose concrete trust-page information architecture (section ordering and labels) as long as certifications, case snapshots, and partner indicators are all explicit and scannable.
- Choose the email provider integration path for `LEAD-03` (SDK or direct HTTP API) as long as delivery is server-side, validated, and environment-configured.
- Choose contact-form field names and validation details as long as essential qualification intent is preserved and submission feedback is deterministic.

## Source Audit (Multi-Source Coverage)

| Source | Item | Status | Covered By |
|--------|------|--------|------------|
| GOAL | Credibility signals are visible and evaluable | COVERED | `03-01-PLAN.md`, `03-02-PLAN.md` |
| GOAL | Qualified consultation inquiry path is complete and working | COVERED | `03-01-PLAN.md`, `03-03-PLAN.md` |
| REQ | `TRST-01` | COVERED | `03-01-PLAN.md`, `03-02-PLAN.md` |
| REQ | `TRST-02` | COVERED | `03-01-PLAN.md`, `03-02-PLAN.md` |
| REQ | `TRST-03` | COVERED | `03-01-PLAN.md`, `03-02-PLAN.md` |
| REQ | `LEAD-02` | COVERED | `03-01-PLAN.md`, `03-03-PLAN.md` |
| REQ | `LEAD-03` | COVERED | `03-03-PLAN.md` |
| RESEARCH | Trust content includes certifications, case snapshots, and approved logos | COVERED | `03-01-PLAN.md`, `03-02-PLAN.md` |
| RESEARCH | Lead endpoint uses server-side validation and anti-spam controls | COVERED | `03-03-PLAN.md` |
| RESEARCH | Keep static/ISR-first rendering for marketing pages | COVERED | `03-02-PLAN.md`, `03-03-PLAN.md` |
| CONTEXT | `D-01` typed code-managed content | COVERED | `03-01-PLAN.md` |
| CONTEXT | `D-02` dedicated trust route with case snapshots | COVERED | `03-02-PLAN.md` |
| CONTEXT | `D-03` performance-safe trust indicators | COVERED | `03-01-PLAN.md`, `03-02-PLAN.md` |
| CONTEXT | `D-04` canonical `/consultation` working form | COVERED | `03-03-PLAN.md` |
| CONTEXT | `D-05` server-side validated email lead delivery | COVERED | `03-03-PLAN.md` |

No uncovered source items were detected.
