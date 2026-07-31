import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Code2,
  Headset,
  Palette,
} from "lucide-react";

const tracks = [
  {
    number: "01",
    title: "Engineering & Development",
    description: "Build products, platforms, integrations and production systems.",
    icon: Code2,
  },
  {
    number: "02",
    title: "Product & Experience",
    description: "Turn complex problems into useful, polished digital experiences.",
    icon: Palette,
  },
  {
    number: "03",
    title: "AI, Automation & Data",
    description: "Connect intelligence, workflows and data to practical business outcomes.",
    icon: BrainCircuit,
  },
  {
    number: "04",
    title: "Client Success & Support",
    description: "Help clients operate, improve and evolve technology after launch.",
    icon: Headset,
  },
];

const reasons = [
  ["Real problems", "Work connected to real products, operations and client outcomes."],
  ["Broader exposure", "See how engineering, cloud, security, AI and business decisions connect."],
  ["Room to contribute", "Bring ideas, take ownership and improve the way the work gets delivered."],
];

export default function CareersCTA() {
  return (
    <section className="bg-[#f7f7f4] px-5 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1500px] overflow-hidden rounded-[28px] border border-black/[0.07] bg-white shadow-[0_24px_70px_rgba(0,0,0,0.06)]">
        <div className="grid lg:grid-cols-[45%_55%]">
          <div className="relative overflow-hidden bg-[#fbfbf8] px-6 py-8 sm:px-10 sm:py-11 lg:px-12 lg:py-14 xl:px-14">
            <div className="pointer-events-none absolute -left-28 bottom-[-120px] h-[330px] w-[330px] rounded-full bg-[#ffc400]/[0.07] blur-[100px]" />
            <div className="relative">
              <div className="text-[9px] font-extrabold tracking-[0.16em] text-[#a87816]">CAREERS AT TECH FUSION</div>

              <h2 className="mt-5 max-w-[600px] font-[var(--font-manrope)] text-[38px] font-extrabold leading-[1.02] tracking-[-0.055em] text-[#111] sm:text-[48px] lg:text-[56px]">
                Build useful technology.
                <br />
                Grow through <span className="bg-gradient-to-r from-[#f1b400] to-[#c88d15] bg-clip-text text-transparent">real work.</span>
              </h2>

              <p className="mt-5 max-w-[620px] text-[13px] leading-7 text-neutral-500 sm:text-[14px]">
                Join work where engineering, product thinking, AI, cloud and client partnership come together. We value people who care about the outcome, communicate clearly and want to keep improving their craft.
              </p>

              <div className="mt-7 space-y-3 border-t border-black/[0.07] pt-6">
                {reasons.map(([title, description]) => (
                  <div key={title} className="grid grid-cols-[110px_1fr] gap-4 sm:grid-cols-[130px_1fr]">
                    <div className="text-[10px] font-extrabold text-[#111]">{title}</div>
                    <div className="text-[11px] leading-5 text-neutral-500">{description}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/careers"
                  className="group inline-flex h-[54px] items-center justify-between rounded-[9px] bg-[#ffc400] px-6 text-[11px] font-extrabold text-black shadow-[0_12px_30px_rgba(255,196,0,0.16)] transition hover:-translate-y-0.5 sm:min-w-[190px] sm:justify-center sm:gap-7"
                >
                  EXPLORE CAREERS
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/careers/apply"
                  className="inline-flex h-[54px] items-center justify-center rounded-[9px] border border-black/[0.09] bg-white px-6 text-[11px] font-extrabold text-[#111] transition hover:border-[#d9a441]/35 sm:min-w-[190px]"
                >
                  APPLY NOW
                </Link>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden bg-[#101010] px-6 py-8 text-white sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.3]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(217,164,65,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(217,164,65,0.08) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="pointer-events-none absolute -right-24 -top-24 h-[320px] w-[320px] rounded-full bg-[#ffc400]/[0.09] blur-[110px]" />

            <div className="relative z-10">
              <div className="flex items-end justify-between gap-5">
                <div>
                  <div className="text-[9px] font-extrabold tracking-[0.16em] text-[#d9a441]">CAREER AREAS</div>
                  <h3 className="mt-3 text-[27px] font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-[33px]">
                    Where could you make an impact?
                  </h3>
                </div>
                <span className="hidden rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[8px] font-extrabold tracking-[0.12em] text-white/45 sm:block">
                  TECH FUSION
                </span>
              </div>

              <div className="mt-8 space-y-3">
                {tracks.map(({ number, title, description, icon: Icon }) => (
                  <Link
                    key={title}
                    href="/careers#career-areas"
                    className="group flex items-center gap-4 rounded-[17px] border border-white/10 bg-white/[0.035] px-4 py-4 transition hover:border-[#d9a441]/35 hover:bg-white/[0.055] sm:px-5"
                  >
                    <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-[14px] border border-[#d9a441]/20 bg-[#ffc400]/[0.07]">
                      <Icon size={20} strokeWidth={1.7} className="text-[#ffc400]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <h4 className="text-[14px] font-bold text-white sm:text-[15px]">{title}</h4>
                        <span className="text-[9px] font-extrabold text-white/20">{number}</span>
                      </div>
                      <p className="mt-1.5 text-[11px] leading-5 text-white/42">{description}</p>
                    </div>
                    <ArrowRight size={16} className="hidden shrink-0 text-white/20 transition group-hover:translate-x-1 group-hover:text-[#ffc400] sm:block" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
