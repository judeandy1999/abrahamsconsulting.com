import Link from "next/link";
import { JsonLdScript } from "../../components/seo/JsonLdScript";
import { loadMarketingContent } from "../../lib/content/load-content";
import { buildOrganizationJsonLd } from "../../lib/seo/json-ld";

type MarketingLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  const { site } = loadMarketingContent();

  return (
    <>
      <JsonLdScript data={buildOrganizationJsonLd(site)} />
      <header
        style={{
          borderBottom: "1px solid #e5e7eb",
          backgroundColor: "#ffffff"
        }}
      >
        <nav
          aria-label="Marketing primary navigation"
          style={{
            margin: "0 auto",
            maxWidth: "64rem",
            padding: "1rem 1.5rem"
          }}
        >
          <ul style={{ display: "flex", gap: "1rem", listStyle: "none", margin: 0, padding: 0 }}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/contracts">Contracts</Link>
            </li>
            <li>
              <Link href="/trust">Trust</Link>
            </li>
            <li>
              <Link href="/consultation">Consultation</Link>
            </li>
          </ul>
        </nav>
      </header>
      {children}
    </>
  );
}
