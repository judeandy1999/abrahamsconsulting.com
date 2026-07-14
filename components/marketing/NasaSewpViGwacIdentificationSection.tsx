"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { NasaSewpViPageContent } from "../../src/content/schema";
import { NasaSewpViGwacIcon } from "./NasaSewpViGwacIcon";
import { useMarketingMotionConfig } from "./marketing-motion";

type NasaSewpViGwacIdentificationSectionProps = {
  section: NasaSewpViPageContent["gwacIdentificationStatement"];
};

export function NasaSewpViGwacIdentificationSection({
  section
}: NasaSewpViGwacIdentificationSectionProps) {
  const { containerVariants, itemVariants, itemTransition, viewport } = useMarketingMotionConfig();

  return (
    <section className="sewp-vi-gwac" aria-labelledby="sewp-vi-gwac-heading">
      <motion.div
        className="sewp-vi-gwac__inner"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.header className="sewp-vi-gwac__header" variants={itemVariants} transition={itemTransition}>
          <div className="sewp-vi-gwac__header-copy">
            <h2 id="sewp-vi-gwac-heading" className="sewp-vi-gwac__title">
              {section.title}
            </h2>
            <p className="sewp-vi-gwac__intro">
              {section.intro}{" "}
              {section.referenceLinks.map((link, index) => (
                <span key={link.href}>
                  {index > 0 ? ", " : null}
                  <a
                    href={link.href}
                    className="sewp-vi-gwac__intro-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                </span>
              ))}
            </p>
          </div>
          <div className="sewp-vi-gwac__header-graphic">
            <Image
              src={section.headerGraphicSrc}
              alt={section.headerGraphicAlt}
              width={280}
              height={140}
              className="sewp-vi-gwac__header-graphic-image"
            />
          </div>
        </motion.header>

        <motion.article className="sewp-vi-gwac__what-card" variants={itemVariants} transition={itemTransition}>
          <div className="sewp-vi-gwac__what-icon" aria-hidden="true">
            <NasaSewpViGwacIcon name="building" />
          </div>
          <div className="sewp-vi-gwac__what-copy">
            <h3 className="sewp-vi-gwac__what-title">{section.whatIsGwac.title}</h3>
            <p className="sewp-vi-gwac__what-description">{section.whatIsGwac.description}</p>
          </div>
          <ul className="sewp-vi-gwac__what-highlights">
            {section.whatIsGwac.highlights.map((highlight) => (
              <li key={highlight} className="sewp-vi-gwac__what-highlight">
                <span className="sewp-vi-gwac__what-check" aria-hidden="true">
                  <NasaSewpViGwacIcon name="check" />
                </span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </motion.article>

        <motion.article className="sewp-vi-gwac__commitment" variants={itemVariants} transition={itemTransition}>
          <span className="sewp-vi-gwac__commitment-icon" aria-hidden="true">
            <NasaSewpViGwacIcon name="commitment" />
          </span>
          <div className="sewp-vi-gwac__commitment-copy">
            <h3 className="sewp-vi-gwac__commitment-title">{section.commitment.title}</h3>
            <p className="sewp-vi-gwac__commitment-description">{section.commitment.description}</p>
          </div>
        </motion.article>
      </motion.div>
    </section>
  );
}
