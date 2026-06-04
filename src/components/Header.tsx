"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const dynamic = "force-dynamic";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/apply", label: "Apply to Team" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] rounded-md bg-[#1e1108] px-3 py-2 text-[#e0b97a] border border-[#6b3a1f]"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-50 border-b border-[#6b3a1f] bg-[rgba(30,17,8,0.97)] backdrop-blur-md">
        {/* Spice stripe along the bottom of the header */}
        <div
          aria-hidden
          className="absolute bottom-0 left-0 right-0 h-[2px]"
          style={{
            background:
              "repeating-linear-gradient(90deg,#c9993f 0px,#c9993f 10px,#8a3a0f 10px,#8a3a0f 18px,transparent 18px,transparent 26px)",
          }}
        />

        <div className="w-full flex items-center justify-between py-3 px-3 md:px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-lg border border-[#6b3a1f] bg-[#2b1a0f] shadow-sm">
              <Image
                src="/logo.png"
                alt="Victor's Classic Deli"
                fill
                sizes="40px"
                className="object-cover"
                priority
              />
            </div>
            <span className="h-display text-[#f0dfc5] text-xl font-semibold">
              Victor&apos;s Classic Deli
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-5" aria-label="Primary">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={[
                    "transition text-sm font-medium",
                    active
                      ? "text-[#c9993f] underline underline-offset-4 decoration-[#c9993f]"
                      : "text-[#c5a882] hover:text-[#e0b97a]",
                  ].join(" ")}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-md px-3 py-2 border border-[#6b3a1f] bg-[#2b1a0f] text-[#e0b97a] focus:outline-none focus:ring-2 focus:ring-[#c9993f]/40"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {open && (
        <>
          <button
            aria-hidden
            tabIndex={-1}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-black/50 md:hidden"
          />

          <nav
            id="mobile-nav"
            aria-label="Mobile Primary"
            className="fixed inset-y-0 right-0 z-50 md:hidden w-4/5 max-w-xs bg-[#1e1108] border-l border-[#6b3a1f] shadow-[0_0_40px_rgba(14,8,2,0.40)] px-4 py-5 flex flex-col"
          >
            {/* Spice stripe top */}
            <div
              aria-hidden
              className="h-[2px] w-full mb-5"
              style={{
                background:
                  "repeating-linear-gradient(90deg,#c9993f 0px,#c9993f 10px,#8a3a0f 10px,#8a3a0f 18px,transparent 18px,transparent 26px)",
              }}
            />
            <ul className="space-y-1">
              {links.map((l) => {
                const active = pathname === l.href;
                return (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={[
                        "flex items-center justify-between rounded-md px-3 py-2 text-base transition",
                        active
                          ? "text-[#c9993f] bg-[#2b1a0f] border border-[#6b3a1f]"
                          : "text-[#c5a882] hover:text-[#e0b97a] hover:bg-[#2b1a0f]",
                      ].join(" ")}
                    >
                      <span>{l.label}</span>
                      <span className="text-[#c9993f] text-sm">›</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </>
      )}

      <div id="main" />
    </>
  );
}
