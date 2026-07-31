import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  ChartNoAxesCombined,
  CloudCog,
  Code2,
  Globe2,
  Headphones,
  ShieldCheck,
} from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import PageCTA from "@/components/shared/PageCTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Tech Fusion services across software engineering, web, cloud, cybersecurity, AI, data and managed technology.",
};

const services = [
  {
    id: "software-engineering",
    title: "Software Engineering",
    intro:
      "We design and build dependable software around the way your business actually operates — from customer-facing products to internal platforms and workflow systems.",
    icon: Code2,
    deliverables: [
      "Custom web applications and SaaS products",
      "Business portals, dashboards and internal tools",
      "API design and third-party system integration",
      "Legacy application modernization",
      "Role-based workflows and business logic",
      "Testing, release planning and technical documentation",
    ],
    useCases: [
      "Replacing manual or spreadsheet-heavy operations",
      "Launching a new digital product or platform",
      "Connecting disconnected systems into one workflow",
    ],
  },
  {
    id: "web-digital",
    title: "Web & Digital Experience",
    intro:
      "We create polished digital experiences that make complex services easier to understand, use and manage — with performance, accessibility and maintainability built in.",
    icon: Globe2,
    deliverables: [
      "Corporate, product and campaign websites",
      "Customer portals and secure account experiences",
      "Responsive UI implementation and design systems",
      "Commerce, checkout and payment experiences",
      "Performance and accessibility improvements",
      "Content architecture and conversion-focused journeys",
    ],
    useCases: [
      "Repositioning a business with a stronger digital presence",
      "Improving an outdated or difficult customer journey",
      "Creating a scalable front end for an existing platform",
    ],
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud & Infrastructure",
    intro:
      "We build cloud foundations that support reliable applications, controlled deployments and long-term growth without turning infrastructure into a constant operational problem.",
    icon: CloudCog,
    deliverables: [
      "Cloud architecture and migration planning",
      "Environment and infrastructure configuration",
      "CI/CD pipelines and release automation",
      "Application hosting and deployment architecture",
      "Monitoring, logging and reliability practices",
      "Backup, recovery and resilience planning",
    ],
    useCases: [
      "Moving applications from fragile hosting to cloud infrastructure",
      "Improving deployment reliability and release speed",
      "Preparing systems for growth, scale or higher availability",
    ],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    intro:
      "Security is most effective when it is designed into the system. We help reduce technical risk across applications, infrastructure, identities and operational access.",
    icon: ShieldCheck,
    deliverables: [
      "Application and architecture security review",
      "Cloud and infrastructure hardening",
      "Identity, access and permissions design",
      "Security controls for data and integrations",
      "Monitoring and incident-readiness guidance",
      "Remediation planning and implementation support",
    ],
    useCases: [
      "Strengthening a production application before growth",
      "Reducing access and infrastructure risk",
      "Adding security practices to modernization initiatives",
    ],
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    intro:
      "We apply AI and automation where they can create practical operational value: less repetitive work, faster information flow and better-connected business processes.",
    icon: BrainCircuit,
    deliverables: [
      "Workflow and process automation",
      "AI-assisted internal tools and operational workflows",
      "Document extraction and information processing",
      "System-to-system automation and orchestration",
      "Human-in-the-loop approval workflows",
      "Prototype-to-production AI integration",
    ],
    useCases: [
      "Reducing repetitive administrative work",
      "Routing information between teams and systems",
      "Introducing AI into an existing process responsibly",
    ],
  },
  {
    id: "data-intelligence",
    title: "Data & Intelligence",
    intro:
      "We turn fragmented operational information into reliable data flows, dashboards and reporting systems that make performance easier to understand and act on.",
    icon: ChartNoAxesCombined,
    deliverables: [
      "Database and data-model architecture",
      "Data integration and synchronization",
      "Operational dashboards and KPI views",
      "Reporting systems and recurring business reports",
      "Analytics-ready data workflows",
      "Data quality and governance foundations",
    ],
    useCases: [
      "Bringing reporting out of spreadsheets",
      "Creating a single operational view across systems",
      "Preparing trusted data for analytics or AI initiatives",
    ],
  },
  {
    id: "managed-technology",
    title: "Managed Technology",
    intro:
      "Launch is not the end of the work. We provide ongoing technical ownership to keep applications, cloud environments and digital systems healthy and improving.",
    icon: Headphones,
    deliverables: [
      "Application maintenance and technical support",
      "Cloud and infrastructure monitoring",
      "Issue investigation and release support",
      "Security and reliability improvements",
      "Performance optimization",
      "Continuous enhancement roadmap",
    ],
    useCases: [
      "Supporting a production system after launch",
      "Adding technical capacity without another fragmented vendor",
      "Keeping critical systems maintained and evolving",
    ],
  },
];

const servicePrinciples = [
  ["Strategy before build", "We clarify the business outcome, constraints and operating context before committing to architecture."],
  ["Security by design", "Security, access, resilience and data handling are considered as part of the solution — not added at the end."],
  ["Production-ready delivery", "We design for deployment, maintainability and real-world operation, not just a successful demo."],
  ["Support after launch", "We can stay involved to maintain, improve and extend the systems we help put into production."],
];

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="SERVICES"
        title="Every critical technology layer under"
        accent="one partner."
        description="Tech Fusion combines product thinking, software engineering, cloud, security, AI, data and operational support so your technology can move forward as one connected system instead of a collection of disconnected vendors."
        primaryLabel="REQUEST A CONSULTATION"
        primaryHref="/get-a-quote"
        secondaryLabel="VIEW SOLUTIONS"
        secondaryHref="/solutions"
      />

      <section className="bg-white px-5 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-6 lg:grid-cols-[34%_66%] lg:items-end lg:gap-12">
            <div>
              <div className="text-[9px] font-extrabold tracking-[0.16em] text-[#a87816]">HOW WE DELIVER</div>
              <h2 className="mt-4 text-[32px] font-extrabold leading-[1.05] tracking-[-0.045em] text-[#111] sm:text-[40px]">
                Technology that works as a system.
              </h2>
            </div>
            <p className="max-w-[760px] text-[13px] leading-7 text-neutral-500 sm:text-[14px]">
              A strong digital business needs more than isolated development work. Our services are designed to connect product experience, engineering, infrastructure, security, data and ongoing operations around one delivery plan.
            </p>
          </div>

          <div className="mt-9 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {servicePrinciples.map(([title, description], index) => (
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
            <div className="text-[9px] font-extrabold tracking-[0.16em] text-[#a87816]">CAPABILITIES</div>
            <h2 className="mt-4 text-[32px] font-extrabold leading-[1.05] tracking-[-0.045em] text-[#111] sm:text-[42px]">
              Deep capability across the technology lifecycle.
            </h2>
            <p className="mt-4 text-[13px] leading-7 text-neutral-500 sm:text-[14px]">
              Engage Tech Fusion for one focused capability or combine several services into a complete product, modernization or operational initiative.
            </p>
          </div>

          <div className="space-y-5">
            {services.map(({ id, title, intro, icon: Icon, deliverables, useCases }, index) => (
              <article
                key={id}
                id={id}
                className="scroll-mt-28 overflow-hidden rounded-[24px] border border-black/[0.065] bg-white shadow-[0_18px_55px_rgba(0,0,0,0.035)] lg:grid lg:grid-cols-[31%_69%]"
              >
                <div className="relative overflow-hidden bg-[#111] p-6 text-white sm:p-8 lg:min-h-[390px] lg:p-9">
                  <div className="pointer-events-none absolute -right-24 -top-24 h-[250px] w-[250px] rounded-full bg-[#ffc400]/[0.08] blur-[80px]" />
                  <div className="relative flex h-full flex-col justify-between">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-[58px] w-[58px] items-center justify-center rounded-[16px] border border-[#ffc400]/20 bg-[#ffc400]/[0.08]">
                        <Icon size={25} strokeWidth={1.5} className="text-[#ffc400]" />
                      </div>
                      <span className="text-[10px] font-extrabold tracking-[0.12em] text-white/25">0{index + 1}</span>
                    </div>

                    <div className="mt-12 lg:mt-0">
                      <div className="text-[8px] font-extrabold tracking-[0.16em] text-[#d9a441]">TECHNOLOGY SERVICE</div>
                      <h3 className="mt-3 text-[27px] font-extrabold leading-[1.06] tracking-[-0.04em] sm:text-[32px]">{title}</h3>
                      <p className="mt-4 max-w-[470px] text-[12px] leading-6 text-white/50 sm:text-[13px]">{intro}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 lg:p-9">
                  <div className="grid gap-8 xl:grid-cols-[58%_42%] xl:gap-10">
                    <div>
                      <div className="text-[9px] font-extrabold tracking-[0.14em] text-[#a87816]">WHAT WE CAN DELIVER</div>
                      <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        {deliverables.map((item) => (
                          <div key={item} className="flex items-start gap-3 rounded-[12px] border border-black/[0.055] bg-[#fafaf8] px-4 py-3.5 text-[12px] font-semibold leading-5 text-neutral-600">
                            <span className="mt-[7px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#ffc400]" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="xl:border-l xl:border-black/[0.07] xl:pl-8">
                      <div className="text-[9px] font-extrabold tracking-[0.14em] text-[#a87816]">COMMON USE CASES</div>
                      <div className="mt-4 space-y-3">
                        {useCases.map((item, itemIndex) => (
                          <div key={item} className="flex gap-3 text-[12px] leading-6 text-neutral-500">
                            <span className="mt-[2px] text-[10px] font-extrabold text-[#c18a1c]">0{itemIndex + 1}</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      <Link
                        href="/get-a-quote"
                        className="group mt-7 inline-flex items-center gap-3 text-[10px] font-extrabold tracking-[0.06em] text-[#111]"
                      >
                        DISCUSS THIS SERVICE
                        <ArrowRight size={15} className="text-[#c18a1c] transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tf-tech-dark px-5 py-14 text-white sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-8 lg:grid-cols-[38%_62%] lg:gap-12">
            <div className="max-w-[620px]">
              <div className="text-[9px] font-extrabold tracking-[0.16em] text-[#d9a441]">ENGAGEMENT MODELS</div>
              <h2 className="mt-4 text-[32px] font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-[42px]">
                Flexible delivery without fragmented ownership.
              </h2>
              <p className="mt-4 text-[13px] leading-7 text-white/50 sm:text-[14px]">
                The engagement can be structured around a defined project, an ongoing capability or long-term technology ownership depending on what your business needs.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Project Delivery", "A defined initiative with clear scope, milestones, delivery ownership and launch support."],
                ["Dedicated Capability", "An embedded technical capability aligned to your roadmap, priorities and existing team."],
                ["Modernization Program", "A phased approach for replacing, connecting or improving legacy systems without losing operational continuity."],
                ["Managed Technology", "Ongoing maintenance, monitoring, support and continuous improvement for production systems."],
              ].map(([title, description], index) => (
                <article key={title} className="rounded-[20px] border border-white/10 bg-white/[0.035] p-6 sm:p-7">
                  <div className="text-[9px] font-extrabold tracking-[0.12em] text-[#d9a441]">0{index + 1}</div>
                  <h3 className="mt-4 text-[19px] font-bold">{title}</h3>
                  <p className="mt-3 text-[12px] leading-6 text-white/45 sm:text-[13px]">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PageCTA
        title="Need several capabilities working together?"
        description="That is where Tech Fusion is strongest. We can combine the services required around one business outcome, one delivery plan and one accountable technology partner."
      />
    </main>
  );
}
