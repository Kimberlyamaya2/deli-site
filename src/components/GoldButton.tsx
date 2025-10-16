export default function GoldButton({
  href, children,
}: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-block rounded-xl bg-gold-500 text-cocoa-900 font-medium px-5 py-2 shadow-gold hover:shadow-glow transition"
    >
      {children}
    </a>
  );
}
