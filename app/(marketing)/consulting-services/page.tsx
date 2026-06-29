import type { Metadata } from "next";
import { ConsultingServicesPackageSection } from "../../../components/marketing/ConsultingServicesPackageSection";
import { ConsultingServicesSection } from "../../../components/marketing/ConsultingServicesSection";
import { SolutionsHero } from "../../../components/marketing/SolutionsHero";
import { loadMarketingContent } from "../../../lib/content/load-content";
import { buildMarketingMetadata } from "../../../lib/seo/metadata";
import { getStaticPageSeo } from "../../../lib/seo/page-seo";

export const dynamic = "force-static";

export const metadata: Metadata = buildMarketingMetadata(getStaticPageSeo("/consulting-services")!);

export default function ConsultingServicesPage() {
  const { consultingServicesPage } = loadMarketingContent();

  return (
    <main id="main-content" className="marketing-main marketing-main--consulting-services">
      <SolutionsHero hero={consultingServicesPage.hero} headingId="consulting-services-hero-heading" />
      <ConsultingServicesSection section={consultingServicesPage.servicesSection} />
      <ConsultingServicesPackageSection section={consultingServicesPage.packageSection} />
    </main>
  );
}
