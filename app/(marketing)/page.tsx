import type { Metadata } from "next";
import Link from "next/link";
import { AwardBanner } from "../../components/marketing/AwardBanner";
import { HomeAboutSection } from "../../components/marketing/HomeAboutSection";
import { HomeCertificationBar } from "../../components/marketing/HomeCertificationBar";
import { HomeConsultingServicesSection } from "../../components/marketing/HomeConsultingServicesSection";
import { HomeFederalCapabilitiesSection } from "../../components/marketing/HomeFederalCapabilitiesSection";
import { HomeHero } from "../../components/marketing/HomeHero";
import { HomeSolutionsSection } from "../../components/marketing/HomeSolutionsSection";
import { HomeWhyChooseSection } from "../../components/marketing/HomeWhyChooseSection";
import { loadMarketingContent } from "../../lib/content/load-content";
import { buildMarketingMetadata } from "../../lib/seo/metadata";
import { getStaticPageSeo } from "../../lib/seo/page-seo";

export const dynamic = "force-static";

export const metadata: Metadata = buildMarketingMetadata(getStaticPageSeo("/")!);

export default function HomePage() {
  const { site, services, contracts } = loadMarketingContent();
  const featuredServices = services.slice(0, 2);
  const featuredContracts = contracts.slice(0, 2);

  return (
    <>
      <main id="main-content" className="marketing-main">
        <AwardBanner site={site} />
        <HomeHero site={site} />
        <HomeCertificationBar site={site} />
        <HomeAboutSection site={site} />
        <HomeFederalCapabilitiesSection site={site} />
        <HomeSolutionsSection site={site} />
        <HomeConsultingServicesSection site={site} />
        <HomeWhyChooseSection site={site} />
      </main>
    </>
  );
}
