"use client";

import { Camera, Cloud, Monitor, Network, Package, Plug, Server, Shield, Tv } from "lucide-react";
import type { NasaSewpViPageContent } from "../../src/content/schema";
import { pillarIconProps } from "./pillarIconProps";

type CategoryAIconName = NasaSewpViPageContent["categoryACapabilities"]["items"][number]["icon"];

type NasaSewpViCategoryAIconProps = {
  name: CategoryAIconName;
};

export function NasaSewpViCategoryAIcon({ name }: NasaSewpViCategoryAIconProps) {
  switch (name) {
    case "computer-systems":
      return <Monitor {...pillarIconProps} />;
    case "storage":
      return <Server {...pillarIconProps} />;
    case "networking":
      return <Network {...pillarIconProps} />;
    case "imaging":
      return <Camera {...pillarIconProps} />;
    case "power-cabling":
      return <Plug {...pillarIconProps} />;
    case "audio-visual":
      return <Tv {...pillarIconProps} />;
    case "security-sensors":
      return <Shield {...pillarIconProps} />;
    case "software-cloud":
      return <Cloud {...pillarIconProps} />;
    case "product-services":
      return <Package {...pillarIconProps} />;
    default: {
      const _exhaustive: never = name;
      return _exhaustive;
    }
  }
}
