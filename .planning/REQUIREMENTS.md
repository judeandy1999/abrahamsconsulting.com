# Requirements: Abrahams Consulting Website Revamp

**Defined:** 2026-05-28
**Updated:** 2026-06-23 (v1.3 NASA SEWP VI)
**Core Value:** Deliver a fast, SEO-strong website that clearly communicates Abrahams Consulting's offerings and drives high-intent consultation leads.

## v1.0 Requirements (Validated)

All v1.0 requirements shipped and validated in milestone v1.0 (Phases 1–4). See `.planning/MILESTONES.md` or phase summaries for details.

## v1.1 Requirements (Validated)

Homepage visual scale milestone — all requirements complete.

## v1.2 Requirements (Validated)

- [x] **EXEC-01**: User sees tabbed "Which IT Leadership Hiring Profile Fits You?" with four profiles on `/executive-recruiting`.
- [x] **EXEC-02**: User can switch tabs and navigate to the hiring profile scorecard.

## v1.3 Requirements — NASA SEWP VI Page

Requirements for the NASA SEWP VI federal contract page. Each maps to Phase 8.

### Content Accuracy & Maintainability

- [ ] **SEWP-01**: Page displays only contract information verifiable from the Capability Statement and SEWP VI documentation.
- [ ] **SEWP-02**: Page excludes retired or expired contract vehicles (e.g. STARS III).
- [ ] **SEWP-03**: Capability Statement and Ordering Guide PDF paths are content-configurable; files replaceable in `public/documents/nasa-sewp-vi/` without code changes.

### Page Structure & UX

- [ ] **SEWP-04**: User can access `/nasa-sewp-vi` with hero, contract overview grid, about sections, core competencies, Category A capabilities, active contract vehicles, past performance, company information, certifications, resources, and federal sales contact.
- [ ] **SEWP-05**: User sees layout, typography, spacing, cards, buttons, and animations consistent with existing marketing pages.
- [ ] **SEWP-06**: User on tablet and mobile viewports sees all sections adapt without broken grids or horizontal overflow.

### SEO & Quality

- [ ] **SEWP-07**: Page is included in SEO registry, sitemap, and static metadata contract tests.
- [ ] **SEWP-08**: Content passes schema validation in build pipeline (`content:check`).

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
| Website redesign | User explicitly requested matching existing design system |
| Invented content or statistics | Leadership/PMO accuracy requirement |
| Customer logos on past performance | Not in existing assets unless already on site |
| Patriotic imagery / stock flag photos | User design requirement |
| CMS for PDF management | v1 uses file replacement in public/documents |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| SEWP-01 | Phase 8 | In progress |
| SEWP-02 | Phase 8 | In progress |
| SEWP-03 | Phase 8 | In progress |
| SEWP-04 | Phase 8 | In progress |
| SEWP-05 | Phase 8 | In progress |
| SEWP-06 | Phase 8 | In progress |
| SEWP-07 | Phase 8 | In progress |
| SEWP-08 | Phase 8 | In progress |
