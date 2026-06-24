"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { ExecutiveRecruitingPageContent } from "../../src/content/schema";
import { ExecutiveRecruitingFeatureIcon } from "./ExecutiveRecruitingFeatureIcon";
import { IconArrowRight } from "./NavIcons";

type ExecutiveRecruitingHeroProps = {
  hero: ExecutiveRecruitingPageContent["hero"];
};

const easeOut = [0.22, 1, 0.36, 1] as const;
const ITEM_DURATION = 0.85;
const STAGGER = 0.14;
const DELAY_CHILDREN = 0.1;

function IconPlayCircle() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.75" />
      <path d="M10.5 8.75v6.5l5.25-3.25-5.25-3.25Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ExecutiveRecruitingHero({ hero }: ExecutiveRecruitingHeroProps) {
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

  const featureListVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.1
      }
    }
  };

  const itemTransition = reduceMotion ? { duration: 0 } : { duration: ITEM_DURATION, ease: easeOut };
  const viewport = { once: true, amount: 0.15 };

  return (
    <section className="exec-recruiting-hero" aria-labelledby="exec-recruiting-hero-heading">
      <div className="exec-recruiting-hero__inner">
        <motion.div
          className="exec-recruiting-hero__content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.p className="exec-recruiting-hero__eyebrow" variants={itemVariants} transition={itemTransition}>
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            id="exec-recruiting-hero-heading"
            className="exec-recruiting-hero__headline"
            variants={itemVariants}
            transition={itemTransition}
          >
            {hero.headlinePrefix}
            <span className="exec-recruiting-hero__headline-accent">{hero.headlineAccent}</span>
            {hero.headlineSuffix}
          </motion.h1>

          <motion.p className="exec-recruiting-hero__description" variants={itemVariants} transition={itemTransition}>
            {hero.description}
          </motion.p>

          <motion.ul
            className="exec-recruiting-hero__features"
            aria-label="Executive search capabilities"
            variants={featureListVariants}
          >
            {hero.features.map((feature) => (
              <motion.li key={feature.title} variants={itemVariants} transition={itemTransition}>
                <span className="exec-recruiting-hero__feature-icon" aria-hidden="true">
                  <ExecutiveRecruitingFeatureIcon name={feature.icon} />
                </span>
                <span className="exec-recruiting-hero__feature-copy">
                  <strong className="exec-recruiting-hero__feature-title">{feature.title}</strong>
                  <span className="exec-recruiting-hero__feature-text">{feature.description}</span>
                </span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div className="exec-recruiting-hero__actions" variants={itemVariants} transition={itemTransition}>
            <Link href={hero.primaryCtaHref} className="btn btn--primary exec-recruiting-hero__cta-primary" target="_blank" rel="noopener noreferrer">
              {hero.primaryCtaLabel}
              <IconArrowRight className="btn__icon" />
            </Link>
            <Link
              href={hero.secondaryCtaHref}
              className="btn btn--secondary exec-recruiting-hero__cta-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconPlayCircle />
              {hero.secondaryCtaLabel}
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="exec-recruiting-hero__visual"
          initial={reduceMotion ? false : { opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewport}
          transition={reduceMotion ? { duration: 0 } : { duration: 1, ease: easeOut, delay: 0.15 }}
        >
          <div className="exec-recruiting-hero__visual-dots exec-recruiting-hero__visual-dots--top" aria-hidden="true" />
          <div className="exec-recruiting-hero__visual-dots exec-recruiting-hero__visual-dots--bottom" aria-hidden="true" />
          <div className="exec-recruiting-hero__visual-shell">
            <div className="exec-recruiting-hero__visual-accent" aria-hidden="true" />
            <div className="exec-recruiting-hero__visual-frame">
              <Image
                src={hero.imageSrc}
                alt={hero.imageAlt}
                width={1460}
                height={980}
                priority
                className="exec-recruiting-hero__image"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
