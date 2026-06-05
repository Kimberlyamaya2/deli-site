// src/app/(marketing)/apply/page.tsx
export default function ApplyPage() {
  return (
    <section className="relative scroll-mt-20">
      <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_50%_-5%,rgba(201,153,63,0.06),transparent)] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 md:px-10 lg:px-16 py-16 space-y-8">

        {/* HEADER */}
        <header className="text-center space-y-4">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#6b3a1f] bg-[rgba(201,153,63,0.12)] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[#e0b97a] shadow-sm">
            ✦ Join Our Team
          </p>

          <h1 className="h-display text-[#f0dfc5] text-4xl md:text-5xl uppercase tracking-[0.04em] font-bold">
            Apply to Victor&apos;s
          </h1>

          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#c9993f] rounded-full" />
            <span className="text-[#c9993f] text-sm tracking-[6px]">✦ · ✦</span>
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#c9993f] rounded-full" />
          </div>

          <p className="text-base sm:text-lg md:text-xl text-[#c5a882] max-w-2xl mx-auto">
            We&apos;re looking for motivated, friendly team members who care
            about great food and great people.
          </p>
        </header>

        {/* APPLICATION FORM FRAME */}
        <div className="rounded-2xl border border-[#6b3a1f] bg-[#1e1108] shadow-[0_14px_34px_rgba(14,8,2,0.30)] overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#c9993f] to-[#8a3a0f]" />
          <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "repeating-linear-gradient(90deg,#c9993f 0px,#c9993f 10px,#8a3a0f 10px,#8a3a0f 18px,transparent 18px,transparent 26px)" }} />
          <div className="w-full h-[55vh] md:h-[50vh] overflow-y-scroll">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdInrwGuExWK5HWopJAnhmE6y87h10OcLlqEoGurR6BkFnS-w/viewform?embedded=true"
              className="w-full h-full border-none"
              loading="lazy"
            />
          </div>
        </div>

        {/* MOBILE FALLBACK */}
        <div className="md:hidden mt-4 text-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdInrwGuExWK5HWopJAnhmE6y87h10OcLlqEoGurR6BkFnS-w/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 rounded-lg border border-[#c9993f] bg-[#c9993f] text-[#1e1108] font-bold hover:bg-[#b8882e] transition"
          >
            Open Form Instead
          </a>
        </div>

        {/* WHY WORK HERE */}
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { h: "Real Deli Food", p: "Scratch-made classics and signature sandwiches you'll be proud to serve." },
            { h: "Good People", p: "A tight-knit crew built on respect, hustle, and heart." },
            { h: "Flexible Roles", p: "Front-of-house, kitchen, and prep — full & part-time available." },
          ].map((card) => (
            <div key={card.h} className="rounded-xl border border-[#6b3a1f] bg-[#2b1a0f] p-4 shadow-[0_6px_16px_rgba(14,8,2,0.20)] relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#c9993f] to-[#8a3a0f]" />
              <h2 className="h-display text-[#e0b97a] text-lg mb-1 uppercase tracking-[0.04em] font-bold pl-2">
                {card.h}
              </h2>
              <p className="text-[#c5a882] text-sm leading-relaxed pl-2">{card.p}</p>
            </div>
          ))}
        </div>

        {/* BOTTOM BAND */}
        <div className="rounded-2xl border border-[#6b3a1f] bg-[#1e1108] px-6 py-6 shadow-[0_10px_24px_rgba(14,8,2,0.20)]">
          <div className="flex items-center justify-center gap-4 text-center flex-wrap">
            <span className="h-[1.5px] w-16 bg-[#c9993f] rounded-full" />
            <div>
              <p className="text-lg font-semibold text-[#f0dfc5]">
                Once you submit, we&apos;ll review and reach out if you&apos;re a great fit.
              </p>
              <div className="flex justify-center mt-2">
                <span className="text-[#c9993f] tracking-[8px] text-sm">✦ · · ✦ · · ✦</span>
              </div>
            </div>
            <span className="h-[1.5px] w-16 bg-[#c9993f] rounded-full" />
          </div>
        </div>

      </div>
    </section>
  );
}