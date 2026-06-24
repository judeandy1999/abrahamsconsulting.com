"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { ExecutiveRecruitingPageContent } from "../../src/content/schema";
import { IconArrowRight } from "./NavIcons";

type ExecutiveRecruitingWrongHireSectionProps = {
  section: ExecutiveRecruitingPageContent["wrongHireSection"];
};

const easeOut = [0.22, 1, 0.36, 1] as const;
const ITEM_DURATION = 0.85;
const STAGGER = 0.12;
const DELAY_CHILDREN = 0.1;

export function ExecutiveRecruitingWrongHireSection({ section }: ExecutiveRecruitingWrongHireSectionProps) {
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
    <section className="exec-recruiting-costs" aria-labelledby="exec-recruiting-costs-heading">
      <motion.div
        className="exec-recruiting-costs__inner"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.header className="exec-recruiting-costs__header" variants={itemVariants} transition={itemTransition}>
          <p className="exec-recruiting-costs__eyebrow">{section.eyebrow}</p>
          <h2 id="exec-recruiting-costs-heading" className="exec-recruiting-costs__title">
            {section.title}
          </h2>
          <p className="exec-recruiting-costs__description">{section.description}</p>
        </motion.header>

        <motion.ul className="exec-recruiting-costs__grid" variants={containerVariants}>
          {section.cards.map((card) => (
            <motion.li key={card.id} className="exec-recruiting-costs__card" variants={itemVariants} transition={itemTransition}>
              <article className="exec-recruiting-costs__card-inner">
                <div className="exec-recruiting-costs__card-image-wrap">
                  <Image
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    width={320}
                    height={240}
                    className="exec-recruiting-costs__card-image"
                  />
                </div>
                <div className="exec-recruiting-costs__card-body">
                  <h3 className="exec-recruiting-costs__card-title">{card.title}</h3>
                  <p className="exec-recruiting-costs__card-text">{card.description}</p>
                  <Link href={card.learnMoreHref} className="exec-recruiting-costs__card-link">
                    {card.learnMoreLabel}
                    <IconArrowRight className="exec-recruiting-costs__card-link-icon" />
                  </Link>
                </div>
              </article>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
