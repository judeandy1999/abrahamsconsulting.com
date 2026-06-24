"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import type { SiteContent } from "../../src/content/schema";
import { IconArrowRight } from "./NavIcons";
import { SolutionPillarIcon } from "./SolutionPillarIcon";

type HomeSolutionsSectionProps = {
  site: SiteContent;
};

const easeOut = [0.22, 1, 0.36, 1] as const;
const ITEM_DURATION = 0.85;
const STAGGER = 0.12;
const DELAY_CHILDREN = 0.1;

export function HomeSolutionsSection({ site }: HomeSolutionsSectionProps) {
  const { homeSolutions } = site;
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
    <section className="home-solutions" aria-labelledby="home-solutions-heading">
      <motion.div
        className="home-solutions__inner"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.h2
          id="home-solutions-heading"
          className="home-solutions__title"
          variants={itemVariants}
          transition={itemTransition}
        >
          {homeSolutions.title}
        </motion.h2>

        <motion.ul className="home-solutions__grid" variants={containerVariants}>
          {homeSolutions.items.map((item) => (
            <motion.li
              key={item.id}
              className="home-solutions__item"
              variants={itemVariants}
              transition={itemTransition}
            >
              <span className="home-solutions__icon home-pillar__icon" aria-hidden>
                <SolutionPillarIcon name={item.icon} />
              </span>
              <h3 className="home-solutions__item-title">{item.title}</h3>
              <p className="home-solutions__item-description">{item.description}</p>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div className="home-solutions__actions" variants={itemVariants} transition={itemTransition}>
          <Link href={homeSolutions.ctaHref} className="home-solutions__cta">
            {homeSolutions.ctaLabel}
            <IconArrowRight className="home-solutions__cta-icon" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
