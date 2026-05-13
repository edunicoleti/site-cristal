import { useState, useRef } from "react";
import { motion } from "motion/react";

// ─── Dados dos clientes reais ───────────────────────────────────────────────────
const clients = [
  { name: "Alfa", logo: "/logo-alfa.png" },
  { name: "Ecofrigo", logo: "/logo clientes/logo ecofrigo colorida.png" },
  { name: "RUDOLPH FOODS BRASIL", logo: "/logo-rudolph.png" },
  { name: "APC do Brasil", logo: "/logo clientes/apc.webp", invert: true, customClass: "!h-[56px] md:!h-[68px] !max-w-[200px]" },
  { name: "Tirol", logo: "/logo clientes/Logo_da_Lacticínios_Tirol.svg.png" },
  { name: "Aurora", logo: "/logo-aurora.svg" },
  { name: "BRF", logo: "/logo-brf.svg" },
  { name: "CSM", logo: "/logo clientes/logo CSM correta.png" },
  { name: "Fazenda Alto Paraíso", logo: "/logo clientes/fazendo alto paraiso.jpg", customClass: "mix-blend-multiply !h-[48px] md:!h-[64px] !max-w-[200px]" },
  { name: "Agropecuária Seis Irmãos", logo: "/logo clientes/seis irmaos.jpeg", customClass: "mix-blend-multiply !h-[72px] md:!h-[96px] !max-w-[240px]" },
  { name: "Santa Maria", logo: "/logo clientes/logo santa maria.svg" },
  { name: "Nostra Casa", logo: "/logo clientes/nostracasa.avif" },
  { name: "Costella Empreendimentos", logo: "/logo clientes/costella.jpg", customClass: "mix-blend-multiply contrast-125 brightness-110" },
  { name: "Coasul Cooperativa", logo: "/logo clientes/logo coasul.svg" },
  { name: "Tradição - Cooperativa Agroindustrial", logo: "/logo clientes/tradicao coop.webp" },
  { name: "Inpasa Brasil", logo: "/logo clientes/logo-inpasa-r.png" },
  { name: "Agromina", logo: "/logo clientes/agromina correta.jfif", customClass: "mix-blend-multiply !h-[80px] md:!h-[100px] !max-w-[250px]" },
  { name: "Virtú", logo: "/logo clientes/logo virtu.svg?v=2" },
  { name: "Pagrisa", logo: "/logo-pagrisa.png", invert: true, customClass: "!h-[56px] md:!h-[72px] !max-w-[200px]" },
  { name: "Pepsico", logo: "/logo-pepsico.png" },
  { name: "Casan", logo: "/logo clientes/casan logo.png", customClass: "!h-[48px] md:!h-[60px] !max-w-[200px]" },
  { name: "CPRM", logo: "/logo-cprm.png", customClass: "!h-[48px] md:!h-[60px] !max-w-[200px]" },
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

      {/* Mobile: Marquee track */}
      <div className="relative md:hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-[80px] bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-[80px] bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scroll container */}
        <div className="flex overflow-hidden">
          <motion.div
            ref={trackRef}
            className="flex gap-[48px]"
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
                className="flex-none flex items-center justify-center group cursor-default transition-all duration-300 hover:drop-shadow-lg"
              >
                {client.logo ? (
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className={`h-[36px] object-contain transition-transform duration-300 group-hover:scale-110 ${client.invert ? 'invert' : ''} ${client.customClass || ''}`} 
                  />
                ) : (
                  <span className="font-['Inter:Medium',sans-serif] font-medium text-[18px] text-[#374151] group-hover:text-[#111418] tracking-[0.3px] whitespace-nowrap transition-colors duration-300">
                    {client.name}
                  </span>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Desktop: Grid fixo responsivo */}
      <div className="hidden md:block max-w-[1280px] mx-auto px-[24px]">
        <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-[32px] gap-y-[48px] lg:gap-y-[64px] items-center justify-items-center">
          {clients.map((client, i) => (
            <div
              key={i}
              className="flex items-center justify-center w-full group cursor-default transition-all duration-300 hover:drop-shadow-lg"
            >
              {client.logo ? (
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className={`h-[44px] max-w-[160px] object-contain transition-transform duration-300 group-hover:scale-110 ${client.invert ? 'invert' : ''} ${client.customClass || ''}`} 
                />
              ) : (
                <span className="font-['Inter:Medium',sans-serif] font-medium text-[20px] text-[#374151] group-hover:text-[#111418] tracking-[0.3px] text-center transition-colors duration-300">
                  {client.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
