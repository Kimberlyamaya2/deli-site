import Image from "next/image";
import OrnateFrame from "@/components/OrnateFrame";
import GoldButton from "@/components/GoldButton";
import SectionLinkOverlay from "@/components/SectionLinkOverlay";

export default function HomePage() {
  return (
    <div className="space-y-20">
      {/* HERO */}
      <OrnateFrame>
  <section
    id="home"
    className={[
      // grid setup: slightly more text space, tighter vertical rhythm
      "grid grid-cols-1 md:grid-cols-[1.2fr_0.9fr] items-center",
      "gap-4 md:gap-8 lg:gap-10",
      // trimmed top/bottom padding
      "py-6 sm:py-10",
    ].join(" ")}
  >
    {/* Left: headline + actions */}
    <div className="space-y-5 max-w-xl">
      <div className="inline-flex items-center gap-2 rounded-full border border-gold/60 bg-cocoa-800/60 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-gold-200/90">
        Est. 2025 • Classic Deli
      </div>

      <h1
        className={[
          "h-display font-display leading-tight text-balance",
          "text-[clamp(2.25rem,7vw,4.25rem)] font-semibold text-gold-200 uppercase",
          "[text-shadow:0_0_10px_rgba(246,227,154,0.6),0_2px_6px_rgba(0,0,0,0.45)]",
        ].join(" ")}
      >
        Victor’s Classic Deli
      </h1>

      <p className="font-display italic text-gold-100 md:text-lg/relaxed text-base max-w-prose">
        From sunrise breakfasts to signature sandwiches - every bite made fresh, every flavor classic.
      </p>

      <div className="h-px w-32 bg-gradient-to-r from-gold-700/60 via-gold-400/70 to-gold-700/60 rounded-full" />

      <div className="flex gap-3 flex-col xs:flex-row sm:flex-row max-w-xs sm:max-w-none">
        <GoldButton
          href="/menu"
          className="border border-[rgba(212,175,55,0.75)] shadow-[0_8px_20px_rgba(212,175,55,0.18)] hover:shadow-[0_10px_24px_rgba(212,175,55,0.26)]"
        >
          View Menu
        </GoldButton>
        <a
          href="/contact"
          className="inline-block px-5 py-2 rounded-xl border border-[rgba(212,175,55,0.75)] text-amber-100/90 hover:text-amber-50 hover:bg-[rgba(212,175,55,0.08)] hover:shadow-[0_8px_24px_rgba(212,175,55,0.18)] text-center transition"
        >
          Contact
        </a>
      </div>
    </div>

{/* Right: image */}
<div className="justify-self-center md:justify-self-end w-full">
  <div
    className={[
      "relative overflow-hidden rounded-2xl border border-gold/70",
      "bg-cocoa-900/60 shadow-[0_6px_24px_rgba(212,175,55,0.15)]",
      // Taller, square-like balance
      "aspect-[5/4] sm:aspect-[4/3] md:aspect-[6/5]",
      "max-w-[95%] md:max-w-[30rem] mx-auto",
      "transition-all duration-300 ease-out",
      "hover:shadow-[0_10px_30px_rgba(212,175,55,0.18)] hover:scale-[1.01]",
    ].join(" ")}
  >
    {/* Image */}
    <Image
      src="/hero.png"
      alt="Victor’s Signature Melt"
      fill
      sizes="(min-width: 1024px) 30rem, (min-width: 768px) 55vw, 90vw"
      className="object-cover object-center scale-[1.02]"
      priority
    />

    {/* Warm vignette overlay for depth */}
    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,14,10,0.65)] via-[rgba(26,14,10,0.25)] to-transparent" />

    {/* Caption bar (dark brown, not black) */}
    <div className="absolute bottom-0 left-0 w-full px-5 py-3 bg-[rgba(26,14,10,0.85)] border-t border-[rgba(212,175,55,0.25)]">
      <div className="flex items-center justify-between text-gold-100">
        <p className="font-medium text-sm sm:text-base tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
          Victor’s Signature Melt
        </p>
        <span className="font-semibold text-sm sm:text-base drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
          $12
        </span>
      </div>
    </div>
  </div>
</div>

  </section>
</OrnateFrame>


      {/* INFO CARDS */}
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { h: "Hours", p: "Mon–Sat: 8AM–7PM" },
          { h: "Call", p: "(000) 000-0000" },
          { h: "Visit", p: "Mena Plaza, Nashville, TN" },
        ].map((c) => (
          <div
            key={c.h}
            className="p-5 bg-cocoa-800/60 border-gold rounded-2xl text-center"
          >
          <h2 className="h-display title-section text-xl mb-2">{c.h}</h2>
            <p className="text-amber-100/90">{c.p}</p>
          </div>
        ))}
      </div>
      
      {/* MENU SECTION */}
<section
  id="menu"
  className="relative scroll-mt-20 space-y-6 group rounded-2xl border-gold p-4"
>
  {/* Full-section link */}
  <SectionLinkOverlay href="/menu" label="Go to full Menu page" />

  <h2 className="h-display subhead-gold text-3xl flex items-center gap-2">
    Menu Highlights
  </h2>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      { name: "Victor’s Chicken Bacon Ranch", price: "$12", img: "/chicken-bacon-ranch.jpg" },
      { name: "Victor’s Spicy Chipotle Chicken", price: "$12", img: "/chipotle-chicken.jpg" },
      { name: "Victor’s Classic Double Burger", price: "$13", img: "/testing.png" },
    ].map((i) => (
      <div
        key={i.name}
        className="rounded-2xl border border-gold/70 overflow-hidden bg-cocoa-900/50 shadow-[0_6px_20px_rgba(212,175,55,0.1)] hover:-translate-y-1 transition-transform duration-300"
      >
        {/* Image */}
        <div className="relative h-52 sm:h-56 md:h-64">
          <Image src={i.img} alt={i.name} fill className="object-cover object-center" />
          {/* Warm bottom overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,14,10,0.75)] via-transparent to-transparent" />
          {/* Caption */}
          <div className="absolute bottom-0 left-0 w-full px-5 py-3 bg-[rgba(26,14,10,0.85)] border-t border-[rgba(212,175,55,0.25)]">
            <div className="flex items-center justify-between text-gold-100">
              <p className="font-medium text-sm sm:text-base tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                {i.name}
              </p>
              <span className="font-semibold text-sm sm:text-base drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                {i.price}
              </span>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* ABOUT SECTION */}
      <section
        id="about"
        className="relative scroll-mt-20 group hover:bg-white/5 transition rounded-2xl border-gold p-4"
      >
        <SectionLinkOverlay href="/about" label="Read more About us" />
   <h2 className="h-display subhead-gold text-3xl mb-4">About Us</h2>
        <p className="text-amber-100/90 max-w-prose">
          Family-owned and operated since 1995, Victor’s Classic Deli serves
          Nashville with hearty meals and a touch of nostalgia. From freshly
          baked bread to house-made sauces, every bite tells our story.
        </p>
      </section>

    {/* VISIT SECTION */}
<section
  id="visit"
  className="relative scroll-mt-20 group rounded-2xl border-gold p-4 space-y-3"
>
  {/* Only overlay the text area, not the map */}
  <div className="relative z-10">
    <SectionLinkOverlay
      href="/contact"
      label="Get directions & contact"
    />

    <h2 className="h-display subhead-gold text-3xl mb-1">Visit Us</h2>
    <p className="text-amber-100/90 mb-3">
      Mena Plaza, Nashville, TN
    </p>
  </div>

  {/* Map box */}
  <a
    href="https://www.google.com/maps/place/360+Wallace+Rd,+Nashville,+TN+37211"
    target="_blank"
    rel="noopener noreferrer"
    className="block rounded-xl border border-gold/70 overflow-hidden shadow-[0_6px_20px_rgba(212,175,55,0.1)] transition-transform duration-300 hover:scale-[1.01] hover:shadow-[0_8px_24px_rgba(212,175,55,0.15)]"
  >
    <iframe
      title="Victor’s Classic Deli Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.318067527977!2d-86.7227287!3d36.0787653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88646f986abc2f1d%3A0x7c60b60477c4a08b!2s360%20Wallace%20Rd%2C%20Nashville%2C%20TN%2037211!5e0!3m2!1sen!2sus!4v1730316000000!5m2!1sen!2sus"
      width="100%"
      height="300"
      style={{ border: 0, pointerEvents: "none" }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="w-full h-72 md:h-80"
    ></iframe>
  </a>
</section>

    </div>
  );
}
