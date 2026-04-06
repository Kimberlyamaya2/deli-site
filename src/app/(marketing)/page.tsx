import Image from "next/image";
import OrnateFrame from "@/components/OrnateFrame";
import GoldButton from "@/components/GoldButton";
import SectionLinkOverlay from "@/components/SectionLinkOverlay";

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* HERO */}
      <OrnateFrame>
        <section
          id="home"
          className="grid grid-cols-1 md:grid-cols-[1.15fr_0.95fr] items-center gap-8 md:gap-12 py-8 sm:py-10"
        >
          <div className="space-y-5 max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#a88463] bg-[#efe1d0] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[#7a563b] shadow-sm">
              Est. 2025 • Classic Deli
            </div>

            <h1 className="h-display text-balance text-[clamp(2.7rem,7vw,4.8rem)] leading-[0.95] font-extrabold uppercase text-[#3b2a1f]">
              Victor’s
              <br />
              Classic Deli
            </h1>

            <p className="font-display italic text-[#5f4735] md:text-lg/relaxed text-base max-w-prose">
              From sunrise breakfasts to signature sandwiches - every bite made
              fresh, every flavor classic.
            </p>

            <div className="h-px w-36 rounded-full bg-gradient-to-r from-transparent via-[#8a5a2b] to-transparent" />

            <div className="flex gap-3 flex-col xs:flex-row sm:flex-row max-w-xs sm:max-w-none">
              <GoldButton
                href="/menu"
                className="border border-[#8f6b4f] bg-[#2b211b] text-white hover:bg-[#3a2d25] shadow-[0_8px_20px_rgba(43,33,27,0.14)]"
              >
                View Menu
              </GoldButton>

              <GoldButton
                href="/contact"
                className="border border-[#a88463] bg-[#f3e7db] text-[#2b211b] hover:bg-[#e2d1bf] shadow-[0_8px_20px_rgba(43,33,27,0.08)]"
              >
                Contact
              </GoldButton>
            </div>
          </div>

          <div className="justify-self-center md:justify-self-end w-full">
  <div
    className="
      relative overflow-hidden rounded-2xl
      border border-[#9f7a58]
      bg-[#d9c3ab]
      shadow-[0_20px_45px_rgba(43,33,27,0.18)]
      aspect-[5/4] sm:aspect-[4/3] md:aspect-[6/5]
      max-w-[95%] md:max-w-[30rem] mx-auto
      transition-all duration-300 ease-out
      hover:-translate-y-2 hover:shadow-[0_26px_55px_rgba(43,33,27,0.22)]
    "
  >
    <Image
      src="/hero.png"
      alt="Victor’s Signature Melt"
      fill
      className="object-cover object-center"
      priority
    />

    {/* stronger depth overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(36,24,16,0.18)] via-transparent to-transparent" />

    {/* bottom label — more contrast */}
    <div className="absolute bottom-0 left-0 w-full px-5 py-3 bg-[#f3e7db] border-t border-[#a88463]">
      <div className="flex items-center justify-between text-[#2b211b]">
        <p className="font-semibold text-sm sm:text-base">
          Victor’s Signature Melt
        </p>
        <span className="font-bold text-sm sm:text-base">$12</span>
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
          { h: "Call", p: "(615) 000-0000", link: "tel:0000000000" },
          {
            h: "Visit",
            p: "360 Wallace Rd, Nashville, TN 37211",
            link: "#visit",
          },
        ].map((c) => (
          <a
            key={c.h}
            href={c.link || "#"}
            className="p-5 bg-[#e2d1bf] border border-[#b99d84] rounded-2xl text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(43,33,27,0.06)]"
          >
            <h2 className="h-display text-[#5a3d2b] text-xl mb-2 font-semibold">
              {c.h}
            </h2>
            <p className="text-[#2b211b]">{c.p}</p>
          </a>
        ))}
      </div>

      {/* MENU */}
      <section id="menu" className="relative scroll-mt-20 space-y-8 py-6">
        <SectionLinkOverlay href="/menu" label="Go to full Menu page" />

        <div className="flex items-center justify-center gap-6 text-center">
          <span className="h-[1.5px] w-20 md:w-32 bg-[#b38a67] rounded-full" />
          <h2 className="h-display title-section text-3xl md:text-4xl">
            Menu Highlights
          </h2>
          <span className="h-[1.5px] w-20 md:w-32 bg-[#b38a67] rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Victor’s Chicken Bacon Ranch",
              price: "$12",
              img: "/chicken-bacon-ranch.jpg",
            },
            {
              name: "Spicy Chipotle Chicken",
              price: "$12",
              img: "/chipotle-chicken.jpg",
            },
            {
              name: "Classic Double Burger",
              price: "$13",
              img: "/testing.png",
            },
            {
              name: "Veggie Melt Croissant",
              price: "$10",
              img: "/veggie-croissant.jpg",
            },
            {
              name: "The Hot Chicken Burrito",
              price: "$12",
              img: "/chicken-burrito.jpg",
            },
            {
              name: "Chocolate Chip Pancakes",
              price: "$9",
              img: "/pancakes.jpg",
            },
          ].map((i) => (
            <div
              key={i.name}
              className="rounded-2xl border border-[#b99d84] overflow-hidden bg-[#e2d1bf] shadow-[0_10px_20px_rgba(43,33,27,0.05)] hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={i.img}
                  alt={i.name}
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute bottom-0 left-0 w-full px-5 py-3 bg-[rgba(245,235,225,0.96)] border-t border-[rgba(90,67,51,0.15)]">
                  <div className="flex items-center justify-between text-[#2b211b]">
                    <p className="font-medium text-sm sm:text-base">
                      {i.name}
                    </p>
                    <span className="font-semibold text-sm sm:text-base">
                      {i.price}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/menu"
            className="inline-flex items-center gap-2 rounded-xl border border-[#a88463] bg-[#e6d6c5] px-4 py-2 text-sm text-[#2b211b] hover:bg-[#ddcbb8] transition"
          >
            View Full Menu
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path d="M5 12h14" />
              <path d="m13 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="relative scroll-mt-20 rounded-2xl border border-[#b99d84] bg-[#e2d1bf] p-6 md:p-8 shadow-[0_10px_24px_rgba(43,33,27,0.04)]"
      >
        <SectionLinkOverlay href="/about" label="Read Victor’s full story" />

        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="h-display text-[#5a3d2b] text-3xl md:text-4xl mb-1 uppercase tracking-[0.04em] font-bold">
              Our Story
            </h2>
            <p className="text-[#4a3527] text-sm">
              Built on brotherhood, promise, and purpose.
            </p>
          </div>

          <span className="shrink-0 rounded-full border border-[#a88463] px-3 py-1 text-xs tracking-wide text-[#6f4d34] bg-[#e6d6c5]">
            Opening 2026
          </span>
        </div>

        <div className="mt-5 border-t border-[#c7ab90]" />

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <p className="md:col-span-2 text-[#2b211b] leading-relaxed max-w-prose">
            Welcome to Victor’s Classic Deli, where every sandwich tells a story
            of friendship, dedication, and a promise kept. This isn’t fast
            food, it’s food that means something. We’re getting everything right
            for our grand opening, and we can’t wait to welcome you.
          </p>

          <ul className="grid gap-3 text-[#2b211b]">
            {[
              "Classic deli done with care",
              "Nashville roots • Chicago inspiration",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 rounded-lg border border-[#bda186] bg-[#e6d6c5] px-3 py-2"
              >
                <span className="mt-1 h-2 w-2 rounded-full bg-[#8a5a2b]" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <details className="mt-6">
          <summary className="list-none inline-flex items-center gap-2 cursor-pointer rounded-xl border border-[#a88463] bg-[#e6d6c5] px-4 py-2 text-sm text-[#2b211b] hover:bg-[#ddcbb8] transition">
            Read the full story
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </summary>

          <div className="mt-4 text-[#2b211b] leading-relaxed max-w-prose space-y-4"></div>
        </details>
      </section>

      {/* SOCIAL PROOF */}
      <section className="text-center space-y-4">
        <div className="flex items-center justify-center gap-6">
          <span className="h-[1.5px] w-16 bg-[#b38a67] rounded-full" />
          <h3 className="h-display text-[#5a3d2b] text-2xl uppercase tracking-[0.04em] font-bold">
            What Folks Say
          </h3>
          <span className="h-[1.5px] w-16 bg-[#b38a67] rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            "“Tastes like home - can’t wait for the opening.”",
            "“Real deli energy. The bread? Unreal.”",
            "“You can feel the heart behind this.”",
          ].map((q) => (
            <blockquote
              key={q}
              className="rounded-xl border border-[#bda186] bg-[#e2d1bf] p-4 text-[#5a4333] italic"
            >
              {q}
            </blockquote>
          ))}
        </div>
      </section>

      {/* VISIT */}
      <section
        id="visit"
        className="relative scroll-mt-20 rounded-2xl border border-[#b99d84] bg-[#e2d1bf] p-4 space-y-3 shadow-[0_10px_24px_rgba(43,33,27,0.04)]"
      >
        <div className="relative z-10">
          <SectionLinkOverlay href="/contact" label="Get directions & contact" />

          <h2 className="h-display text-[#5a3d2b] text-3xl mb-1 uppercase tracking-[0.04em] font-bold">
            Visit Us
          </h2>
          <p className="text-[#2b211b] mb-3">Mena Plaza, Nashville, TN</p>
        </div>

        <a
          href="https://www.google.com/maps/place/360+Wallace+Rd,+Nashville,+TN+37211"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-xl border border-[#b99d84] overflow-hidden"
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

      {/* CONTACT */}
      <section className="relative rounded-2xl border border-[#b99d84] bg-[#e2d1bf] p-6 md:p-8 shadow-[0_10px_24px_rgba(43,33,27,0.04)]">
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 text-center md:text-left">
          <div>
            <h3 className="h-display text-[#5a3d2b] text-2xl md:text-3xl uppercase tracking-[0.04em] font-bold">
              Contact Us
            </h3>
            <p className="text-[#4a3527] text-sm md:text-base mt-1">
              We’d love to hear from you - reach out anytime.
            </p>
          </div>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=delibyvic@gmail.com&su=Inquiry%20from%20Victor%E2%80%99s%20Deli%20Website&body=Hi%20Victor%2C%0A%0A"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-[#8f6b4f] bg-[#2b211b] px-5 py-2.5 text-sm md:text-base text-white hover:bg-[#3a2d25] transition"
          >
            Email Us
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
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
            name: "Victor’s Classic Deli",
            address: {
              "@type": "PostalAddress",
              streetAddress: "360 Wallace Rd",
              addressLocality: "Nashville",
              addressRegion: "TN",
              postalCode: "37211",
              addressCountry: "US",
            },
            telephone: "+16150000000",
            servesCuisine: ["Deli", "American"],
            url: "https://deli-site-omega.vercel.app/",
            priceRange: "$$",
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "08:00",
                closes: "19:00",
              },
            ],
          }),
        }}
      />
    </div>
  );
}