// src/app/(marketing)/apply/page.tsx
export default function ApplyPage() {
  return (
    <section className="relative scroll-mt-20 text-amber-100">
      {/* soft background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_50%_-5%,rgba(212,175,55,0.08),transparent)] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 md:px-10 lg:px-16 py-16 space-y-8">
        {/* HEADER */}
        <header className="text-center space-y-4">
          <p className="inline-flex items-center gap-2 rounded-full border border-gold/60 bg-cocoa-800/60 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-gold-200/90">
            Join Our Team
          </p>

          <h1 className="h-display subhead-gold text-4xl md:text-5xl tracking-wide">
            Apply to Victor’s
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-amber-200/85 max-w-2xl mx-auto">
            We're looking for motivated, friendly team members who care about great food and great people.
          </p>
        </header>

        {/* APPLICATION FORM FRAME */}
<div className="rounded-2xl border border-gold/60 bg-black/10 shadow-[0_6px_24px_rgba(212,175,55,0.12)] overflow-hidden backdrop-blur-sm">
  <div className="relative w-full" style={{ paddingTop: "70%" }}>
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSdInrwGuExWK5HWopJAnhmE6y87h10OcLlqEoGurR6BkFnS-w/viewform?embedded=true"
      className="absolute inset-0 w-full h-full border-none"
      loading="lazy"
    />
  </div>
</div>



         {/* WHY WORK HERE */}
        <div className="grid gap-4 md:grid-cols-3 text-sm md:text-base text-amber-100/90">
          <div className="rounded-xl border border-gold/40 bg-black/10 p-4">
            <h2 className="h-display title-section text-lg mb-1">Real Deli Food</h2>
            <p>Scratch-made classics and signature sandwiches you’ll be proud to serve.</p>
          </div>
          <div className="rounded-xl border border-gold/40 bg-black/10 p-4">
            <h2 className="h-display title-section text-lg mb-1">Good People</h2>
            <p>A tight-knit crew built on respect, hustle, and heart.</p>
          </div>
          <div className="rounded-xl border border-gold/40 bg-black/10 p-4">
            <h2 className="h-display title-section text-lg mb-1">Flexible Roles</h2>
            <p>Front-of-house, kitchen, and prep: full & part-time available.</p>
          </div>
        </div>


        {/* bottom divider */}
        <div className="mt-12 flex justify-center">
          <span className="h-[1px] w-[85%] max-w-2xl bg-[var(--gold-primary)]/30 rounded-full" />
        </div>

        {/* FOOTNOTE */}
        <p className="text-center text-amber-100/70 text-sm">
          Once you submit your application, we’ll review it and reach out if you’re a good fit.
        </p>

      </div>
    </section>
  );
}
