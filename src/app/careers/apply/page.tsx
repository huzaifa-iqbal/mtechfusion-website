import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BriefcaseBusiness, ShieldCheck } from "lucide-react";
import CareerApplicationForm from "@/components/forms/CareerApplicationForm";

export const metadata: Metadata = {
  title: "Apply to Tech Fusion",
  description: "Introduce yourself to Tech Fusion and submit your career application.",
};

export default function CareerApplyPage() {
  return (
    <main className="bg-[#f7f7f4]">
      <section className="px-5 py-10 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1280px]">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-[11px] font-extrabold text-neutral-500 transition hover:text-[#111]"
          >
            <ArrowLeft size={15} />
            BACK TO CAREERS
          </Link>

          <div className="mt-6 overflow-hidden rounded-[26px] border border-black/[0.07] bg-white shadow-[0_24px_70px_rgba(0,0,0,0.06)]">
            <div className="grid lg:grid-cols-[34%_66%]">
              <aside className="relative overflow-hidden bg-[#111] p-7 text-white sm:p-9 lg:p-10">
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.22]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,196,0,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,196,0,.08) 1px, transparent 1px)",
                    backgroundSize: "38px 38px",
                  }}
                />
                <div className="pointer-events-none absolute -right-20 -top-20 h-[260px] w-[260px] rounded-full bg-[#ffc400]/10 blur-[90px]" />

                <div className="relative z-10">
                  <div className="flex h-11 w-11 items-center justify-center rounded-[13px] border border-[#ffc400]/20 bg-[#ffc400]/10">
                    <BriefcaseBusiness size={20} className="text-[#ffc400]" />
                  </div>
                  <div className="mt-6 text-[9px] font-extrabold tracking-[0.16em] text-[#d9a441]">TECH FUSION TALENT NETWORK</div>
                  <h1 className="mt-4 text-[34px] font-extrabold leading-[1.03] tracking-[-0.045em] sm:text-[42px]">
                    Tell us where you can make an impact.
                  </h1>
                  <p className="mt-5 text-[13px] leading-7 text-white/55">
                    Share the kind of work you want to do, the experience you bring and the problems you enjoy solving. You do not need to wait for a specific vacancy to introduce yourself.
                  </p>

                  <div className="mt-8 space-y-4 border-t border-white/10 pt-7">
                    {[
                      "Choose the career area closest to your experience.",
                      "Add your LinkedIn profile where relevant.",
                      "Upload a current resume or CV in PDF, DOC or DOCX format.",
                      "Use the message field to explain what you want to contribute.",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3 text-[11px] leading-5 text-white/55">
                        <ShieldCheck size={15} className="mt-0.5 shrink-0 text-[#d9a441]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </aside>

              <div className="p-5 sm:p-8 lg:p-10">
                <CareerApplicationForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
