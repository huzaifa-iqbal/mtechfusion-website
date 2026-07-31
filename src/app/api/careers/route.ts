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

const MAX_RESUME_SIZE = 3 * 1024 * 1024;
const allowedTypes = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

export async function POST(request: Request) {
  if (!emailIsConfigured()) {
    return NextResponse.json(
      { error: `Online applications are being activated. Please email ${siteConfig.careersEmail} directly.` },
      { status: 503 },
    );
  }

  try {
    const form = await request.formData();
    const value = (key: string, max = 5000) => cleanText(form.get(key), max);

    const fullName = value("fullName", 120);
    const email = value("email", 200);
    const phone = value("phone", 80);
    const location = value("location", 160);
    const careerArea = value("careerArea", 160);
    const experience = value("experience", 120);
    const engagement = value("engagement", 160);
    const currentRole = value("currentRole", 160);
    const linkedin = value("linkedin", 400);
    const availability = value("availability", 160);
    const qualification = value("qualification", 200);
    const message = value("message", 10000);
    const website = value("website", 200);
    const consent = value("consent", 20);
    const resume = form.get("resume");

    if (website) return NextResponse.json({ ok: true });
    if (!fullName || !validEmail(email) || !phone || !location || !careerArea || !experience || !engagement || !message || !consent) {
      return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
    }

    if (!(resume instanceof File) || resume.size === 0) {
      return NextResponse.json({ error: "Please attach your resume or CV." }, { status: 400 });
    }
    if (resume.size > MAX_RESUME_SIZE) {
      return NextResponse.json({ error: "Resume files must be 3 MB or smaller." }, { status: 400 });
    }
    if (!allowedTypes.has(resume.type)) {
      return NextResponse.json({ error: "Please upload a PDF, DOC or DOCX resume." }, { status: 400 });
    }

    const transporter = createMailer();
    const rows = [
      fieldRow("Name", fullName),
      fieldRow("Email", email),
      fieldRow("Phone", phone),
      fieldRow("Location", location),
      fieldRow("Career area", careerArea),
      fieldRow("Experience", experience),
      fieldRow("Opportunity type", engagement),
      fieldRow("Current role", currentRole),
      fieldRow("LinkedIn", linkedin),
      fieldRow("Availability", availability),
      fieldRow("Qualification", qualification),
    ].join("");

    const resumeBuffer = Buffer.from(await resume.arrayBuffer());
    const safeFilename = resume.name.replace(/[^a-zA-Z0-9._-]/g, "_").slice(0, 140) || "resume";

    await transporter.sendMail({
      from: senderAddress(),
      to: siteConfig.careersEmail,
      replyTo: email,
      subject: `[CAREERS] ${careerArea} — ${fullName}`,
      text: `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nLocation: ${location}\nCareer area: ${careerArea}\nExperience: ${experience}\nOpportunity type: ${engagement}\nCurrent role: ${currentRole || "Not provided"}\nLinkedIn: ${linkedin || "Not provided"}\nAvailability: ${availability || "Not provided"}\nQualification: ${qualification || "Not provided"}\n\nAbout candidate:\n${message}`,
      html: emailShell("New career application", "A candidate submitted an application through the Tech Fusion careers page.", rows, message),
      attachments: [{ filename: safeFilename, content: resumeBuffer, contentType: resume.type }],
    });

    try {
      await transporter.sendMail({
        from: senderAddress(),
        to: email,
        subject: "Application received — Tech Fusion",
        text: `Hi ${fullName},\n\nThank you for your interest in Tech Fusion. We received your application and resume. Our team will review your information and contact you if there is a suitable opportunity.\n\nTech Fusion\n${siteConfig.domain}`,
        html: emailShell("Application received", `Hi ${fullName}, thank you for your interest in Tech Fusion. We received your application and resume. Our team will review your information and contact you if there is a suitable opportunity.`, ""),
      });
    } catch {
      // Keep the application successful when only the acknowledgement email fails.
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    logMailError("careers", error);
    return NextResponse.json({ error: mailErrorMessage(error) }, { status: 500 });
  }
}
