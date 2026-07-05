"use client";

import { motion } from "framer-motion";
import type { NasaSewpViPageContent } from "../../src/content/schema";
import { NasaSewpViWhyIcon } from "./NasaSewpViWhyIcon";
import { useMarketingMotionConfig } from "./marketing-motion";

type NasaSewpViWhyChooseSectionProps = {
  section: NasaSewpViPageContent["whyChoose"];
};

export function NasaSewpViWhyChooseSection({ section }: NasaSewpViWhyChooseSectionProps) {
  const { containerVariants, itemVariants, itemTransition, viewport } = useMarketingMotionConfig();

  return (
    <section className="sewp-vi-why" aria-labelledby="sewp-vi-why-heading">

      <motion.div
        className="sewp-vi-why__inner"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.header className="sewp-vi-why__header" variants={itemVariants} transition={itemTransition}>
          <h2 id="sewp-vi-why-heading" className="sewp-vi-why__title">
            {section.title}
          </h2>
          <p className="sewp-vi-why__description">{section.description}</p>
        </motion.header>

        <motion.ul className="sewp-vi-why__grid" variants={containerVariants}>
          {section.items.map((item) => (
            <motion.li key={item.id} className="sewp-vi-why__card" variants={itemVariants} transition={itemTransition}>
              <span className="sewp-vi-why__icon" aria-hidden="true">
                <NasaSewpViWhyIcon name={item.icon} />
              </span>
              <h3 className="sewp-vi-why__card-title">{item.title}</h3>
              <p className="sewp-vi-why__card-desc">{item.description}</p>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
