import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const CONSULTATION_PAGE = "app/(marketing)/consultation/page.tsx";
const SUCCESS_PAGE = "app/(marketing)/consultation/success/page.tsx";
const LEAD_ROUTE = "app/api/lead/route.ts";
const SEND_EMAIL = "lib/lead/send-lead-email.ts";
const ENV_EXAMPLE = ".env.example";

test("consultation page posts qualified form to lead API", async () => {
  const source = await readFile(CONSULTATION_PAGE, "utf8");

  assert.match(source, /action="\/api\/lead"|action=\{\s*"\/api\/lead"\s*\}/);
  assert.match(source, /method="POST"|method=\{\s*"POST"\s*\}/);
  assert.match(source, /consultationForm|loadMarketingContent/);
  assert.match(source, /organization|qualificationSummary/);
});

test("lead API validates submissions and applies honeypot anti-spam", async () => {
  const source = await readFile(LEAD_ROUTE, "utf8");

  assert.match(source, /honeypotFieldName|honeypot/);
  assert.match(source, /safeParse|parse\(/);
  assert.match(source, /sendLeadEmail/);
  assert.match(source, /400|422/);
});

test("lead API routes successful submissions to consultation success", async () => {
  const source = await readFile(LEAD_ROUTE, "utf8");

  assert.match(source, /consultation\/success|\/consultation\/success/);
});

test("email delivery adapter keeps secrets server-side", async () => {
  const source = await readFile(SEND_EMAIL, "utf8");

  assert.match(source, /RESEND_API_KEY/);
  assert.match(source, /LEAD_NOTIFICATION_TO/);
  assert.match(source, /LEAD_NOTIFICATION_FROM/);
  assert.match(source, /fetch\(/);
});

test("success page confirms submission explicitly", async () => {
  const source = await readFile(SUCCESS_PAGE, "utf8");

  assert.match(source, /export const dynamic = "force-static";/);
  assert.match(source, /success|received|submitted/i);
});

test("env example documents lead delivery configuration", async () => {
  const source = await readFile(ENV_EXAMPLE, "utf8");

  assert.match(source, /RESEND_API_KEY/);
  assert.match(source, /LEAD_NOTIFICATION_TO/);
  assert.match(source, /LEAD_NOTIFICATION_FROM/);
});
