"use client";

import { motion } from "framer-motion";
import type { NasaSewpViPageContent } from "../../src/content/schema";
import { NasaSewpViSplitHeading } from "./NasaSewpViSplitHeading";
import { useMarketingMotionConfig } from "./marketing-motion";

type NasaSewpViAboutSewpSectionProps = {
  section: NasaSewpViPageContent["aboutSewp"];
};

export function NasaSewpViAboutSewpSection({ section }: NasaSewpViAboutSewpSectionProps) {
  const { containerVariants, itemVariants, itemTransition, viewport } = useMarketingMotionConfig();

  return (
    <section className="sewp-vi-about-sewp" aria-labelledby="sewp-vi-about-sewp-heading">
      <motion.div
        className="sewp-vi-about-sewp__inner"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <div className="sewp-vi-about-sewp__content">
          <motion.div variants={itemVariants} transition={itemTransition}>
            <NasaSewpViSplitHeading eyebrow={section.eyebrow} title={section.title} id="sewp-vi-about-sewp-heading" />
          </motion.div>
          {section.paragraphs.map((paragraph) => (
            <motion.p key={paragraph} className="sewp-vi-about-sewp__text" variants={itemVariants} transition={itemTransition}>
              {paragraph}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
