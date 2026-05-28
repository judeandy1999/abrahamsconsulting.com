import { z } from "zod";

export const consultationFieldSchema = z.object({
  name: z.string().min(1, "Field name is required"),
  label: z.string().min(1, "Field label is required"),
  type: z.enum(["text", "email", "tel", "textarea", "select"]),
  required: z.boolean(),
  placeholder: z.string().optional(),
  options: z.array(z.string().min(1)).optional()
});

export const consultationFormSchema = z.object({
  honeypotFieldName: z.string().min(1, "Honeypot field name is required"),
  fields: z.array(consultationFieldSchema).min(4, "Consultation form requires essential qualification fields")
});

export const siteContentSchema = z.object({
  name: z.string().min(1, "Site name is required"),
  tagline: z.string().min(1, "Site tagline is required"),
  consultationCta: z.object({
    label: z.string().min(1, "Consultation CTA label is required"),
    path: z.literal("/consultation")
  }),
  consultationForm: consultationFormSchema
});

export const serviceItemSchema = z.object({
  slug: z.string().min(1, "Service slug is required"),
  title: z.string().min(1, "Service title is required"),
  summary: z.string().min(1, "Service summary is required"),
  capabilityLinkText: z.string().min(1, "Service capability link text is required"),
  procurementLinkText: z.string().min(1, "Service procurement link text is required"),
  consultationCtaLabel: z.string().min(1, "Service consultation CTA label is required")
});

export const contractItemSchema = z.object({
  code: z.string().min(1, "Contract code is required"),
  name: z.string().min(1, "Contract name is required"),
  description: z.string().min(1, "Contract description is required"),
  servicesLinkText: z.string().min(1, "Contract services link text is required"),
  consultationCtaLabel: z.string().min(1, "Contract consultation CTA label is required")
});

export const certificationSchema = z.object({
  id: z.string().min(1, "Certification id is required"),
  title: z.string().min(1, "Certification title is required"),
  issuer: z.string().min(1, "Certification issuer is required"),
  summary: z.string().min(1, "Certification summary is required"),
  qualificationSignals: z
    .array(z.string().min(1))
    .min(1, "At least one qualification signal is required")
});

export const caseSnapshotSchema = z.object({
  id: z.string().min(1, "Case snapshot id is required"),
  title: z.string().min(1, "Case snapshot title is required"),
  clientContext: z.string().min(1, "Case snapshot client context is required"),
  outcomesSummary: z.string().min(1, "Case snapshot outcomes summary is required")
});

export const partnerIndicatorSchema = z.object({
  id: z.string().min(1, "Partner indicator id is required"),
  name: z.string().min(1, "Partner indicator name is required"),
  imageSrc: z.string().min(1, "Partner indicator image source is required"),
  imageAlt: z.string().min(1, "Partner indicator image alt text is required"),
  imageWidth: z.number().int().positive("Partner indicator image width must be positive"),
  imageHeight: z.number().int().positive("Partner indicator image height must be positive")
});

export const trustContentSchema = z.object({
  certifications: z.array(certificationSchema).min(1, "At least one certification is required"),
  caseSnapshots: z.array(caseSnapshotSchema).min(2, "At least two case snapshots are required"),
  partnerIndicators: z.array(partnerIndicatorSchema).min(1, "At least one partner indicator is required")
});

export const marketingContentSchema = z.object({
  site: siteContentSchema,
  services: z.array(serviceItemSchema).min(1, "At least one service is required"),
  contracts: z.array(contractItemSchema).min(1, "At least one contract entry is required"),
  trust: trustContentSchema
});

export type ConsultationField = z.infer<typeof consultationFieldSchema>;
export type ConsultationForm = z.infer<typeof consultationFormSchema>;
export type SiteContent = z.infer<typeof siteContentSchema>;
export type ServiceItem = z.infer<typeof serviceItemSchema>;
export type ContractItem = z.infer<typeof contractItemSchema>;
export type Certification = z.infer<typeof certificationSchema>;
export type CaseSnapshot = z.infer<typeof caseSnapshotSchema>;
export type PartnerIndicator = z.infer<typeof partnerIndicatorSchema>;
export type TrustContent = z.infer<typeof trustContentSchema>;
export type MarketingContent = z.infer<typeof marketingContentSchema>;
