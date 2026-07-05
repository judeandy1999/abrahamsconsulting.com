import { NextResponse } from "next/server";
import { z } from "zod";
import { sendLeadEmail } from "../../../lib/lead/send-lead-email";

const leadSubmissionSchema = z.object({
  email: z.string().trim().email("A valid email is required"),
  firstName: z.string().trim().optional(),
  lastName: z.string().trim().optional(),
  companyName: z.string().trim().optional(),
  jobTitle: z.string().trim().optional(),
  phone: z.string().trim().optional(),
  message: z.string().trim().optional()
});

function validationErrorResponse(message: string, status = 400) {
  return NextResponse.json({ error: message }, { status });
}

const HONEYPOT_FIELD_NAME = "companyWebsite";

export async function POST(request: Request) {
  const honeypotFieldName = HONEYPOT_FIELD_NAME;

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
    email: formData.get("email"),
    firstName: formData.get("firstName") ?? undefined,
    lastName: formData.get("lastName") ?? undefined,
    companyName: formData.get("companyName") ?? undefined,
    jobTitle: formData.get("jobTitle") ?? undefined,
    phone: formData.get("phone") ?? undefined,
    message: formData.get("message") ?? undefined
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

  const successUrl = new URL("/contact-us/success", request.url);
  return NextResponse.redirect(successUrl, 303);
}
