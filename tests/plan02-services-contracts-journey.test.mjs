import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const LAYOUT_FILE = "app/(marketing)/layout.tsx";
const SERVICES_FILE = "app/(marketing)/services/page.tsx";
const SERVICE_DETAIL_FILE = "app/(marketing)/services/[slug]/page.tsx";
const CONTRACTS_FILE = "app/(marketing)/contracts/page.tsx";

test("marketing navigation exposes services and contracts discovery", async () => {
  const source = await readFile(LAYOUT_FILE, "utf8");

  assert.match(source, /href="\/services"/);
  assert.match(source, /href="\/contracts"/);
});

test("services overview links to service detail routes", async () => {
  const source = await readFile(SERVICES_FILE, "utf8");

  assert.match(source, /href=\{`\/services\/\$\{/);
  assert.match(source, /loadMarketingContent\(\)/);
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
