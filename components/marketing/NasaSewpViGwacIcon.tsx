"use client";

import { Building2, Calendar, CircleCheck, FileCheck, Globe, Users } from "lucide-react";
import { pillarIconProps } from "./pillarIconProps";

type GwacIconName = "building" | "check" | "commitment" | "globe" | "calendar" | "users";

type NasaSewpViGwacIconProps = {
  name: GwacIconName;
  className?: string;
};

export function NasaSewpViGwacIcon({ name, className }: NasaSewpViGwacIconProps) {
  const props = { ...pillarIconProps, className: className ?? pillarIconProps.className };

  switch (name) {
    case "building":
      return <Building2 {...props} />;
    case "check":
      return <CircleCheck {...props} />;
    case "commitment":
      return <FileCheck {...props} />;
    case "globe":
      return <Globe {...props} />;
    case "calendar":
      return <Calendar {...props} />;
    case "users":
      return <Users {...props} />;
    default: {
      const _exhaustive: never = name;
      return _exhaustive;
    }
  }
}
