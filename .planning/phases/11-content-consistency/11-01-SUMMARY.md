---
phase: 11-content-consistency
plan: 01
subsystem: content
tags: [contact, footer, address, privacy, zod, content-validation]

requires:
  - phase: 10-security-hygiene
    provides: Hardened baseline before content consistency fixes
provides:
  - Canonical contact office address matching footer (30 Broad Street)
  - Footer legal bar without Privacy Policy link or schema fields
  - Restored scripts/validate-content.mjs for content:check + plan03 tests
affects:
  - 12-sewp-compliance-dom-dead-code

tech-stack:
  added: []
  patterns:
    - Canonical office address is a single exact string shared by footer and contact
    - Footer schema omits privacyPolicy* entirely (no optional stubs)
    - content:check imports live Zod schemas via TS transpile (no mirrored schema)

key-files:
  created:
    - scripts/validate-content.mjs
  modified:
    - src/content/site.ts
    - src/content/schema.ts
    - components/marketing/MarketingFooter.tsx
    - tests/fixtures/valid-content.json

key-decisions:
  - "Contact office value equals footer.address exactly: 30 Broad Street, NY NY 10004 14th Floor"
  - "privacyPolicyLabel/Href removed from schema/content/footer UI — no privacy page"
  - "SEWP company headquarters left unchanged (already canonical 30 Broad)"
  - "Restored empty validate-content.mjs by importing schema.ts instead of duplicating Zod"

patterns-established:
  - "Office address: one canonical string in site content; fixtures must match"
  - "Legal bar: copyright-only unless a real privacy page ships later (CNT-F01)"

requirements-completed: [CNT-01, CNT-02]

duration: 9min
completed: 2026-07-30
---

# Phase 11 Plan 01: Content Consistency Summary

**Contact office aligned to footer `30 Broad Street, NY NY 10004 14th Floor`; Privacy Policy footer link and schema fields removed; content validator restored for green checks.**

## Performance

- **Duration:** 9 min
- **Started:** 2026-07-30T13:51:58Z
- **Completed:** 2026-07-30T14:01:40Z
- **Tasks:** 2
- **Files modified:** 5

## Accomplishments

- Contact Our Office channel no longer shows `40 Wall`; matches footer canonical address
- Footer legal bar is copyright-only (no Privacy Policy link, no divider, no privacy page)
- `privacyPolicyLabel` / `privacyPolicyHref` removed from Zod footer schema, site content, and valid fixture
- SEWP Company Information headquarters left untouched (already 30 Broad)
- `npm run content:check` and `plan03-content-validation` pass

## Task Commits

Each task was committed atomically:

1. **Task 1: Align contact office address to canonical 30 Broad** - `7e87a85` (fix)
2. **Task 2: Remove Privacy Policy footer link end-to-end** - `6955ed7` (fix)

**Plan metadata:** (pending docs commit)

## Files Created/Modified

- `src/content/site.ts` - Office channel → canonical 30 Broad; privacyPolicy* keys removed
- `src/content/schema.ts` - Footer Zod object without privacyPolicy*
- `components/marketing/MarketingFooter.tsx` - Copyright-only legal bar; dropped unused `Link` import
- `tests/fixtures/valid-content.json` - Office + footer aligned to schema (no privacyPolicy*)
- `scripts/validate-content.mjs` - Restored empty validator (Rule 3) using live schema transpile

## Decisions Made

- Canonical address string matches footer exactly (single-line contact value)
- Remove Privacy Policy link entirely; do not author a privacy page (CNT-F01 deferred)
- Leave `nasa-sewp-vi.ts` alone when headquarters already canonical
- Rebuild `validate-content.mjs` against `schema.ts` rather than restoring the obsolete 909-line mirrored schema

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] Restored empty `scripts/validate-content.mjs`**
- **Found during:** Task 2 (Remove Privacy Policy footer link)
- **Issue:** Script was emptied in prior commit `fe426ab`, so `content:check` was a no-op and `plan03-content-validation` failed (no "Validation passed/failed" output)
- **Fix:** Reimplemented validator that transpiles/imports live Zod schemas for project content and applies CNT-aware fixture checks (partial fixtures remain historical)
- **Files modified:** `scripts/validate-content.mjs`
- **Verification:** `npm run content:check` exit 0; `node --test tests/plan03-content-validation.test.mjs` pass
- **Committed in:** `6955ed7` (part of task 2 commit)

---

**Total deviations:** 1 auto-fixed (Rule 3)
**Impact on plan:** Required for plan verification success criteria; no product scope creep.

## Issues Encountered

Pre-existing empty content validator blocked Task 2 automated verifies until restored (see deviations).

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- CNT-01 and CNT-02 closed; Phase 11 complete after metadata commit
- Phase 12 (SEWP DOM / past performance / VPAT cleanup) can proceed
- Unrelated local WIP (nasaSewpBanner) left unstaged outside this plan

## Self-Check: PASSED

- FOUND: `src/content/site.ts`, `src/content/schema.ts`, `components/marketing/MarketingFooter.tsx`, `tests/fixtures/valid-content.json`, `scripts/validate-content.mjs`
- FOUND: commits `7e87a85`, `6955ed7`
- FOUND: no `privacyPolicy` under `src/`, `components/`, `app/`, `lib/`, `tests/`
- FOUND: no `40 Wall` / `Wall Street` in `src/content/site.ts`
- FOUND: no `app/(marketing)/privacy` route

---
*Phase: 11-content-consistency*
*Completed: 2026-07-30*
