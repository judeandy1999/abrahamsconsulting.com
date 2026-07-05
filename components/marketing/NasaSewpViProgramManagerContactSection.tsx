"use client";

import { motion } from "framer-motion";
import type { NasaSewpViPageContent } from "../../src/content/schema";
import { NasaSewpViProgramManagerIcon } from "./NasaSewpViProgramManagerIcon";
import { useMarketingMotionConfig } from "./marketing-motion";

type NasaSewpViProgramManagerContactSectionProps = {
  section: NasaSewpViPageContent["programManagerContact"];
};

function ContactValue({
  value,
  href,
  ariaLabel
}: {
  value: string;
  href?: string;
  ariaLabel?: string;
}) {
  if (href) {
    return (
      <a href={href} className="sewp-vi-pm-contact__link" aria-label={ariaLabel ?? value}>
        {value}
      </a>
    );
  }

  return <>{value.split("\n").map((line, index) => (
    <span key={index}>
      {index > 0 ? <br /> : null}
      {line}
    </span>
  ))}</>;
}

export function NasaSewpViProgramManagerContactSection({
  section
}: NasaSewpViProgramManagerContactSectionProps) {
  const { containerVariants, itemVariants, itemTransition, viewport } = useMarketingMotionConfig();

  return (
    <section className="sewp-vi-pm-contact" aria-labelledby="sewp-vi-pm-contact-heading">
      <motion.div
        className="sewp-vi-pm-contact__inner"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.div className="sewp-vi-pm-contact__layout" variants={containerVariants}>
          <motion.div className="sewp-vi-pm-contact__intro-col" variants={itemVariants} transition={itemTransition}>
            <header className="sewp-vi-pm-contact__header">
              <h2 id="sewp-vi-pm-contact-heading" className="sewp-vi-pm-contact__title">
                <span className="sewp-vi-pm-contact__title-primary">{section.titlePrimary}</span>
                <span className="sewp-vi-pm-contact__title-secondary">{section.titleSecondary}</span>
              </h2>
              <p className="sewp-vi-pm-contact__intro">{section.intro}</p>
            </header>

            <article className="sewp-vi-pm-contact__help">
              <span className="sewp-vi-pm-contact__help-icon" aria-hidden="true">
                <NasaSewpViProgramManagerIcon name="headset" />
              </span>
              <div className="sewp-vi-pm-contact__help-copy">
                <h3 className="sewp-vi-pm-contact__help-title">{section.helpCallout.title}</h3>
                <p className="sewp-vi-pm-contact__help-description">{section.helpCallout.description}</p>
              </div>
            </article>

            <ul className="sewp-vi-pm-contact__details">
              {section.details.map((detail) => (
                <li key={detail.id} className="sewp-vi-pm-contact__detail">
                  <span className="sewp-vi-pm-contact__detail-icon" aria-hidden="true">
                    <NasaSewpViProgramManagerIcon name={detail.icon} />
                  </span>
                  <div className="sewp-vi-pm-contact__detail-copy">
                    <p className="sewp-vi-pm-contact__detail-label">{detail.label}</p>
                    <p className="sewp-vi-pm-contact__detail-value">
                      <ContactValue value={detail.value} />
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.article className="sewp-vi-pm-contact__card" variants={itemVariants} transition={itemTransition}>
            <header className="sewp-vi-pm-contact__profile">
              <span className="sewp-vi-pm-contact__profile-avatar" aria-hidden="true">
                <NasaSewpViProgramManagerIcon name="profile" />
              </span>
              <div className="sewp-vi-pm-contact__profile-copy">
                <h3 className="sewp-vi-pm-contact__profile-name">{section.profile.name}</h3>
                <p className="sewp-vi-pm-contact__profile-role">{section.profile.role}</p>
              </div>
            </header>

            <ul className="sewp-vi-pm-contact__profile-contacts">
              {section.profile.contacts.map((contact) => (
                <li key={contact.id} className="sewp-vi-pm-contact__profile-contact">
                  <span className="sewp-vi-pm-contact__profile-contact-icon" aria-hidden="true">
                    <NasaSewpViProgramManagerIcon name={contact.icon} />
                  </span>
                  <div className="sewp-vi-pm-contact__profile-contact-copy">
                    <p className="sewp-vi-pm-contact__profile-contact-label">{contact.label}</p>
                    <p className="sewp-vi-pm-contact__profile-contact-value">
                      <ContactValue
                        value={contact.value}
                        href={contact.href}
                        ariaLabel={`${contact.label}: ${contact.value}`}
                      />
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.article>
        </motion.div>
      </motion.div>
    </section>
  );
}
