"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import rawMenu from "@/data/menu.json";

type Section = { category: string };
const menu = rawMenu as Section[];

const slugify = (s: string) =>
  s
    .replace(/^[^A-Za-z0-9]+/, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const prettyLabel = (label: string) => {
  if (label === "Build Your Own") return "Build Your Own";
  if (label === "Kids Menu") return "Kids";
  return label;
};

export default function SectionJump() {
  const sections = useMemo(
    () =>
      menu.map((s) => ({
        id: slugify(s.category),
        label: prettyLabel(s.category),
      })),
    []
  );

  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    const handleClick = (e: MouseEvent) => {
      const t = e.target as Node;
      if (
        panelRef.current &&
        !panelRef.current.contains(t) &&
        btnRef.current &&
        !btnRef.current.contains(t)
      ) {
        setOpen(false);
      }
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
      <button
        ref={btnRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="true"
        className="inline-flex items-center gap-1.5 rounded-full border border-[#a88463] bg-[#dcc7b2] px-3.5 py-1.5 text-xs font-medium text-[#4a3225] hover:bg-[#d2baa2] hover:text-[#2b211b] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8a5a2b]/30"
      >
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className="h-3.5 w-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
        Jump to Section
      </button>

      {open && (
        <div
          ref={panelRef}
          role="menu"
          aria-label="Jump to section"
          className="absolute right-0 mt-2 w-56 rounded-xl border border-[#a88463] bg-[#e2d1bf] p-1.5 shadow-[0_12px_28px_rgba(43,33,27,0.14)] z-50"
        >
          <ul className="max-h-72 overflow-y-auto text-sm text-[#2b211b]">
            {sections.map((s) => (
              <li key={s.id}>
                <button
                  type="button"
                  onClick={() => handleSelect(s.id)}
                  className="block w-full text-left px-3 py-2 rounded-lg hover:bg-[#d8c2ab] focus:outline-none focus:bg-[#cfb69d] transition"
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