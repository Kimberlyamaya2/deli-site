
import Link from "next/link";

export default function SectionLinkOverlay({
  href, label,
}: { href: string; label: string }) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="absolute inset-0 z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(212,175,55,0.6)] rounded-2xl"
      tabIndex={0}
    />
  );
}
