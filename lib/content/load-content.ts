import { contractsContent } from "../../src/content/contracts";
import { marketingContentSchema, type MarketingContent } from "../../src/content/schema";
import { servicesContent } from "../../src/content/services";
import { solutionsPageContent } from "../../src/content/solutions";
import { siteContent } from "../../src/content/site";
import { trustContent } from "../../src/content/trust";

export function loadMarketingContent(): MarketingContent {
  return marketingContentSchema.parse({
    site: siteContent,
    services: servicesContent,
    contracts: contractsContent,
    trust: trustContent,
    solutionsPage: solutionsPageContent
  });
}
