import type { Metadata } from "next";
import "../../styles/pages/marketing-secondary.css";
import { ExecutiveRecruitingHero } from "../../../components/marketing/ExecutiveRecruitingHero";
import { ExecutiveRecruitingHiringCta } from "../../../components/marketing/ExecutiveRecruitingHiringCta";
import { ExecutiveRecruitingHiringProfilesSection } from "../../../components/marketing/ExecutiveRecruitingHiringProfilesSection";
import { ExecutiveRecruitingWrongHireSection } from "../../../components/marketing/ExecutiveRecruitingWrongHireSection";
import { loadMarketingContent } from "../../../lib/content/load-content";
import { buildMarketingMetadata } from "../../../lib/seo/metadata";
import { getStaticPageSeo } from "../../../lib/seo/page-seo";

export const dynamic = "force-static";

export const metadata: Metadata = buildMarketingMetadata(getStaticPageSeo("/executive-recruiting")!);

export default function ExecutiveRecruitingPage() {
  const { executiveRecruitingPage } = loadMarketingContent();

  return (
    <main id="main-content" className="marketing-main marketing-main--executive-recruiting">
      <ExecutiveRecruitingHero hero={executiveRecruitingPage.hero} />
      <ExecutiveRecruitingWrongHireSection section={executiveRecruitingPage.wrongHireSection} />
      <ExecutiveRecruitingHiringCta cta={executiveRecruitingPage.hiringProfileCta} />
      <ExecutiveRecruitingHiringProfilesSection section={executiveRecruitingPage.hiringProfilesSection} />
    </main>
  );
}
