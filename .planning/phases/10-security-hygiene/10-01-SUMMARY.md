---
phase: 10-security-hygiene
plan: 01
subsystem: security
tags: [gitignore, env, hubspot, lead-api, resend-removal, security-hygiene]

requires: []
provides:
  - ".env* gitignore with !.env.example exception (SEC-01)"
  - "Orphan POST /api/lead and Resend helper removed (SEC-02)"
  - "HubSpot-only contact path with updated plan03 tests"
affects:
  - 10-02-security-hygiene
  - contact-us

tech-stack:
  added: []
  patterns:
    - ".env* ignore + !.env.example negation (order matters)"
    - "Delete unused public API surfaces rather than stubbing"

key-files:
  created: []
  modified:
    - .gitignore
    - .env.example
    - tests/plan03-lead-capture-flow.test.mjs
  deleted:
    - app/api/lead/route.ts
    - lib/lead/send-lead-email.ts

key-decisions:
  - "SEC-01: .env* ignored with !.env.example kept tracked"
  - "SEC-02: Hard-delete /api/lead + Resend helper; HubSpot-only contact"

patterns-established:
  - "Pattern: secrets glob with explicit example exception"
  - "Pattern: assert deleted orphan routes via ENOENT in node:test"

requirements-completed: [SEC-01, SEC-02]

duration: 4min
completed: 2026-07-30
---

# Phase 10 Plan 01: Security Hygiene Summary

**Ignore `.env*` (keep `.env.example` tracked) and hard-delete unused Resend `/api/lead` so contact stays HubSpot-only**

## Performance

- **Duration:** 4 min
- **Started:** 2026-07-30T09:09:46Z
- **Completed:** 2026-07-30T09:13:30Z
- **Tasks:** 2
- **Files modified:** 5

## Accomplishments
- Local secret files matching `.env*` are gitignored; `.env.example` remains tracked and not ignored
- Orphan `POST /api/lead` route and `lib/lead/send-lead-email.ts` removed (no stub left behind)
- `.env.example` no longer documents Resend/lead-notification secrets
- plan03 tests assert HubSpot embed + success page + deleted lead stack + clean env example

## Task Commits

Each task was committed atomically:

1. **Task 1: Gitignore .env* with .env.example exception** - `755787e` (chore)
2. **Task 2: Delete orphan lead API and retarget plan03 tests** - `edbeed0` (feat)

**Plan metadata:** (pending docs commit)

## Files Created/Modified
- `.gitignore` - Added `.env*` + `!.env.example` secrets block
- `.env.example` - Kept public site/GA vars; removed Resend/lead notification placeholders
- `tests/plan03-lead-capture-flow.test.mjs` - HubSpot-only + deleted-route/helper assertions
- `app/api/lead/route.ts` - Deleted
- `lib/lead/send-lead-email.ts` - Deleted

## Decisions Made
- Followed locked SEC-01/SEC-02 decisions exactly: negation after ignore glob; hard delete of lead API (no disabled stub)

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- SEC-01 and SEC-02 satisfied; ready for plan 10-02 (Next pin + HSTS/CSP)
- Planning research docs may still mention `/api/lead` historically — left untouched per plan

## Self-Check: PASSED

- FOUND: `.gitignore`, `.env.example`, `tests/plan03-lead-capture-flow.test.mjs`, `10-01-SUMMARY.md`
- ABSENT OK: `app/api/lead/route.ts`, `lib/lead/send-lead-email.ts`
- FOUND commits: `755787e`, `edbeed0`
- Tests: `node --test tests/plan03-lead-capture-flow.test.mjs` — 6/6 pass

---
*Phase: 10-security-hygiene*
*Completed: 2026-07-30*
