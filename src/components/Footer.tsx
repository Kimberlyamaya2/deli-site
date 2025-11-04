/*import Link from "next/link";*/

export default function Footer() {
  return (
    <footer className="border-t border-gold/50 bg-cocoa-900/60 text-amber-100/80">
      <div className="w-full px-4 md:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        {/* Left: Copyright + location */}
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} Victor’s Classic Deli -{" "}
          <span className="text-amber-100/90">Nashville, TN</span> - Opening Soon 2026
        </p>

        {/* Right: Socials */}
        <div className="flex items-center gap-4 text-amber-100/80">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/delibyvic/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Victor’s Deli on Instagram"
            className="hover:text-[var(--gold-primary)] transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              className="h-5 w-5"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>

          {/* Gmail */}
<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=delibyvic@gmail.com&su=Inquiry%20from%20Victor%E2%80%99s%20Classic%20Deli&body=Hi%20Victor%2C%0A%0A"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Email Victor’s Classic Deli via Gmail"
  className="hover:text-[var(--gold-primary)] transition"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    className="h-5 w-5"
  >
    <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
</a>
        </div>
      </div>
    </footer>
  );
}
