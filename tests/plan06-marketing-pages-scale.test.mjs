import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const MARKETING_PAGES = [
  "app/(marketing)/services/page.tsx",
  "app/(marketing)/services/[slug]/page.tsx",
  "app/(marketing)/contracts/page.tsx",
  "app/(marketing)/trust/page.tsx",
  "app/(marketing)/contact-us/page.tsx",
  "app/(marketing)/contact-us/success/page.tsx",
  "app/(marketing)/about/page.tsx"
];

const GLOBALS_FILE = "app/globals.css";

test("inner marketing pages use shared marketing-main layout shell", async () => {
  for (const pageFile of MARKETING_PAGES) {
    const source = await readFile(pageFile, "utf8");
    assert.match(source, /className="marketing-main"/, `${pageFile} should use marketing-main`);
    assert.match(source, /className="marketing-main__inner"/, `${pageFile} should use marketing-main__inner`);
    assert.doesNotMatch(source, /maxWidth:\s*"64rem"/, `${pageFile} should not hardcode 64rem container`);
  }
});

test("globals define scaled marketing-main typography and responsive padding", async () => {
  const cssSource = await readFile(GLOBALS_FILE, "utf8");

  assert.match(cssSource, /--container-max:\s*84rem/);
  assert.match(cssSource, /\.marketing-main__inner h1/);
  assert.match(cssSource, /\.marketing-main__field/);
  assert.match(cssSource, /@media \(max-width: 960px\)[\s\S]*\.marketing-main__inner/);
});
