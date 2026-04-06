export default function OrnateFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="
        relative overflow-hidden rounded-2xl
        border border-[#9f7a58]
        bg-[linear-gradient(180deg,#d6c2ad_0%,#d6c2ad_100%)]
        shadow-[0_18px_38px_rgba(43,33,27,0.10)]
      "
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.22),inset_0_0_0_1px_rgba(90,67,51,0.06)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_380px_at_50%_20%,rgba(255,248,238,0.22),transparent)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-6 sm:py-8 md:py-12">
        {children}
      </div>

      <svg className="pointer-events-none absolute -top-2 -left-2 h-10 w-10 opacity-100" viewBox="0 0 24 24" fill="none">
        <path d="M5 19C6 14 9 10 14 9C13 6 15 4 19 5C18 9 16 11 13 12C11 15 9 18 5 19Z" stroke="#8a5a2b" strokeWidth="1.45" />
      </svg>
      <svg className="pointer-events-none absolute -top-2 -right-2 h-10 w-10 rotate-90 opacity-100" viewBox="0 0 24 24" fill="none">
        <path d="M5 19C6 14 9 10 14 9C13 6 15 4 19 5C18 9 16 11 13 12C11 15 9 18 5 19Z" stroke="#8a5a2b" strokeWidth="1.45" />
      </svg>
      <svg className="pointer-events-none absolute -bottom-2 -left-2 h-10 w-10 -rotate-90 opacity-100" viewBox="0 0 24 24" fill="none">
        <path d="M5 19C6 14 9 10 14 9C13 6 15 4 19 5C18 9 16 11 13 12C11 15 9 18 5 19Z" stroke="#8a5a2b" strokeWidth="1.45" />
      </svg>
      <svg className="pointer-events-none absolute -bottom-2 -right-2 h-10 w-10 rotate-180 opacity-100" viewBox="0 0 24 24" fill="none">
        <path d="M5 19C6 14 9 10 14 9C13 6 15 4 19 5C18 9 16 11 13 12C11 15 9 18 5 19Z" stroke="#8a5a2b" strokeWidth="1.45" />
      </svg>
    </div>
  );
}