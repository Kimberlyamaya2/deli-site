export default function GoldButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-block rounded-xl bg-gold-500 text-cocoa-900 font-medium px-5 py-2 shadow-[0_1px_0_rgba(255,240,200,0.6)_inset,0_0_0_1px_rgba(139,104,27,0.65)] hover:shadow-[0_0_0_3px_rgba(212,175,55,0.25)] transition"
    >
      {children}
    </a>
  );
}
