import type { Metadata } from "next";
import "../../styles/pages/marketing-secondary.css";
import { ExecutiveRecruitingPageContent } from "../../../components/marketing/ExecutiveRecruitingPageContent";
import { loadMarketingContent } from "../../../lib/content/load-content";
import { buildMarketingMetadata } from "../../../lib/seo/metadata";
import { getStaticPageSeo } from "../../../lib/seo/page-seo";
import { hubSpotPortalEmbedScriptSrc } from "../../../lib/hubspot/embed-script";

export const dynamic = "force-static";

const EXEC_RECRUITING_HUBSPOT_PORTAL_ID = "44647552";

export const metadata: Metadata = buildMarketingMetadata(getStaticPageSeo("/executive-recruiting")!);

export default function ExecutiveRecruitingPage() {
  const { executiveRecruitingPage } = loadMarketingContent();

  return (
    <main id="main-content" className="marketing-main marketing-main--executive-recruiting">
      <link
        rel="preload"
        href={hubSpotPortalEmbedScriptSrc(EXEC_RECRUITING_HUBSPOT_PORTAL_ID)}
        as="script"
      />
      <ExecutiveRecruitingPageContent content={executiveRecruitingPage} />
    </main>
  );
}
