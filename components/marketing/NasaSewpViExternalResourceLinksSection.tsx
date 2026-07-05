"use client";

import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import type { NasaSewpViPageContent } from "../../src/content/schema";
import { accessibleExternalLinkLabel } from "../../lib/accessibility/accessible-external-label";
import { useMarketingMotionConfig } from "./marketing-motion";

type NasaSewpViExternalResourceLinksSectionProps = {
  section: NasaSewpViPageContent["externalResourceLinks"];
};

export function NasaSewpViExternalResourceLinksSection({
  section
}: NasaSewpViExternalResourceLinksSectionProps) {
  const { containerVariants, itemVariants, itemTransition, viewport } = useMarketingMotionConfig();

  return (
    <section className="sewp-vi-external-links" aria-labelledby="sewp-vi-external-links-heading">
      <motion.div
        className="sewp-vi-external-links__inner"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.header className="sewp-vi-external-links__header" variants={itemVariants} transition={itemTransition}>
          <h2 id="sewp-vi-external-links-heading" className="sewp-vi-external-links__title">
            {section.heading}
          </h2>
        </motion.header>

        <motion.ul className="sewp-vi-external-links__grid" variants={containerVariants}>
          {section.cards.map((card) => (
            <motion.li key={card.id} variants={itemVariants} transition={itemTransition}>
              <article
                className="sewp-vi-external-links__card"
                aria-labelledby={`sewp-vi-external-link-${card.id}-heading`}
              >
                <div className="sewp-vi-external-links__card-copy">
                  <h3 id={`sewp-vi-external-link-${card.id}-heading`} className="sewp-vi-external-links__card-title">
                    {card.title}
                  </h3>
                  <p className="sewp-vi-external-links__card-description">{card.description}</p>
                </div>

                <div className="sewp-vi-external-links__card-action">
                  <a
                    href={card.href}
                    className="btn btn--primary sewp-vi-external-links__cta"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={accessibleExternalLinkLabel(card.ctaLabel)}
                  >
                    <ExternalLink size={18} strokeWidth={1.75} aria-hidden="true" />
                    {card.ctaLabel}
                  </a>
                  <p className="sewp-vi-external-links__redirect-note">{card.redirectNote}</p>
                </div>
              </article>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
