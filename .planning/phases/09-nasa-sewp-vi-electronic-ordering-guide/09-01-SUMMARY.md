---
phase: 09-nasa-sewp-vi-electronic-ordering-guide
plan: 01
subsystem: ui
tags: [nextjs, framer-motion, lucide, zod, nasa-sewp-vi, pdf-download]

requires:
  - phase: 08-nasa-sewp-vi-federal-contract-page
    provides: NASA SEWP VI page shell, NASA_SEWP_VI_DOCUMENTS paths, loadNasaSewpViPageContent loader
provides:
  - electronicOrderingGuide typed content block with four feature bullets and download card copy
  - NasaSewpViElectronicOrderingGuideSection wired after Contract Overview on /nasa-sewp-vi
  - Extended NasaSewpViOrderingGuideCard with WebP illustration and available/coming-soon states
  - Runtime PDF availability via existsSync on ordering-guide.pdf
affects: [nasa-sewp-vi, federal-contract, content-schema]

tech-stack:
  added: []
  patterns:
    - "Filesystem-backed PDF availability injected at load time on electronicOrderingGuide.download.isAvailable"
    - "Mobile-first grid order for download card above feature list"

key-files:
  created:
    - components/marketing/NasaSewpViElectronicOrderingGuideSection.tsx
    - components/marketing/NasaSewpViElectronicOrderingGuideFeatureIcon.tsx
    - public/images/nasa-sewp-vi/ordering-guide-document.webp
  modified:
    - src/content/nasa-sewp-vi.ts
    - src/content/schema.ts
    - scripts/validate-content.mjs
    - lib/content/nasa-sewp-vi-page.ts
    - components/marketing/NasaSewpViOrderingGuideCard.tsx
    - components/marketing/NasaSewpViBody.tsx
    - app/globals.css

key-decisions:
  - "Omit Last Updated and Version metadata on download card per D-09"
  - "Remove orderingProcess and resources.orderingGuide; single PDF location via electronicOrderingGuide.download"
  - "Mobile layout stacks download card first via CSS grid order"

patterns-established:
  - "NASA SEWP VI section pattern: useMarketingMotionConfig + BEM sewp-vi-* classes + typed content props"
  - "Feature bullets: circular #eef1f5 icon backgrounds with Lucide icons via pillarIconProps"

requirements-completed: [EOG-01, EOG-02, EOG-03, EOG-04, EOG-05, EOG-06, EOG-07, EOG-08]

duration: 45min
completed: 2026-07-05
---

# Phase 9: NASA SEWP VI Electronic Ordering Guide Summary

**Mockup-accurate Electronic Ordering Guide section on `/nasa-sewp-vi` with typed four-feature layout, elevated download card, and filesystem-backed PDF availability.**

## Performance

- **Duration:** ~45 min (continued from prior session)
- **Tasks:** 3/3
- **Files modified:** 10

## Accomplishments

- Added `electronicOrderingGuide` content block; removed legacy `orderingProcess` and `resources.orderingGuide`
- Built `NasaSewpViElectronicOrderingGuideSection` with scroll-in motion, four feature bullets, and download card
- Extended `NasaSewpViOrderingGuideCard` with WebP illustration, Download PDF (new tab) / Coming Soon states
- Wired section immediately after Contract Overview in `NasaSewpViBody`
- Added `.sewp-vi-eordering*` CSS (desktop two-column, mobile card-first); removed dead `.sewp-vi-ordering__*` rules

## Files Created/Modified

- `src/content/nasa-sewp-vi.ts` — `electronicOrderingGuide` block, `NASA_SEWP_VI_EORDERING_ASSETS`
- `src/content/schema.ts` / `scripts/validate-content.mjs` — schema for new block; legacy fields removed
- `lib/content/nasa-sewp-vi-page.ts` — injects `download.isAvailable` from filesystem
- `components/marketing/NasaSewpViElectronicOrderingGuideSection.tsx` — section layout and motion
- `components/marketing/NasaSewpViElectronicOrderingGuideFeatureIcon.tsx` — Lucide icon mapping
- `components/marketing/NasaSewpViOrderingGuideCard.tsx` — elevated card with illustration and CTA
- `components/marketing/NasaSewpViBody.tsx` — section wired after Contract Overview
- `app/globals.css` — section and card styles; legacy ordering CSS removed
- `public/images/nasa-sewp-vi/ordering-guide-document.webp` — PDF document illustration

## Decisions Made

None beyond locked D-01 through D-16 in 09-CONTEXT.md — plan executed as specified.

## Deviations from Plan

None — plan executed as written. WebP illustration generated as SVG→WebP when approved mockup asset was unavailable in workspace.

## Issues Encountered

None — all quality gates pass.

## Verification

- `npm run content:check` — pass
- `npm run typecheck` — pass
- `npm run lint` — pass
- `npm run build` — pass (17 routes)

## User Setup Required

Drop `ordering-guide.pdf` at `public/documents/nasa-sewp-vi/ordering-guide.pdf` to activate Download PDF (no code changes). Currently shows Coming Soon when file absent.

## Next Phase Readiness

- Phase 9 complete — Electronic Ordering Guide live on `/nasa-sewp-vi`
- Milestone v1.4 ready for leadership/PMO review and optional PDF upload

---
*Phase: 09-nasa-sewp-vi-electronic-ordering-guide*
*Completed: 2026-07-05*
