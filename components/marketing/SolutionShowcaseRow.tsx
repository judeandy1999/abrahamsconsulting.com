"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { SolutionsPageContent } from "../../src/content/schema";
import { IconArrowRight } from "./NavIcons";
import { SolutionInsightIcon } from "./SolutionInsightIcon";
import { SolutionSectionIcon } from "./SolutionSectionIcon";

type SolutionShowcaseRowProps = {
  showcase: SolutionsPageContent["showcases"][number];
};

const easeOut = [0.22, 1, 0.36, 1] as const;
const ITEM_DURATION = 0.85;
const STAGGER = 0.1;

export function SolutionShowcaseRow({ showcase }: SolutionShowcaseRowProps) {
  const reduceMotion = useReducedMotion();
  const { panel, media } = showcase;
  const headingId = `${showcase.id}-heading`;

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
  const viewport = { once: true, amount: 0.12 };

  const positionClass =
    showcase.textPosition === "right" ? "solution-showcase--text-right" : "solution-showcase--text-left";

  return (
    <section id={showcase.id} className={`solution-showcase ${positionClass}`} aria-labelledby={headingId}>
      <motion.div
        className="solution-showcase__inner"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.article
          className="solution-showcase__panel solution-showcase__panel--dark"
          variants={itemVariants}
          transition={itemTransition}
          aria-labelledby={headingId}
        >
          <div className="solution-showcase__header">
            <div className="solution-showcase__icon-wrap" aria-hidden>
              <SolutionSectionIcon name={panel.icon} className="solution-showcase__glyph" />
            </div>

            <h2 id={headingId} className="solution-showcase__heading">
              {panel.eyebrow}
              {panel.partnerName ? (
                <>
                  <span className="solution-showcase__heading-separator" aria-hidden="true">
                    {" "}
                    –{" "}
                  </span>
                  <span className="solution-showcase__heading-accent">{panel.partnerName}</span>
                </>
              ) : null}
            </h2>
          </div>

          <div className="solution-showcase__content">
            {panel.paragraphs.map((paragraph, index) => (
              <p key={index} className="solution-showcase__text">
                {paragraph}
              </p>
            ))}

            <Link href={panel.ctaHref} className="btn btn--primary solution-showcase__cta">
              {panel.ctaLabel}
              <IconArrowRight className="btn__icon" />
            </Link>
          </div>
        </motion.article>

        <motion.div className="solution-showcase__media" variants={itemVariants} transition={itemTransition}>
          {media.type === "video" ? (
            <article className="solution-showcase__media-card solution-showcase__media-card--video">
              <header className="solution-showcase__video-header">
                
                <div>
                  {media.subtitle ? <p className="solution-showcase__video-subtitle">{media.subtitle}</p> : null}
                  {media.presenter ? <p className="solution-showcase__video-presenter">{media.presenter}</p> : null}
                </div>
              </header>

              <h3 className="solution-showcase__video-title">
                {media.title}
                {media.titleAccent ? (
                  <span className="solution-showcase__video-title-accent"> {media.titleAccent}</span>
                ) : null}
              </h3>

              <div className="solution-showcase__video">
                <iframe
                  className="solution-showcase__video-frame"
                  src={media.videoEmbedUrl}
                  title={media.videoTitle}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>

            </article>
          ) : (
            <article className="solution-showcase__media-card solution-showcase__media-card--image">
              <div className="solution-showcase__image-wrap">
                <Image
                  src={media.imageSrc}
                  alt={media.imageAlt}
                  width={626}
                  height={375}
                  className="solution-showcase__image"
                />
              </div>
            </article>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
