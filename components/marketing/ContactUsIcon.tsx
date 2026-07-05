import { Mail, MapPin, Phone, Send, Smartphone } from "lucide-react";
import { pillarIconProps } from "./pillarIconProps";

type ContactUsChannelIconName = "mail" | "phone" | "smartphone" | "map-pin";

type ContactUsIconProps = {
  name: ContactUsChannelIconName | "send";
  className?: string;
};

export function ContactUsIcon({ name, className }: ContactUsIconProps) {
  const props = { ...pillarIconProps, className: className ?? pillarIconProps.className };

  switch (name) {
    case "mail":
      return <Mail {...props} />;
    case "phone":
      return <Phone {...props} />;
    case "smartphone":
      return <Smartphone {...props} />;
    case "map-pin":
      return <MapPin {...props} />;
    case "send":
      return <Send {...props} />;
    default: {
      const _exhaustive: never = name;
      return _exhaustive;
    }
  }
}
