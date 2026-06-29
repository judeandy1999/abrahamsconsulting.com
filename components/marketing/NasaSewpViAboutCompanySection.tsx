"use client";

import { motion } from "framer-motion";
import type { NasaSewpViPageContent } from "../../src/content/schema";
import { NasaSewpViAboutHighlightIcon } from "./NasaSewpViAboutHighlightIcon";
import { NasaSewpViSplitHeading } from "./NasaSewpViSplitHeading";
import { useMarketingMotionConfig } from "./marketing-motion";

type NasaSewpViAboutCompanySectionProps = {
  section: NasaSewpViPageContent["aboutCompany"];
};

export function NasaSewpViAboutCompanySection({ section }: NasaSewpViAboutCompanySectionProps) {
  const { containerVariants, itemVariants, itemTransition, viewport } = useMarketingMotionConfig();

  return (
    <section className="sewp-vi-about-company" aria-labelledby="sewp-vi-about-company-heading">
      <motion.div
        className="sewp-vi-about-company__inner"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <div className="sewp-vi-about-company__content">
          <motion.div variants={itemVariants} transition={itemTransition}>
            <NasaSewpViSplitHeading eyebrow={section.eyebrow} title={section.title} id="sewp-vi-about-company-heading" />
          </motion.div>
          {section.paragraphs.map((paragraph) => (
            <motion.p key={paragraph} className="sewp-vi-about-company__text" variants={itemVariants} transition={itemTransition}>
              {paragraph}
            </motion.p>
          ))}
        </div>

        <motion.ul className="sewp-vi-about-company__highlights" variants={containerVariants}>
          {section.highlights.map((highlight) => (
            <motion.li key={highlight.id} className="sewp-vi-about-company__highlight" variants={itemVariants} transition={itemTransition}>
              <span className="sewp-vi-about-company__highlight-icon" aria-hidden="true">
                <NasaSewpViAboutHighlightIcon name={highlight.icon} />
              </span>
              <div className="sewp-vi-about-company__highlight-copy">
                <h3 className="sewp-vi-about-company__highlight-title">{highlight.title}</h3>
                <p className="sewp-vi-about-company__highlight-desc">{highlight.description}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
