"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { SegmentedPageHero } from "../../src/content/schema";

type SolutionsHeroProps = {
  hero: SegmentedPageHero;
  headingId?: string;
};

const easeOut = [0.22, 1, 0.36, 1] as const;
const ITEM_DURATION = 0.85;
const STAGGER = 0.16;
const DELAY_CHILDREN = 0.12;

export function SolutionsHero({ hero, headingId = "solutions-hero-heading" }: SolutionsHeroProps) {
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
  const viewport = { once: true, amount: 0.15 };

  return (
    <section className="solutions-hero" aria-labelledby={headingId}>
      <motion.div
        className="solutions-hero__inner"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.h1 id={headingId} className="solutions-hero__title" variants={itemVariants} transition={itemTransition}>
          {hero.segments.map((segment, index) => (
            <span key={segment}>
              {index > 0 ? <span className="solutions-hero__divider" aria-hidden="true"> | </span> : null}
              {segment}
            </span>
          ))}
        </motion.h1>

        <motion.p className="solutions-hero__description" variants={itemVariants} transition={itemTransition}>
          {hero.description}
        </motion.p>
      </motion.div>
    </section>
  );
}
