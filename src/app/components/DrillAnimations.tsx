import { motion } from "motion/react";

// ── Helpers ───────────────────────────────────────────────────────────────────

/** Polar → cartesian. deg=0 is 12-o'clock, increases clockwise. */
const pt = (r: number, deg: number): [number, number] => {
  const rad = ((deg - 90) * Math.PI) / 180;
  return [
    Math.round(r * Math.cos(rad) * 100) / 100,
    Math.round(r * Math.sin(rad) * 100) / 100,
  ];
};

/**
 * Build a gear/toothed-wheel path centered at 0,0.
 * Each tooth has a flat top (two outer-radius points) creating a blocky profile
 * that reads clearly at small sizes.
 */
function buildGear(r: number, teeth: number, depth = 0.25): string {
  const outerR = r;
  const innerR = r * (1 - depth);
  let d = "";
  for (let i = 0; i < teeth; i++) {
    const step = 360 / teeth;
    const a0 = i * step;
    const a1 = a0 + step * 0.22;   // leading shoulder → tooth base
    const a2 = a0 + step * 0.36;   // tooth leading edge (outer)
    const a3 = a0 + step * 0.64;   // tooth trailing edge (outer)
    const a4 = a0 + step * 0.78;   // trailing shoulder
    const a5 = a0 + step;          // next tooth base

    const p0 = pt(innerR, a0);
    const p1 = pt(innerR, a1);
    const p2 = pt(outerR, a2);
    const p3 = pt(outerR, a3);
    const p4 = pt(innerR, a4);
    const p5 = pt(innerR, a5);

    if (i === 0) d += `M ${p0[0]} ${p0[1]}`;
    d += ` L ${p1[0]} ${p1[1]} L ${p2[0]} ${p2[1]} L ${p3[0]} ${p3[1]} L ${p4[0]} ${p4[1]} L ${p5[0]} ${p5[1]}`;
  }
  return d + " Z";
}

/** Build a PDC blade path. Starts near hub, sweeps clockwise to outer rim. */
function buildBlade(innerR: number, outerR: number, startDeg: number, sweepDeg: number, widthDeg: number): string {
  const [x0, y0] = pt(innerR, startDeg);
  const [x1, y1] = pt(outerR, startDeg + sweepDeg);
  const [x2, y2] = pt(outerR, startDeg + sweepDeg + widthDeg);
  const [x3, y3] = pt(innerR, startDeg + widthDeg + 6);
  return `M ${x0} ${y0} L ${x1} ${y1} A ${outerR} ${outerR} 0 0 1 ${x2} ${y2} L ${x3} ${y3} Z`;
}


// ── TRICONE BIT ───────────────────────────────────────────────────────────────

const BLUE = "#137fec";
const BLUE_D = "#0d6fd4";

export function TriconeBitAnimation() {
  const largeTeeth = buildGear(33, 18, 0.24);
  const smallTeeth = buildGear(27, 15, 0.26);

  const debrisParticles = [
    { x: 10,  dx: -12, delay: 0.00, r: 2.5 },
    { x: 46,  dx:  -7, delay: 0.35, r: 2.0 },
    { x: 76,  dx:  -4, delay: 0.60, r: 1.8 },
    { x: 100, dx:   0, delay: 0.10, r: 3.0 },
    { x: 124, dx:   4, delay: 0.80, r: 1.8 },
    { x: 154, dx:   7, delay: 0.50, r: 2.0 },
    { x: 190, dx:  12, delay: 0.75, r: 2.5 },
    { x: 28,  dx: -14, delay: 1.10, r: 1.4 },
    { x: 172, dx:  14, delay: 0.90, r: 1.4 },
  ];

  return (
    <svg
      viewBox="0 0 200 272"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        {/* Hatching for drill collar */}
        <pattern id="tc-hatch" patternUnits="userSpaceOnUse" width="5" height="5" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="5" stroke={BLUE} strokeWidth="0.9" opacity="0.2" />
        </pattern>
        {/* Soft glow filter */}
        <filter id="tc-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ── Static annotations ── */}
      {/* Center axis */}
      <line x1="100" y1="0" x2="100" y2="272" stroke={BLUE} strokeWidth="0.5" strokeDasharray="6 4" opacity="0.15" />
      {/* Right depth marker */}
      <line x1="188" y1="16" x2="188" y2="204" stroke={BLUE} strokeWidth="0.5" opacity="0.18" />
      <line x1="183" y1="16" x2="193" y2="16" stroke={BLUE} strokeWidth="0.5" opacity="0.18" />
      <line x1="183" y1="204" x2="193" y2="204" stroke={BLUE} strokeWidth="0.5" opacity="0.18" />
      <text x="194" y="112" fill={BLUE} fontSize="6" fontFamily="monospace" opacity="0.25" transform="rotate(90,194,112)">DEPTH</text>

      {/* ── Whole assembly: slow drilling oscillation ── */}
      <motion.g
        animate={{ y: [0, -9, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* ── Drill collar ── */}
        <rect x="76" y="5" width="48" height="32" rx="4" fill="url(#tc-hatch)" stroke={BLUE} strokeWidth="1.5" />
        {/* Top pin */}
        <rect x="72" y="3" width="56" height="8" rx="3" fill={BLUE} opacity="0.22" />
        {/* Groove lines on collar */}
        {[88, 100, 112].map((xg) => (
          <line key={xg} x1={xg} y1="10" x2={xg} y2="33" stroke={BLUE} strokeWidth="0.9" opacity="0.25" />
        ))}

        {/* ── Bit body / shoulder ── */}
        <path d="M67 37 H133 L126 63 H74 Z" fill={BLUE} fillOpacity="0.09" stroke={BLUE} strokeWidth="1.5" />
        {/* Top nozzle */}
        <circle cx="100" cy="49" r="6.5" fill={BLUE} fillOpacity="0.12" stroke={BLUE} strokeWidth="1" />
        <circle cx="100" cy="49" r="2.8" fill={BLUE} opacity="0.45" />

        {/* ── Leg arms ── */}
        {/* Left */}
        <path d="M74 63 L33 118" stroke={BLUE} strokeWidth="10" strokeLinecap="round" opacity="0.10" />
        <path d="M74 63 L33 118" stroke={BLUE} strokeWidth="4.5" strokeLinecap="round" opacity="0.85" />
        {/* Right */}
        <path d="M126 63 L167 118" stroke={BLUE} strokeWidth="10" strokeLinecap="round" opacity="0.10" />
        <path d="M126 63 L167 118" stroke={BLUE} strokeWidth="4.5" strokeLinecap="round" opacity="0.85" />
        {/* Center fork */}
        <path d="M88 63 L79 120" stroke={BLUE} strokeWidth="3.5" strokeLinecap="round" opacity="0.85" />
        <path d="M112 63 L121 120" stroke={BLUE} strokeWidth="3.5" strokeLinecap="round" opacity="0.85" />

        {/* ── LEFT CONE — cx=36, cy=152 ── */}
        <g transform="translate(36, 152)">
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 1.9, repeat: Infinity, ease: "linear" }}
          >
            <circle r="28" fill="#dbeafe" fillOpacity="0.45" stroke={BLUE} strokeWidth="1.5" />
            <path d={smallTeeth} fill={BLUE} fillOpacity="0.6" stroke={BLUE} strokeWidth="0.5" />
            <circle r="9" fill={BLUE} fillOpacity="0.10" stroke={BLUE} strokeWidth="1" />
            <circle r="3.5" fill={BLUE} opacity="0.55" />
          </motion.g>
        </g>

        {/* ── CENTER CONE — cx=100, cy=163 ── */}
        <g transform="translate(100, 163)">
          <motion.g
            animate={{ rotate: -360 }}
            transition={{ duration: 1.35, repeat: Infinity, ease: "linear" }}
            filter="url(#tc-glow)"
          >
            <circle r="33" fill="#dbeafe" fillOpacity="0.5" stroke={BLUE} strokeWidth="1.8" />
            <path d={largeTeeth} fill={BLUE} fillOpacity="0.65" stroke={BLUE} strokeWidth="0.5" />
            <circle r="11" fill={BLUE} fillOpacity="0.12" stroke={BLUE} strokeWidth="1.2" />
            <circle r="4.5" fill={BLUE} opacity="0.6" />
          </motion.g>
          {/* Static reference cross */}
          <line x1="-33" y1="0" x2="33" y2="0" stroke={BLUE} strokeWidth="0.5" strokeDasharray="2 2" opacity="0.22" />
          <line x1="0" y1="-33" x2="0" y2="33" stroke={BLUE} strokeWidth="0.5" strokeDasharray="2 2" opacity="0.22" />
        </g>

        {/* ── RIGHT CONE — cx=164, cy=152 ── */}
        <g transform="translate(164, 152)">
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 1.9, repeat: Infinity, ease: "linear" }}
          >
            <circle r="28" fill="#dbeafe" fillOpacity="0.45" stroke={BLUE} strokeWidth="1.5" />
            <path d={smallTeeth} fill={BLUE} fillOpacity="0.6" stroke={BLUE} strokeWidth="0.5" />
            <circle r="9" fill={BLUE} fillOpacity="0.10" stroke={BLUE} strokeWidth="1" />
            <circle r="3.5" fill={BLUE} opacity="0.55" />
          </motion.g>
        </g>
      </motion.g>

      {/* ── Rock / Formation surface (static) ── */}
      <path
        d="M0 222 Q18 214 48 222 Q78 230 112 218 Q142 208 170 220 Q186 226 200 220 L200 272 L0 272 Z"
        fill={BLUE}
        fillOpacity="0.05"
      />
      <path
        d="M0 222 Q18 214 48 222 Q78 230 112 218 Q142 208 170 220 Q186 226 200 220"
        fill="none"
        stroke={BLUE}
        strokeWidth="1"
        strokeDasharray="5 3"
        opacity="0.28"
      />
      {/* Rock grain marks */}
      {[[18, 237], [50, 243], [88, 234], [128, 246], [162, 238], [188, 244]].map(([rx, ry], i) => (
        <line key={i} x1={rx} y1={ry} x2={rx + 9} y2={ry + 5} stroke={BLUE} strokeWidth="1" opacity="0.12" />
      ))}

      {/* ── Debris particles ── */}
      {debrisParticles.map((p, i) => (
        <motion.circle
          key={i}
          r={p.r}
          fill={BLUE}
          initial={{ cx: p.x, cy: 218, opacity: 0.85 }}
          animate={{ cx: p.x + p.dx, cy: 236, opacity: 0 }}
          transition={{ duration: 0.95, repeat: Infinity, delay: p.delay, ease: "easeOut" }}
        />
      ))}

      {/* ── Technical label ── */}
      <text x="8" y="264" fill={BLUE} fontSize="7" fontFamily="monospace" opacity="0.4" letterSpacing="0.4">
        TRICONE BIT — ROTO PNEUMÁTICO
      </text>
    </svg>
  );
}


// ── PDC BIT ───────────────────────────────────────────────────────────────────

const ORG = "#f97316";
const ORG_D = "#ea6c0a";
const ORG_CREAM = "#fff7ed";

export function PDCBitAnimation() {
  // Blade geometry
  const INNER_R = 14;
  const OUTER_R = 82;
  const SWEEP = 36;
  const WIDTH = 11;

  // 6 PDC cutter positions along the blade (inner→outer)
  const cutterRs = [22, 32, 43, 54, 65, 76];
  const cutterPts = cutterRs.map((r) => {
    const angle = (r / OUTER_R) * SWEEP;
    return pt(r, angle);
  });

  // 3 nozzle angles: between each pair of blades (blades at 0°, 120°, 240°)
  const nozzleAngles = [60, 180, 300];

  return (
    <svg
      viewBox="0 0 200 218"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <filter id="pdc-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ── Static: outer housing + reference circles ── */}
      <g transform="translate(100, 104)">
        {/* Reference circles (dashed) */}
        {[30, 52, 72].map((r) => (
          <circle
            key={r}
            r={r}
            stroke={ORG}
            strokeWidth="0.6"
            strokeDasharray="5 3"
            opacity="0.18"
          />
        ))}
        {/* Outer bit shell */}
        <circle r="92" fill="none" stroke={ORG} strokeWidth="1.6" opacity="0.28" />
        <circle r="96" fill="none" stroke={ORG} strokeWidth="0.5" opacity="0.12" />

        {/* Static crosshair */}
        <line x1="-93" y1="0" x2="93" y2="0" stroke={ORG} strokeWidth="0.5" strokeDasharray="4 4" opacity="0.14" />
        <line x1="0" y1="-93" x2="0" y2="93" stroke={ORG} strokeWidth="0.5" strokeDasharray="4 4" opacity="0.14" />
      </g>

      {/* ── Rotating face (blades + cutters + nozzles + hub) ── */}
      <g transform="translate(100, 104)">
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "linear" }}
        >
          {/* ── 3 Blades ── */}
          {[0, 120, 240].map((rot) => (
            <g key={rot} transform={`rotate(${rot})`}>
              {/* Blade body */}
              <path
                d={buildBlade(INNER_R, OUTER_R, 0, SWEEP, WIDTH)}
                fill={ORG}
                fillOpacity="0.52"
                stroke={ORG}
                strokeWidth="1.2"
              />
              {/* Blade spine line */}
              {(() => {
                const [sx, sy] = pt(INNER_R + 4, SWEEP * 0.5);
                const [ex, ey] = pt(OUTER_R - 6, SWEEP * 0.5 + 2);
                return (
                  <line
                    x1={sx} y1={sy} x2={ex} y2={ey}
                    stroke={ORG_CREAM}
                    strokeWidth="0.8"
                    opacity="0.5"
                  />
                );
              })()}
              {/* PDC Diamond cutters */}
              {cutterPts.map(([cx, cy], j) => (
                <g key={j}>
                  {/* Cutter backing disk */}
                  <circle
                    cx={cx}
                    cy={cy}
                    r={5}
                    fill={ORG}
                    stroke={ORG_D}
                    strokeWidth="0.8"
                    opacity="0.7"
                  />
                  {/* Diamond face */}
                  <rect
                    x={cx - 3.5}
                    y={cy - 3.5}
                    width="7"
                    height="7"
                    rx="0.8"
                    fill={ORG_CREAM}
                    stroke={ORG_D}
                    strokeWidth="0.9"
                    transform={`rotate(45, ${cx}, ${cy})`}
                  />
                </g>
              ))}
            </g>
          ))}

          {/* ── Nozzles & fluid jets (rotate with the bit) ── */}
          {nozzleAngles.map((a, ni) => {
            const [nx, ny] = pt(40, a);
            return (
              <g key={ni}>
                {/* Nozzle port */}
                <circle
                  cx={nx}
                  cy={ny}
                  r={7}
                  fill={ORG}
                  fillOpacity="0.14"
                  stroke={ORG}
                  strokeWidth="1.2"
                />
                <circle cx={nx} cy={ny} r={3} fill={ORG} opacity="0.55" />
                {/* Fluid jet particles */}
                {[0, 0.22, 0.46].map((delay, j) => {
                  const travelR = 40 + 20 + j * 10;
                  const [ex, ey] = pt(travelR, a);
                  return (
                    <motion.circle
                      key={j}
                      r={2.8 - j * 0.6}
                      fill={ORG}
                      initial={{ cx: nx, cy: ny, opacity: 0.85 }}
                      animate={{ cx: ex, cy: ey, opacity: 0 }}
                      transition={{
                        duration: 0.72,
                        repeat: Infinity,
                        delay,
                        ease: "easeOut",
                      }}
                    />
                  );
                })}
              </g>
            );
          })}

          {/* ── Center hub ── */}
          <circle
            r="14"
            fill={ORG}
            stroke={ORG_D}
            strokeWidth="2"
            opacity="0.92"
            filter="url(#pdc-glow)"
          />
          <circle r="8" fill="white" fillOpacity="0.22" />
          <circle r="4" fill="white" fillOpacity="0.4" />
          {/* Hub cross */}
          <line x1="-8" y1="0" x2="8" y2="0" stroke="white" strokeWidth="1" opacity="0.35" />
          <line x1="0" y1="-8" x2="0" y2="8" stroke="white" strokeWidth="1" opacity="0.35" />
        </motion.g>
      </g>

      {/* ── Technical label ── */}
      <text
        x="8"
        y="212"
        fill={ORG}
        fontSize="7"
        fontFamily="monospace"
        opacity="0.42"
        letterSpacing="0.4"
      >
        PDC BIT — ROTATIVO COM FLUÍDOS
      </text>
    </svg>
  );
}
