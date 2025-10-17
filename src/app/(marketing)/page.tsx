import Image from "next/image";
import OrnateFrame from "@/components/OrnateFrame";
import GoldButton from "@/components/GoldButton";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <OrnateFrame>
        {/* Centered two-column hero */}
        <section className="grid grid-cols-1 md:grid-cols-[1.15fr_1fr] items-center gap-6 md:gap-10">
  {/* Left: headline + actions */}
  <div className="space-y-4">
    <h1 className="h-display text-gold text-[clamp(1.75rem,8vw,3.5rem)] leading-tight text-balance">
      Victor’s Classic Deli
    </h1>

    <p className="text-amber-100/90 text-sm md:text-base max-w-prose">
      Hot sandwiches, burgers, wraps, pizza & breakfast—made to order.
    </p>

    <div className="flex gap-3 flex-col xs:flex-row sm:flex-row max-w-xs sm:max-w-none">
      <GoldButton href="/menu">View Menu</GoldButton>
      <a
        href="/apply"
        className="inline-block px-5 py-2 rounded-xl border border-[rgba(212,175,55,0.75)] text-amber-100/90 hover:text-amber-50 text-center"
      >
        Apply
      </a>
    </div>
  </div>

  {/* Right: image – smaller on mobile, pushed right on md+ */}
  <div className="justify-self-stretch md:justify-self-end">
    <div className="relative w-full h-48 sm:h-56 md:h-80 md:w-[34rem] rounded-2xl overflow-hidden border-gold">
      <Image
        src="/images/hero.jpg"
        alt="Signature sandwich"
        fill
        sizes="(min-width: 1024px) 34rem, (min-width: 640px) 60vw, 90vw"
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
