"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import type { EventItem, EventsPageContent } from "../../src/content/schema";
import { HubSpotFormFrame } from "./HubSpotFormFrame";
import { IconArrowRight } from "./NavIcons";

const YouTubeFacade = dynamic(
  () => import("./YouTubeFacade").then((module) => ({ default: module.YouTubeFacade })),
  { ssr: false }
);

type EventRecordingPageContentProps = {
  event: EventItem;
  page: EventsPageContent;
};

function EventRecordingHero({ event }: { event: EventItem }) {
  return (
    <section className="event-recording-page__hero" aria-labelledby="event-recording-heading">
      <div className="event-recording-page__hero-overlay" aria-hidden="true" />
      <div className="event-recording-page__hero-inner">
        <p className="event-recording-page__eyebrow">{event.eventType}</p>
        <h1 id="event-recording-heading" className="event-recording-page__title">
          {event.title}
        </h1>
        <p className="event-recording-page__subtitle">{event.subtitle}</p>
        <ul className="event-recording-page__meta">
          <li>{event.date}</li>
          <li>{event.time}</li>
          <li>Partner: {event.partner}</li>
        </ul>
      </div>
    </section>
  );
}

export function EventRecordingPageContent({ event, page }: EventRecordingPageContentProps) {
  const recording = event.recording;
  const [isUnlocked, setIsUnlocked] = useState(false);

  const readUnlockState = useCallback(() => {
    if (!recording?.gate) {
      return true;
    }

    try {
      return localStorage.getItem(recording.gate.storageKey) === "granted";
    } catch {
      return false;
    }
  }, [recording?.gate]);

  useEffect(() => {
    setIsUnlocked(readUnlockState());
  }, [readUnlockState]);

  const handleFormSubmitted = useCallback(() => {
    if (!recording?.gate) {
      setIsUnlocked(true);
      return;
    }

    try {
      localStorage.setItem(recording.gate.storageKey, "granted");
    } catch {
      // Still unlock for the current visit if storage is unavailable.
    }

    setIsUnlocked(true);
  }, [recording?.gate]);

  if (!recording) {
    return null;
  }

  const showGate = Boolean(recording.gate) && !isUnlocked;

  return (
    <div className="event-recording-page">
      <EventRecordingHero event={event} />

      {showGate && recording.gate ? (
        <div className="event-recording-page__body">
          <section className="event-recording-page__gate" aria-labelledby="event-recording-gate-heading">
            <div className="event-recording-page__gate-inner">
              <div className="event-recording-page__gate-copy">
                <h2 id="event-recording-gate-heading" className="event-recording-page__gate-title">
                  {recording.gate.title}
                </h2>
                <p className="event-recording-page__gate-description">{recording.gate.description}</p>
              </div>
              <div className="event-recording-page__gate-form">
                <HubSpotFormFrame
                  config={recording.gate.hubspotForm}
                  onFormSubmitted={handleFormSubmitted}
                  className="event-recording-page__hubspot"
                />
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div className="event-recording-page__body">
          <div className="event-recording-page__layout">
            <div className="event-recording-page__video-panel">
              <YouTubeFacade
                embedUrl={recording.videoUrl}
                title={recording.videoTitle}
                className="event-recording-page__video"
              />
            </div>

            <aside className="event-recording-page__sidebar" aria-label="Event details">
              <div className="event-recording-page__poster">
                <Image
                  src={event.cardImageSrc}
                  alt={event.cardImageAlt}
                  width={640}
                  height={360}
                  className="event-recording-page__poster-image"
                />
              </div>
              <p className="event-recording-page__description">{recording.description}</p>
              <ul className="event-recording-page__highlights">
                {event.modal.highlights.map((highlight) => (
                  <li key={highlight.title}>
                    <strong>{highlight.title}</strong>
                    <span>{highlight.description}</span>
                  </li>
                ))}
              </ul>
              <Link href="/events" className="btn btn--primary event-recording-page__back">
                {page.backToEventsLabel}
                <IconArrowRight className="btn__icon" />
              </Link>
            </aside>
          </div>
        </div>
      )}
    </div>
  );
}
