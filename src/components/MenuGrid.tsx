import type { Menu } from "@/types/menu";
import rawMenu from "@/data/menu.json";

const menu = rawMenu as unknown as Menu;

function renderPrice(item: Menu[number]["items"][number]) {
  if (typeof item.price === "number") return `$${item.price.toFixed(2)}`;
  if (typeof item.priceTier === "number") {
    const tier = Math.max(1, Math.min(5, item.priceTier));
    return "💲".repeat(tier);
  }
  return "";
}

export default function MenuGrid() {
  return (
    <div className="flex justify-center">
      <div className="grid gap-8 md:grid-cols-2 pt-4 pb-6 max-w-6xl w-full">
        {menu.map((section) => (
          <section key={section.category}>
            <h2 className="h-display text-gold text-2xl mb-4 text-center md:text-left">
              {section.category}
            </h2>
            <ul className="space-y-3">
              {section.items.map((item) => (
                <li
                  key={item.name}
                  className="flex justify-between gap-4 py-2 border-b border-[rgba(212,175,55,0.25)]"
                >
                  <div>
                    <p className="font-medium">
                      {item.name}{" "}
                      {item.tags?.includes("spicy") && <span>🌶</span>}
                      {item.tags?.includes("veg") && <span>🟢</span>}
                    </p>
                    {item.desc && (
                      <p className="text-sm text-amber-100/70">{item.desc}</p>
                    )}
                  </div>
                  <span className="font-semibold whitespace-nowrap text-amber-100">
                    {renderPrice(item)}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
