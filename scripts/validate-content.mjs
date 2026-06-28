import { readFile } from "node:fs/promises";
import { unlink, writeFile } from "node:fs/promises";
import { basename, dirname, resolve } from "node:path";
import process from "node:process";
import { pathToFileURL } from "node:url";
import ts from "typescript";
import { z } from "zod";

const consultationFieldSchema = z.object({
  name: z.string().min(1, "Field name is required"),
  label: z.string().min(1, "Field label is required"),
  type: z.enum(["text", "email", "tel", "textarea", "select"]),
  required: z.boolean(),
  placeholder: z.string().optional(),
  options: z.array(z.string().min(1)).optional()
});

const consultationFormSchema = z.object({
  honeypotFieldName: z.string().min(1, "Honeypot field name is required"),
  fields: z.array(consultationFieldSchema).min(4, "Consultation form requires essential qualification fields")
});

const heroFeatureSchema = z.object({
  icon: z.enum(["shield", "document", "lock", "people"]),
  label: z.string().min(1, "Hero feature label is required")
});

const navChildLinkSchema = z.object({
  label: z.string().min(1, "Navigation child label is required"),
  href: z.string().min(1, "Navigation child href is required")
});

const navLinkSchema = z.object({
  label: z.string().min(1, "Navigation label is required"),
  href: z.string().min(1, "Navigation href is required"),
  children: z.array(navChildLinkSchema).optional()
});

const socialLinkSchema = z.object({
  platform: z.enum(["linkedin", "facebook", "twitter", "youtube"]),
  href: z.string().url("Social link must be a valid URL"),
  label: z.string().min(1, "Social link label is required")
});

const partnerLogoSchema = z.object({
  id: z.string().min(1, "Partner logo id is required"),
  name: z.string().min(1, "Partner logo name is required"),
  imageSrc: z.string().min(1, "Partner logo image source is required")
});

const siteContentSchema = z.object({
  name: z.string().min(1, "Site name is required"),
  tagline: z.string().min(1, "Site tagline is required"),
  contact: z.object({
    phone: z.string().min(1, "Contact phone is required"),
    phoneIcon: z.literal("phone"),
    email: z.string().email("Contact email must be valid"),
    emailIcon: z.literal("mail")
  }),
  socialLinks: z.array(socialLinkSchema).min(1, "At least one social link is required"),
  awardBanner: z.object({
    headline: z.string().min(1, "Award banner headline is required"),
    description: z.string().min(1, "Award banner description is required"),
    ctaLabel: z.string().min(1, "Award banner CTA label is required"),
    href: z.string().url("Award banner link must be a valid URL")
  }),
  navigation: z.array(navLinkSchema).min(1, "At least one navigation link is required"),
  homeHero: z.object({
    headlinePrefix: z.string().min(1, "Hero headline prefix is required"),
    headlineAccent: z.string().min(1, "Hero headline accent is required"),
    headlineSuffix: z.string().min(1, "Hero headline suffix is required"),
    description: z.string().min(1, "Hero description is required"),
    features: z.array(heroFeatureSchema).min(1, "At least one hero feature is required"),
    primaryCtaLabel: z.string().min(1, "Hero primary CTA label is required"),
    secondaryCtaLabel: z.string().min(1, "Hero secondary CTA label is required")
  }),
  certificationStrip: z.object({
    title: z.string().min(1, "Certification strip title is required"),
    imageSrc: z.string().min(1, "Certification strip image source is required"),
    imageAlt: z.string().min(1, "Certification strip image alt text is required")
  }),
  homeAbout: z.object({
    eyebrow: z.string().min(1, "Home about eyebrow is required"),
    heading: z.string().min(1, "Home about heading is required"),
    paragraphs: z.array(z.string().min(1)).min(1, "Home about requires at least one paragraph"),
    partnersHeading: z.string().min(1, "Home about partners heading is required"),
    partnerLogos: z.array(partnerLogoSchema).min(1, "At least one partner logo is required")
  }),
  consultationCta: z.object({
    label: z.string().min(1, "Consultation CTA label is required"),
    path: z.literal("/consultation")
  }),
  nasaSewpViCta: z.object({
    label: z.string().min(1, "NASA SEWP VI CTA label is required"),
    path: z.literal("/nasa-sewp-vi")
  }),
  footer: z.object({
    assistTitle: z.string().min(1, "Footer assist title is required"),
    assistBody: z.string().min(1, "Footer assist body is required"),
    logoSrc: z.string().min(1, "Footer logo source is required"),
    logoAlt: z.string().min(1, "Footer logo alt is required"),
    badgesTitle: z.string().min(1, "Footer badges title is required"),
    badges: z.array(partnerLogoSchema).min(1, "At least one footer badge is required"),
    connectTitle: z.string().min(1, "Footer connect title is required"),
    address: z.string().min(1, "Footer address is required"),
    phones: z.array(z.string().min(1)).min(1, "At least one footer phone is required"),
    contactCtaLabel: z.string().min(1, "Footer contact CTA label is required"),
    contactCtaHref: z.string().min(1, "Footer contact CTA href is required"),
    privacyPolicyLabel: z.string().min(1, "Footer privacy policy label is required"),
    privacyPolicyHref: z.string().min(1, "Footer privacy policy href is required"),
    copyrightName: z.string().min(1, "Footer copyright name is required")
  }),
  consultationForm: consultationFormSchema
});

const serviceItemSchema = z.object({
  slug: z.string().min(1, "Service slug is required"),
  title: z.string().min(1, "Service title is required"),
  summary: z.string().min(1, "Service summary is required"),
  capabilityLinkText: z.string().min(1, "Service capability link text is required"),
  procurementLinkText: z.string().min(1, "Service procurement link text is required"),
  consultationCtaLabel: z.string().min(1, "Service consultation CTA label is required")
});

const contractItemSchema = z.object({
  code: z.string().min(1, "Contract code is required"),
  name: z.string().min(1, "Contract name is required"),
  description: z.string().min(1, "Contract description is required"),
  servicesLinkText: z.string().min(1, "Contract services link text is required"),
  consultationCtaLabel: z.string().min(1, "Contract consultation CTA label is required")
});

const certificationSchema = z.object({
  id: z.string().min(1, "Certification id is required"),
  title: z.string().min(1, "Certification title is required"),
  issuer: z.string().min(1, "Certification issuer is required"),
  summary: z.string().min(1, "Certification summary is required"),
  qualificationSignals: z.array(z.string().min(1)).min(1, "At least one qualification signal is required")
});

const caseSnapshotSchema = z.object({
  id: z.string().min(1, "Case snapshot id is required"),
  title: z.string().min(1, "Case snapshot title is required"),
  clientContext: z.string().min(1, "Case snapshot client context is required"),
  outcomesSummary: z.string().min(1, "Case snapshot outcomes summary is required")
});

const partnerIndicatorSchema = z.object({
  id: z.string().min(1, "Partner indicator id is required"),
  name: z.string().min(1, "Partner indicator name is required"),
  imageSrc: z.string().min(1, "Partner indicator image source is required"),
  imageAlt: z.string().min(1, "Partner indicator image alt text is required"),
  imageWidth: z.number().int().positive("Partner indicator image width must be positive"),
  imageHeight: z.number().int().positive("Partner indicator image height must be positive")
});

const trustContentSchema = z.object({
  certifications: z.array(certificationSchema).min(1, "At least one certification is required"),
  caseSnapshots: z.array(caseSnapshotSchema).min(2, "At least two case snapshots are required"),
  partnerIndicators: z.array(partnerIndicatorSchema).min(1, "At least one partner indicator is required")
});

const launchPageSeoSchema = z.object({
  routeKey: z.string().min(1, "Route key is required"),
  path: z.string().min(1, "Path is required"),
  title: z.string().min(1, "SEO title is required"),
  description: z.string().min(1, "SEO description is required")
});

const launchPageSeoListSchema = z
  .array(launchPageSeoSchema)
  .min(8, "Launch SEO registry must cover all static marketing routes");

const solutionSectionIconSchema = z.enum([
  "shield",
  "network",
  "hard-drive",
  "layout-grid",
  "cloud",
  "settings",
  "messages",
  "smartphone"
]);

const solutionInsightIconSchema = z.enum(["play-circle", "calendar", "eye", "award"]);

const solutionPanelSchema = z.object({
  icon: solutionSectionIconSchema,
  eyebrow: z.string().min(1, "Solution panel eyebrow is required"),
  partnerName: z.string(),
  paragraphs: z.array(z.string().min(1)).min(1, "Solution panel requires at least one paragraph"),
  ctaLabel: z.string().min(1, "Solution panel CTA label is required"),
  ctaHref: z.string().min(1, "Solution panel CTA href is required")
});

const solutionVideoMediaSchema = z.object({
  type: z.literal("video"),
  presenter: z.string().optional(),
  subtitle: z.string().optional(),
  title: z.string().min(1, "Solution video title is required"),
  titleAccent: z.string().optional(),
  videoEmbedUrl: z.string().url("Solution video embed URL must be valid"),
  videoTitle: z.string().min(1, "Solution video iframe title is required"),
  addedOnLabel: z.string().optional(),
  addedOnItems: z.array(z.string().min(1)).optional(),
  meta: z
    .array(
      z.object({
        icon: solutionInsightIconSchema,
        label: z.string().min(1, "Solution video meta label is required")
      })
    )
    .optional(),
  duration: z.string().optional()
});

const solutionImageMediaSchema = z.object({
  type: z.literal("image"),
  imageSrc: z.string().min(1, "Solution image source is required"),
  imageAlt: z.string().min(1, "Solution image alt text is required"),
  caption: z.string().min(1, "Solution image caption is required")
});

const solutionMediaSchema = z.discriminatedUnion("type", [solutionVideoMediaSchema, solutionImageMediaSchema]);

const solutionShowcaseSchema = z.object({
  id: z.string().min(1, "Solution showcase id is required"),
  textPosition: z.enum(["left", "right"]),
  panel: solutionPanelSchema,
  media: solutionMediaSchema
});

const solutionsPageSchema = z.object({
  hero: z.object({
    segments: z.array(z.string().min(1)).min(1, "Solutions hero requires at least one segment"),
    description: z.string().min(1, "Solutions hero description is required")
  }),
  showcases: z.array(solutionShowcaseSchema).min(2, "Solutions page requires at least two showcases")
});

const executiveRecruitingFeatureIconSchema = z.enum(["talent", "vetting", "leadership", "impact"]);
const executiveRecruitingCtaHighlightIconSchema = z.enum(["confidential", "precision", "partnership"]);
const executiveRecruitingHiringProfileTabIconSchema = z.enum(["advisory", "retained", "confidential", "interim"]);
const executiveRecruitingHiringProfileHighlightIconSchema = z.enum([
  "users",
  "target",
  "chart",
  "search",
  "shield",
  "lock",
  "clock",
  "precision"
]);

const executiveRecruitingHiringProfileSchema = z.object({
  id: z.string().min(1, "Hiring profile id is required"),
  tabLabel: z.string().min(1, "Hiring profile tab label is required"),
  tabIcon: executiveRecruitingHiringProfileTabIconSchema,
  panelEyebrow: z.string().min(1, "Hiring profile panel eyebrow is required"),
  headline: z.string().min(1, "Hiring profile headline is required"),
  description: z.string().min(1, "Hiring profile description is required"),
  highlights: z
    .array(
      z.object({
        icon: executiveRecruitingHiringProfileHighlightIconSchema,
        label: z.string().min(1, "Hiring profile highlight label is required")
      })
    )
    .length(3, "Hiring profile requires three highlights"),
  imageSrc: z.string().min(1, "Hiring profile image source is required"),
  imageAlt: z.string().min(1, "Hiring profile image alt text is required"),
  learnMoreLabel: z.string().min(1, "Hiring profile learn more label is required"),
  learnMoreHref: z.string().min(1, "Hiring profile learn more href is required")
});

const executiveRecruitingCardSchema = z.object({
  id: z.string().min(1, "Executive recruiting card id is required"),
  title: z.string().min(1, "Executive recruiting card title is required"),
  description: z.string().min(1, "Executive recruiting card description is required"),
  imageSrc: z.string().min(1, "Executive recruiting card image source is required"),
  imageAlt: z.string().min(1, "Executive recruiting card image alt text is required"),
  learnMoreLabel: z.string().min(1, "Executive recruiting card learn more label is required"),
  learnMoreHref: z.string().min(1, "Executive recruiting card learn more href is required")
});

const executiveRecruitingPageSchema = z.object({
  hero: z.object({
    eyebrow: z.string().min(1, "Executive recruiting eyebrow is required"),
    headlinePrefix: z.string().min(1, "Executive recruiting headline prefix is required"),
    headlineAccent: z.string().min(1, "Executive recruiting headline accent is required"),
    headlineSuffix: z.string().min(1, "Executive recruiting headline suffix is required"),
    description: z.string().min(1, "Executive recruiting description is required"),
    imageSrc: z.string().min(1, "Executive recruiting image source is required"),
    imageAlt: z.string().min(1, "Executive recruiting image alt text is required"),
    features: z
      .array(
        z.object({
          icon: executiveRecruitingFeatureIconSchema,
          title: z.string().min(1, "Executive recruiting feature title is required"),
          description: z.string().min(1, "Executive recruiting feature description is required")
        })
      )
      .length(4, "Executive recruiting hero requires four features"),
    primaryCtaLabel: z.string().min(1, "Executive recruiting primary CTA label is required"),
    primaryCtaHref: z.string().min(1, "Executive recruiting primary CTA href is required"),
    secondaryCtaLabel: z.string().min(1, "Executive recruiting secondary CTA label is required"),
    secondaryCtaHref: z.string().url("Executive recruiting secondary CTA href must be valid")
  }),
  wrongHireSection: z.object({
    eyebrow: z.string().min(1, "Wrong hire section eyebrow is required"),
    title: z.string().min(1, "Wrong hire section title is required"),
    description: z.string().min(1, "Wrong hire section description is required"),
    cards: z.array(executiveRecruitingCardSchema).length(3, "Wrong hire section requires three cards")
  }),
  hiringProfilesSection: z.object({
    eyebrow: z.string().min(1, "Hiring profiles section eyebrow is required"),
    title: z.string().min(1, "Hiring profiles section title is required"),
    description: z.string().min(1, "Hiring profiles section description is required"),
    profiles: z.array(executiveRecruitingHiringProfileSchema).length(4, "Hiring profiles section requires four profiles")
  }),
  hiringProfileCta: z.object({
    title: z.string().min(1, "Hiring profile CTA title is required"),
    description: z.string().min(1, "Hiring profile CTA description is required"),
    ctaLabel: z.string().min(1, "Hiring profile CTA label is required"),
    ctaHref: z.string().min(1, "Hiring profile CTA href is required"),
    imageSrc: z.string().min(1, "Hiring profile CTA image source is required"),
    imageAlt: z.string().min(1, "Hiring profile CTA image alt text is required"),
    highlights: z
      .array(
        z.object({
          icon: executiveRecruitingCtaHighlightIconSchema,
          label: z.string().min(1, "Hiring profile CTA highlight label is required")
        })
      )
      .length(3, "Hiring profile CTA requires three highlights")
  })
});

const nasaSewpViPastPerformanceSchema = z.object({
  id: z.string().min(1),
  organization: z.string().min(1),
  description: z.string().optional()
});

const nasaSewpViPageSchema = z.object({
  hero: z.object({
    eyebrow: z.string().min(1),
    title: z.string().min(1),
    subtitle: z.string().min(1),
    description: z.string().min(1),
    contractNumber: z.string().min(1),
    category: z.string().min(1),
    capabilityStatementCtaLabel: z.string().min(1)
  }),
  contractOverview: z.object({
    eyebrow: z.string().min(1),
    title: z.string().min(1),
    description: z.string().min(1),
    items: z
      .array(
        z.object({
          id: z.string().min(1),
          icon: z.enum([
            "document",
            "tag",
            "ceiling",
            "calendar",
            "award",
            "customers",
            "uei",
            "cage",
            "business-size",
            "founded"
          ]),
          label: z.string().min(1),
          value: z.string().min(1)
        })
      )
      .length(10)
  }),
  aboutSewp: z.object({
    title: z.string().min(1),
    paragraphs: z.array(z.string().min(1)).min(1)
  }),
  aboutCompany: z.object({
    title: z.string().min(1),
    paragraphs: z.array(z.string().min(1)).min(1)
  }),
  whyChoose: z.object({
    title: z.string().min(1),
    items: z
      .array(
        z.object({
          id: z.string().min(1),
          title: z.string().min(1)
        })
      )
      .min(1)
  }),
  coreCompetencies: z.object({
    title: z.string().min(1),
    items: z
      .array(
        z.object({
          id: z.string().min(1),
          icon: z.enum([
            "infrastructure",
            "cybersecurity",
            "cloud",
            "ai",
            "staffing",
            "network",
            "storage",
            "lifecycle",
            "compliance",
            "helpdesk"
          ]),
          title: z.string().min(1)
        })
      )
      .min(1)
  }),
  categoryACapabilities: z.object({
    title: z.string().min(1),
    items: z.array(z.string().min(1)).min(1)
  }),
  contractVehicles: z.object({
    title: z.string().min(1),
    items: z.array(z.string().min(1)).min(1)
  }),
  orderingProcess: z.object({
    title: z.string().min(1),
    steps: z
      .array(
        z.object({
          id: z.string().min(1),
          description: z.string().min(1)
        })
      )
      .length(3)
  }),
  pastPerformance: z.object({
    title: z.string().min(1),
    items: z.array(nasaSewpViPastPerformanceSchema).min(1)
  }),
  companyInformation: z.object({
    title: z.string().min(1),
    items: z
      .array(
        z.object({
          id: z.string().min(1),
          label: z.string().min(1),
          value: z.string().min(1),
          href: z.string().url().optional()
        })
      )
      .min(1)
  }),
  certifications: z.object({
    title: z.string().min(1),
    items: z.array(z.string().min(1)).min(1)
  }),
  resources: z.object({
    title: z.string().min(1),
    capabilityStatement: z.object({
      label: z.string().min(1),
      href: z.string().min(1)
    }),
    orderingGuide: z.object({
      label: z.string().min(1),
      comingSoonLabel: z.string().min(1),
      href: z.string().min(1),
      isAvailable: z.boolean().optional()
    })
  }),
  federalSalesContact: z.object({
    title: z.string().min(1),
    prompt: z.string().min(1),
    subtitle: z.string().min(1),
    email: z.string().email(),
    phones: z.array(z.string().min(1)).min(1),
    ctaLabel: z.string().min(1)
  })
});

const marketingContentSchema = z.object({
  site: siteContentSchema,
  services: z.array(serviceItemSchema).min(1, "At least one service is required"),
  contracts: z.array(contractItemSchema).min(1, "At least one contract entry is required"),
  trust: trustContentSchema,
  solutionsPage: solutionsPageSchema,
  executiveRecruitingPage: executiveRecruitingPageSchema,
  nasaSewpViPage: nasaSewpViPageSchema
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
  const tmpPath = resolve(dirname(absolutePath), tmpName);

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
    const trustModule = await importTsDataModule("src/content/trust.ts");
    const solutionsModule = await importTsDataModule("src/content/solutions.ts");
    const executiveRecruitingModule = await importTsDataModule("src/content/executive-recruiting.ts");
    const nasaSewpViModule = await importTsDataModule("src/content/nasa-sewp-vi.ts");

    const content = {
      site: siteModule.siteContent,
      services: servicesModule.servicesContent,
      contracts: contractsModule.contractsContent,
      trust: trustModule.trustContent,
      solutionsPage: solutionsModule.solutionsPageContent,
      executiveRecruitingPage: executiveRecruitingModule.executiveRecruitingPageContent,
      nasaSewpViPage: nasaSewpViModule.nasaSewpViPageContent
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
