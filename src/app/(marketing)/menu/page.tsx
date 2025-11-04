import OrnateFrame from "@/components/OrnateFrame";
import MenuGrid from "@/components/MenuGrid";
import SectionPicker from "@/components/SectionPicker";

export default function MenuPage() {
  return (
    <div className="space-y-12">
      <OrnateFrame>
        {/* HEADER HERO SECTION */}
        <div className="text-center mb-10 md:mb-12">
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

        {/* SECTION PICKER (now in elegant frame) */}
        <div className="relative mb-10">
          <div className="rounded-2xl border border-gold/40 bg-[#1a100c]/80 px-4 py-4 md:py-5 shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
            <SectionPicker />
          </div>
        </div>

        {/* MENU CONTENT GRID */}
        <div className="mt-10">
          <MenuGrid />
        </div>
      </OrnateFrame>
    </div>
  );
}
