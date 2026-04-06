"use client";

import { FormEvent, useState } from "react";
import OrnateFrame from "@/components/OrnateFrame";

type Status = "idle" | "success" | "error";

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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          reason: formData.get("reason"),
          message: formData.get("message"),
        }),
      });

      const json = await res.json().catch(() => ({}));

      if (!res.ok || !json.success) {
        throw new Error(json.error || "Failed to send");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative scroll-mt-20 text-[#2b211b]">
      <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_50%_-10%,rgba(155,107,52,0.08),transparent)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-14 md:py-16 space-y-14">
        {/* HERO */}
        <OrnateFrame>
          <div className="grid lg:grid-cols-[1.02fr_0.98fr] gap-10 items-center">
            <div className="space-y-5">
              <p className="inline-flex items-center gap-2 rounded-full border border-[#a88463] bg-[#efe1d0] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[#7a563b] shadow-sm">
                Contact Victor’s
              </p>

              <h1 className="h-display text-[#4a3225] text-4xl sm:text-5xl md:text-6xl uppercase tracking-[0.04em] font-bold leading-[0.95]">
                Let’s Talk
              </h1>

              <p className="text-base sm:text-lg md:text-xl italic text-[#5f4735] max-w-xl">
                Questions, catering inquiries, feedback, or just saying hello —
                we’d love to hear from you.
              </p>

              <div className="h-px w-32 rounded-full bg-gradient-to-r from-transparent via-[#8a5a2b] to-transparent" />

              <div className="rounded-2xl border border-[#b99d84] bg-[#e6d6c5] p-5 shadow-[0_8px_22px_rgba(43,33,27,0.08)] max-w-xl">
                <p className="text-[#2b211b] text-base leading-relaxed">
                  Whether you’re reaching out about the menu, catering, hours,
                  or future opportunities, we’re here for it.
                </p>
                <p className="mt-2 text-[#6f4d34] text-sm">
                  We read every message and do our best to respond quickly.
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              {[
                {
                  h: "Visit",
                  p: "Mena Plaza\n360 Wallace Rd\nNashville, TN 37211",
                },
                {
                  h: "Call",
                  p: "(615) 000-0000",
                },
                {
                  h: "Hours",
                  p: "Mon–Sat: 8AM–7PM\nSun: Closed",
                },
              ].map((item) => (
                <div
                  key={item.h}
                  className="rounded-xl border border-[#bda186] bg-[#e6d6c5] p-4 shadow-[0_6px_16px_rgba(43,33,27,0.05)]"
                >
                  <h2 className="h-display text-[#5a3d2b] text-lg uppercase tracking-[0.04em] font-bold mb-1">
                    {item.h}
                  </h2>
                  <p className="text-[#5a4333] text-sm whitespace-pre-line leading-relaxed">
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
            <div className="rounded-2xl border border-[#b99d84] bg-[#e2d1bf] p-6 shadow-[0_10px_24px_rgba(43,33,27,0.06)]">
              <h2 className="h-display text-[#5a3d2b] text-2xl uppercase tracking-[0.04em] font-bold mb-3">
                Reach Us
              </h2>

              <div className="h-px w-full bg-[#c7ab90] mb-5" />

              <div className="space-y-5 text-sm md:text-base">
                <div>
                  <p className="text-[#6f4d34] uppercase tracking-wide text-xs font-semibold mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:delibyvic@gmail.com"
                    className="text-[#2b211b] hover:text-[#6f4d34] break-all"
                  >
                    delibyvic@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-[#6f4d34] uppercase tracking-wide text-xs font-semibold mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:6150000000"
                    className="text-[#2b211b] hover:text-[#6f4d34]"
                  >
                    (615) 000-0000
                  </a>
                </div>

                <div>
  <p className="text-[#6f4d34] uppercase tracking-wide text-xs font-semibold mb-1">
    Instagram
  </p>

  <a
    href="https://www.instagram.com/delibyvic/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 text-[#2b211b] hover:text-[#6f4d34]"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="h-4 w-4"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>

    @delibyvic
  </a>
</div>
              </div>
            </div>

            <div className="rounded-xl border border-[#bda186] bg-[#e6d6c5] p-4 shadow-[0_6px_16px_rgba(43,33,27,0.05)]">
              <h3 className="h-display text-[#5a3d2b] text-lg uppercase tracking-[0.04em] font-bold mb-1">
                Good to Know
              </h3>
              <p className="text-[#5a4333] text-sm leading-relaxed">
                For catering or larger orders, include your date, headcount,
                and preferred pickup time in the message so we can help faster.
              </p>
            </div>
          </aside>

          {/* FORM */}
          <div className="rounded-2xl border border-[#9f7a58] bg-[#dcc7b2] p-6 md:p-7 shadow-[0_14px_34px_rgba(43,33,27,0.14)]">
            <div className="mb-5">
              <h2 className="h-display text-[#4a3225] text-2xl md:text-3xl uppercase tracking-[0.04em] font-bold">
                Send a Message
              </h2>
              <p className="mt-2 text-[#5a4333] text-sm md:text-base">
                Fill out the form and we’ll get back to you as soon as we can.
              </p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold tracking-wide uppercase text-[#6f4d34] mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full rounded-lg border border-[#b99d84] bg-[#f3e7db] px-3 py-2 text-sm text-[#2b211b] placeholder:text-[#8a6a52] focus:outline-none focus:ring-2 focus:ring-[#8a5a2b]/30 focus:border-[#8a5a2b]"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold tracking-wide uppercase text-[#6f4d34] mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-[#b99d84] bg-[#f3e7db] px-3 py-2 text-sm text-[#2b211b] placeholder:text-[#8a6a52] focus:outline-none focus:ring-2 focus:ring-[#8a5a2b]/30 focus:border-[#8a5a2b]"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold tracking-wide uppercase text-[#6f4d34] mb-1.5">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full rounded-lg border border-[#b99d84] bg-[#f3e7db] px-3 py-2 text-sm text-[#2b211b] placeholder:text-[#8a6a52] focus:outline-none focus:ring-2 focus:ring-[#8a5a2b]/30 focus:border-[#8a5a2b]"
                    placeholder="(615) 555-1234"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold tracking-wide uppercase text-[#6f4d34] mb-1.5">
                    Reason
                  </label>
                  <select
                    name="reason"
                    defaultValue=""
                    className="w-full rounded-lg border border-[#b99d84] bg-[#f3e7db] px-3 py-2 text-sm text-[#2b211b] focus:outline-none focus:ring-2 focus:ring-[#8a5a2b]/30 focus:border-[#8a5a2b]"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="general">General Question</option>
                    <option value="catering">Catering</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold tracking-wide uppercase text-[#6f4d34] mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={6}
                  required
                  className="w-full rounded-lg border border-[#b99d84] bg-[#f3e7db] px-3 py-2 text-sm text-[#2b211b] placeholder:text-[#8a6a52] focus:outline-none focus:ring-2 focus:ring-[#8a5a2b]/30 focus:border-[#8a5a2b] resize-y"
                  placeholder="Tell us how we can help..."
                />
              </div>

              <div className="flex items-center justify-between pt-3 gap-3 flex-wrap">
                <div className="text-xs md:text-sm min-h-[1.5rem]">
                  {status === "success" && (
                    <span className="text-[#2f6b3d]">
                      Message sent! We’ll get back to you soon.
                    </span>
                  )}

                  {status === "error" && (
                    <span className="text-[#8b2f2f]">
                      {errorMessage || "Something went wrong. Please try again."}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 rounded-xl border border-[#8f6b4f] bg-[#2b211b] px-5 py-2.5 text-sm md:text-base text-white hover:bg-[#3a2d25] transition shadow-[0_8px_20px_rgba(43,33,27,0.14)] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "Sending..." : "Send Message"}
                  {submitting ? (
                    <svg
                      aria-hidden
                      viewBox="0 0 24 24"
                      className="h-4 w-4 animate-spin"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      <circle cx="12" cy="12" r="9" className="opacity-30" />
                      <path d="M21 12a9 9 0 0 0-9-9" />
                    </svg>
                  ) : (
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
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="rounded-2xl border border-[#b99d84] bg-[#dcc7b2] px-6 py-8 shadow-[0_10px_24px_rgba(43,33,27,0.06)]">
          <div className="flex items-center justify-center gap-4 text-center flex-wrap">
            <span className="h-[1.5px] w-16 bg-[#b38a67] rounded-full"></span>
            <p className="text-xl md:text-2xl font-semibold text-[#5a3d2b] leading-snug">
              Good food starts with good people — reach out anytime.
            </p>
            <span className="h-[1.5px] w-16 bg-[#b38a67] rounded-full"></span>
          </div>
        </div>
      </div>
    </section>
  );
}