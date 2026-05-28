---
phase: 02-core-conversion-journeys
plan: 02
subsystem: ui
tags: [home-page, conversion, cta, static-route, testing]
requires:
  - phase: 02-core-conversion-journeys
    provides: consultation route contract and conversion content fields from plan 01
provides:
  - Home value-proposition and offer summary sections driven by typed content
  - Primary CTA route to canonical consultation destination
  - Home conversion contract tests with integrated lint/build verification
affects: [phase-02-plan-03, phase-03-trust-and-lead-capture]
tech-stack:
  added: []
  patterns: [source-level route contract testing, static-first conversion page composition]
key-files:
  created: []
  modified:
    - app/(marketing)/page.tsx
    - tests/plan02-home-conversion-journey.test.mjs
key-decisions:
  - "Use section IDs for conversion contract markers to keep tests stable while allowing copy iteration."
  - "Keep Home route server-rendered and static-first while loading typed content directly."
patterns-established:
  - "Pattern 1: Home conversion behavior is guarded by deterministic source-level tests."
  - "Pattern 2: Primary CTA destination remains /consultation while secondary links branch journeys."
requirements-completed: [IA-01, LEAD-01]
duration: 24min
completed: 2026-05-28
---

# Phase 2 Plan 02: Home Conversion Journey Summary

**Home now presents a typed-content value proposition structure with a primary consultation CTA and verified secondary journey paths to services and contracts.**

## Performance

- **Duration:** 24 min
- **Started:** 2026-05-28T10:34:00Z
- **Completed:** 2026-05-28T10:58:00Z
- **Tasks:** 3
- **Files modified:** 2

## Accomplishments

- Added RED-first Home conversion contract tests that captured missing journey structure and CTA path behavior.
- Refactored the Home route to render value-proposition and offer-summary sections from typed content.
- Verified the Home slice through tests plus lint/build quality gates without weakening static-first behavior.

## Task Commits

Each task was committed atomically:

1. **Task 1: Define Home conversion contract tests** - `13dc49e` (test, RED)
2. **Task 2: Build Home value-proposition and CTA sections** - `c64e071` (feat, GREEN)
3. **Task 3: Validate integrated Home conversion slice** - `3ed22be` (test)

## Files Created/Modified

- `tests/plan02-home-conversion-journey.test.mjs` - Added conversion structure and CTA contract assertions.
- `app/(marketing)/page.tsx` - Added typed-content sections, primary consultation CTA, and journey branch links.

## Decisions Made

- Conversion contract tests assert structural markers and route targets rather than brittle full-copy strings.
- Home keeps static export guarantees (`force-static`) while using typed content modules.

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

- None.

## Known Stubs

None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- Services/contracts journey implementation can reuse the same consultation destination and content structures.
- Home conversion contracts are stable and can be extended in Phase 3 trust/lead slices.

## Self-Check: PASSED
