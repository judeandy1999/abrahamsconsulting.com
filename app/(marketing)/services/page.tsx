import type { Metadata } from "next";
import { SolutionShowcaseRow } from "../../../components/marketing/SolutionShowcaseRow";
import { SolutionsHero } from "../../../components/marketing/SolutionsHero";
import { loadMarketingContent } from "../../../lib/content/load-content";
import { buildMarketingMetadata } from "../../../lib/seo/metadata";
import { getStaticPageSeo } from "../../../lib/seo/page-seo";

export const dynamic = "force-static";

export const metadata: Metadata = buildMarketingMetadata(getStaticPageSeo("/services")!);

export default function ServicesPage() {
  const { solutionsPage } = loadMarketingContent();

  return (
    <main id="main-content" className="marketing-main marketing-main--solutions">
      <SolutionsHero hero={solutionsPage.hero} />
      <div className="solutions-showcases">
        {solutionsPage.showcases.map((showcase) => (
          <SolutionShowcaseRow key={showcase.id} showcase={showcase} />
        ))}
      </div>
    </main>
  );
}
