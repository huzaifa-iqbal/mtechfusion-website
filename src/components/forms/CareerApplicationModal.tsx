"use client";

import { useEffect, useState } from "react";
import { ArrowRight, X } from "lucide-react";
import CareerApplicationForm from "@/components/forms/CareerApplicationForm";

export default function CareerApplicationModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group inline-flex h-[54px] items-center justify-between rounded-[9px] bg-[#ffc400] px-6 text-[11px] font-extrabold text-black shadow-[0_12px_30px_rgba(255,196,0,0.14)] transition hover:-translate-y-0.5 sm:min-w-[210px] sm:justify-center sm:gap-7"
      >
        APPLY NOW
        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      </button>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Apply to Tech Fusion"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/55 p-3 backdrop-blur-[3px] sm:p-5"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
        >
          <div className="relative max-h-[94vh] w-full max-w-[1080px] overflow-y-auto rounded-[24px] border border-white/15 bg-[#f7f7f4] shadow-[0_35px_120px_rgba(0,0,0,0.35)]">
            <div className="sticky top-0 z-20 flex items-center justify-between border-b border-black/[0.07] bg-[#f7f7f4]/95 px-5 py-4 backdrop-blur-md sm:px-7">
              <div>
                <div className="text-[8px] font-extrabold tracking-[0.16em] text-[#a87816]">
                  CAREERS AT TECH FUSION
                </div>
                <h2 className="mt-1 text-[20px] font-extrabold tracking-[-0.03em] text-[#111] sm:text-[24px]">
                  Apply to Tech Fusion
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close application form"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/[0.08] bg-white text-[#111] transition hover:border-[#d9a441]/35 hover:bg-[#fffaf0]"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-4 sm:p-6 lg:p-8">
              <div className="mb-5 max-w-[760px] sm:mb-7">
                <p className="text-[12px] leading-6 text-neutral-500 sm:text-[13px] sm:leading-7">
                  Share your background, preferred career area and experience. You can also upload your current resume or CV. Your application will be connected to the Tech Fusion careers inbox before launch.
                </p>
              </div>

              <CareerApplicationForm />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
