import type { Metadata } from "next";
import "../../styles/pages/marketing-secondary.css";
import { CapabilitiesStatementPageContent } from "../../../components/marketing/CapabilitiesStatementPageContent";
import { loadMarketingContent } from "../../../lib/content/load-content";
import { buildMarketingMetadata } from "../../../lib/seo/metadata";
import { getStaticPageSeo } from "../../../lib/seo/page-seo";

export const dynamic = "force-static";

export const metadata: Metadata = buildMarketingMetadata(getStaticPageSeo("/capabilities-statement-products")!);

export default function CapabilitiesStatementProductsPage() {
  const { capabilitiesStatementProductsPage } = loadMarketingContent();

  return (
    <main id="main-content" className="marketing-main marketing-main--cap-stmt-services">
      <CapabilitiesStatementPageContent variant="products" content={capabilitiesStatementProductsPage} />
    </main>
  );
}
