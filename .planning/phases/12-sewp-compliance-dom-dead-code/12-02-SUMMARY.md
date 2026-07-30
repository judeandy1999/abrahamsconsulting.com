---
phase: 12-sewp-compliance-dom-dead-code
plan: 02
subsystem: content
tags: [sewp, dead-code, zod, nextjs, ordering-guide]

requires:
  - phase: 09-electronic-ordering-guide
    provides: Ordering Guide PDF CTA and nasa-sewp-vi content pipeline
provides:
  - SEWP past-performance orphans removed from page pipeline
  - VPAT/coming-soon/isAvailable paths stripped from EOG card/loader/schema
  - Ordering Guide PDF download CTA retained
affects: [sewp-page, content-schema]

tech-stack:
  added: []
  patterns:
    - "Delete unused SEWP content/schema/UI together; leave capabilities-statement pastPerformance intact"
    - "Simplify loadNasaSewpViPageContent to return static content when availability flags are removed"

key-files:
  created: []
  modified:
    - components/marketing/NasaSewpViOrderingGuideCard.tsx
    - lib/content/nasa-sewp-vi-page.ts
    - src/content/nasa-sewp-vi.ts
    - src/content/schema.ts
    - app/styles/pages/sewp-vi.css
  deleted:
    - components/marketing/NasaSewpViPastPerformanceSection.tsx
    - components/marketing/NasaSewpViExperienceIcon.tsx

key-decisions:
  - "loadNasaSewpViPageContent returns nasaSewpViPageContent with no filesystem availability probes"
  - "Ordering Guide Download PDF CTA kept; VPAT/coming-soon UI not reintroduced"
  - "capabilities-statement pastPerformance schemas/content left untouched"

patterns-established:
  - "SEWP dead-code cleanup: delete orphan components + matching schema/content/CSS in one plan"
  - "Keep public ordering-guide.pdf href when stripping unused document availability flags"

requirements-completed: [SEWP-03, SEWP-04]

duration: 12min
completed: 2026-07-30
---

# Phase 12 Plan 02: SEWP Dead Code Cleanup Summary

**Removed unused SEWP past-performance and VPAT/coming-soon paths while keeping the Ordering Guide PDF download CTA.**

## Performance

- **Duration:** 12 min
- **Started:** 2026-07-30T14:33:45Z
- **Completed:** 2026-07-30T14:45:00Z
- **Tasks:** 3/3
- **Files modified:** 7 (5 modified, 2 deleted)

## Accomplishments

- Deleted orphan `NasaSewpViPastPerformanceSection` and `NasaSewpViExperienceIcon` plus SEWP `pastPerformance` content/schema/CSS
- Stripped Ordering Guide VPAT / `comingSoonLabel` / `isAvailable` from card, loader, content, and schema
- Verified production HTML still exposes `/documents/nasa-sewp-vi/ordering-guide.pdf` and `Download PDF`; VPAT and Representative Experience absent

## Task Commits

Each task was committed atomically:

1. **Task 1: Delete SEWP past performance orphans (SEWP-03)** - `bf4e377` (feat)
2. **Task 2: Strip VPAT / coming-soon / isAvailable; keep Ordering Guide PDF download (SEWP-04)** - `99414fc` (feat)
3. **Task 3: Build and assert Ordering Guide link present; VPAT / past-performance absent in HTML** - verification only (no code delta; no commit)

**Plan metadata:** `21ad864` (docs: complete plan)

## Files Created/Modified

- `components/marketing/NasaSewpViPastPerformanceSection.tsx` - deleted (orphan)
- `components/marketing/NasaSewpViExperienceIcon.tsx` - deleted (orphan)
- `components/marketing/NasaSewpViOrderingGuideCard.tsx` - download CTA only; unused availability vars removed
- `lib/content/nasa-sewp-vi-page.ts` - returns static page content (no existsSync probes)
- `src/content/nasa-sewp-vi.ts` - no pastPerformance / orderingGuideVpat / comingSoon / accessibility blocks; orderingGuide PDF kept
- `src/content/schema.ts` - nasaSewpViPageSchema without pastPerformance and without EOG accessibility/comingSoon/isAvailable
- `app/styles/pages/sewp-vi.css` - removed `.sewp-vi-experience*` and Ordering Guide `__cta--disabled` / `__a11y*` / `__vpat*` rules

## Decisions Made

- Simplified `loadNasaSewpViPageContent` to return `nasaSewpViPageContent` after availability flags were removed (per plan / SEWP-04)
- Did not touch capabilities-statement `pastPerformance` or `NasaSewpViStatementsTableSection.tsx` (owned by 12-01)

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] Task 2 verify regex false-positive on accessibility import path**
- **Found during:** Task 2
- **Issue:** Plan verify regex `/accessibility/` matched `lib/accessibility/accessible-external-label` import while VPAT `accessibility` section prop was already removed
- **Fix:** Used precise checks (destructure/`vpatAvailable`/`isAvailable`/`comingSoon` absent; download.href present)
- **Files modified:** none (verification only)
- **Verification:** `sewp-04-strip-ok`
- **Committed in:** n/a

**2. [Rule 3 - Blocking] HTML curl assertion used PowerShell line-split output**
- **Found during:** Task 3
- **Issue:** `curl.exe` output assigned to `$html` became a string array; `-like` failed despite content present
- **Fix:** Joined curl output with newlines before assertions; used port **3013** as instructed to avoid 12-01 conflict
- **Files modified:** none
- **Verification:** `sewp-03-04-html-ok` against `http://localhost:3013/nasa-sewp-vi`
- **Committed in:** n/a

---

**Total deviations:** 2 auto-fixed (Rule 3)
**Impact on plan:** Verification-only adjustments; no product scope change

## Issues Encountered

- Unrelated working-tree `nasaSewpBanner` WIP on `schema.ts` / `site.ts` / AwardBanner conflicted with typecheck when schema was restored from HEAD for clean SEWP commits. Typecheck was run with a temporary banner schema inject, then banner was restored as uncommitted WIP after Task 2 commit so parallel work is not blocked.

## User Setup Required

None

## Known Stubs

None — Ordering Guide download uses real `ordering-guide.pdf` href; no Coming Soon / VPAT stubs remain in the SEWP pipeline.

## Threat Flags

None — no new network endpoints or trust-boundary surface; removed unused VPAT href paths (T-12-03 mitigate).

## Next Phase Readiness

- SEWP-03 and SEWP-04 complete for this plan
- SEWP-01/SEWP-02 owned by plan 12-01 (always-mount panels)
- Ready for phase verification once 12-01 SUMMARY lands

## Self-Check: PASSED

- Deleted files absent: `NasaSewpViPastPerformanceSection.tsx`, `NasaSewpViExperienceIcon.tsx`
- Commits present: `bf4e377`, `99414fc`
- PDF on disk: `public/documents/nasa-sewp-vi/ordering-guide.pdf`
- HTML asserts passed on port 3013
