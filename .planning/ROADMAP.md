# Roadmap: Abrahams Consulting Website Revamp

## Overview

Milestone v1.1 addresses post-launch visual feedback: the site feels too narrow and undersized on desktop. Two phases widen the container, scale typography, and verify quality baselines hold.

## Phases

- [ ] **Phase 5: Site Layout & Home Visual Scale** - Widen container to 84rem, scale homepage typography/spacing, preserve AwardBanner.
- [ ] **Phase 6: Marketing Pages Scale & Quality Verification** - Apply consistent scale to remaining pages and verify responsive/CWV baselines.

## Phase Details

### Phase 5: Site Layout & Home Visual Scale
**Goal**: Users on desktop see a wider, more readable homepage with proportionally larger typography and spacing, while the award banner stays compact.
**Mode:** mvp
**Depends on**: v1.0 (Phases 1–4 complete)
**Requirements**: LAYT-01, LAYT-02, TYPE-01, TYPE-02
**Success Criteria** (what must be TRUE):
  1. User sees content area widened to 84rem max-width in header, hero, certification bar, about section, main content, and footer.
  2. User sees AwardBanner unchanged at its current compact size and typography.
  3. User sees larger homepage headlines, body text, section headings, buttons, and spacing compared to v1.0.
  4. User on tablet/mobile sees homepage layout adapt without horizontal overflow.
**Plans**: TBD (via `/gsd-plan-phase 5`)
**UI hint**: yes

### Phase 6: Marketing Pages Scale & Quality Verification
**Goal**: Users experience consistent visual scale across all marketing pages with verified responsive behavior and performance baselines.
**Mode:** mvp
**Depends on**: Phase 5
**Requirements**: TYPE-03, RESP-01, PERF-01
**Success Criteria** (what must be TRUE):
  1. User sees scaled typography and spacing on services, contracts, trust, and consultation pages consistent with homepage changes.
  2. User on tablet and mobile viewports sees all updated pages adapt correctly without broken grids or overflow.
  3. User on real devices experiences updated pages that still meet v1.0 Core Web Vitals thresholds at p75.
**Plans**: TBD (via `/gsd-plan-phase 6`)
**UI hint**: yes

## Progress

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 5. Site Layout & Home Visual Scale | 0/? | Not started | — |
| 6. Marketing Pages Scale & Quality Verification | 0/? | Not started | — |

## v1.0 Archive

v1.0 shipped 4 phases (Platform MVP Foundation, Core Conversion Journeys, Trust and Lead Capture, Launch Quality Gates) — all complete 2026-05-28. See `.planning/phases/` archive or git history for phase summaries.

---
*Roadmap created: 2026-06-01 for milestone v1.1*
