import type { CapabilitiesStatementProductsPageContent } from "./schema";
import {
  capabilitiesStatementSharedCertifications,
  capabilitiesStatementSharedContactBase,
  capabilitiesStatementSharedCta,
  capabilitiesStatementSharedFocusAreas,
  capabilitiesStatementSharedNaics,
  capabilitiesStatementSharedOverview,
  capabilitiesStatementSharedPartners
} from "./capabilities-statement-shared";

export const capabilitiesStatementProductsPageContent: CapabilitiesStatementProductsPageContent = {
  hero: {
    segments: ["Capabilities Statement", "Products"],
    description:
      "Hardware, software, and technology product capabilities Abrahams Consulting delivers for enterprise and government buyers—backed by certified qualifications and proven past performance."
  },
  contacts: {
    ...capabilitiesStatementSharedContactBase,
    email: "federalsolutionsteam@abrahamsconsulting.com"
  },
  certifications: {
    title: capabilitiesStatementSharedCertifications.title,
    href: capabilitiesStatementSharedCertifications.href,
    items: capabilitiesStatementSharedCertifications.items
  },
  focusAreas: capabilitiesStatementSharedFocusAreas,
  overview: capabilitiesStatementSharedOverview,
  products: {
    title: "Products",
    href: "https://cmcengage.com/6702",
    categories: [
      {
        id: "systems",
        title: "Systems",
        items: ["Laptop & Notebook", "Desktop", "Mobile Phone"]
      },
      {
        id: "computer-components",
        title: "Computer Components",
        items: ["UPS", "Keyboards", "Flash Memory", "Batteries"]
      },
      {
        id: "network",
        title: "Network",
        items: ["F5"]
      },
      {
        id: "software",
        title: "Software",
        items: ["Operating System", "Virtualization"]
      },
      {
        id: "multifunction-office",
        title: "Multifunction / Office",
        items: ["Printer", "Toner"]
      },
      {
        id: "audio-video",
        title: "Audio / Video",
        items: ["TV", "Headset"]
      },
      {
        id: "peripherals",
        title: "Peripherals",
        items: [
          "POS Systems",
          "Adapter / Cable",
          "POS Printer",
          "Scanner",
          "Camera",
          "Projector",
          "Monitor"
        ]
      }
    ]
  },
  partners: capabilitiesStatementSharedPartners,
  pastPerformance: {
    title: "Past Performance Services Examples",
    items: [
      {
        id: "nyu-langone",
        body: "NYU Langone Health projects include implementation and project management of the entire network infrastructure of Kimmel Pavilion and Hassenfeld Children's Hospital, the most digitally advanced new inpatient facilities in the USA."
      },
      {
        id: "fdny",
        body: "Fire Department of New York City projects include Network Operations Center management, technical staffing, design and build-out of a development environment used as the basis to implement the second Public Safety Answering Center to augment existing 911 services in NYC, home to the largest public safety forces in the USA."
      },
      {
        id: "abfe",
        body: "ABFE projects include endpoint defense (Bitdefender); Microsoft Azure management and cloud logging; Layer 7 service desk; MSP monitoring services; managed firewall via Cisco Umbrella; Cisco Umbrella internet protection; monitored desktop/laptop services; and email security powered by Proofpoint."
      }
    ]
  },
  naics: capabilitiesStatementSharedNaics,
  cta: capabilitiesStatementSharedCta
};
