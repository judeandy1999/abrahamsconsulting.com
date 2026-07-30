# Abrahams Consulting Website Revamp

## What This Is

This project is a full revamp of the Abrahams Consulting marketing website using Next.js and deployment on Vercel. The site will modernize brand credibility, improve qualified lead generation, and make service and contract capabilities easier to discover for enterprise and government buyers. The v1 release is a rapid MVP focused on high-impact pages and SEO/performance best practices from day one.

## Core Value

Deliver a fast, SEO-strong website that clearly communicates Abrahams Consulting's offerings and drives high-intent consultation leads.

## Current Milestone: v1.5 Site Hardening & SEWP Compliance

**Goal:** Close vetting high-priority gaps — security hygiene, address consistency, SEWP auditability for fetch/skim reviews, and dead-path cleanup.

**Target features:**
- Ignore `.env*` in git; delete orphan `POST /api/lead`
- Upgrade Next.js to a patched release; add CSP + HSTS headers
- Canonical office address **30 Broad Street** on contact, footer, and SEWP Company Info
- Remove Privacy Policy footer link (no privacy page in this milestone)
- SEWP statement tabs keep UX, but all panel HTML remains in the DOM (CSS-hide inactive) so Fair Opportunity and Program Manager pass fetch/skim audits
- Remove unused past performance content/UI and unused VPAT/coming-soon dead code
- Keep working Ordering Guide PDF download as-is

## Requirements

### Validated

- [x] Launch a Next.js website revamp deployed on Vercel with a production-ready architecture. (v1.0 Phase 1)
- [x] Achieve strong SEO and web performance foundations across core launch pages. (v1.0 Phase 4)
- [x] Rewrite content to improve clarity, trust, and conversion intent. (v1.0 Phases 2–3)
- [x] Prioritize launch quality for the Home page first, then expand to remaining priority pages. (v1.0 Phase 2)
- [x] Widen site-wide content container to 84rem and scale marketing typography. (v1.1)
- [x] Executive recruiting hiring profiles tabbed section with four outcomes. (v1.2)
- [x] NASA SEWP VI page at `/nasa-sewp-vi` with verified contract content and federal sections. (v1.3 Phase 8)
- [x] Electronic Ordering Guide section on `/nasa-sewp-vi` with PDF download. (v1.4 Phase 9)

### Active

- [ ] Security hygiene: `.env*` gitignore, remove unused lead API, Next upgrade, CSP + HSTS
- [ ] Content consistency: 30 Broad Street site-wide; remove Privacy Policy footer link
- [ ] SEWP compliance skim: all statement-tab panels present in HTML; remove dead past performance / unused VPAT UI

### Out of Scope

- Website redesign or new design system
- Building a Privacy Policy page (link removed instead)
- Invented statistics, expired contract vehicles, or unverifiable claims
- Multilingual support — English-only
- CMS implementation — content remains code-managed
- Wiring VPAT Coming Soon UI (unused VPAT paths removed; PDF not provided)
- CRM / advanced analytics beyond existing HubSpot + GA
- AwardBanner redesign beyond the shipped two-column PBITS + SEWP banner

## Context

Abrahams Consulting is an established MWBE technology consulting and staffing company. NASA SEWP VI Prime Contract (80TECH26D1658, Category A – ITC/AV Solutions) requires a federal-facing page suitable for agency buyers and NASA SEWP PMO review.

v1.4 shipped the Electronic Ordering Guide and Contract Vehicles hub. A full codebase vetting surfaced security gaps (env ignore, orphan lead API, Next advisories, missing CSP/HSTS), an address split (40 Wall vs 30 Broad), a Privacy Policy link to a stub About page, SEWP Fair Opportunity / Program Manager content gated behind client-only tab panels (fails fetch/skim audits), and dead past-performance / unused VPAT UI.

## Constraints

- **Tech stack**: Next.js on Vercel — selected platform for delivery speed and hosting alignment.
- **Performance**: Performance-first implementation — pages must be optimized for fast real-world load times.
- **SEO**: Strong technical SEO baseline — organic discoverability is a core launch requirement.
- **Timeline**: Rapid MVP cadence — prioritize high-impact hardening fixes.
- **Content model**: Code-managed content — PDFs replaceable via `public/documents/` paths.
- **Localization**: English-only.
- **Accuracy**: Only display information verifiable from official Capability Statement and SEWP VI documentation.
- **Compliance skim**: CHUM-critical Fair Opportunity and Program Manager text must be present in initial HTML without requiring tab clicks.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Use Next.js for the revamp | Strong SSR/SSG support, modern DX, and SEO/performance capabilities | ✓ Good |
| Deploy on Vercel | Native Next.js platform with optimized deployment workflow | ✓ Good |
| Launch with code-managed content, no CMS | Fastest path to shipping and controlling quality in v1 | ✓ Good |
| PDFs in `public/documents/nasa-sewp-vi/` with content-module paths | Replace Capability Statement and Ordering Guide without code changes | ✓ Good |
| Reuse existing marketing section patterns (hero, cards, tag grids) | Page must feel native to the existing site | ✓ Good |
| Exclude retired vehicles (e.g. STARS III) | Leadership requirement: no expired contract vehicles on page | ✓ Good |
| Ordering Guide section immediately after Contract Overview | User mockup placement on `/nasa-sewp-vi` | ✓ Done (v1.4) |
| SEWP tabs keep UX; all panels stay in DOM (CSS hide) | Boss/PMO fetch skim must see Fair Opportunity + PM text | — v1.5 |
| Canonical address 30 Broad Street | Match footer / Company Info | — v1.5 |
| Remove Privacy Policy link (no page) | User choice — do not build privacy page this milestone | — v1.5 |
| Delete `/api/lead` | UI uses HubSpot only; orphan route is spam risk | — v1.5 |
| Remove unused past performance + unused VPAT UI | Dead code cleanup; no VPAT PDF provided | — v1.5 |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd:complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-07-30 after milestone v1.5 start*
