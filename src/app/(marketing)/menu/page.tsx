import OrnateFrame from "@/components/OrnateFrame";
import MenuGrid from "@/components/MenuGrid";

export default function MenuPage() {
  return (
    <div className="space-y-12">
      <OrnateFrame>
        <h1 className="h-display text-gold text-4xl mb-6 text-center">Menu</h1>
        <MenuGrid />
      </OrnateFrame>
    </div>
  );
}
