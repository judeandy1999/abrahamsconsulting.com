# Requirements: Abrahams Consulting Website Revamp

**Defined:** 2026-05-28
**Updated:** 2026-07-05 (v1.4 Electronic Ordering Guide)
**Core Value:** Deliver a fast, SEO-strong website that clearly communicates Abrahams Consulting's offerings and drives high-intent consultation leads.

## v1.0–v1.3 Requirements (Validated)

Prior milestones shipped through Phase 8 (`/nasa-sewp-vi` federal contract page). See `.planning/ROADMAP.md` and phase summaries for details.

## v1.4 Requirements — Electronic Ordering Guide

Requirements for the NASA SEWP VI Electronic Ordering Guide section. Each maps to Phase 9.

### Placement & Layout

- [ ] **EOG-01**: User visiting `/nasa-sewp-vi` sees the Electronic Ordering Guide section immediately after the Contract Overview section.
- [ ] **EOG-02**: Section uses a two-column layout matching the approved mockup — feature list and intro on the left, download card on the right.
- [ ] **EOG-03**: User on tablet and mobile viewports sees the section stack vertically without broken layout or horizontal overflow.

### Content & UX

- [ ] **EOG-04**: Section displays title "Electronic Ordering Guide", introductory copy, and four feature items (Easy to Download, Always Up to Date, Print-Ready Format, Required Before First Order) from the typed content module.
- [ ] **EOG-05**: Download card displays heading, supporting text, **Download PDF** action, **Last Updated** date, and **Version** number from content.
- [ ] **EOG-06**: When the ordering guide PDF is missing from `public/documents/nasa-sewp-vi/`, the download control shows a coming-soon/disabled state instead of a broken link.

### Maintainability & Quality

- [ ] **EOG-07**: PDF href remains configurable via `NASA_SEWP_VI_DOCUMENTS.orderingGuide`; replacing the file in `public/documents/nasa-sewp-vi/` updates availability without code changes.
- [ ] **EOG-08**: Section passes content schema validation (`content:check`), uses accessible semantics for the download control, and matches existing NASA SEWP VI typography, spacing, icons, and motion patterns.

## v2 Requirements

Deferred to future release. Tracked but not in current roadmap.

### Growth & Expansion

- **GROW-01**: User can filter capabilities by industry/service/contract profile through an interactive capability finder.
- **GROW-02**: User can access a structured resource center for thought leadership and downloadable capability assets.
- **GROW-03**: Internal team can run CTA/form conversion experiments with measurable outcomes.
- **GROW-04**: Internal team can route and track leads through CRM/marketing automation integration.
- **GROW-05**: User can browse localized non-English content experiences.

## Out of Scope

| Feature | Reason |
|---------|--------|
| Merging Contract Overview and Ordering Guide into one combined grid | Mockup is a distinct section; Contract Overview keeps its existing 10-field layout |
| CMS for PDF or metadata management | v1 uses file replacement and content module fields |
| Invented CHUM compliance claims | Copy must match approved mockup / official SEWP documentation |
| Blog / RSS integration | Separate milestone |
| Auto-sync Last Updated from PDF filesystem | Manual content field for v1.4; revisit if leadership wants automation |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| EOG-01 | Phase 9 | Pending |
| EOG-02 | Phase 9 | Pending |
| EOG-03 | Phase 9 | Pending |
| EOG-04 | Phase 9 | Pending |
| EOG-05 | Phase 9 | Pending |
| EOG-06 | Phase 9 | Pending |
| EOG-07 | Phase 9 | Pending |
| EOG-08 | Phase 9 | Pending |

**Coverage:**
- v1.4 requirements: 8 total
- Mapped to phases: 8
- Unmapped: 0 ✓

---
*Requirements defined: 2026-07-05 for milestone v1.4*
