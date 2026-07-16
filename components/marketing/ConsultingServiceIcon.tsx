"use client";

import { Briefcase, Cloud, Users, Wrench } from "lucide-react";
import { pillarIconProps } from "./pillarIconProps";

type ConsultingServiceIconName =
  | "managed-services"
  | "cloud-services"
  | "professional-services"
  | "executive-recruiting";

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
    case "executive-recruiting":
      return <Users {...pillarIconProps} />;
    default: {
      const _exhaustive: never = name;
      return _exhaustive;
    }
  }
}

export type { ConsultingServiceIconName };
