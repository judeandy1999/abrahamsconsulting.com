# Abrahams Consulting Website Revamp

## What This Is

This project is a full revamp of the Abrahams Consulting marketing website using Next.js and deployment on Vercel. The site will modernize brand credibility, improve qualified lead generation, and make service and contract capabilities easier to discover for enterprise and government buyers. The v1 release is a rapid MVP focused on high-impact pages and SEO/performance best practices from day one.

## Core Value

Deliver a fast, SEO-strong website that clearly communicates Abrahams Consulting's offerings and drives high-intent consultation leads.

## Current Milestone: v1.4 NASA SEWP VI Electronic Ordering Guide

**Goal:** Add a design-accurate Electronic Ordering Guide section on `/nasa-sewp-vi` directly after Contract Overview, with a downloadable SEWP VI PDF and content-managed metadata.

**Target features:**
- Two-column section matching approved mockup (feature list + download card)
- PDF download wired to `public/documents/nasa-sewp-vi/ordering-guide.pdf` via existing document path config
- Last Updated and Version metadata in content module; coming-soon state when PDF absent
- Responsive layout reusing NASA SEWP VI section patterns and motion

## Requirements

### Validated

- [x] Launch a Next.js website revamp deployed on Vercel with a production-ready architecture. (v1.0 Phase 1)
- [x] Achieve strong SEO and web performance foundations across core launch pages. (v1.0 Phase 4)
- [x] Rewrite content to improve clarity, trust, and conversion intent. (v1.0 Phases 2–3)
- [x] Prioritize launch quality for the Home page first, then expand to remaining priority pages. (v1.0 Phase 2)
- [x] Widen site-wide content container to 84rem and scale marketing typography. (v1.1)
- [x] Executive recruiting hiring profiles tabbed section with four outcomes. (v1.2)
- [x] NASA SEWP VI page at `/nasa-sewp-vi` with verified contract content and federal sections. (v1.3 Phase 8)

### Active

- [ ] Electronic Ordering Guide section placed after Contract Overview on `/nasa-sewp-vi`
- [ ] Download card with PDF availability detection and metadata (last updated, version)
- [ ] Typed content + schema validation for ordering guide copy and feature bullets

### Out of Scope

- Website redesign or new design system — section must match existing site and provided mockup
- Invented statistics, expired contract vehicles, or unverifiable claims
- Multilingual support in v1 — English-only launch is prioritized for speed.
- CMS implementation in v1 — content is code-managed; PDFs replaceable via `public/documents/` paths
- Advanced integrations in v1 (CRM, analytics stack, custom workflows) — deferred until the core site relaunch is stable.
- AwardBanner scaling — banner stays at current compact dimensions.
- Auto-computing Last Updated from PDF file mtime — manual content field for v1.4 unless trivial to add later

## Context

Abrahams Consulting is an established MWBE technology consulting and staffing company with existing service lines, contract vehicles, and certifications that must be communicated clearly online. The NASA SEWP VI Prime Contract (80TECH26D1658, Category A – ITC/AV Solutions) requires a dedicated federal-facing page suitable for agency buyers and NASA SEWP PMO review.

v1.3 shipped the full `/nasa-sewp-vi` page. Partial ordering-guide scaffolding exists (`NasaSewpViOrderingGuideCard`, `orderingProcess` content, `resources.orderingGuide`) but the approved **Electronic Ordering Guide** mockup is not yet implemented or wired into the page body. NASA SEWP CHUM requires the ordering guide to be live on the website before the first order.

## Constraints

- **Tech stack**: Next.js on Vercel — selected platform for delivery speed and hosting alignment.
- **Performance**: Performance-first implementation — pages must be optimized for fast real-world load times.
- **SEO**: Strong technical SEO baseline in v1 — organic discoverability is a core launch requirement.
- **Timeline**: Rapid MVP cadence — prioritize speed to first high-quality launch and iterate after.
- **Content model**: Code-managed content in v1 — avoids CMS overhead during initial delivery.
- **Localization**: English-only for v1 — reduces scope and accelerates launch.
- **Accuracy**: Only display information verifiable from official Capability Statement and SEWP VI documentation.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Use Next.js for the revamp | Strong SSR/SSG support, modern DX, and SEO/performance capabilities | ✓ Good |
| Deploy on Vercel | Native Next.js platform with optimized deployment workflow | ✓ Good |
| Launch with code-managed content, no CMS | Fastest path to shipping and controlling quality in v1 | ✓ Good |
| PDFs in `public/documents/nasa-sewp-vi/` with content-module paths | Replace Capability Statement and Ordering Guide without code changes | ✓ Good |
| Reuse existing marketing section patterns (hero, cards, tag grids) | Page must feel native to the existing site | ✓ Good |
| Exclude retired vehicles (e.g. STARS III) | Leadership requirement: no expired contract vehicles on page | ✓ Good |
| Ordering Guide section immediately after Contract Overview | User mockup placement on `/nasa-sewp-vi` | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd:complete-milestone`):
- Archive milestone summary
- Reset active requirements for next milestone

---
*Last updated: 2026-07-05 after milestone v1.4 start*
