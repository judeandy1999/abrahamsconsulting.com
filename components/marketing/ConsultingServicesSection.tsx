"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useState } from "react";
import type { ConsultingServicesPageContent } from "../../src/content/schema";
import { ConsultingServiceIcon } from "./ConsultingServiceIcon";
import { ConsultingServicesDetailModal } from "./ConsultingServicesDetailModal";

type ConsultingServicesSectionProps = {
  section: ConsultingServicesPageContent["servicesSection"];
};

const easeOut = [0.22, 1, 0.36, 1] as const;
const ITEM_DURATION = 0.85;
const STAGGER = 0.12;
const DELAY_CHILDREN = 0.1;

export function ConsultingServicesSection({ section }: ConsultingServicesSectionProps) {
  const reduceMotion = useReducedMotion();
  const [activeItem, setActiveItem] = useState<ConsultingServicesPageContent["servicesSection"]["items"][number] | null>(
    null
  );

  const closeModal = useCallback(() => setActiveItem(null), []);

  const itemVariants = reduceMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : STAGGER,
        delayChildren: reduceMotion ? 0 : DELAY_CHILDREN
      }
    }
  };

  const itemTransition = reduceMotion ? { duration: 0 } : { duration: ITEM_DURATION, ease: easeOut };
  const viewport = { once: true, amount: 0.1 };

  return (
    <section className="home-consulting home-consulting--page" id="consulting-services" aria-labelledby="consulting-services-cards-heading">
      <motion.div
        className="home-consulting__inner"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.div className="home-consulting__header" variants={itemVariants} transition={itemTransition}>
          <h2 id="consulting-services-cards-heading" className="home-consulting__title">
            {section.title}
          </h2>
        </motion.div>

        <motion.ul className="home-consulting__grid" variants={containerVariants}>
          {section.items.map((item) => (
            <motion.li key={item.id} className="home-consulting__item" variants={itemVariants} transition={itemTransition}>
              <span className="home-consulting__icon home-pillar__icon" aria-hidden="true">
                <ConsultingServiceIcon name={item.icon} />
              </span>
              <h3 className="home-consulting__item-title">{item.title}</h3>
              <p className="home-consulting__item-description">{item.description}</p>
              <button type="button" className="home-consulting__know-more" onClick={() => setActiveItem(item)}>
                {section.knowMoreLabel}
              </button>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      <ConsultingServicesDetailModal item={activeItem} scheduleLabel={section.scheduleLabel} onClose={closeModal} />
    </section>
  );
}
