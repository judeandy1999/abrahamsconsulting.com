# Requirements: Abrahams Consulting Website Revamp

**Defined:** 2026-07-30
**Updated:** 2026-07-30 (v1.5 Site Hardening & SEWP Compliance)
**Core Value:** Deliver a fast, SEO-strong website that clearly communicates Abrahams Consulting's offerings and drives high-intent consultation leads.

## v1.0–v1.4 Requirements (Validated)

Prior milestones shipped through Phase 9 (Electronic Ordering Guide) and Contract Vehicles hub quick tasks. See `.planning/ROADMAP.md` and phase summaries.

## v1.5 Requirements — Site Hardening & SEWP Compliance

### Security Hygiene

- [ ] **SEC-01**: Repository ignores `.env*` files (while keeping `.env.example` tracked) so local secrets are not committed.
- [ ] **SEC-02**: Orphan `POST /api/lead` route and unused lead-email helpers are removed; contact leads remain HubSpot-only.
- [ ] **SEC-03**: Next.js is upgraded to a patched release that clears known high advisories for the current line (target `16.2.12` or newer patch).
- [ ] **SEC-04**: Production responses include `Strict-Transport-Security` and a staged `Content-Security-Policy` that allows required HubSpot, Google Analytics, YouTube, and blog-embed origins without breaking marketing pages.

### Content Consistency

- [ ] **CNT-01**: Contact page office address matches the footer canonical address: `30 Broad Street, NY NY 10004 14th Floor`.
- [ ] **CNT-02**: Footer no longer exposes a Privacy Policy link (link removed; no privacy page added this milestone).

### SEWP Compliance & Dead Code

- [ ] **SEWP-01**: On `/nasa-sewp-vi`, Fair Opportunity clause text is present in the initial HTML (no tab click required for a fetch/skim to find it), while tab UX may still control visual focus.
- [ ] **SEWP-02**: On `/nasa-sewp-vi`, Program Manager contact for Maybelline Magnet (name, role, direct phone, `sewp.pm@` email) is present in the initial HTML without requiring a tab click.
- [ ] **SEWP-03**: Unused past performance content, schema requirements, and related unused UI components are removed from the SEWP page pipeline.
- [ ] **SEWP-04**: Unused VPAT / coming-soon availability UI paths that are not rendered are removed; Ordering Guide PDF download continues to work when the file is present.

## Future Requirements

Deferred beyond v1.5.

- **GROW-01**: Interactive capability finder by industry/service/contract profile.
- **GROW-02**: Structured resource center for thought leadership and downloadable assets.
- **GROW-03**: CTA/form conversion experiments with measurable outcomes.
- **GROW-04**: CRM/marketing automation lead routing.
- **SEC-F01**: Blog embed sandbox / tighter third-party iframe policy.
- **CNT-F01**: Dedicated Privacy Policy page if legal requires one later.

## Out of Scope

| Feature | Reason |
|---------|--------|
| New Privacy Policy page | User chose to remove the footer link instead of authoring a page |
| VPAT Coming Soon UI / uploading VPAT PDF | No asset provided; unused paths removed rather than wired |
| SEWP tab visual redesign | Keep existing tab UX; only change DOM presence for compliance skim |
| Clients / executive recruiting crawlability | Not in confirmed v1.5 scope |
| Dependency `"latest"` pin cleanup beyond Next upgrade | Can follow in a later hygiene pass |
| CMS, i18n, AwardBanner redesign | Unrelated to hardening goals |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| SEC-01 | Phase 10 | Pending |
| SEC-02 | Phase 10 | Pending |
| SEC-03 | Phase 10 | Pending |
| SEC-04 | Phase 10 | Pending |
| CNT-01 | Phase 11 | Pending |
| CNT-02 | Phase 11 | Pending |
| SEWP-01 | Phase 12 | Pending |
| SEWP-02 | Phase 12 | Pending |
| SEWP-03 | Phase 12 | Pending |
| SEWP-04 | Phase 12 | Pending |

**Coverage:**
- v1.5 requirements: 10 total
- Mapped to phases: 10/10 ✓
- Unmapped: 0

---
*Requirements defined: 2026-07-30 for milestone v1.5*
*Traceability updated: 2026-07-30 with v1.5 roadmap*
