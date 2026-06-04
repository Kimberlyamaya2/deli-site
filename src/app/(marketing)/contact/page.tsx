"use client";

import { FormEvent, useState } from "react";
import OrnateFrame from "@/components/OrnateFrame";

type Status = "idle" | "success" | "error";

function SpiceDivider() {
  return (
    <div className="flex items-center gap-3 my-1">
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#c9993f] rounded-full" />
      <span className="text-[#c9993f] text-sm tracking-[6px]">✦ · ✦</span>
      <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#c9993f] rounded-full" />
    </div>
  );
}

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    setSubmitting(true);
    setStatus("idle");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          reason: formData.get("reason"),
          message: formData.get("message"),
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.success) throw new Error(json.error || "Failed to send");
      setStatus("success");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative scroll-mt-20 text-[#2b211b]">
      <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_50%_-10%,rgba(201,153,63,0.06),transparent)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-14 md:py-16 space-y-14">

        {/* HERO */}
        <OrnateFrame>
          <div className="grid lg:grid-cols-[1.02fr_0.98fr] gap-10 items-center">
            <div className="space-y-5">
              <p className="inline-flex items-center gap-2 rounded-full border border-[#6b3a1f] bg-[rgba(201,153,63,0.12)] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[#e0b97a] shadow-sm">
                ✦ Contact Victor&apos;s
              </p>

              <h1 className="h-display text-[#f0dfc5] text-4xl sm:text-5xl md:text-6xl uppercase tracking-[0.04em] font-bold leading-[0.95]">
                Let&apos;s Talk
              </h1>

              <SpiceDivider />

              <p className="text-base sm:text-lg md:text-xl italic text-[#c5a882] max-w-xl">
                Questions, catering inquiries, feedback, or just saying hello —
                we&apos;d love to hear from you.
              </p>

              <div className="rounded-2xl border border-[#6b3a1f] bg-[#2b1a0f] p-5 shadow-[0_8px_22px_rgba(14,8,2,0.20)] max-w-xl">
                <p className="text-[#c5a882] text-base leading-relaxed">
                  Whether you&apos;re reaching out about the menu, catering, hours,
                  or future opportunities, we&apos;re here for it.
                </p>
                <p className="mt-2 text-[#8a6240] text-sm">
                  We read every message and do our best to respond quickly.
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              {[
                { h: "Visit", p: "Suite 130 - Mena Plaza\n360 Wallace Rd\nNashville, TN 37211" },
                { h: "Call", p: "(615) 490-3544" },
                { h: "Hours", p: "Mon–Sat: 7AM–9PM, Closed Sundays" },
              ].map((item) => (
                <div
                  key={item.h}
                  className="rounded-xl border border-[#6b3a1f] bg-[#2b1a0f] p-4 shadow-[0_6px_16px_rgba(14,8,2,0.20)] relative overflow-hidden"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#c9993f] to-[#8a3a0f]" />
                  <h2 className="h-display text-[#e0b97a] text-lg uppercase tracking-[0.04em] font-bold mb-1 pl-2">
                    {item.h}
                  </h2>
                  <p className="text-[#c5a882] text-sm whitespace-pre-line leading-relaxed pl-2">
                    {item.p}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </OrnateFrame>

        {/* MAIN CONTACT AREA */}
        <div className="grid lg:grid-cols-[0.88fr_1.12fr] gap-8 items-start">

          {/* INFO SIDEBAR */}
          <aside className="space-y-4">
            <div className="rounded-2xl border border-[#6b3a1f] bg-[#1e1108] p-6 shadow-[0_10px_24px_rgba(14,8,2,0.20)] relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#c9993f] to-[#8a3a0f]" />
              <h2 className="h-display text-[#f0dfc5] text-2xl uppercase tracking-[0.04em] font-bold mb-3 pl-2">
                Reach Us
              </h2>
              <div className="h-px w-full mb-5" style={{ background: "repeating-linear-gradient(90deg,#c9993f 0px,#c9993f 8px,transparent 8px,transparent 14px)" }} />

              <div className="space-y-5 text-sm md:text-base">
                <div>
                  <p className="text-[#8a6240] uppercase tracking-wide text-xs font-semibold mb-1">Email</p>
                  <a href="mailto:delibyvic@gmail.com" className="text-[#e0b97a] hover:text-[#c9993f] break-all transition">
                    delibyvic@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-[#8a6240] uppercase tracking-wide text-xs font-semibold mb-1">Phone</p>
                  <a href="tel:6154903544" className="text-[#e0b97a] hover:text-[#c9993f] transition">
                    (615) 490-3544
                  </a>
                </div>
                <div>
                  <p className="text-[#8a6240] uppercase tracking-wide text-xs font-semibold mb-1">Instagram</p>
                  <a
                    href="https://www.instagram.com/delibyvic/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#e0b97a] hover:text-[#c9993f] transition"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                    @delibyvic
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-[#6b3a1f] bg-[#2b1a0f] p-4 shadow-[0_6px_16px_rgba(14,8,2,0.15)]">
              <h3 className="h-display text-[#e0b97a] text-lg uppercase tracking-[0.04em] font-bold mb-1">
                Good to Know
              </h3>
              <p className="text-[#c5a882] text-sm leading-relaxed">
                For catering or larger orders, include your date, headcount,
                and preferred pickup time in the message so we can help faster.
              </p>
            </div>
          </aside>

          {/* FORM */}
          <div className="rounded-2xl border border-[#6b3a1f] bg-[#1e1108] p-6 md:p-7 shadow-[0_14px_34px_rgba(14,8,2,0.25)] relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#c9993f] to-[#8a3a0f]" />
            <div className="mb-5 pl-2">
              <h2 className="h-display text-[#f0dfc5] text-2xl md:text-3xl uppercase tracking-[0.04em] font-bold">
                Send a Message
              </h2>
              <p className="mt-2 text-[#c5a882] text-sm md:text-base">
                Fill out the form and we&apos;ll get back to you as soon as we can.
              </p>
            </div>

            <form className="space-y-4 pl-2" onSubmit={handleSubmit}>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold tracking-wide uppercase text-[#8a6240] mb-1.5">Name</label>
                  <input type="text" name="name" required placeholder="Your name"
                    className="w-full rounded-lg border border-[#6b3a1f] bg-[#2b1a0f] px-3 py-2 text-sm text-[#f0dfc5] placeholder:text-[#8a6240] focus:outline-none focus:ring-2 focus:ring-[#c9993f]/30 focus:border-[#c9993f]" />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-wide uppercase text-[#8a6240] mb-1.5">Email</label>
                  <input type="email" name="email" required placeholder="you@example.com"
                    className="w-full rounded-lg border border-[#6b3a1f] bg-[#2b1a0f] px-3 py-2 text-sm text-[#f0dfc5] placeholder:text-[#8a6240] focus:outline-none focus:ring-2 focus:ring-[#c9993f]/30 focus:border-[#c9993f]" />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold tracking-wide uppercase text-[#8a6240] mb-1.5">Phone (optional)</label>
                  <input type="tel" name="phone" placeholder="(615) 555-1234"
                    className="w-full rounded-lg border border-[#6b3a1f] bg-[#2b1a0f] px-3 py-2 text-sm text-[#f0dfc5] placeholder:text-[#8a6240] focus:outline-none focus:ring-2 focus:ring-[#c9993f]/30 focus:border-[#c9993f]" />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-wide uppercase text-[#8a6240] mb-1.5">Reason</label>
                  <select name="reason" defaultValue=""
                    className="w-full rounded-lg border border-[#6b3a1f] bg-[#2b1a0f] px-3 py-2 text-sm text-[#f0dfc5] focus:outline-none focus:ring-2 focus:ring-[#c9993f]/30 focus:border-[#c9993f]">
                    <option value="" disabled>Select an option</option>
                    <option value="general">General Question</option>
                    <option value="catering">Catering</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold tracking-wide uppercase text-[#8a6240] mb-1.5">Message</label>
                <textarea name="message" rows={6} required placeholder="Tell us how we can help..."
                  className="w-full rounded-lg border border-[#6b3a1f] bg-[#2b1a0f] px-3 py-2 text-sm text-[#f0dfc5] placeholder:text-[#8a6240] focus:outline-none focus:ring-2 focus:ring-[#c9993f]/30 focus:border-[#c9993f] resize-y" />
              </div>

              <div className="flex items-center justify-between pt-3 gap-3 flex-wrap">
                <div className="text-xs md:text-sm min-h-[1.5rem]">
                  {status === "success" && (
                    <span className="text-[#5a8a3a]">Message sent! We&apos;ll get back to you soon.</span>
                  )}
                  {status === "error" && (
                    <span className="text-[#c9993f]">{errorMessage || "Something went wrong. Please try again."}</span>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 rounded-xl border border-[#c9993f] bg-[#c9993f] px-5 py-2.5 text-sm md:text-base text-[#1e1108] font-bold hover:bg-[#b8882e] transition shadow-[0_8px_20px_rgba(201,153,63,0.25)] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "Sending..." : "Send Message"}
                  {submitting ? (
                    <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 animate-spin" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <circle cx="12" cy="12" r="9" className="opacity-30" /><path d="M21 12a9 9 0 0 0-9-9" />
                    </svg>
                  ) : (
                    <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M5 12h14" /><path d="m13 5 7 7-7 7" />
                    </svg>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* BOTTOM BAND */}
        <div className="rounded-2xl border border-[#6b3a1f] bg-[#1e1108] px-6 py-8 shadow-[0_10px_24px_rgba(14,8,2,0.20)]">
          <div className="flex items-center justify-center gap-4 text-center flex-wrap">
            <span className="h-[1.5px] w-16 bg-[#c9993f] rounded-full" />
            <div>
              <p className="text-xl md:text-2xl font-semibold text-[#f0dfc5] leading-snug">
                Good food starts with good people — reach out anytime.
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