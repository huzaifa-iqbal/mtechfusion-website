import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Rocket,
  ShoppingBag,
  Sparkles,
} from "lucide-react";

const solutions = [
  {
    title: "Launch a Digital Product",
    description:
      "Turn an idea into a complete digital product through strategy, UI/UX, development, testing and launch.",
    icon: Rocket,
    label: "PRODUCT DEVELOPMENT",
  },
  {
    title: "Transform Your Business",
    description:
      "Modernize operations using cloud infrastructure, custom software, automation, analytics and AI.",
    icon: Sparkles,
    label: "DIGITAL TRANSFORMATION",
  },
  {
    title: "Build an Online Business",
    description:
      "Create a connected online operation with web platforms, commerce, payments, CRM and automation.",
    icon: ShoppingBag,
    label: "DIGITAL COMMERCE",
  },
  {
    title: "Modernize Enterprise IT",
    description:
      "Improve infrastructure, security, performance and operational resilience across your organization.",
    icon: Building2,
    label: "ENTERPRISE TECHNOLOGY",
  },
];

export default function Solutions() {
  return (
    <section className="relative w-full min-h-0 overflow-hidden bg-[#f8f8f6] px-5 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
      {/* subtle premium atmosphere */}
      <div className="pointer-events-none absolute right-[-140px] top-[-140px] h-[320px] w-[320px] rounded-full bg-[#ffc400]/[0.04] blur-[100px]" />

      <div className="relative mx-auto w-full max-w-[1500px]">
        {/* =========================
            SECTION HEADER
        ========================== */}
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="min-w-0">
            <div className="text-[9px] font-extrabold tracking-[0.15em] text-[#9a721e]">
              BUSINESS SOLUTIONS
            </div>

            <h2 className="mt-4 max-w-[720px] text-[32px] font-extrabold leading-[1.04] tracking-[-0.05em] text-[#111] sm:text-[38px] lg:text-[44px]">
              From Challenge to
              <br className="sm:hidden" /> Solution.
            </h2>

            <p className="mt-4 max-w-[650px] text-[13px] leading-6 text-neutral-500 sm:text-[14px] sm:leading-7">
              We combine the right technologies around the business outcome you
              need instead of forcing every project into the same template.
            </p>
          </div>

          <Link
            href="/solutions"
            className="group inline-flex w-fit items-center gap-3 text-[10px] font-extrabold tracking-[0.01em] text-[#111] sm:text-[11px]"
          >
            VIEW ALL SOLUTIONS

            <ArrowUpRight
              size={16}
              strokeWidth={1.9}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* =========================
            SOLUTION CARDS
        ========================== */}
        <div className="mt-9 grid min-h-0 grid-cols-1 gap-4 sm:mt-11 md:grid-cols-2 lg:gap-5">
          {solutions.map(
            ({ title, description, icon: Icon, label }, index) => (
              <article
                key={title}
                className="group relative min-h-0 overflow-hidden rounded-[18px] border border-black/[0.06] bg-white p-5 shadow-[0_12px_35px_rgba(0,0,0,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-[#d9a441]/35 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] sm:rounded-[20px] sm:p-7"
              >
                {/* subtle internal glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-[180px] w-[180px] rounded-full bg-[#ffc400]/[0.045] blur-[65px]" />

                <div className="relative">
                  {/* top */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-[14px] border border-[#e4c26d]/20 bg-[#fff7db] sm:h-[54px] sm:w-[54px]">
                      <Icon
                        size={22}
                        strokeWidth={1.55}
                        className="text-[#c9901e]"
                      />
                    </div>

                    <span className="text-[9px] font-extrabold tracking-[0.12em] text-neutral-300">
                      0{index + 1}
                    </span>
                  </div>

                  {/* label */}
                  <div className="mt-6 text-[8px] font-extrabold tracking-[0.14em] text-[#b77f11] sm:mt-7">
                    {label}
                  </div>

                  {/* title */}
                  <h3 className="mt-3 max-w-[440px] text-[20px] font-extrabold leading-[1.15] tracking-[-0.035em] text-[#111] sm:text-[22px]">
                    {title}
                  </h3>

                  {/* description */}
                  <p className="mt-3 max-w-[560px] text-[12px] leading-[1.7] text-neutral-500 sm:mt-4 sm:text-[13px] sm:leading-6">
                    {description}
                  </p>

                  {/* divider */}
                  <div className="mt-6 h-px w-full bg-black/[0.06]" />

                  {/* footer */}
                  <Link
                    href="/solutions"
                    className="group/link mt-4 inline-flex items-center gap-3 text-[9px] font-extrabold tracking-[0.035em] text-[#111]"
                  >
                    EXPLORE SOLUTION

                    <ArrowRight
                      size={14}
                      className="text-[#c9901e] transition-transform duration-300 group-hover/link:translate-x-1"
                    />
                  </Link>
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}