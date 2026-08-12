"use client";

import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useId, useState, type KeyboardEvent, type ReactNode } from "react";
import type { NasaSewpViPageContent } from "../../src/content/schema";
import { NASA_SEWP_VI_HERO_ASSETS } from "../../src/content/nasa-sewp-vi";
import { accessibleExternalLinkLabel } from "../../lib/accessibility/accessible-external-label";
import { NasaSewpViObtainQuoteSection } from "./NasaSewpViObtainQuoteSection";
import { useMarketingMotionConfig } from "./marketing-motion";

type NasaSewpViStatementsTableSectionProps = {
  contractOverview: NasaSewpViPageContent["contractOverview"];
  gwac: NasaSewpViPageContent["gwacIdentificationStatement"];
  aboutSewp: NasaSewpViPageContent["aboutSewp"];
  fairOpportunity: NasaSewpViPageContent["fairOpportunityClause"];
  postDeliverySupport: NasaSewpViPageContent["postDeliverySupport"];
  orderTroubleshooting: NasaSewpViPageContent["orderTroubleshooting"];
  programManager: NasaSewpViPageContent["programManagerContact"];
  externalResources: NasaSewpViPageContent["externalResourceLinks"];
  obtainQuote: NasaSewpViPageContent["obtainQuote"];
};

type TabId =
  | "contract-overview"
  | "obtain-quote"
  | "gwac"
  | "fair-opportunity"
  | "post-delivery"
  | "order-troubleshooting"
  | "program-manager"
  | "external-resources";

type TabDefinition = {
  id: TabId;
  label: string;
};

const TABS: TabDefinition[] = [
  { id: "contract-overview", label: "Contract Overview" },
  { id: "obtain-quote", label: "How to Obtain a Quote" },
  { id: "gwac", label: "Official GWAC Identification Statement" },
  { id: "fair-opportunity", label: "Fair Opportunity" },
  { id: "post-delivery", label: "Post-Delivery Support Information" },
  { id: "order-troubleshooting", label: "Order Troubleshooting Information" },
  { id: "program-manager", label: "Program Manager Contact Information" },
  { id: "external-resources", label: "External Resources" }
];

function ContactValue({
  value,
  href,
  ariaLabel,
  isEmail
}: {
  value: string;
  href?: string;
  ariaLabel?: string;
  isEmail?: boolean;
}) {
  const emailLike = isEmail || value.includes("@");

  if (href) {
    return (
      <a
        href={href}
        className={`sewp-vi-statements__link${emailLike ? " sewp-vi-statements__link--email" : ""}`}
        aria-label={ariaLabel ?? value}
      >
        {value}
      </a>
    );
  }

  if (emailLike) {
    return <span className="sewp-vi-statements__link--email">{value}</span>;
  }

  return (
    <>
      {value.split("\n").map((line, index) => (
        <span key={index}>
          {index > 0 ? <br /> : null}
          {line}
        </span>
      ))}
    </>
  );
}

function PostDeliveryTopics({
  topics
}: {
  topics: NasaSewpViPageContent["postDeliverySupport"]["topics"];
}) {
  const baseId = useId();
  const [activeTopicId, setActiveTopicId] = useState(topics[0]?.id ?? "");

  if (topics.length === 0) {
    return null;
  }

  function focusTopicAt(index: number) {
    const next = topics[(index + topics.length) % topics.length];
    setActiveTopicId(next.id);
    document.getElementById(`${baseId}-topic-tab-${next.id}`)?.focus();
  }

  function onTopicKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      focusTopicAt(index + 1);
      return;
    }

    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      focusTopicAt(index - 1);
      return;
    }

    if (event.key === "Home") {
      event.preventDefault();
      focusTopicAt(0);
      return;
    }

    if (event.key === "End") {
      event.preventDefault();
      focusTopicAt(topics.length - 1);
    }
  }

  return (
    <div className="sewp-vi-statements__topic-tabs">
      <div
        className="sewp-vi-statements__topic-tablist"
        role="tablist"
        aria-label="Post-delivery support topics"
      >
        {topics.map((topic, index) => {
          const isActive = topic.id === activeTopicId;

          return (
            <button
              key={topic.id}
              id={`${baseId}-topic-tab-${topic.id}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`${baseId}-topic-panel-${topic.id}`}
              tabIndex={isActive ? 0 : -1}
              className={`sewp-vi-statements__topic-tab${isActive ? " sewp-vi-statements__topic-tab--active" : ""}`}
              onClick={() => setActiveTopicId(topic.id)}
              onKeyDown={(event) => onTopicKeyDown(event, index)}
            >
              {topic.title}
            </button>
          );
        })}
      </div>

      <div className="sewp-vi-statements__topic-panels">
        {topics.map((topic) => {
          const isActive = topic.id === activeTopicId;

          return (
            <div
              key={topic.id}
              id={`${baseId}-topic-panel-${topic.id}`}
              role="tabpanel"
              aria-labelledby={`${baseId}-topic-tab-${topic.id}`}
              hidden={!isActive}
              className="sewp-vi-statements__topic-panel"
            >
              <h4 className="sewp-vi-statements__topic-heading">{topic.title}</h4>
              <p className="sewp-vi-statements__paragraph">{topic.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function NasaSewpViStatementsTableSection({
  contractOverview,
  gwac,
  aboutSewp,
  fairOpportunity,
  postDeliverySupport,
  orderTroubleshooting,
  programManager,
  externalResources,
  obtainQuote
}: NasaSewpViStatementsTableSectionProps) {
  const baseId = useId();
  const [activeTab, setActiveTab] = useState<TabId>("contract-overview");
  const { containerVariants, itemVariants, itemTransition, viewport } = useMarketingMotionConfig();
  const supportContact = postDeliverySupport.primaryContact;
  const activeIndex = TABS.findIndex((tab) => tab.id === activeTab);

  function focusTabAt(index: number) {
    const next = TABS[(index + TABS.length) % TABS.length];
    setActiveTab(next.id);
    document.getElementById(`${baseId}-tab-${next.id}`)?.focus();
  }

  function onTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      focusTabAt(index + 1);
      return;
    }

    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      focusTabAt(index - 1);
      return;
    }

    if (event.key === "Home") {
      event.preventDefault();
      focusTabAt(0);
      return;
    }

    if (event.key === "End") {
      event.preventDefault();
      focusTabAt(TABS.length - 1);
    }
  }

  function renderStatementsPanel(tabId: TabId): ReactNode {
    switch (tabId) {
      case "contract-overview":
        return (
          <div id="sewp-vi-overview-heading">
            <p className="sewp-vi-statements__paragraph">{contractOverview.description}</p>
            <dl className="sewp-vi-statements__meta">
              {contractOverview.items.map((item) => (
                <div key={item.id} className="sewp-vi-statements__meta-row">
                  <dt>{item.label}</dt>
                  <dd>
                    <ContactValue value={item.value} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        );

      case "gwac":
        return (
          <div>
            <p className="sewp-vi-statements__paragraph">{gwac.statement}</p>
          </div>
        );

      case "fair-opportunity":
        return (
          <div>
            {(() => {
              const blocks: ReactNode[] = [];
              let listItems: string[] = [];

              const flushList = (key: string) => {
                if (listItems.length === 0) {
                  return;
                }

                blocks.push(
                  <ol key={key} className="sewp-vi-statements__list">
                    {listItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ol>
                );
                listItems = [];
              };

              fairOpportunity.paragraphs.forEach((paragraph, index) => {
                const numbered = paragraph.match(/^(\d+)\.\s+(.*)$/);

                if (numbered) {
                  listItems.push(numbered[2]);
                  return;
                }

                flushList(`fair-list-${index}`);
                blocks.push(
                  <p key={paragraph} className="sewp-vi-statements__paragraph">
                    {paragraph}
                  </p>
                );
              });

              flushList("fair-list-end");
              return blocks;
            })()}
          </div>
        );

      case "post-delivery":
        return (
          <div>
            <p className="sewp-vi-statements__paragraph">{postDeliverySupport.intro}</p>

            <PostDeliveryTopics topics={postDeliverySupport.topics} />

            <div className="sewp-vi-statements__profile">
              <p className="sewp-vi-statements__profile-name">{supportContact.name}</p>
              <p className="sewp-vi-statements__profile-role">{supportContact.role}</p>

              <dl className="sewp-vi-statements__meta">
                {supportContact.contacts.map((contact) => (
                  <div key={contact.id} className="sewp-vi-statements__meta-row">
                    <dt>{contact.label}</dt>
                    <dd>
                      <ContactValue
                        value={contact.value}
                        href={contact.href}
                        ariaLabel={`${contact.label}: ${contact.value}`}
                        isEmail={contact.id === "email" || contact.label.toLowerCase() === "email"}
                      />
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        );

      case "order-troubleshooting":
        return (
          <div>
            {orderTroubleshooting.paragraphs.map((paragraph) => (
              <p key={paragraph} className="sewp-vi-statements__paragraph">
                {paragraph}
              </p>
            ))}

            <div className="sewp-vi-statements__contact-grid">
              {orderTroubleshooting.contacts.map((contactGroup) => (
                <div key={contactGroup.id} className="sewp-vi-statements__profile">
                  <p className="sewp-vi-statements__profile-name">{contactGroup.name}</p>
                  <p className="sewp-vi-statements__profile-role">{contactGroup.heading}</p>

                  <dl className="sewp-vi-statements__meta">
                    {contactGroup.contacts.map((contact) => (
                      <div key={contact.id} className="sewp-vi-statements__meta-row">
                        <dt>{contact.label}</dt>
                        <dd>
                          <ContactValue
                            value={contact.value}
                            href={contact.href}
                            ariaLabel={`${contact.label}: ${contact.value}`}
                            isEmail={contact.id === "email" || contact.label.toLowerCase() === "email"}
                          />
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>
          </div>
        );

      case "program-manager":
        return (
          <div>
            {[programManager.profile, programManager.deputyProfile]
              .filter((profile): profile is NonNullable<typeof profile> => profile != null)
              .map((profile) => (
                <div key={profile.role} className="sewp-vi-statements__profile">
                  {profile.name ? (
                    <p className="sewp-vi-statements__profile-name">{profile.name}</p>
                  ) : null}
                  <p className="sewp-vi-statements__profile-role">{profile.role}</p>

                  <dl className="sewp-vi-statements__meta">
                    {profile.contacts.map((contact) => (
                      <div key={contact.id} className="sewp-vi-statements__meta-row">
                        <dt>{contact.label}</dt>
                        <dd>
                          <ContactValue
                            value={contact.value}
                            href={contact.href}
                            ariaLabel={`${contact.label}: ${contact.value}`}
                            isEmail={
                              contact.id === "email" ||
                              contact.id === "mail" ||
                              contact.label.toLowerCase().includes("email") ||
                              contact.label.toLowerCase().includes("mail")
                            }
                          />
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}

            <div className="sewp-vi-statements__meta sewp-vi-statements__meta--secondary">
              <dl className="sewp-vi-statements__meta">
                {programManager.details.map((detail) => (
                  <div key={detail.id} className="sewp-vi-statements__meta-row">
                    <dt>{detail.label}</dt>
                    <dd>
                      <ContactValue value={detail.value} />
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        );

      case "external-resources":
        return (
          <div>
            <ul className="sewp-vi-statements__resources">
              {externalResources.cards.map((card) => (
                <li key={card.id} className="sewp-vi-statements__resource">
                  <p className="sewp-vi-statements__paragraph">{card.description}</p>
                  <p className="sewp-vi-statements__resource-action">
                    <a
                      href={card.href}
                      className="sewp-vi-statements__resource-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={accessibleExternalLinkLabel(card.ctaLabel)}
                    >
                      <ExternalLink size={16} strokeWidth={1.75} aria-hidden="true" />
                      {card.ctaLabel}
                    </a>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        );

      case "obtain-quote":
        return <NasaSewpViObtainQuoteSection section={obtainQuote} embedded />;

      default: {
        const _exhaustive: never = tabId;
        return _exhaustive;
      }
    }
  }

  return (
    <section className="sewp-vi-statements" aria-labelledby="sewp-vi-statements-heading">
      <motion.div
        className="sewp-vi-statements__inner"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.header className="sewp-vi-statements__header" variants={itemVariants} transition={itemTransition}>
          <h2 id="sewp-vi-statements-heading" className="sewp-vi-statements__title">
            {aboutSewp.title}
          </h2>
          <span className="sewp-vi-statements__logo">
            <Image
              src={NASA_SEWP_VI_HERO_ASSETS.nasaLogoSrc}
              alt={NASA_SEWP_VI_HERO_ASSETS.nasaLogoAlt}
              width={560}
              height={448}
              className="sewp-vi-statements__logo-image"
            />
          </span>
          {aboutSewp.paragraphs.map((paragraph) => (
            <p key={paragraph} className="sewp-vi-statements__intro">
              {paragraph}
            </p>
          ))}
        </motion.header>

        <motion.div className="sewp-vi-statements__layout" variants={itemVariants} transition={itemTransition}>
          <aside className="sewp-vi-statements__sidebar">
            <nav className="sewp-vi-statements__side-nav" aria-label="NASA SEWP VI details">
              <ul className="sewp-vi-statements__side-nav-list" role="tablist" aria-orientation="vertical">
                {TABS.map((tab, index) => {
                  const isActive = tab.id === activeTab;

                  return (
                    <li key={tab.id} role="presentation">
                      <button
                        id={`${baseId}-tab-${tab.id}`}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        aria-controls={`${baseId}-panel-${tab.id}`}
                        tabIndex={isActive ? 0 : -1}
                        className={`sewp-vi-statements__side-nav-link${isActive ? " sewp-vi-statements__side-nav-link--active" : ""}`}
                        onClick={() => setActiveTab(tab.id)}
                        onKeyDown={(event) => onTabKeyDown(event, index)}
                      >
                        {tab.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>

          <div className="sewp-vi-statements__panels">
            {TABS.map((tab) => {
              const isActive = tab.id === activeTab;

              return (
                <div
                  key={tab.id}
                  id={`${baseId}-panel-${tab.id}`}
                  role="tabpanel"
                  aria-labelledby={`${baseId}-tab-${tab.id}`}
                  hidden={!isActive}
                  className="sewp-vi-statements__panel"
                >
                  <h3 className="sewp-vi-statements__panel-heading">{tab.label}</h3>
                  {renderStatementsPanel(tab.id)}
                </div>
              );
            })}
          </div>
        </motion.div>

        <p className="sewp-vi-statements__caption">
          Showing {TABS[activeIndex]?.label ?? "details"} for Abrahams Consulting LLC NASA SEWP VI
        </p>
      </motion.div>
    </section>
  );
}
