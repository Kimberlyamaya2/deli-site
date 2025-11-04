import OrnateFrame from "@/components/OrnateFrame";
import MenuGrid from "@/components/MenuGrid";
import SectionPicker from "@/components/SectionPicker";

export default function MenuPage() {
  return (
    <div className="space-y-12">
      <OrnateFrame>
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <h1 className="h-display text-4xl md:text-5xl text-gold-200 tracking-wide mb-2">
            MENU
          </h1>
          <p className="text-amber-100/80 text-sm md:text-base italic">
            Built with care, flavor, and purpose.
          </p>
          <p className="mt-2 text-amber-100/70 text-xs">
            🌶 Spicy &nbsp;•&nbsp; 🟢 Vegetarian &nbsp;•&nbsp; 💲 Price tiers vary
          </p>
        </div>

        {/* Content layout with sidebar */}
        <div className="flex flex-col lg:flex-row gap-10">
          <SectionPicker />
          <div className="flex-1">
            <MenuGrid />
          </div>
        </div>
      </OrnateFrame>
    </div>
  );
}
