import "../styles/marketing-responsive.css";
import "../styles/pages/events.css";
import { MarketingEventSplash } from "../../components/marketing/MarketingEventSplash";
import { MarketingFooter } from "../../components/marketing/MarketingFooter";
import { MarketingHeader } from "../../components/marketing/MarketingHeader";
import { JsonLdScript } from "../../components/seo/JsonLdScript";
import { loadMarketingContent } from "../../lib/content/load-content";

type MarketingLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  const { site, eventsPage } = loadMarketingContent();

  return (
    <>
      <JsonLdScript src="/ld/organization" />
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
      <MarketingEventSplash splash={eventsPage.splash} />
    </>
  );
}
