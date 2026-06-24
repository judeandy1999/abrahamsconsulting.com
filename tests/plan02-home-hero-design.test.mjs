import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const HOME_PAGE_FILE = "app/(marketing)/page.tsx";
const HERO_FILE = "components/marketing/HomeHero.tsx";
const CERT_FILE = "components/marketing/HomeCertificationBar.tsx";
const GLOBALS_FILE = "app/globals.css";

test("home page composes hero, certification, and about sections", async () => {
  const source = await readFile(HOME_PAGE_FILE, "utf8");

  assert.match(source, /HomeHero/);
  assert.match(source, /HomeCertificationBar/);
  assert.match(source, /HomeAboutSection/);
});

test("hero uses provided background and logo assets", async () => {
  const heroSource = await readFile(HERO_FILE, "utf8");
  const cssSource = await readFile(GLOBALS_FILE, "utf8");

  assert.match(heroSource, /hero-logo\.webp/);
  assert.match(cssSource, /hero-bg\.avif/);
  assert.match(heroSource, /home-hero__headline-accent/);
});

test("home about section uses partner logos from companies folder", async () => {
  const aboutSource = await readFile("components/marketing/HomeAboutSection.tsx", "utf8");
  const siteSource = await readFile("src/content/site.ts", "utf8");

  assert.match(aboutSource, /homeAbout\.partnerLogos/);
  assert.match(aboutSource, /PartnerLogoCarousel/);
  assert.match(aboutSource, /home-about__partners-panel/);
  assert.match(siteSource, /\/images\/companies\//);
});

test("certification bar uses composite certifications image", async () => {
  const certSource = await readFile(CERT_FILE, "utf8");
  const siteSource = await readFile("src/content/site.ts", "utf8");

  assert.match(certSource, /certificationStrip\.imageSrc/);
  assert.match(certSource, /certificationStrip\.imageAlt/);
  assert.match(siteSource, /Abrahams-certifications\.png/);
});
