# Roadmap: Abrahams Consulting Website Revamp

## Overview

Milestone v1.4 adds the **Electronic Ordering Guide** section to `/nasa-sewp-vi` — placed directly after Contract Overview — with mockup-accurate layout, PDF download, and content-managed metadata.

## Phases

- [x] **Phase 5: Site Layout & Home Visual Scale** - Widen container to 84rem, scale homepage typography/spacing.
- [x] **Phase 6: Marketing Pages Scale & Quality Verification** - Apply consistent scale to remaining pages.
- [x] **Phase 7: Executive Recruiting Hiring Profiles** - Tabbed hiring profile section on `/executive-recruiting`.
- [x] **Phase 8: NASA SEWP VI Federal Contract Page** - `/nasa-sewp-vi` with verified content and dynamic PDFs.
- [x] **Phase 9: NASA SEWP VI Electronic Ordering Guide** - Ordering guide section after Contract Overview.

## Phase Details

### Phase 9: NASA SEWP VI Electronic Ordering Guide
**Goal**: Federal buyers can read ordering guide requirements and download the official SEWP VI Electronic Ordering Guide PDF from a section placed immediately after Contract Overview.
**Depends on**: Phase 8 NASA SEWP VI page, `NASA_SEWP_VI_DOCUMENTS` PDF path pattern, existing ordering guide card/availability loader
**Requirements**: EOG-01 through EOG-08
**Success Criteria** (what must be TRUE):
  1. User scrolls past Contract Overview on `/nasa-sewp-vi` and sees the Electronic Ordering Guide section with title, intro, and four feature bullets.
  2. User sees a download card with card title, supporting text, and a working **Download PDF** button when `ordering-guide.pdf` exists in `public/documents/nasa-sewp-vi/` (no Last Updated/Version rows per D-09).
  3. User sees a clear coming-soon/disabled state when the PDF file is absent — no 404 download link.
  4. Layout matches the approved mockup on desktop (two columns) and stacks cleanly on mobile (download card first).
  5. Content passes `npm run content:check`, typecheck, lint, and production build.
**Plans:** 1 plan
Plans:
- [x] 09-01-PLAN.md — Content schema, section component, download card, CSS, and body wiring for Electronic Ordering Guide
**Status**: Complete

### Phase 8: NASA SEWP VI Federal Contract Page
**Goal**: Federal buyers and NASA SEWP PMO reviewers can access accurate Abrahams Consulting SEWP VI Prime contract information, download resources, and contact federal sales.
**Status**: Complete (pending leadership/PMO review)

### Phase 7: Executive Recruiting Hiring Profiles
**Status**: Complete

### Phase 5–6
**Status**: Complete (v1.1)

## Progress

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 5. Site Layout & Home Visual Scale | 1/1 | Complete | 2026-06-01 |
| 6. Marketing Pages Scale & Quality Verification | 1/1 | Complete | 2026-06-01 |
| 7. Executive Recruiting Hiring Profiles | — | Complete | 2026-06-23 |
| 8. NASA SEWP VI Federal Contract Page | — | Complete | 2026-06-23 |
| 9. NASA SEWP VI Electronic Ordering Guide | 1/1 | Complete | 2026-07-05 |

## v1.0 Archive

v1.0 shipped 4 phases (Platform MVP Foundation, Core Conversion Journeys, Trust and Lead Capture, Launch Quality Gates) — all complete 2026-05-28.

---
*Roadmap updated: 2026-07-05 for milestone v1.4*
