import type { Metadata } from "next";
import Link from "next/link";
import { loadMarketingContent } from "../../../lib/content/load-content";
import { buildMarketingMetadata } from "../../../lib/seo/metadata";
import { getStaticPageSeo } from "../../../lib/seo/page-seo";

export const dynamic = "force-static";

export const metadata: Metadata = buildMarketingMetadata(getStaticPageSeo("/contracts")!);

export default function ContractsPage() {
  const { contracts } = loadMarketingContent();

  return (
    <main id="main-content" className="marketing-main">
      <div className="marketing-main__inner">
        <h1>Contracts</h1>
        <p>
          We support procurement-ready delivery through contract-aligned capabilities that help agencies and prime
          partners engage quickly and compliantly.
        </p>
        <ul>
          {contracts.map((contract) => (
            <li key={contract.code}>
              <h2>
                {contract.code} - {contract.name}
              </h2>
              <p>{contract.description}</p>
              <Link href="/services">{contract.servicesLinkText}</Link>
            </li>
          ))}
        </ul>
        <p>
          Need to validate the right vehicle? <Link href="/consultation">Request a consultation</Link>.
        </p>
      </div>
    </main>
  );
}
