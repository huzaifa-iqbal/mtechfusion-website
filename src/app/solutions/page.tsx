import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  ChartNoAxesCombined,
  CloudCog,
  Rocket,
  Workflow,
} from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import PageCTA from "@/components/shared/PageCTA";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Explore Tech Fusion solutions for digital products, transformation, automation, cloud modernization and data analytics.",
};

const solutions = [
  {
    id: "digital-products",
    title: "Digital Product Launch",
    challenge:
      "You have a strong idea, service or workflow that needs to become a real digital product without losing momentum between strategy, design, engineering and launch.",
    approach:
      "We connect product definition, user experience, application engineering, cloud delivery and launch planning through one coordinated team.",
    icon: Rocket,
    capabilities: ["Product strategy", "UX & interface delivery", "Software engineering", "Cloud deployment"],
    outcomes: [
      "Clear product and technical roadmap",
      "Scalable application architecture",
      "Production-ready release",
      "Defined post-launch support path",
    ],
  },
  {
    id: "transformation",
    title: "Digital Transformation",
    challenge:
      "Processes are spread across spreadsheets, disconnected software, manual handoffs or legacy systems that slow the business down and make change difficult.",
    approach:
      "We map the operating workflow, identify the systems that matter, then modernize the right layers with applications, integrations, automation, cloud and better data visibility.",
    icon: Workflow,
    capabilities: ["Process modernization", "Systems integration", "Cloud & infrastructure", "Automation"],
    outcomes: [
      "Reduced manual work",
      "Connected business systems",
      "Improved operational visibility",
      "Modernized technical foundation",
    ],
  },
  {
    id: "automation",
    title: "AI Workflow Automation",
    challenge:
      "Teams spend valuable time moving information, reviewing repetitive documents, updating systems or completing predictable steps that can be assisted by automation.",
    approach:
      "We identify practical automation points, connect the required systems and introduce AI only where it improves the workflow while keeping appropriate human control.",
    icon: BrainCircuit,
    capabilities: ["AI integration", "Workflow automation", "Data processing", "System orchestration"],
    outcomes: [
      "Faster process execution",
      "Lower repetitive workload",
      "More consistent workflows",
      "Connected AI-enabled operations",
    ],
  },
  {
    id: "cloud-modernization",
    title: "Secure Cloud Modernization",
    challenge:
      "Applications are difficult to deploy, infrastructure lacks visibility, reliability depends on manual intervention or security practices have not kept pace with growth.",
    approach:
      "We modernize hosting, deployment, observability, access and resilience around a cloud architecture that is easier to operate and evolve.",
    icon: CloudCog,
    capabilities: ["Cloud architecture", "DevOps & CI/CD", "Security hardening", "Monitoring & resilience"],
    outcomes: [
      "Stronger infrastructure resilience",
      "Improved deployment process",
      "Better monitoring and visibility",
      "Security integrated into operations",
    ],
  },
  {
    id: "data-analytics",
    title: "Data & Analytics Enablement",
    challenge:
      "Important operational information lives in separate systems, reporting is slow or inconsistent and teams do not have a dependable view of performance.",
    approach:
      "We connect data sources, improve the underlying structure and create dashboards and reporting workflows that turn operational data into useful business intelligence.",
    icon: ChartNoAxesCombined,
    capabilities: ["Data integration", "Database architecture", "Dashboards", "Reporting workflows"],
    outcomes: [
      "Unified reporting",
      "Cleaner operational data",
      "Decision-ready dashboards",
      "Foundation for advanced analytics",
    ],
  },
];

const startingPoints = [
  ["A product to launch", "You need strategy, experience, engineering and deployment connected from day one."],
  ["Operations to modernize", "Manual or fragmented workflows need a stronger digital operating model."],
  ["Systems to connect", "Applications, data and teams need to exchange information reliably."],
  ["Technology to stabilize", "Infrastructure, security, deployment or support needs stronger ownership."],
];

export default function SolutionsPage() {
  return (
    <main>
      <PageHero
        eyebrow="SOLUTIONS"
        title="Technology organized around the"
        accent="outcome you need."
        description="Business problems rarely fit inside one technical category. We combine the right capabilities across product, software, cloud, security, AI and data around the result your organization is trying to achieve."
        primaryLabel="DISCUSS YOUR CHALLENGE"
        primaryHref="/get-a-quote"
        secondaryLabel="EXPLORE SERVICES"
        secondaryHref="/services"
      />

      <section className="bg-white px-5 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-6 lg:grid-cols-[36%_64%] lg:items-end lg:gap-12">
            <div>
              <div className="text-[9px] font-extrabold tracking-[0.16em] text-[#a87816]">WHERE WE START</div>
              <h2 className="mt-4 text-[32px] font-extrabold leading-[1.05] tracking-[-0.045em] text-[#111] sm:text-[40px]">
                Start with the business challenge, not the technology label.
              </h2>
            </div>
            <p className="max-w-[760px] text-[13px] leading-7 text-neutral-500 sm:text-[14px]">
              We first understand what is slowing the business down, what needs to change and what success should look like. From there, we shape the technology around the outcome instead of forcing the problem into a predefined service package.
            </p>
          </div>

          <div className="mt-9 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {startingPoints.map(([title, description], index) => (
              <article key={title} className="rounded-[18px] border border-black/[0.06] bg-[#f8f8f5] p-5 sm:p-6">
                <div className="text-[9px] font-extrabold tracking-[0.12em] text-[#c18a1c]">0{index + 1}</div>
                <h3 className="mt-4 text-[16px] font-extrabold text-[#111]">{title}</h3>
                <p className="mt-2.5 text-[12px] leading-6 text-neutral-500">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f4] px-5 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-9 max-w-[760px] sm:mb-12">
            <div className="text-[9px] font-extrabold tracking-[0.16em] text-[#a87816]">BUSINESS SOLUTIONS</div>
            <h2 className="mt-4 text-[32px] font-extrabold leading-[1.05] tracking-[-0.045em] text-[#111] sm:text-[42px]">
              Connected solutions for high-impact technology priorities.
            </h2>
          </div>

          <div className="space-y-5">
            {solutions.map(({ id, title, challenge, approach, icon: Icon, capabilities, outcomes }, index) => (
              <article
                key={id}
                id={id}
                className="scroll-mt-28 overflow-hidden rounded-[24px] border border-black/[0.065] bg-white shadow-[0_18px_55px_rgba(0,0,0,0.035)] lg:grid lg:grid-cols-[34%_66%]"
              >
                <div className="relative flex min-h-[260px] flex-col justify-between overflow-hidden bg-[#111] p-6 text-white sm:p-8 lg:min-h-[410px] lg:p-9">
                  <div className="pointer-events-none absolute -right-24 -top-24 h-[280px] w-[280px] rounded-full bg-[#ffc400]/[0.09] blur-[90px]" />
                  <div className="relative flex items-start justify-between">
                    <div className="flex h-[58px] w-[58px] items-center justify-center rounded-[16px] border border-[#ffc400]/20 bg-[#ffc400]/[0.08]">
                      <Icon size={25} strokeWidth={1.5} className="text-[#ffc400]" />
                    </div>
                    <span className="text-[10px] font-extrabold tracking-[0.12em] text-white/25">0{index + 1}</span>
                  </div>

                  <div className="relative mt-12 lg:mt-0">
                    <div className="text-[8px] font-extrabold tracking-[0.16em] text-[#d9a441]">BUSINESS SOLUTION</div>
                    <h2 className="mt-3 max-w-[450px] text-[29px] font-extrabold leading-[1.06] tracking-[-0.04em] sm:text-[35px]">{title}</h2>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {capabilities.map((item) => (
                        <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[8px] font-bold tracking-[0.05em] text-white/55">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="grid gap-7 sm:grid-cols-2">
                    <div>
                      <div className="text-[9px] font-extrabold tracking-[0.14em] text-[#a87816]">THE CHALLENGE</div>
                      <p className="mt-3 text-[13px] leading-7 text-neutral-500">{challenge}</p>
                    </div>
                    <div>
                      <div className="text-[9px] font-extrabold tracking-[0.14em] text-[#a87816]">OUR APPROACH</div>
                      <p className="mt-3 text-[13px] leading-7 text-neutral-500">{approach}</p>
                    </div>
                  </div>

                  <div className="mt-7 border-t border-black/[0.07] pt-6">
                    <div className="text-[9px] font-extrabold tracking-[0.14em] text-[#a87816]">TYPICAL OUTCOMES</div>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {outcomes.map((outcome) => (
                        <div key={outcome} className="flex items-center gap-3 rounded-[12px] border border-black/[0.055] bg-[#fafaf8] px-4 py-3.5 text-[12px] font-semibold text-neutral-600">
                          <span className="h-[6px] w-[6px] shrink-0 rounded-full bg-[#ffc400]" />
                          {outcome}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-7 flex flex-col gap-3 border-t border-black/[0.07] pt-6 sm:flex-row">
                    <Link
                      href="/get-a-quote"
                      className="group inline-flex h-[48px] items-center justify-between rounded-[8px] bg-[#ffc400] px-5 text-[10px] font-extrabold text-black sm:min-w-[190px] sm:justify-center sm:gap-5"
                    >
                      DISCUSS THIS SOLUTION
                      <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link
                      href="/services"
                      className="inline-flex h-[48px] items-center justify-center rounded-[8px] border border-black/[0.09] bg-white px-5 text-[10px] font-extrabold text-[#111]"
                    >
                      VIEW CAPABILITIES
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tf-tech-dark px-5 py-14 text-white sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1500px]">
          <div className="max-w-[760px]">
            <div className="text-[9px] font-extrabold tracking-[0.16em] text-[#d9a441]">HOW A SOLUTION TAKES SHAPE</div>
            <h2 className="mt-4 text-[32px] font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-[42px]">
              One outcome. The right combination of capabilities.
            </h2>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-4">
            {[
              ["Understand", "Clarify the operating problem, users, constraints, systems and desired business result."],
              ["Architect", "Define the product, workflow, technical architecture and delivery priorities."],
              ["Deliver", "Design, engineer, integrate, test and prepare the complete solution for production."],
              ["Evolve", "Support the system after launch and continue improving it as priorities change."],
            ].map(([title, description], index) => (
              <article key={title} className="rounded-[20px] border border-white/10 bg-white/[0.035] p-6">
                <div className="text-[9px] font-extrabold tracking-[0.12em] text-[#d9a441]">0{index + 1}</div>
                <h3 className="mt-4 text-[18px] font-bold">{title}</h3>
                <p className="mt-3 text-[12px] leading-6 text-white/45">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        title="Not sure which solution fits your situation?"
        description="Start with the business problem, current systems and desired outcome. We will help map the right combination of product, engineering, cloud, security, AI and data capabilities."
      />
    </main>
  );
}
