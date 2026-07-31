"use client";

import Link from "next/link";

import {
  ArrowUpRight,
  Bot,
  CloudCog,
  Cpu,
  Database,
  Network,
  ShieldCheck,
  Workflow,
} from "lucide-react";

import { motion } from "framer-motion";

const nodes = [
  {
    label: "AI",
    icon: Bot,
    className: "left-[7%] top-[12%] sm:left-[8%] sm:top-[15%]",
    delay: 0,
  },
  {
    label: "Cloud",
    icon: CloudCog,
    className: "right-[6%] top-[16%] sm:right-[7%] sm:top-[19%]",
    delay: 0.5,
  },
  {
    label: "Data",
    icon: Database,
    className: "bottom-[27%] left-[7%] sm:bottom-[15%] sm:left-[10%]",
    delay: 1,
  },
  {
    label: "Security",
    icon: ShieldCheck,
    className: "bottom-[25%] right-[6%] sm:bottom-[13%] sm:right-[7%]",
    delay: 1.5,
  },
];

const capabilities = [
  {
    eyebrow: "AI AUTOMATION",
    title: "Systems that think, route and act.",
    copy:
      "Connect models, workflows and business systems to remove repetitive work and accelerate decisions.",
    icon: Workflow,
  },
  {
    eyebrow: "CLOUD SYSTEMS",
    title: "Infrastructure designed to scale.",
    copy:
      "Modern cloud architecture with observability, resilience and security built into the operating model.",
    icon: CloudCog,
  },
  {
    eyebrow: "SECURE DATA",
    title: "Intelligence without losing control.",
    copy:
      "Unify operational data, analytics and security so teams can move faster with confidence.",
    icon: ShieldCheck,
  },
];

export default function InnovationShowcase() {
  return (
    <section className="relative min-h-0 overflow-hidden bg-[#0f0f0f] px-5 py-14 text-white sm:px-6 sm:py-20 lg:px-10 lg:py-24">
      {/* ambient background glow */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-130px] h-[360px] w-[620px] -translate-x-1/2 rounded-full bg-[#ffc400]/[0.05] blur-[120px] sm:h-[460px] sm:w-[850px]"
        animate={{
          opacity: [0.45, 0.8, 0.45],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative mx-auto max-w-[1500px]">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="grid gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-[#ffc400]" />

              <div className="text-[9px] font-extrabold tracking-[0.16em] text-[#d9a441]">
                INSIDE THE TECHNOLOGY
              </div>
            </div>

            <h2 className="mt-4 max-w-[720px] text-[32px] font-extrabold leading-[1.04] tracking-[-0.05em] sm:text-[40px] lg:text-[48px]">
              Connected systems.
              <br />
              <span className="bg-gradient-to-r from-white via-white to-[#d9a441] bg-clip-text text-transparent">
                Visible intelligence.
              </span>
            </h2>
          </div>

          <p className="max-w-[690px] text-[13px] leading-6 text-white/50 sm:text-[14px] sm:leading-7">
            The strongest digital products are not isolated features. They are
            connected systems where cloud, software, data, AI and security work
            together behind the experience.
          </p>
        </div>

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}

        <div className="mt-10 grid min-h-0 gap-5 lg:mt-14 lg:grid-cols-[1.05fr_.95fr]">
          {/* ===================================================
              TECHNOLOGY VISUAL
          ==================================================== */}

          <div className="tf-tech-card relative min-h-[430px] overflow-hidden rounded-[22px] border border-white/[0.08] bg-[#151515] sm:min-h-[460px] lg:rounded-[26px]">
            {/* grid */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.13]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,196,0,.22) 1px, transparent 1px), linear-gradient(90deg, rgba(255,196,0,.22) 1px, transparent 1px)",
                backgroundSize: "34px 34px",
              }}
            />

            {/* central radial illumination */}
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-[46%] h-[270px] sm:top-1/2 w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffc400]/[0.035] blur-[55px] sm:h-[340px] sm:w-[340px]"
              animate={{
                opacity: [0.35, 0.8, 0.35],
                scale: [0.92, 1.08, 0.92],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* outer rotating ring */}
            <motion.div
              aria-hidden="true"
              className="absolute left-1/2 top-[46%] h-[270px] sm:top-1/2 w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d9a441]/15 sm:h-[330px] sm:w-[330px]"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <span className="absolute left-1/2 top-[-4px] h-[7px] w-[7px] -translate-x-1/2 rounded-full bg-[#ffc400] shadow-[0_0_16px_rgba(255,196,0,0.7)]" />

              <span className="absolute bottom-[15%] right-[7%] h-[5px] w-[5px] rounded-full bg-[#d9a441]" />
            </motion.div>

            {/* inner ring */}
            <motion.div
              aria-hidden="true"
              className="absolute left-1/2 top-[46%] h-[190px] sm:top-1/2 w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#d9a441]/20 sm:h-[235px] sm:w-[235px]"
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 26,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* horizontal connection */}
            <div className="absolute left-1/2 top-[46%] h-px sm:top-1/2 w-[76%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d9a441]/35 to-transparent" />

            {/* vertical connection */}
            <div className="absolute left-1/2 top-[46%] h-[64%] sm:top-1/2 sm:h-[72%] w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-[#d9a441]/35 to-transparent" />

            {/* =================================================
                DATA PULSES
            ================================================== */}

            <motion.span
              aria-hidden="true"
              className="absolute left-[12%] top-[46%] h-[5px] sm:top-1/2 w-[5px] -translate-y-1/2 rounded-full bg-[#ffc400] shadow-[0_0_14px_rgba(255,196,0,0.75)]"
              animate={{
                left: ["12%", "48%"],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 0.8,
              }}
            />

            <motion.span
              aria-hidden="true"
              className="absolute right-[12%] top-[46%] h-[5px] sm:top-1/2 w-[5px] -translate-y-1/2 rounded-full bg-[#ffc400] shadow-[0_0_14px_rgba(255,196,0,0.75)]"
              animate={{
                right: ["12%", "48%"],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 1.1,
              }}
            />

            <motion.span
              aria-hidden="true"
              className="absolute left-1/2 top-[15%] h-[5px] w-[5px] -translate-x-1/2 rounded-full bg-[#d9a441] shadow-[0_0_12px_rgba(217,164,65,0.6)]"
              animate={{
                top: ["15%", "48%"],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 1.4,
              }}
            />

            {/* =================================================
                CENTRAL PROCESSOR
            ================================================== */}

            <motion.div
              className="absolute left-1/2 top-[46%] z-20 sm:top-1/2 flex h-[96px] w-[96px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[28px] border border-[#ffc400]/30 bg-[#ffc400]/10 shadow-[0_0_70px_rgba(255,196,0,0.12)] sm:h-[116px] sm:w-[116px]"
              animate={{
                boxShadow: [
                  "0 0 45px rgba(255,196,0,0.08)",
                  "0 0 85px rgba(255,196,0,0.17)",
                  "0 0 45px rgba(255,196,0,0.08)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Cpu
                  size={42}
                  strokeWidth={1.25}
                  className="text-[#ffc400]"
                />
              </motion.div>
            </motion.div>

            {/* =================================================
                TECHNOLOGY NODES
            ================================================== */}

            {nodes.map(
              ({
                label,
                icon: Icon,
                className,
                delay,
              }) => (
                <motion.div
                  key={label}
                  className={`absolute z-20 flex items-center gap-2 rounded-[11px] border border-white/10 bg-black/85 px-2.5 py-2 sm:bg-black/55 sm:backdrop-blur-md sm:rounded-[12px] sm:px-3 sm:py-2.5 ${className}`}
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 4.5,
                    delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Icon
                    size={14}
                    className="text-[#d9a441] sm:size-[15px]"
                  />

                  <span className="text-[7px] font-bold tracking-[0.06em] text-white/55 sm:text-[8px]">
                    {label.toUpperCase()}
                  </span>

                  <motion.span
                    className="h-[4px] w-[4px] rounded-full bg-[#ffc400]"
                    animate={{
                      opacity: [0.25, 1, 0.25],
                    }}
                    transition={{
                      duration: 2,
                      delay,
                      repeat: Infinity,
                    }}
                  />
                </motion.div>
              ),
            )}

            {/* =================================================
                SYSTEM STATUS
            ================================================== */}

            <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between rounded-[12px] border border-white/[0.07] bg-black/85 px-3 py-3 sm:bg-black/35 sm:backdrop-blur-md sm:bottom-5 sm:left-5 sm:right-5 sm:rounded-[13px] sm:px-4">
              <div className="flex items-center gap-2.5">
                <motion.span
                  className="h-[6px] w-[6px] rounded-full bg-[#ffc400]"
                  animate={{
                    opacity: [0.35, 1, 0.35],
                    boxShadow: [
                      "0 0 0 rgba(255,196,0,0)",
                      "0 0 12px rgba(255,196,0,0.7)",
                      "0 0 0 rgba(255,196,0,0)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />

                <div>
                  <div className="text-[7px] font-extrabold tracking-[0.11em] text-white/55 sm:text-[8px]">
                    CONNECTED ARCHITECTURE
                  </div>

                  <div className="mt-0.5 text-[7px] text-white/25">
                    Systems synchronized
                  </div>
                </div>
              </div>

              <motion.div
                animate={{
                  rotate: [0, 8, 0, -8, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Network
                  size={16}
                  className="text-[#d9a441]"
                />
              </motion.div>
            </div>
          </div>

          {/* ===================================================
              CAPABILITY CARDS
          ==================================================== */}

          <div className="grid min-h-0 gap-3">
            {capabilities.map(
              ({
                eyebrow,
                title,
                copy,
                icon: Icon,
              }) => (
                <article
                  key={title}
                  className="tf-tech-card tf-hover-sheen group rounded-[18px] border border-white/[0.08] bg-[#151515] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#d9a441]/25 hover:bg-[#181818] sm:p-6"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-[13px] border border-[#d9a441]/15 bg-[#ffc400]/[0.06]">
                      <Icon
                        size={19}
                        strokeWidth={1.6}
                        className="text-[#d9a441]"
                      />
                    </div>

                    <ArrowUpRight
                      size={17}
                      className="text-white/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#ffc400]"
                    />
                  </div>

                  <div className="mt-5 text-[8px] font-extrabold tracking-[0.14em] text-[#d9a441]">
                    {eyebrow}
                  </div>

                  <h3 className="mt-2 text-[19px] font-extrabold leading-[1.15] tracking-[-0.03em] text-white sm:text-[21px]">
                    {title}
                  </h3>

                  <p className="mt-3 text-[11px] leading-5 text-white/45 sm:text-[12px] sm:leading-6">
                    {copy}
                  </p>

                  <div className="mt-5 flex items-center gap-2">
                    <span className="h-[4px] w-[4px] rounded-full bg-[#ffc400]" />

                    <span className="text-[7px] font-bold tracking-[0.1em] text-white/25">
                      TECH FUSION SYSTEM
                    </span>
                  </div>
                </article>
              ),
            )}
          </div>
        </div>

        {/* =====================================================
            FOOTER LINK
        ====================================================== */}

        <div className="mt-6 flex justify-start sm:justify-end">
          <Link
            href="/services"
            className="tf-link-effect group inline-flex items-center gap-3 text-[10px] font-extrabold text-white"
          >
            EXPLORE OUR CAPABILITIES

            <ArrowUpRight
              size={15}
              className="text-[#ffc400] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}