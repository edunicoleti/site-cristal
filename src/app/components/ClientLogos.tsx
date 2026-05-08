import { useState, useRef } from "react";
import { motion } from "motion/react";

// ─── Dados dos clientes reais ───────────────────────────────────────────────────
const clients = [
  { name: "Alfa", logo: "/logo-alfa.png" },
  { name: "Bugio Ecofrigo Frigorífico", logo: "/logo-bugio.svg" },
  { name: "RUDOLPH FOODS BRASIL", logo: "/logo-rudolph.png" },
  { name: "APC do Brasil" },
  { name: "Tirol" },
  { name: "Aurora", logo: "/logo-aurora.svg" },
  { name: "BRF", logo: "/logo-brf.svg" },
  { name: "CSM" },
  { name: "Santa Maria" },
  { name: "Nostra Casa" },
  { name: "Costella Empreendimentos" },
  { name: "Coasul Cooperativa" },
  { name: "Tradição - Cooperativa Agroindustrial" },
  { name: "Inpasa Brasil" },
  { name: "Agropecuária Seis Irmãos LTDA" },
  { name: "Agromina" },
  { name: "Giacomin" },
  { name: "Virtú" },
  { name: "Pagrisa", logo: "/logo-pagrisa.png" },
  { name: "Pepsico", logo: "/logo-pepsico.png" },
  { name: "Casan", logo: "/logo-casan.png" },
  { name: "CPRM", logo: "/logo-cprm.png" },
];

// Duplica para scroll infinito
const doubled = [...clients, ...clients];

export function ClientLogos() {
  const [isHovering, setIsHovering] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-white py-[96px] md:py-[120px] border-t border-b border-[rgba(0,0,0,0.06)] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-[16px] md:px-[24px] mb-[48px] md:mb-[64px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-center gap-[12px] sm:gap-[24px]"
        >
          <p className="font-['Inter:Bold',sans-serif] font-bold text-[14px] md:text-[16px] text-[#f97316] tracking-[2.8px] uppercase whitespace-nowrap">
            Confiam em Cristal Poços
          </p>
          <div className="hidden sm:block h-[1px] flex-1 bg-[rgba(0,0,0,0.08)]" />
        </motion.div>
      </div>

      {/* Marquee track */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-[80px] md:w-[160px] bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-[80px] md:w-[160px] bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scroll container */}
        <div className="flex overflow-hidden">
          <motion.div
            ref={trackRef}
            className="flex gap-[48px] md:gap-[72px]"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: isHovering ? 0 : 32,
              ease: "linear",
              repeat: Infinity,
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {doubled.map((client, i) => (
              <div
                key={i}
                className="flex-none flex items-center justify-center px-[0px] py-[0px] group cursor-default transition-all duration-300 hover:drop-shadow-lg"
              >
                {client.logo ? (
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="h-[36px] md:h-[44px] object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" 
                  />
                ) : (
                  <span className="font-['Inter:Medium',sans-serif] font-medium text-[18px] md:text-[22px] text-[#374151] group-hover:text-[#111418] tracking-[0.3px] whitespace-nowrap transition-colors duration-300">
                    {client.name}
                  </span>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
