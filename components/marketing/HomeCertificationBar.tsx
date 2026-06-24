"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import type { SiteContent } from "../../src/content/schema";

type HomeCertificationBarProps = {
  site: SiteContent;
};

const easeOut = [0.22, 1, 0.36, 1] as const;
const ITEM_DURATION = 0.85;
const STAGGER = 0.16;
const DELAY_CHILDREN = 0.12;

export function HomeCertificationBar({ site }: HomeCertificationBarProps) {
  const { certificationStrip } = site;
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

  const viewport = { once: true, amount: 0.12 };

  return (
    <section className="certification-bar" aria-labelledby="certification-bar-heading">
      <motion.div
        className="certification-bar__inner"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.div className="certification-bar__heading-wrap" variants={itemVariants} transition={itemTransition}>
          <h2 id="certification-bar-heading" className="certification-bar__title">
            {certificationStrip.title}
          </h2>
        </motion.div>

        <motion.span
          className="certification-bar__rule"
          aria-hidden="true"
          variants={itemVariants}
          transition={itemTransition}
        />

        <motion.div className="certification-bar__media" variants={itemVariants} transition={itemTransition}>
          <Image
            src={certificationStrip.imageSrc}
            alt={certificationStrip.imageAlt}
            width={1200}
            height={200}
            className="certification-bar__image"
            sizes="(max-width: 960px) 100vw, 70vw"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
