import nodemailer from "nodemailer";
import { siteConfig } from "@/constants/site";

type MailErrorShape = {
  code?: string;
  responseCode?: number;
  response?: string;
  command?: string;
  message?: string;
};

function smtpConfig() {
  const host = process.env.SMTP_HOST?.trim();
  const port = Number(process.env.SMTP_PORT || "465");
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASSWORD;

  if (!host || !user || !pass || !Number.isFinite(port)) {
    return null;
  }

  return { host, port, user, pass };
}

export function emailIsConfigured() {
  return Boolean(smtpConfig());
}

export function createMailer() {
  const config = smtpConfig();
  if (!config) {
    throw new Error("SMTP_NOT_CONFIGURED");
  }

  return nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.port === 465,
    requireTLS: config.port === 587,
    auth: {
      user: config.user,
      pass: config.pass,
    },
    connectionTimeout: 12000,
    greetingTimeout: 12000,
    socketTimeout: 25000,
    tls: {
      minVersion: "TLSv1.2",
    },
  });
}

export function senderAddress() {
  const user = process.env.SMTP_USER?.trim() || siteConfig.contactEmail;
  return `Tech Fusion Website <${user}>`;
}

export function mailErrorMessage(error: unknown) {
  const details = (typeof error === "object" && error !== null ? error : {}) as MailErrorShape;
  const code = String(details.code || "").toUpperCase();
  const responseCode = Number(details.responseCode || 0);
  const message = String(details.message || "").toLowerCase();
  const response = String(details.response || "").toLowerCase();

  if (
    code === "EAUTH" ||
    responseCode === 535 ||
    message.includes("authentication") ||
    response.includes("authentication") ||
    response.includes("incorrect password")
  ) {
    return "The website could not sign in to the Tech Fusion email account. Check SMTP_USER and the mailbox password in .env.local.";
  }

  if (code === "ETIMEDOUT" || code === "ECONNECTION" || code === "ESOCKET") {
    return "The website could not connect to the email server. Check SMTP_HOST, SMTP_PORT and your internet connection.";
  }

  if (error instanceof Error && error.message === "SMTP_NOT_CONFIGURED") {
    return "Website email credentials are not configured yet. Add the SMTP settings to .env.local and restart the server.";
  }

  return "The email server rejected the request. Please check the SMTP settings and try again.";
}

export function logMailError(context: string, error: unknown) {
  const details = (typeof error === "object" && error !== null ? error : {}) as MailErrorShape;
  console.error(`[Tech Fusion mail] ${context}`, {
    code: details.code,
    responseCode: details.responseCode,
    command: details.command,
    response: details.response,
    message: details.message,
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
