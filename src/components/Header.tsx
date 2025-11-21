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

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* Accessibility: Skip link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100]
                   rounded-md bg-cocoa-800/90 px-3 py-2 text-amber-100 border border-gold"
      >
        Skip to content
      </a>

      {/* HEADER BAR */}
     <header
  className="
    sticky top-0 z-50
    border-b border-gold-700
    bg-cocoa-900/95
    backdrop-blur-md
    supports-[backdrop-filter]:bg-cocoa-900/75
  "
>

        <div className="w-full flex items-center justify-between py-3 px-3 md:px-6">
          {/* LOGO + NAME */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-lg border-gold">
              <Image
                src="/logo.png"
                alt="Victor’s Classic Deli"
                fill
                sizes="40px"
                className="object-cover"
                priority
              />
            </div>
            <span className="h-display text-gold-200 text-xl [text-shadow:0_0_8px_rgba(246,227,154,0.6)]">
              Victor’s Classic Deli
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-5" aria-label="Primary">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={[
                    "transition",
                    active
                      ? "text-gold-200 underline underline-offset-4 decoration-gold-200/60"
                      : "text-amber-100/90 hover:text-gold-200",
                  ].join(" ")}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-md px-3 py-2 border-gold text-amber-100
                       focus:outline-none focus:ring-2 focus:ring-[var(--gold-primary)]/60"
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

      {/* MOBILE DRAWER */}
{open && (
  <>
    {/* Dim background */}
    <button
      aria-hidden
      tabIndex={-1}
      onClick={() => setOpen(false)}
      className="fixed inset-0 z-40 bg-black/60 md:hidden"
    />

    {/* Drawer panel */}
    <nav
      id="mobile-nav"
      aria-label="Mobile Primary"
      className="
        fixed inset-y-0 right-0 z-50 md:hidden
        w-4/5 max-w-xs
        bg-gradient-to-b from-[#27160d] to-[#110807]
        border-l border-gold-700
        shadow-[0_0_40px_rgba(0,0,0,0.65)]
        px-4 py-5
        flex flex-col
      "
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
                  "flex items-center justify-between rounded-md px-2 py-2 text-base tracking-wide transition",
                  active
                    ? "text-gold-200 bg-cocoa-800/70 border border-gold/40"
                    : "text-amber-100 hover:text-gold-200 hover:bg-cocoa-800/40",
                ].join(" ")}
              >
                <span>{l.label}</span>
                <span className="text-gold-300 text-sm">&#8250;</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  </>
)}


      {/* Skip-link anchor */}
      <div id="main" />
    </>
  );
}
