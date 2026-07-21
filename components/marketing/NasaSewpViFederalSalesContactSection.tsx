"use client";

import { Headset, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import type { NasaSewpViPageContent } from "../../src/content/schema";
import { IconArrowRight } from "./NavIcons";
import { pillarIconProps } from "./pillarIconProps";
import { useMarketingMotionConfig } from "./marketing-motion";

type NasaSewpViFederalSalesContactSectionProps = {
  section: NasaSewpViPageContent["federalSalesContact"];
};

export function NasaSewpViFederalSalesContactSection({ section }: NasaSewpViFederalSalesContactSectionProps) {
  const { containerVariants, itemVariants, itemTransition, viewport } = useMarketingMotionConfig();
  const federalMailto = `mailto:${section.email}`;

  return (
    <section className="sewp-vi-federal-contact" aria-labelledby="sewp-vi-contact-heading">
      <motion.div
        className="sewp-vi-federal-contact__wrap"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <div className="sewp-vi-federal-contact__card">
          <div className="sewp-vi-federal-contact__columns">
            <motion.div className="sewp-vi-federal-contact__intro" variants={itemVariants} transition={itemTransition}>
              <header className="sewp-vi-federal-contact__header">
                <span className="sewp-vi-federal-contact__header-icon" aria-hidden="true">
                  <Headset {...pillarIconProps} />
                </span>
                <h2 id="sewp-vi-contact-heading" className="sewp-vi-federal-contact__title">
                  {section.title}
                </h2>
                <p className="sewp-vi-federal-contact__description">
                  {section.prompt} {section.subtitle}
                </p>
              </header>

              <div className="sewp-vi-federal-contact__actions">
                <a
                  href={federalMailto}
                  className="btn btn--primary sewp-vi-federal-contact__cta"
                  aria-label={`${section.ctaLabel} via email`}
                >
                  {section.ctaLabel}
                  <IconArrowRight className="btn__icon" aria-hidden="true" />
                </a>
              </div>
            </motion.div>

            <motion.div className="sewp-vi-federal-contact__details" variants={containerVariants}>
              <motion.article className="sewp-vi-federal-contact__method" variants={itemVariants} transition={itemTransition}>
                <span className="sewp-vi-federal-contact__method-icon" aria-hidden="true">
                  <Mail {...pillarIconProps} />
                </span>
                <div className="sewp-vi-federal-contact__method-copy">
                  <p className="sewp-vi-federal-contact__method-label">Email</p>
                  <p className="sewp-vi-federal-contact__method-value">{section.email}</p>
                </div>
              </motion.article>

              <motion.article className="sewp-vi-federal-contact__method" variants={itemVariants} transition={itemTransition}>
                <span className="sewp-vi-federal-contact__method-icon" aria-hidden="true">
                  <Phone {...pillarIconProps} />
                </span>
                <div className="sewp-vi-federal-contact__method-copy">
                  <p className="sewp-vi-federal-contact__method-label">Phone</p>
                  <div className="sewp-vi-federal-contact__method-value">
                    {section.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                        aria-label={`Call Federal Sales at ${phone}`}
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.article>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
