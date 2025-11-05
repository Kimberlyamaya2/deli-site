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
              <strong>Victor’s Classic Deli</strong> isn’t just a menu—it’s a tribute to a bond that became family.
              Two best friends who turned long shifts into lifelong stories, and one promise that became a mission.
            </p>
            <p>
              Victor built this place for <strong>Niraj</strong>, a chef who once ran two beloved Chicago spots and
              had a way of bringing people together with heart and hustle. When life pulled him from the kitchen, he
              left Victor with simple instructions—the ones you read above.
            </p>
            <p>
              After Niraj’s passing, that message became Victor’s vow. It’s why the lights flip on early, why the
              bread gets checked twice, why the sauce is tasted again, and why everyone who walks in is greeted like
              family.
            </p>
            <p>
              This isn’t fast food. It’s food that <em>means</em> something—made with care, served with gratitude,
              and tied to a promise that refuses to fade.
            </p>

            {/* subtle divider */}
            <div className="my-8 h-px w-28 bg-[var(--gold-primary)]/50 rounded-full" />

            <p>
              If you’re here, you’re part of it. Every order helps carry a legacy forward. Every visit keeps a
              brother’s promise alive. From the first sizzle on the flat-top to the last smile at the counter—
              we’re making it matter.
            </p>
          </article>

          {/* sticky photo card (placeholder now, easy swap later) */}
          <aside className="lg:sticky lg:top-24">
            <div className="relative rounded-2xl border border-gold/70 bg-cocoa-900/60 shadow-[0_6px_24px_rgba(212,175,55,0.15)] overflow-hidden">
              {/* Placeholder box — swap with an <Image /> when ready */}
              <div className="aspect-[4/3] grid place-items-center">
                <div className="w-[82%] h-[78%] rounded-xl border-2 border-dashed border-gold/60 grid place-items-center text-center px-6">
                  <div>
                    <p className="font-medium text-amber-100/85">Add a photo here</p>
                    <p className="text-amber-100/60 text-sm mt-1">
                      Victor &amp; Niraj, a keepsake, or the first recipe card.
                    </p>
                  </div>
                </div>
              </div>

              {/* caption */}
              <div className="px-5 py-3 bg-[rgba(26,14,10,0.85)] border-t border-[rgba(212,175,55,0.25)]">
                <p className="text-amber-100/90 text-sm">
                  A promise kept. A legacy served warm.
                </p>
              </div>
            </div>

            {/* HOW TO SWAP (comment in your codebase) */}
            {/*
            import Image from "next/image";
            <Image
              src="/about-hero.jpg"
              alt="Victor & Niraj — a brotherhood remembered"
              fill
              className="object-cover object-center"
              priority
            />
            Remove the dashed placeholder div above and keep the caption.
            */}
          </aside>
        </div>
      </div>

      {/* FULL-BLEED PROMISE BAND */}
      <div className="relative mt-14 md:mt-18">
        <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
          <div className="rounded-2xl border border-gold/70 bg-black/15 p-5 md:p-6 text-center shadow-[0_6px_20px_rgba(212,175,55,0.10)]">
            <p className="text-lg md:text-xl font-semibold text-[var(--gold-primary)] tracking-wide">
              Come hungry. Leave inspired. Come back like you never left.
            </p>
          </div>
        </div>
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
