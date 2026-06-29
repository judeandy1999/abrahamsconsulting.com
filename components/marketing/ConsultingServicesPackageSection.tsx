"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ConsultingServicesPageContent } from "../../src/content/schema";
import { CapabilitiesStatementIcon } from "./CapabilitiesStatementIcon";
import { IconArrowRight } from "./NavIcons";
import { useMarketingMotionConfig } from "./marketing-motion";

type ConsultingServicesPackageSectionProps = {
  section: ConsultingServicesPageContent["packageSection"];
};

export function ConsultingServicesPackageSection({ section }: ConsultingServicesPackageSectionProps) {
  const { containerVariants, itemVariants, itemTransition, viewport } = useMarketingMotionConfig();

  return (
    <section className="consulting-services-package" aria-labelledby="consulting-services-package-heading">
      <motion.div
        className="consulting-services-package__inner"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.header className="consulting-services-package__header" variants={itemVariants} transition={itemTransition}>
          <p className="consulting-services-package__eyebrow">{section.eyebrow}</p>
          <h2 id="consulting-services-package-heading" className="consulting-services-package__title">
            {section.title}
          </h2>
          <p className="consulting-services-package__description">{section.description}</p>
        </motion.header>

        <motion.ul className="consulting-services-package__grid" variants={containerVariants}>
          {section.items.map((item) => (
            <motion.li key={item.id} className="consulting-services-package__item" variants={itemVariants} transition={itemTransition}>
              <article className="consulting-services-package__card">
                <span className="consulting-services-package__icon-wrap" aria-hidden="true">
                  <span className="consulting-services-package__icon">
                    <CapabilitiesStatementIcon name={item.icon} />
                  </span>
                </span>
                <span className="consulting-services-package__divider" aria-hidden="true" />
                <div className="consulting-services-package__content">
                  <h3 className="consulting-services-package__item-title">{item.title}</h3>
                  <Link href={item.href} className="btn btn--primary consulting-services-package__cta">
                    {section.knowMoreLabel}
                    <IconArrowRight className="btn__icon" />
                  </Link>
                </div>
              </article>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
