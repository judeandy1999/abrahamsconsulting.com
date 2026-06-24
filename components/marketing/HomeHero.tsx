"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { SiteContent } from "../../src/content/schema";
import { HeroFeatureIcon } from "./HeroFeatureIcon";
import { IconArrowRight } from "./NavIcons";

type HomeHeroProps = {
  site: SiteContent;
};

const easeOut = [0.22, 1, 0.36, 1] as const;

const HERO_ITEM_DURATION = 0.9;
const HERO_STAGGER = 0.18;
const HERO_DELAY_CHILDREN = 0.25;
const HERO_FEATURE_STAGGER = 0.12;
const HERO_VISUAL_DURATION = 1.05;
const HERO_VISUAL_DELAY = 0.35;

export function HomeHero({ site }: HomeHeroProps) {
  const { homeHero } = site;
  const reduceMotion = useReducedMotion();

  const itemVariants = reduceMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } };

  const contentVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : HERO_STAGGER,
        delayChildren: reduceMotion ? 0 : HERO_DELAY_CHILDREN
      }
    }
  };

  const featureListVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : HERO_FEATURE_STAGGER
      }
    }
  };

  const itemTransition = reduceMotion
    ? { duration: 0 }
    : { duration: HERO_ITEM_DURATION, ease: easeOut };

  const visualTransition = reduceMotion
    ? { duration: 0 }
    : { duration: HERO_VISUAL_DURATION, delay: HERO_VISUAL_DELAY, ease: easeOut };

  const viewport = reduceMotion
    ? { once: true, amount: 0.15 }
    : { once: false, amount: 0.15 };

  return (
    <section id="home-value-proposition" className="home-hero" aria-labelledby="home-hero-heading">
      <div className="home-hero__inner">
        <motion.div
          className="home-hero__content"
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.h1
            id="home-hero-heading"
            className="home-hero__headline"
            variants={itemVariants}
            transition={itemTransition}
          >
            {homeHero.headlinePrefix}
            <span className="home-hero__headline-accent">{homeHero.headlineAccent}</span>
            {homeHero.headlineSuffix}
          </motion.h1>
          <motion.p className="home-hero__description" variants={itemVariants} transition={itemTransition}>
            {homeHero.description}
          </motion.p>

          <motion.ul
            className="home-hero__features"
            aria-label="Key qualifications"
            variants={featureListVariants}
          >
            {homeHero.features.map((feature) => (
              <motion.li key={feature.label} variants={itemVariants} transition={itemTransition}>
                <span className="home-hero__feature-icon">
                  <HeroFeatureIcon name={feature.icon} />
                </span>
                <span>{feature.label}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div className="home-hero__actions" variants={itemVariants} transition={itemTransition}>
            <Link href={site.consultationCta.path} className="btn btn--primary">
              {homeHero.primaryCtaLabel}
              <IconArrowRight className="btn__icon" />
            </Link>
            <Link href="/contracts" className="btn btn--secondary">
              {homeHero.secondaryCtaLabel}
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="home-hero__visual"
          aria-hidden="true"
          initial={reduceMotion ? false : { opacity: 0, x: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={viewport}
          transition={visualTransition}
        >
          <Image
            src="/images/hero-logo.webp"
            alt=""
            width={520}
            height={520}
            priority
            className="home-hero__logo"
          />
        </motion.div>
      </div>
    </section>
  );
}
