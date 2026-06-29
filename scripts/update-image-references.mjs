import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const files = [
  "src/content/site.ts",
  "src/content/nasa-sewp-vi.ts",
  "src/content/executive-recruiting.ts",
  "src/content/solutions.ts",
  "tests/fixtures/valid-content.json",
  "components/marketing/MarketingFooter.tsx",
  "app/globals.css",
  "tests/plan02-home-hero-design.test.mjs"
];

for (const file of files) {
  const filePath = path.join(process.cwd(), file);
  const before = readFileSync(filePath, "utf8");
  let text = before;

  text = text.replace(/\/images\/[^"'`\s]+\.(png|jpe?g)/gi, (match) => match.replace(/\.(png|jpe?g)$/i, ".webp"));
  text = text.replace(/hero-bg\.avif/g, "hero-bg.webp");
  text = text.replace(/Abrahams-certifications\.png/g, "Abrahams-certifications.webp");

  if (text !== before) {
    writeFileSync(filePath, text);
    console.log(`updated ${file}`);
  }
}
