export default function OrnateFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="
        relative overflow-hidden rounded-2xl
        border border-[#6b3a1f]
        bg-[#1e1108]
        shadow-[0_18px_48px_rgba(14,8,2,0.40)]
      "
    >
      {/* Mandala background pattern */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.07]"
        viewBox="0 0 600 400"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(300,200)" stroke="#e0b97a" fill="none">
          {/* Petal ring at r=90 */}
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (i * Math.PI) / 4;
            const cx = Math.cos(a) * 90;
            const cy = Math.sin(a) * 90;
            return (
              <ellipse
                key={i}
                cx={cx}
                cy={cy}
                rx="18"
                ry="8"
                transform={`rotate(${(i * 45) + 90},${cx},${cy})`}
                strokeWidth="0.7"
              />
            );
          })}
          {/* Diamond dots on r=155 */}
          {Array.from({ length: 16 }).map((_, i) => {
            const a = (i * Math.PI) / 8;
            const cx = Math.cos(a) * 155;
            const cy = Math.sin(a) * 155;
            return (
              <rect
                key={i}
                x={cx - 3}
                y={cy - 3}
                width="6"
                height="6"
                transform={`rotate(45,${cx},${cy})`}
                strokeWidth="0.6"
              />
            );
          })}
          {/* Lotus petals at r=195 */}
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (i * Math.PI) / 6;
            const cx = Math.cos(a) * 195;
            const cy = Math.sin(a) * 195;
            return (
              <ellipse
                key={i}
                cx={cx}
                cy={cy}
                rx="14"
                ry="6"
                transform={`rotate(${(i * 30) + 90},${cx},${cy})`}
                strokeWidth="0.6"
              />
            );
          })}
          {/* Center star */}
          <circle r="6" strokeWidth="1" />
          <circle r="3" strokeWidth="0.8" />
        </g>
      </svg>

      {/* Top warm glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_300px_at_50%_0%,rgba(210,160,80,0.12),transparent)]" />

      {/* Corner ornaments — gold leaf style */}
      {[
        "absolute -top-1 -left-1",
        "absolute -top-1 -right-1 rotate-90",
        "absolute -bottom-1 -left-1 -rotate-90",
        "absolute -bottom-1 -right-1 rotate-180",
      ].map((cls, i) => (
        <svg
          key={i}
          aria-hidden
          className={`pointer-events-none ${cls} h-12 w-12 opacity-90`}
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M4 28 C5 20, 10 14, 18 12 C17 8, 20 5, 28 4 C27 12, 24 15, 17 16 C14 20, 11 24, 4 28Z"
            stroke="#c9993f"
            strokeWidth="1.2"
            fill="rgba(201,153,63,0.08)"
          />
          <circle cx="28" cy="4" r="1.5" fill="#c9993f" />
          <circle cx="4" cy="28" r="1.5" fill="#c9993f" />
        </svg>
      ))}

      {/* Repeating border-stripe along bottom edge */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-[3px]"
        style={{
          background:
            "repeating-linear-gradient(90deg,#c9993f 0px,#c9993f 10px,#8a3a0f 10px,#8a3a0f 18px,transparent 18px,transparent 26px)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-6 sm:py-8 md:py-12">
        {children}
      </div>
    </div>
  );
}
