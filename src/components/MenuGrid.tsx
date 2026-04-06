import type { Menu } from "@/types/menu";
import rawMenu from "@/data/menu.json";

const menu = rawMenu as Menu;

const slugify = (s: string) =>
  s
    .replace(/^[^A-Za-z0-9]+/, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

function priceText(item: Menu[number]["items"][number]) {
  if (typeof item.price === "number") {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(item.price);
  }

  if (typeof item.priceTier === "number") {
    return "💲".repeat(Math.max(1, Math.min(5, item.priceTier)));
  }

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

function sectionTone(category: string) {
  const c = category.toLowerCase();

  if (c.includes("catering")) {
    return {
      card: "bg-[#dcc7b2]",
      border: "border-[#9f7a58]",
      divide: "divide-[#b89577]",
      heading: "text-[#4a3225]",
    };
  }

  if (c.includes("build your own") || c.includes("byo")) {
    return {
      card: "bg-[#e6d6c5]",
      border: "border-[#b08b6b]",
      divide: "divide-[#c2a486]",
      heading: "text-[#6a4a34]",
    };
  }

  if (c.includes("breakfast")) {
    return {
      card: "bg-[#e4d3c0]",
      border: "border-[#ad8867]",
      divide: "divide-[#c4a789]",
      heading: "text-[#5a3d2b]",
    };
  }

  return {
    card: "bg-[#e2d1bf]",
    border: "border-[#b99d84]",
    divide: "divide-[#c7ab90]",
    heading: "text-[#5a3d2b]",
  };
}

export default function MenuGrid() {
  const mid = Math.ceil(menu.length / 2);
  const cols = [menu.slice(0, mid), menu.slice(mid)];

  return (
    <div className="mx-auto w-full max-w-6xl px-3 md:px-6">
      <div className="grid md:grid-cols-2 gap-10">
        {cols.map((sections, colIdx) => (
          <div key={colIdx} className="space-y-10">
            {sections.map((section) => {
              const id = slugify(section.category);
              const tone = sectionTone(section.category);

              return (
                <section
                  key={section.category}
                  id={id}
                  className="scroll-mt-24"
                  aria-labelledby={`${id}-heading`}
                >
                  <div className="mb-4">
                    <h2
                      id={`${id}-heading`}
                      className={`h-display ${tone.heading} text-2xl text-center md:text-left uppercase tracking-[0.04em] font-bold`}
                    >
                      {section.category}
                    </h2>
                  </div>

                  <ul
                    className={[
                      "rounded-xl border shadow-[0_8px_20px_rgba(43,33,27,0.05)] overflow-hidden",
                      tone.card,
                      tone.border,
                      tone.divide,
                      "divide-y",
                    ].join(" ")}
                  >
                    {section.items.map((item) => (
                      <li key={item.name} className="p-4 md:p-5">
                        <div className="grid grid-cols-[1fr_auto] items-start gap-3">
                          <p className="font-medium text-[#2b211b] text-base md:text-[1.05rem] leading-tight">
                            {item.name}
                            <Badges tags={item.tags} />
                          </p>

                          <span className="font-semibold text-[#4a3225] whitespace-nowrap">
                            {priceText(item)}
                          </span>
                        </div>

                        {item.desc && (
                          <p className="mt-1.5 text-sm text-[#5a4333] leading-relaxed">
                            {item.desc}
                          </p>
                        )}

                        {item.options && (
                          <details className="group mt-3 rounded-lg border border-[#b99d84] bg-[#eadbca] overflow-hidden">
                            <summary
                              className={[
                                "flex items-center justify-between gap-3 cursor-pointer select-none",
                                "px-3 py-2 text-sm text-[#5a4333] hover:text-[#2b211b]",
                                "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8a5a2b]/30",
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

                            <div className="h-px w-full bg-[#c7ab90]" />

                            <div className="px-3 pb-3 pt-2 grid gap-3 sm:grid-cols-2">
                              {Object.entries(item.options).map(([group, values]) => (
                                <div
                                  key={group}
                                  className="rounded-md border border-[#bda186] bg-[#f3e7db] p-3"
                                >
                                  <p className="mb-2 text-[11px] uppercase tracking-wide text-[#6f4d34]">
                                    {group}
                                  </p>

                                  <div className="flex flex-wrap gap-1.5">
                                    {values.map((v) => (
                                      <span
                                        key={v}
                                        className="inline-flex items-center rounded-full border border-[#a88463] bg-[#eadbca] px-2.5 py-0.5 text-[11px] text-[#5a4333]"
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

      <div className="mt-10 text-center">
        <p className="text-xs text-[#6f4d34]">
          🌶 Spicy &nbsp;•&nbsp; 🟢 Vegetarian &nbsp;•&nbsp; 💲 tiers shown where prices vary
        </p>
        <p className="mt-2 text-[11px] text-[#7a563b]">
          Some items include complimentary sides or have add-on pricing listed in the section details.
        </p>
      </div>
    </div>
  );
}