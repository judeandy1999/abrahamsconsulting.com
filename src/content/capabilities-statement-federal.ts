import type { CapabilitiesStatementFederalPageContent } from "./schema";
import {
  capabilitiesStatementSharedContactBase,
  capabilitiesStatementSharedCta,
  capabilitiesStatementSharedFocusAreas,
  capabilitiesStatementSharedPartners
} from "./capabilities-statement-shared";

const cert = (file: string) => `/images/certifications/${file}` as const;

export const capabilitiesStatementFederalPageContent: CapabilitiesStatementFederalPageContent = {
  hero: {
    segments: ["Capabilities Statement", "Federal"],
    description:
      "Federal, state, local, and education capabilities from Abrahams Consulting—MWBE credentials, IT services, vendor partnerships, and proven past performance."
  },
  contacts: {
    ...capabilitiesStatementSharedContactBase,
    email: "federalsolutionsteam@abrahamsconsulting.com"
  },
  statementFile: {
    label: "Capabilities Statement File",
    href: "/documents/capabilities-statement-federal/fed-services-capabilities-statement.png"
  },
  certifications: {
    title: "Certifications & Qualifications",
    href: "/certifications",
    items: [
      {
        id: "dbe",
        name: "DBE",
        imageSrc: cert("dbe.jpg"),
        imageAlt: "DBE certification logo"
      },
      {
        id: "stars-iii",
        name: "8(a) STARS III",
        imageSrc: cert("stars-iii.png"),
        imageAlt: "GSA 8(a) STARS III logo"
      },
      {
        id: "itil",
        name: "ITIL",
        imageSrc: cert("itil.jpg"),
        imageAlt: "ITIL Training Organization accreditation logo"
      },
      {
        id: "sba",
        name: "SBA",
        imageSrc: cert("sba.jpg"),
        imageAlt: "Certified Small Business, SBA logo"
      },
      {
        id: "sba-wosb",
        name: "SBA WOSB",
        imageSrc: cert("sba-wosb.jpg"),
        imageAlt: "SBA Woman Owned Small Business logo"
      }
    ]
  },
  focusAreas: capabilitiesStatementSharedFocusAreas,
  overview: {
    title: "Company Overview",
    body: "Abrahams Consulting is a Minority Woman-Owned Small Business Enterprise (MWBE) serving the technology needs of Federal, State, Local Government and Educational Institutions since 2006. As a full lifecycle IT services company, we provide security, disaster recovery, cloud, 24×7 help desk, storage, 24×7 security operations center, hardware and software sales, and other technology solutions."
  },
  services: {
    title: "Services",
    columns: [
      [
        { label: "Network Monitoring", href: "/services#networking" },
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
        { label: "LAN/WAN Networking", href: "/services#networking" },
        { label: "Managed Services" },
        { label: "Wireless" },
        { label: "Network Operations Center" },
        { label: "Technical Staffing" },
        { label: "Hardware Sales" },
        { label: "Cloud" },
        { label: "Vulnerability Assessments" },
        { label: "Backup Process Optimization" },
        { label: "Project Management Services" },
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
  naics: {
    title: "NAICS Codes",
    items: [
      { code: "541611", label: "Administrative Management and General Management Consulting Services" },
      { code: "541512", label: "Computer Systems Design Services" },
      { code: "541612", label: "Human Resources Consulting Services" },
      { code: "541519", label: "Other Computer Related Services" }
    ]
  },
  cta: capabilitiesStatementSharedCta
};
