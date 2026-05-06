import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
} from "motion/react";

// ─── Wave Layer ──────────────────────────────────────────────────────────────
function WaveLayer({
  speed,
  opacity,
  yOffset,
  color,
  amplitude,
  frequency,
  initialOffset,
}: {
  speed: number;
  opacity: number;
  yOffset: number;
  color: string;
  amplitude: number;
  frequency: number;
  initialOffset: number;
}) {
  const x = useMotionValue(initialOffset);
  const frameRef = useRef<number>(initialOffset);

  useAnimationFrame((_, delta) => {
    frameRef.current -= (delta / 1000) * speed;
    if (frameRef.current <= -400) frameRef.current = 0;
    x.set(frameRef.current);
  });

  const f = frequency;
  const a = amplitude;
  const wavePath = [
    `M0,${a}`,
    `C${f},0 ${100 - f},${a * 2} 100,${a}`,
    `C${100 + f},0 ${200 - f},${a * 2} 200,${a}`,
    `C${200 + f},0 ${300 - f},${a * 2} 300,${a}`,
    `C${300 + f},0 ${400 - f},${a * 2} 400,${a}`,
    `L400,80 L0,80 Z`,
  ].join(" ");

  return (
    <motion.svg
      aria-hidden="true"
      viewBox="0 0 400 80"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        bottom: yOffset,
        left: 0,
        width: "200%",
        height: "100%",
        opacity,
        x,
        willChange: "transform",
      }}
    >
      <path d={wavePath} fill={color} />
    </motion.svg>
  );
}

// ─── Bubble ──────────────────────────────────────────────────────────────────
const BUBBLES = [
  { left: "5%",  size: 7,  duration: 4.0, delay: 0.5,  repeatDelay: 3.2 },
  { left: "13%", size: 4,  duration: 3.2, delay: 1.8,  repeatDelay: 4.8 },
  { left: "22%", size: 10, duration: 5.0, delay: 0.2,  repeatDelay: 2.5 },
  { left: "36%", size: 5,  duration: 3.8, delay: 1.0,  repeatDelay: 5.0 },
  { left: "48%", size: 9,  duration: 4.5, delay: 0.0,  repeatDelay: 3.5 },
  { left: "60%", size: 6,  duration: 3.5, delay: 2.2,  repeatDelay: 2.2 },
  { left: "72%", size: 8,  duration: 5.2, delay: 0.8,  repeatDelay: 4.0 },
  { left: "82%", size: 4,  duration: 3.6, delay: 2.8,  repeatDelay: 2.8 },
  { left: "90%", size: 7,  duration: 4.2, delay: 0.4,  repeatDelay: 5.5 },
  { left: "30%", size: 5,  duration: 6.0, delay: 3.0,  repeatDelay: 3.0 },
  { left: "55%", size: 3,  duration: 3.0, delay: 1.5,  repeatDelay: 6.0 },
];

function Bubble({
  left,
  size,
  duration,
  delay,
  repeatDelay,
}: {
  left: string;
  size: number;
  duration: number;
  delay: number;
  repeatDelay: number;
}) {
  return (
    <motion.div
      aria-hidden="true"
      style={{
        position: "absolute",
        left,
        bottom: size,
        width: size,
        height: size,
        borderRadius: "50%",
        border: "1.5px solid rgba(255,255,255,0.5)",
        backgroundColor: "rgba(255,255,255,0.08)",
      }}
      animate={{
        y: [0, -(220 + size * 8)],
        x: [0, size * 1.5, -size * 1.0, 0],
        opacity: [0, 0.8, 0.6, 0.2, 0],
        scale: [1, 1.08, 0.95, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatDelay,
        ease: "easeOut",
        times: [0, 0.3, 0.6, 0.85, 1],
      }}
    />
  );
}

// ─── Water Background ─────────────────────────────────────────────────────────
function WaterBackground() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden rounded-[24px] md:rounded-[40px]"
    >
      {/* Static blue gradient — always fills the card */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#137fec] via-[#0e70d6] to-[#0a5bb5]" />

      {/* Wave layers — back to front */}
      <WaveLayer speed={18}  opacity={0.09} yOffset={-15} color="#93c5fd" amplitude={8}  frequency={30} initialOffset={0}    />
      <WaveLayer speed={26}  opacity={0.12} yOffset={0}   color="#60b5ff" amplitude={11} frequency={35} initialOffset={-100} />
      <WaveLayer speed={14}  opacity={0.07} yOffset={25}  color="#bfdbfe" amplitude={7}  frequency={28} initialOffset={-200} />
      <WaveLayer speed={34}  opacity={0.17} yOffset={-5}  color="#dbeafe" amplitude={13} frequency={40} initialOffset={-50}  />
      <WaveLayer speed={10}  opacity={0.05} yOffset={50}  color="#ffffff" amplitude={5}  frequency={25} initialOffset={-300} />

      {/* Bubbles */}
      {BUBBLES.map((b, i) => (
        <Bubble key={i} {...b} />
      ))}

      {/* Light refraction shimmer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 20%, rgba(255,255,255,0.07) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}

// ─── Shared WhatsApp Icon ─────────────────────────────────────────────────────
export function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M17.05 2.91C15.18 1.03 12.69 0 10.04 0C4.58 0 0.13 4.45 0.13 9.91C0.13 11.66 0.59 13.36 1.45 14.86L0.05 20L5.31 18.62C6.76 19.41 8.38 19.83 10.04 19.83C15.5 19.83 19.95 15.38 19.95 9.92C19.95 7.27 18.92 4.78 17.05 2.91ZM10.04 18.15C8.56 18.15 7.11 17.75 5.84 17L5.54 16.82L2.42 17.64L3.25 14.6L3.05 14.29C2.23 12.98 1.79 11.46 1.79 9.91C1.79 5.37 5.49 1.67 10.03 1.67C12.23 1.67 14.3 2.53 15.85 4.09C17.41 5.65 18.26 7.72 18.26 9.92C18.27 14.46 14.57 18.15 10.04 18.15ZM14.56 12.1C14.31 11.97 13.09 11.37 12.87 11.29C12.64 11.2 12.48 11.16 12.31 11.41C12.14 11.66 11.67 12.22 11.53 12.39C11.38 12.56 11.24 12.58 10.99 12.45C10.74 12.32 9.94 12.06 8.99 11.2C8.24 10.53 7.73 9.7 7.59 9.45C7.44 9.2 7.58 9.06 7.71 8.93C7.83 8.81 7.96 8.62 8.09 8.48C8.22 8.34 8.27 8.23 8.35 8.06C8.43 7.89 8.39 7.75 8.33 7.62C8.27 7.49 7.73 6.26 7.53 5.76C7.33 5.28 7.13 5.34 6.98 5.33H6.53C6.36 5.33 6.1 5.39 5.87 5.64C5.65 5.89 5 6.49 5 7.72C5 8.95 5.9 10.14 6.03 10.31C6.16 10.48 7.73 12.94 10.11 14.01C10.69 14.27 11.14 14.42 11.49 14.53C12.07 14.72 12.6 14.69 13.02 14.63C13.49 14.56 14.5 14.03 14.7 13.45C14.9 12.87 14.9 12.38 14.84 12.27C14.78 12.16 14.81 12.23 14.56 12.1Z"
        fill="white"
      />
    </svg>
  );
}

// ─── Constants ────────────────────────────────────────────────────────────────
export const WHATSAPP_URL =
  "https://wa.me/5549999999999?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20perfura%C3%A7%C3%A3o%20de%20po%C3%A7o%20artesiano.";

// ─── Main Export ─────────────────────────────────────────────────────────────
export function WaterCTACard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[24px] md:rounded-[40px] px-[24px] md:px-[64px] lg:px-[232px] py-[48px] md:py-[96px] relative overflow-hidden">
      <WaterBackground />
      <div className="relative z-10 max-w-[768px] mx-auto text-center">
        {children}
      </div>
    </div>
  );
}
