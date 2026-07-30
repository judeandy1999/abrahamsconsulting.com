---
gsd_state_version: 1.0
milestone: v1.5
milestone_name: Site Hardening & SEWP Compliance
status: ready
stopped_at: Phase 12 planned — ready to execute
last_updated: "2026-07-30T14:25:00Z"
last_activity: 2026-07-30
progress:
  total_phases: 3
  completed_phases: 2
  total_plans: 5
  completed_plans: 3
  percent: 67
---

# Project State

## Project Reference

See: .planning/PROJECT.md (updated 2026-07-30)

**Core value:** Deliver a fast, SEO-strong website that clearly communicates offerings and drives high-intent consultation leads.
**Current focus:** Phase 12 — SEWP Compliance DOM & Dead Code

## Current Position

Phase: 12 of 12 (SEWP Compliance DOM & Dead Code) — planned
Plan: 01 of 02
Status: Phase 12 plans created — ready to execute
Last activity: 2026-07-30 — Created 12-01 and 12-02 PLAN.md (always-mount panels + dead-code cleanup)

Progress: [██████████] 67% phases (2/3); Phase 12 planned (0/2 plans executed)

## Performance Metrics

| Phase | Plan | Duration | Tasks | Files | Date |
|-------|------|----------|-------|-------|------|
| 10 | 01 | 4min | 2 | 5 | 2026-07-30 |
| 10 | 02 | 12min | 3 | 3 | 2026-07-30 |
| 11 | 01 | 9min | 2 | 5 | 2026-07-30 |

## Accumulated Context

### Decisions

Decisions are logged in PROJECT.md Key Decisions table. Recent for v1.5:

- SEWP tabs keep UX; all panels stay in DOM (CSS hide) for PMO fetch skim
- Canonical address is 30 Broad Street
- Remove Privacy Policy link (no page this milestone)
- Delete `/api/lead` — HubSpot-only contact path
- Remove unused past performance + unused VPAT UI (no VPAT PDF)
- Phase 10: pin next/eslint-config-next to 16.2.12 only; enforce allowlist CSP (no nonces); HSTS with preload
- SEC-01: .env* ignored with !.env.example kept tracked
- SEC-02: Hard-delete /api/lead + Resend helper; HubSpot-only contact
- Phase 11: contact office = footer canonical string; remove privacyPolicy* from schema/content/footer; leave SEWP company info if already 30 Broad
- Restored validate-content.mjs via schema.ts transpile (no mirrored Zod)
- Phase 12 plan: HTML `hidden` always-mount for statement panels; delete past-performance orphans; strip VPAT/coming-soon/isAvailable; keep Ordering Guide PDF download

### Pending Todos

- Leadership / NASA SEWP PMO content review
- Upload `ordering-guide.pdf` to `public/documents/nasa-sewp-vi/` when ready
- Optional: add nav link to `/nasa-sewp-vi` if requested

### Blockers/Concerns

None.

## Session Continuity

Last session: 2026-07-30T14:25:00Z
Stopped at: Phase 12 planned — ready to execute
Resume file: None
