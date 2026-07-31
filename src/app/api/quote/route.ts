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
      { error: `Online quote delivery is being activated. Please email ${siteConfig.salesEmail} directly.` },
      { status: 503 },
    );
  }

  try {
    const body = await request.json();
    const name = cleanText(body.name, 120);
    const company = cleanText(body.company, 160);
    const email = cleanText(body.email, 200);
    const phone = cleanText(body.phone, 80);
    const service = cleanText(body.service, 160);
    const timeline = cleanText(body.timeline, 120);
    const budget = cleanText(body.budget, 120);
    const details = cleanText(body.details, 10000);
    const website = cleanText(body.website, 200);

    if (website) return NextResponse.json({ ok: true });
    if (!name || !validEmail(email) || !service || !details) {
      return NextResponse.json({ error: "Please complete the required fields." }, { status: 400 });
    }

    const transporter = createMailer();
    const rows = [
      fieldRow("Name", name),
      fieldRow("Company", company),
      fieldRow("Email", email),
      fieldRow("Phone", phone),
      fieldRow("Service", service),
      fieldRow("Timeline", timeline),
      fieldRow("Budget", budget),
    ].join("");

    await transporter.sendMail({
      from: senderAddress(),
      to: siteConfig.salesEmail,
      replyTo: email,
      subject: `[QUOTE] ${service} — ${company || name}`,
      text: `Name: ${name}\nCompany: ${company || "Not provided"}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\nService: ${service}\nTimeline: ${timeline}\nBudget: ${budget}\n\nProject details:\n${details}`,
      html: emailShell("New project request", "A prospective client submitted a quote request.", rows, details),
    });

    try {
      await transporter.sendMail({
        from: senderAddress(),
        to: email,
        subject: "Your project request is with Tech Fusion",
        text: `Hi ${name},\n\nThank you for sharing your project with Tech Fusion. We received your request and will review the scope before getting back to you.\n\nTech Fusion\n${siteConfig.domain}`,
        html: emailShell("Project request received", `Hi ${name}, thank you for sharing your project with Tech Fusion. We received your request and will review the scope before getting back to you.`, ""),
      });
    } catch {
      // Keep the submission successful when only the acknowledgement email fails.
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    logMailError("quote", error);
    return NextResponse.json({ error: mailErrorMessage(error) }, { status: 500 });
  }
}
