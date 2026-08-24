"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { NasaSewpViPageContent } from "../../src/content/schema";
import { accessibleExternalPdfLinkLabel, withPdfLinkLabel } from "../../lib/accessibility/accessible-external-label";
import { NASA_SEWP_VI_HERO_ASSETS } from "../../src/content/nasa-sewp-vi";
import { useMarketingMotionConfig } from "./marketing-motion";

type NasaSewpViHeroProps = {
  hero: NasaSewpViPageContent["hero"];
};

function IconDownload() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3v10m0 0 4-4m-4 4-4-4M5 19h14"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function NasaSewpViHero({ hero }: NasaSewpViHeroProps) {
  const { containerVariants, itemVariants, itemTransition, viewport } = useMarketingMotionConfig();

  return (
    <section className="sewp-vi-hero" aria-labelledby="sewp-vi-hero-heading">
      <div className="sewp-vi-hero__inner">
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
            <span className="sewp-vi-hero__subtitle">
              <span className="sewp-vi-hero__subtitle-divider" aria-hidden="true">
                |
              </span>
              {hero.subtitle}
            </span>
          </motion.h1>

          {hero.descriptions.map((paragraph) => (
            <p key={paragraph} className="sewp-vi-hero__description">
              {paragraph}
            </p>
          ))}

          <div className="sewp-vi-hero__actions">
            <a
              href={hero.capabilityStatementHref}
              className="sewp-vi-hero__cta"
              download={hero.capabilityStatementFileName}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={accessibleExternalPdfLinkLabel(hero.capabilityStatementCtaLabel)}
            >
              <IconDownload />
              {withPdfLinkLabel(hero.capabilityStatementCtaLabel)}
            </a>
          </div>
        </motion.div>

        <div className="sewp-vi-hero__visual">
          <Image
            src={NASA_SEWP_VI_HERO_ASSETS.nasaLogoSrc}
            alt={NASA_SEWP_VI_HERO_ASSETS.nasaLogoAlt}
            width={560}
            height={448}
            priority
            className="sewp-vi-hero__nasa-logo-image"
          />
        </div>
      </div>
    </section>
  );
}
