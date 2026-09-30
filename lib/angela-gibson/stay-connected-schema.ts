import { z } from "zod";

export const interestOptions = [
  "teaming-abrahams",
  "joining-cobwiit",
  "eve-speaks",
  "stay-in-touch"
] as const;

export type InterestOption = (typeof interestOptions)[number];

export const stayConnectedSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required"),
  email: z.string().trim().min(1, "Email is required").email("Enter a valid email address"),
  companyName: z.string().trim().optional(),
  phone: z.string().trim().optional(),
  interests: z.array(z.enum(interestOptions)).default([]),
  consent: z.boolean().refine((value) => value, {
    message: "Consent is required to stay connected"
  }),
  source: z.string().trim().optional()
});

export type StayConnectedPayload = z.infer<typeof stayConnectedSchema>;

export const interestLabels: Record<InterestOption, string> = {
  "teaming-abrahams": "Teaming or subcontracting with Abrahams Consulting",
  "joining-cobwiit": "Joining CoBWiIT",
  "eve-speaks": "Speaking or coaching with Eve Speaks",
  "stay-in-touch": "Just staying in touch"
};
