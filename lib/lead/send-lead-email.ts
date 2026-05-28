export type LeadEmailPayload = {
  fullName: string;
  email: string;
  organization: string;
  phone?: string;
  timeline: string;
  qualificationSummary: string;
};

function formatLeadEmailBody(payload: LeadEmailPayload): string {
  return [
    "New consultation lead submission",
    "",
    `Name: ${payload.fullName}`,
    `Email: ${payload.email}`,
    `Organization: ${payload.organization}`,
    `Phone: ${payload.phone?.trim() || "Not provided"}`,
    `Timeline: ${payload.timeline}`,
    "",
    "Qualification summary:",
    payload.qualificationSummary
  ].join("\n");
}

export async function sendLeadEmail(payload: LeadEmailPayload): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFICATION_TO;
  const from = process.env.LEAD_NOTIFICATION_FROM;

  if (!apiKey || !to || !from) {
    throw new Error("Lead email delivery is not configured");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `Consultation lead: ${payload.organization}`,
      text: formatLeadEmailBody(payload)
    })
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Lead email delivery failed (${response.status}): ${detail}`);
  }
}
