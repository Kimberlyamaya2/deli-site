export default function OrnateFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative border-gold bg-cocoa-800/60">
      {/* centered content block */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-6 sm:py-8 md:py-12">
        {children}
      </div>

      {/* ornate corners ... */}
      <svg className="pointer-events-none absolute -top-2 -left-2 h-10 w-10 opacity-70" viewBox="0 0 24 24" fill="none">
        <path d="M5 19C6 14 9 10 14 9C13 6 15 4 19 5C18 9 16 11 13 12C11 15 9 18 5 19Z" stroke="#D4AF37" strokeWidth="1.2" fill="none" />
      </svg>
      <svg className="pointer-events-none absolute -top-2 -right-2 h-10 w-10 rotate-90 opacity-70" viewBox="0 0 24 24" fill="none">
        <path d="M5 19C6 14 9 10 14 9C13 6 15 4 19 5C18 9 16 11 13 12C11 15 9 18 5 19Z" stroke="#D4AF37" strokeWidth="1.2" fill="none" />
      </svg>
      <svg className="pointer-events-none absolute -bottom-2 -left-2 h-10 w-10 -rotate-90 opacity-70" viewBox="0 0 24 24" fill="none">
        <path d="M5 19C6 14 9 10 14 9C13 6 15 4 19 5C18 9 16 11 13 12C11 15 9 18 5 19Z" stroke="#D4AF37" strokeWidth="1.2" fill="none" />
      </svg>
      <svg className="pointer-events-none absolute -bottom-2 -right-2 h-10 w-10 rotate-180 opacity-70" viewBox="0 0 24 24" fill="none">
        <path d="M5 19C6 14 9 10 14 9C13 6 15 4 19 5C18 9 16 11 13 12C11 15 9 18 5 19Z" stroke="#D4AF37" strokeWidth="1.2" fill="none" />
      </svg>
    </div>
  );
}
