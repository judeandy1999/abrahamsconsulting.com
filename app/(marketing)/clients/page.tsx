import type { Metadata } from "next";
import "../../styles/pages/marketing-secondary.css";
import { ClientsPageContent } from "../../../components/marketing/ClientsPageContent";
import { loadMarketingContent } from "../../../lib/content/load-content";
import { buildMarketingMetadata } from "../../../lib/seo/metadata";
import { getStaticPageSeo } from "../../../lib/seo/page-seo";

export const dynamic = "force-static";

export const metadata: Metadata = buildMarketingMetadata(getStaticPageSeo("/clients")!);

export default function ClientsPage() {
  const { clientsPage } = loadMarketingContent();

  return (
    <main id="main-content" className="marketing-main marketing-main--clients">
      <ClientsPageContent content={clientsPage} />
    </main>
  );
}
