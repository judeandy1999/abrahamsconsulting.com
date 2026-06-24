"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { ExecutiveRecruitingPageContent } from "../../src/content/schema";
import { ExecutiveRecruitingCtaHighlightIcon } from "./ExecutiveRecruitingCtaHighlightIcon";
import { IconArrowRight } from "./NavIcons";

type ExecutiveRecruitingHiringCtaProps = {
  cta: ExecutiveRecruitingPageContent["hiringProfileCta"];
};

const easeOut = [0.22, 1, 0.36, 1] as const;
const ITEM_DURATION = 0.85;
const STAGGER = 0.14;

export function ExecutiveRecruitingHiringCta({ cta }: ExecutiveRecruitingHiringCtaProps) {
  const reduceMotion = useReducedMotion();

  const itemVariants = reduceMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : STAGGER
      }
    }
  };

  const itemTransition = reduceMotion ? { duration: 0 } : { duration: ITEM_DURATION, ease: easeOut };
  const viewport = { once: true, amount: 0.2 };

  return (
    <section className="exec-recruiting-cta" aria-labelledby="exec-recruiting-cta-heading">
      <motion.div
        className="exec-recruiting-cta__card"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.div className="exec-recruiting-cta__content" variants={itemVariants} transition={itemTransition}>
          <h2 id="exec-recruiting-cta-heading" className="exec-recruiting-cta__title">
            {cta.title}
          </h2>
          <p className="exec-recruiting-cta__description">{cta.description}</p>
          <div className="exec-recruiting-cta__actions">
            <Link href={cta.ctaHref} className="exec-recruiting-cta__button" target="_blank" rel="noopener noreferrer">
              {cta.ctaLabel}
              <IconArrowRight className="exec-recruiting-cta__button-icon" />
            </Link>
          </div>
        </motion.div>

        <motion.div className="exec-recruiting-cta__media" variants={itemVariants} transition={itemTransition}>
          <div className="exec-recruiting-cta__image-wrap">
            <Image
              src={cta.imageSrc}
              alt={cta.imageAlt}
              width={720}
              height={480}
              className="exec-recruiting-cta__image"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
