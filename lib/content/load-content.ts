import { capabilitiesStatementFederalPageContent } from "../../src/content/capabilities-statement-federal";
import { capabilitiesStatementProductsPageContent } from "../../src/content/capabilities-statement-products";
import { capabilitiesStatementServicesPageContent } from "../../src/content/capabilities-statement-services";
import { certificationsPageContent } from "../../src/content/certifications";
import { clientsPageContent } from "../../src/content/clients";
import { contractsContent, contractsPageContent } from "../../src/content/contracts";
import { consultingServicesPageContent } from "../../src/content/consulting-services";
import { executiveRecruitingPageContent } from "../../src/content/executive-recruiting";
import { marketingContentSchema, type MarketingContent } from "../../src/content/schema";
import { loadNasaSewpViPageContent } from "./nasa-sewp-vi-page";
import { servicesContent } from "../../src/content/services";
import { solutionsPageContent } from "../../src/content/solutions";
import { siteContent } from "../../src/content/site";
import { trustContent } from "../../src/content/trust";

export function loadMarketingContent(): MarketingContent {
  return marketingContentSchema.parse({
    site: siteContent,
    services: servicesContent,
    contracts: contractsContent,
    contractsPage: contractsPageContent,
    clientsPage: clientsPageContent,
    certificationsPage: certificationsPageContent,
    trust: trustContent,
    solutionsPage: solutionsPageContent,
    executiveRecruitingPage: executiveRecruitingPageContent,
    consultingServicesPage: consultingServicesPageContent,
    capabilitiesStatementServicesPage: capabilitiesStatementServicesPageContent,
    capabilitiesStatementProductsPage: capabilitiesStatementProductsPageContent,
    capabilitiesStatementFederalPage: capabilitiesStatementFederalPageContent,
    nasaSewpViPage: loadNasaSewpViPageContent()
  });
}
