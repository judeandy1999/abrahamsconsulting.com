"use client";

import { Clock, Database, FileCheck, FileSearch, Lock, ListChecks, Send } from "lucide-react";
import { motion } from "framer-motion";
import type { NasaSewpViPageContent } from "../../src/content/schema";
import { pillarIconProps } from "./pillarIconProps";
import { useMarketingMotionConfig } from "./marketing-motion";

type NasaSewpViObtainQuoteSectionProps = {
  section: NasaSewpViPageContent["obtainQuote"];
};

type StepIconName = NasaSewpViPageContent["obtainQuote"]["steps"][number]["icon"];

function StepIcon({ name }: { name: StepIconName }) {
  switch (name) {
    case "prepare":
      return <FileSearch {...pillarIconProps} />;
    case "submit":
      return <Send {...pillarIconProps} />;
    case "review":
      return <Database {...pillarIconProps} />;
    case "quote":
      return <FileCheck {...pillarIconProps} />;
    case "secure":
      return <Lock {...pillarIconProps} />;
    default: {
      const _exhaustive: never = name;
      return _exhaustive;
    }
  }
}

function ContactCard({
  label,
  name,
  role,
  telephone,
  email
}: {
  label: string;
  name: string;
  role: string;
  telephone: string;
  email: string;
}) {
  const telHref =
    telephone !== "TBD" ? `tel:${telephone.replace(/[^\d+]/g, "")}` : undefined;

  return (
    <article className="sewp-vi-obtain-quote__contact">
      <p className="sewp-vi-obtain-quote__contact-label">{label}</p>
      <p className="sewp-vi-obtain-quote__contact-name">{name}</p>
      <p className="sewp-vi-obtain-quote__contact-role">{role}</p>
      <dl className="sewp-vi-obtain-quote__contact-meta">
        <div className="sewp-vi-obtain-quote__contact-meta-row">
          <dt>Telephone</dt>
          <dd>
            {telHref ? (
              <a href={telHref} className="sewp-vi-obtain-quote__link">
                {telephone}
              </a>
            ) : (
              telephone
            )}
          </dd>
        </div>
        <div className="sewp-vi-obtain-quote__contact-meta-row">
          <dt>Email</dt>
          <dd>
            <a href={`mailto:${email}`} className="sewp-vi-obtain-quote__link">
              {email}
            </a>
          </dd>
        </div>
      </dl>
    </article>
  );
}

export function NasaSewpViObtainQuoteSection({ section }: NasaSewpViObtainQuoteSectionProps) {
  const { containerVariants, itemVariants, itemTransition, viewport } = useMarketingMotionConfig();
  const { salesAssistance, formsRequirements } = section;

  return (
    <section className="sewp-vi-obtain-quote" aria-labelledby="sewp-vi-obtain-quote-heading">
      <motion.div
        className="sewp-vi-obtain-quote__inner"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.header className="sewp-vi-obtain-quote__header" variants={itemVariants} transition={itemTransition}>
          <h2 id="sewp-vi-obtain-quote-heading" className="sewp-vi-obtain-quote__title">
            {section.title}
          </h2>
        </motion.header>

        <motion.div variants={itemVariants} transition={itemTransition}>
          <h3 className="sewp-vi-obtain-quote__process-heading">{section.processHeading}</h3>
          <ol className="sewp-vi-obtain-quote__steps">
            {section.steps.map((step, index) => (
              <li key={step.id} className="sewp-vi-obtain-quote__step">
                <span className="sewp-vi-obtain-quote__step-icon" aria-hidden="true">
                  <StepIcon name={step.icon} />
                </span>
                <span className="sewp-vi-obtain-quote__step-number" aria-hidden="true">
                  {index + 1}
                </span>
                <h4 className="sewp-vi-obtain-quote__step-title">{step.title}</h4>
                <p className="sewp-vi-obtain-quote__step-description">{step.description}</p>
              </li>
            ))}
          </ol>
        </motion.div>

        <motion.div className="sewp-vi-obtain-quote__assistance" variants={itemVariants} transition={itemTransition}>
          <h3 className="sewp-vi-obtain-quote__assistance-title">{salesAssistance.title}</h3>
          <p className="sewp-vi-obtain-quote__assistance-intro">{salesAssistance.intro}</p>

          <div className="sewp-vi-obtain-quote__contacts">
            <ContactCard {...salesAssistance.primary} />
            <ContactCard {...salesAssistance.alternate} />
          </div>

          <ul className="sewp-vi-obtain-quote__notes">
            <li className="sewp-vi-obtain-quote__note">
              <span className="sewp-vi-obtain-quote__note-icon" aria-hidden="true">
                <Clock {...pillarIconProps} />
              </span>
              <div>
                <p className="sewp-vi-obtain-quote__note-title">{salesAssistance.responseTime.title}</p>
                <p className="sewp-vi-obtain-quote__note-text">{salesAssistance.responseTime.description}</p>
              </div>
            </li>
            <li className="sewp-vi-obtain-quote__note">
              <span className="sewp-vi-obtain-quote__note-icon" aria-hidden="true">
                <ListChecks {...pillarIconProps} />
              </span>
              <div>
                <p className="sewp-vi-obtain-quote__note-title">{salesAssistance.important.title}</p>
                <p className="sewp-vi-obtain-quote__note-text">{salesAssistance.important.description}</p>
              </div>
            </li>
          </ul>
        </motion.div>

        <motion.div className="sewp-vi-obtain-quote__forms" variants={itemVariants} transition={itemTransition}>
          <h3 className="sewp-vi-obtain-quote__forms-title">{formsRequirements.title}</h3>
          {formsRequirements.paragraphs.map((paragraph) => (
            <p key={paragraph} className="sewp-vi-obtain-quote__forms-text">
              {paragraph}
            </p>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
