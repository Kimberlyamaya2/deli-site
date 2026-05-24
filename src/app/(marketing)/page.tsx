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
 className="
  flex justify-center
  pt-2 pb-0 md:pt-6 md:pb-1
  max-w-6xl mx-auto
"
>
  <div className="max-w-4xl text-center space-y-4">
    <div className="inline-flex items-center gap-2 rounded-full border border-[#b8926d] bg-[#f3e6d8] px-4 py-1 text-[11px] uppercase tracking-[0.2em] text-[#7a563b] shadow-sm">
      Est. 2026 • Classic Deli
    </div>

   <h1
  className="
    h-display
    text-balance
    text-[clamp(2.5rem,5vw,4.5rem)]
    leading-[0.95]
    font-extrabold
    uppercase
    tracking-[-0.02em]
    text-[#3b2a1f]
    whitespace-nowrap
  "
>
  Victor’s Classic Deli
</h1>

    <p
      className="
        font-display
        italic
        text-[#5f4735]
        text-lg md:text-[1.35rem]
        leading-relaxed
        max-w-2xl
        mx-auto
      "
    >
      From sunrise breakfasts to signature sandwiches,
      every bite is made fresh, bold, and unmistakably classic.
    </p>

    <div className="flex justify-center">
      <div className="h-px w-40 rounded-full bg-gradient-to-r from-transparent via-[#8a5a2b] to-transparent" />
    </div>

    {/* FEATURE ROW */}
    <div
      className="
        flex flex-wrap justify-center gap-2
        text-[12px] uppercase tracking-[0.16em]
        text-[#7a563b]
      "
    >
      <span className="rounded-full border border-[#c7ab8f] bg-[#f3e7db] px-4 py-2">
        Breakfast All Day
      </span>

      <span className="rounded-full border border-[#c7ab8f] bg-[#f3e7db] px-4 py-2">
        Signature Subs
      </span>

      <span className="rounded-full border border-[#c7ab8f] bg-[#f3e7db] px-4 py-2">
        Smash Burgers
      </span>

      <span className="rounded-full border border-[#c7ab8f] bg-[#f3e7db] px-4 py-2">
        Fresh Smoothies
      </span>
    </div>

<div className="flex justify-center gap-4 pt-8">

     <GoldButton
  href="https://order.toasttab.com/online/victors-360-wallace-rd-nashville-tn-37211-united-states"
  target="_blank"
  rel="noopener noreferrer"
        className="
          border border-[#8f6b4f]
          bg-[#2b211b]
          text-white
          hover:bg-[#3a2d25]
          shadow-[0_10px_24px_rgba(43,33,27,0.18)]
        "
      >
        View Menu
      </GoldButton>

      <GoldButton
        href="/contact"
        className="
          border border-[#b8926d]
          bg-[#f5ebe0]
          text-[#2b211b]
          hover:bg-[#ead8c5]
        "
      >
        Contact
      </GoldButton>

    </div>

  </div>
</section>
      </OrnateFrame>
{/* PAGE WRAPPER */}
<div className="space-y-12 bg-[#f1e7db]">

  {/* INFO CARDS */}
  <div className="grid md:grid-cols-3 gap-6">

    {[
      { h: "Hours", p: "Mon–Sat: 7AM–9PM, Closed Sundays" },
      { h: "Call", p: "(615) 490-3544", link: "tel:6154903544" },
      {
        h: "Visit",
        p: "360 Wallace Rd, Nashville, TN 37211",
        link: "#visit",
      },
    ].map((c) => (

      <a
        key={c.h}
        href={c.link || "#"}
        className="
          p-4
          bg-[#eadccf]
          border border-[#c4a17f]
          rounded-2xl
          text-center
          shadow-[0_4px_12px_rgba(43,33,27,0.05)]
          transition-all duration-300
          hover:-translate-y-1
          hover:shadow-[0_10px_22px_rgba(43,33,27,0.08)]
        "
      >

        <h2 className="h-display text-[#4a2f20] text-xl mb-2 font-semibold">
          {c.h}
        </h2>

        <p className="text-[#2b211b]">
          {c.p}
        </p>

      </a>

    ))}

  </div>

{/* HOUSE FAVORITES */}
<section
  id="menu"
  className="
    relative scroll-mt-20
    rounded-[40px]
    bg-[#e4d2bf]
    px-8 md:px-12
    py-12 md:py-14
    space-y-12
    border border-[#cfb093]
    shadow-[0_18px_40px_rgba(43,33,27,0.07)]
  "
>

 <SectionLinkOverlay
  href="https://order.toasttab.com/online/victors-360-wallace-rd-nashville-tn-37211-united-states"
  label="Open Full Menu"
/>

  {/* TITLE */}
  <div className="flex items-center justify-center gap-6 text-center">

    <span className="h-[1.5px] w-20 md:w-36 bg-[#8a5a2b] rounded-full" />

    <h2
      className="
        text-[#5a3d2b]
        text-4xl md:text-5xl
        tracking-[0.02em]
        font-semibold
      "
      style={{
        fontFamily: 'Cormorant Garamond',
      }}
    >
      HOUSE FAVORITES
    </h2>

    <span className="h-[1.5px] w-20 md:w-36 bg-[#8a5a2b] rounded-full" />

  </div>

  {/* GRID */}
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

    {[
      {
        category: "Hot Signature Subs",
        name: "Victor’s Chicken Bacon Ranch",
        desc: "Chicken, turkey bacon, peppers, onions & ranch",
        price: "$13.99",
      },
      {
        category: "Hot Signature Subs",
        name: "Narajs Famous Butter Chicken",
        desc: "Butter chicken sauce, mozzarella & fried onion",
        price: "$14.99",
      },
      {
        category: "Burgers",
        name: "Victors Rise & Shine",
        desc: "Two beef patties with two slices of American yellow cheese, lettuce, fried egg, turkey bacon, tomato, avocado, and onions. Served with Big Vic Sauce",
        price: "$10.99",
      },
      {
        category: "Pizza",
        name: "Victors Meat Lover’s Pizza",
        desc: "16 inch crust layered with tomato sauce, a mix of turkey pepperoni, turkey bacon, and beef sausage, topped with mozzarella cheese, finished with garlic sauce",
        price: "$19.99",
      },
      {
        category: "Breakfast Burritos",
        name: "Victor’s Nashville HOT",
        desc: "Eggs, turkey bacon, grilled onions & peppers, buffalo fried chicken, American cheese, hashbrown patty, ranch, and Nashville hot sauce.",
        price: "$10.99",
      },
      {
        category: "Smoothies",
        name: "Island Smoothie",
        desc: "Coconut, strawberries & pineapple",
        price: "$7.99",
      },
    ].map((i) => (

      <div
        key={i.name}
        className="
  min-h-[160px]
  rounded-[24px]
  border border-[#d2b293]
  bg-[#fffaf5]
  px-6 py-5
          shadow-[0_10px_24px_rgba(43,33,27,0.08)]
          transition-all duration-300 ease-out
          hover:-translate-y-1
          hover:shadow-[0_18px_34px_rgba(43,33,27,0.14)]
        "
      >

        <div
          className="uppercase text-[#8a6240]"
          style={{
            fontFamily: 'Inter',
            fontSize: '11px',
            letterSpacing: '0.18em',
          }}
        >
          {i.category}
        </div>

       <div className="h-px w-12 bg-[#8a5a2b] my-3 rounded-full" />
        <div className="flex items-start justify-between gap-6">

          <div className="flex-1 min-w-0">

            <h3
              className="text-[#2b211b] leading-[0.92]"
              style={{
                fontFamily: 'Cormorant Garamond',
                fontSize: '28px',
                fontWeight: 600,
                letterSpacing: '-0.02em',
              }}
            >
              {i.name}
            </h3>

            <p
              className="text-[#5f4735] mt-2"
              style={{
                fontFamily: 'Inter',
                fontSize: '14px',
                lineHeight: 1.35,
              }}
            >
              {i.desc}
            </p>

          </div>

          <div
            className="shrink-0 text-[#7a563b]"
            style={{
              fontFamily: 'Cormorant Garamond',
              fontSize: '24px',
              fontWeight: 700,
              lineHeight: 1,
            }}
          >
            {i.price}
          </div>

        </div>

      </div>

    ))}

  </div>

  {/* BUTTON */}
  <div className="text-center pt-2">

    <a
      href="https://order.toasttab.com/online/victors-360-wallace-rd-nashville-tn-37211-united-states"
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex items-center gap-2
        rounded-xl
        border border-[#8f6b4f]
        bg-[#2b211b]
        px-5 py-2.5
        text-sm
        text-white
        shadow-[0_8px_18px_rgba(43,33,27,0.14)]
        hover:bg-[#3a2d25]
        transition-all duration-200
      "
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
  className="
    relative scroll-mt-20
    rounded-[32px]
    border border-[#cfb093]
  bg-[#eadccf]
    p-8 md:p-10
    shadow-[0_12px_30px_rgba(43,33,27,0.08)]
  "
>

  <SectionLinkOverlay
    href="/about"
    label="Read Victor’s full story"
  />

  <div className="flex items-start justify-between gap-4">

    <div>

      <h2
        className="
          text-[#5a3d2b]
          text-4xl md:text-5xl
          tracking-[0.02em]
          font-semibold
        "
        style={{
          fontFamily: 'Cormorant Garamond',
        }}
      >
        OUR STORY
      </h2>

      <p className="text-[#4a3527] text-sm mt-1">
        Built on brotherhood, promise, and purpose.
      </p>

    </div>

    <span className="shrink-0 rounded-full border border-[#d2b293] px-3 py-1 text-xs tracking-wide text-[#6f4d34] bg-[#fffaf5]">
      Opening 2026
    </span>

  </div>

  <div className="mt-6 border-t border-[#d7b99d]" />

  <div className="mt-8 grid gap-8 md:grid-cols-3">

    <p className="md:col-span-2 text-[#2b211b] leading-relaxed max-w-prose text-[15px]">
      Welcome to Victor’s Classic Deli, where every sandwich tells a story
      of friendship, dedication, and a promise kept. This isn’t fast
      food, it’s food that means something. We’re getting everything right
      for our grand opening, and we can’t wait to welcome you.
    </p>

    <ul className="grid gap-4 text-[#2b211b]">

      {[
        "Classic deli done with care",
        "Nashville roots • Chicago inspiration",
      ].map((item) => (

        <li
          key={item}
          className="
            flex items-start gap-2
            rounded-xl
            border border-[#d8bea4]
            bg-[#fffaf5]
            px-4 py-3
            shadow-[0_6px_16px_rgba(43,33,27,0.04)]
          "
        >

          <span className="mt-1 h-2 w-2 rounded-full bg-[#8a5a2b]" />

          <span className="text-sm">
            {item}
          </span>

        </li>

      ))}

    </ul>

  </div>

    <details className="mt-6">
          <summary className="list-none inline-flex items-center gap-2 cursor-pointer rounded-xl border border-[#a88463] bg-[#4a2f20] px-4 py-2 text-sm text-[#fffaf5] hover:bg-[#362117] shadow-[0_8px_18px_rgba(43,33,27,0.14)] transition">
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

</div>

{/* SOCIAL PROOF */}
<section
  className="
    rounded-[28px]
    bg-[#e6d5c4]
    px-6 py-8
    space-y-6
  "
>

  <div className="flex items-center justify-center gap-6">

    <span className="h-[1.5px] w-16 bg-[#b38a67] rounded-full" />

    <h3
      className="
        text-[#5a3d2b]
        text-3xl md:text-4xl
        tracking-[0.02em]
        font-semibold
      "
      style={{
        fontFamily: 'Cormorant Garamond',
      }}
    >
      WHAT FOLKS SAY
    </h3>

    <span className="h-[1.5px] w-16 bg-[#b38a67] rounded-full" />

  </div>

  <div className="grid md:grid-cols-3 gap-5">

    {[
      "“Tastes like home - can’t wait for the opening.”",
      "“Real deli energy. The bread? Unreal.”",
      "“You can feel the heart behind this.”",
    ].map((q) => (

      <blockquote
        key={q}
        className="
          rounded-2xl
          border border-[#c49e79]
          bg-[#fffaf5]
          px-8 py-6
          shadow-[0_8px_20px_rgba(43,33,27,0.06)]
          italic
          text-[#5a3d2b]
        "
      >
        {q}
      </blockquote>

    ))}

  </div>

</section>

      {/* VISIT */}
     <section
  id="visit"
  className="
    relative scroll-mt-20
    rounded-[32px]
    border border-[#cfb093]
   bg-[#eadccf]
    p-8
    shadow-[0_14px_36px_rgba(43,33,27,0.08)]
  "
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
          className="block rounded-xl border border-[#d8bea4] overflow-hidden"
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

    <section
  className="
    relative
    rounded-[28px]
    border border-[#b78e68]
    bg-[#e2cfbd]
    p-8
    shadow-[0_10px_24px_rgba(43,33,27,0.06)]
  "
>
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