import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const STATIC_EXPORT = /export const dynamic = "force-static";/;

const routeFiles = [
  "app/(marketing)/page.tsx",
  "app/(marketing)/services/page.tsx",
  "app/(marketing)/contracts/page.tsx",
  "app/(marketing)/clients/page.tsx",
  "app/(marketing)/certifications/page.tsx"
];

for (const routeFile of routeFiles) {
  test(`${routeFile} enforces static rendering`, async () => {
    const source = await readFile(routeFile, "utf8");
    assert.match(source, STATIC_EXPORT);
  });
}
