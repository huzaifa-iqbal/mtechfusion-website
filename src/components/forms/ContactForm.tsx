"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, LoaderCircle } from "lucide-react";
import { siteConfig } from "@/constants/site";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const formElement = event.currentTarget;
    const form = new FormData(formElement);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(form.entries())),
      });
      const result = (await response.json()) as { error?: string };
      if (!response.ok) throw new Error(result.error || "Unable to send your message.");

      formElement.reset();
      setStatus("success");
      setMessage("Thank you. Your message has been sent to Tech Fusion.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to send your message. Please try again.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[22px] border border-black/[0.07] bg-white p-5 shadow-[0_18px_55px_rgba(0,0,0,.045)] sm:p-8"
    >
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="NAME" name="name" placeholder="Your name" required />
        <Field label="COMPANY" name="company" placeholder="Company or organization" />
        <Field label="EMAIL" name="email" type="email" placeholder="you@company.com" required />
        <Field label="PHONE" name="phone" type="tel" placeholder="Your phone number" />
        <label className="block sm:col-span-2">
          <span className="text-[9px] font-extrabold tracking-[0.13em] text-neutral-500">TOPIC</span>
          <select
            name="topic"
            className="mt-2 h-[48px] w-full rounded-[9px] border border-black/10 bg-[#fafafa] px-4 text-[13px] text-[#222] outline-none transition focus:border-[#d9a441]/60"
          >
            <option>Project inquiry</option>
            <option>Technology consultation</option>
            <option>Partnership</option>
            <option>General inquiry</option>
          </select>
        </label>
      </div>

      <label className="mt-4 block">
        <span className="text-[9px] font-extrabold tracking-[0.13em] text-neutral-500">MESSAGE</span>
        <textarea
          name="message"
          required
          rows={6}
          placeholder="Tell us what you are building, improving or trying to solve."
          className="mt-2 w-full resize-y rounded-[9px] border border-black/10 bg-[#fafafa] px-4 py-3 text-[13px] leading-6 text-[#222] outline-none transition focus:border-[#d9a441]/60"
        />
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="group mt-5 inline-flex h-[52px] w-full items-center justify-between rounded-[9px] bg-[#ffc400] px-6 text-[11px] font-extrabold text-black disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-[210px] sm:justify-center sm:gap-7"
      >
        {status === "sending" ? "SENDING..." : "SEND MESSAGE"}
        {status === "sending" ? <LoaderCircle size={16} className="animate-spin" /> : <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />}
      </button>

      {message ? (
        <div className={`mt-4 rounded-[11px] px-4 py-3 text-[11px] leading-5 ${status === "success" ? "border border-emerald-200 bg-emerald-50 text-emerald-800" : "border border-red-200 bg-red-50 text-red-700"}`}>
          <div className="flex items-start gap-2">
            {status === "success" ? <CheckCircle2 size={15} className="mt-0.5 shrink-0" /> : null}
            <span>{message}</span>
          </div>
        </div>
      ) : null}

      <p className="mt-4 text-[10px] leading-5 text-neutral-400">
        General inquiries are delivered to {siteConfig.contactEmail}.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-[9px] font-extrabold tracking-[0.13em] text-neutral-500">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 h-[48px] w-full rounded-[9px] border border-black/10 bg-[#fafafa] px-4 text-[13px] text-[#222] outline-none transition focus:border-[#d9a441]/60"
      />
    </label>
  );
}
