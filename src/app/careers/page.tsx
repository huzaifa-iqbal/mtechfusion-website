import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  CloudCog,
  Code2,
  Headset,
  Lightbulb,
  Palette,
  ShieldCheck,
  TrendingUp,
  UsersRound,
} from "lucide-react";
import PageHero from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Explore career areas at Tech Fusion across engineering, product, cloud, AI, business and client success.",
};

const reasons = [
  {
    title: "Meaningful problems",
    description: "Work on real business systems, customer experiences and technology challenges where the quality of the solution matters.",
    icon: Lightbulb,
  },
  {
    title: "Ownership with support",
    description: "Take responsibility for your work while collaborating with people across engineering, product, business and client delivery.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Cross-functional exposure",
    description: "See how product decisions, architecture, cloud, security, data and client priorities connect in production work.",
    icon: UsersRound,
  },
  {
    title: "Growth through delivery",
    description: "Develop judgement by solving practical problems, shipping work, learning from feedback and improving the next iteration.",
    icon: TrendingUp,
  },
];

const teams = [
  {
    title: "Engineering & Development",
    description: "Build applications, platforms, APIs, integrations and internal systems that solve real operating problems.",
    detail: "Frontend, backend, full-stack, integration and application engineering.",
    icon: Code2,
  },
  {
    title: "Product & Experience",
    description: "Turn complex requirements into clear workflows, useful products and polished digital experiences.",
    detail: "Product thinking, UX, interface design and design systems.",
    icon: Palette,
  },
  {
    title: "Cloud & Infrastructure",
    description: "Create reliable environments for applications to deploy, operate, scale and recover with confidence.",
    detail: "Cloud architecture, DevOps, observability and platform reliability.",
    icon: CloudCog,
  },
  {
    title: "AI, Automation & Data",
    description: "Build practical intelligence into workflows, connect data and automate repetitive operational work.",
    detail: "AI integration, automation, data workflows, dashboards and analytics.",
    icon: BrainCircuit,
  },
  {
    title: "Business & Growth",
    description: "Understand client challenges, shape the right engagement and connect ambitious organizations with better technology.",
    detail: "Business development, partnerships, solution discovery and commercial strategy.",
    icon: TrendingUp,
  },
  {
    title: "Client Success & Support",
    description: "Help clients operate, improve and evolve their technology after launch with responsive, thoughtful support.",
    detail: "Client communication, support coordination and continuous improvement.",
    icon: Headset,
  },
];

const values = [
  ["Own the outcome", "Do not stop at completing a task. Understand what the work is supposed to achieve and help move it there."],
  ["Communicate clearly", "Strong delivery depends on clear thinking, honest updates, useful questions and dependable follow-through."],
  ["Build with judgement", "Choose the right level of complexity, care about maintainability and make decisions that survive beyond the first release."],
  ["Protect quality", "Security, reliability, usability and attention to detail are part of professional execution."],
  ["Keep learning", "Technology changes quickly. Curiosity, feedback and continuous improvement are part of the work."],
];

const traits = [
  "You care about the quality of what reaches production.",
  "You can explain your thinking and collaborate without unnecessary complexity.",
  "You are comfortable learning, adapting and working across disciplines.",
  "You take responsibility for details without losing sight of the bigger outcome.",
  "You value professional communication with teammates and clients.",
  "You prefer solving useful problems over chasing technology for its own sake.",
];

export default function CareersPage() {
  return (
    <main>
      <PageHero
        eyebrow="CAREERS"
        title="Do work you can be proud of. Build"
        accent="what comes next."
        description="Tech Fusion brings engineering, design, cloud, AI, business thinking and client partnership together. We are interested in people who care about solving problems well, communicating responsibly and turning ideas into technology that works in the real world."
        primaryLabel="APPLY NOW"
        primaryHref="/careers/apply"
        secondaryLabel="ABOUT TECH FUSION"
        secondaryHref="/about"
      />

      <section className="bg-white px-5 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-7 lg:grid-cols-[36%_64%] lg:items-end lg:gap-12">
            <div>
              <div className="text-[9px] font-extrabold tracking-[0.16em] text-[#a87816]">WHY TECH FUSION</div>
              <h2 className="mt-4 text-[32px] font-extrabold leading-[1.05] tracking-[-0.045em] text-[#111] sm:text-[42px]">
                A place to build, contribute and keep getting better.
              </h2>
            </div>
            <p className="max-w-[760px] text-[13px] leading-7 text-neutral-500 sm:text-[14px]">
              The most interesting technology work happens where engineering meets real business context. Our environment is built around thoughtful execution, shared ownership and the chance to understand how the complete solution comes together.
            </p>
          </div>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {reasons.map(({ title, description, icon: Icon }, index) => (
              <article key={title} className="group rounded-[20px] border border-black/[0.065] bg-[#f8f8f5] p-6 transition hover:-translate-y-1 hover:border-[#d9a441]/25 hover:shadow-[0_18px_45px_rgba(0,0,0,0.05)] sm:p-7">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[14px] border border-[#d9a441]/20 bg-[#fff4ca] text-[#b78016]">
                    <Icon size={21} strokeWidth={1.6} />
                  </div>
                  <span className="text-[9px] font-extrabold tracking-[0.1em] text-neutral-300">0{index + 1}</span>
                </div>
                <h3 className="mt-5 text-[18px] font-extrabold text-[#111]">{title}</h3>
                <p className="mt-3 text-[12px] leading-6 text-neutral-500 sm:text-[13px]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="career-areas" className="bg-[#f7f7f4] px-5 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1500px]">
          <div className="max-w-[800px]">
            <div className="text-[9px] font-extrabold tracking-[0.16em] text-[#a87816]">CAREER AREAS</div>
            <h2 className="mt-4 text-[32px] font-extrabold leading-[1.05] tracking-[-0.045em] text-[#111] sm:text-[42px]">
              Different disciplines. One standard for thoughtful work.
            </h2>
            <p className="mt-4 text-[13px] leading-7 text-neutral-500 sm:text-[14px]">
              Our work spans the full technology lifecycle. That creates opportunities for people with different strengths to contribute to the same outcome from different angles.
            </p>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {teams.map(({ title, description, detail, icon: Icon }, index) => (
              <article key={title} className="group relative overflow-hidden rounded-[22px] border border-black/[0.065] bg-white p-6 transition hover:-translate-y-1 hover:border-[#d9a441]/30 hover:shadow-[0_18px_55px_rgba(0,0,0,0.055)] sm:p-7">
                <div className="pointer-events-none absolute -right-16 -top-16 h-[170px] w-[170px] rounded-full bg-[#ffc400]/[0.05] blur-[55px]" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex h-[52px] w-[52px] items-center justify-center rounded-[15px] bg-[#111] text-[#ffc400]">
                      <Icon size={22} strokeWidth={1.6} />
                    </div>
                    <span className="text-[9px] font-extrabold tracking-[0.1em] text-neutral-300">0{index + 1}</span>
                  </div>
                  <h3 className="mt-6 text-[20px] font-extrabold text-[#111]">{title}</h3>
                  <p className="mt-3 text-[12px] leading-6 text-neutral-500 sm:text-[13px]">{description}</p>
                  <div className="mt-5 border-t border-black/[0.06] pt-4">
                    <div className="text-[8px] font-extrabold tracking-[0.13em] text-[#a87816]">YOU MAY WORK ACROSS</div>
                    <p className="mt-2 text-[11px] leading-5 text-neutral-500">{detail}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tf-tech-dark px-5 py-14 text-white sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-9 lg:grid-cols-[40%_60%] lg:gap-14">
            <div>
              <div className="text-[9px] font-extrabold tracking-[0.16em] text-[#d9a441]">HOW WE WORK</div>
              <h2 className="mt-4 max-w-[600px] text-[32px] font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-[42px]">
                High standards without unnecessary complexity.
              </h2>
              <p className="mt-4 max-w-[560px] text-[13px] leading-7 text-white/50 sm:text-[14px]">
                We value people who can think independently, collaborate openly and stay focused on the quality of the outcome. The goal is not process for its own sake — it is dependable execution.
              </p>
            </div>

            <div className="space-y-3">
              {values.map(([title, description], index) => (
                <div key={title} className="grid gap-3 rounded-[18px] border border-white/10 bg-white/[0.035] p-5 sm:grid-cols-[48px_1fr] sm:items-start sm:p-6">
                  <span className="text-[9px] font-extrabold tracking-[0.1em] text-[#d9a441]">0{index + 1}</span>
                  <div>
                    <h3 className="text-[16px] font-bold">{title}</h3>
                    <p className="mt-2 text-[12px] leading-6 text-white/45 sm:text-[13px]">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid overflow-hidden rounded-[24px] border border-black/[0.065] bg-[#f8f8f5] lg:grid-cols-[46%_54%]">
            <div className="p-7 sm:p-10 lg:p-12">
              <div className="text-[9px] font-extrabold tracking-[0.16em] text-[#a87816]">WHO THRIVES HERE</div>
              <h2 className="mt-4 text-[31px] font-extrabold leading-[1.06] tracking-[-0.045em] text-[#111] sm:text-[39px]">
                Talent matters. Mindset matters too.
              </h2>
              <p className="mt-4 max-w-[600px] text-[13px] leading-7 text-neutral-500 sm:text-[14px]">
                We are interested in people who are technically capable, professionally dependable and genuinely interested in making the work better.
              </p>
            </div>

            <div className="bg-white p-7 sm:p-10 lg:p-12">
              <div className="grid gap-3 sm:grid-cols-2">
                {traits.map((trait) => (
                  <div key={trait} className="flex items-start gap-3 rounded-[14px] border border-black/[0.055] bg-[#fafaf8] px-4 py-4 text-[12px] leading-6 text-neutral-600">
                    <ShieldCheck size={16} strokeWidth={1.7} className="mt-1 shrink-0 text-[#b78016]" />
                    {trait}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="talent-network" className="bg-white px-5 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1500px] overflow-hidden rounded-[26px] bg-[#111] p-7 text-white sm:p-10 lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12 lg:p-12">
          <div>
            <div className="text-[9px] font-extrabold tracking-[0.16em] text-[#d9a441]">TALENT NETWORK</div>
            <h2 className="mt-4 max-w-[780px] text-[31px] font-extrabold leading-[1.06] tracking-[-0.045em] sm:text-[40px]">
              See yourself contributing here? Introduce yourself.
            </h2>
            <p className="mt-4 max-w-[760px] text-[13px] leading-7 text-white/50 sm:text-[14px]">
              We may not always have a public opening that matches your background. You can still introduce yourself. Use Apply Now to share your background, experience and resume through our dedicated application page.
            </p>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:flex-col">
            <Link
              href="/careers/apply"
              className="group inline-flex h-[54px] items-center justify-between rounded-[9px] bg-[#ffc400] px-6 text-[11px] font-extrabold text-black shadow-[0_12px_30px_rgba(255,196,0,0.14)] transition hover:-translate-y-0.5 sm:min-w-[210px] sm:justify-center sm:gap-7"
            >
              APPLY NOW
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/about"
              className="inline-flex h-[54px] items-center justify-center rounded-[9px] border border-white/12 bg-white/[0.04] px-6 text-[11px] font-extrabold text-white sm:min-w-[210px]"
            >
              LEARN ABOUT TECH FUSION
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
