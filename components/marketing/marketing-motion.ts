"use client";

import { useReducedMotion } from "framer-motion";

export const marketingEaseOut = [0.22, 1, 0.36, 1] as const;
export const MARKETING_ITEM_DURATION = 0.85;
export const MARKETING_STAGGER = 0.12;
export const MARKETING_DELAY_CHILDREN = 0.08;
export const MARKETING_VIEWPORT = { once: true, amount: 0.12 } as const;

export function useMarketingMotionConfig() {
  const reduceMotion = useReducedMotion();

  const itemVariants = reduceMotion
    ? { hidden: { opacity: 1, y: 0, x: 0 }, visible: { opacity: 1, y: 0, x: 0 } }
    : { hidden: { opacity: 0, y: 24, x: 0 }, visible: { opacity: 1, y: 0, x: 0 } };

  const horizontalItemVariants = reduceMotion
    ? { hidden: { opacity: 1, x: 0 }, visible: { opacity: 1, x: 0 } }
    : { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : MARKETING_STAGGER,
        delayChildren: reduceMotion ? 0 : MARKETING_DELAY_CHILDREN
      }
    }
  };

  const itemTransition = reduceMotion
    ? { duration: 0 }
    : { duration: MARKETING_ITEM_DURATION, ease: marketingEaseOut };

  return {
    itemVariants,
    horizontalItemVariants,
    containerVariants,
    itemTransition,
    viewport: MARKETING_VIEWPORT
  };
}
