import * as React from "react";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  className?: string;
};

export default function GoldButton({
  href,
  children,
  className,
  ...props
}: Props) {
  const base =
    "inline-block rounded-xl font-medium px-5 py-2 transition " +
    "shadow-[0_6px_14px_rgba(43,33,27,0.08)]";

  return (
    <a href={href} className={`${base} ${className ?? ""}`} {...props}>
      {children}
    </a>
  );
}
