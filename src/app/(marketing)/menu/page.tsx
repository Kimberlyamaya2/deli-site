export default function MenuPage() {
  return (
    <main className="min-h-screen bg-[#efe4d3] px-6 py-16">
      <div className="mx-auto flex min-h-[75vh] max-w-5xl items-center justify-center">
        <div className="w-full max-w-2xl rounded-[32px] border border-[#d8c1a6] bg-[#f7efe3] px-8 py-14 text-center shadow-[0_20px_60px_rgba(90,60,30,0.10)] sm:px-12">
          <div className="mb-5 inline-flex rounded-full border border-[#d7b894] bg-[#f3e4cf] px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[#8a5a33]">
            Victor’s Classic Deli
          </div>

          <h1 className="font-serif text-4xl text-[#4e3422] sm:text-5xl">
            View Our Menu
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#7a5a43] sm:text-lg">
            Explore our full selection of deli favorites, hot sandwiches, sides,
            and more through our hosted menu.
          </p>

          <div className="mt-10">
            <a
              href="https://your-external-menu-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#9b673d] px-8 py-4 text-sm font-semibold text-white shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-[#7f522f] focus:outline-none focus:ring-4 focus:ring-[#d7b894]"
            >
              Click here to view the menu
            </a>
          </div>

          <div className="mt-10 border-t border-[#dfc8ad] pt-6 text-sm text-[#8a6a52]">
            Opens in a new tab
          </div>
        </div>
      </div>
    </main>
  );
}