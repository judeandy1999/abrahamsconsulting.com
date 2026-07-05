import type { Metadata } from "next";
import "../styles/pages/home-sections.css";
import { AwardBanner } from "../../components/marketing/AwardBanner";
import { HomeCertificationBar } from "../../components/marketing/HomeCertificationBar";
import { HomeHero } from "../../components/marketing/HomeHero";
import { HomeAboutSection } from "../../components/marketing/HomeAboutSection";
import { HomeFederalCapabilitiesSection } from "../../components/marketing/HomeFederalCapabilitiesSection";
import { HomeSolutionsSection } from "../../components/marketing/HomeSolutionsSection";
import { HomeConsultingServicesSection } from "../../components/marketing/HomeConsultingServicesSection";
import { HomeWhyChooseSection } from "../../components/marketing/HomeWhyChooseSection";
import { loadMarketingContent } from "../../lib/content/load-content";
import { buildMarketingMetadata } from "../../lib/seo/metadata";
import { getStaticPageSeo } from "../../lib/seo/page-seo";

export const dynamic = "force-static";

export const metadata: Metadata = buildMarketingMetadata(getStaticPageSeo("/")!);

export default function HomePage() {
  const { site } = loadMarketingContent();

  return (
    <>
      <link
        rel="preload"
        as="image"
        href="/images/hero-logo-mobile.webp"
        type="image/webp"
        media="(max-width: 960px)"
        fetchPriority="high"
      />
      <link
        rel="preload"
        as="image"
        href="/images/hero-logo.webp"
        type="image/webp"
        media="(min-width: 961px)"
        fetchPriority="high"
      />
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
