export default function AboutPage() {
  return (
    <section className="relative scroll-mt-20 py-16 px-6 md:px-12 lg:px-24 text-amber-100">
      {/* Decorative background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_0%,rgba(212,175,55,0.06),transparent)] pointer-events-none" />

      {/* Container */}
      <div className="relative max-w-4xl mx-auto text-center">
        {/* Title with gold lines beside */}
        <div className="flex items-center justify-center gap-6 mb-8">
          <span className="h-[1px] w-24 md:w-40 bg-[var(--gold-primary)] opacity-60 rounded-full" />
          <h1 className="h-display subhead-gold text-5xl md:text-6xl tracking-wide uppercase text-center">
  About Us
</h1>

          <span className="h-[1px] w-24 md:w-40 bg-[var(--gold-primary)] opacity-60 rounded-full" />
        </div>

        {/* Subheading */}
        <p className="text-lg italic text-amber-200/90 mb-10">
          “Built on friendship, promise, and purpose.”
        </p>

        {/* Main content */}
        <div className="prose prose-invert prose-amber mx-auto text-left text-lg leading-relaxed space-y-6">
          <p>
            <strong>Welcome to Victor’s Classic Deli</strong> — where every
            sandwich tells a story of friendship, dedication, and a promise kept.
          </p>

          <p>
            Victor’s Classic Deli is more than just a place to enjoy a great
            meal; it’s a heartfelt tribute to a bond that shaped a lifetime. A
            story of two best friends, years of loyalty, and one promise that
            changed everything.
          </p>

          <p>
            Victor, the heart and soul behind this deli, made a promise to his
            best friend <strong>Niraj</strong>, a passionate chef who once ran
            two beloved restaurants in Chicago. Niraj wasn’t just a friend—he
            was family. A brother. Someone who brought people together with food,
            heart, and hustle. When Niraj had to walk away from the kitchen, he
            looked at Victor and said:
          </p>

          <blockquote className="border-l-2 border-[var(--gold-primary)] pl-4 italic text-amber-100/90">
            “If you ever open a place, make it a classic. Make it yours. And
            make it matter.”
          </blockquote>

          <p>
            Victor held onto that promise. And after Niraj’s passing, that memory
            became his mission. It’s what gets him up every morning. What keeps
            him pushing. What fuels the care behind every sandwich, every sauce,
            and every smile.
          </p>

          <p>
            Victor’s Classic Deli is built on that kind of loyalty—on the love of
            a lifelong brotherhood and the power of honoring someone through hard
            work and heart.
          </p>

          <p>
            And now, <strong>you’re part of that story.</strong> When you walk
            through these doors, you’re not just a customer. You’re family. By
            showing up, by supporting this small business, by choosing to eat
            here—you’re keeping that promise alive. You’re helping Victor carry
            forward something that means everything.
          </p>

          <p>
            Every order is made with love. Every visit matters. This isn’t fast
            food—it’s food that means something.
          </p>

          <p>
            <strong>
              Welcome to Victor’s Classic Deli — where a promise started it all,
              and where every guest is part of the legacy.
            </strong>
          </p>

          <p className="text-center text-xl text-[var(--gold-primary)] font-semibold mt-10 tracking-wide">
            Come hungry. Leave inspired. Come back like you never left.
          </p>
        </div>
      </div>

      {/* Optional subtle bottom divider */}
      <div className="mt-16 flex justify-center">
        <span className="h-[1px] w-[80%] max-w-3xl bg-[var(--gold-primary)] opacity-30 rounded-full" />
      </div>
    </section>
  );
}
