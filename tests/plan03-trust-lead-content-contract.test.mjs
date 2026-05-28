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

test("schema defines consultation qualification field metadata", async () => {
  const source = await readFile(SCHEMA_FILE, "utf8");

  assert.match(source, /consultationFormSchema|consultationFieldSchema/);
  assert.match(source, /honeypotFieldName/);
  assert.match(source, /qualificationSummary|organization/);
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

test("site content exposes consultation form field definitions", async () => {
  const source = await readFile(SITE_FILE, "utf8");

  assert.match(source, /consultationForm/);
  assert.match(source, /fields:\s*\[/);
  assert.match(source, /honeypotFieldName/);
  assert.match(source, /email/);
  assert.match(source, /organization/);
});

test("marketing content loader wires trust dataset", async () => {
  const source = await readFile(LOADER_FILE, "utf8");

  assert.match(source, /trustContent/);
  assert.match(source, /trust:\s*trustContent/);
});
