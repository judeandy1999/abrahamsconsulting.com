"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import type { SiteContent } from "../../src/content/schema";

const LOGOS_PER_GROUP = 6;

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

  const groups = useMemo(() => chunkLogos(logos, LOGOS_PER_GROUP), [logos]);

  const goToGroup = (nextIndex: number) => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    const index = Math.max(0, Math.min(groups.length - 1, nextIndex));
    setGroupIndex(index);
    track.scrollTo({ left: track.clientWidth * index, behavior: "smooth" });
  };

  return (
    <div className="home-about__carousel">
      <button
        type="button"
        className="home-about__carousel-control home-about__carousel-control--prev"
        onClick={() => goToGroup(groupIndex - 1)}
        disabled={groupIndex === 0}
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
              {group.map((logo) => (
                <div key={logo.id} className="home-about__carousel-cell">
                  <Image
                    src={logo.imageSrc}
                    alt=""
                    width={240}
                    height={135}
                    sizes="(max-width: 640px) 30vw, (max-width: 960px) 26vw, 180px"
                    unoptimized={logo.imageSrc.endsWith(".svg")}
                    className="home-about__carousel-logo"
                  />
                  <span className="sr-only">{logo.name}</span>
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
        disabled={groupIndex >= groups.length - 1}
        aria-label="Show next technology partners"
      >
        <ChevronIcon direction="right" />
      </button>
    </div>
  );
}
