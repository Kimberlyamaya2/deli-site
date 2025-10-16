import OrnateFrame from "@/components/OrnateFrame";
import MenuGrid from "@/components/MenuGrid";

export default function MenuPage() {
  return (
    <div className="space-y-12">
      <OrnateFrame>
        <div className="text-center mb-8">
          <h1 className="h-display text-gold text-4xl mb-2">Menu</h1>
        </div>

        {/* Centered menu grid */}
        <div className="flex justify-center">
          <div className="w-full max-w-6xl">
            <MenuGrid />
          </div>
        </div>
      </OrnateFrame>
    </div>
  );
}
