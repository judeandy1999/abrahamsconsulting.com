---
status: active
quick_id: 260715-8gm
slug: recreate-capabilities-statement-services
---

# Recreate Capabilities Statement Services

## Goal

Recreate the legacy WordPress page `/capabilities-statement-services-3` as a first-party Next.js route aligned to the existing Abrahams Consulting marketing design system.

## Decisions

- Route: `/capabilities-statement-services` (clean slug)
- Redirect: `/capabilities-statement-services-3` → new route (preserve inbound links)
- Design: reuse `SolutionsHero`, secondary-page section rhythm; no Elementor mountain dividers or WP-hosted images
- Cert badges: local `/images/certifications/*`, link through to `/certifications`
- Vendor partners: local `/images/companies/*` (same set as home), not the old screenshot collage
- Update consulting-services package CTA href for the Services statement

## Tasks

1. Add Zod schema + typed content module from legacy copy
2. Build page component + CSS (`capabilities-statement-services__*`)
3. Wire route, SEO/sitemap, loader, legacy redirect, package link
4. Smoke build / typecheck
