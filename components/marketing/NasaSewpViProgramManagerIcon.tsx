"use client";

import { Building2, Clock3, Globe, Headset, Mail, MapPin, Phone, Smartphone, UserRound } from "lucide-react";
import { pillarIconProps } from "./pillarIconProps";

type ProgramManagerDetailIcon = "clock" | "globe" | "map-pin";
type ProgramManagerContactIcon = "phone" | "smartphone" | "mail" | "building";
type ProgramManagerIconName = ProgramManagerDetailIcon | ProgramManagerContactIcon | "headset" | "profile";

type NasaSewpViProgramManagerIconProps = {
  name: ProgramManagerIconName;
  className?: string;
};

export function NasaSewpViProgramManagerIcon({ name, className }: NasaSewpViProgramManagerIconProps) {
  const props = { ...pillarIconProps, className: className ?? pillarIconProps.className };

  switch (name) {
    case "clock":
      return <Clock3 {...props} />;
    case "globe":
      return <Globe {...props} />;
    case "map-pin":
      return <MapPin {...props} />;
    case "phone":
      return <Phone {...props} />;
    case "smartphone":
      return <Smartphone {...props} />;
    case "mail":
      return <Mail {...props} />;
    case "building":
      return <Building2 {...props} />;
    case "headset":
      return <Headset {...props} />;
    case "profile":
      return <UserRound {...props} />;
    default: {
      const _exhaustive: never = name;
      return _exhaustive;
    }
  }
}
