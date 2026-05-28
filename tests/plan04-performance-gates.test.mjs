import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import assert from "node:assert/strict";
import { describe, it } from "node:test";

const root = resolve(import.meta.dirname, "..");

async function readProjectFile(relativePath) {
  return readFile(resolve(root, relativePath), "utf8");
}

describe("plan04 performance gates contract", () => {
  it("root layout wires Vercel Speed Insights", async () => {
    const layoutSource = await readProjectFile("app/layout.tsx");
    assert.match(layoutSource, /@vercel\/speed-insights/);
    assert.match(layoutSource, /SpeedInsights/);
  });

  it("lighthouserc defines CWV-oriented performance budgets", async () => {
    const configSource = await readProjectFile("lighthouserc.json");
    const config = JSON.parse(configSource);

    assert.ok(config.ci, "expected ci config");
    assert.ok(config.ci.assert, "expected ci.assert");
    const assertionKeys = Object.keys(config.ci.assert.assertions ?? {});
    assert.ok(assertionKeys.some((key) => key.includes("largest-contentful-paint")), "expected LCP audit");
    assert.ok(assertionKeys.some((key) => key.includes("cumulative-layout-shift")), "expected CLS audit");
    assert.ok(
      assertionKeys.some((key) => key.includes("total-blocking-time") || key.includes("interactive")),
      "expected TBT or INP proxy audit"
    );
  });

  it("CI workflow runs Lighthouse after production build", async () => {
    const workflowSource = await readProjectFile(".github/workflows/ci.yml");
    assert.match(workflowSource, /lhci|lighthouse/i);
    assert.match(workflowSource, /lighthouserc/);
    assert.match(workflowSource, /npm run build/);
  });
});
