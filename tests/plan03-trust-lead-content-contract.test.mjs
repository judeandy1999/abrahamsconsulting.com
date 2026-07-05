import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const SCHEMA_FILE = "src/content/schema.ts";
const TRUST_FILE = "src/content/trust.ts";
const SITE_FILE = "src/content/site.ts";
const LOADER_FILE = "lib/content/load-content.ts";

test("schema defines trust content with certifications, case snapshots, and partner indicators", async () => {
  const source = await readFile(SCHEMA_FILE, "utf8");

  assert.match(source, /trustContentSchema/);
  assert.match(source, /certifications:\s*z\.array/);
  assert.match(source, /caseSnapshots:\s*z\.array\([^)]+\)\.min\(2/);
  assert.match(source, /partnerIndicators:\s*z\.array/);
  assert.match(source, /imageSrc|imageAlt|imageWidth|imageHeight/);
});

test("schema defines contact page HubSpot form metadata", async () => {
  const schemaSource = await readFile(SCHEMA_FILE, "utf8");
  const siteSource = await readFile(SITE_FILE, "utf8");

  assert.match(schemaSource, /hubspotFormSchema|contactPageSchema/);
  assert.match(schemaSource, /portalId|formId|region/);
  assert.match(siteSource, /hubspotForm/);
  assert.match(siteSource, /44647552|7b2491d8-74db-49db-b377-eae6eccdd2fe/);
});

test("trust content module provides certifications and at least two case snapshots", async () => {
  const source = await readFile(TRUST_FILE, "utf8");

  assert.match(source, /export const trustContent/);
  assert.match(source, /certifications:\s*\[/);
  assert.match(source, /caseSnapshots:\s*\[/);
  assert.match(source, /outcomesSummary/);
  assert.match(source, /MWBE|mwbe|minority|woman/i);
});

test("trust content includes performance-safe partner indicator metadata", async () => {
  const source = await readFile(TRUST_FILE, "utf8");

  assert.match(source, /partnerIndicators:\s*\[/);
  assert.match(source, /imageSrc/);
  assert.match(source, /imageAlt/);
  assert.match(source, /imageWidth/);
  assert.match(source, /imageHeight/);
});

test("site content exposes HubSpot contact form configuration", async () => {
  const source = await readFile(SITE_FILE, "utf8");

  assert.match(source, /hubspotForm/);
  assert.match(source, /portalId:\s*"44647552"/);
  assert.match(source, /formId:\s*"7b2491d8-74db-49db-b377-eae6eccdd2fe"/);
  assert.match(source, /region:\s*"na1"/);
});

test("marketing content loader wires trust dataset", async () => {
  const source = await readFile(LOADER_FILE, "utf8");

  assert.match(source, /trustContent/);
  assert.match(source, /trust:\s*trustContent/);
});
