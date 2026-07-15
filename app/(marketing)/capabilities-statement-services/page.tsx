import type { Metadata } from "next";
import "../../styles/pages/marketing-secondary.css";
import { CapabilitiesStatementPageContent } from "../../../components/marketing/CapabilitiesStatementPageContent";
import { loadMarketingContent } from "../../../lib/content/load-content";
import { buildMarketingMetadata } from "../../../lib/seo/metadata";
import { getStaticPageSeo } from "../../../lib/seo/page-seo";

export const dynamic = "force-static";

export const metadata: Metadata = buildMarketingMetadata(
  getStaticPageSeo("/capabilities-statement-services")!
);

export default function CapabilitiesStatementServicesPage() {
  const { capabilitiesStatementServicesPage } = loadMarketingContent();

  return (
    <main id="main-content" className="marketing-main marketing-main--cap-stmt-services">
      <CapabilitiesStatementPageContent variant="services" content={capabilitiesStatementServicesPage} />
    </main>
  );
}
