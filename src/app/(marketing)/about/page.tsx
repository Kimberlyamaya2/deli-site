import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="relative scroll-mt-20 text-amber-100">
      {/* soft background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_50%_-10%,rgba(212,175,55,0.08),transparent)] pointer-events-none" />

      {/* INTRO HERO */}
      <div className="relative max-w-5xl mx-auto px-6 md:px-10 lg:px-16 pt-14 md:pt-18">
        <div className="text-center">
          <h1 className="h-display subhead-gold text-4xl sm:text-5xl md:text-6xl uppercase tracking-wide">
            The Story Behind Victor’s
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl italic text-amber-200/90">
            Brotherhood made it possible. A promise made it real. Purpose keeps it going.
          </p>
        </div>

        {/* promise chip */}
        <div className="mt-8 mx-auto max-w-2xl rounded-2xl border border-gold/60 bg-black/15 p-5 shadow-[0_6px_20px_rgba(212,175,55,0.10)]">
          <blockquote className="text-amber-100/95 text-base sm:text-lg md:text-xl leading-relaxed text-center">
            “If you ever open a place, make it a classic. Make it yours. And make it matter.”
            <footer className="mt-2 text-amber-200/75 text-sm">— Niraj</footer>
          </blockquote>
        </div>
      </div>

      {/* STORY + PHOTO (two-column, calm reading) */}
      <div className="relative max-w-6xl mx-auto px-6 md:px-10 lg:px-16 mt-12 md:mt-16">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-start">
          {/* narrative column */}
          <article className="prose prose-invert prose-amber max-w-none text-[1.05rem] leading-relaxed">
            <p>
              <strong>Victor’s Classic Deli</strong> isn’t just a menu, it’s a tribute to a bond that became family.
              Two best friends who turned long shifts into lifelong stories, and one promise that became a mission.
            </p>
            <p className="mb-4">  </p>
            <p>
              Victor built this place for <strong>Niraj</strong>, a chef who once ran two beloved Chicago spots and
              had a way of bringing people together with heart and hustle. Before Niraj passed, he told Victor: 
              <em>“If you ever open a place, make it a classic. Make it yours. And make it matter.”</em>
            </p>
            <p className="mb-4"></p>
            <p>
              After Niraj’s passing, that message became Victor’s vow. It’s why the lights flip on early, why the
              bread gets checked twice, why the sauce is tasted again, and why everyone who walks in is greeted like
              family.
            </p>
            <p>
              This isn’t fast food. It’s food that <em>means</em> something, made with care, served with gratitude,
              and tied to a promise that refuses to fade.
            </p>

            {/* subtle divider */}
            <div className="my-8 h-px w-28 bg-[var(--gold-primary)]/50 rounded-full" />

            <p>
              If you’re here, you’re part of it. Every order helps carry a legacy forward. Every visit keeps a
              brother’s promise alive. From the first sizzle on the flattop to the last smile at the counter,
              we’re making it matter.
            </p>
          </article>

    {/* sticky photo card */}
<aside className="lg:sticky lg:top-24">
  <div className="mx-auto w-full max-w-md rounded-2xl border border-gold/70 bg-cocoa-900/60 shadow-[0_8px_28px_rgba(212,175,55,0.15)] overflow-hidden">

    {/* photo */}
    <div className="relative aspect-[4/3] overflow-hidden bg-black/40">
      <Image
        src="/Cartoon.png"
        alt="Cartoon Victor & Niraj — a brotherhood remembered"
        fill
       className="object-cover object-[center_5%] saturate-[1.15] contrast-[1.1]"

        priority
      />
    </div>

    {/* caption */}
    <div className="px-5 py-3 bg-[rgba(26,14,10,0.85)] border-t border-[rgba(212,175,55,0.25)]">
      <p className="text-amber-100/90 text-sm">
        A promise kept. A legacy served warm.
      </p>
    </div>
  </div>
</aside>

        </div>
      </div>


 <div className="mt-16 flex items-center justify-center gap-3">
  <span className="h-[1px] w-16 bg-[var(--gold-primary)]/40 rounded-full"></span>
  <span className="text-gold-200 text-lg tracking-widest uppercase">
    — Legacy —
  </span>
  <span className="h-[1px] w-16 bg-[var(--gold-primary)]/40 rounded-full"></span>
</div>



 {/* MILESTONES */}
      <div className="relative max-w-6xl mx-auto px-6 md:px-10 lg:px-16 mt-10 md:mt-12">
        <ol className="grid gap-4 md:grid-cols-3">
          {[
            {
              h: "Brotherhood",
              p: "Late-night kitchens became early-morning prep. A friendship became family."
            },
            {
              h: "The Promise",
              p: "“Make it classic. Make it yours. Make it matter.” Words that became a vow."
            },
            {
              h: "The Why",
              p: "Every sandwich is a thank you. Every guest, part of the legacy."
            }
          ].map((it) => (
            <li key={it.h} className="rounded-xl border border-gold/40 bg-black/10 p-4">
              <h3 className="h-display title-section text-base md:text-lg mb-1">{it.h}</h3>
              <p className="text-amber-100/85 text-sm">{it.p}</p>
            </li>
          ))}
        </ol>
      </div>

     {/* MINI SECTION DIVIDER WITH CARTOON + TEXT */}
<div className="relative max-w-5xl mx-auto px-6 md:px-10 lg:px-16 mt-24 mb-14">
  <div className="flex flex-col sm:flex-row items-center justify-center gap-6">


   {/* Cartoon - clean, circle, no box
    <div className="relative h-24 w-24 sm:h-28 sm:w-28 rounded-full overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.45)] bg-black/20">
      <Image
        src="/Cartoon.png"
        alt="Illustration of Victor and Niraj"
        fill
        className="object-cover"
      />
    </div>
     */}

    {/* Text */}
    <div className="text-center sm:text-left">
      <p className="text-xl md:text-2xl font-semibold text-gold-200 leading-snug">
        Come hungry. Leave inspired.
      </p>
      <p className="text-xl md:text-2xl font-semibold text-gold-200 leading-snug">
        <span className="text-gold-100/90">Come back like you never left.</span>
      </p>
    </div>

  </div>
</div>


      {/* CTA */}
      <div className="relative max-w-6xl mx-auto px-6 md:px-10 lg:px-16 mt-12 md:mt-14 pb-16">
        <div className="flex items-center justify-center">
          <a
            href="/menu"
            className="inline-flex items-center gap-2 rounded-xl border border-gold/70 bg-black/10 px-5 py-2.5 text-sm md:text-base text-amber-100/90 hover:bg-white/5 hover:border-gold transition"
          >
            Explore the Menu
            <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M5 12h14" /><path d="m13 5 7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* subtle bottom divider */}
        <div className="mt-12 flex justify-center">
          <span className="h-[1px] w-[85%] max-w-4xl bg-[var(--gold-primary)]/30 rounded-full" />
        </div>
      </div>
    </section>
  );
}
