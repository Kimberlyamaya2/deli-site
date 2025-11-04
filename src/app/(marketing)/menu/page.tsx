import OrnateFrame from "@/components/OrnateFrame";
import MenuGrid from "@/components/MenuGrid";
import SectionJump from "@/components/SectionJump";

export default function MenuPage() {
  return (
    <div className="space-y-12">
      <OrnateFrame>
        {/* Title */}
        <div className="text-center mb-8 md:mb-10">
          <h1 className="h-display text-4xl md:text-5xl text-gold-200 tracking-wide mb-2">MENU</h1>
          <p className="text-amber-100/80 text-sm md:text-base italic">Built with care, flavor, and purpose.</p>
          <p className="mt-2 text-amber-100/70 text-xs">
            🌶 Spicy &nbsp;•&nbsp; 🟢 Vegetarian &nbsp;•&nbsp; 💲 Price tiers vary
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
