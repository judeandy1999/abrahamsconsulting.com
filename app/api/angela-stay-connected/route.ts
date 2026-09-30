import { NextResponse } from "next/server";
import { stayConnectedSchema } from "../../../lib/angela-gibson/stay-connected-schema";

export async function POST(request: Request) {
  let json: unknown;

  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = stayConnectedSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json({ error: "Validation failed", issues: parsed.error.flatten() }, { status: 400 });
  }

  // Submission handling (CRM/email) can be wired here; payload is validated server-side.
  return NextResponse.json({ ok: true });
}
