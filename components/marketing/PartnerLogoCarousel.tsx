"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import type { SiteContent } from "../../src/content/schema";

const LOGOS_PER_GROUP = 6;
const AUTO_ADVANCE_MS = 4000;

type PartnerLogo = SiteContent["homeAbout"]["partnerLogos"][number];

type PartnerLogoCarouselProps = {
  logos: PartnerLogo[];
};

function chunkLogos<T>(items: T[], size: number): T[][] {
  const groups: T[][] = [];
  for (let index = 0; index < items.length; index += size) {
    groups.push(items.slice(index, index + size));
  }
  return groups;
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      {direction === "left" ? (
        <path d="m15 18-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}

export function PartnerLogoCarousel({ logos }: PartnerLogoCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [groupIndex, setGroupIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  const groups = useMemo(() => chunkLogos(logos, LOGOS_PER_GROUP), [logos]);

  const goToGroup = useCallback(
    (nextIndex: number) => {
      const track = trackRef.current;
      if (!track || groups.length === 0) {
        return;
      }

      const index = ((nextIndex % groups.length) + groups.length) % groups.length;
      setGroupIndex(index);
      track.scrollTo({ left: track.clientWidth * index, behavior: reduceMotion ? "auto" : "smooth" });
    },
    [groups.length, reduceMotion]
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReduceMotion(mediaQuery.matches);

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (groups.length <= 1 || paused || reduceMotion) {
      return;
    }

    const timer = window.setInterval(() => {
      setGroupIndex((current) => {
        const nextIndex = (current + 1) % groups.length;
        const track = trackRef.current;
        if (track) {
          track.scrollTo({
            left: track.clientWidth * nextIndex,
            behavior: "smooth"
          });
        }
        return nextIndex;
      });
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(timer);
  }, [groups.length, paused, reduceMotion]);

  return (
    <div
      className={`home-about__carousel-shell${paused ? " is-paused" : ""}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) {
          setPaused(false);
        }
      }}
    >
      <div className="home-about__carousel">
        <button
          type="button"
          className="home-about__carousel-control home-about__carousel-control--prev"
          onClick={() => goToGroup(groupIndex - 1)}
          aria-label="Show previous technology partners"
        >
          <ChevronIcon direction="left" />
        </button>

        <div
          ref={trackRef}
          className="home-about__carousel-track"
          tabIndex={0}
          aria-live="polite"
          aria-label={`Technology partners, group ${groupIndex + 1} of ${groups.length}`}
        >
          <ul className="home-about__carousel-list">
            {groups.map((group, groupKey) => (
              <li
                key={`group-${groupKey}`}
                className="home-about__carousel-group"
                aria-hidden={groupKey !== groupIndex}
              >
                {group.map((logo, logoIndex) => (
                  <div key={logo.id} className="home-about__carousel-cell">
                    <Image
                      src={logo.imageSrc}
                      alt={`${logo.name} logo`}
                      width={240}
                      height={135}
                      sizes="(max-width: 640px) 30vw, (max-width: 960px) 26vw, 180px"
                      loading={groupKey === 0 && logoIndex < 6 ? "eager" : "lazy"}
                      unoptimized={logo.imageSrc.endsWith(".svg")}
                      className="home-about__carousel-logo"
                    />
                  </div>
                ))}
              </li>
            ))}
          </ul>
        </div>

        <button
          type="button"
          className="home-about__carousel-control home-about__carousel-control--next"
          onClick={() => goToGroup(groupIndex + 1)}
          aria-label="Show next technology partners"
        >
          <ChevronIcon direction="right" />
        </button>
      </div>

      {groups.length > 1 ? (
        <div
          className="home-about__carousel-progress"
          role="tablist"
          aria-label="Technology partner groups"
          style={
            {
              "--carousel-interval": `${AUTO_ADVANCE_MS}ms`,
              "--carousel-progress-count": groups.length
            } as CSSProperties
          }
        >
          {groups.map((_, index) => {
            const isActive = index === groupIndex;
            const isComplete = index < groupIndex;

            return (
              <button
                key={index}
                type="button"
                role="tab"
                className={[
                  "home-about__carousel-progress-segment",
                  isActive ? "is-active" : "",
                  isComplete ? "is-complete" : ""
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => goToGroup(index)}
                aria-label={`Show technology partners group ${index + 1}`}
                aria-selected={isActive}
              >
                <span
                  key={isActive ? `fill-${groupIndex}` : `fill-${index}`}
                  className="home-about__carousel-progress-fill"
                  aria-hidden
                />
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
