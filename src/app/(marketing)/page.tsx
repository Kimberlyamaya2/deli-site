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
       <GoldButton
          href="/contact"
          className="border border-[rgba(212,175,55,0.75)] shadow-[0_8px_20px_rgba(212,175,55,0.18)] hover:shadow-[0_10px_24px_rgba(212,175,55,0.26)]"
        >
         Contact
        </GoldButton>
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
    { h: "Call", p: "(615) 000-0000",  link: "tel:0000000000" },
    { h: "Visit", p: "360 Wallace Rd, Nashville, TN 37211", link: "#visit" },
  ].map((c) => (
    <a
      key={c.h}
      href={c.link || "#"}
      className={[
        "p-5 bg-cocoa-800/60 border-gold rounded-2xl text-center",
        "transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(212,175,55,0.1)]",
        c.link ? "cursor-pointer" : "",
      ].join(" ")}
    >
      <h2 className="h-display title-section text-xl mb-2">{c.h}</h2>
      <p className="text-amber-100/90">{c.p}</p>
    </a>
  ))}
</div>

      
{/* MENU SECTION (rows/grid) */}
<section id="menu" className="relative scroll-mt-20 space-y-8 py-10">
  <SectionLinkOverlay href="/menu" label="Go to full Menu page" />

  {/* Centered heading with gold lines beside it */}
  <div className="flex items-center justify-center gap-6 text-center">
    <span className="h-[1px] w-24 md:w-40 bg-[var(--gold-primary)] opacity-60 rounded-full" />
    <h2 className="h-display subhead-gold text-3xl md:text-4xl tracking-wide uppercase">
      Menu Highlights
    </h2>
    <span className="h-[1px] w-24 md:w-40 bg-[var(--gold-primary)] opacity-60 rounded-full" />
  </div>

  {/* Grid (rows) */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
    {[
      { name: "Victor’s Chicken Bacon Ranch", price: "$12", img: "/chicken-bacon-ranch.jpg" },
      { name: "Spicy Chipotle Chicken",       price: "$12", img: "/chipotle-chicken.jpg" },
      { name: "Classic Double Burger",        price: "$13", img: "/testing.png" },
      { name: "Veggie Melt Croissant",        price: "$10", img: "/veggie-croissant.jpg" },
      { name: "The Hot Chicken Burrito",      price: "$12", img: "/chicken-burrito.jpg" },
      { name: "Chocolate Chip Pancakes",      price: "$9", img: "/pancakes.jpg" },
    ].map((i) => (
      <div
        key={i.name}
        className="rounded-2xl border border-gold/70 overflow-hidden bg-cocoa-900/50 shadow-[0_6px_20px_rgba(212,175,55,0.1)] hover:-translate-y-1 transition-transform duration-300"
      >
        <div className="relative aspect-[4/3]">
          <Image src={i.img} alt={i.name} fill className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,14,10,0.75)] via-transparent to-transparent" />
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

  {/* View full menu CTA */}
  <div className="text-center">
    <a
      href="/menu"
      className="inline-flex items-center gap-2 rounded-xl border border-gold/70 bg-black/10 px-4 py-2 text-sm text-amber-100/90 hover:bg-white/5 hover:border-gold transition"
    >
      View Full Menu
      <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M5 12h14" /><path d="m13 5 7 7-7 7" />
      </svg>
    </a>
  </div>
</section>


  {/* ABOUT / STORY SECTION (Coming Soon) */}
<section
  id="about"
  className="relative scroll-mt-20 group rounded-2xl border-gold overflow-hidden"
>
  {/* Make the whole card link to the story page, while keeping inner CTAs clickable */}
  <SectionLinkOverlay href="/about" label="Read Victor’s full story" />


  {/* soft glow */}
  <div className="absolute inset-0 bg-[radial-gradient(900px_300px_at_50%_-10%,rgba(212,175,55,0.10),transparent)]" />

  <div className="relative p-5 md:p-8">
    {/* header */}
    <div className="flex items-start justify-between gap-4">
      <div>
        <h2 className="h-display subhead-gold text-3xl md:text-4xl mb-1">
          Our Story
        </h2>
        <p className="text-amber-100/80 text-sm">
          Built on brotherhood, promise, and purpose.
        </p>
      </div>

      {/* status badge */}
      <span className="shrink-0 rounded-full border border-gold/70 px-3 py-1 text-xs tracking-wide text-amber-100/90 bg-black/20 shadow-[0_0_0_1px_rgba(212,175,55,0.15)_inset]">
        Opening 2026
      </span>
    </div>

    <div className="mt-5 border-t border-gold/30" />

    {/* teaser + quick facts */}
    <div className="mt-6 grid gap-6 md:grid-cols-3">
      <p className="md:col-span-2 text-amber-100/90 leading-relaxed max-w-prose">
        Welcome to Victor’s Classic Deli, where every sandwich tells a story of
        friendship, dedication, and a promise kept. This isn’t fast food, it’s
        food that means something. We’re getting everything right for our grand
        opening, and we can’t wait to welcome you.
      </p>

      <ul className="grid gap-3 text-amber-100/90">
        {[
          "Classic deli done with care",
          "Nashville roots • Chicago inspiration",
        ].map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 rounded-lg border border-gold/20 bg-black/10 px-3 py-2 group-hover:border-gold/40 transition"
          >
            <span className="mt-1 h-2 w-2 rounded-full bg-[--gold-primary]" />
            <span className="text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* full story (collapsible) */}
    <details className="mt-6 group/open">
      <summary className="list-none inline-flex items-center gap-2 cursor-pointer rounded-xl border border-gold/60 bg-black/20 px-4 py-2 text-sm text-amber-100/90 hover:bg-white/5 hover:border-gold transition">
        Read the full story
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className="h-4 w-4 transition group-open:rotate-180"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </summary>

      <div className="mt-4 text-amber-100/90 leading-relaxed max-w-prose space-y-4">
      </div>
    </details>

  </div>

  {/* hover ring */}
  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-[--gold-primary]/0 transition duration-300 group-hover:ring-2 group-hover:ring-[--gold-primary]/25" />
</section>

{/* SOCIAL PROOF */}
<section className="text-center space-y-4">
  <div className="flex items-center justify-center gap-6">
    <span className="h-[1px] w-16 bg-[var(--gold-primary)] opacity-50 rounded-full" />
    <h3 className="h-display subhead-gold text-2xl uppercase">What Folks Say</h3>
    <span className="h-[1px] w-16 bg-[var(--gold-primary)] opacity-50 rounded-full" />
  </div>
  <div className="grid md:grid-cols-3 gap-4">
    {[
      "“Tastes like home - can’t wait for the opening.”",
      "“Real deli energy. The bread? Unreal.”",
      "“You can feel the heart behind this.”",
    ].map((q) => (
      <blockquote
        key={q}
        className="rounded-xl border border-gold/50 bg-black/10 p-4 text-amber-100/90 italic"
      >
        {q}
      </blockquote>
    ))}
  </div>
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

{/* CONTACT BAND */}
<section className="relative rounded-2xl border-gold overflow-hidden">
  {/* soft gold background glow */}
  <div className="absolute inset-0 bg-[radial-gradient(600px_240px_at_50%_-20%,rgba(212,175,55,0.10),transparent)]" />

  <div className="relative p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 text-center md:text-left">
    <div>
      <h3 className="h-display subhead-gold text-2xl md:text-3xl">
        Contact Us
      </h3>
      <p className="text-amber-100/80 text-sm md:text-base mt-1">
        We’d love to hear from you - reach out anytime.
      </p>
    </div>

   <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=delibyvic@gmail.com&su=Inquiry%20from%20Victor%E2%80%99s%20Deli%20Website&body=Hi%20Victor%2C%0A%0A"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 rounded-xl border border-gold bg-black/20 px-5 py-2.5 text-sm md:text-base text-amber-100/90 hover:bg-white/5 hover:border-gold transition"
>
  Email Us
  <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M4 4h16v16H4z" stroke="none" />
    <path d="M4 4l8 7 8-7" />
  </svg>
</a>
  </div>
</section>


<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "name": "Victor’s Classic Deli",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "360 Wallace Rd",
        "addressLocality": "Nashville",
        "addressRegion": "TN",
        "postalCode": "37211",
        "addressCountry": "US"
      },
      "telephone": "+16150000000", /* Update with actual PHONE */
      "servesCuisine": ["Deli", "American"],
      "url": "https://deli-site-omega.vercel.app/", /* Update with actual URL */
      "priceRange": "$$",
      "openingHoursSpecification": [{
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        "opens": "08:00",
        "closes": "19:00"
      }]
    })
  }}
/>


    </div>
  );
}
