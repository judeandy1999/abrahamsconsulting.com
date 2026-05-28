---
phase: 04-launch-quality-gates
plan: 02
subsystem: seo
tags: [sitemap, json-ld, structured-data, internal-links]
requires:
  - phase: 04-launch-quality-gates
    provides: SEO registry and page metadata helpers from plan 04-01
provides:
  - lib/seo/routes.ts launch route registry with service detail URLs
  - JSON-LD builders and JsonLdScript component
  - Registry-driven sitemap including /services/[slug]
affects: [search-indexing, structured-data]
tech-stack:
  added: []
  patterns: [Single launch route registry for sitemap and crawl contracts]
key-files:
  created: [lib/seo/routes.ts, lib/seo/json-ld.ts, lib/seo/breadcrumbs.ts, components/seo/JsonLdScript.tsx, tests/plan04-crawl-schema-contract.test.mjs]
  modified: [app/sitemap.ts, app/(marketing)/layout.tsx, app/(marketing)/services/[slug]/page.tsx]
key-decisions:
  - "JSON-LD serialized via JSON.stringify on typed server-built objects in JsonLdScript"
patterns-established:
  - "Sitemap URLs generated exclusively from getLaunchSitemapEntries()"
requirements-completed: [SEO-02, SEO-03]
duration: 30min
completed: 2026-05-28
---

# Phase 4 Plan 02: Crawl and Structured Data Summary

**Registry-driven sitemap with service detail URLs plus Organization, Service, and Breadcrumb JSON-LD on launch surfaces**

## Performance

- **Duration:** 30 min
- **Tasks:** 3
- **Files modified:** 11

## Accomplishments

- Centralized launch paths in `lib/seo/routes.ts` including dynamic service slugs
- Refactored `app/sitemap.ts` to consume registry output (removed duplicate route list)
- Injected Organization JSON-LD on marketing layout and Service/Breadcrumb JSON-LD on detail pages
- Strengthened internal links across Home, Services, Trust, and service detail pages

## Task Commits

1. **Task 1: Crawl/schema contract tests** - `a6d6d09` (test)
2. **Task 2: Route registry and sitemap** - `186e33b` (feat)
3. **Task 3: JSON-LD and internal links** - `e1e2d97` (feat)

## Deviations from Plan

None - plan executed exactly as written.

## Self-Check: PASSED

---
*Phase: 04-launch-quality-gates*
*Completed: 2026-05-28*
