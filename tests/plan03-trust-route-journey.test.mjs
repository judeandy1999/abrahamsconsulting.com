import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const HEADER_FILE = "components/marketing/MainNav.tsx";
const SITE_FILE = "src/content/site.ts";
const TRUST_PAGE_FILE = "app/(marketing)/trust/page.tsx";
const SITEMAP_FILE = "app/sitemap.ts";
const SEO_ROUTES_FILE = "lib/seo/routes.ts";
const SEO_CONTENT_FILE = "src/content/seo.ts";

test("primary navigation exposes trust route", async () => {
  const headerSource = await readFile(HEADER_FILE, "utf8");
  const siteSource = await readFile(SITE_FILE, "utf8");

  assert.match(headerSource, /site\.navigation/);
  assert.match(siteSource, /"\/trust"/);
});

test("trust page is static and renders credibility sections", async () => {
  const source = await readFile(TRUST_PAGE_FILE, "utf8");

  assert.match(source, /export const dynamic = "force-static";/);
  assert.match(source, /loadMarketingContent/);
  assert.match(source, /certifications/i);
  assert.match(source, /caseSnapshots|case snapshots/i);
  assert.match(source, /partnerIndicators|partner indicators/i);
  assert.match(source, /outcomesSummary/);
});

test("trust page uses performance-safe partner indicator rendering", async () => {
  const source = await readFile(TRUST_PAGE_FILE, "utf8");

  assert.match(source, /imageWidth|width=\{/);
  assert.match(source, /imageAlt|alt=\{/);
});

test("sitemap includes trust route", async () => {
  const sitemapSource = await readFile(SITEMAP_FILE, "utf8");
  const routesSource = await readFile(SEO_ROUTES_FILE, "utf8");
  const seoContentSource = await readFile(SEO_CONTENT_FILE, "utf8");

  assert.match(sitemapSource, /getLaunchSitemapEntries/);
  assert.match(routesSource, /launchPageSeoContent/);
  assert.match(seoContentSource, /path:\s*"\/trust"/);
});
