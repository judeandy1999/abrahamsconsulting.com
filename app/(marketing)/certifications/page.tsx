import type { Metadata } from "next";
import "../../styles/pages/marketing-secondary.css";
import { CertificationsPageContent } from "../../../components/marketing/CertificationsPageContent";
import { loadMarketingContent } from "../../../lib/content/load-content";
import { buildMarketingMetadata } from "../../../lib/seo/metadata";
import { getStaticPageSeo } from "../../../lib/seo/page-seo";

export const dynamic = "force-static";

export const metadata: Metadata = buildMarketingMetadata(getStaticPageSeo("/certifications")!);

export default function CertificationsPage() {
  const { certificationsPage } = loadMarketingContent();

  return (
    <main id="main-content" className="marketing-main marketing-main--certifications">
      <CertificationsPageContent content={certificationsPage} />
    </main>
  );
}
