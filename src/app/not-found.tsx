import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="tf-tech-light flex min-h-[65vh] items-center px-5 py-16 sm:px-6 lg:px-10">
      <div className="mx-auto w-full max-w-[1500px]">
        <div className="max-w-[720px]">
          <div className="text-[9px] font-extrabold tracking-[0.16em] text-[#a87816]">404 / PAGE NOT FOUND</div>
          <h1 className="mt-4 text-[42px] font-extrabold leading-[1.02] tracking-[-0.055em] text-[#111] sm:text-[58px]">
            This page is not part of the current Tech Fusion website.
          </h1>
          <p className="mt-5 max-w-[620px] text-[14px] leading-7 text-neutral-500">
            The link may be outdated or the page may have moved. Use the navigation above or return to the homepage.
          </p>
          <Link href="/" className="mt-7 inline-flex h-[52px] items-center gap-3 rounded-[8px] bg-[#ffc400] px-6 text-[11px] font-extrabold text-black">
            <ArrowLeft size={16} />
            BACK TO HOME
          </Link>
        </div>
      </div>
    </main>
  );
}
