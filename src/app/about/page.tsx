import type { Metadata } from "next";
import { Blocks, Compass, ShieldCheck, Workflow } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import PageCTA from "@/components/shared/PageCTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn how Tech Fusion combines strategy, engineering, security and long-term technology support.",
};

const principles = [
  {
    title: "Business before technology",
    description:
      "We start with the outcome, operating reality and constraints before recommending architecture, platforms or tools.",
    icon: Compass,
  },
  {
    title: "Engineering with purpose",
    description:
      "We design for usability, maintainability, security and scale instead of optimizing only for the first launch.",
    icon: Blocks,
  },
  {
    title: "Security by design",
    description:
      "Security is considered across applications, infrastructure, data, access and operational processes from the start.",
    icon: ShieldCheck,
  },
  {
    title: "Long-term partnership",
    description:
      "We support the technology after delivery through monitoring, maintenance, improvement and informed technical guidance.",
    icon: Workflow,
  },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="ABOUT TECH FUSION"
        title="Technology partnership built around"
        accent="business outcomes."
        description="Tech Fusion is a technology company focused on helping businesses design, build, secure and operate modern digital systems. We bring software, cloud, cybersecurity, AI, data and managed technology together so clients can work with one accountable partner instead of disconnected vendors."
        primaryLabel="DISCUSS A PROJECT"
        primaryHref="/get-a-quote"
        secondaryLabel="EXPLORE SERVICES"
        secondaryHref="/services"
      />

      <section className="bg-white px-5 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-10 lg:grid-cols-[40%_60%] lg:gap-16">
            <div>
              <div className="text-[9px] font-extrabold tracking-[0.16em] text-[#a87816]">
                OUR APPROACH
              </div>
              <h2 className="mt-4 max-w-[540px] text-[34px] font-extrabold leading-[1.05] tracking-[-0.05em] text-[#111] sm:text-[42px] lg:text-[48px]">
                Make complex technology easier to execute.
              </h2>
              <p className="mt-5 max-w-[540px] text-[13px] leading-7 text-neutral-500 sm:text-[14px]">
                The strongest technology decisions connect business goals,
                user experience, architecture, security and operations. Our
                role is to bring those disciplines together into one practical
                delivery model.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {principles.map(({ title, description, icon: Icon }, index) => (
                <article
                  key={title}
                  className="rounded-[20px] border border-black/[0.065] bg-[#f8f8f5] p-6 sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#fff4ca] text-[#b78016]">
                      <Icon size={21} strokeWidth={1.6} />
                    </div>
                    <span className="text-[10px] font-extrabold text-neutral-300">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-[18px] font-extrabold tracking-[-0.025em] text-[#111]">
                    {title}
                  </h3>
                  <p className="mt-3 text-[12px] leading-6 text-neutral-500 sm:text-[13px]">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="tf-tech-dark px-5 py-14 text-white sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-8 lg:grid-cols-[38%_62%] lg:gap-14">
            <div>
              <div className="text-[9px] font-extrabold tracking-[0.16em] text-[#d9a441]">
                HOW WE ENGAGE
              </div>
              <h2 className="mt-4 text-[32px] font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-[40px]">
                Clear ownership from discovery through operations.
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["01", "Discover", "Clarify goals, users, systems, constraints and success criteria."],
                ["02", "Design", "Define experience, architecture, security and delivery plan."],
                ["03", "Build", "Engineer, integrate, test and prepare the solution for production."],
                ["04", "Operate", "Monitor, support, maintain and improve the technology over time."],
              ].map(([number, title, description]) => (
                <div key={number} className="rounded-[18px] border border-white/10 bg-white/[0.035] p-5 sm:p-6">
                  <div className="text-[9px] font-extrabold tracking-[0.12em] text-[#d9a441]">
                    {number}
                  </div>
                  <h3 className="mt-3 text-[17px] font-bold">{title}</h3>
                  <p className="mt-2 text-[12px] leading-6 text-white/45">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PageCTA
        title="Looking for a technology partner, not another disconnected vendor?"
        description="Start with the business challenge. We will help translate it into a practical technology roadmap and delivery approach."
      />
    </main>
  );
}
