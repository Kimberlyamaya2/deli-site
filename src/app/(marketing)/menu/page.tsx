// src/app/(marketing)/menu/page.tsx
export default function MenuPage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto flex min-h-[75vh] max-w-5xl items-center justify-center">
        <div className="w-full max-w-2xl rounded-[32px] border border-[#6b3a1f] bg-[#1e1108] px-8 py-14 text-center shadow-[0_20px_60px_rgba(14,8,2,0.40)] sm:px-12 relative overflow-hidden">

          {/* Corner spice ornament lines */}
          <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: "repeating-linear-gradient(90deg,#c9993f 0px,#c9993f 10px,#8a3a0f 10px,#8a3a0f 18px,transparent 18px,transparent 26px)" }} />
          <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: "repeating-linear-gradient(90deg,#c9993f 0px,#c9993f 10px,#8a3a0f 10px,#8a3a0f 18px,transparent 18px,transparent 26px)" }} />

          <div className="mb-5 inline-flex rounded-full border border-[#6b3a1f] bg-[rgba(201,153,63,0.12)] px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[#e0b97a]">
            ✦ Victor&apos;s Classic Deli
          </div>

          <h1 className="h-display text-[#f0dfc5] text-4xl sm:text-5xl">
            View Our Menu
          </h1>

          <div className="flex items-center justify-center gap-3 my-4">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#c9993f] rounded-full" />
            <span className="text-[#c9993f] text-sm tracking-[6px]">✦ · ✦</span>
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#c9993f] rounded-full" />
          </div>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#c5a882] sm:text-lg">
            Explore our full selection of deli favorites, hot sandwiches, sides,
            and more through our hosted menu.
          </p>

          <div className="mt-10">
            <a
              href="https://order.toasttab.com/online/victors-360-wallace-rd-nashville-tn-37211-united-states"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#c9993f] bg-[#c9993f] px-8 py-4 text-sm font-bold text-[#1e1108] shadow-[0_8px_24px_rgba(201,153,63,0.30)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#b8882e] focus:outline-none focus:ring-4 focus:ring-[#c9993f]/30"
            >
              Order Online
              <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M5 12h14" /><path d="m13 5 7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="mt-8 border-t border-[#6b3a1f] pt-5 text-sm text-[#8a6240]">
            Opens in a new tab
          </div>
        </div>
      </div>
    </main>
  );
}