"use client";

import { ClipboardCheck, Clock, FileSearch, PackageCheck, Send } from "lucide-react";
import { motion } from "framer-motion";
import type { NasaSewpViPageContent } from "../../src/content/schema";
import { pillarIconProps } from "./pillarIconProps";
import { useMarketingMotionConfig } from "./marketing-motion";

type NasaSewpViObtainQuoteSectionProps = {
  section: NasaSewpViPageContent["obtainQuote"];
  embedded?: boolean;
};

type StepIconName = NasaSewpViPageContent["obtainQuote"]["steps"][number]["icon"];
type Step = NasaSewpViPageContent["obtainQuote"]["steps"][number];
type SalesContact = NasaSewpViPageContent["obtainQuote"]["salesAssistance"]["contact"];

function StepIcon({ name }: { name: StepIconName }) {
  switch (name) {
    case "prepare":
      return <FileSearch {...pillarIconProps} />;
    case "submit":
      return <Send {...pillarIconProps} />;
    case "evaluate":
      return <ClipboardCheck {...pillarIconProps} />;
    case "order":
      return <PackageCheck {...pillarIconProps} />;
    default: {
      const _exhaustive: never = name;
      return _exhaustive;
    }
  }
}

function telephoneHref(telephone: string): string {
  const extensionMatch = telephone.match(/ext\.?\s*(\d+)/i);
  const baseDigits = telephone.replace(/ext\.?\s*\d+/i, "").replace(/[^\d+]/g, "");
  if (extensionMatch) {
    return `tel:${baseDigits},${extensionMatch[1]}`;
  }
  return `tel:${baseDigits}`;
}

function ContactCard({ label, name, role, telephone, email }: SalesContact) {
  return (
    <article className="sewp-vi-obtain-quote__contact">
      <p className="sewp-vi-obtain-quote__contact-label">{label}</p>
      <p className="sewp-vi-obtain-quote__contact-name">{name}</p>
      <p className="sewp-vi-obtain-quote__contact-role">{role}</p>
      <dl className="sewp-vi-obtain-quote__contact-meta">
        <div className="sewp-vi-obtain-quote__contact-meta-row">
          <dt>Telephone</dt>
          <dd>
            <a href={telephoneHref(telephone)} className="sewp-vi-obtain-quote__link">
              {telephone}
            </a>
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

function StepCard({ step, index }: { step: Step; index: number }) {
  return (
    <li className="sewp-vi-obtain-quote__step">
      <div className="sewp-vi-obtain-quote__step-header">
        <span className="sewp-vi-obtain-quote__step-icon" aria-hidden="true">
          <StepIcon name={step.icon} />
        </span>
        <span className="sewp-vi-obtain-quote__step-number" aria-hidden="true">
          {index + 1}
        </span>
      </div>
      <h4 className="sewp-vi-obtain-quote__step-title">{step.title}</h4>
      <p className="sewp-vi-obtain-quote__step-description">{step.description}</p>
    </li>
  );
}

export function NasaSewpViObtainQuoteSection({ section, embedded = false }: NasaSewpViObtainQuoteSectionProps) {
  const { containerVariants, itemVariants, itemTransition, viewport } = useMarketingMotionConfig();
  const { salesAssistance, formsRequirements } = section;

  const content = (
    <>
      <header className="sewp-vi-obtain-quote__header">
        {embedded ? null : (
          <h2 id="sewp-vi-obtain-quote-heading" className="sewp-vi-obtain-quote__title">
            {section.title}
          </h2>
        )}
        <p className="sewp-vi-obtain-quote__program">{section.programName}</p>
        {section.intro.map((paragraph) => (
          <p key={paragraph} className="sewp-vi-obtain-quote__intro">
            {paragraph}
          </p>
        ))}
      </header>

      <div>
        <h3 className="sewp-vi-obtain-quote__process-heading">{section.processHeading}</h3>
        <ol className="sewp-vi-obtain-quote__steps">
          {section.steps.map((step, index) => (
            <StepCard key={step.id} step={step} index={index} />
          ))}
        </ol>
      </div>

      <div className="sewp-vi-obtain-quote__assistance">
        <h3 className="sewp-vi-obtain-quote__assistance-title">{salesAssistance.title}</h3>
        <p className="sewp-vi-obtain-quote__assistance-intro">{salesAssistance.intro}</p>

        <div className="sewp-vi-obtain-quote__contacts sewp-vi-obtain-quote__contacts--single">
          <ContactCard {...salesAssistance.contact} />
        </div>

        <p className="sewp-vi-obtain-quote__disclaimer">{salesAssistance.disclaimer}</p>

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
        </ul>
      </div>

      <div className="sewp-vi-obtain-quote__forms">
        <h3 className="sewp-vi-obtain-quote__forms-title">{formsRequirements.title}</h3>
        {formsRequirements.paragraphs.map((paragraph) => (
          <p key={paragraph} className="sewp-vi-obtain-quote__forms-text">
            {paragraph}
          </p>
        ))}
      </div>
    </>
  );

  if (embedded) {
    return <div className="sewp-vi-obtain-quote sewp-vi-obtain-quote--embedded">{content}</div>;
  }

  return (
    <section className="sewp-vi-obtain-quote" aria-labelledby="sewp-vi-obtain-quote-heading">
      <motion.div
        className="sewp-vi-obtain-quote__inner"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.div variants={itemVariants} transition={itemTransition}>
          {content}
        </motion.div>
      </motion.div>
    </section>
  );
}
