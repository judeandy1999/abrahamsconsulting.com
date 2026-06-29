"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef } from "react";
import type { NasaSewpViPageContent } from "../../src/content/schema";
import { NasaSewpViCompetencyIcon } from "./NasaSewpViCompetencyIcon";
import { useMarketingMotionConfig } from "./marketing-motion";

type NasaSewpViCoreCompetenciesSectionProps = {
  section: NasaSewpViPageContent["coreCompetencies"];
};

type CompetencyItem = NasaSewpViPageContent["coreCompetencies"]["items"][number];

const HALF_CYCLE_MS = 48_000;
const PING_PONG_PERIOD = HALF_CYCLE_MS * 2;

function pingPongPhase(elapsedMs: number): number {
  const elapsed = elapsedMs % PING_PONG_PERIOD;

  if (elapsed <= HALF_CYCLE_MS) {
    return elapsed / HALF_CYCLE_MS;
  }

  return 2 - elapsed / HALF_CYCLE_MS;
}

function CompetencyCard({ item }: { item: CompetencyItem }) {
  return (
    <article className="sewp-vi-competencies__card">
      <span className="sewp-vi-competencies__icon home-pillar__icon" aria-hidden="true">
        <NasaSewpViCompetencyIcon name={item.icon} />
      </span>
      <h3 className="sewp-vi-competencies__card-title">{item.title}</h3>
      <p className="sewp-vi-competencies__card-desc">{item.description}</p>
    </article>
  );
}

export function NasaSewpViCoreCompetenciesSection({ section }: NasaSewpViCoreCompetenciesSectionProps) {
  const { containerVariants, itemVariants, itemTransition, viewport } = useMarketingMotionConfig();
  const reduceMotion = useReducedMotion();
  const marqueeRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({ active: false, startX: 0, scrollLeft: 0 });
  const touchScrollingRef = useRef(false);
  const autoScrollRef = useRef({
    cycleStart: 0,
    lastPhase: 0
  });

  const getMaxScroll = useCallback(() => {
    const marquee = marqueeRef.current;
    if (!marquee) {
      return 0;
    }

    return Math.max(0, marquee.scrollWidth - marquee.clientWidth);
  }, []);

  const syncAnimationFromScroll = useCallback(() => {
    const marquee = marqueeRef.current;
    if (!marquee) {
      return;
    }

    const maxScroll = getMaxScroll();
    if (maxScroll <= 0) {
      return;
    }

    const ratio = marquee.scrollLeft / maxScroll;
    const autoScroll = autoScrollRef.current;
    const now = performance.now();
    const elapsed =
      ratio >= autoScroll.lastPhase
        ? ratio * HALF_CYCLE_MS
        : HALF_CYCLE_MS + (1 - ratio) * HALF_CYCLE_MS;

    autoScroll.cycleStart = now - elapsed;
    autoScroll.lastPhase = ratio;
  }, [getMaxScroll]);

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    const marquee = marqueeRef.current;
    if (!marquee) {
      return;
    }

    autoScrollRef.current.cycleStart = performance.now();

    let rafId = 0;

    const tick = (now: number) => {
      const isPaused = dragState.current.active || touchScrollingRef.current;

      if (!isPaused) {
        const maxScroll = getMaxScroll();

        if (maxScroll > 0) {
          const autoScroll = autoScrollRef.current;
          const elapsed = now - autoScroll.cycleStart;
          const phase = pingPongPhase(elapsed);

          autoScroll.lastPhase = phase;
          marquee.scrollLeft = phase * maxScroll;
        }
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [getMaxScroll, reduceMotion, section.items.length]);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const marquee = marqueeRef.current;
    if (!marquee || event.button !== 0) {
      return;
    }

    dragState.current = {
      active: true,
      startX: event.clientX,
      scrollLeft: marquee.scrollLeft
    };

    marquee.setPointerCapture(event.pointerId);
    marquee.classList.add("is-dragging");
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const marquee = marqueeRef.current;
    if (!marquee || !dragState.current.active) {
      return;
    }

    event.preventDefault();
    const deltaX = event.clientX - dragState.current.startX;
    marquee.scrollLeft = dragState.current.scrollLeft - deltaX;
  };

  const endDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    const marquee = marqueeRef.current;
    if (!marquee || !dragState.current.active) {
      return;
    }

    dragState.current.active = false;
    marquee.classList.remove("is-dragging");
    syncAnimationFromScroll();

    if (marquee.hasPointerCapture(event.pointerId)) {
      marquee.releasePointerCapture(event.pointerId);
    }
  };

  const handleTouchStart = () => {
    touchScrollingRef.current = true;
  };

  const handleTouchEnd = () => {
    window.setTimeout(() => {
      touchScrollingRef.current = false;
      syncAnimationFromScroll();
    }, 120);
  };

  return (
    <section className="sewp-vi-competencies" aria-labelledby="sewp-vi-competencies-heading">

      <motion.div
        className="sewp-vi-competencies__inner"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.header className="sewp-vi-competencies__header" variants={itemVariants} transition={itemTransition}>
          <p className="sewp-vi-competencies__eyebrow">{section.eyebrow}</p>
          <h2 id="sewp-vi-competencies-heading" className="sewp-vi-competencies__title">
            {section.title}
          </h2>
          <p className="sewp-vi-competencies__description">{section.description}</p>
        </motion.header>
      </motion.div>

      <motion.div
        ref={marqueeRef}
        className="sewp-vi-competencies__marquee"
        variants={itemVariants}
        transition={itemTransition}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        aria-label="Core competencies"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
      >
        <div className="sewp-vi-competencies__marquee-track">
          {section.items.map((item) => (
            <div key={item.id} className="sewp-vi-competencies__marquee-item">
              <CompetencyCard item={item} />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
