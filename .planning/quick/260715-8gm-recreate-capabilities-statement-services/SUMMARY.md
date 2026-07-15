---
status: complete
quick_id: 260715-8gm
slug: recreate-capabilities-statement-services
---

# Summary

Recreated the legacy Capabilities Statement Services page as a first-party route aligned to the site design system.

## Delivered

- Route: `/capabilities-statement-services`
- Legacy redirect: `/capabilities-statement-services-3` → new route
- Consulting Services package CTA points at the new internal path
- Content uses local certification and partner logos (no WordPress media)

## Key files

- `app/(marketing)/capabilities-statement-services/page.tsx`
- `components/marketing/CapabilitiesStatementServicesPageContent.tsx`
- `src/content/capabilities-statement-services.ts`
- `app/styles/pages/marketing-secondary.css` (`cap-stmt-services__*`)
