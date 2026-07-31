import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PageCTA({
  title = "Ready to move your technology forward?",
  description = "Tell us what you are building, modernizing or trying to solve. We will help define the right next step.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-white px-5 py-14 sm:px-6 sm:py-18 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1500px] overflow-hidden rounded-[24px] border border-black/[0.06] bg-[#111] px-6 py-8 text-white sm:px-10 sm:py-11 lg:px-14 lg:py-12">
        <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="text-[9px] font-extrabold tracking-[0.16em] text-[#d9a441]">
              NEXT STEP
            </div>
            <h2 className="mt-4 max-w-[760px] text-[30px] font-extrabold leading-[1.07] tracking-[-0.045em] sm:text-[38px] lg:text-[44px]">
              {title}
            </h2>
            <p className="mt-4 max-w-[690px] text-[13px] leading-6 text-white/50 sm:text-[14px] sm:leading-7">
              {description}
            </p>
          </div>

          <Link
            href="/get-a-quote"
            className="group inline-flex h-[54px] items-center justify-between rounded-[8px] bg-[#ffc400] px-6 text-[11px] font-extrabold text-black sm:min-w-[190px] sm:justify-center sm:gap-7"
          >
            GET A QUOTE
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
