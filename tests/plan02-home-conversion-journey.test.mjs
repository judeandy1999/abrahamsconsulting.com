import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const HOME_PAGE_FILE = "app/(marketing)/page.tsx";
const HERO_FILE = "components/marketing/HomeHero.tsx";

test("home route exposes conversion structure and typed content loader", async () => {
  const source = await readFile(HOME_PAGE_FILE, "utf8");

  assert.match(source, /export const dynamic = "force-static";/);
  assert.match(source, /loadMarketingContent\(\)/);
  assert.match(source, /HomeHero/);
  assert.match(source, /id="home-offer-summary"/);
});

test("home route includes primary consultation CTA and secondary journey links", async () => {
  const pageSource = await readFile(HOME_PAGE_FILE, "utf8");
  const heroSource = await readFile(HERO_FILE, "utf8");

  assert.match(heroSource, /site\.consultationCta\.path/);
  assert.match(heroSource, /href="\/contracts"/);
  assert.match(pageSource, /href="\/contracts"/);
  assert.match(pageSource, /\/services\//);
});
