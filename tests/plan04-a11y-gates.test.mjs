import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import assert from "node:assert/strict";
import { describe, it } from "node:test";

const root = resolve(import.meta.dirname, "..");

async function readProjectFile(relativePath) {
  return readFile(resolve(root, relativePath), "utf8");
}

describe("plan04 accessibility gates contract", () => {
  it("marketing layout includes skip link to main content", async () => {
    const layoutSource = await readProjectFile("app/(marketing)/layout.tsx");
    assert.match(layoutSource, /skip-link|skip to main/i);
    assert.match(layoutSource, /#main-content|main-content/);
  });

  it("global CSS defines focus-visible styles for interactive controls", async () => {
    const cssSource = await readProjectFile("app/globals.css");
    assert.match(cssSource, /:focus-visible/);
    assert.match(cssSource, /a:focus-visible|button:focus-visible/);
    assert.match(cssSource, /input:focus-visible|textarea:focus-visible|select:focus-visible/);
  });

  it("consultation form keeps labels and native submit path", async () => {
    const consultationSource = await readProjectFile("app/(marketing)/consultation/page.tsx");
    assert.match(consultationSource, /htmlFor=/);
    assert.match(consultationSource, /action=["']\/api\/lead["']/);
    assert.match(consultationSource, /type=["']submit["']/);
    assert.match(consultationSource, /aria-describedby/);
  });

  it("lighthouse config enforces accessibility score budget", async () => {
    const config = JSON.parse(await readProjectFile("lighthouserc.json"));
    const accessibilityAssertion = config.ci?.assert?.assertions?.["categories:accessibility"];
    assert.ok(accessibilityAssertion, "expected categories:accessibility assertion");
    assert.equal(accessibilityAssertion[0], "error");
    assert.ok(accessibilityAssertion[1]?.minScore >= 0.95);
  });
});
