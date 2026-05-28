import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const HOME_PAGE_FILE = "app/(marketing)/page.tsx";

test("home route exposes conversion structure and typed content loader", async () => {
  const source = await readFile(HOME_PAGE_FILE, "utf8");

  assert.match(source, /export const dynamic = "force-static";/);
  assert.match(source, /loadMarketingContent\(\)/);
  assert.match(source, /id="home-value-proposition"/);
  assert.match(source, /id="home-offer-summary"/);
});

test("home route includes primary consultation CTA and secondary journey links", async () => {
  const source = await readFile(HOME_PAGE_FILE, "utf8");

  assert.match(source, /href="\/consultation"/);
  assert.match(source, /href="\/services"/);
  assert.match(source, /href="\/contracts"/);
});
