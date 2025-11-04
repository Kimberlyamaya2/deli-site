"use client";

import { useCallback, useEffect, useMemo, useRef } from "react";

/** Default sections used when no props are provided */
const DEFAULT_SECTIONS = [
  { id: "hot-sandwiches", label: "Hot Sandwiches" },
  { id: "build-your-own-sub", label: "Build Your Own Sub" },
  { id: "panini-sandwiches", label: "Panini Sandwiches" },
  { id: "wraps", label: "Wraps" },
  { id: "salads", label: "Salads" },
  { id: "soups", label: "Soups" },
  { id: "sides", label: "Sides" },
  { id: "drinks", label: "Drinks" },
] as const;

type Section = {
  id: string;
  label: string;
};

type SectionPickerProps = {
  /** Optional; if omitted we use DEFAULT_SECTIONS */
  sections?: Section[];
  /** Optional; lets you control highlight from the page */
  activeId?: string | null;
  /**
   * Optional; if omitted we provide a default that scrolls to the element
   * whose id matches the selected section id.
   */
  onSelect?: (id: string) => void;
  idPrefix?: string;
};

export default function SectionPicker({
  sections,
  activeId = null,
  onSelect,
  idPrefix = "section-picker",
}: SectionPickerProps) {
  const listRef = useRef<HTMLUListElement | null>(null);

  // Use provided sections or fall back to defaults
  const resolvedSections = useMemo<Section[]>(
    () => (sections && sections.length > 0 ? sections : [...DEFAULT_SECTIONS]),
    [sections]
  );

  const sectionIds = useMemo<string[]>(
    () => resolvedSections.map((s) => s.id),
    [resolvedSections]
  );

  // Built-in smooth scroll if no onSelect is provided
  const handleSelect = useCallback(
    (id: string) => {
      if (onSelect) {
        onSelect(id);
        return;
      }
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [onSelect]
  );

  // Keep the active item visible when the activeId changes
  useEffect(() => {
    if (!activeId || !listRef.current) return;
    const el = listRef.current.querySelector<HTMLButtonElement>(
      `button[data-id="${activeId}"]`
    );
    el?.scrollIntoView({ block: "nearest", inline: "nearest" });
  }, [activeId, sectionIds]);

  return (
    <nav aria-label="Jump to section">
      <ul ref={listRef} className="flex gap-2 overflow-x-auto">
        {resolvedSections.map((s) => {
          const isActive = s.id === activeId;
          return (
            <li key={s.id}>
              <button
                type="button"
                data-id={s.id}
                aria-current={isActive ? "true" : undefined}
                aria-controls={`${idPrefix}-${s.id}`}
                onClick={() => handleSelect(s.id)}
                className={`rounded px-3 py-1 text-sm ${
                  isActive ? "bg-foreground text-background" : "border"
                }`}
              >
                {s.label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
