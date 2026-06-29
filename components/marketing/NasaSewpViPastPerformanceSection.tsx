"use client";

import { motion } from "framer-motion";
import type { NasaSewpViPageContent } from "../../src/content/schema";
import { NasaSewpViExperienceIcon } from "./NasaSewpViExperienceIcon";
import { useMarketingMotionConfig } from "./marketing-motion";

type NasaSewpViPastPerformanceSectionProps = {
  section: NasaSewpViPageContent["pastPerformance"];
};

export function NasaSewpViPastPerformanceSection({ section }: NasaSewpViPastPerformanceSectionProps) {
  const { containerVariants, itemVariants, itemTransition, viewport } = useMarketingMotionConfig();

  return (
    <section className="sewp-vi-experience" aria-labelledby="sewp-vi-experience-heading">
      <motion.div
        className="sewp-vi-experience__inner"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.header className="sewp-vi-experience__header" variants={itemVariants} transition={itemTransition}>
          <p className="sewp-vi-experience__eyebrow">{section.eyebrow}</p>
          <h2 id="sewp-vi-experience-heading" className="sewp-vi-experience__title">
            {section.title}
          </h2>
          <p className="sewp-vi-experience__description">{section.description}</p>
        </motion.header>

        <motion.ul className="sewp-vi-experience__list" variants={containerVariants}>
          {section.items.map((item) => (
            <motion.li key={item.id} className="sewp-vi-experience__row" variants={itemVariants} transition={itemTransition}>
              <div className="sewp-vi-experience__content">
                <span className="sewp-vi-experience__icon" aria-hidden="true">
                  <NasaSewpViExperienceIcon name={item.icon} />
                </span>
                <div className="sewp-vi-experience__copy">
                  <h3 className="sewp-vi-experience__org">{item.organization}</h3>
                  {item.description ? <p className="sewp-vi-experience__desc">{item.description}</p> : null}
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
