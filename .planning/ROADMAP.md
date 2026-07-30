# Roadmap: Abrahams Consulting Website Revamp

## Milestones

- ✅ **v1.0 MVP** - Phases 1-4 (shipped 2026-05-28)
- ✅ **v1.1 Site Layout Scale** - Phases 5-6 (shipped 2026-06-01)
- ✅ **v1.2 Executive Recruiting** - Phase 7 (shipped 2026-06-23)
- ✅ **v1.3 NASA SEWP VI Page** - Phase 8 (shipped 2026-06-23)
- ✅ **v1.4 Electronic Ordering Guide** - Phase 9 (shipped 2026-07-05)
- 🚧 **v1.5 Site Hardening & SEWP Compliance** - Phases 10-12 (in progress)

## Overview

Milestone v1.5 closes vetting high-priority gaps: security hygiene (env ignore, orphan API removal, Next upgrade, CSP+HSTS), content consistency (30 Broad Street, Privacy Policy link removal), and SEWP auditability (all statement-tab panels in initial HTML plus dead past-performance / unused VPAT cleanup).

## Phases

<details>
<summary>✅ v1.0–v1.4 (Phases 1–9) — SHIPPED</summary>

- [x] **Phase 1–4: v1.0 MVP** - Platform foundation, conversion journeys, trust/lead capture, launch quality gates (2026-05-28).
- [x] **Phase 5: Site Layout & Home Visual Scale** - Widen container to 84rem, scale homepage typography/spacing.
- [x] **Phase 6: Marketing Pages Scale & Quality Verification** - Apply consistent scale to remaining pages.
- [x] **Phase 7: Executive Recruiting Hiring Profiles** - Tabbed hiring profile section on `/executive-recruiting`.
- [x] **Phase 8: NASA SEWP VI Federal Contract Page** - `/nasa-sewp-vi` with verified content and dynamic PDFs.
- [x] **Phase 9: NASA SEWP VI Electronic Ordering Guide** - Ordering guide section after Contract Overview.

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

</details>

- [x] **Phase 10: Security Hygiene** - Ignore `.env*`, delete orphan lead API, upgrade Next, add CSP+HSTS.
- [ ] **Phase 11: Content Consistency** - Canonical 30 Broad Street address; remove Privacy Policy footer link.
- [ ] **Phase 12: SEWP Compliance DOM & Dead Code** - All statement panels in HTML; remove past performance and unused VPAT UI.

## Phase Details

### 🚧 v1.5 Site Hardening & SEWP Compliance (In Progress)

**Milestone Goal:** Close security, address, and SEWP fetch/skim compliance gaps surfaced by full codebase vetting — without redesigning the site.

### Phase 10: Security Hygiene
**Goal**: The production site and repository no longer expose common secret or spam-risk gaps, and responses ship hardened transport/content security headers.
**Depends on**: Phase 9 (prior milestone complete)
**Requirements**: SEC-01, SEC-02, SEC-03, SEC-04
**Status**: Complete
**Success Criteria** (what must be TRUE):
  1. A developer can confirm `.env*` is gitignored while `.env.example` remains tracked and commitable.
  2. `POST /api/lead` returns 404 (or the route no longer exists); contact submissions still succeed via HubSpot only.
  3. The app runs on a patched Next.js release that clears known high advisories for the current line (target `16.2.12` or newer patch); production build succeeds.
  4. Production responses include `Strict-Transport-Security` and a staged `Content-Security-Policy` that allows HubSpot, Google Analytics, YouTube, and blog-embed origins without breaking marketing pages.
**Plans:** 2/2 plans executed
Plans:
- [x] 10-01-PLAN.md — Ignore .env*, delete orphan lead API, HubSpot-only contact tests
- [x] 10-02-PLAN.md — Pin Next 16.2.12; add HSTS + enforce allowlist CSP with preview smoke

### Phase 11: Content Consistency
**Goal**: Visitors see one canonical NYC office address and are not sent to a missing Privacy Policy page.
**Depends on**: Phase 10
**Requirements**: CNT-01, CNT-02
**Success Criteria** (what must be TRUE):
  1. Contact page office address matches the footer: `30 Broad Street, NY NY 10004 14th Floor` (no `40 Wall` address remains on contact).
  2. Footer no longer shows a Privacy Policy link; no new privacy page is introduced.
**Plans**: TBD
**UI hint**: yes

### Phase 12: SEWP Compliance DOM & Dead Code
**Goal**: Fair Opportunity and Program Manager content survive fetch/skim audits without tab clicks, while unused past-performance and VPAT UI paths are gone and Ordering Guide download still works.
**Depends on**: Phase 11
**Requirements**: SEWP-01, SEWP-02, SEWP-03, SEWP-04
**Success Criteria** (what must be TRUE):
  1. A fetch/skim of `/nasa-sewp-vi` (no JavaScript tab interaction) finds Fair Opportunity clause text in the HTML.
  2. The same fetch/skim finds Program Manager contact for Maybelline Magnet (name, role, direct phone, `sewp.pm@` email) in the HTML.
  3. Unused past performance content, schema requirements, and related unused UI components are absent from the SEWP page pipeline.
  4. Unused VPAT / coming-soon availability UI paths that are not rendered are removed; Ordering Guide PDF download still works when the file is present.
  5. Tab UX still controls visual focus of statement panels (inactive panels may be CSS-hidden, not removed from DOM).
**Plans**: TBD
**UI hint**: yes

## Progress

| Phase | Milestone | Plans Complete | Status | Completed |
|-------|-----------|----------------|--------|-----------|
| 1–4. v1.0 MVP | v1.0 | — | Complete | 2026-05-28 |
| 5. Site Layout & Home Visual Scale | v1.1 | 1/1 | Complete | 2026-06-01 |
| 6. Marketing Pages Scale & Quality Verification | v1.1 | 1/1 | Complete | 2026-06-01 |
| 7. Executive Recruiting Hiring Profiles | v1.2 | — | Complete | 2026-06-23 |
| 8. NASA SEWP VI Federal Contract Page | v1.3 | — | Complete | 2026-06-23 |
| 9. NASA SEWP VI Electronic Ordering Guide | v1.4 | 1/1 | Complete | 2026-07-05 |
| 10. Security Hygiene | v1.5 | 2/2 | Complete | 2026-07-30 |
| 11. Content Consistency | v1.5 | 0/TBD | Not started | - |
| 12. SEWP Compliance DOM & Dead Code | v1.5 | 0/TBD | Not started | - |

## Coverage

| Requirement | Phase |
|-------------|-------|
| SEC-01 | 10 |
| SEC-02 | 10 |
| SEC-03 | 10 |
| SEC-04 | 10 |
| CNT-01 | 11 |
| CNT-02 | 11 |
| SEWP-01 | 12 |
| SEWP-02 | 12 |
| SEWP-03 | 12 |
| SEWP-04 | 12 |

**v1.5 coverage:** 10/10 requirements mapped ✓

---
*Roadmap updated: 2026-07-30 for milestone v1.5*
