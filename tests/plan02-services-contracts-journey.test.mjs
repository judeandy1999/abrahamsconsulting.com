import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const HEADER_FILE = "components/marketing/MainNav.tsx";
const SITE_FILE = "src/content/site.ts";
const SERVICES_FILE = "app/(marketing)/services/page.tsx";
const SERVICE_DETAIL_FILE = "app/(marketing)/services/[slug]/page.tsx";
const CONTRACTS_FILE = "app/(marketing)/contracts/page.tsx";

test("marketing navigation exposes solutions dropdown and legacy-aligned destinations", async () => {
  const headerSource = await readFile(HEADER_FILE, "utf8");
  const siteSource = await readFile(SITE_FILE, "utf8");

  assert.match(headerSource, /site\.navigation/);
  assert.match(headerSource, /main-nav__dropdown/);
  assert.match(headerSource, /aria-haspopup="true"/);
  assert.match(siteSource, /label: "Solutions"/);
  assert.match(siteSource, /"\/services"/);
  assert.match(siteSource, /children:/);
  assert.match(siteSource, /"\/executive-recruiting"/);
  assert.match(siteSource, /IT Executive Recruiting/);
  assert.match(siteSource, /Consulting Services/);
  assert.match(siteSource, /Manufacturer Store/);
  assert.match(siteSource, /"Blog"/);
  assert.match(siteSource, /"EVA"/);
});

test("services page renders solutions landing sections", async () => {
  const source = await readFile(SERVICES_FILE, "utf8");

  assert.match(source, /SolutionsHero/);
  assert.match(source, /SolutionShowcaseRow/);
  assert.match(source, /loadMarketingContent\(\)/);
  assert.match(source, /solutionsPage/);
  assert.match(source, /showcases/);
});

test("service detail route supports static params and consultation CTA", async () => {
  const source = await readFile(SERVICE_DETAIL_FILE, "utf8");

  assert.match(source, /export async function generateStaticParams\(\)/);
  assert.match(source, /href="\/consultation"/);
});

test("contracts route links to services and consultation journeys", async () => {
  const source = await readFile(CONTRACTS_FILE, "utf8");

  assert.match(source, /href="\/services"/);
  assert.match(source, /href="\/consultation"/);
});
