"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { SiteContent } from "../../src/content/schema";

type HomeFederalCapabilitiesSectionProps = {
  site: SiteContent;
};

const easeOut = [0.22, 1, 0.36, 1] as const;
const ITEM_DURATION = 0.85;
const STAGGER = 0.16;
const DELAY_CHILDREN = 0.12;

export function HomeFederalCapabilitiesSection({ site }: HomeFederalCapabilitiesSectionProps) {
  const { homeFederalCapabilities } = site;
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
    <section className="home-federal" aria-labelledby="home-federal-heading">
      <motion.div
        className="home-federal__inner"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.h2
          id="home-federal-heading"
          className="home-about__heading"
          variants={itemVariants}
          transition={itemTransition}
        >
          {homeFederalCapabilities.heading}
        </motion.h2>

        <motion.p className="home-federal__text" variants={itemVariants} transition={itemTransition}>
          {homeFederalCapabilities.body}
          <a
            className="home-federal__link"
            href={homeFederalCapabilities.linkHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {homeFederalCapabilities.linkLabel}
          </a>
        </motion.p>

        <motion.div className="home-federal__video" variants={itemVariants} transition={itemTransition}>
          <iframe
            className="home-federal__video-frame"
            src={homeFederalCapabilities.videoEmbedUrl}
            title={homeFederalCapabilities.videoTitle}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
