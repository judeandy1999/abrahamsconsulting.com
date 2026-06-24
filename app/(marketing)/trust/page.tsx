import Image from "next/image";
import Link from "next/link";
import { MarketingMotionGroup, MarketingMotionItem } from "../../../components/marketing/MarketingMotion";
import { loadMarketingContent } from "../../../lib/content/load-content";
import { buildMarketingMetadata } from "../../../lib/seo/metadata";
import { getStaticPageSeo } from "../../../lib/seo/page-seo";

export const dynamic = "force-static";

export const metadata = buildMarketingMetadata(getStaticPageSeo("/trust")!);

export default function TrustPage() {
  const { trust } = loadMarketingContent();
  const { certifications, caseSnapshots, partnerIndicators } = trust;

  return (
    <main id="main-content" className="marketing-main">
      <MarketingMotionGroup className="marketing-main__inner">
        <MarketingMotionItem>
          <h1>Trust & Credentials</h1>
          <p>
            Evaluate qualification signals, delivery outcomes, and approved partner indicators before engaging our team.
          </p>
        </MarketingMotionItem>

        <MarketingMotionItem>
          <section className="marketing-main__section" aria-labelledby="certifications-heading">
            <h2 id="certifications-heading">Certifications & qualification signals</h2>
            <ul style={{ listStyle: "disc" }}>
              {certifications.map((certification) => (
                <li key={certification.id}>
                  <h3>{certification.title}</h3>
                  <p>
                    <strong>Issuer:</strong> {certification.issuer}
                  </p>
                  <p>{certification.summary}</p>
                  <p style={{ marginBottom: 0 }}>
                    <strong>Signals:</strong> {certification.qualificationSignals.join(", ")}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </MarketingMotionItem>

        <MarketingMotionItem>
          <section className="marketing-main__section" aria-labelledby="case-snapshots-heading">
            <h2 id="case-snapshots-heading">Case snapshots</h2>
            <ul style={{ listStyle: "disc" }}>
              {caseSnapshots.map((snapshot) => (
                <li key={snapshot.id}>
                  <h3>{snapshot.title}</h3>
                  <p>
                    <strong>Context:</strong> {snapshot.clientContext}
                  </p>
                  <p style={{ marginBottom: 0 }}>
                    <strong>Outcomes:</strong> {snapshot.outcomesSummary}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </MarketingMotionItem>

        <MarketingMotionItem>
          <p>
            Explore <Link href="/services">service capabilities</Link> or{" "}
            <Link href="/consultation">start a consultation</Link> after reviewing qualification signals.
          </p>
        </MarketingMotionItem>

        <MarketingMotionItem>
          <section className="marketing-main__section" aria-labelledby="partner-indicators-heading">
            <h2 id="partner-indicators-heading">Approved partner indicators</h2>
            <ul className="marketing-main__partner-grid">
              {partnerIndicators.map((partner) => (
                <li
                  key={partner.id}
                  className="partner-indicator-card"
                  style={
                    {
                      "--partner-image-width": `${partner.imageWidth}px`,
                      "--partner-image-height": `${partner.imageHeight}px`
                    } as React.CSSProperties
                  }
                >
                  <Image
                    src={partner.imageSrc}
                    alt={partner.imageAlt}
                    width={partner.imageWidth}
                    height={partner.imageHeight}
                    sizes={`${partner.imageWidth}px`}
                    loading="lazy"
                  />
                  <p className="marketing-main__partner-caption">{partner.name}</p>
                </li>
              ))}
            </ul>
          </section>
        </MarketingMotionItem>
      </MarketingMotionGroup>
    </main>
  );
}
