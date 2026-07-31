import type { Metadata } from "next";
import { siteConfig } from "@/constants/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy information for the Tech Fusion website.",
};

export default function PrivacyPage() {
  return (
    <main className="bg-white px-5 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
      <article className="mx-auto max-w-[900px]">
        <div className="text-[9px] font-extrabold tracking-[0.16em] text-[#a87816]">PRIVACY</div>
        <h1 className="mt-4 text-[40px] font-extrabold tracking-[-0.05em] text-[#111] sm:text-[54px]">Privacy Notice</h1>
        <p className="mt-5 text-[13px] leading-7 text-neutral-500 sm:text-[14px]">
          This notice explains how the Tech Fusion website handles information when you browse the site or contact us.
        </p>

        <div className="mt-10 space-y-8 text-[13px] leading-7 text-neutral-600">
          <Section title="Information you choose to provide">
            When you contact Tech Fusion, you may provide information such as your name, company, email address, project requirements or other details included in your message. The contact and quote forms on this website prepare an email in your device&apos;s email application; the website itself does not currently store those form submissions in a website database.
          </Section>

          <Section title="Technical information">
            The hosting provider and normal internet infrastructure may process technical information such as IP address, browser type, device information, request logs and security-related data as part of operating and protecting the website.
          </Section>

          <Section title="How information is used">
            Information you send to us is used to review and respond to your inquiry, discuss potential services, manage business communications and protect the security and operation of our website and systems.
          </Section>

          <Section title="Third-party services">
            This website may rely on third-party infrastructure or services required for hosting, security, content delivery or communications. Those providers may process limited technical data according to their own terms and privacy practices.
          </Section>

          <Section title="Your choices">
            You may choose not to provide personal information through the website. You may also contact us to ask about information you previously sent to us and request an appropriate correction or deletion where applicable.
          </Section>

          <Section title="Contact">
            Privacy questions can be sent to <a className="font-bold text-[#111] underline decoration-[#d9a441] underline-offset-4" href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>.
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
