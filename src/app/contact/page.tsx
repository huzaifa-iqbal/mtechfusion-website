import type { Metadata } from "next";
import {
  BriefcaseBusiness,
  Globe2,
  Handshake,
  Mail,
  MapPin,
  MessageSquareText,
  Phone,
} from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import ContactForm from "@/components/forms/ContactForm";
import { siteConfig } from "@/constants/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Tech Fusion about a project, technology consultation, partnership or career opportunity.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="CONTACT"
        title="Start with the challenge. We will help define the"
        accent="next step."
        description="Whether you are planning a new product, modernizing existing systems, improving security or exploring AI and automation, tell us what you are trying to achieve."
        primaryLabel="REQUEST A QUOTE"
        primaryHref="/get-a-quote"
        secondaryLabel="EXPLORE SERVICES"
        secondaryHref="/services"
      />

      <section
        id="contact-form"
        className="bg-[#f7f7f4] px-5 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1500px] gap-8 lg:grid-cols-[38%_62%] lg:gap-12">
          <div>
            <div className="text-[9px] font-extrabold tracking-[0.16em] text-[#a87816]">
              GET IN TOUCH
            </div>

            <h2 className="mt-4 text-[32px] font-extrabold leading-[1.06] tracking-[-0.045em] text-[#111] sm:text-[40px]">
              The right conversation starts with context.
            </h2>

            <p className="mt-4 max-w-[500px] text-[13px] leading-7 text-neutral-500 sm:text-[14px]">
              Share the business objective, current environment and urgency.
              You do not need to know the technical solution before contacting
              us — our job is to help turn the challenge into a practical next
              step.
            </p>

            <div className="mt-7 space-y-3">
              {[
                {
                  icon: MessageSquareText,
                  title: "Project inquiries",
                  description:
                    "New applications, platforms, cloud, security, automation, integrations or modernization.",
                },
                {
                  icon: Handshake,
                  title: "Partnerships",
                  description:
                    "Technology partnerships, delivery collaboration and strategic opportunities.",
                },
                {
                  icon: BriefcaseBusiness,
                  title: "Careers",
                  description:
                    "Expressions of interest from engineers, designers, technology professionals and growth-focused talent.",
                },
              ].map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="rounded-[16px] border border-black/[0.06] bg-white p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[11px] bg-[#fff4ca] text-[#b78016]">
                      <Icon size={18} strokeWidth={1.7} />
                    </div>
                    <div>
                      <h3 className="text-[14px] font-extrabold text-[#111]">
                        {title}
                      </h3>
                      <p className="mt-1 text-[11px] leading-5 text-neutral-500">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {siteConfig.phones.map((phone) => (
                <a
                  key={phone.label}
                  href={phone.href}
                  className="rounded-[16px] border border-[#d9a441]/20 bg-[#fff9e8] p-5 transition hover:border-[#d9a441]/40 hover:bg-[#fff7df]"
                >
                  <div className="flex items-start gap-3">
                    <Phone size={17} className="mt-0.5 shrink-0 text-[#ad7610]" />
                    <div>
                      <div className="text-[8px] font-extrabold tracking-[0.12em] text-[#a87816]">
                        {phone.label.toUpperCase()}
                      </div>
                      <div className="mt-1 text-[13px] font-bold text-[#111]">
                        {phone.display}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-3 rounded-[16px] border border-black/[0.06] bg-white p-5">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-[#ad7610]" />
                <div>
                  <div className="text-[8px] font-extrabold tracking-[0.12em] text-[#a87816]">
                    OFFICE ADDRESS
                  </div>
                  <address className="mt-1 max-w-[420px] not-italic text-[12px] font-semibold leading-6 text-[#222]">
                    {siteConfig.address}
                  </address>
                </div>
              </div>
            </div>

            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {siteConfig.emails.map((email) => (
                <a
                  key={email.address}
                  href={`mailto:${email.address}`}
                  className="flex items-start gap-3 rounded-[16px] border border-black/[0.06] bg-white p-5 transition hover:border-[#d9a441]/30 hover:bg-[#fffdf8]"
                >
                  <Mail size={18} className="mt-0.5 shrink-0 text-[#ad7610]" />
                  <div className="min-w-0">
                    <div className="text-[8px] font-extrabold tracking-[0.12em] text-[#a87816]">
                      {email.label.toUpperCase()}
                    </div>
                    <div className="mt-1 break-all text-[12px] font-bold text-[#111]">
                      {email.address}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-3 flex items-center gap-3 rounded-[16px] border border-black/[0.06] bg-white p-5">
              <Globe2 size={18} className="shrink-0 text-[#ad7610]" />
              <div>
                <div className="text-[8px] font-extrabold tracking-[0.12em] text-[#a87816]">
                  WEBSITE
                </div>
                <div className="mt-1 text-[13px] font-bold text-[#111]">
                  {siteConfig.domain}
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}
