export default function ContactPage() {
  return (
    <section className="relative scroll-mt-20 text-amber-100">
      {/* soft background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_50%_-10%,rgba(212,175,55,0.08),transparent)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-16 space-y-12">
        {/* HEADER */}
        <header className="text-center space-y-4">
          <p className="inline-flex items-center gap-2 rounded-full border border-gold/60 bg-cocoa-800/60 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-gold-200/90">
            Get in Touch • Victor’s Classic Deli
          </p>

          <h1 className="h-display subhead-gold text-4xl md:text-5xl tracking-wide">
            Contact Victor’s
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-amber-200/85 max-w-2xl mx-auto">
            Questions, feedback, or just saying hello - we’d love to hear from you.
          </p>
        </header>

        {/* INFO + FORM */}
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-start">
          {/* INFO COLUMN – echoes home info cards + visit section */}
          <aside className="space-y-5 rounded-2xl border border-gold/70 bg-black/10 p-6 md:p-7 shadow-[0_6px_24px_rgba(212,175,55,0.12)] backdrop-blur-sm">
            <div>
              <h2 className="h-display title-section text-xl mb-1 text-gold-200">
                Visit Us
              </h2>
              <p className="text-sm md:text-base text-amber-100/85 leading-relaxed">
                Mena Plaza<br />
                360 Wallace Rd<br />
                Nashville, TN 37211
              </p>
              <a
                href="https://www.google.com/maps/place/360+Wallace+Rd,+Nashville,+TN+37211"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex text-xs md:text-sm text-gold-200/90 hover:text-gold-100 underline underline-offset-4"
              >
                Open in Google Maps
              </a>
            </div>

            <div className="border-t border-gold/25 pt-4 space-y-3">
              <div>
                <h3 className="text-gold-200 text-sm font-semibold mb-1">
                  Call
                </h3>
                <a
                  href="tel:6150000000"
                  className="text-sm md:text-base text-amber-100/90 hover:text-gold-100"
                >
                  (615) 000-0000
                </a>
              </div>

              <div>
                <h3 className="text-gold-200 text-sm font-semibold mb-1">
                  Email
                </h3>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=delibyvic@gmail.com&su=Inquiry%20from%20Victor%E2%80%99s%20Deli%20Website&body=Hi%20Victor%2C%0A%0A"
  target="_blank"
  rel="noopener noreferrer"
  
                  className="text-sm md:text-base text-amber-100/90 hover:text-gold-100 break-all"
                >
                  delibyvic@gmail.com
                </a>
              </div>

              <div>
                <h3 className="text-gold-200 text-sm font-semibold mb-1">
                  Hours
                </h3>
                <p className="text-sm md:text-base text-amber-100/85">
                  Mon–Sat: 8AM–7PM<br />
                  Sun: Closed
                </p>
              </div>
            </div>
          </aside>

          {/* FORM COLUMN – styled like the rest of the site */}
          <div className="rounded-2xl border border-gold/60 bg-black/10 p-6 md:p-7 shadow-[0_6px_24px_rgba(212,175,55,0.12)]">
            <form className="space-y-4" method="post">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold tracking-wide uppercase text-amber-200/80 mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full rounded-lg border border-gold/40 bg-black/20 px-3 py-2 text-sm text-amber-100 placeholder:text-amber-100/40 focus:outline-none focus:ring-2 focus:ring-[var(--gold-primary)]/60 focus:border-[var(--gold-primary)]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-wide uppercase text-amber-200/80 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-gold/40 bg-black/20 px-3 py-2 text-sm text-amber-100 placeholder:text-amber-100/40 focus:outline-none focus:ring-2 focus:ring-[var(--gold-primary)]/60 focus:border-[var(--gold-primary)]"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold tracking-wide uppercase text-amber-200/80 mb-1.5">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full rounded-lg border border-gold/40 bg-black/20 px-3 py-2 text-sm text-amber-100 placeholder:text-amber-100/40 focus:outline-none focus:ring-2 focus:ring-[var(--gold-primary)]/60 focus:border-[var(--gold-primary)]"
                    placeholder="(615) 555-1234"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-wide uppercase text-amber-200/80 mb-1.5">
                    Reason
                  </label>
                  <select
                    name="reason"
                    className="w-full rounded-lg border border-gold/40 bg-black/20 px-3 py-2 text-sm text-amber-100 focus:outline-none focus:ring-2 focus:ring-[var(--gold-primary)]/60 focus:border-[var(--gold-primary)]"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="question">General Question</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Something Else</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold tracking-wide uppercase text-amber-200/80 mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full rounded-lg border border-gold/40 bg-black/20 px-3 py-2 text-sm text-amber-100 placeholder:text-amber-100/40 focus:outline-none focus:ring-2 focus:ring-[var(--gold-primary)]/60 focus:border-[var(--gold-primary)] resize-y"
                  placeholder="Tell us how we can help..."
                />
              </div>

             <div className="flex justify-end pt-3">
  <a
    href={`mailto:delibyvic@gmail.com?subject=Inquiry from Victor’s Classic Deli&body=Hi%20Victor,%0A%0AMy%20name%20is:%0AReason:%0AMessage:%0A%0A`}
    className="inline-flex items-center gap-2 rounded-xl border border-[rgba(212,175,55,0.75)] bg-black/20 px-5 py-2.5 text-sm md:text-base text-amber-100/90 hover:bg-white/5 hover:border-gold transition shadow-[0_8px_20px_rgba(212,175,55,0.18)] hover:shadow-[0_10px_24px_rgba(212,175,55,0.26)]"
  >
    Send Message
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  </a>
</div>

            </form>
          </div>
        </div>

        {/* subtle bottom divider like home */}
        <div className="mt-12 flex justify-center">
          <span className="h-[1px] w-[85%] max-w-3xl bg-[var(--gold-primary)]/30 rounded-full" />
        </div>
      </div>
    </section>
  );
}
