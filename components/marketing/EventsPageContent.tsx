"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { EventItem, EventsPageContent as EventsPageContentType } from "../../src/content/schema";
import { isExternalHref } from "../../lib/navigation/is-external-href";
import { EventDetailModal } from "./EventDetailModal";
import { IconArrowRight } from "./NavIcons";

type EventsPageContentProps = {
  content: EventsPageContentType;
};

function EventCard({
  event,
  knowMoreLabel,
  onSelect
}: {
  event: EventItem;
  knowMoreLabel: string;
  onSelect: (event: EventItem) => void;
}) {
  return (
    <article className="events-page__card">
      <div className="events-page__card-button">
        <div className="events-page__card-media">
          <button
            type="button"
            className="events-page__card-media-open"
            aria-label={`${knowMoreLabel}: ${event.title}`}
            onClick={() => onSelect(event)}
          />
          <Image
            src={event.cardImageSrc}
            alt={event.cardImageAlt}
            width={640}
            height={360}
            className="events-page__card-image"
          />
          <div className="events-page__card-actions">
            <Link
              href={event.modal.ctaHref}
              className="btn btn--red events-page__card-action"
              {...(isExternalHref(event.modal.ctaHref)
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {event.modal.ctaLabel}
              <IconArrowRight className="btn__icon" />
            </Link>
          </div>
        </div>
        <button type="button" className="events-page__card-body" onClick={() => onSelect(event)}>
          <p className="events-page__card-type">{event.eventType}</p>
          <h3 className="events-page__card-title">{event.title}</h3>
          <p className="events-page__card-subtitle">{event.subtitle}</p>
          <ul className="events-page__card-meta">
            <li>{event.date}</li>
            <li>{event.time}</li>
            <li>{event.location}</li>
          </ul>
          <span className="events-page__card-cta">{knowMoreLabel}</span>
        </button>
      </div>
    </article>
  );
}

export function EventsPageContent({ content }: EventsPageContentProps) {
  const [activeEvent, setActiveEvent] = useState<EventItem | null>(null);
  const closeModal = useCallback(() => setActiveEvent(null), []);

  const upcomingEvents = useMemo(
    () => content.events.filter((event) => event.status === "upcoming"),
    [content.events]
  );
  const pastEvents = useMemo(() => content.events.filter((event) => event.status === "past"), [content.events]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const hashId = window.location.hash.replace(/^#/, "");
    if (hashId === "upcoming" || hashId === "past") {
      const target = document.getElementById(hashId);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <div className="events-page">
      <section className="events-page__hero" aria-labelledby="events-hero-heading">
        <div className="events-page__hero-overlay" aria-hidden="true" />
        <div className="events-page__hero-inner">
          <h1 id="events-hero-heading" className="events-page__hero-title">
            {content.hero.title}
          </h1>
          <p className="events-page__hero-description">{content.hero.description}</p>
        </div>
      </section>

      <div className="events-page__body">
        <section id="upcoming" className="events-page__section" aria-labelledby="events-upcoming-heading">
          <header className="events-page__section-header">
            <h2 id="events-upcoming-heading" className="events-page__section-title">
              {content.upcomingSection.title}
            </h2>
          </header>

          {upcomingEvents.length > 0 ? (
            <div className="events-page__grid">
              {upcomingEvents.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  knowMoreLabel={content.knowMoreLabel}
                  onSelect={setActiveEvent}
                />
              ))}
            </div>
          ) : (
            <p className="events-page__empty">{content.upcomingSection.emptyMessage}</p>
          )}
        </section>

        <section id="past" className="events-page__section" aria-labelledby="events-past-heading">
          <header className="events-page__section-header">
            <h2 id="events-past-heading" className="events-page__section-title">
              {content.pastSection.title}
            </h2>
          </header>

          {pastEvents.length > 0 ? (
            <div className="events-page__grid">
              {pastEvents.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  knowMoreLabel={content.knowMoreLabel}
                  onSelect={setActiveEvent}
                />
              ))}
            </div>
          ) : (
            <p className="events-page__empty">{content.pastSection.emptyMessage}</p>
          )}
        </section>
      </div>

      <EventDetailModal event={activeEvent} onClose={closeModal} />
    </div>
  );
}
