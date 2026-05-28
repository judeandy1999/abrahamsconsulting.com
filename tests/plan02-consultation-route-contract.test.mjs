import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const CONSULTATION_ROUTE_FILE = "app/(marketing)/consultation/page.tsx";
const SITEMAP_FILE = "app/sitemap.ts";

test("consultation route is static and exports canonical metadata path", async () => {
  const source = await readFile(CONSULTATION_ROUTE_FILE, "utf8");

  assert.match(source, /export const dynamic = "force-static";/);
  assert.match(source, /path:\s*"\/consultation"/);
});

test("marketing sitemap includes consultation route", async () => {
  const source = await readFile(SITEMAP_FILE, "utf8");

  assert.match(source, /const marketingRoutes = \[[^\]]*"\/consultation"[^\]]*\];/);
});
