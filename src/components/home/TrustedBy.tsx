import {
  FaAws,
} from "react-icons/fa";

import {
  SiCloudflare,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
} from "react-icons/si";

const technologies = [
  {
    name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    name: "React",
    icon: SiReact,
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
  },
  {
    name: "AWS",
    icon: FaAws,
  },
  {
    name: "Cloudflare",
    icon: SiCloudflare,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
  },
];

export default function TrustedBy() {
  return (
    <section className="relative z-20 w-full overflow-hidden bg-white px-4 py-3 sm:px-6 lg:px-8 lg:py-4">
      <div className="mx-auto max-w-[1500px] overflow-hidden rounded-[16px] border border-black/[0.055] bg-white shadow-[0_14px_45px_rgba(0,0,0,0.045)] lg:rounded-[18px]">
        {/* =====================================================
            SECTION TITLE
        ====================================================== */}

        <div className="flex items-center gap-3 border-b border-black/[0.055] px-5 py-4 sm:px-7 lg:px-8">
          <span className="h-[2px] w-7 shrink-0 bg-[#ffc400]" />

          <span className="whitespace-nowrap text-[8px] font-extrabold tracking-[0.14em] text-neutral-500 sm:text-[9px]">
            TECHNOLOGIES WE WORK WITH
          </span>
        </div>

        {/* =====================================================
            MOBILE: HORIZONTAL SWIPE STRIP
        ====================================================== */}

        <div className="relative lg:hidden">
          {/* fade at right edge */}
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-20 w-10 bg-gradient-to-l from-white to-transparent" />

          <div
            className="
              flex w-full
              snap-x snap-mandatory
              items-center
              overflow-x-auto
              overscroll-x-contain
              px-4 py-4
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {technologies.map(({ name, icon: Icon }, index) => (
              <div
                key={name}
                className="
                  flex min-w-[145px]
                  snap-start
                  items-center
                  justify-center
                  gap-3
                  border-r
                  border-black/[0.07]
                  px-5
                  last:border-r-0
                "
              >
                <Icon
                  size={23}
                  className="shrink-0 text-neutral-400"
                />

                <span className="whitespace-nowrap text-[11px] font-bold tracking-[0.02em] text-neutral-500">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================
            DESKTOP: FULL WIDTH STRIP
        ====================================================== */}

        <div className="hidden grid-cols-7 lg:grid">
          {technologies.map(({ name, icon: Icon }, index) => (
            <div
              key={name}
              className={`group flex min-h-[74px] items-center justify-center gap-3 px-4 ${
                index !== technologies.length - 1
                  ? "border-r border-black/[0.06]"
                  : ""
              }`}
            >
              <Icon
                size={25}
                className="text-neutral-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-[#d9a441]"
              />

              <span className="whitespace-nowrap text-[11px] font-bold tracking-[0.02em] text-neutral-500 transition-colors duration-300 group-hover:text-[#111] xl:text-[12px]">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}