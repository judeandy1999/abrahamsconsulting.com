import Link from "next/link";
import { isExternalHref } from "../../lib/navigation/is-external-href";
import type { SiteContent } from "../../src/content/schema";
import { ContactIcon } from "./ContactIcons";
import { MainNav } from "./MainNav";
import { SocialIcon } from "./SocialIcons";

type MarketingHeaderProps = {
  site: SiteContent;
};

export function MarketingHeader({ site }: MarketingHeaderProps) {
  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="utility-bar__inner">
          <div className="utility-bar__contact">
            <a href={`tel:${site.contact.phone.replace(/[^\d+]/g, "")}`} className="utility-bar__contact-link">
              <ContactIcon name={site.contact.phoneIcon} className="utility-bar__contact-icon" />
              {site.contact.phone}
            </a>
            <span className="utility-bar__divider utility-bar__divider--phone" aria-hidden="true">
              |
            </span>
            <a href={`mailto:${site.contact.email}`} className="utility-bar__contact-link utility-bar__email">
              <ContactIcon name={site.contact.emailIcon} className="utility-bar__contact-icon" />
              {site.contact.email}
            </a>
          </div>
          <div className="utility-bar__end">
            <nav className="utility-bar__links" aria-label="Utility navigation">
              {site.utilityLinks.map((link) =>
                isExternalHref(link.href) ? (
                  <a
                    key={link.href}
                    href={link.href}
                    className="utility-bar__nav-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link key={link.href} href={link.href} className="utility-bar__nav-link">
                    {link.label}
                  </Link>
                )
              )}
            </nav>
            <div className="utility-bar__social" aria-label="Social media">
              {site.socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={link.label}
                  className="utility-bar__social-link"
                >
                  <SocialIcon platform={link.platform} className="utility-bar__social-icon" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <MainNav site={site} />
    </header>
  );
}
