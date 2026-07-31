import Link from "next/link";

import {
  ArrowRight,
  Lightbulb,
  Rocket,
  Target,
  UsersRound,
} from "lucide-react";

import GlobalNetworkVisual from "./GlobalNetworkVisual";

const features = [
  {
    title: "Strategic Partnership",
    icon: UsersRound,
  },
  {
    title: "Innovative Solutions",
    icon: Lightbulb,
  },
  {
    title: "Proven Results",
    icon: Target,
  },
  {
    title: "Future-Ready Technology",
    icon: Rocket,
  },
];

export default function TechnologyPartner() {
  return (
    <section className="relative w-full min-h-0 overflow-hidden bg-[#fdfdfc]/88 px-5 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
      {/* =====================================================
          SUBTLE BACKGROUND ACCENT
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-0 h-[280px] w-[280px] rounded-full bg-[#ffc400]/[0.035] blur-[90px] lg:h-[420px] lg:w-[420px]"
      />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative mx-auto w-full max-w-[1500px]">
        <div className="grid min-h-0 overflow-hidden rounded-[22px] border border-black/[0.06] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)] lg:grid-cols-[40%_60%] lg:rounded-[26px]">
          {/* ===================================================
              VISUAL
          ==================================================== */}

          <div className="relative h-[220px] min-h-0 overflow-hidden bg-[#111] sm:h-[280px] lg:h-auto lg:min-h-[430px]">
            <GlobalNetworkVisual />

            {/* subtle overlays */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,196,0,0.04),transparent_58%)]"
            />

            {/* small label */}

            <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/25 px-3 py-1.5 backdrop-blur-md sm:bottom-5 sm:left-5">
              <span className="text-[7px] font-extrabold tracking-[0.15em] text-white/55">
                CONNECTED TECHNOLOGY
              </span>
            </div>
          </div>

          {/* ===================================================
              CONTENT
          ==================================================== */}

          <div className="flex min-h-0 flex-col justify-center px-6 py-8 sm:px-9 sm:py-10 lg:px-12 lg:py-12 xl:px-14">
            {/* eyebrow */}

            <div className="flex items-center gap-2.5">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#fff5cc] text-[10px] text-[#d19a1f]">
                ✦
              </span>

              <span className="text-[8px] font-extrabold tracking-[0.14em] text-neutral-500 sm:text-[9px]">
                YOUR STRATEGIC TECH PARTNER
              </span>
            </div>

            {/* heading */}

            <h2 className="mt-5 max-w-[760px] font-[var(--font-manrope)] text-[30px] font-extrabold leading-[1.06] tracking-[-0.05em] text-[#111] sm:text-[36px] lg:text-[42px]">
              One Partner.{" "}
              <span className="bg-gradient-to-r from-[#f1ad00] via-[#e1a525] to-[#c58e1a] bg-clip-text text-transparent">
                Unlimited Possibilities.
              </span>
            </h2>

            {/* paragraph */}

            <p className="mt-4 max-w-[720px] text-[12px] leading-6 text-neutral-500 sm:text-[14px] sm:leading-7">
              From strategy to execution, Tech Fusion delivers end-to-end
              technology solutions that drive innovation, reduce risk, improve
              efficiency and accelerate business growth.
            </p>

            {/* =================================================
                FEATURES
            ================================================== */}

            <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-5 sm:mt-8 sm:gap-x-7 sm:gap-y-6 xl:grid-cols-4">
              {features.map(({ title, icon: Icon }) => (
                <div
                  key={title}
                  className="min-w-0"
                >
                  <div className="flex h-[44px] w-[44px] items-center justify-center rounded-[13px] border border-[#e2bd5e]/25 bg-[#fff9e8] sm:h-[48px] sm:w-[48px]">
                    <Icon
                      size={19}
                      strokeWidth={1.6}
                      className="text-[#b98016]"
                    />
                  </div>

                  <div className="mt-3 max-w-[145px] text-[10px] font-bold leading-[1.4] text-[#222] sm:text-[11px]">
                    {title}
                  </div>
                </div>
              ))}
            </div>

            {/* divider */}

            <div className="mt-7 h-px w-full bg-black/[0.06] sm:mt-8" />

            {/* =================================================
                CTA
            ================================================== */}

            <div className="mt-6">
              <Link
                href="/get-a-quote"
                className="group inline-flex h-[52px] w-full items-center justify-between rounded-[8px] bg-gradient-to-r from-[#ffc400] to-[#dfa831] px-6 text-[10px] font-extrabold text-black shadow-[0_10px_28px_rgba(255,196,0,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_35px_rgba(255,196,0,0.20)] sm:w-auto sm:gap-8 sm:px-7 sm:text-[11px]"
              >
                LET&apos;S BUILD YOUR FUTURE

                <ArrowRight
                  size={16}
                  strokeWidth={1.9}
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}