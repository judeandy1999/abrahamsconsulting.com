import Link from "next/link";
import { loadMarketingContent } from "../../../lib/content/load-content";

export const dynamic = "force-static";

export default function ContractsPage() {
  const { contracts } = loadMarketingContent();

  return (
    <main style={{ margin: "0 auto", maxWidth: "64rem", padding: "3rem 1.5rem" }}>
      <h1 style={{ marginBottom: "1rem" }}>Contracts</h1>
      <p style={{ lineHeight: 1.6, marginBottom: "1.5rem" }}>
        We support procurement-ready delivery through contract-aligned capabilities that help agencies and prime
        partners engage quickly and compliantly.
      </p>
      <ul style={{ lineHeight: 1.7, paddingLeft: "1.25rem", marginBottom: "1.5rem" }}>
        {contracts.map((contract) => (
          <li key={contract.code} style={{ marginBottom: "1rem" }}>
            <h2 style={{ marginBottom: "0.5rem" }}>
              {contract.code} - {contract.name}
            </h2>
            <p style={{ marginBottom: "0.5rem" }}>{contract.description}</p>
            <Link href="/services">{contract.servicesLinkText}</Link>
          </li>
        ))}
      </ul>
      <p>
        Need to validate the right vehicle? <Link href="/consultation">Request a consultation</Link>.
      </p>
    </main>
  );
}
