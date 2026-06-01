import type { Metadata } from "next";
import Link from "next/link";
import { AwardBanner } from "../../components/marketing/AwardBanner";
import { HomeAboutSection } from "../../components/marketing/HomeAboutSection";
import { HomeCertificationBar } from "../../components/marketing/HomeCertificationBar";
import { HomeHero } from "../../components/marketing/HomeHero";
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
      <AwardBanner site={site} />
      <HomeHero site={site} />
      <HomeCertificationBar site={site} />
      <HomeAboutSection site={site} />

      <main id="main-content" className="marketing-main">
        <div className="marketing-main__inner">
          <section id="home-offer-summary" aria-label="Offer summary">
            <h2>How we support delivery teams</h2>
            <ul>
              {featuredServices.map((service) => (
                <li key={service.slug}>
                  <strong>{service.title}:</strong> {service.summary}{" "}
                  <Link href={`/services/${service.slug}`}>Learn more</Link>
                </li>
              ))}
            </ul>
            <h3>Procurement pathways</h3>
            <ul>
              {featuredContracts.map((contract) => (
                <li key={contract.code}>
                  <strong>{contract.name}:</strong> {contract.description}{" "}
                  <Link href="/contracts">View vehicles</Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
