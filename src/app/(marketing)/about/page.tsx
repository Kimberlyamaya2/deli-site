import Image from "next/image";
import OrnateFrame from "@/components/OrnateFrame";

function SpiceDivider() {
  return (
    <div className="flex items-center gap-3 my-1">
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#c9993f] rounded-full" />
      <span className="text-[#c9993f] text-sm tracking-[6px]">✦ · ✦</span>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#c9993f] rounded-full" />
    </div>
  );
}

export default function AboutPage() {
  return (
    <section className="relative scroll-mt-20 text-[#2b211b]">
      <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_50%_-10%,rgba(201,153,63,0.06),transparent)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-14 md:py-16 space-y-14">

        {/* HERO */}
        <OrnateFrame>
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
            <div className="space-y-5">
              <p className="inline-flex items-center gap-2 rounded-full border border-[#6b3a1f] bg-[rgba(201,153,63,0.12)] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[#e0b97a] shadow-sm">
                ✦ Our Story
              </p>

              <h1 className="h-display text-[#f0dfc5] text-4xl sm:text-5xl md:text-6xl uppercase tracking-[0.04em] font-bold leading-[0.95]">
                The Story Behind
                <br />
                Victor&apos;s
              </h1>

              <SpiceDivider />

              <p className="text-base sm:text-lg md:text-xl italic text-[#c5a882] max-w-xl">
                Brotherhood made it possible. A promise made it real. Purpose
                keeps it going.
              </p>

              <div className="rounded-2xl border border-[#6b3a1f] bg-[#2b1a0f] p-5 shadow-[0_8px_22px_rgba(14,8,2,0.20)] max-w-xl">
                <blockquote className="text-[#e0b97a] text-base sm:text-lg leading-relaxed italic">
                  &ldquo;If you ever open a place, make it a classic. Make it yours.
                  And make it matter.&rdquo;
                  <footer className="mt-3 text-[#c5a882] text-sm not-italic">— Niraj</footer>
                </blockquote>
                <div className="mt-3 h-px w-full" style={{ background: "repeating-linear-gradient(90deg,#c9993f 0px,#c9993f 8px,transparent 8px,transparent 14px)" }} />
              </div>
            </div>

            <div className="justify-self-center lg:justify-self-end w-full">
              <div className="mx-auto w-full max-w-md rounded-2xl border border-[#6b3a1f] bg-[#2b1a0f] shadow-[0_18px_36px_rgba(14,8,2,0.30)] overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#1e1108]">
                  <Image
                    src="/UpdatedCartoon.PNG"
                    alt="Cartoon Victor and Niraj — a brotherhood remembered"
                    fill
                    className="object-cover object-[center_5%]"
                    priority
                  />
                </div>
                <div className="px-5 py-3 bg-[#2b1a0f] border-t border-[#6b3a1f]">
                  <p className="text-[#c5a882] text-sm italic">
                    A promise kept. A legacy served warm.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </OrnateFrame>

        {/* MAIN STORY */}
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
          <div className="rounded-2xl border border-[#6b3a1f] bg-[#1e1108] p-6 md:p-8 shadow-[0_10px_24px_rgba(14,8,2,0.25)] relative overflow-hidden">
            {/* Left spice bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#c9993f] to-[#8a3a0f]" />

            <h2 className="h-display text-[#f0dfc5] text-2xl md:text-3xl uppercase tracking-[0.04em] font-bold mb-4">
              Why Victor&apos;s Exists
            </h2>

            <div className="h-px w-full mb-6" style={{ background: "repeating-linear-gradient(90deg,#c9993f 0px,#c9993f 8px,transparent 8px,transparent 14px)" }} />

            <article className="space-y-5 text-[1.03rem] leading-relaxed text-[#c5a882]">
              <p>
                <strong className="text-[#e0b97a]">Victor&apos;s Classic Deli</strong> isn&apos;t just a menu — it&apos;s a
                tribute to a bond that became family. Two best friends who
                turned long shifts into lifelong stories, and one promise that
                became a mission.
              </p>

              <p>
                Victor built this place for <strong className="text-[#e0b97a]">Niraj</strong>, a chef who
                once ran two beloved Chicago spots and had a way of bringing
                people together with heart and hustle. Before Niraj passed, he told Victor:{" "}
                <em className="text-[#e0b97a]">
                  &ldquo;If you ever open a place, make it a classic. Make it yours.
                  And make it matter.&rdquo;
                </em>
              </p>

              <p>
                After Niraj&apos;s passing, that message became Victor&apos;s vow. It&apos;s
                why the lights flip on early, why the bread gets checked twice,
                why the sauce is tasted again, and why everyone who walks in is
                greeted like family.
              </p>

              <p>
                This isn&apos;t fast food. It&apos;s food that <em>means</em> something —
                made with care, served with gratitude, and tied to a promise
                that refuses to fade.
              </p>

              <div className="my-2 h-px w-24 bg-[#c9993f] rounded-full" />

              <p>
                If you&apos;re here, you&apos;re part of it. Every order helps carry a
                legacy forward. Every visit keeps a brother&apos;s promise alive.
              </p>
            </article>
          </div>

          {/* SIDE FACTS */}
          <aside className="space-y-4">
            {[
              { h: "Brotherhood", p: "Late-night kitchens became early-morning prep. A friendship became family." },
              { h: "The Promise", p: "Make it classic. Make it yours. Make it matter. Words that became a vow." },
              { h: "The Why", p: "Every sandwich is a thank you. Every guest becomes part of the legacy." },
            ].map((it) => (
              <div
                key={it.h}
                className="rounded-xl border border-[#6b3a1f] bg-[#2b1a0f] p-4 shadow-[0_6px_16px_rgba(14,8,2,0.20)] relative overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#c9993f] to-[#8a3a0f]" />
                <h3 className="h-display text-[#e0b97a] text-lg mb-1 uppercase tracking-[0.04em] font-bold pl-2">
                  {it.h}
                </h3>
                <p className="text-[#c5a882] text-sm leading-relaxed pl-2">{it.p}</p>
              </div>
            ))}
          </aside>
        </div>

        {/* LEGACY BAND */}
        <div className="rounded-2xl border border-[#6b3a1f] bg-[#1e1108] px-6 py-8 shadow-[0_10px_24px_rgba(14,8,2,0.20)]">
          <div className="flex items-center justify-center gap-4 text-center flex-wrap">
            <span className="h-[1.5px] w-16 bg-[#c9993f] rounded-full" />
            <div>
              <p className="text-xl md:text-2xl font-semibold text-[#f0dfc5] leading-snug">
                Come hungry. Leave inspired. Come back like you never left.
              </p>
              <div className="flex justify-center mt-2">
                <span className="text-[#c9993f] tracking-[8px] text-sm">✦ · · ✦ · · ✦</span>
              </div>
            </div>
            <span className="h-[1.5px] w-16 bg-[#c9993f] rounded-full" />
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-6 pb-6">
          <a
            href="/menu"
            className="inline-flex items-center gap-2 rounded-xl border border-[#c9993f] bg-[#c9993f] px-5 py-2.5 text-sm md:text-base text-[#1e1108] font-bold hover:bg-[#b8882e] transition shadow-[0_8px_24px_rgba(201,153,63,0.28)]"
          >
            Explore the Menu
            <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M5 12h14" /><path d="m13 5 7 7-7 7" />
            </svg>
          </a>
          <span className="h-[1.5px] w-[85%] max-w-4xl bg-[#c9993f] rounded-full opacity-30" />
        </div>
      </div>
    </section>
  );
}
