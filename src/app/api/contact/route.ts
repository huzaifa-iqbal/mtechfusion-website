import { NextResponse } from "next/server";
import { siteConfig } from "@/constants/site";
import {
  cleanText,
  createMailer,
  emailIsConfigured,
  emailShell,
  fieldRow,
  logMailError,
  mailErrorMessage,
  senderAddress,
  validEmail,
} from "@/lib/email";

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (!emailIsConfigured()) {
    return NextResponse.json(
      { error: `Online delivery is being activated. Please email ${siteConfig.contactEmail} directly.` },
      { status: 503 },
    );
  }

  try {
    const body = await request.json();
    const name = cleanText(body.name, 120);
    const company = cleanText(body.company, 160);
    const email = cleanText(body.email, 200);
    const phone = cleanText(body.phone, 80);
    const topic = cleanText(body.topic, 120) || "General inquiry";
    const message = cleanText(body.message, 8000);
    const website = cleanText(body.website, 200);

    if (website) return NextResponse.json({ ok: true });
    if (!name || !validEmail(email) || !message) {
      return NextResponse.json({ error: "Please complete the required fields." }, { status: 400 });
    }

    const transporter = createMailer();
    const rows = [
      fieldRow("Name", name),
      fieldRow("Company", company),
      fieldRow("Email", email),
      fieldRow("Phone", phone),
      fieldRow("Topic", topic),
    ].join("");

    await transporter.sendMail({
      from: senderAddress(),
      to: siteConfig.contactEmail,
      replyTo: email,
      subject: `[CONTACT] ${topic} — ${name}`,
      text: `Name: ${name}\nCompany: ${company || "Not provided"}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\nTopic: ${topic}\n\nMessage:\n${message}`,
      html: emailShell("New website inquiry", "A visitor submitted the Tech Fusion contact form.", rows, message),
    });

    try {
      await transporter.sendMail({
        from: senderAddress(),
        to: email,
        subject: "We received your message — Tech Fusion",
        text: `Hi ${name},\n\nThank you for contacting Tech Fusion. We received your message and our team will review it shortly.\n\nTech Fusion\n${siteConfig.domain}`,
        html: emailShell("Message received", `Hi ${name}, thank you for contacting Tech Fusion. We received your message and our team will review it shortly.`, ""),
      });
    } catch {
      // The internal notification is the critical delivery. Do not fail the form if the acknowledgement email fails.
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    logMailError("contact", error);
    return NextResponse.json({ error: mailErrorMessage(error) }, { status: 500 });
  }
}
