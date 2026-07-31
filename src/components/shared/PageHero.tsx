import Link from "next/link";
import { ArrowRight } from "lucide-react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  accent?: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function PageHero({
  eyebrow,
  title,
  accent,
  description,
  primaryLabel = "START A PROJECT",
  primaryHref = "/get-a-quote",
  secondaryLabel = "CONTACT US",
  secondaryHref = "/contact",
}: PageHeroProps) {
  return (
    <section className="tf-tech-light relative overflow-hidden px-5 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1500px]">
        <div className="max-w-[920px]">
          <div className="text-[9px] font-extrabold tracking-[0.16em] text-[#a87816] sm:text-[10px]">
            {eyebrow}
          </div>

          <h1 className="mt-5 max-w-[900px] font-[var(--font-manrope)] text-[42px] font-extrabold leading-[1.02] tracking-[-0.055em] text-[#111] sm:text-[56px] lg:text-[68px]">
            {title}{" "}
            {accent ? (
              <span className="bg-gradient-to-r from-[#f1b400] to-[#c78d17] bg-clip-text text-transparent">
                {accent}
              </span>
            ) : null}
          </h1>

          <p className="mt-6 max-w-[760px] text-[14px] leading-7 text-neutral-500 sm:text-[15px] sm:leading-8">
            {description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={primaryHref}
              className="group inline-flex h-[52px] items-center justify-between rounded-[8px] bg-[#ffc400] px-6 text-[11px] font-extrabold text-black shadow-[0_12px_30px_rgba(255,196,0,.16)] transition hover:-translate-y-0.5 sm:min-w-[190px] sm:justify-center sm:gap-7"
            >
              {primaryLabel}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href={secondaryHref}
              className="inline-flex h-[52px] items-center justify-center rounded-[8px] border border-black/10 bg-white px-6 text-[11px] font-extrabold text-[#111] transition hover:border-[#d9a441]/45"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
