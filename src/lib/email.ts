import { siteConfig } from "@/constants/site";

type AttachmentInput = {
  filename: string;
  content: Buffer | Uint8Array | string;
  contentType?: string;
};

type SendMailInput = {
  from?: string;
  to: string | string[];
  replyTo?: string;
  subject: string;
  text?: string;
  html?: string;
  attachments?: AttachmentInput[];
};

type ResendErrorBody = {
  message?: string;
  name?: string;
  statusCode?: number;
};

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const DEFAULT_FROM = "Tech Fusion Website <website@send.mtechfusion.com>";

function resendConfig() {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.RESEND_FROM_EMAIL?.trim() || DEFAULT_FROM;

  if (!apiKey || !from) return null;
  return { apiKey, from };
}

export function emailIsConfigured() {
  return Boolean(resendConfig());
}

function encodeAttachment(content: AttachmentInput["content"]) {
  if (typeof content === "string") return content;
  return Buffer.from(content).toString("base64");
}

async function sendWithResend(input: SendMailInput) {
  const config = resendConfig();
  if (!config) throw new Error("EMAIL_NOT_CONFIGURED");

  const response = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: input.from || config.from,
      to: Array.isArray(input.to) ? input.to : [input.to],
      reply_to: input.replyTo,
      subject: input.subject,
      text: input.text,
      html: input.html,
      attachments: input.attachments?.map((attachment) => ({
        filename: attachment.filename,
        content: encodeAttachment(attachment.content),
      })),
    }),
  });

  const body = (await response.json().catch(() => ({}))) as ResendErrorBody & {
    id?: string;
  };

  if (!response.ok) {
    const error = new Error(body.message || `Email API returned ${response.status}`) as Error & {
      status?: number;
      provider?: string;
    };
    error.status = response.status;
    error.provider = body.name;
    throw error;
  }

  return body;
}

export function createMailer() {
  return {
    sendMail: sendWithResend,
  };
}

export function senderAddress() {
  return resendConfig()?.from || DEFAULT_FROM;
}

export function mailErrorMessage(error: unknown) {
  const status =
    typeof error === "object" && error !== null && "status" in error
      ? Number((error as { status?: number }).status || 0)
      : 0;
  const message = error instanceof Error ? error.message.toLowerCase() : "";

  if (error instanceof Error && error.message === "EMAIL_NOT_CONFIGURED") {
    return "Website email delivery is not configured yet. Add RESEND_API_KEY in Vercel and redeploy.";
  }

  if (status === 401 || message.includes("api key")) {
    return "The website email API key is invalid. Reconnect Resend in Vercel and redeploy.";
  }

  if (
    status === 403 ||
    message.includes("domain") ||
    message.includes("verify") ||
    message.includes("from address")
  ) {
    return "The website sending domain is not verified yet. Verify send.mtechfusion.com in Resend, then try again.";
  }

  if (status === 422) {
    return "The email service rejected one of the submitted fields. Please check the form and try again.";
  }

  return "The website could not send this message right now. Please try again or contact us directly by email.";
}

export function logMailError(context: string, error: unknown) {
  console.error(`[Tech Fusion mail] ${context}`, {
    message: error instanceof Error ? error.message : String(error),
    status:
      typeof error === "object" && error !== null && "status" in error
        ? (error as { status?: number }).status
        : undefined,
    provider:
      typeof error === "object" && error !== null && "provider" in error
        ? (error as { provider?: string }).provider
        : undefined,
  });
}

export function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function cleanText(value: unknown, max = 5000) {
  return String(value ?? "").trim().slice(0, max);
}

export function validEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function fieldRow(label: string, value: string) {
  return `
    <tr>
      <td style="padding:8px 12px;color:#777;font-size:12px;font-weight:700;vertical-align:top;white-space:nowrap">${escapeHtml(label)}</td>
      <td style="padding:8px 12px;color:#111;font-size:14px;line-height:1.6">${escapeHtml(value || "Not provided")}</td>
    </tr>`;
}

export function emailShell(title: string, intro: string, rows: string, message?: string) {
  return `<!doctype html>
  <html>
    <body style="margin:0;background:#f5f5f2;font-family:Arial,sans-serif;color:#111">
      <div style="max-width:720px;margin:0 auto;padding:32px 16px">
        <div style="background:#111;padding:22px 24px;border-radius:14px 14px 0 0">
          <div style="color:#ffc400;font-size:12px;font-weight:800;letter-spacing:1.4px">TECH FUSION</div>
          <h1 style="margin:8px 0 0;color:white;font-size:24px">${escapeHtml(title)}</h1>
        </div>
        <div style="background:white;border:1px solid #e8e8e3;border-top:0;padding:24px;border-radius:0 0 14px 14px">
          <p style="margin:0 0 18px;color:#555;font-size:14px;line-height:1.7">${escapeHtml(intro)}</p>
          ${rows ? `<table style="width:100%;border-collapse:collapse;background:#fafaf8;border-radius:10px">${rows}</table>` : ""}
          ${message ? `<div style="margin-top:20px"><div style="font-size:12px;color:#777;font-weight:700;margin-bottom:8px">MESSAGE</div><div style="font-size:14px;line-height:1.8;white-space:pre-wrap">${escapeHtml(message)}</div></div>` : ""}
          <div style="margin-top:24px;padding-top:16px;border-top:1px solid #eee;color:#999;font-size:11px">Submitted from ${escapeHtml(siteConfig.domain)}</div>
        </div>
      </div>
    </body>
  </html>`;
}
