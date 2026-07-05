import "../styles/marketing-responsive.css";
import { MarketingFooter } from "../../components/marketing/MarketingFooter";
import { MarketingHeader } from "../../components/marketing/MarketingHeader";
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
      <div className="skip-links">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <a href="#site-navigation" className="skip-link">
          Skip to navigation
        </a>
      </div>
      <MarketingHeader site={site} />
      {children}
      <MarketingFooter site={site} />
    </>
  );
}
