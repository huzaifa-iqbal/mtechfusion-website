"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";
import { navigation } from "@/constants/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-[#f7f7f5]/90 px-4 py-3 backdrop-blur-xl">
      <div className="relative mx-auto flex h-[72px] max-w-[1500px] items-center justify-between rounded-[16px] border border-black/[0.05] bg-white px-5 shadow-[0_10px_35px_rgba(0,0,0,0.045)] sm:px-6 lg:px-7">
        <Link href="/" aria-label="Tech Fusion home" className="flex shrink-0 items-center">
          <Image
            src="/brand/tech-fusion-logo.png"
            alt="Tech Fusion"
            width={875}
            height={222}
            priority
            className="h-auto w-[190px] object-contain sm:w-[205px] lg:w-[220px]"
          />
        </Link>

        <nav className="hidden items-center gap-[24px] xl:flex" aria-label="Primary navigation">
          {navigation.map((item) => {
            const active = isActive(item.href);
            return (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className={`relative flex items-center gap-1.5 py-6 text-[13px] font-semibold transition ${
                    active ? "text-black" : "text-[#444] hover:text-black"
                  }`}
                >
                  {item.label}
                  {item.children ? (
                    <ChevronDown size={13} strokeWidth={1.9} className="transition-transform duration-200 group-hover:rotate-180" />
                  ) : null}
                  {active ? <span className="absolute bottom-[10px] left-0 h-[2px] w-8 bg-[#ffc400]" /> : null}
                </Link>

                {item.children ? (
                  <div className="invisible absolute left-1/2 top-[62px] w-[285px] -translate-x-1/2 translate-y-2 rounded-[16px] border border-black/[0.07] bg-white p-2 opacity-0 shadow-[0_24px_70px_rgba(0,0,0,0.12)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="p-2 text-[8px] font-extrabold tracking-[0.16em] text-[#ad7a14]">
                      {item.label.toUpperCase()}
                    </div>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="flex rounded-[10px] px-3 py-2.5 text-[12px] font-semibold text-neutral-600 transition hover:bg-[#fff8df] hover:text-[#111]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/get-a-quote"
            className="hidden h-[48px] items-center gap-6 rounded-[8px] bg-gradient-to-r from-[#ffc400] to-[#dba333] px-6 text-[11px] font-extrabold text-black shadow-[0_10px_28px_rgba(255,196,0,0.18)] transition hover:-translate-y-0.5 lg:flex"
          >
            GET A QUOTE
            <span className="text-[17px]">→</span>
          </Link>

          {/* Native details/summary is intentionally used for mobile reliability,
              including iOS Safari and before React hydration completes. */}
          <details className="group/mobile relative xl:hidden">
            <summary
              aria-label="Open navigation"
              className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-lg border border-neutral-200 bg-white text-[#111] [&::-webkit-details-marker]:hidden"
            >
              <Menu size={21} />
            </summary>

            <div className="absolute right-0 top-[58px] w-[min(330px,calc(100vw-32px))] overflow-hidden rounded-[18px] border border-black/[0.07] bg-white shadow-[0_24px_70px_rgba(0,0,0,0.16)]">
              <nav className="p-3" aria-label="Mobile navigation">
                {navigation.map((item) => (
                  <div key={item.label} className="border-b border-black/[0.055] last:border-b-0">
                    {item.children ? (
                      <details className="group/submenu">
                        <summary className="flex cursor-pointer list-none items-center justify-between px-3 py-3.5 text-[13px] font-bold text-[#222] [&::-webkit-details-marker]:hidden">
                          <span>{item.label}</span>
                          <ChevronDown size={16} className="text-neutral-500 transition group-open/submenu:rotate-180" />
                        </summary>
                        <div className="mb-3 rounded-[12px] bg-[#f8f8f5] p-2">
                          <Link
                            href={item.href}
                            className="block rounded-[9px] px-3 py-2.5 text-[12px] font-bold text-[#a87412] hover:bg-white"
                          >
                            View all {item.label}
                          </Link>
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block rounded-[9px] px-3 py-2.5 text-[12px] font-semibold text-neutral-600 hover:bg-white hover:text-[#111]"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </details>
                    ) : (
                      <Link
                        href={item.href}
                        className={`block px-3 py-3.5 text-[13px] font-bold ${
                          isActive(item.href) ? "text-[#a87412]" : "text-[#222]"
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}

                <Link
                  href="/get-a-quote"
                  className="mt-3 flex h-[50px] items-center justify-between rounded-[10px] bg-[#ffc400] px-5 text-[11px] font-extrabold text-black"
                >
                  GET A QUOTE
                  <span className="text-[18px]">→</span>
                </Link>
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
