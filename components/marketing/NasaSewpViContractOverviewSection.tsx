"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { NasaSewpViPageContent } from "../../src/content/schema";
import { NASA_SEWP_VI_OVERVIEW_ASSETS } from "../../src/content/nasa-sewp-vi";
import { NasaSewpViOverviewIcon } from "./NasaSewpViOverviewIcon";
import { useMarketingMotionConfig } from "./marketing-motion";

type NasaSewpViContractOverviewSectionProps = {
  section: NasaSewpViPageContent["contractOverview"];
};

const COLUMN_SPLIT = 5;

function OverviewColumn({ items }: { items: NasaSewpViPageContent["contractOverview"]["items"] }) {
  const { itemVariants, itemTransition } = useMarketingMotionConfig();

  return (
    <ul className="sewp-vi-overview__column">
      {items.map((item) => (
        <motion.li key={item.id} className="sewp-vi-overview__row" variants={itemVariants} transition={itemTransition}>
          <span className="sewp-vi-overview__icon" aria-hidden="true">
            <NasaSewpViOverviewIcon name={item.icon} />
          </span>
          <div className="sewp-vi-overview__copy">
            <p className="sewp-vi-overview__label">{item.label}</p>
            <p className="sewp-vi-overview__value">{item.value}</p>
          </div>
        </motion.li>
      ))}
    </ul>
  );
}

export function NasaSewpViContractOverviewSection({ section }: NasaSewpViContractOverviewSectionProps) {
  const { containerVariants, itemVariants, itemTransition, viewport } = useMarketingMotionConfig();
  const leftColumn = section.items.slice(0, COLUMN_SPLIT);
  const rightColumn = section.items.slice(COLUMN_SPLIT);

  return (
    <section className="sewp-vi-overview" aria-labelledby="sewp-vi-overview-heading">
      <div className="sewp-vi-overview__bg-wrap" aria-hidden="true">
        <Image
          src={NASA_SEWP_VI_OVERVIEW_ASSETS.backgroundImageSrc}
          alt=""
          width={640}
          height={480}
          className="sewp-vi-overview__bg"
        />
      </div>

      <motion.div
        className="sewp-vi-overview__inner"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.header className="sewp-vi-overview__header" variants={itemVariants} transition={itemTransition}>
          <h2 id="sewp-vi-overview-heading" className="sewp-vi-overview__title">
            {section.title}
          </h2>
          <p className="sewp-vi-overview__description">{section.description}</p>
        </motion.header>

        <motion.div className="sewp-vi-overview__columns" variants={containerVariants}>
          <OverviewColumn items={leftColumn} />
          <OverviewColumn items={rightColumn} />
        </motion.div>
      </motion.div>
    </section>
  );
}
