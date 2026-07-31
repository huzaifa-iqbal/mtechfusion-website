import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/constants/site";

const serviceLinks = [
  ["Software Engineering", "/services#software-engineering"],
  ["Web & Digital", "/services#web-digital"],
  ["Cloud Solutions", "/services#cloud-infrastructure"],
  ["Cybersecurity", "/services#cybersecurity"],
  ["AI & Automation", "/services#ai-automation"],
  ["Managed Technology", "/services#managed-technology"],
];

const companyLinks = [
  ["About Us", "/about"],
  ["Solutions", "/solutions"],
  ["Careers", "/careers"],
  ["Contact", "/contact"],
];

export default function Footer() {
  return (
    <footer className="tf-footer-tech px-5 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-10 py-11 sm:py-14 lg:grid-cols-[1.25fr_.75fr_.65fr_1fr] lg:gap-12">
          <div>
            <Image
              src="/brand/tech-fusion-logo-dark.png"
              alt="Tech Fusion"
              width={875}
              height={222}
              className="h-auto w-[205px] sm:w-[220px]"
            />

            <p className="mt-5 max-w-[390px] text-[12px] leading-6 text-white/50">
              Tech Fusion brings software engineering, cloud, cybersecurity,
              AI, data and managed technology together to help businesses
              build, modernize and scale with confidence.
            </p>

            <div className="mt-6 text-[9px] font-extrabold tracking-[0.15em] text-[#d9a441]">
              {siteConfig.tagline.toUpperCase()}
            </div>
          </div>

          <FooterGroup title="SERVICES">
            {serviceLinks.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="text-[11px] leading-5 text-white/50 transition hover:text-white"
              >
                {label}
              </Link>
            ))}
          </FooterGroup>

          <FooterGroup title="COMPANY">
            {companyLinks.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="text-[11px] leading-5 text-white/50 transition hover:text-white"
              >
                {label}
              </Link>
            ))}
          </FooterGroup>

          <div>
            <div className="text-[9px] font-extrabold tracking-[0.15em] text-[#d9a441]">
              CONTACT
            </div>

            <div className="mt-5 space-y-3">
              {siteConfig.phones.map((phone) => (
                <a
                  key={phone.label}
                  href={phone.href}
                  className="flex items-start gap-3 text-[11px] leading-5 text-white/50 transition hover:text-white"
                >
                  <Phone size={14} className="mt-0.5 shrink-0 text-[#d9a441]" />
                  <span>
                    <span className="block text-[8px] font-bold tracking-[0.1em] text-white/30">
                      {phone.label.toUpperCase()}
                    </span>
                    {phone.display}
                  </span>
                </a>
              ))}

              {siteConfig.emails.map((email) => (
                <a
                  key={email.address}
                  href={`mailto:${email.address}`}
                  className="flex items-start gap-3 text-[11px] leading-5 text-white/50 transition hover:text-white"
                >
                  <Mail size={14} className="mt-0.5 shrink-0 text-[#d9a441]" />
                  <span className="min-w-0">
                    <span className="block text-[8px] font-bold tracking-[0.1em] text-white/30">
                      {email.label.toUpperCase()}
                    </span>
                    <span className="break-all">{email.address}</span>
                  </span>
                </a>
              ))}

              <div className="flex items-start gap-3 text-[11px] leading-5 text-white/50">
                <MapPin size={14} className="mt-0.5 shrink-0 text-[#d9a441]" />
                <address className="not-italic">{siteConfig.address}</address>
              </div>
            </div>

            <Link
              href="/get-a-quote"
              className="mt-6 inline-flex items-center gap-4 text-[11px] font-extrabold text-white"
            >
              GET A QUOTE
              <span className="text-[#ffc400]">→</span>
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 border-t border-white/10 py-6 text-[10px] text-white/35 sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Tech Fusion. All rights reserved.</span>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/privacy" className="transition hover:text-white/70">
              Privacy
            </Link>
            <Link href="/terms" className="transition hover:text-white/70">
              Terms
            </Link>
            <span>{siteConfig.domain}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="text-[9px] font-extrabold tracking-[0.15em] text-[#d9a441]">
        {title}
      </div>
      <div className="mt-5 flex flex-col gap-3.5">{children}</div>
    </div>
  );
}
