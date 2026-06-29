"use client";

import { Building2, Calendar, Globe, IdCard, Mail, Phone, Users, Warehouse } from "lucide-react";
import type { NasaSewpViPageContent } from "../../src/content/schema";
import { pillarIconProps } from "./pillarIconProps";

type CompanyInfoIconName = NasaSewpViPageContent["companyInformation"]["items"][number]["icon"];

type NasaSewpViCompanyInfoIconProps = {
  name: CompanyInfoIconName;
};

export function NasaSewpViCompanyInfoIcon({ name }: NasaSewpViCompanyInfoIconProps) {
  switch (name) {
    case "headquarters":
      return <Building2 {...pillarIconProps} />;
    case "phone":
      return <Phone {...pillarIconProps} />;
    case "federal-sales":
      return <Mail {...pillarIconProps} />;
    case "website":
      return <Globe {...pillarIconProps} />;
    case "uei":
      return <IdCard {...pillarIconProps} />;
    case "cage":
      return <Warehouse {...pillarIconProps} />;
    case "business-size":
      return <Users {...pillarIconProps} />;
    case "founded":
      return <Calendar {...pillarIconProps} />;
    default: {
      const _exhaustive: never = name;
      return _exhaustive;
    }
  }
}
