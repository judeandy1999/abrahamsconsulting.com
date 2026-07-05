export type LeadEmailPayload = {
  email: string;
  firstName?: string;
  lastName?: string;
  companyName?: string;
  jobTitle?: string;
  phone?: string;
  message?: string;
};

function formatOptional(value: string | undefined) {
  return value?.trim() || "Not provided";
}

function formatLeadEmailBody(payload: LeadEmailPayload): string {
  const fullName = [payload.firstName, payload.lastName].filter(Boolean).join(" ").trim();

  return [
    "New contact form submission",
    "",
    `Email: ${payload.email}`,
    `Name: ${fullName || "Not provided"}`,
    `Company: ${formatOptional(payload.companyName)}`,
    `Job title: ${formatOptional(payload.jobTitle)}`,
    `Phone: ${formatOptional(payload.phone)}`,
    "",
    "Message:",
    formatOptional(payload.message)
  ].join("\n");
}

export async function sendLeadEmail(payload: LeadEmailPayload): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFICATION_TO;
  const from = process.env.LEAD_NOTIFICATION_FROM;

  if (!apiKey || !to || !from) {
    throw new Error("Lead email delivery is not configured");
  }

  const subjectName = payload.companyName?.trim() || payload.email;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `Contact form: ${subjectName}`,
      text: formatLeadEmailBody(payload)
    })
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Lead email delivery failed (${response.status}): ${detail}`);
  }
}
