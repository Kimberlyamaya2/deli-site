"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Are we on the homepage?
  const onHome = pathname === "/";

  // If on home, use section anchors; otherwise, full routes
  const links = onHome
    ? [
        { href: "#menu", label: "Menu" },
        { href: "#about", label: "About" },
        { href: "#visit", label: "Visit" },
        { href: "#contact", label: "Contact" },
        { href: "/apply", label: "Apply to Team" },
      ]
    : [
        { href: "/", label: "Home" },
        { href: "/menu", label: "Menu" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
        { href: "/apply", label: "Apply to Team" },
      ];

  return (
    <header className="sticky top-0 z-40 bg-cocoa-900/85 backdrop-blur border-b border-gold-700">
      <div className="w-full flex items-center justify-between py-3 px-3 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-lg border-gold">
            <Image
              src="/logo.png"
              alt="Victor’s Classic Deli"
              fill
              className="object-cover"
            />
          </div>
          <span className="h-display text-gold text-xl">
            Victor’s Classic Deli
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-5">
          {links.map((l) => {
            const isAnchor = l.href.startsWith("#") && onHome;
            // Use plain <a> for anchors, <Link> for routes
            return isAnchor ? (
              <a
                key={l.href}
                href={l.href}
                className="text-amber-100/90 hover:text-gold-200 transition"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                className="text-amber-100/90 hover:text-gold-200 transition"
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden px-3 py-2 border-gold text-amber-100"
          aria-expanded={open ? "true" : "false"}
          aria-controls="mobile-nav"
        >
          ☰
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav id="mobile-nav" className="md:hidden border-t border-gold-700">
          <ul className="w-full px-3 md:px-6 py-3 space-y-2">
            {links.map((l) => {
              const isAnchor = l.href.startsWith("#") && onHome;
              return (
                <li key={l.href}>
                  {isAnchor ? (
                    <a
                      href={l.href}
                      className="block py-2 text-amber-100 hover:text-gold-200"
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                    </a>
                  ) : (
                    <Link
                      href={l.href}
                      className="block py-2 text-amber-100 hover:text-gold-200"
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
