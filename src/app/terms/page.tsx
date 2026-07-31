import type { Metadata } from "next";
import { siteConfig } from "@/constants/site";

export const metadata: Metadata = {
  title: "Terms",
  description: "Website terms for Tech Fusion.",
};

export default function TermsPage() {
  return (
    <main className="bg-white px-5 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
      <article className="mx-auto max-w-[900px]">
        <div className="text-[9px] font-extrabold tracking-[0.16em] text-[#a87816]">TERMS</div>
        <h1 className="mt-4 text-[40px] font-extrabold tracking-[-0.05em] text-[#111] sm:text-[54px]">Website Terms</h1>
        <p className="mt-5 text-[13px] leading-7 text-neutral-500 sm:text-[14px]">
          These terms govern use of the public Tech Fusion website. Separate written agreements apply to any paid services or project engagement.
        </p>

        <div className="mt-10 space-y-8 text-[13px] leading-7 text-neutral-600">
          <Section title="Website use">
            You may use this website for lawful informational and business inquiry purposes. You must not attempt to disrupt the website, gain unauthorized access, misuse its content or use automated methods in a manner that interferes with normal operation.
          </Section>

          <Section title="Information on this website">
            Website content describes Tech Fusion capabilities and general approaches. It is not a guarantee that a particular service, architecture, outcome, timeline or price will apply to a specific project. Project scope and commercial terms are established separately in writing.
          </Section>

          <Section title="Intellectual property">
            Unless otherwise stated, Tech Fusion owns or is authorized to use the website design, branding, text and original materials on this site. You may not reproduce or redistribute those materials for commercial use without permission.
          </Section>

          <Section title="Third-party services and links">
            The website may reference third-party technologies, providers or external services. Their names and marks belong to their respective owners. Tech Fusion is not responsible for the content or operation of third-party websites or services.
          </Section>

          <Section title="Availability">
            We may update, modify or temporarily suspend parts of the website as needed for maintenance, security or business reasons. We do not guarantee uninterrupted availability of the public website.
          </Section>

          <Section title="Contact">
            Questions about these website terms can be sent to <a className="font-bold text-[#111] underline decoration-[#d9a441] underline-offset-4" href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>.
          </Section>
        </div>
      </article>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-[20px] font-extrabold tracking-[-0.025em] text-[#111]">{title}</h2>
      <p className="mt-2">{children}</p>
    </section>
  );
}
