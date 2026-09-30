import type { Metadata } from "next";
import { Suspense } from "react";
import { AngelaHubPage } from "../../../components/marketing/angela-gibson/AngelaHubPage";
import { buildMarketingMetadata } from "../../../lib/seo/metadata";
import { getStaticPageSeo } from "../../../lib/seo/page-seo";
import "../../styles/pages/angela-gibson.css";

export const dynamic = "force-static";

export const metadata: Metadata = buildMarketingMetadata(getStaticPageSeo("/angela-gibson")!);

export default function AngelaGibsonPage() {
  return (
    <main id="main-content" className="marketing-main marketing-main--angela-gibson">
      <Suspense fallback={null}>
        <AngelaHubPage />
      </Suspense>
    </main>
  );
}
