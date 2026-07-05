"use client";

import { motion } from "framer-motion";
import type { NasaSewpViPageContent } from "../../src/content/schema";
import { NasaSewpViOrderingGuideCard } from "./NasaSewpViOrderingGuideCard";
import { useMarketingMotionConfig } from "./marketing-motion";

type NasaSewpViElectronicOrderingGuideSectionProps = {
  section: NasaSewpViPageContent["electronicOrderingGuide"];
};

export function NasaSewpViElectronicOrderingGuideSection({
  section
}: NasaSewpViElectronicOrderingGuideSectionProps) {
  const { containerVariants, itemVariants, itemTransition, viewport } = useMarketingMotionConfig();

  return (
    <section className="sewp-vi-eordering" aria-labelledby="sewp-vi-eordering-heading">
      <motion.div
        className="sewp-vi-eordering__inner"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.div className="sewp-vi-eordering__layout" variants={containerVariants}>
          <motion.header className="sewp-vi-eordering__intro-col" variants={itemVariants} transition={itemTransition}>
            <h2 id="sewp-vi-eordering-heading" className="sewp-vi-eordering__title">
              {section.title}
            </h2>
            <p className="sewp-vi-eordering__intro">{section.intro}</p>
          </motion.header>

          <motion.div className="sewp-vi-eordering__card-wrap" variants={itemVariants} transition={itemTransition}>
            <NasaSewpViOrderingGuideCard section={section} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
