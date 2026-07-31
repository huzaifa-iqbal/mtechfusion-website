"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, LoaderCircle } from "lucide-react";
import { siteConfig } from "@/constants/site";

export default function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");
    const formElement = event.currentTarget;
    const form = new FormData(formElement);

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(form.entries())),
      });
      const result = (await response.json()) as { error?: string };
      if (!response.ok) throw new Error(result.error || "Unable to send your request.");

      formElement.reset();
      setStatus("success");
      setMessage("Thank you. Your project request has been sent to our team.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to send your request. Please try again.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[24px] border border-black/[0.07] bg-white p-5 shadow-[0_20px_60px_rgba(0,0,0,.05)] sm:p-8 lg:p-10"
    >
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="NAME" name="name" placeholder="Your name" required />
        <Field label="COMPANY" name="company" placeholder="Company or organization" />
        <Field label="EMAIL" name="email" type="email" placeholder="you@company.com" required />
        <Field label="PHONE" name="phone" type="tel" placeholder="Your phone number" />

        <SelectField
          label="PRIMARY NEED"
          name="service"
          required
          options={["Software engineering", "Web & digital experience", "Cloud & infrastructure", "Cybersecurity", "AI & automation", "Data & intelligence", "Managed technology", "Not sure yet"]}
        />
        <SelectField label="TIMELINE" name="timeline" options={["As soon as possible", "Within 1–2 months", "Within 3–6 months", "6+ months", "Still planning"]} />
        <SelectField label="BUDGET RANGE" name="budget" options={["Still defining budget", "Under $10,000", "$10,000–$25,000", "$25,000–$50,000", "$50,000–$100,000", "$100,000+"]} />
      </div>

      <label className="mt-4 block">
        <span className="text-[9px] font-extrabold tracking-[0.13em] text-neutral-500">PROJECT DETAILS</span>
        <textarea
          name="details"
          required
          rows={7}
          placeholder="Describe the challenge, current situation, desired outcome and any important requirements."
          className="mt-2 w-full resize-y rounded-[9px] border border-black/10 bg-[#fafafa] px-4 py-3 text-[13px] leading-6 text-[#222] outline-none transition focus:border-[#d9a441]/60"
        />
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="group mt-6 inline-flex h-[54px] w-full items-center justify-between rounded-[9px] bg-[#ffc400] px-6 text-[11px] font-extrabold text-black shadow-[0_12px_30px_rgba(255,196,0,.15)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-[220px] sm:justify-center sm:gap-7"
      >
        {status === "sending" ? "SENDING..." : "SEND PROJECT REQUEST"}
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
        Project requests are delivered to {siteConfig.salesEmail}.
      </p>
    </form>
  );
}

function Field({ label, name, placeholder, type = "text", required = false }: { label: string; name: string; placeholder: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="text-[9px] font-extrabold tracking-[0.13em] text-neutral-500">{label}</span>
      <input name={name} type={type} required={required} placeholder={placeholder} className="mt-2 h-[48px] w-full rounded-[9px] border border-black/10 bg-[#fafafa] px-4 text-[13px] text-[#222] outline-none transition focus:border-[#d9a441]/60" />
    </label>
  );
}

function SelectField({ label, name, options, required = false }: { label: string; name: string; options: string[]; required?: boolean }) {
  return (
    <label className="block">
      <span className="text-[9px] font-extrabold tracking-[0.13em] text-neutral-500">{label}</span>
      <select name={name} required={required} className="mt-2 h-[48px] w-full rounded-[9px] border border-black/10 bg-[#fafafa] px-4 text-[13px] text-[#222] outline-none transition focus:border-[#d9a441]/60">
        {options.map((option) => <option key={option}>{option}</option>)}
      </select>
    </label>
  );
}
