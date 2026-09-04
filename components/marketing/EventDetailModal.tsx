"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import type { EventItem } from "../../src/content/schema";
import { IconArrowRight } from "./NavIcons";

type EventDetailModalProps = {
  event: EventItem | null;
  onClose: () => void;
};

export function EventDetailModal({ event, onClose }: EventDetailModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) {
      return;
    }

    if (event) {
      if (!dialog.open) {
        dialog.showModal();
      }
      closeButtonRef.current?.focus();
    } else if (dialog.open) {
      dialog.close();
    }
  }, [event]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) {
      return;
    }

    const handleClose = () => onClose();
    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, [onClose]);

  if (!event) {
    return <dialog ref={dialogRef} className="event-detail-modal" aria-hidden="true" />;
  }

  return (
    <dialog ref={dialogRef} className="event-detail-modal" aria-labelledby="event-detail-modal-title">
      <div className="event-detail-modal__panel">
        <button
          ref={closeButtonRef}
          type="button"
          className="event-detail-modal__close"
          aria-label="Close dialog"
          onClick={() => dialogRef.current?.close()}
        >
          ×
        </button>

        <div className="event-detail-modal__media">
          <Image
            src={event.modal.imageSrc}
            alt={event.modal.imageAlt}
            width={960}
            height={540}
            className="event-detail-modal__image"
          />
        </div>

        <div className="event-detail-modal__intro">
          <p className="event-detail-modal__eyebrow">{event.eventType}</p>
          <h2 id="event-detail-modal-title" className="event-detail-modal__title">
            {event.title}
          </h2>
          <p className="event-detail-modal__subtitle">{event.subtitle}</p>
          <p className="event-detail-modal__summary">{event.modal.summary}</p>
        </div>

        <dl className="event-detail-modal__details">
          {event.modal.details.map((detail) => (
            <div key={detail.label} className="event-detail-modal__detail">
              <dt>{detail.label}</dt>
              <dd>{detail.value}</dd>
            </div>
          ))}
        </dl>

        <div className="event-detail-modal__highlights">
          {event.modal.highlights.map((highlight) => (
            <article key={highlight.title} className="event-detail-modal__highlight">
              <h3>{highlight.title}</h3>
              <p>{highlight.description}</p>
            </article>
          ))}
        </div>

        <div className="event-detail-modal__actions">
          <Link
            href={event.modal.ctaHref}
            className="btn btn--red event-detail-modal__cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            {event.modal.ctaLabel}
            <IconArrowRight className="btn__icon" />
          </Link>
        </div>
      </div>
    </dialog>
  );
}
