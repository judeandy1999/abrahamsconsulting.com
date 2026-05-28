import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const CONSULTATION_ROUTE_FILE = "app/(marketing)/consultation/page.tsx";
const SITEMAP_FILE = "app/sitemap.ts";
const SEO_ROUTES_FILE = "lib/seo/routes.ts";
const SEO_CONTENT_FILE = "src/content/seo.ts";

test("consultation route is static and exports registry-backed metadata", async () => {
  const source = await readFile(CONSULTATION_ROUTE_FILE, "utf8");

  assert.match(source, /export const dynamic = "force-static";/);
  assert.match(source, /getStaticPageSeo\("\/consultation"\)/);
  assert.match(source, /buildMarketingMetadata/);
});

test("marketing sitemap includes consultation route", async () => {
  const sitemapSource = await readFile(SITEMAP_FILE, "utf8");
  const routesSource = await readFile(SEO_ROUTES_FILE, "utf8");
  const seoContentSource = await readFile(SEO_CONTENT_FILE, "utf8");

  assert.match(sitemapSource, /getLaunchSitemapEntries/);
  assert.match(routesSource, /getLaunchRoutePaths/);
  assert.match(seoContentSource, /path:\s*"\/consultation"/);
});
