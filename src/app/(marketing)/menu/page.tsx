import OrnateFrame from "@/components/OrnateFrame";
import MenuGrid from "@/components/MenuGrid";
import SectionJump from "@/components/SectionJump";

export default function MenuPage() {
  return (
    <div className="space-y-12">
      <OrnateFrame>
        {/* Title */}
        <div className="text-center mb-8 md:mb-10">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#a88463] bg-[#e6d6c5] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[#7a563b] shadow-sm">
            Victor’s Classic Deli
          </p>

          <h1 className="h-display text-4xl md:text-5xl text-[#5a3d2b] uppercase tracking-[0.04em] font-bold mt-4 mb-2">
            Menu
          </h1>

          <p className="text-[#5f4735] text-sm md:text-base italic">
            Built with care, flavor, and purpose.
          </p>

          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-[#6f4d34]">
            <span>🌶 Spicy</span>
            <span>🟢 Vegetarian</span>
            <span>💲 Build Your Own / Variable Pricing</span>
          </div>

          <p className="mt-3 text-xs md:text-sm text-[#6f4d34]">
            Breakfast served 7:00 AM – 11:30 AM • Catering available
          </p>
        </div>

        {/* Compact corner control */}
        <div className="sticky top-16 z-20 flex justify-end mb-4">
          <SectionJump />
        </div>

        {/* Menu grid */}
        <div className="mt-2">
          <MenuGrid />
        </div>
      </OrnateFrame>
    </div>
  );
}