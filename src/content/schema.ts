import { z } from "zod";

export const siteContentSchema = z.object({
  name: z.string().min(1, "Site name is required"),
  tagline: z.string().min(1, "Site tagline is required")
});

export const serviceItemSchema = z.object({
  slug: z.string().min(1, "Service slug is required"),
  title: z.string().min(1, "Service title is required"),
  summary: z.string().min(1, "Service summary is required")
});

export const contractItemSchema = z.object({
  code: z.string().min(1, "Contract code is required"),
  name: z.string().min(1, "Contract name is required"),
  description: z.string().min(1, "Contract description is required")
});

export const marketingContentSchema = z.object({
  site: siteContentSchema,
  services: z.array(serviceItemSchema).min(1, "At least one service is required"),
  contracts: z.array(contractItemSchema).min(1, "At least one contract entry is required")
});

export type SiteContent = z.infer<typeof siteContentSchema>;
export type ServiceItem = z.infer<typeof serviceItemSchema>;
export type ContractItem = z.infer<typeof contractItemSchema>;
export type MarketingContent = z.infer<typeof marketingContentSchema>;
