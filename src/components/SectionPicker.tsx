"use client";
import { useEffect, useMemo, useState } from "react";
import rawMenu from "@/data/menu.json";

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function SectionPicker() {
  const sections: string[] = (rawMenu as any[]).map((s) => s.category);
  const sectionIds = sections.map((label) =>
    slugify(label.replace(/^[^A-Za-z0-9]+/, ""))
  );
  const [active, setActive] = useState(sectionIds[0] || "");

  // Track which section is in view
  useEffect(() => {
    const headings = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!headings.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: [0, 0.5] }
    );

    headings.forEach((h) => obs.observe(h));
    return () => obs.disconnect();
  }, []);

  const items = useMemo(
    () => sections.map((label, i) => ({ label, id: sectionIds[i] })),
    []
  );

  const jump = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 90;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <>
      {/* Floating side menu (desktop only) */}
      <aside
        className="hidden lg:flex flex-col gap-1 fixed right-6 top-32 z-30
                   bg-[#1A100C]/85 backdrop-blur-sm border border-gold/30
                   rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.4)]
                   px-2 py-3 w-44 text-sm text-amber-100/80"
      >
        <p className="text-[0.7rem] uppercase text-gold-300/70 mb-1 text-center tracking-wide">
          Jump to
        </p>
        <select
          value={active}
          onChange={(e) => jump(e.target.value)}
          className="w-full rounded-md border border-gold/60 bg-black/30 px-2 py-1.5 text-[0.85rem] text-amber-100/90 focus:border-gold/80"
        >
          {items.map(({ label, id }) => (
            <option key={id} value={id}>
              {label}
            </option>
          ))}
        </select>
      </aside>

      {/* Compact mobile dropdown */}
      <div className="lg:hidden mb-6">
        <select
          value={active}
          onChange={(e) => jump(e.target.value)}
          aria-label="Jump to menu section"
          className="w-full rounded-md border border-gold/50 bg-black/30 px-3 py-2 text-sm text-amber-100/90 focus:border-gold/80"
        >
          {items.map(({ label, id }) => (
            <option key={id} value={id}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
