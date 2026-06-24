"use client";

import { Briefcase, Cloud, Wrench } from "lucide-react";
import { pillarIconProps } from "./pillarIconProps";

type ConsultingServiceIconName = "managed-services" | "cloud-services" | "professional-services";

type ConsultingServiceIconProps = {
  name: ConsultingServiceIconName;
};

export function ConsultingServiceIcon({ name }: ConsultingServiceIconProps) {
  switch (name) {
    case "managed-services":
      return <Wrench {...pillarIconProps} />;
    case "cloud-services":
      return <Cloud {...pillarIconProps} />;
    case "professional-services":
      return <Briefcase {...pillarIconProps} />;
    default: {
      const _exhaustive: never = name;
      return _exhaustive;
    }
  }
}

export type { ConsultingServiceIconName };
