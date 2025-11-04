import type { Menu } from "@/types/menu";
import rawMenu from "@/data/menu.json";

// If your json shape matches, this is enough:
const menu = rawMenu as Menu;

// Slug used for #anchors (emoji/leading symbols removed)
const slugify = (s: string) =>
  s
    .replace(/^[^A-Za-z0-9]+/, "") // strip leading emoji/symbols
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

function priceText(item: Menu[number]["items"][number]) {
  if (typeof item.price === "number")
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(item.price);
  if (typeof item.priceTier === "number")
    return "💲".repeat(Math.max(1, Math.min(5, item.priceTier)));
  return "";
}

function Badges({ tags }: { tags?: string[] }) {
  if (!tags?.length) return null;
  return (
    <span className="ml-2 inline-flex gap-1 align-middle text-base">
      {tags.includes("spicy") && <span title="Spicy">🌶</span>}
      {tags.includes("veg") && <span title="Vegetarian">🟢</span>}
    </span>
  );
}

export default function MenuGrid() {
  // Split sections into two balanced columns
  const mid = Math.ceil(menu.length / 2);
  const cols = [menu.slice(0, mid), menu.slice(mid)];

  return (
    <div className="mx-auto w-full max-w-6xl px-3 md:px-6">
      <div className="grid md:grid-cols-2 gap-10">
        {cols.map((sections, colIdx) => (
          <div key={colIdx} className="space-y-10">
            {sections.map((section) => {
              const id = slugify(section.category);
              return (
                <section
                  key={section.category}
                  id={id}
                  className="scroll-mt-24" // offset for sticky header
                  aria-labelledby={`${id}-heading`}
                >
                  {/* Section header */}
                  <h2
                    id={`${id}-heading`}
                    className="h-display subhead-gold text-2xl mb-4 text-center md:text-left"
                  >
                    {section.category}
                  </h2>

                  <ul className="divide-y divide-[rgba(212,175,55,0.18)] rounded-xl border border-[rgba(212,175,55,0.22)] bg-black/5">
                    {section.items.map((item) => (
                      <li key={item.name} className="p-4 md:p-5">
                        {/* Name + price */}
                        <div className="grid grid-cols-[1fr_auto] items-start gap-3">
                          <p className="font-medium text-amber-100 text-base md:text-[1.05rem] leading-tight">
                            {item.name}
                            <Badges tags={item.tags} />
                          </p>
                          <span className="font-semibold text-amber-100/95">
                            {priceText(item)}
                          </span>
                        </div>

                        {/* Description */}
                        {item.desc && (
                          <p className="mt-1.5 text-sm text-amber-100/75 leading-relaxed">
                            {item.desc}
                          </p>
                        )}

                        {/* Customize accordion */}
                        {item.options && (
                          <details className="group mt-3 rounded-lg border border-[rgba(212,175,55,0.28)] bg-black/10 overflow-hidden">
                            <summary
                              className={[
                                "flex items-center justify-between gap-3 cursor-pointer select-none",
                                "px-3 py-2 text-sm text-amber-100/80 hover:text-amber-100",
                                "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-primary)]/50",
                              ].join(" ")}
                            >
                              <span className="inline-flex items-center gap-2">
                                <svg
                                  aria-hidden
                                  viewBox="0 0 24 24"
                                  className="h-4 w-4 opacity-70"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="1.6"
                                >
                                  <path d="M12 3v3M6 6l2 2M18 6l-2 2M4 12h3M17 12h3M6 18l2-2M18 18l-2-2M12 18v3" />
                                </svg>
                                Customize
                              </span>
                              <svg
                                aria-hidden
                                viewBox="0 0 24 24"
                                className="h-4 w-4 transition-transform duration-200 group-open:rotate-180"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.6"
                              >
                                <path d="M6 9l6 6 6-6" />
                              </svg>
                            </summary>

                            <div className="h-px w-full bg-[rgba(212,175,55,0.22)]" />

                            <div className="px-3 pb-3 pt-2 grid gap-3 sm:grid-cols-2">
                              {Object.entries(item.options).map(([group, values]) => (
                                <div
                                  key={group}
                                  className="rounded-md border border-[rgba(212,175,55,0.22)] bg-black/5 p-3"
                                >
                                  <p className="mb-2 text-[11px] uppercase tracking-wide text-amber-100/70">
                                    {group}
                                  </p>
                                  <div className="flex flex-wrap gap-1.5">
                                    {values.map((v) => (
                                      <span
                                        key={v}
                                        className="inline-flex items-center rounded-full border border-[rgba(212,175,55,0.35)] bg-black/10 px-2.5 py-0.5 text-[11px] text-amber-100/85"
                                      >
                                        {v}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </details>
                        )}
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>
        ))}
      </div>

      {/* Legend */}
      <p className="mt-10 text-center text-xs text-amber-100/65">
        🌶 Spicy &nbsp;•&nbsp; 🟢 Vegetarian &nbsp;•&nbsp; 💲 tiers shown where prices vary
      </p>
    </div>
  );
}
