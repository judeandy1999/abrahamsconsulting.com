"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import type { SiteContent } from "../../src/content/schema";
import { ConsultingServiceIcon } from "./ConsultingServiceIcon";
import { IconArrowRight } from "./NavIcons";

type HomeConsultingServicesSectionProps = {
  site: SiteContent;
};

const easeOut = [0.22, 1, 0.36, 1] as const;
const ITEM_DURATION = 0.85;
const STAGGER = 0.12;
const DELAY_CHILDREN = 0.1;

export function HomeConsultingServicesSection({ site }: HomeConsultingServicesSectionProps) {
  const { homeConsultingServices } = site;
  const reduceMotion = useReducedMotion();

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
    <section className="home-consulting" aria-labelledby="home-consulting-heading">
      <motion.div
        className="home-consulting__inner"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.div className="home-consulting__header" variants={itemVariants} transition={itemTransition}>
          <h2 id="home-consulting-heading" className="home-consulting__title">
            {homeConsultingServices.title}
          </h2>
          <p className="home-consulting__subtitle">{homeConsultingServices.subtitle}</p>
        </motion.div>

        <motion.ul className="home-consulting__grid" variants={containerVariants}>
          {homeConsultingServices.items.map((item) => (
            <motion.li key={item.id} className="home-consulting__item" variants={itemVariants} transition={itemTransition}>
              <span className="home-consulting__icon home-pillar__icon" aria-hidden>
                <ConsultingServiceIcon name={item.icon} />
              </span>
              <h3 className="home-consulting__item-title">{item.title}</h3>
              <p className="home-consulting__item-description">{item.description}</p>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div className="home-consulting__actions" variants={itemVariants} transition={itemTransition}>
          <Link href={homeConsultingServices.ctaHref} className="home-consulting__cta">
            {homeConsultingServices.ctaLabel}
            <IconArrowRight className="home-consulting__cta-icon" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
