// src/app/(marketing)/apply/page.tsx
export default function ApplyPage() {
  return (
    <section className="relative scroll-mt-20 text-[#2b211b]">
      {/* soft background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_50%_-5%,rgba(155,107,52,0.08),transparent)] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 md:px-10 lg:px-16 py-16 space-y-8">
        {/* HEADER */}
        <header className="text-center space-y-4">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#a88463] bg-[#e6d6c5] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[#7a563b] shadow-sm">
            Join Our Team
          </p>

          <h1 className="h-display text-[#4a3225] text-4xl md:text-5xl uppercase tracking-[0.04em] font-bold">
            Apply to Victor’s
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#5f4735] max-w-2xl mx-auto">
            We&apos;re looking for motivated, friendly team members who care
            about great food and great people.
          </p>
        </header>

       {/* APPLICATION FORM FRAME (MAKE THIS POP) */}
<div
  className="
    rounded-2xl border border-[#9f7a58]
    bg-[#dcc7b2] 
    shadow-[0_14px_34px_rgba(43,33,27,0.18)]
    overflow-hidden
  "
>
  <div
    className="
      w-full
      h-[50vh]
      md:h-[45vh]
      lg:h-[45vh]
      overflow-y-scroll
    "
  >
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
            className="inline-block px-4 py-2 rounded-lg border border-[#a88463] bg-[#e6d6c5] text-[#2b211b] hover:bg-[#ddcbb8] transition"
          >
            Open Form Instead
          </a>
        </div>

        {/* WHY WORK HERE */}
        <div className="grid gap-4 md:grid-cols-3 text-sm md:text-base text-[#2b211b]">
  <div className="rounded-xl border border-[#a88463] bg-[#e0cfbd] p-4 shadow-sm">
    <h2 className="h-display text-[#4a3225] text-lg mb-1 uppercase tracking-[0.04em] font-bold">
      Real Deli Food
    </h2>
    <p>Scratch-made classics and signature sandwiches you’ll be proud to serve.</p>
  </div>

  <div className="rounded-xl border border-[#a88463] bg-[#e0cfbd] p-4 shadow-sm">
    <h2 className="h-display text-[#4a3225] text-lg mb-1 uppercase tracking-[0.04em] font-bold">
      Good People
    </h2>
    <p>A tight-knit crew built on respect, hustle, and heart.</p>
  </div>

  <div className="rounded-xl border border-[#a88463] bg-[#e0cfbd] p-4 shadow-sm">
    <h2 className="h-display text-[#4a3225] text-lg mb-1 uppercase tracking-[0.04em] font-bold">
      Flexible Roles
    </h2>
    <p>Front-of-house, kitchen, and prep: full & part-time available.</p>
  </div>
</div>
        {/* bottom divider */}
        <div className="mt-12 flex justify-center">
          <span className="h-[1.5px] w-[85%] max-w-2xl bg-[#b38a67] rounded-full" />
        </div>

        {/* FOOTNOTE */}
        <p className="text-center text-[#6f4d34] text-sm">
          Once you submit your application, we&apos;ll review it and reach out
          if you&apos;re a good fit.
        </p>
      </div>
    </section>
  );
}