import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const LAYOUT_FILE = "app/(marketing)/layout.tsx";
const TRUST_PAGE_FILE = "app/(marketing)/trust/page.tsx";
const SITEMAP_FILE = "app/sitemap.ts";

test("primary navigation exposes trust route", async () => {
  const source = await readFile(LAYOUT_FILE, "utf8");

  assert.match(source, /href="\/trust"/);
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
  const source = await readFile(SITEMAP_FILE, "utf8");

  assert.match(source, /const marketingRoutes = \[[^\]]*"\/trust"[^\]]*\];/);
});
