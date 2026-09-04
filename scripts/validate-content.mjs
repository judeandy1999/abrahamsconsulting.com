import { readFile, unlink, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { basename, dirname, resolve } from "node:path";
import process from "node:process";
import { pathToFileURL } from "node:url";
import ts from "typescript";

function formatPath(issuePath) {
  return issuePath.length ? issuePath.join(".") : "root";
}

function printFailure(path, error) {
  console.error(`Validation failed: ${path}`);

  if (error?.issues) {
    for (const issue of error.issues) {
      console.error(`- ${formatPath(issue.path)}: ${issue.message}`);
    }
  } else if (error) {
    console.error(error instanceof Error ? error.message : String(error));
  }
}

function printSuccess(path) {
  console.log(`Validation passed: ${path}`);
}

async function loadFixture(path) {
  const raw = await readFile(path, "utf8");
  return JSON.parse(raw);
}

function resolveTsModule(fromFile, specifier) {
  if (!specifier.startsWith(".")) {
    return null;
  }

  const base = resolve(dirname(fromFile), specifier);
  const candidates = [
    base,
    `${base}.ts`,
    `${base}.tsx`,
    resolve(base, "index.ts"),
    resolve(base, "index.tsx")
  ];

  for (const candidate of candidates) {
    if (existsSync(candidate)) {
      return candidate;
    }
  }

  return null;
}

/**
 * Transpile a TS module and its relative local dependencies into temporary ESM files.
 */
async function importTsDataModule(modulePath) {
  const entryAbs = resolve(modulePath);
  const tmpFiles = [];
  const compiled = new Map();

  async function compile(absPath) {
    if (compiled.has(absPath)) {
      return compiled.get(absPath);
    }

    const source = await readFile(absPath, "utf8");
    let output = ts.transpileModule(source, {
      compilerOptions: {
        module: ts.ModuleKind.ES2022,
        target: ts.ScriptTarget.ES2022
      },
      fileName: absPath
    }).outputText;

    const importPattern = /from\s+["'](\.[^"']+)["']/g;
    const specifiers = new Set();
    let match;
    while ((match = importPattern.exec(output)) !== null) {
      specifiers.add(match[1]);
    }

    for (const specifier of specifiers) {
      const depAbs = resolveTsModule(absPath, specifier);
      if (!depAbs) {
        continue;
      }
      const depTmp = await compile(depAbs);
      const depUrl = pathToFileURL(depTmp).href;
      output = output.replaceAll(`from "${specifier}"`, `from "${depUrl}"`);
      output = output.replaceAll(`from '${specifier}'`, `from "${depUrl}"`);
    }

    const tmpName = `.tmp-validate-${basename(absPath, ".ts")}-${Date.now()}-${Math.round(Math.random() * 1000)}.mjs`;
    const tmpPath = resolve(dirname(absPath), tmpName);
    await writeFile(tmpPath, output, "utf8");
    tmpFiles.push(tmpPath);
    compiled.set(absPath, tmpPath);
    return tmpPath;
  }

  try {
    const entryTmp = await compile(entryAbs);
    return await import(pathToFileURL(entryTmp).href);
  } finally {
    await Promise.all(
      tmpFiles.map(async (file) => {
        try {
          await unlink(file);
        } catch {
          // ignore cleanup races
        }
      })
    );
  }
}

/**
 * Fixture mode validates the site footer/contact contract needed by plan03 + CNT checks.
 * Full marketingContentSchema is enforced against live src/content modules instead,
 * because historical fixtures are intentionally partial.
 */
async function validateFixture(path) {
  try {
    const content = await loadFixture(path);
    const site = content?.site;

    if (!site || typeof site !== "object") {
      console.error(`Validation failed: ${path}`);
      console.error("- site: Site object is required");
      return false;
    }

    if (typeof site.name !== "string" || site.name.trim().length === 0) {
      console.error(`Validation failed: ${path}`);
      console.error("- site.name: Site name is required");
      return false;
    }

    if (typeof site.tagline !== "string" || site.tagline.trim().length === 0) {
      console.error(`Validation failed: ${path}`);
      console.error("- site.tagline: Site tagline is required");
      return false;
    }

    if (site.footer?.privacyPolicyLabel != null || site.footer?.privacyPolicyHref != null) {
      console.error(`Validation failed: ${path}`);
      console.error("- site.footer: privacyPolicy fields must not be present");
      return false;
    }

    printSuccess(path);
    return true;
  } catch (error) {
    console.error(`Validation failed: ${path}`);
    console.error(error instanceof Error ? error.message : String(error));
    return false;
  }
}

async function validateProjectContent() {
  try {
    const schemaModule = await importTsDataModule("src/content/schema.ts");
    const { marketingContentSchema, launchPageSeoListSchema } = schemaModule;

    const siteModule = await importTsDataModule("src/content/site.ts");
    const servicesModule = await importTsDataModule("src/content/services.ts");
    const contractsModule = await importTsDataModule("src/content/contracts.ts");
    const clientsModule = await importTsDataModule("src/content/clients.ts");
    const certificationsModule = await importTsDataModule("src/content/certifications.ts");
    const trustModule = await importTsDataModule("src/content/trust.ts");
    const solutionsModule = await importTsDataModule("src/content/solutions.ts");
    const executiveRecruitingModule = await importTsDataModule("src/content/executive-recruiting.ts");
    const consultingServicesModule = await importTsDataModule("src/content/consulting-services.ts");
    const capabilitiesServicesModule = await importTsDataModule(
      "src/content/capabilities-statement-services.ts"
    );
    const capabilitiesProductsModule = await importTsDataModule(
      "src/content/capabilities-statement-products.ts"
    );
    const capabilitiesFederalModule = await importTsDataModule(
      "src/content/capabilities-statement-federal.ts"
    );
    const nasaSewpViModule = await importTsDataModule("src/content/nasa-sewp-vi.ts");
    const eventsModule = await importTsDataModule("src/content/events.ts");

    const content = {
      site: siteModule.siteContent,
      services: servicesModule.servicesContent,
      contracts: contractsModule.contractsContent,
      contractsPage: contractsModule.contractsPageContent,
      clientsPage: clientsModule.clientsPageContent,
      certificationsPage: certificationsModule.certificationsPageContent,
      trust: trustModule.trustContent,
      solutionsPage: solutionsModule.solutionsPageContent,
      executiveRecruitingPage: executiveRecruitingModule.executiveRecruitingPageContent,
      consultingServicesPage: consultingServicesModule.consultingServicesPageContent,
      capabilitiesStatementServicesPage: capabilitiesServicesModule.capabilitiesStatementServicesPageContent,
      capabilitiesStatementProductsPage: capabilitiesProductsModule.capabilitiesStatementProductsPageContent,
      capabilitiesStatementFederalPage: capabilitiesFederalModule.capabilitiesStatementFederalPageContent,
      nasaSewpViPage: nasaSewpViModule.nasaSewpViPageContent,
      eventsPage: eventsModule.eventsPageContent
    };

    const result = marketingContentSchema.safeParse(content);

    if (!result.success) {
      printFailure("src/content/*.ts", result.error);
      return false;
    }

    const seoModule = await importTsDataModule("src/content/seo.ts");
    const seoResult = launchPageSeoListSchema.safeParse(seoModule.launchPageSeoContent);

    if (!seoResult.success) {
      printFailure("src/content/seo.ts", seoResult.error);
      return false;
    }

    printSuccess("src/content/seo.ts");
    printSuccess("src/content/*.ts");
    return true;
  } catch (error) {
    console.error("Validation failed: src/content/*.ts");
    console.error(error instanceof Error ? error.message : String(error));
    return false;
  }
}

async function run() {
  const args = process.argv.slice(2);
  const fixtureIndex = args.indexOf("--fixture");
  const checkInvalidFixture = args.includes("--check-invalid-fixture");

  if (fixtureIndex >= 0) {
    const fixturePath = args[fixtureIndex + 1];

    if (!fixturePath) {
      console.error("Validation failed: --fixture requires a file path");
      process.exitCode = 1;
      return;
    }

    const ok = await validateFixture(fixturePath);
    process.exitCode = ok ? 0 : 1;
    return;
  }

  if (checkInvalidFixture) {
    const validOk = await validateFixture("tests/fixtures/valid-content.json");
    const invalidOk = await validateFixture("tests/fixtures/invalid-content.json");
    process.exitCode = validOk && !invalidOk ? 0 : 1;
    return;
  }

  const ok = await validateProjectContent();
  process.exitCode = ok ? 0 : 1;
}

await run();
