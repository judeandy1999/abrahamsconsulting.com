import type { CapabilitiesStatementServicesPageContent } from "./schema";
import {
  capabilitiesStatementSharedCertifications,
  capabilitiesStatementSharedContactBase,
  capabilitiesStatementSharedCta,
  capabilitiesStatementSharedFocusAreas,
  capabilitiesStatementSharedNaics,
  capabilitiesStatementSharedOverview,
  capabilitiesStatementSharedPartners
} from "./capabilities-statement-shared";

export const capabilitiesStatementServicesPageContent: CapabilitiesStatementServicesPageContent = {
  hero: {
    segments: ["Capabilities Statement", "Services"],
    description:
      "A concise overview of Abrahams Consulting services capabilities, qualifications, vendor partnerships, and past performance for enterprise and government buyers."
  },
  contacts: {
    ...capabilitiesStatementSharedContactBase,
    email: "agibson@abrahamsconsulting.com"
  },
  certifications: {
    title: capabilitiesStatementSharedCertifications.title,
    href: capabilitiesStatementSharedCertifications.href,
    items: capabilitiesStatementSharedCertifications.items
  },
  focusAreas: capabilitiesStatementSharedFocusAreas,
  overview: capabilitiesStatementSharedOverview,
  services: {
    title: "Services",
    columns: [
      [
        { label: "Network Monitoring" },
        { label: "SSL/PKI-as-a-Service" },
        { label: "SOC-as-a-Service" },
        { label: "Professional Services" },
        { label: "Penetration Test" },
        { label: "Security & Information Assurance" },
        { label: "Remote Network Administration" },
        {
          label: "Website & Application Development",
          href: "https://evespeaks.com/virtual-assistance-services/"
        },
        { label: "Data Center Support" },
        { label: "Security-as-a-Service" },
        { label: "Software Sales" },
        { label: "Email Security" }
      ],
      [
        { label: "LAN/WAN Networking" },
        { label: "Managed Services" },
        { label: "Wireless" },
        { label: "Network Operations Center" },
        { label: "Technical Staffing" },
        { label: "Hardware Sales" },
        { label: "Cloud" },
        { label: "Vulnerability Assessments" },
        { label: "Backup Process Optimization" },
        {
          label: "Project Management Services",
          href: "https://evespeaks.com/virtual-assistance-services/"
        },
        { label: "Routers/Switches/Firewalls" },
        { label: "Virtual CIO" }
      ]
    ]
  },
  partners: capabilitiesStatementSharedPartners,
  pastPerformance: {
    title: "Past Performance Services Examples",
    items: [
      {
        id: "fdny",
        body: "Fire Department of New York City projects include Network Operations Center management, technical staffing, design, and build-out of a development environment used as the basis to implement the second Public Safety Answering Center to augment existing 911 services in NYC, home to the largest public safety forces in the USA."
      },
      {
        id: "building-intelligence",
        body: "MSP for Building Intelligence: manage IT services spanning help desk, SIEM, email security, endpoint defense, internet security, hardware/software inventory, hardware/network/software monitoring, email, Azure AD, SharePoint, and OneDrive backups, plus ad-hoc onsite support—with discovery deliverables covering network/infrastructure design, inventory, and security reports."
      },
      {
        id: "ibm-oti",
        body: "As a prime contractor for IBM to OTI, Abrahams Consulting provides IT personnel for former ITCS contracts in the City, including Web Content Management Ops Lead (PM3), Senior DevOps Engineer (SP3), QA Test Automation Engineer (SP2), Site B Data Center Tech (PRG2), AppMod Senior Application Cloud Engineer (SP3), and AppMod App Operations Lead (SP3)."
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
