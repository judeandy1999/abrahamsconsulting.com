import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import type { EventItem, EventsPageContent } from "../../src/content/schema";
import { IconArrowRight } from "./NavIcons";

const YouTubeFacade = dynamic(
  () => import("./YouTubeFacade").then((module) => ({ default: module.YouTubeFacade })),
  { ssr: true }
);

type EventRecordingPageContentProps = {
  event: EventItem;
  page: EventsPageContent;
};

export function EventRecordingPageContent({ event, page }: EventRecordingPageContentProps) {
  const recording = event.recording;

  if (!recording) {
    return null;
  }

  return (
    <div className="event-recording-page">
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
    </div>
  );
}
