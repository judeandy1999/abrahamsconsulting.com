"use client";

import { Building2, ClipboardCheck, Package } from "lucide-react";
import { pillarIconProps } from "./pillarIconProps";

type CapabilitiesStatementIconName = "capabilities-services" | "capabilities-federal" | "capabilities-products";

type CapabilitiesStatementIconProps = {
  name: CapabilitiesStatementIconName;
};

export function CapabilitiesStatementIcon({ name }: CapabilitiesStatementIconProps) {
  switch (name) {
    case "capabilities-services":
      return <ClipboardCheck {...pillarIconProps} />;
    case "capabilities-federal":
      return <Building2 {...pillarIconProps} />;
    case "capabilities-products":
      return <Package {...pillarIconProps} />;
    default: {
      const _exhaustive: never = name;
      return _exhaustive;
    }
  }
}

export type { CapabilitiesStatementIconName };
