export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[#c4ab93] bg-[#dfcfbc] text-[#5f4735]">
      <div className="w-full px-4 md:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        
        {/* Left */}
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} Victor’s Classic Deli —{" "}
          <span className="text-[#2b211b]">Nashville, TN</span> — April 2026
        </p>

        {/* Right: ICON BUTTONS */}
        <div className="flex items-center gap-3">
          
          {/* Instagram */}
          <a
            href="https://www.instagram.com/delibyvic/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex items-center justify-center h-9 w-9 rounded-full bg-[#e9dbc9] border border-[#b99d84] text-[#5f4735] hover:text-[#2b211b] hover:bg-[#dfcfbc] transition"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5Zm9.5 1.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/>
            </svg>
          </a>

          {/* Email */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=delibyvic@gmail.com&su=Inquiry%20from%20Victor%E2%80%99s%20Classic%20Deli&body=Hi%20Victor%2C%0A%0A"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            className="flex items-center justify-center h-9 w-9 rounded-full bg-[#e9dbc9] border border-[#b99d84] text-[#5f4735] hover:text-[#2b211b] hover:bg-[#dfcfbc] transition"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M3 5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25v13.5A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 18.75V5.25Zm2.4-.75L12 9.3l6.6-4.8H5.4ZM19.5 6.75l-7.1 5.15a.75.75 0 0 1-.8 0L4.5 6.75v12c0 .14.11.25.25.25h14.5c.14 0 .25-.11.25-.25v-12Z"/>
            </svg>
          </a>

        </div>
      </div>
    </footer>
  );
}