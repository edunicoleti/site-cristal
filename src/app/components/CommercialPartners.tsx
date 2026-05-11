import { motion } from "motion/react";
import { PartnerData, PartnerCard, MobilePartnerCard } from "./Partners";

const commercialPartners: PartnerData[] = [
  {
    abbr: "Ebara",
    fullName: "Bombas Submersas",
    logoUrl: "/logo-ebara.png",
    bgColor: "#f0f7ff",
    accentColor: "#137fec",
    tag: "Fornecedor",
  },
  {
    abbr: "Vanbro",
    fullName: "Tubos Geomecânicos",
    logoUrl: "/logo clientes/vambro.avif",
    bgColor: "#f8fafc",
    accentColor: "#475569",
    tag: "Fornecedor",
  },
  {
    abbr: "Franklin Electric",
    fullName: "Sistemas de Bombeamento",
    logoUrl: "/logo clientes/franlin eletric.png",
    bgColor: "#f0fdfa",
    accentColor: "#0f766e",
    tag: "Fornecedor",
  },
];

export function CommercialPartners() {
  return (
    <section className="bg-white py-[48px] md:py-[64px] border-b border-[rgba(0,0,0,0.06)]">
      <div className="max-w-[1280px] mx-auto px-[16px] md:px-[24px]">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-[40px] md:mb-[52px]"
        >
          <h3 className="font-['Inter:Bold',sans-serif] font-bold text-[20px] md:text-[28px] text-[#111418] tracking-[-0.5px] mb-[10px]">
            Parceiros Comerciais
          </h3>
          <p className="font-['Inter:Regular',sans-serif] text-[14px] md:text-[16px] text-[#617589] max-w-[480px] mx-auto leading-[22px]">
            Trabalhamos com os melhores fornecedores e fabricantes de equipamentos do mercado para garantir máxima qualidade.
          </p>
        </motion.div>

        {/* Desktop: 3-col grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-[16px] lg:gap-[20px] justify-center max-w-[800px] mx-auto">
          {commercialPartners.map((partner, index) => (
            <PartnerCard key={index} partner={partner} index={index} />
          ))}
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="md:hidden flex gap-[12px] overflow-x-auto pb-[16px] px-[4px] snap-x">
          {commercialPartners.map((partner, index) => (
            <div key={index} className="snap-center">
              <MobilePartnerCard partner={partner} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
