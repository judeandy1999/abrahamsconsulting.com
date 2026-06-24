import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import assert from "node:assert/strict";
import { describe, it } from "node:test";

const root = resolve(import.meta.dirname, "..");

async function readProjectFile(relativePath) {
  return readFile(resolve(root, relativePath), "utf8");
}

describe("plan04 crawl and schema contract", () => {
  it("launch route registry exports sitemap helper", async () => {
    const routesSource = await readProjectFile("lib/seo/routes.ts");
    assert.match(routesSource, /getLaunchSitemapEntries/);
    assert.match(routesSource, /launchPageSeoContent|src\/content\/seo/);
    assert.match(routesSource, /loadMarketingContent|services/);
    assert.match(routesSource, /\/services\//);
  });

  it("sitemap consumes registry instead of hardcoded marketingRoutes", async () => {
    const sitemapSource = await readProjectFile("app/sitemap.ts");
    assert.match(sitemapSource, /getLaunchSitemapEntries/);
    assert.doesNotMatch(sitemapSource, /const marketingRoutes\s*=/);
  });

  it("json-ld module exports organization, service, and breadcrumb builders", async () => {
    const jsonLdSource = await readProjectFile("lib/seo/json-ld.ts");
    assert.match(jsonLdSource, /buildOrganizationJsonLd/);
    assert.match(jsonLdSource, /buildServiceJsonLd/);
    assert.match(jsonLdSource, /buildBreadcrumbJsonLd/);
  });

  it("marketing layout and service detail reference JSON-LD helpers", async () => {
    const layoutSource = await readProjectFile("app/(marketing)/layout.tsx");
    assert.match(layoutSource, /buildOrganizationJsonLd/);
    assert.match(layoutSource, /JsonLdScript/);

    const serviceSource = await readProjectFile("app/(marketing)/services/[slug]/page.tsx");
    assert.match(serviceSource, /buildServiceJsonLd/);
    assert.match(serviceSource, /buildBreadcrumbJsonLd/);
    assert.match(serviceSource, /JsonLdScript/);
  });

  it("primary navigation includes solutions and legacy-aligned destinations", async () => {
    const navSource = await readProjectFile("components/marketing/MainNav.tsx");
    const siteSource = await readProjectFile("src/content/site.ts");
    const seoSource = await readProjectFile("src/content/seo.ts");

    assert.match(navSource, /href=\{item\.href\}/);
    assert.match(siteSource, /label: "Solutions"/);
    assert.match(siteSource, /"\/services"/);
    assert.match(siteSource, /IT Executive Recruiting/);
    for (const href of ["/contracts", "/trust", "/consultation"]) {
      assert.match(seoSource, new RegExp(`"${href}"`));
    }
    assert.match(navSource, /logo\.webp/);
    assert.match(navSource, /SCHEDULE A CONSULTATION/);
    assert.match(navSource, /main-nav__toggle/);
  });

  it("robots references production sitemap URL", async () => {
    const robotsSource = await readProjectFile("app/robots.ts");
    assert.match(robotsSource, /sitemap/);
    assert.match(robotsSource, /allow:\s*["']\/["']/);
  });
});
