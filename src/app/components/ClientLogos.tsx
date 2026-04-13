import { useRef } from "react";
import { motion } from "motion/react";

// ─── Dados dos clientes ───────────────────────────────────────────────────────
// Substitua pelos logos/nomes reais dos clientes da Cristal Poços

const clients = [
  { name: "Cooperativa Aurora", abbr: "AURORA" },
  { name: "Granja São Lucas", abbr: "SÃO LUCAS" },
  { name: "Agropecuária Horizonte", abbr: "HORIZONTE" },
  { name: "Fazenda Bela Vista", abbr: "BELA VISTA" },
  { name: "Sicredi Vale do Rio do Peixe", abbr: "SICREDI" },
  { name: "Frigorífico Seara", abbr: "SEARA" },
  { name: "Agro Chapecó", abbr: "AGRO CHAPECÓ" },
  { name: "Cooperalfa", abbr: "COOPERALFA" },
  { name: "Granja Planalto", abbr: "PLANALTO" },
  { name: "Laticínios Tirol", abbr: "TIROL" },
];

// Duplica para scroll infinito
const doubled = [...clients, ...clients];

export function ClientLogos() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-[#111418] py-[48px] md:py-[64px] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-[16px] md:px-[24px] mb-[32px] md:mb-[40px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-center gap-[12px] sm:gap-[24px]"
        >
          <p className="font-['Inter:Bold',sans-serif] font-bold text-[11px] md:text-[12px] text-[#617589] tracking-[2.8px] uppercase whitespace-nowrap">
            Quem confia em nós
          </p>
          <div className="hidden sm:block h-[1px] flex-1 bg-[rgba(255,255,255,0.08)]" />
          <p className="font-['Inter:Regular',sans-serif] text-[13px] md:text-[14px] text-[#617589]">
            +7.000 clientes atendidos em todo o Brasil
          </p>
        </motion.div>
      </div>

      {/* Marquee track */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-[80px] md:w-[160px] bg-gradient-to-r from-[#111418] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-[80px] md:w-[160px] bg-gradient-to-l from-[#111418] to-transparent z-10 pointer-events-none" />

        {/* Scroll container */}
        <div className="flex overflow-hidden">
          <motion.div
            ref={trackRef}
            className="flex gap-[8px] md:gap-[12px]"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 28,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {doubled.map((client, i) => (
              <div
                key={i}
                className="flex-none flex items-center gap-[10px] md:gap-[12px] px-[20px] md:px-[28px] py-[14px] md:py-[18px] rounded-[10px] md:rounded-[12px] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.1)] transition-all duration-300 group cursor-default"
              >
                {/* Dot accent */}
                <div className="size-[6px] rounded-full bg-[#137fec] opacity-60 group-hover:opacity-100 transition-opacity shrink-0" />
                <span className="font-['Inter:Bold',sans-serif] font-bold text-[13px] md:text-[14px] text-[rgba(255,255,255,0.4)] group-hover:text-[rgba(255,255,255,0.7)] tracking-[0.5px] uppercase whitespace-nowrap transition-colors duration-300">
                  {client.abbr}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
