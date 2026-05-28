# Domain Pitfalls: Next.js/Vercel B2B Consulting Website Revamp

**Domain:** B2B consulting website relaunch (SEO + performance first)  
**Researched:** 2026-05-28

## Critical Pitfalls

### Pitfall 1: Redirect Map Gaps During SEO Migration
**What goes wrong:** Old ranking URLs are not mapped 1:1 to relevant new URLs (or are bulk-routed to home), causing ranking and lead-intent traffic loss.  
**Why teams hit it:** Teams treat redirects as a dev handoff task after design/content decisions, instead of a core migration artifact.  
**Early warning signs:**  
- Launch checklist has no complete old-to-new URL mapping.  
- Redirect tests are done on a few pages, not all indexed/high-link pages.  
- Legacy pages begin returning 404s or irrelevant destinations in staging.  
**Prevention strategy:**  
- Build a full URL mapping before implementation.  
- Use server-side permanent redirects (301/308) with direct old-to-final targets.  
- Avoid redirect chains and irrelevant catch-all redirects.  
- Keep redirects active for at least 1 year (longer preferred).  
- Submit new sitemap in Search Console at launch and monitor indexing shifts.  
**Phase to address:** **Phase 2 (IA + SEO migration planning)** and validate in **Phase 4 (pre-launch QA)**.

### Pitfall 2: Canonical/Metadata Drift After Route Changes
**What goes wrong:** Canonicals, metadata, robots directives, and sitemap URLs disagree, causing indexing confusion or de-duplication of important pages.  
**Why teams hit it:** Next.js metadata is updated piecemeal while routes/content evolve quickly; staging noindex/canonical settings are not fully reset at go-live.  
**Early warning signs:**  
- Canonical points to non-final URL, old URL, or wrong host/protocol.  
- `noindex` remains on launch pages.  
- Sitemap and canonical URLs do not match final routes.  
**Prevention strategy:**  
- Set `metadataBase` and route-level metadata conventions early.  
- Enforce one canonical URL strategy (host, trailing slash, protocol) globally.  
- Add pre-launch crawl checks for canonical/robots/sitemap alignment.  
- Treat metadata and routing changes as one review unit in PRs.  
**Phase to address:** **Phase 3 (implementation)** with a hard gate in **Phase 4 (pre-launch QA)**.

### Pitfall 3: Information Architecture Regression (Internal Link Equity Collapse)
**What goes wrong:** New nav and page hierarchy looks cleaner but removes contextual internal links and buries revenue pages, reducing discoverability and authority flow.  
**Why teams hit it:** IA is optimized for visual simplicity and short copy, not crawl paths and service-intent journeys.  
**Early warning signs:**  
- Fewer crawlable HTML links to core service/industry pages than current site.  
- Important pages move deeper in click depth without compensating hub links.  
- Anchor text becomes generic ("Learn more", "Read more") on key pages.  
**Prevention strategy:**  
- Preserve or improve internal linking from high-authority pages to commercial pages.  
- Use crawlable anchor links (`<a href>`), not JS-only navigation patterns.  
- Define IA acceptance criteria: max click depth, pillar-cluster linking, and anchor specificity.  
- Compare old vs new internal link graph before launch.  
**Phase to address:** **Phase 2 (IA/content strategy)** and verify in **Phase 4 (SEO QA)**.

### Pitfall 4: Content Rewrite Thinning (Topical Authority Loss)
**What goes wrong:** Service pages are rewritten to be shorter and more brand-polished, but lose specificity, intent match, and trust signals that previously ranked.  
**Why teams hit it:** Rebrand pressure prioritizes tone and aesthetics over search intent coverage and proof-oriented content structure.  
**Early warning signs:**  
- Core pages lose depth (fewer use cases, qualifications, delivery details, proof points).  
- Headings no longer reflect key service/problem queries.  
- Meta title/description quality degrades or becomes duplicated.  
**Prevention strategy:**  
- Run pre/post content diff on top organic pages before publishing rewrites.  
- Keep core query intent and topic coverage while improving clarity.  
- Require page templates to include trust evidence (case outcomes, certifications, contract vehicles where relevant).  
- Gate publishing on content + SEO review, not visual QA alone.  
**Phase to address:** **Phase 2 (content strategy)** and **Phase 3 (page production)**.

### Pitfall 5: Core Web Vitals Regressions Hidden by Good Lab Scores
**What goes wrong:** Lighthouse looks good, but real users fail CWV (especially mobile LCP/INP/CLS), hurting UX and search performance over time.  
**Why teams hit it:** Teams over-index on synthetic tests and do not instrument field measurement early.  
**Early warning signs:**  
- No production RUM pipeline for CWV p75 by template/device.  
- Hero images are not prioritized/optimized.  
- New interactive widgets increase main-thread work and INP without budget checks.  
**Prevention strategy:**  
- Instrument field CWV tracking in production from first deploy.  
- Set hard performance budgets for LCP, INP, CLS and client JS by page template.  
- Use Next.js primitives (`next/image`, `next/font`, server-first rendering patterns) and defer non-critical JS.  
- Treat performance regressions as release blockers on priority pages.  
**Phase to address:** **Phase 1 (baseline + budgets)**, enforced in **Phase 3 and 4**.

### Pitfall 6: Accessibility/Compliance Left to Final QA
**What goes wrong:** Launch ships with keyboard/focus/form issues that are expensive to retrofit and risky for enterprise/government credibility.  
**Why teams hit it:** Accessibility is treated as a checklist pass, not a design-system and component-contract requirement.  
**Early warning signs:**  
- Interactive components have inconsistent focus visibility/keyboard behavior.  
- Sticky headers/banners obscure focus targets.  
- Forms rely on placeholder text or color-only errors.  
**Prevention strategy:**  
- Define WCAG 2.2 AA requirements at design + component level (focus visibility, target size, keyboard paths, form semantics).  
- Add automated + manual accessibility QA in CI and release gates.  
- Test critical lead flows with keyboard-only and screen-reader passes.  
- For public-sector targeting, align to Section 508 expectations from requirement stage.  
**Phase to address:** **Phase 1 (non-functional requirements)** and **Phase 3/4 (component + flow verification)**.

### Pitfall 7: Over-Engineering the MVP Before Launching the Core Funnel
**What goes wrong:** Team delays launch by adding CMS, complex personalization, heavy integrations, and multi-system architecture before validating core pages and lead flow.  
**Why teams hit it:** Engineering and stakeholder ambition expand scope; "future-proofing" beats "ship and learn."  
**Early warning signs:**  
- Priority pages (Home + key services) are blocked by platform decisions.  
- Large architecture debates with no impact on near-term conversion or SEO goals.  
- Sprint work skews to infrastructure over content/UX/performance readiness.  
**Prevention strategy:**  
- Hold an explicit MVP contract: code-managed content, core pages first, no nonessential integrations.  
- Use a strict "must impact launch KPI" filter for scope additions.  
- Defer CMS and advanced workflows until post-launch data justifies complexity.  
**Phase to address:** **Phase 0/1 (scope definition and guardrails)**.

## Moderate Pitfalls

### Pitfall 8: Staging Controls Leaking into Production
**What goes wrong:** `noindex`/robots rules or crawl blocks meant for staging remain in production, suppressing discoverability.  
**Why teams hit it:** Environment handling is manual and inconsistent at release time.  
**Early warning signs:** Production pages unexpectedly show `noindex`; robots rules differ from release intent.  
**Prevention strategy:** Add environment-aware checks in CI and pre-launch crawl audit for robots/indexability.  
**Phase to address:** **Phase 4 (release hardening)**.

### Pitfall 9: Third-Party Script Bloat Erodes CWV and Stability
**What goes wrong:** Analytics/chat/consent/marketing scripts degrade INP/LCP/CLS and introduce layout/focus instability.  
**Why teams hit it:** Business tooling is added ad hoc with no performance or accessibility budget owner.  
**Early warning signs:** INP spikes after script additions; layout shifts near banners/widgets; inconsistent interaction latency.  
**Prevention strategy:** Require script-level impact review, lazy/deferred loading, and measurable budget compliance before merge.  
**Phase to address:** **Phase 3 (implementation)** and **Phase 5 (post-launch optimization)**.

## Minor Pitfalls

### Pitfall 10: No Post-Launch Observation Window and Recovery Playbook
**What goes wrong:** Team launches and immediately shifts focus, missing early SEO/indexing/CWV regressions while recovery is easiest.  
**Why teams hit it:** Launch is treated as completion, not start of stabilization.  
**Early warning signs:** No owners or cadence for Search Console/CWV/error triage in first 30 days.  
**Prevention strategy:** Define a 30-90 day launch watch with daily/weekly checks and explicit rollback criteria for severe regressions.  
**Phase to address:** **Phase 5 (post-launch stabilization)**.

## Phase-Specific Warnings

| Phase Topic | Likely Pitfall | Mitigation |
|-------------|---------------|------------|
| Discovery & MVP guardrails | Over-engineering before core funnel is live | Freeze MVP scope to launch-critical pages and technical baselines only |
| IA + content strategy | URL/IA changes break topical authority and internal link equity | Maintain URL mapping, click-depth limits, and internal link graph parity/improvement |
| Build implementation | Metadata/canonical drift and script bloat | Enforce metadata conventions + performance budgets in PR checks |
| Pre-launch QA | Hidden SEO/indexability/accessibility defects | Run full crawl + redirect tests + WCAG 2.2 AA flow audits before cutover |
| Post-launch stabilization | Regressions go undetected after release | Operate 30-90 day monitoring with owners, thresholds, and rollback playbook |

## Sources

- Google Search Central - Site moves and URL changes (HIGH): https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes
- Google Search Central - Build and submit a sitemap (HIGH): https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- Google Search Central - Robots meta and X-Robots-Tag (HIGH): https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag
- Google Search Central - Link best practices (crawlable links) (HIGH): https://developers.google.com/search/docs/crawling-indexing/links-crawlable
- Google Search Central - SEO Starter Guide (HIGH): https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Next.js docs - Metadata and OG images (HIGH): https://nextjs.org/docs/app/getting-started/metadata-and-og-images
- Next.js docs - `generateMetadata` API (HIGH): https://nextjs.org/docs/app/api-reference/functions/generate-metadata
- Next.js docs - `redirects` in next.config.js (HIGH): https://nextjs.org/docs/app/api-reference/config/next-config-js/redirects
- Next.js docs - `sitemap` metadata file convention (HIGH): https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
- web.dev - Web Vitals (HIGH): https://web.dev/articles/vitals
- Vercel Knowledge Base - Optimizing Core Web Vitals (MEDIUM-HIGH): https://vercel.com/kb/guide/optimizing-core-web-vitals-in-2024
- Vercel Academy - Core Web Vitals and measurement (MEDIUM): https://vercel.com/academy/nextjs-foundations/core-web-vitals-and-measurement
- W3C WAI - What's New in WCAG 2.2 (HIGH): https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/
- W3C Recommendation - WCAG 2.2 (HIGH): https://www.w3.org/TR/WCAG22/
- Section508.gov - IT accessibility laws and policies (HIGH): https://www.section508.gov/manage/laws-and-policies/
