"use client";

import { useState } from "react";

import {
  ArrowRight,
  BrainCircuit,
  ChartNoAxesCombined,
  CloudCog,
  Code2,
  Headphones,
  ShieldCheck,
} from "lucide-react";

const capabilities = [
  {
    number: "01",
    title: "Software Engineering",
    subtitle:
      "Custom applications, platforms, portals and digital products.",
    icon: Code2,
    stats: [
      ["Architecture", "Scalable"],
      ["Experience", "Custom"],
      ["Delivery", "End-to-End"],
    ],
  },
  {
    number: "02",
    title: "Cloud & Infrastructure",
    subtitle:
      "Secure, resilient infrastructure engineered for performance.",
    icon: CloudCog,
    stats: [
      ["Availability", "Resilient"],
      ["Scaling", "Elastic"],
      ["Monitoring", "Proactive"],
    ],
  },
  {
    number: "03",
    title: "Cybersecurity",
    subtitle:
      "Protection across applications, infrastructure, data and users.",
    icon: ShieldCheck,
    stats: [
      ["Approach", "Security-first"],
      ["Coverage", "Full stack"],
      ["Controls", "Continuous"],
    ],
  },
  {
    number: "04",
    title: "AI & Automation",
    subtitle:
      "Intelligent systems that reduce manual work and accelerate operations.",
    icon: BrainCircuit,
    stats: [
      ["Workflows", "Automated"],
      ["Intelligence", "AI-enabled"],
      ["Integration", "Connected"],
    ],
  },
  {
    number: "05",
    title: "Data & Intelligence",
    subtitle:
      "Data platforms, analytics and reporting designed for better decisions.",
    icon: ChartNoAxesCombined,
    stats: [
      ["Insights", "Real-time"],
      ["Reporting", "Unified"],
      ["Data", "Actionable"],
    ],
  },
  {
    number: "06",
    title: "Managed Technology",
    subtitle:
      "Continuous support, monitoring, maintenance and improvement.",
    icon: Headphones,
    stats: [
      ["Support", "Ongoing"],
      ["Monitoring", "Proactive"],
      ["Improvement", "Continuous"],
    ],
  },
];

export default function Capabilities() {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = capabilities[activeIndex];
  const ActiveIcon = active.icon;

  return (
    <section className="relative bg-white/88 px-5 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1500px]">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="grid gap-5 lg:grid-cols-[44%_56%] lg:gap-7">
          <div>
            <div className="text-[9px] font-extrabold tracking-[0.16em] text-[#9b7018] sm:text-[10px]">
              CAPABILITIES
            </div>

            <h2 className="mt-4 max-w-[650px] text-[32px] font-extrabold leading-[1.06] tracking-[-0.05em] text-[#111] sm:text-[40px] lg:text-[48px]">
              One partner.
              <br />
              Every critical layer.
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-[650px] text-[13px] leading-6 text-neutral-500 sm:text-[14px] sm:leading-7">
              Strategy, engineering, infrastructure, security and operational
              support brought together into one technology capability.
            </p>
          </div>
        </div>

        {/* =====================================================
            INTERACTIVE CAPABILITY PANEL
        ====================================================== */}

        <div className="mt-9 overflow-hidden rounded-[22px] border border-black/[0.07] bg-[#f7f7f4] lg:mt-14 lg:grid lg:grid-cols-[44%_56%] lg:rounded-[26px]">
          {/* ===================================================
              LEFT LIST
          ==================================================== */}

          <div className="bg-white lg:border-r lg:border-black/[0.07]">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              const activeItem = activeIndex === index;

              return (
                <button
                  key={capability.title}
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className={`group flex w-full items-center gap-3 border-b border-black/[0.06] px-4 py-4 text-left transition last:border-b-0 sm:gap-4 sm:px-6 sm:py-5 lg:gap-5 lg:px-8 lg:py-[22px] ${
                    activeItem
                      ? "bg-[#111] text-white"
                      : "bg-white text-[#111] hover:bg-[#fafaf8]"
                  }`}
                >
                  <span
                    className={`w-6 shrink-0 text-[9px] font-extrabold tracking-[0.1em] ${
                      activeItem
                        ? "text-[#d9a441]"
                        : "text-neutral-300"
                    }`}
                  >
                    {capability.number}
                  </span>

                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] ${
                      activeItem
                        ? "bg-[#ffc400]"
                        : "bg-[#fff6d6]"
                    }`}
                  >
                    <Icon
                      size={19}
                      className={
                        activeItem
                          ? "text-black"
                          : "text-[#bd8718]"
                      }
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="text-[13px] font-extrabold sm:text-[14px]">
                      {capability.title}
                    </div>

                    <div
                      className={`mt-1 hidden text-[10px] leading-5 sm:block ${
                        activeItem
                          ? "text-white/45"
                          : "text-neutral-400"
                      }`}
                    >
                      {capability.subtitle}
                    </div>
                  </div>

                  <ArrowRight
                    size={16}
                    className={`shrink-0 transition-transform duration-300 group-hover:translate-x-1 ${
                      activeItem
                        ? "text-[#ffc400]"
                        : "text-neutral-300"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* ===================================================
              DESKTOP DETAIL
          ==================================================== */}

          <div className="relative hidden min-h-[570px] overflow-hidden bg-[#f7f7f4] p-10 lg:block lg:p-12">
            <div
              className="absolute inset-0 opacity-50"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(213,161,43,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(213,161,43,.07) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-[9px] font-extrabold tracking-[0.15em] text-[#9f7217]">
                    {active.number} / CAPABILITY
                  </div>

                  <h3 className="mt-4 max-w-[530px] text-[37px] font-extrabold tracking-[-0.045em] text-[#111]">
                    {active.title}
                  </h3>

                  <p className="mt-4 max-w-[560px] text-[13px] leading-6 text-neutral-500">
                    {active.subtitle}
                  </p>
                </div>

                <div className="flex h-[64px] w-[64px] items-center justify-center rounded-[18px] bg-[#111]">
                  <ActiveIcon
                    size={26}
                    className="text-[#ffc400]"
                  />
                </div>
              </div>

              <div className="relative mt-10 flex flex-1 items-center justify-center rounded-[22px] border border-black/[0.06] bg-white/70">
                <div className="absolute h-[265px] w-[265px] rounded-full border border-[#d9a441]/15" />

                <div className="absolute h-[190px] w-[190px] rounded-full border border-dashed border-[#d9a441]/20" />

                <div className="relative z-10 flex h-[105px] w-[105px] items-center justify-center rounded-[28px] border border-[#d9a441]/25 bg-[#111] shadow-[0_22px_60px_rgba(0,0,0,0.15)]">
                  <ActiveIcon
                    size={38}
                    strokeWidth={1.4}
                    className="text-[#ffc400]"
                  />
                </div>

                <span className="absolute left-[21%] top-[29%] h-[7px] w-[7px] rounded-full bg-[#ffc400]" />

                <span className="absolute right-[19%] top-[39%] h-[5px] w-[5px] rounded-full bg-[#d9a441]" />

                <span className="absolute bottom-[24%] left-[29%] h-[5px] w-[5px] rounded-full bg-[#d9a441]" />
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                {active.stats.map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-[15px] border border-black/[0.06] bg-white px-4 py-4"
                  >
                    <div className="text-[7px] font-extrabold tracking-[0.12em] text-neutral-400">
                      {label.toUpperCase()}
                    </div>

                    <div className="mt-2 text-[11px] font-bold text-[#111]">
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}