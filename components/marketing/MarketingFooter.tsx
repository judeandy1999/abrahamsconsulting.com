"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { SiteContent } from "../../src/content/schema";
import { useMarketingMotionConfig } from "./marketing-motion";
import { FooterContactCta, FooterContactIcon } from "./FooterMuiIcons";
import { SocialIcon } from "./SocialIcons";

type MarketingFooterProps = {
  site: SiteContent;
};

export function MarketingFooter({ site }: MarketingFooterProps) {
  const { footer, contact, socialLinks } = site;
  const year = new Date().getFullYear();
  const { containerVariants, itemVariants, itemTransition, viewport } = useMarketingMotionConfig();

  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <motion.div
          className="site-footer__columns"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.section
            className="site-footer__column"
            aria-labelledby="footer-assist-title"
            variants={itemVariants}
            transition={itemTransition}
          >
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
          </motion.section>

          <motion.section
            className="site-footer__column"
            aria-labelledby="footer-badges-title"
            variants={itemVariants}
            transition={itemTransition}
          >
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
          </motion.section>

          <motion.section
            className="site-footer__column"
            aria-labelledby="footer-connect-title"
            variants={itemVariants}
            transition={itemTransition}
          >
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
          </motion.section>
        </motion.div>
      </div>

      <div className="site-footer__transition" aria-hidden="true">
        <div className="site-footer__transition-surface" />
        <div className="site-footer__transition-stripe" />
      </div>

      <motion.div
        className="site-footer__bar"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={itemTransition}
      >
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
      </motion.div>
    </footer>
  );
}
