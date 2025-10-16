import Image from "next/image";
import OrnateFrame from "@/components/OrnateFrame";
import GoldButton from "@/components/GoldButton";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <OrnateFrame>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h1 className="h-display text-gold text-5xl leading-tight">Victor’s Classic Deli</h1>
            <p className="text-amber-100/90">Hot sandwiches, burgers, wraps, pizza & breakfast—made to order.</p>
            <div className="flex gap-3">
              <GoldButton href="/menu">View Menu</GoldButton>
              <a href="/catering" className="inline-block px-5 py-2 rounded-xl border border-gold-700 text-amber-100/90 hover:text-amber-50">
                Catering
              </a>
            </div>
          </div>
          <div className="relative h-56 md:h-72 rounded-2xl overflow-hidden border-gold">
            <Image src="/images/hero.jpg" alt="Signature sandwich" fill className="object-cover" priority />
          </div>
        </div>
      </OrnateFrame>

      {/* hours + location in gold cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { h: "Hours", p: "Mon–Sat 10am–6pm · Sun Closed" },
          { h: "Call", p: "(555) 123-4567" },
          { h: "Visit", p: "123 Main St, Your City" },
        ].map((c) => (
          <div key={c.h} className="p-5 bg-cocoa-800/60 border-gold">
            <h2 className="h-display text-gold text-xl mb-2">{c.h}</h2>
            <p className="text-amber-100/90">{c.p}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
