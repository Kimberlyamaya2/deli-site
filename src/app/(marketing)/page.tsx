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
          className="grid grid-cols-1 md:grid-cols-[1.15fr_1fr] items-center gap-6 md:gap-10"
        >
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
                href="/contact"
                className="inline-block px-5 py-2 rounded-xl border border-[rgba(212,175,55,0.75)] text-amber-100/90 hover:text-amber-50 text-center"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Right: image */}
          <div className="justify-self-stretch md:justify-self-end">
            <div className="relative w-full h-48 sm:h-56 md:h-80 md:w-[34rem] rounded-2xl overflow-hidden border-gold">
              <Image
                src="/hero.jpg"
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
            <h2 className="h-display text-gold text-xl mb-2">{c.h}</h2>
            <p className="text-amber-100/90">{c.p}</p>
          </div>
        ))}
      </div>

      {/* MENU SECTION */}
      <section
        id="menu"
        className="relative scroll-mt-20 space-y-6 group rounded-2xl border-gold p-4"
      >
        {/* Full-section link to /menu */}
        <SectionLinkOverlay href="/menu" label="Go to full Menu page" />

        <h2 className="h-display text-gold text-3xl flex items-center gap-2">
          Menu Highlights
          <span className="text-xs opacity-70 group-hover:opacity-100 transition">
            (click section to open full menu)
          </span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Classic Reuben", price: "$12", img: "/reuben.jpg" },
            { name: "Turkey Avocado", price: "$11", img: "/turkey.jpg" },
            { name: "Breakfast Panini", price: "$9", img: "/panini.jpg" },
          ].map((i) => (
            <div
              key={i.name}
              className="rounded-2xl border-gold overflow-hidden hover:-translate-y-1 transition"
            >
              <div className="relative h-48">
                <Image src={i.img} alt={i.name} fill className="object-cover" />
              </div>
              <div className="p-4 flex justify-between">
                <span>{i.name}</span>
                <span className="text-gold">{i.price}</span>
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
        <h2 className="h-display text-gold text-3xl mb-4">About Us</h2>
        <p className="text-amber-100/90 max-w-prose">
          Family-owned and operated since 1995, Victor’s Classic Deli serves
          Nashville with hearty meals and a touch of nostalgia. From freshly
          baked bread to house-made sauces, every bite tells our story.
        </p>
      </section>

      {/* VISIT SECTION */}
      <section
        id="visit"
        className="relative scroll-mt-20 group rounded-2xl border-gold p-4"
      >
        <SectionLinkOverlay href="/contact" label="Get directions & contact" />
        <h2 className="h-display text-gold text-3xl mb-2">Visit Us</h2>
        <p className="text-amber-100/90">Mena Plaza, Nashville, TN</p>
        <div className="rounded-xl border-gold overflow-hidden">
          <iframe
            title="Map"
            className="w-full h-72"
            src="https://www.google.com/maps/embed?pb=!1m18!..."
            loading="lazy"
          />
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="relative scroll-mt-20 group rounded-2xl border-gold p-4"
      >
        <SectionLinkOverlay href="/contact" label="Go to full Contact page" />
        <h2 className="h-display text-gold text-3xl mb-4">Contact Us</h2>
        <form className="max-w-md space-y-3 relative z-20">
          <input
            placeholder="Name"
            className="w-full px-4 py-2 bg-cocoa-800/60 border border-gold rounded-xl"
          />
          <input
            placeholder="Email"
            type="email"
            className="w-full px-4 py-2 bg-cocoa-800/60 border border-gold rounded-xl"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full px-4 py-2 bg-cocoa-800/60 border border-gold rounded-xl"
          />
          <GoldButton href="#">Send Message</GoldButton>
        </form>
      </section>
    </div>
  );
}
