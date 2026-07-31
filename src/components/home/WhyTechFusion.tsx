import {
  Blocks,
  Headphones,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    title: "One Technology Partner",
    description:
      "Software, cloud, security, AI, infrastructure and support managed through one technology partner.",
    icon: Blocks,
  },
  {
    number: "02",
    title: "End-to-End Execution",
    description:
      "From planning and design to development, deployment and continuous improvement.",
    icon: Workflow,
  },
  {
    number: "03",
    title: "Security by Design",
    description:
      "Security, reliability and scalability are considered throughout every solution we build.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Long-Term Support",
    description:
      "We continue supporting, maintaining and evolving your technology after launch.",
    icon: Headphones,
  },
];

export default function WhyTechFusion() {
  return (
    <section className="relative w-full min-h-0 overflow-hidden bg-[#111] px-5 py-12 text-white sm:px-6 sm:py-16 lg:px-10 lg:py-20">
      {/* =====================================================
          SUBTLE BACKGROUND ACCENT
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-120px] top-[-130px] h-[320px] w-[320px] rounded-full bg-[#ffc400]/[0.07] blur-[100px] sm:h-[420px] sm:w-[420px] lg:h-[500px] lg:w-[500px]"
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative mx-auto w-full max-w-[1500px]">
        <div className="grid min-h-0 gap-8 lg:grid-cols-[36%_64%] lg:gap-12">
          {/* =================================================
              LEFT
          ================================================== */}

          <div className="min-w-0">
            <div className="text-[9px] font-extrabold tracking-[0.15em] text-[#d9a441]">
              WHY TECH FUSION
            </div>

            <h2 className="mt-4 max-w-[560px] text-[32px] font-extrabold leading-[1.04] tracking-[-0.05em] sm:mt-5 sm:text-[40px] lg:text-[46px]">
              Technology without
              <br className="hidden sm:block" />{" "}
              the complexity.
            </h2>

            <p className="mt-4 max-w-[500px] text-[13px] leading-6 text-white/55 sm:mt-5 sm:text-[14px] sm:leading-7">
              Businesses shouldn&apos;t need five different vendors to solve
              five connected technology problems. Tech Fusion brings strategy,
              engineering and support together.
            </p>

            {/* credibility strip */}

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-5">
              <Proof label="Integrated Delivery" />
              <Proof label="Security First" />
              <Proof label="Long-Term Support" />
            </div>
          </div>

          {/* =================================================
              RIGHT
          ================================================== */}

          <div className="grid min-h-0 grid-cols-1 gap-3 sm:grid-cols-2 lg:gap-4">
            {reasons.map(
              ({
                number,
                title,
                description,
                icon: Icon,
              }) => (
                <article
                  key={title}
                  className="group min-h-0 rounded-[16px] border border-white/[0.08] bg-[#181818] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#d9a441]/25 hover:bg-[#1c1c1c] sm:p-6 lg:p-7"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[11px] border border-[#d9a441]/20 bg-[#ffc400]/[0.06]">
                      <Icon
                        size={18}
                        strokeWidth={1.6}
                        className="text-[#d9a441]"
                      />
                    </div>

                    <span className="text-[9px] font-extrabold tracking-[0.08em] text-white/20">
                      {number}
                    </span>
                  </div>

                  <h3 className="mt-4 text-[16px] font-bold leading-[1.3] text-white sm:mt-5">
                    {title}
                  </h3>

                  <p className="mt-2 text-[11px] leading-5 text-white/45 sm:text-[12px] sm:leading-6">
                    {description}
                  </p>
                </article>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Proof({
  label,
}: {
  label: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="h-[5px] w-[5px] rounded-full bg-[#ffc400]" />

      <span className="text-[9px] font-bold tracking-[0.03em] text-white/40">
        {label}
      </span>
    </div>
  );
}