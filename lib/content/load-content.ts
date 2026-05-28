import { contractsContent } from "../../src/content/contracts";
import { marketingContentSchema, type MarketingContent } from "../../src/content/schema";
import { servicesContent } from "../../src/content/services";
import { siteContent } from "../../src/content/site";

export function loadMarketingContent(): MarketingContent {
  return marketingContentSchema.parse({
    site: siteContent,
    services: servicesContent,
    contracts: contractsContent
  });
}
