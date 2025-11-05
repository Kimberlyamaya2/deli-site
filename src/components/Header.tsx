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

      {/* HEADER */}
      <header className="sticky top-0 z-40 relative bg-cocoa-900/80 backdrop-blur border-b border-gold-700 supports-[backdrop-filter]:bg-cocoa-900/60">
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
            aria-controls="mobile-nav"
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

        {/* MOBILE NAV PANEL */}
        {open && (
          <>
           {/* Overlay (covers page) */}
            <button
              aria-hidden
              tabIndex={-1}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/40 md:hidden"
            />
            <nav
              id="mobile-nav"
              className="md:hidden absolute top-full left-0 right-0 z-50 border-t border-gold-700 bg-cocoa-900/95 backdrop-blur"
              aria-label="Mobile Primary"
            >
              <ul className="w-full px-3 md:px-6 py-3 space-y-1">
                {links.map((l) => {
                  const active = pathname === l.href;
                  return (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        aria-current={active ? "page" : undefined}
                        className={[
                          "block rounded-md px-2 py-2 transition",
                          active
                            ? "text-gold-200 bg-black/20"
                            : "text-amber-100 hover:text-gold-200 hover:bg-black/10",
                        ].join(" ")}
                        onClick={() => setOpen(false)}
                      >
                        {l.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </>
        )}
      </header>

      {/* Skip-link anchor */}
      <div id="main" />
    </>
  );
}
