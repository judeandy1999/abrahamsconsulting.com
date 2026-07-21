"use client";

import { motion } from "framer-motion";
import type { NasaSewpViPageContent } from "../../src/content/schema";
import { NasaSewpViCertificationIcon } from "./NasaSewpViCertificationIcon";
import { useMarketingMotionConfig } from "./marketing-motion";

type NasaSewpViCertificationsSectionProps = {
  section: NasaSewpViPageContent["certifications"];
};

export function NasaSewpViCertificationsSection({ section }: NasaSewpViCertificationsSectionProps) {
  const { containerVariants, itemVariants, itemTransition, viewport } = useMarketingMotionConfig();

  return (
    <section className="sewp-vi-certifications" aria-labelledby="sewp-vi-certifications-heading">
      <motion.div
        className="sewp-vi-certifications__inner"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.header className="sewp-vi-certifications__header" variants={itemVariants} transition={itemTransition}>
          <h2 id="sewp-vi-certifications-heading" className="sewp-vi-certifications__title">
            {section.title}
          </h2>
        </motion.header>

        <motion.ul className="sewp-vi-certifications__list" variants={containerVariants}>
          {section.items.map((item) => (
            <motion.li key={item.id} className="sewp-vi-certifications__item" variants={itemVariants} transition={itemTransition}>
              <article className="sewp-vi-certifications__card">
                <span className="sewp-vi-certifications__icon" aria-hidden="true">
                  <NasaSewpViCertificationIcon name={item.icon} />
                </span>
                <h3 className="sewp-vi-certifications__label">{item.label}</h3>
              </article>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
