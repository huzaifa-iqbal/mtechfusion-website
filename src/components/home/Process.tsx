const steps = [
  {
    number: "01",
    title: "Discover",
    description: "Understand the business goal, users, current systems, constraints and success criteria.",
  },
  {
    number: "02",
    title: "Strategize",
    description: "Define priorities, architecture, delivery scope and the clearest path to the desired outcome.",
  },
  {
    number: "03",
    title: "Design",
    description: "Shape the user experience, workflows, interfaces and system interactions before implementation.",
  },
  {
    number: "04",
    title: "Build",
    description: "Engineer, integrate and test the solution with production operation and maintainability in mind.",
  },
  {
    number: "05",
    title: "Launch & Evolve",
    description: "Deploy, support, learn from real use and continue improving the technology as priorities change.",
  },
];

export default function Process() {
  return (
    <section className="bg-white px-5 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-18">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-5 lg:grid-cols-[35%_65%] lg:items-end lg:gap-10">
          <div>
            <div className="text-[9px] font-extrabold tracking-[0.14em] text-[#a87816]">HOW WE WORK</div>
            <h2 className="mt-4 text-[32px] font-extrabold leading-[1.06] tracking-[-0.045em] text-[#111] sm:text-[39px]">
              From vision to a system that performs.
            </h2>
          </div>
          <p className="max-w-[760px] text-[13px] leading-7 text-neutral-500 sm:text-[14px]">
            A disciplined delivery model keeps business goals, product experience, engineering and launch execution connected from day one.
          </p>
        </div>

        <div className="relative mt-9 hidden lg:block">
          <div className="absolute left-[8%] right-[8%] top-[28px] h-px bg-gradient-to-r from-transparent via-[#d9a441]/45 to-transparent" />
          <div className="grid grid-cols-5 gap-3">
            {steps.map(({ number, title, description }) => (
              <article key={number} className="relative rounded-[18px] border border-black/[0.06] bg-[#fafaf8] px-5 pb-6 pt-5 text-center">
                <div className="relative z-10 mx-auto flex h-[56px] w-[56px] items-center justify-center rounded-full border border-[#d9a441]/35 bg-white text-[11px] font-extrabold text-[#c68f20] shadow-[0_8px_25px_rgba(217,164,65,0.1)]">
                  {number}
                </div>
                <h3 className="mt-5 text-[16px] font-extrabold text-[#111]">{title}</h3>
                <p className="mx-auto mt-2.5 max-w-[220px] text-[11px] leading-5 text-neutral-500">{description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative mt-9 space-y-3 lg:hidden">
          {steps.map(({ number, title, description }) => (
            <article key={number} className="flex gap-4 rounded-[16px] border border-black/[0.06] bg-[#fafaf8] p-4 sm:p-5">
              <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full border border-[#d9a441]/35 bg-white text-[10px] font-extrabold text-[#c68f20]">
                {number}
              </div>
              <div className="pt-0.5">
                <h3 className="text-[15px] font-extrabold text-[#111]">{title}</h3>
                <p className="mt-1.5 text-[12px] leading-5 text-neutral-500">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
