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
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] rounded-md bg-[#2b211b] px-3 py-2 text-white border border-[#b99d84]"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-50 border-b border-[#c4ab93] bg-[rgba(231,216,200,0.95)] backdrop-blur-md">
        <div className="w-full flex items-center justify-between py-3 px-3 md:px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-lg border border-[#b99d84] bg-[#e9dbc9] shadow-sm">
              <Image
                src="/logo.png"
                alt="Victor’s Classic Deli"
                fill
                sizes="40px"
                className="object-cover"
                priority
              />
            </div>

            <span className="h-display text-[#3d2d22] text-xl font-semibold">
              Victor’s Classic Deli
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
                      ? "text-[#2b211b] underline underline-offset-4 decoration-[#8a6a52]"
                      : "text-[#5f4735] hover:text-[#2b211b]",
                  ].join(" ")}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-md px-3 py-2 border border-[#b99d84] bg-[#e9dbc9] text-[#2b211b] focus:outline-none focus:ring-2 focus:ring-[#9b6b34]/40"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
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
            className="fixed inset-0 z-40 bg-black/30 md:hidden"
          />

          <nav
            id="mobile-nav"
            aria-label="Mobile Primary"
            className="fixed inset-y-0 right-0 z-50 md:hidden w-4/5 max-w-xs bg-[#e9dbc9] border-l border-[#c4ab93] shadow-[0_0_40px_rgba(43,33,27,0.12)] px-4 py-5 flex flex-col"
          >
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
                          ? "text-[#2b211b] bg-[#dfcfbc] border border-[#c4ab93]"
                          : "text-[#5f4735] hover:text-[#2b211b] hover:bg-[#dfcfbc]",
                      ].join(" ")}
                    >
                      <span>{l.label}</span>
                      <span className="text-[#8a6a52] text-sm">&#8250;</span>
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