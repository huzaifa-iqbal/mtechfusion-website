"use client";

import { useMemo, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, FileText, LoaderCircle, Upload } from "lucide-react";

const careerAreas = [
  "Engineering & Development",
  "Product & Experience",
  "Cloud & Infrastructure",
  "AI, Automation & Data",
  "Business & Growth",
  "Client Success & Support",
  "Other / General Application",
];

const experienceLevels = [
  "Student / Intern",
  "Entry level",
  "1–3 years",
  "3–5 years",
  "5–8 years",
  "8+ years",
];

const engagementTypes = [
  "Full-time opportunity",
  "Part-time opportunity",
  "Internship",
  "Project / contract work",
  "Open to discussion",
];

export default function CareerApplicationForm() {
  const [resume, setResume] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement | null>(null);

  const resumeLabel = useMemo(() => {
    if (!resume) return "Upload resume / CV";
    return `${resume.name} · ${(resume.size / 1024 / 1024).toFixed(1)} MB`;
  }, [resume]);

  function handleResume(event: ChangeEvent<HTMLInputElement>) {
    setError("");
    const file = event.target.files?.[0] ?? null;
    if (!file) {
      setResume(null);
      return;
    }

    const allowed = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowed.includes(file.type)) {
      setResume(null);
      event.target.value = "";
      setError("Please upload a PDF, DOC or DOCX file.");
      return;
    }

    if (file.size > 3 * 1024 * 1024) {
      setResume(null);
      event.target.value = "";
      setError("Resume files must be 3 MB or smaller.");
      return;
    }

    setResume(file);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!resume) {
      setError("Please attach your resume or CV before continuing.");
      return;
    }

    setSending(true);
    try {
      const form = new FormData(event.currentTarget);
      const response = await fetch("/api/careers", { method: "POST", body: form });
      const result = (await response.json()) as { error?: string };
      if (!response.ok) throw new Error(result.error || "Unable to submit your application.");

      setSubmitted(true);
      setResume(null);
      formRef.current?.reset();
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Unable to submit your application. Please try again.");
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex min-h-[520px] items-center justify-center rounded-[24px] border border-black/[0.065] bg-white p-7 shadow-[0_20px_55px_rgba(0,0,0,0.045)] sm:p-10">
        <div className="max-w-[520px] text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#fff3c2] text-[#a87816]">
            <CheckCircle2 size={26} strokeWidth={1.8} />
          </div>
          <h3 className="mt-5 text-[26px] font-extrabold tracking-[-0.035em] text-[#111]">Application submitted.</h3>
          <p className="mt-3 text-[13px] leading-7 text-neutral-500">
            Thank you for your interest in Tech Fusion. Your application and resume have been sent to our careers team.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-6 inline-flex h-[50px] items-center justify-center rounded-[9px] border border-black/[0.09] bg-white px-6 text-[11px] font-extrabold text-[#111] transition hover:border-[#d9a441]/35"
          >
            EDIT APPLICATION
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="rounded-[24px] border border-black/[0.065] bg-white p-5 shadow-[0_20px_55px_rgba(0,0,0,0.045)] sm:p-7 lg:p-8"
    >
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" name="fullName" autoComplete="name" required />
        <Field label="Email address" name="email" type="email" autoComplete="email" required />
        <Field label="Phone number" name="phone" type="tel" autoComplete="tel" required />
        <Field label="Location" name="location" autoComplete="address-level2" required />

        <SelectField label="Career area" name="careerArea" options={careerAreas} required />
        <SelectField label="Experience level" name="experience" options={experienceLevels} required />
        <SelectField label="Opportunity type" name="engagement" options={engagementTypes} required />
        <Field label="Current role / title" name="currentRole" />

        <Field label="LinkedIn profile" name="linkedin" type="url" placeholder="https://linkedin.com/in/..." />
        <Field label="Availability to start" name="availability" placeholder="e.g. Immediately / 30 days" />
        <Field label="Highest qualification" name="qualification" />
      </div>

      <label className="mt-4 block">
        <span className="text-[10px] font-extrabold tracking-[0.04em] text-[#252525]">Tell us about yourself</span>
        <textarea
          name="message"
          required
          rows={6}
          placeholder="What kind of work interests you, what have you built or achieved, and why would you like to work with Tech Fusion?"
          className="mt-2 w-full resize-y rounded-[12px] border border-black/[0.09] bg-[#fbfbf8] px-4 py-3 text-[13px] leading-6 text-[#111] outline-none transition placeholder:text-neutral-400 focus:border-[#d9a441]/60 focus:bg-white"
        />
      </label>

      <div className="mt-4">
        <span className="text-[10px] font-extrabold tracking-[0.04em] text-[#252525]">Resume / CV</span>
        <label className="mt-2 flex cursor-pointer items-center gap-4 rounded-[14px] border border-dashed border-[#d9a441]/35 bg-[#fffbef] px-4 py-4 transition hover:border-[#d9a441]/60 hover:bg-[#fff8df] sm:px-5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-white text-[#a87816] shadow-sm">
            {resume ? <FileText size={20} /> : <Upload size={20} />}
          </div>
          <div className="min-w-0 flex-1">
            <div className="truncate text-[12px] font-bold text-[#111]">{resumeLabel}</div>
            <div className="mt-1 text-[10px] leading-5 text-neutral-500">PDF, DOC or DOCX · maximum 3 MB</div>
          </div>
          <input
            type="file"
            name="resume"
            required
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            onChange={handleResume}
            className="sr-only"
          />
        </label>
      </div>

      {error ? (
        <div className="mt-4 rounded-[10px] border border-red-200 bg-red-50 px-4 py-3 text-[11px] font-semibold text-red-700">
          {error}
        </div>
      ) : null}

      <label className="mt-5 flex items-start gap-3 text-[10px] leading-5 text-neutral-500">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 h-4 w-4 shrink-0 accent-[#ffc400]"
        />
        <span>
          I confirm that the information I have provided is accurate and I agree that Tech Fusion may use it to review my application and contact me about relevant opportunities.
        </span>
      </label>

      <button
        type="submit"
        disabled={sending}
        className="group mt-6 inline-flex h-[54px] w-full items-center justify-between rounded-[9px] bg-[#ffc400] px-6 text-[11px] font-extrabold text-black shadow-[0_12px_28px_rgba(255,196,0,0.14)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-[220px] sm:justify-center sm:gap-8"
      >
        {sending ? "SUBMITTING..." : "APPLY NOW"}
        {sending ? <LoaderCircle size={16} className="animate-spin" /> : <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  autoComplete,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-[10px] font-extrabold tracking-[0.04em] text-[#252525]">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="mt-2 h-[48px] w-full rounded-[11px] border border-black/[0.09] bg-[#fbfbf8] px-4 text-[13px] text-[#111] outline-none transition placeholder:text-neutral-400 focus:border-[#d9a441]/60 focus:bg-white"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
  required = false,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-[10px] font-extrabold tracking-[0.04em] text-[#252525]">{label}</span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="mt-2 h-[48px] w-full rounded-[11px] border border-black/[0.09] bg-[#fbfbf8] px-4 text-[13px] text-[#111] outline-none transition focus:border-[#d9a441]/60 focus:bg-white"
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
