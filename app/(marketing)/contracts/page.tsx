import type { Metadata } from "next";
import "../../styles/pages/marketing-secondary.css";
import { ContractVehiclesBody } from "../../../components/marketing/ContractVehiclesBody";
import { SolutionsHero } from "../../../components/marketing/SolutionsHero";
import { loadMarketingContent } from "../../../lib/content/load-content";
import { buildMarketingMetadata } from "../../../lib/seo/metadata";
import { getStaticPageSeo } from "../../../lib/seo/page-seo";

export const dynamic = "force-static";

export const metadata: Metadata = buildMarketingMetadata(getStaticPageSeo("/contracts")!);

export default function ContractsPage() {
  const { contractsPage } = loadMarketingContent();

  return (
    <main id="main-content" className="marketing-main marketing-main--contracts">
      <SolutionsHero hero={contractsPage.hero} headingId="contracts-hero-heading" />
      <ContractVehiclesBody content={contractsPage} />
    </main>
  );
}
