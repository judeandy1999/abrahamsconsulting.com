"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { SiteContent } from "../../src/content/schema";
import { WhyChooseStatIcon } from "./WhyChooseStatIcon";

type HomeWhyChooseSectionProps = {
  site: SiteContent;
};

const easeOut = [0.22, 1, 0.36, 1] as const;
const ITEM_DURATION = 0.85;
const STAGGER = 0.12;
const DELAY_CHILDREN = 0.1;

export function HomeWhyChooseSection({ site }: HomeWhyChooseSectionProps) {
  const { homeWhyChoose } = site;
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
    <section className="home-why-choose" aria-labelledby="home-why-choose-heading">
      <motion.div
        className="home-why-choose__inner"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.div className="home-why-choose__intro" variants={itemVariants} transition={itemTransition}>
          <h2 id="home-why-choose-heading" className="home-why-choose__title">
            {homeWhyChoose.title}
          </h2>
          <p className="home-why-choose__body">{homeWhyChoose.body}</p>
        </motion.div>

        <motion.ul className="home-why-choose__stats" variants={containerVariants}>
          {homeWhyChoose.stats.map((stat) => (
            <motion.li key={stat.id} className="home-why-choose__stat" variants={itemVariants} transition={itemTransition}>
              <span className="home-why-choose__stat-icon" aria-hidden>
                <WhyChooseStatIcon name={stat.icon} />
              </span>
              <p className="home-why-choose__stat-value">{stat.value}</p>
              <p className="home-why-choose__stat-label">{stat.label}</p>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
