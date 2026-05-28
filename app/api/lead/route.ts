import { NextResponse } from "next/server";
import { z } from "zod";
import { loadMarketingContent } from "../../../lib/content/load-content";
import { sendLeadEmail } from "../../../lib/lead/send-lead-email";

const leadSubmissionSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required"),
  email: z.string().trim().email("A valid email is required"),
  organization: z.string().trim().min(1, "Organization is required"),
  phone: z.string().trim().optional(),
  timeline: z.string().trim().min(1, "Timeline is required"),
  qualificationSummary: z.string().trim().min(1, "Qualification summary is required")
});

function validationErrorResponse(message: string, status = 400) {
  return NextResponse.json({ error: message }, { status });
}

export async function POST(request: Request) {
  const { site } = loadMarketingContent();
  const honeypotFieldName = site.consultationForm.honeypotFieldName;

  let formData: FormData;

  try {
    formData = await request.formData();
  } catch {
    return validationErrorResponse("Invalid form submission");
  }

  const honeypotValue = formData.get(honeypotFieldName);

  if (typeof honeypotValue === "string" && honeypotValue.trim().length > 0) {
    return validationErrorResponse("Submission rejected", 422);
  }

  const parsed = leadSubmissionSchema.safeParse({
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    organization: formData.get("organization"),
    phone: formData.get("phone") ?? undefined,
    timeline: formData.get("timeline"),
    qualificationSummary: formData.get("qualificationSummary")
  });

  if (!parsed.success) {
    const firstIssue = parsed.error.issues[0]?.message ?? "Invalid submission payload";
    return validationErrorResponse(firstIssue, 422);
  }

  try {
    await sendLeadEmail(parsed.data);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Lead delivery failed";

    if (message.includes("not configured")) {
      return NextResponse.json({ error: "Lead delivery is temporarily unavailable" }, { status: 503 });
    }

    return NextResponse.json({ error: "Unable to deliver lead notification" }, { status: 502 });
  }

  const successUrl = new URL("/consultation/success", request.url);
  return NextResponse.redirect(successUrl, 303);
}
