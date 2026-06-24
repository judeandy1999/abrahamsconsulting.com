"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { SiteContent } from "../../src/content/schema";
import { PartnerLogoCarousel } from "./PartnerLogoCarousel";

type HomeAboutSectionProps = {
  site: SiteContent;
};

const easeOut = [0.22, 1, 0.36, 1] as const;
const ITEM_DURATION = 0.85;
const COLUMN_STAGGER = 0.18;
const DELAY_CHILDREN = 0.12;

export function HomeAboutSection({ site }: HomeAboutSectionProps) {
  const { homeAbout } = site;
  const reduceMotion = useReducedMotion();

  const blockVariants = reduceMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } };

  const innerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : COLUMN_STAGGER,
        delayChildren: reduceMotion ? 0 : DELAY_CHILDREN
      }
    }
  };

  const blockTransition = reduceMotion ? { duration: 0 } : { duration: ITEM_DURATION, ease: easeOut };

  const viewport = { once: true, amount: 0.08 };

  return (
    <section className="home-about" aria-labelledby="home-about-heading">
      <motion.div
        className="home-about__inner"
        variants={innerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.div className="home-about__story" variants={blockVariants} transition={blockTransition}>
          <p className="home-about__eyebrow">{homeAbout.eyebrow}</p>
          <h2 id="home-about-heading" className="home-about__heading">
            {homeAbout.heading}
          </h2>
          {homeAbout.paragraphs.map((paragraph, index) => (
            <p key={index} className="home-about__text">
              {paragraph}
            </p>
          ))}
        </motion.div>

        <motion.aside
          className="home-about__partners-panel"
          aria-labelledby="home-about-partners-heading"
          variants={blockVariants}
          transition={blockTransition}
        >
          <p id="home-about-partners-heading" className="home-about__eyebrow home-about__eyebrow--partners">
            {homeAbout.partnersHeading}
          </p>
          <PartnerLogoCarousel logos={homeAbout.partnerLogos} />
        </motion.aside>
      </motion.div>
    </section>
  );
}
