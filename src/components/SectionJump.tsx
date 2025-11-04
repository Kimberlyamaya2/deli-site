"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import rawMenu from "@/data/menu.json";

type Section = { category: string };
const menu = rawMenu as Section[];

const slugify = (s: string) =>
  s.replace(/^[^A-Za-z0-9]+/, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function SectionJump() {
  const sections = useMemo(
    () => menu.map((s) => ({ id: slugify(s.category), label: s.category })),
    []
  );

  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  // Close on outside click or Escape
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const handleClick = (e: MouseEvent) => {
      const t = e.target as Node;
      if (
        panelRef.current &&
        !panelRef.current.contains(t) &&
        btnRef.current &&
        !btnRef.current.contains(t)
      )
        setOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    window.addEventListener("mousedown", handleClick);
    return () => {
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("mousedown", handleClick);
    };
  }, [open]);

  const handleSelect = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <div className="relative ml-auto">
      {/* Tiny corner button */}
      <button
        ref={btnRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="true"
        className="inline-flex items-center gap-1 rounded-full border border-[rgba(212,175,55,0.35)]
                   bg-black/20 px-2.5 py-1 text-xs text-amber-100/90 hover:text-amber-100
                   shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold-primary)]/50"
      >
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className="h-3.5 w-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
        Search Menu
      </button>

      {/* Dropdown list (appears on click) */}
      {open && (
        <div
          ref={panelRef}
          role="menu"
          aria-label="Jump to section"
          className="absolute right-0 mt-2 w-48 rounded-lg border border-[rgba(212,175,55,0.35)]
                     bg-[rgba(0,0,0,0.85)] backdrop-blur p-1 shadow-[0_6px_20px_rgba(0,0,0,0.45)] z-50"
        >
          <ul className="max-h-64 overflow-y-auto text-sm text-amber-100/90">
            {sections.map((s) => (
              <li key={s.id}>
                <button
                  type="button"
                  onClick={() => handleSelect(s.id)}
                  className="block w-full text-left px-3 py-1.5 rounded-md hover:bg-[rgba(212,175,55,0.15)]
                             focus:outline-none focus:bg-[rgba(212,175,55,0.25)]"
                >
                  {s.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
