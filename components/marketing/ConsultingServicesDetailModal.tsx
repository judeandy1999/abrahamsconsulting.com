"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import type { ConsultingServicesPageContent } from "../../src/content/schema";
import { IconArrowRight } from "./NavIcons";

type ConsultingServiceItem = ConsultingServicesPageContent["servicesSection"]["items"][number];

type ConsultingServicesDetailModalProps = {
  item: ConsultingServiceItem | null;
  scheduleLabel: string;
  onClose: () => void;
};

export function ConsultingServicesDetailModal({ item, scheduleLabel, onClose }: ConsultingServicesDetailModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) {
      return;
    }

    if (item) {
      if (!dialog.open) {
        dialog.showModal();
      }
      closeButtonRef.current?.focus();
    } else if (dialog.open) {
      dialog.close();
    }
  }, [item]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) {
      return;
    }

    const handleClose = () => onClose();
    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, [onClose]);

  if (!item) {
    return <dialog ref={dialogRef} className="consulting-services-modal" aria-hidden="true" />;
  }

  const isTwoColumn = item.modal.sections.length === 2;

  return (
    <dialog ref={dialogRef} className="consulting-services-modal" aria-labelledby="consulting-services-modal-title">
      <div className="consulting-services-modal__panel">
        <button
          ref={closeButtonRef}
          type="button"
          className="consulting-services-modal__close"
          aria-label="Close dialog"
          onClick={() => dialogRef.current?.close()}
        >
          ×
        </button>

        <div className="consulting-services-modal__media">
          <Image
            src={item.modal.imageSrc}
            alt={item.modal.imageAlt}
            width={640}
            height={480}
            className="consulting-services-modal__image"
          />
        </div>

        <div className="consulting-services-modal__intro">
          <h2 id="consulting-services-modal-title" className="consulting-services-modal__title">
            {item.title}
          </h2>
        </div>

        <div className={`consulting-services-modal__content${isTwoColumn ? " consulting-services-modal__content--split" : ""}`}>
          {item.modal.sections.map((section) => (
            <div key={section.title} className="consulting-services-modal__section">
              <h3 className="consulting-services-modal__section-title">{section.title}</h3>
              <ul className="consulting-services-modal__list">
                {section.items.map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="consulting-services-modal__actions">
          <Link
            href={item.modal.ctaHref}
            className="btn btn--primary consulting-services-modal__cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            {scheduleLabel}
            <IconArrowRight className="btn__icon" />
          </Link>
        </div>
      </div>
    </dialog>
  );
}
