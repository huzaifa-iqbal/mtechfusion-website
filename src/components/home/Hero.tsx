import Link from "next/link";
import { ArrowRight } from "lucide-react";

import TechHeroVisual from "./TechHeroVisual";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#fdfdfc]/88">
      {/* =====================================================
          SUBTLE HERO BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute right-[10%] top-[8%] h-[470px] w-[470px] rounded-full bg-[#ffc400]/[0.045] blur-[100px]" />

        <div
          className="absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(217,164,65,0.18) 1px, transparent 1px)",
            backgroundSize: "38px 38px",
            maskImage:
              "linear-gradient(to right, transparent 36%, black 70%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 36%, black 70%, transparent 100%)",
          }}
        />
      </div>

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-6 lg:px-10">
        <div className="grid min-h-0 items-center gap-6 lg:min-h-[520px] lg:grid-cols-[40%_60%]">
          {/* LEFT */}

          <div className="relative z-10 max-w-[560px] py-12 sm:py-14 lg:py-10">
            <div className="mb-6 inline-flex items-center gap-3 rounded-[6px] border border-[#e4c36d]/35 bg-white px-4 py-2 shadow-sm">
              <span className="text-[#dba31e]">
                ✦
              </span>

              <span className="text-[9px] font-extrabold tracking-[0.11em] text-[#333] sm:text-[10px]">
                INNOVATE. INTEGRATE. ELEVATE.
              </span>
            </div>

            <h1 className="font-[var(--font-manrope)] text-[44px] font-extrabold leading-[1.03] tracking-[-0.055em] text-[#111] sm:text-[56px] xl:text-[62px]">
              Technology
              <br />

              Built for{" "}

              <span className="bg-gradient-to-r from-[#ffc400] to-[#d9a441] bg-clip-text text-transparent">
                Growth
              </span>
            </h1>

            <div className="mt-6 flex items-center gap-2">
              <span className="h-[3px] w-[68px] bg-[#ffc400]" />
              <span className="h-[3px] w-[18px] bg-[#d9a441]" />
            </div>

            <p className="mt-6 max-w-[485px] text-[13px] leading-[1.75] text-[#575757] sm:text-[14px]">
              We design, build, and manage intelligent solutions that drive
              efficiency, enhance security, and accelerate business growth.
            </p>

            {/* BUTTONS */}

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href="/solutions"
                className="group inline-flex h-[50px] w-full items-center justify-between rounded-[6px] bg-[#ffc400] px-6 text-[10px] font-extrabold text-black shadow-[0_10px_30px_rgba(255,196,0,0.17)] transition hover:-translate-y-0.5 sm:w-auto sm:justify-center sm:gap-7 sm:text-[11px]"
              >
                EXPLORE SOLUTIONS

                <ArrowRight
                  size={15}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/services"
                className="group inline-flex h-[50px] w-full items-center justify-between rounded-[6px] border border-neutral-400 bg-white px-6 text-[10px] font-extrabold text-black transition hover:border-[#d9a441] sm:w-auto sm:justify-center sm:gap-7 sm:text-[11px]"
              >
                OUR SERVICES

                <ArrowRight
                  size={15}
                  className="transition group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* SUPPORTING COPY */}

            <div className="mt-7 flex items-center gap-4">
              <div className="flex shrink-0 -space-x-2">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div
                    key={item}
                    className="h-[30px] w-[30px] rounded-full border-2 border-white bg-gradient-to-br from-neutral-200 to-neutral-400"
                  />
                ))}
              </div>

              <p className="text-[10px] leading-[1.5] text-neutral-500 sm:text-[11px]">
                Technology solutions designed
                <br />
                for forward-thinking businesses.
              </p>
            </div>
          </div>

          {/* RIGHT */}

          <div className="relative hidden min-w-0 lg:block">
            <TechHeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}