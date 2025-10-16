import Image from "next/image";
import OrnateFrame from "@/components/OrnateFrame";
import GoldButton from "@/components/GoldButton";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <OrnateFrame>
        {/* Centered two-column hero */}
        <section className="grid md:grid-cols-[1.15fr_1fr] gap-10 items-center">
          {/* Left: headline + actions */}
          <div className="space-y-4">
            <h1 className="h-display text-gold text-5xl leading-tight">
              Victor’s Classic Deli
            </h1>
            <p className="text-amber-100/90">
              Hot sandwiches, burgers, wraps, pizza & breakfast—made to order.
            </p>
            <div className="flex gap-3">
              <GoldButton href="/menu">View Menu</GoldButton>
              <a
                href="/apply"
                className="inline-block px-5 py-2 rounded-xl border border-[rgba(212,175,55,0.75)] text-amber-100/90 hover:text-amber-50"
              >
                Apply
              </a>
            </div>
          </div>

          {/* ✅ Right: centered image */}
          <div className="flex justify-center">
            <div className="relative h-64 w-[28rem] md:h-80 md:w-[32rem] rounded-2xl overflow-hidden border-gold">
              <Image
                src="/public/hero.jpg"
                alt="Signature sandwich"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>
      </OrnateFrame>

      {/* Info cards under hero */}
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { h: "Hours", p: "TBD" },
          { h: "Call", p: "(000) 000-0000" },
          { h: "Visit", p: "Nashville, TN (Mena Plaza)" },
        ].map((c) => (
          <div
            key={c.h}
            className="p-5 bg-cocoa-800/60 border-gold rounded-2xl text-center"
          >
            <h2 className="h-display text-gold text-xl mb-2">{c.h}</h2>
            <p className="text-amber-100/90">{c.p}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
