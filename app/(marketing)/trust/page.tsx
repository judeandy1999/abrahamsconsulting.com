import Image from "next/image";
import Link from "next/link";
import { loadMarketingContent } from "../../../lib/content/load-content";
import { buildMarketingMetadata } from "../../../lib/seo/metadata";
import { getStaticPageSeo } from "../../../lib/seo/page-seo";

export const dynamic = "force-static";

export const metadata = buildMarketingMetadata(getStaticPageSeo("/trust")!);

export default function TrustPage() {
  const { trust } = loadMarketingContent();
  const { certifications, caseSnapshots, partnerIndicators } = trust;

  return (
    <main id="main-content" style={{ margin: "0 auto", maxWidth: "64rem", padding: "3rem 1.5rem" }}>
      <h1 style={{ marginBottom: "1rem" }}>Trust & Credentials</h1>
      <p style={{ lineHeight: 1.6, marginBottom: "2rem" }}>
        Evaluate qualification signals, delivery outcomes, and approved partner indicators before engaging our team.
      </p>

      <section aria-labelledby="certifications-heading" style={{ marginBottom: "2.5rem" }}>
        <h2 id="certifications-heading" style={{ marginBottom: "1rem" }}>
          Certifications & qualification signals
        </h2>
        <ul style={{ lineHeight: 1.7, paddingLeft: "1.25rem", listStyle: "disc" }}>
          {certifications.map((certification) => (
            <li key={certification.id} style={{ marginBottom: "1.25rem" }}>
              <h3 style={{ marginBottom: "0.35rem" }}>{certification.title}</h3>
              <p style={{ marginBottom: "0.35rem" }}>
                <strong>Issuer:</strong> {certification.issuer}
              </p>
              <p style={{ marginBottom: "0.5rem" }}>{certification.summary}</p>
              <p style={{ margin: 0 }}>
                <strong>Signals:</strong> {certification.qualificationSignals.join(", ")}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="case-snapshots-heading" style={{ marginBottom: "2.5rem" }}>
        <h2 id="case-snapshots-heading" style={{ marginBottom: "1rem" }}>
          Case snapshots
        </h2>
        <ul style={{ lineHeight: 1.7, paddingLeft: "1.25rem", listStyle: "disc" }}>
          {caseSnapshots.map((snapshot) => (
            <li key={snapshot.id} style={{ marginBottom: "1.25rem" }}>
              <h3 style={{ marginBottom: "0.35rem" }}>{snapshot.title}</h3>
              <p style={{ marginBottom: "0.35rem" }}>
                <strong>Context:</strong> {snapshot.clientContext}
              </p>
              <p style={{ margin: 0 }}>
                <strong>Outcomes:</strong> {snapshot.outcomesSummary}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <p style={{ lineHeight: 1.6, marginBottom: "2rem" }}>
        Explore <Link href="/services">service capabilities</Link> or{" "}
        <Link href="/consultation">start a consultation</Link> after reviewing qualification signals.
      </p>

      <section aria-labelledby="partner-indicators-heading">
        <h2 id="partner-indicators-heading" style={{ marginBottom: "1rem" }}>
          Approved partner indicators
        </h2>
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem",
            listStyle: "none",
            margin: 0,
            padding: 0
          }}
        >
          {partnerIndicators.map((partner) => (
            <li key={partner.id}>
              <Image
                src={partner.imageSrc}
                alt={partner.imageAlt}
                width={partner.imageWidth}
                height={partner.imageHeight}
                loading="lazy"
              />
              <p style={{ marginTop: "0.5rem", fontSize: "0.875rem" }}>{partner.name}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
