"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useMarketingMotionConfig } from "./marketing-motion";

type MarketingMotionGroupProps = {
  className?: string;
  children: ReactNode;
};

export function MarketingMotionGroup({ className, children }: MarketingMotionGroupProps) {
  const { containerVariants, viewport } = useMarketingMotionConfig();

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      {children}
    </motion.div>
  );
}

type MarketingMotionItemProps = {
  className?: string;
  children: ReactNode;
};

export function MarketingMotionItem({ className, children }: MarketingMotionItemProps) {
  const { itemVariants, itemTransition } = useMarketingMotionConfig();

  return (
    <motion.div className={className} variants={itemVariants} transition={itemTransition}>
      {children}
    </motion.div>
  );
}
