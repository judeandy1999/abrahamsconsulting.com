---
phase: 02-core-conversion-journeys
plan: 01
subsystem: ui
tags: [content-schema, consultation-route, sitemap, zod, conversion]
requires:
  - phase: 01-platform-mvp-foundation
    provides: typed content validation and static-first route baseline
provides:
  - Extended typed conversion contracts for consultation CTA and journey cross-links
  - Canonical static consultation destination route at /consultation
  - Route contract tests proving consultation destination and sitemap linkage
affects: [phase-02-plan-02, phase-02-plan-03, phase-03-trust-and-lead-capture]
tech-stack:
  added: []
  patterns: [canonical consultation path enforcement, schema parity between app and validator]
key-files:
  created:
    - app/(marketing)/consultation/page.tsx
    - tests/plan02-consultation-route-contract.test.mjs
  modified:
    - src/content/schema.ts
    - src/content/site.ts
    - src/content/services.ts
    - src/content/contracts.ts
    - scripts/validate-content.mjs
    - app/sitemap.ts
key-decisions:
  - "Use a schema-level literal path constraint to enforce /consultation as the only consultation destination."
  - "Mirror schema additions in the standalone validator to keep build-time and runtime contracts aligned."
patterns-established:
  - "Pattern 1: Conversion route paths are treated as strict contracts with source-level tests."
  - "Pattern 2: Content schema changes require validator parity updates in scripts/validate-content.mjs."
requirements-completed: [IA-03, LEAD-01]
duration: 28min
completed: 2026-05-28
---

# Phase 2 Plan 01: Conversion Contracts and Consultation Route Summary

**Typed conversion contracts now enforce a canonical consultation CTA path and drive a static /consultation destination included in sitemap discovery.**

## Performance

- **Duration:** 28 min
- **Started:** 2026-05-28T10:05:00Z
- **Completed:** 2026-05-28T10:33:00Z
- **Tasks:** 3
- **Files modified:** 8

## Accomplishments

- Extended content contracts to include consultation CTA metadata and service/contract cross-link labels needed by downstream journey pages.
- Added a static consultation destination page and included it in sitemap generation for crawler/user discoverability.
- Added deterministic tests that fail when consultation route contracts or sitemap linkage regress.

## Task Commits

Each task was committed atomically:

1. **Task 1: Extend typed conversion contracts** - `519d525` (feat)
2. **Task 2: Add consultation destination route and crawl inclusion** - `2a3cdec` (feat)
3. **Task 3: Lock consultation route contracts with automated tests** - `7ca1779` (test)

## Files Created/Modified

- `src/content/schema.ts` - Added consultation CTA and journey-link schema fields.
- `src/content/site.ts` - Added canonical consultation CTA label/path content values.
- `src/content/services.ts` - Added capability/procurement/consultation link copy fields per service.
- `src/content/contracts.ts` - Added services-link and consultation CTA text fields per contract.
- `scripts/validate-content.mjs` - Kept validator schema in parity with content schema contracts.
- `app/(marketing)/consultation/page.tsx` - Added static consultation destination route.
- `app/sitemap.ts` - Added `/consultation` route entry for sitemap output.
- `tests/plan02-consultation-route-contract.test.mjs` - Added route and sitemap contract assertions.

## Decisions Made

- Consultation destination consistency is enforced at schema level with `z.literal("/consultation")`.
- Consultation page remains static/server-rendered and sourced from typed content to keep route behavior deterministic.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 2 - Missing Critical] Added validator schema parity for new conversion fields**
- **Found during:** Task 1 (Extend typed conversion contracts)
- **Issue:** `scripts/validate-content.mjs` would allow schema drift if it kept the old field set.
- **Fix:** Updated local validator schemas with the same new site/service/contract fields as `src/content/schema.ts`.
- **Files modified:** `scripts/validate-content.mjs`
- **Verification:** `node scripts/validate-content.mjs` passed with the updated contracts.
- **Committed in:** `519d525`

---

**Total deviations:** 1 auto-fixed (1 missing critical)
**Impact on plan:** Required for correctness of content validation guarantees; no scope creep.

## Issues Encountered

- None.

## Known Stubs

None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- Home conversion slice can now consume canonical CTA and journey-link fields without ambiguity.
- Services/contracts journey pages can reuse the same consultation destination contract.

## Self-Check: PASSED
