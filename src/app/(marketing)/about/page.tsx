import Image from "next/image";
import OrnateFrame from "@/components/OrnateFrame";

export default function AboutPage() {
  return (
    <section className="relative scroll-mt-20 text-[#2b211b]">
      <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_50%_-10%,rgba(155,107,52,0.08),transparent)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-14 md:py-16 space-y-14">
        {/* HERO */}
        <OrnateFrame>
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
            <div className="space-y-5">
              <p className="inline-flex items-center gap-2 rounded-full border border-[#a88463] bg-[#efe1d0] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[#7a563b] shadow-sm">
                Our Story
              </p>

              <h1 className="h-display text-[#4a3225] text-4xl sm:text-5xl md:text-6xl uppercase tracking-[0.04em] font-bold leading-[0.95]">
                The Story Behind
                <br />
                Victor’s
              </h1>

              <p className="text-base sm:text-lg md:text-xl italic text-[#5f4735] max-w-xl">
                Brotherhood made it possible. A promise made it real. Purpose
                keeps it going.
              </p>

              <div className="h-px w-32 rounded-full bg-gradient-to-r from-transparent via-[#8a5a2b] to-transparent" />

              <div className="rounded-2xl border border-[#b99d84] bg-[#e6d6c5] p-5 shadow-[0_8px_22px_rgba(43,33,27,0.08)] max-w-xl">
                <blockquote className="text-[#2b211b] text-base sm:text-lg leading-relaxed">
                  “If you ever open a place, make it a classic. Make it yours.
                  And make it matter.”
                  <footer className="mt-3 text-[#6f4d34] text-sm">— Niraj</footer>
                </blockquote>
              </div>
            </div>

            <div className="justify-self-center lg:justify-self-end w-full">
              <div className="mx-auto w-full max-w-md rounded-2xl border border-[#9f7a58] bg-[#dcc7b2] shadow-[0_18px_36px_rgba(43,33,27,0.14)] overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#d8c2ab]">
                  <Image
                    src="/Cartoon.png"
                    alt="Cartoon Victor and Niraj — a brotherhood remembered"
                    fill
                    className="object-cover object-[center_5%]"
                    priority
                  />
                </div>

                <div className="px-5 py-3 bg-[#f3e7db] border-t border-[#b99d84]">
                  <p className="text-[#5a4333] text-sm">
                    A promise kept. A legacy served warm.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </OrnateFrame>

        {/* MAIN STORY */}
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
          <div className="rounded-2xl border border-[#b99d84] bg-[#e2d1bf] p-6 md:p-8 shadow-[0_10px_24px_rgba(43,33,27,0.06)]">
            <h2 className="h-display text-[#5a3d2b] text-2xl md:text-3xl uppercase tracking-[0.04em] font-bold mb-4">
              Why Victor’s Exists
            </h2>

            <div className="h-px w-full bg-[#c7ab90] mb-6" />

            <article className="space-y-5 text-[1.03rem] leading-relaxed text-[#2b211b]">
              <p>
                <strong>Victor’s Classic Deli</strong> isn’t just a menu, it’s a
                tribute to a bond that became family. Two best friends who
                turned long shifts into lifelong stories, and one promise that
                became a mission.
              </p>

              <p>
                Victor built this place for <strong>Niraj</strong>, a chef who
                once ran two beloved Chicago spots and had a way of bringing
                people together with heart and hustle. Before Niraj passed, he
                told Victor:
                {" "}
                <em>
                  “If you ever open a place, make it a classic. Make it yours.
                  And make it matter.”
                </em>
              </p>

              <p>
                After Niraj’s passing, that message became Victor’s vow. It’s
                why the lights flip on early, why the bread gets checked twice,
                why the sauce is tasted again, and why everyone who walks in is
                greeted like family.
              </p>

              <p>
                This isn’t fast food. It’s food that <em>means</em> something,
                made with care, served with gratitude, and tied to a promise
                that refuses to fade.
              </p>

              <div className="my-2 h-px w-24 bg-[#b38a67] rounded-full" />

              <p>
                If you’re here, you’re part of it. Every order helps carry a
                legacy forward. Every visit keeps a brother’s promise alive.
                From the first sizzle on the flattop to the last smile at the
                counter, we’re making it matter.
              </p>
            </article>
          </div>

          {/* SIDE FACTS */}
          <aside className="space-y-4">
            {[
              {
                h: "Brotherhood",
                p: "Late-night kitchens became early-morning prep. A friendship became family.",
              },
              {
                h: "The Promise",
                p: "“Make it classic. Make it yours. Make it matter.” Words that became a vow.",
              },
              {
                h: "The Why",
                p: "Every sandwich is a thank you. Every guest becomes part of the legacy.",
              },
            ].map((it) => (
              <div
                key={it.h}
                className="rounded-xl border border-[#bda186] bg-[#e6d6c5] p-4 shadow-[0_6px_16px_rgba(43,33,27,0.05)]"
              >
                <h3 className="h-display text-[#5a3d2b] text-lg mb-1 uppercase tracking-[0.04em] font-bold">
                  {it.h}
                </h3>
                <p className="text-[#5a4333] text-sm leading-relaxed">{it.p}</p>
              </div>
            ))}
          </aside>
        </div>

        {/* LEGACY BAND */}
        <div className="rounded-2xl border border-[#b99d84] bg-[#dcc7b2] px-6 py-8 shadow-[0_10px_24px_rgba(43,33,27,0.06)]">
          <div className="flex items-center justify-center gap-4 text-center flex-wrap">
            <span className="h-[1.5px] w-16 bg-[#b38a67] rounded-full"></span>
            <p className="text-xl md:text-2xl font-semibold text-[#5a3d2b] leading-snug">
              Come hungry. Leave inspired. Come back like you never left.
            </p>
            <span className="h-[1.5px] w-16 bg-[#b38a67] rounded-full"></span>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-6 pb-6">
          <a
            href="/menu"
            className="inline-flex items-center gap-2 rounded-xl border border-[#8f6b4f] bg-[#2b211b] px-5 py-2.5 text-sm md:text-base text-white hover:bg-[#3a2d25] transition shadow-[0_8px_20px_rgba(43,33,27,0.14)]"
          >
            Explore the Menu
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

          <span className="h-[1.5px] w-[85%] max-w-4xl bg-[#b38a67] rounded-full" />
        </div>
      </div>
    </section>
  );
}