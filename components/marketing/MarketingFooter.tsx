import Image from "next/image";
import Link from "next/link";
import type { SiteContent } from "../../src/content/schema";
import { FooterContactCta, FooterContactIcon } from "./FooterIcons";
import { SocialIcon } from "./SocialIcons";

type MarketingFooterProps = {
  site: SiteContent;
};

export function MarketingFooter({ site }: MarketingFooterProps) {
  const { footer, contact, socialLinks } = site;
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <div className="site-footer__columns">
          <section className="site-footer__column" aria-labelledby="footer-assist-title">
            <h2 id="footer-assist-title" className="site-footer__heading">
              {footer.assistTitle}
            </h2>
            <Image
              src="/images/logo-2.webp"
              alt={site.name}
              width={220}
              height={48}
              className="site-footer__logo"
            />
            <p className="site-footer__assist-text">{footer.assistBody}</p>
          </section>

          <section className="site-footer__column" aria-labelledby="footer-badges-title">
            <h2 id="footer-badges-title" className="site-footer__heading">
              {footer.badgesTitle}
            </h2>
            <div className="site-footer__badges">
              <ul className="site-footer__badges-row site-footer__badges-row--top">
                {footer.badges.slice(0, 3).map((badge) => (
                  <li key={badge.id} className={`site-footer__badge-item site-footer__badge-item--${badge.id}`}>
                    <div className="site-footer__badge-card">
                      <Image
                        src={badge.imageSrc}
                        alt={badge.name}
                        width={245}
                        height={100}
                        className="site-footer__badge-image"
                      />
                    </div>
                  </li>
                ))}
              </ul>
              <ul className="site-footer__badges-row site-footer__badges-row--bottom">
                {footer.badges.slice(3).map((badge) => (
                  <li key={badge.id} className={`site-footer__badge-item site-footer__badge-item--${badge.id}`}>
                    <div className="site-footer__badge-card">
                      <Image
                        src={badge.imageSrc}
                        alt={badge.name}
                        width={245}
                        height={100}
                        className="site-footer__badge-image"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="site-footer__column" aria-labelledby="footer-connect-title">
            <h2 id="footer-connect-title" className="site-footer__heading">
              {footer.connectTitle}
            </h2>
            <ul className="site-footer__contact-list">
              <li>
                <span className="site-footer__contact-icon" aria-hidden="true">
                  <FooterContactIcon name="location" />
                </span>
                <span>{footer.address}</span>
              </li>
              <li>
                <span className="site-footer__contact-icon" aria-hidden="true">
                  <FooterContactIcon name="mail" />
                </span>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              {footer.phones.map((phone) => (
                <li key={phone}>
                  <span className="site-footer__contact-icon" aria-hidden="true">
                    <FooterContactIcon name="phone" />
                  </span>
                  <a href={`tel:${phone.replace(/[^\d+]/g, "")}`}>{phone}</a>
                </li>
              ))}
            </ul>
            <FooterContactCta href={footer.contactCtaHref} label={footer.contactCtaLabel} />
          </section>
        </div>
      </div>

      <div className="site-footer__transition" aria-hidden="true">
        <div className="site-footer__transition-surface" />
        <div className="site-footer__transition-stripe" />
      </div>

      <div className="site-footer__bar">
        <div className="site-footer__bar-inner">
          <div className="site-footer__legal">
            <Link href={footer.privacyPolicyHref}>{footer.privacyPolicyLabel}</Link>
            <span className="site-footer__legal-divider" aria-hidden="true">
              |
            </span>
            <span>
              {footer.copyrightName} {year} © All Rights Reserved
            </span>
          </div>
          <div className="site-footer__social" aria-label="Social media">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={link.label}
                className="site-footer__social-link"
              >
                <SocialIcon platform={link.platform} className="site-footer__social-icon" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
