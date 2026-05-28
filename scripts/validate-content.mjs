import { readFile } from "node:fs/promises";
import { unlink, writeFile } from "node:fs/promises";
import { basename, resolve } from "node:path";
import process from "node:process";
import { pathToFileURL } from "node:url";
import ts from "typescript";
import { z } from "zod";

const siteContentSchema = z.object({
  name: z.string().min(1, "Site name is required"),
  tagline: z.string().min(1, "Site tagline is required")
});

const serviceItemSchema = z.object({
  slug: z.string().min(1, "Service slug is required"),
  title: z.string().min(1, "Service title is required"),
  summary: z.string().min(1, "Service summary is required")
});

const contractItemSchema = z.object({
  code: z.string().min(1, "Contract code is required"),
  name: z.string().min(1, "Contract name is required"),
  description: z.string().min(1, "Contract description is required")
});

const marketingContentSchema = z.object({
  site: siteContentSchema,
  services: z.array(serviceItemSchema).min(1, "At least one service is required"),
  contracts: z.array(contractItemSchema).min(1, "At least one contract entry is required")
});

function formatPath(issuePath) {
  return issuePath.length ? issuePath.join(".") : "root";
}

async function loadFixture(path) {
  const raw = await readFile(path, "utf8");
  return JSON.parse(raw);
}

async function importTsDataModule(modulePath) {
  const absolutePath = resolve(modulePath);
  const source = await readFile(absolutePath, "utf8");
  const transpiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.ES2022,
      target: ts.ScriptTarget.ES2022
    },
    fileName: absolutePath
  }).outputText;

  const tmpName = `.tmp-validate-${basename(modulePath, ".ts")}-${Date.now()}-${Math.round(Math.random() * 1000)}.mjs`;
  const tmpPath = resolve(tmpName);

  await writeFile(tmpPath, transpiled, "utf8");

  try {
    return await import(pathToFileURL(tmpPath).href);
  } finally {
    await unlink(tmpPath);
  }
}

function printFailure(path, error) {
  console.error(`Validation failed: ${path}`);

  for (const issue of error.issues) {
    console.error(`- ${formatPath(issue.path)}: ${issue.message}`);
  }
}

function printSuccess(path) {
  console.log(`Validation passed: ${path}`);
}

async function validateFixture(path) {
  try {
    const content = await loadFixture(path);
    const result = marketingContentSchema.safeParse(content);

    if (!result.success) {
      printFailure(path, result.error);
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
    const siteModule = await importTsDataModule("src/content/site.ts");
    const servicesModule = await importTsDataModule("src/content/services.ts");
    const contractsModule = await importTsDataModule("src/content/contracts.ts");

    const content = {
      site: siteModule.siteContent,
      services: servicesModule.servicesContent,
      contracts: contractsModule.contractsContent
    };

    const result = marketingContentSchema.safeParse(content);

    if (!result.success) {
      printFailure("src/content/*.ts", result.error);
      return false;
    }

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
