import { NextResponse } from "next/server";
import { createMailer, emailIsConfigured, logMailError, mailErrorMessage } from "@/lib/email";

export const runtime = "nodejs";

export async function GET() {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Not available in production." }, { status: 404 });
  }

  if (!emailIsConfigured()) {
    return NextResponse.json(
      { ok: false, error: "SMTP is not configured. Check .env.local and restart npm run dev." },
      { status: 503 },
    );
  }

  try {
    const transporter = createMailer();
    await transporter.verify();
    return NextResponse.json({ ok: true, message: "SMTP connection and mailbox login succeeded." });
  } catch (error) {
    logMailError("mail-test", error);
    return NextResponse.json({ ok: false, error: mailErrorMessage(error) }, { status: 500 });
  }
}
