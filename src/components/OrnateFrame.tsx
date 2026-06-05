export default function OrnateFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  const cornerClasses = [
    "absolute -top-1 -left-1",
    "absolute -top-1 -right-1 rotate-90",
    "absolute -bottom-1 -left-1 -rotate-90",
    "absolute -bottom-1 -right-1 rotate-180",
  ];

  return (
    <div
      className="
        relative overflow-hidden rounded-2xl
        border border-[#6b3a1f]
        bg-[#1e1108]
        shadow-[0_18px_48px_rgba(14,8,2,0.40)]
      "
    >
      {/* Scattered petals — all static coords, no runtime trig */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.13]"
        viewBox="0 0 900 420"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="#c9993f"
      >
        {/* top row — small petals rx14×ry5 */}
        <ellipse cx="42"  cy="38"  rx="14" ry="5" strokeWidth="0.8" transform="rotate(20,42,38)" />
        <ellipse cx="130" cy="15"  rx="14" ry="5" strokeWidth="0.8" transform="rotate(70,130,15)" />
        <ellipse cx="210" cy="55"  rx="14" ry="5" strokeWidth="0.8" transform="rotate(-30,210,55)" />
        <ellipse cx="310" cy="22"  rx="14" ry="5" strokeWidth="0.8" transform="rotate(110,310,22)" />
        <ellipse cx="400" cy="40"  rx="14" ry="5" strokeWidth="0.8" transform="rotate(-55,400,40)" />
        <ellipse cx="510" cy="18"  rx="14" ry="5" strokeWidth="0.8" transform="rotate(85,510,18)" />
        <ellipse cx="600" cy="50"  rx="14" ry="5" strokeWidth="0.8" transform="rotate(145,600,50)" />
        <ellipse cx="700" cy="25"  rx="14" ry="5" strokeWidth="0.8" transform="rotate(-10,700,25)" />
        <ellipse cx="790" cy="42"  rx="14" ry="5" strokeWidth="0.8" transform="rotate(60,790,42)" />
        <ellipse cx="860" cy="12"  rx="14" ry="5" strokeWidth="0.8" transform="rotate(130,860,12)" />

        {/* upper-mid row — medium petals rx20×ry7 */}
        <ellipse cx="75"  cy="140" rx="20" ry="7" strokeWidth="0.9" transform="rotate(50,75,140)" />
        <ellipse cx="180" cy="105" rx="20" ry="7" strokeWidth="0.9" transform="rotate(-80,180,105)" />
        <ellipse cx="260" cy="170" rx="20" ry="7" strokeWidth="0.9" transform="rotate(15,260,170)" />
        <ellipse cx="370" cy="120" rx="20" ry="7" strokeWidth="0.9" transform="rotate(160,370,120)" />
        <ellipse cx="450" cy="185" rx="20" ry="7" strokeWidth="0.9" transform="rotate(-40,450,185)" />
        <ellipse cx="555" cy="95"  rx="20" ry="7" strokeWidth="0.9" transform="rotate(100,555,95)" />
        <ellipse cx="640" cy="155" rx="20" ry="7" strokeWidth="0.9" transform="rotate(-120,640,155)" />
        <ellipse cx="740" cy="110" rx="20" ry="7" strokeWidth="0.9" transform="rotate(35,740,110)" />
        <ellipse cx="830" cy="160" rx="20" ry="7" strokeWidth="0.9" transform="rotate(75,830,160)" />

        {/* mid-field accents rx16×ry6 */}
        <ellipse cx="100" cy="210" rx="16" ry="6" strokeWidth="0.8" transform="rotate(165,100,210)" />
        <ellipse cx="340" cy="200" rx="16" ry="6" strokeWidth="0.8" transform="rotate(-45,340,200)" />
        <ellipse cx="490" cy="225" rx="16" ry="6" strokeWidth="0.8" transform="rotate(75,490,225)" />
        <ellipse cx="720" cy="195" rx="16" ry="6" strokeWidth="0.8" transform="rotate(-130,720,195)" />
        <ellipse cx="870" cy="220" rx="16" ry="6" strokeWidth="0.8" transform="rotate(30,870,220)" />

        {/* lower-mid row — large petals rx28×ry9 */}
        <ellipse cx="55"  cy="270" rx="28" ry="9" strokeWidth="1"   transform="rotate(-25,55,270)" />
        <ellipse cx="170" cy="310" rx="28" ry="9" strokeWidth="1"   transform="rotate(140,170,310)" />
        <ellipse cx="300" cy="255" rx="28" ry="9" strokeWidth="1"   transform="rotate(55,300,255)" />
        <ellipse cx="420" cy="300" rx="28" ry="9" strokeWidth="1"   transform="rotate(-90,420,300)" />
        <ellipse cx="530" cy="265" rx="28" ry="9" strokeWidth="1"   transform="rotate(170,530,265)" />
        <ellipse cx="660" cy="320" rx="28" ry="9" strokeWidth="1"   transform="rotate(20,660,320)" />
        <ellipse cx="770" cy="260" rx="28" ry="9" strokeWidth="1"   transform="rotate(-60,770,260)" />
        <ellipse cx="860" cy="300" rx="28" ry="9" strokeWidth="1"   transform="rotate(105,860,300)" />

        {/* bottom scatter — small & medium mix */}
        <ellipse cx="30"  cy="390" rx="14" ry="5" strokeWidth="0.8" transform="rotate(80,30,390)" />
        <ellipse cx="120" cy="405" rx="20" ry="7" strokeWidth="0.9" transform="rotate(-35,120,405)" />
        <ellipse cx="240" cy="395" rx="14" ry="5" strokeWidth="0.8" transform="rotate(120,240,395)" />
        <ellipse cx="350" cy="410" rx="20" ry="7" strokeWidth="0.9" transform="rotate(40,350,410)" />
        <ellipse cx="480" cy="400" rx="14" ry="5" strokeWidth="0.8" transform="rotate(-70,480,400)" />
        <ellipse cx="590" cy="408" rx="20" ry="7" strokeWidth="0.9" transform="rotate(150,590,408)" />
        <ellipse cx="700" cy="395" rx="14" ry="5" strokeWidth="0.8" transform="rotate(-15,700,395)" />
        <ellipse cx="810" cy="405" rx="20" ry="7" strokeWidth="0.9" transform="rotate(90,810,405)" />
        <ellipse cx="880" cy="388" rx="14" ry="5" strokeWidth="0.8" transform="rotate(45,880,388)" />
      </svg>

      {/* Top warm glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_300px_at_50%_0%,rgba(210,160,80,0.12),transparent)]" />

      {/* Corner ornaments */}
      {cornerClasses.map((cls, i) => (
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

      {/* Spice stripe */}
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