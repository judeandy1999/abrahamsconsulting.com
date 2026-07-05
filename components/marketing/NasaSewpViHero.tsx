"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { NasaSewpViPageContent } from "../../src/content/schema";
import { NASA_SEWP_VI_HERO_ASSETS } from "../../src/content/nasa-sewp-vi";
import { accessibleExternalLinkLabel } from "../../lib/accessibility/accessible-external-label";
import { useMarketingMotionConfig } from "./marketing-motion";

type NasaSewpViHeroProps = {
  hero: NasaSewpViPageContent["hero"];
  capabilityStatementHref: string;
};

function IconDocumentCheck() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8 3.75h5.17L17 7.58V20.25A1.75 1.75 0 0 1 15.25 22H8.75A1.75 1.75 0 0 1 7 20.25V5.5A1.75 1.75 0 0 1 8.75 3.75H8Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M13 3.75V8.25H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="m9.5 13.25 1.5 1.5 3.5-3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconTag() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4.75 12.75V6.5A1.75 1.75 0 0 1 6.5 4.75H12.75L19.25 11.25 12.75 17.75 6.5 11.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="9.25" cy="9.25" r="1.1" fill="currentColor" />
    </svg>
  );
}

function IconDownload() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 4.5v9.75m0 0 3.75-3.75M12 14.25l-3.75-3.75M5.25 18.75h13.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function NasaSewpViHero({ hero, capabilityStatementHref }: NasaSewpViHeroProps) {
  const { containerVariants, itemVariants, itemTransition, viewport } = useMarketingMotionConfig();

  return (
    <section className="sewp-vi-hero" aria-labelledby="sewp-vi-hero-heading">
      <div className="sewp-vi-hero__content-column">
        <motion.div
          className="sewp-vi-hero__content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.p className="sewp-vi-hero__eyebrow" variants={itemVariants} transition={itemTransition}>
            {hero.eyebrow}
          </motion.p>

          <motion.h1 id="sewp-vi-hero-heading" className="sewp-vi-hero__title" variants={itemVariants} transition={itemTransition}>
            {hero.title}
          </motion.h1>

          <motion.p className="sewp-vi-hero__subtitle" variants={itemVariants} transition={itemTransition}>
            <span className="sewp-vi-hero__subtitle-divider" aria-hidden="true">
              |
            </span>
            {hero.subtitle}
          </motion.p>

          <motion.p className="sewp-vi-hero__description" variants={itemVariants} transition={itemTransition}>
            {hero.description}
          </motion.p>

          <motion.div className="sewp-vi-hero__meta" variants={itemVariants} transition={itemTransition}>
            <article className="sewp-vi-hero__meta-card">
              <span className="sewp-vi-hero__meta-icon" aria-hidden="true">
                <IconDocumentCheck />
              </span>
              <div className="sewp-vi-hero__meta-copy">
                <p className="sewp-vi-hero__meta-label">Contract Number</p>
                <p className="sewp-vi-hero__meta-value">{hero.contractNumber}</p>
              </div>
            </article>
            <article className="sewp-vi-hero__meta-card">
              <span className="sewp-vi-hero__meta-icon" aria-hidden="true">
                <IconTag />
              </span>
              <div className="sewp-vi-hero__meta-copy">
                <p className="sewp-vi-hero__meta-label">Category</p>
                <p className="sewp-vi-hero__meta-value">{hero.category}</p>
              </div>
            </article>
          </motion.div>

          <motion.div className="sewp-vi-hero__actions" variants={itemVariants} transition={itemTransition}>
            <a
              href={capabilityStatementHref}
              className="sewp-vi-hero__cta"
              download
              target="_blank"
              rel="noopener noreferrer"
              aria-label={accessibleExternalLinkLabel(hero.capabilityStatementCtaLabel)}
            >
              <IconDownload />
              {hero.capabilityStatementCtaLabel}
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="sewp-vi-hero__visual" aria-hidden="true">
        <div className="sewp-vi-hero__visual-accent" />
        <div className="sewp-vi-hero__visual-frame">
          <Image
            src={NASA_SEWP_VI_HERO_ASSETS.visualImageSrc}
            alt=""
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="sewp-vi-hero__image"
          />
        </div>
        <Image
          src={NASA_SEWP_VI_HERO_ASSETS.nasaLogoSrc}
          alt=""
          width={96}
          height={96}
          className="sewp-vi-hero__nasa-logo"
        />
      </div>
    </section>
  );
}
