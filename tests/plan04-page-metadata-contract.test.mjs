import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import assert from "node:assert/strict";
import { describe, it } from "node:test";

const root = resolve(import.meta.dirname, "..");

const STATIC_LAUNCH_PATHS = [
  "/",
  "/about",
  "/services",
  "/contracts",
  "/trust",
  "/consultation",
  "/consultation/success"
];

const ROUTE_FILES_BY_PATH = {
  "/": "app/(marketing)/page.tsx",
  "/about": "app/(marketing)/about/page.tsx",
  "/services": "app/(marketing)/services/page.tsx",
  "/contracts": "app/(marketing)/contracts/page.tsx",
  "/trust": "app/(marketing)/trust/page.tsx",
  "/consultation": "app/(marketing)/consultation/page.tsx",
  "/consultation/success": "app/(marketing)/consultation/success/page.tsx"
};

async function readProjectFile(relativePath) {
  return readFile(resolve(root, relativePath), "utf8");
}

describe("plan04 page metadata contract", () => {
  it("seo registry covers every static launch path with non-empty title and description", async () => {
    const seoSource = await readProjectFile("src/content/seo.ts");
    assert.match(seoSource, /launchPageSeoContent/);

    for (const path of STATIC_LAUNCH_PATHS) {
      assert.match(
        seoSource,
        new RegExp(`path:\\s*["']${path.replace(/\//g, "\\/")}["']`),
        `missing registry entry for ${path}`
      );
    }

    const titleMatches = seoSource.match(/title:\s*["'][^"']+["']/g) ?? [];
    const descriptionMatches = seoSource.match(/description:\s*["'][^"']+["']/g) ?? [];
    assert.ok(titleMatches.length >= STATIC_LAUNCH_PATHS.length, "expected title entries in seo registry");
    assert.ok(
      descriptionMatches.length >= STATIC_LAUNCH_PATHS.length,
      "expected description entries in seo registry"
    );
  });

  it("page-seo lookup helpers exist", async () => {
    const helperSource = await readProjectFile("lib/seo/page-seo.ts");
    assert.match(helperSource, /getStaticPageSeo/);
    assert.match(helperSource, /getServicePageSeo/);
    assert.match(helperSource, /src\/content\/seo/);
  });

  it("static launch route modules use registry-backed metadata", async () => {
    for (const [path, relativePath] of Object.entries(ROUTE_FILES_BY_PATH)) {
      const source = await readProjectFile(relativePath);
      const usesRegistry =
        source.includes("getStaticPageSeo") ||
        source.includes("buildMarketingMetadata") ||
        source.includes("generateMetadata");
      assert.ok(usesRegistry, `${path} route must export metadata via registry helpers`);
      assert.match(
        source,
        /getStaticPageSeo|buildMarketingMetadata/,
        `${relativePath} must reference getStaticPageSeo or buildMarketingMetadata`
      );
    }
  });

  it("service detail route uses generateMetadata tied to service slug", async () => {
    const source = await readProjectFile("app/(marketing)/services/[slug]/page.tsx");
    assert.match(source, /generateMetadata/);
    assert.match(source, /getServicePageSeo/);
    assert.match(source, /slug/);
  });
});
