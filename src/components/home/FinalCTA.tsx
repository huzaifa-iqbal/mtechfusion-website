import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="bg-white px-5 py-14 sm:px-6 sm:py-20 lg:px-10">
      <div className="relative mx-auto max-w-[1500px] overflow-hidden rounded-[22px] border border-black/[0.06] bg-[#f8f7f2] px-6 py-8 sm:rounded-[28px] sm:px-10 sm:py-12 lg:px-14 lg:py-14">
        <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-[300px] w-[300px] rounded-full bg-[#ffc400]/10 blur-[85px]" />

        <div className="relative grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="flex items-center gap-2 text-[8px] font-extrabold tracking-[0.15em] text-[#9a6d13] sm:text-[9px]">
              <MessageCircle size={14} />
              START A CONVERSATION
            </div>

            <h2 className="mt-4 max-w-[760px] text-[31px] font-extrabold leading-[1.05] tracking-[-0.05em] text-[#111] sm:mt-5 sm:text-[40px] lg:text-[46px]">
              Have a technology challenge?
              <br className="hidden sm:block" />
              {" "}Let&apos;s solve it together.
            </h2>

            <p className="mt-4 max-w-[650px] text-[12px] leading-5 text-neutral-500 sm:mt-5 sm:text-[14px] sm:leading-7">
              Tell us what you&apos;re building, improving or trying to solve.
              We&apos;ll help identify the right technology approach.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-[50px] items-center justify-center rounded-[8px] border border-black/10 bg-white px-6 text-[10px] font-extrabold text-[#111] transition hover:border-[#d9a441]/50 sm:h-[54px] sm:px-7 sm:text-[11px]"
            >
              CONTACT US
            </Link>

            <Link
              href="/get-a-quote"
              className="group inline-flex h-[50px] items-center justify-center gap-6 rounded-[8px] bg-[#ffc400] px-6 text-[10px] font-extrabold text-black shadow-[0_10px_28px_rgba(255,196,0,.16)] transition hover:-translate-y-0.5 sm:h-[54px] sm:gap-7 sm:px-7 sm:text-[11px]"
            >
              GET A QUOTE
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
