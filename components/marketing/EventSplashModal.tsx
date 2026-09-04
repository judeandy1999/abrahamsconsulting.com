"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { EventsPageContent } from "../../src/content/schema";

type EventSplashModalProps = {
  splash: EventsPageContent["splash"];
};

export function EventSplashModal({ splash }: EventSplashModalProps) {
  const pathname = usePathname();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const isHomepage = pathname === "/";

  useEffect(() => {
    if (!splash.enabled || !isHomepage) {
      setIsOpen(false);
      return;
    }

    setIsOpen(true);
  }, [splash.enabled, isHomepage]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) {
      return;
    }

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
      closeButtonRef.current?.focus();
    } else if (dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  const dismiss = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) {
      return;
    }

    const handleClose = () => setIsOpen(false);
    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, []);

  if (!splash.enabled || !isHomepage) {
    return null;
  }

  return (
    <dialog ref={dialogRef} className="event-splash" aria-labelledby="event-splash-title" aria-modal="true">
      <div className="event-splash__panel">
        <button
          ref={closeButtonRef}
          type="button"
          className="event-splash__close"
          aria-label="Close promotional event dialog"
          onClick={dismiss}
        >
          ×
        </button>

        <div className="event-splash__media">
          <Image
            src={splash.imageSrc}
            alt={splash.imageAlt}
            width={1200}
            height={675}
            className="event-splash__image"
            priority
          />
          <span id="event-splash-title" className="sr-only">
            {splash.imageAlt}
          </span>
        </div>

        <div className="event-splash__actions">
          <Link
            href={splash.ctaHref}
            className="btn btn--red event-splash__cta"
            target="_blank"
            rel="noopener noreferrer"
            onClick={dismiss}
          >
            {splash.ctaLabel}
          </Link>
        </div>
      </div>
    </dialog>
  );
}
