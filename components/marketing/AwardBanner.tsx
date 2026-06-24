"use client";

import { motion } from "framer-motion";
import type { SiteContent } from "../../src/content/schema";
import { useMarketingMotionConfig } from "./marketing-motion";
import { AwardBannerBadge } from "./AwardBannerBadge";
import { IconArrowRight } from "./NavIcons";

type AwardBannerProps = {
  site: SiteContent;
};

export function AwardBanner({ site }: AwardBannerProps) {
  const { awardBanner } = site;
  const { containerVariants, horizontalItemVariants, itemTransition, viewport } = useMarketingMotionConfig();

  return (
    <section className="award-banner" aria-label="Contract award announcement">
      <motion.div
        className="award-banner__inner"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.div className="award-banner__badge" aria-hidden="true" variants={horizontalItemVariants} transition={itemTransition}>
          <AwardBannerBadge className="award-banner__badge-icon" />
        </motion.div>

        <motion.span className="award-banner__rule" aria-hidden="true" variants={horizontalItemVariants} transition={itemTransition} />

        <motion.p className="award-banner__headline" variants={horizontalItemVariants} transition={itemTransition}>
          {awardBanner.headline}
        </motion.p>

        <motion.span className="award-banner__rule" aria-hidden="true" variants={horizontalItemVariants} transition={itemTransition} />

        <motion.p className="award-banner__description" variants={horizontalItemVariants} transition={itemTransition}>
          {awardBanner.description}
        </motion.p>

        <motion.a
          href={awardBanner.href}
          className="award-banner__cta"
          target="_blank"
          rel="noopener noreferrer"
          variants={horizontalItemVariants}
          transition={itemTransition}
        >
          {awardBanner.ctaLabel}
          <IconArrowRight className="award-banner__cta-icon award-banner__cta-icon--arrow" />
        </motion.a>
      </motion.div>
    </section>
  );
}
