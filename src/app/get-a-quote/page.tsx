import type { Metadata } from "next";
import { CircleCheck, Clock3, Layers3, Mail, Phone, ShieldCheck } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import QuoteForm from "@/components/forms/QuoteForm";
import { siteConfig } from "@/constants/site";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Tell Tech Fusion about your technology project, timeline and requirements to start a project conversation.",
};

export default function QuotePage() {
  return (
    <main>
      <PageHero
        eyebrow="GET A QUOTE"
        title="Tell us what you need to"
        accent="build, improve or solve."
        description="Share the project context, timeline and priorities. We will use the information to understand the opportunity and prepare for a focused project conversation."
        primaryLabel="VIEW SERVICES"
        primaryHref="/services"
        secondaryLabel="CONTACT US"
        secondaryHref="/contact"
      />

      <section className="bg-[#f7f7f4] px-5 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[1500px] gap-8 lg:grid-cols-[34%_66%] lg:gap-12">
          <div>
            <div className="text-[9px] font-extrabold tracking-[0.16em] text-[#a87816]">
              PROJECT REQUEST
            </div>
            <h2 className="mt-4 text-[31px] font-extrabold leading-[1.06] tracking-[-0.045em] text-[#111] sm:text-[38px]">
              A useful estimate starts with the right context.
            </h2>
            <p className="mt-4 max-w-[470px] text-[13px] leading-7 text-neutral-500 sm:text-[14px]">
              You do not need a complete technical specification. Describe the
              business need, existing systems and desired outcome as clearly
              as possible.
            </p>

            <div className="mt-7 space-y-3">
              {[
                {
                  icon: Layers3,
                  title: "Scope",
                  description: "What needs to be created, integrated or improved.",
                },
                {
                  icon: Clock3,
                  title: "Timeline",
                  description: "When you need to begin and any important delivery dates.",
                },
                {
                  icon: ShieldCheck,
                  title: "Requirements",
                  description: "Security, compliance, reliability or operational constraints.",
                },
                {
                  icon: CircleCheck,
                  title: "Outcome",
                  description: "What success should look like for your business and users.",
                },
              ].map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="flex items-start gap-4 rounded-[15px] border border-black/[0.06] bg-white p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[11px] bg-[#fff4ca] text-[#b78016]">
                    <Icon size={18} strokeWidth={1.7} />
                  </div>
                  <div>
                    <h3 className="text-[13px] font-extrabold text-[#111]">{title}</h3>
                    <p className="mt-1 text-[11px] leading-5 text-neutral-500">{description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[17px] border border-[#d9a441]/20 bg-[#fff9e8] p-5">
              <div className="flex items-center gap-3">
                <Phone size={17} className="text-[#ad7610]" />
                <div className="text-[9px] font-extrabold tracking-[0.12em] text-[#a87816]">
                  PREFER TO TALK FIRST?
                </div>
              </div>

              <div className="mt-4 space-y-2">
                {siteConfig.phones.map((phone) => (
                  <a
                    key={phone.label}
                    href={phone.href}
                    className="flex items-center justify-between gap-4 rounded-[11px] border border-[#d9a441]/15 bg-white/70 px-4 py-3 text-[12px] font-bold text-[#111] transition hover:border-[#d9a441]/35"
                  >
                    <span>{phone.label}</span>
                    <span>{phone.display}</span>
                  </a>
                ))}

                <a
                  href={`mailto:${siteConfig.salesEmail}`}
                  className="flex items-center justify-between gap-4 rounded-[11px] border border-[#d9a441]/15 bg-white/70 px-4 py-3 text-[12px] font-bold text-[#111] transition hover:border-[#d9a441]/35"
                >
                  <span className="flex items-center gap-2">
                    <Mail size={14} className="text-[#ad7610]" />
                    Email
                  </span>
                  <span>{siteConfig.salesEmail}</span>
                </a>
              </div>
            </div>
          </div>

          <QuoteForm />
        </div>
      </section>
    </main>
  );
}
