"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { EventItem, EventsPageContent as EventsPageContentType } from "../../src/content/schema";
import { EventDetailModal } from "./EventDetailModal";

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
      <button type="button" className="events-page__card-button" onClick={() => onSelect(event)}>
        <div className="events-page__card-media">
          <Image
            src={event.cardImageSrc}
            alt={event.cardImageAlt}
            width={640}
            height={360}
            className="events-page__card-image"
          />
        </div>
        <div className="events-page__card-body">
          <p className="events-page__card-type">{event.eventType}</p>
          <h3 className="events-page__card-title">{event.title}</h3>
          <p className="events-page__card-subtitle">{event.subtitle}</p>
          <ul className="events-page__card-meta">
            <li>{event.date}</li>
            <li>{event.time}</li>
            <li>{event.location}</li>
          </ul>
          <span className="events-page__card-cta">{knowMoreLabel}</span>
        </div>
      </button>
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
