import { useState } from "react";
import { motion } from "motion/react";
import { Droplets, HardHat, ClipboardCheck, Award, Waves, Leaf, Mountain } from "lucide-react";

const partners = [
  {
    abbr: "ABAS",
    fullName: "Assoc. Brasileira de Águas Subterrâneas",
    Icon: Droplets,
    color: "#137fec",
  },
  {
    abbr: "CONFEA",
    fullName: "Conselho Federal de Engenharia",
    Icon: HardHat,
    color: "#f97316",
  },
  {
    abbr: "ABNT",
    fullName: "Normas Técnicas Brasileiras",
    Icon: ClipboardCheck,
    color: "#137fec",
  },
  {
    abbr: "ISO",
    fullName: "ISO 9001:2015 Certificação",
    Icon: Award,
    color: "#f97316",
  },
  {
    abbr: "ANA",
    fullName: "Agência Nacional de Águas",
    Icon: Waves,
    color: "#137fec",
  },
  {
    abbr: "IBAMA",
    fullName: "Instituto Brasileiro do Meio Ambiente",
    Icon: Leaf,
    color: "#f97316",
  },
  {
    abbr: "CPRM",
    fullName: "Serviço Geológico do Brasil",
    Icon: Mountain,
    color: "#137fec",
  },
];

const allPartners = [...partners, ...partners];

function PartnerLogo({ partner }: { partner: typeof partners[0] }) {
  const Icon = partner.Icon;
  return (
    <div
      className="size-[52px] rounded-full flex items-center justify-center overflow-hidden transition-colors"
      style={{ backgroundColor: `${partner.color}12`, color: partner.color }}
    >
      <Icon size={24} strokeWidth={2} />
    </div>
  );
}

function PartnerLogoSmall({ partner }: { partner: typeof partners[0] }) {
  const Icon = partner.Icon;
  return (
    <div
      className="size-[44px] rounded-full flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: `${partner.color}12`, color: partner.color }}
    >
      <Icon size={20} strokeWidth={2} />
    </div>
  );
}

export function Partners() {
  return (
    <section className="bg-white py-[48px] md:py-[64px] border-t border-[#e5e7eb]">
      <div className="max-w-[1280px] mx-auto px-[16px] md:px-[24px]">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-['Inter:Bold',sans-serif] font-bold text-[11px] md:text-[12px] text-[#9ca3af] tracking-[2.4px] uppercase text-center mb-[32px]"
        >
          Certificações e Órgãos Parceiros
        </motion.p>

        {/* Desktop: static grid */}
        <div className="hidden md:grid md:grid-cols-7 gap-[16px]">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              whileHover={{ scale: 1.05 }}
              className="group flex flex-col items-center gap-[8px] p-[16px] rounded-[12px] border border-[#e5e7eb] hover:border-[#137fec]/40 hover:shadow-md transition-all cursor-default"
            >
              <PartnerLogo partner={partner} />
              <p className="font-['Inter:Regular',sans-serif] text-[10px] text-[#9ca3af] text-center leading-tight group-hover:text-[#617589] transition-colors">
                {partner.fullName}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile: infinite marquee */}
        <div className="md:hidden overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-[12px] w-max"
          >
            {allPartners.map((partner, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-[6px] p-[12px] rounded-[12px] border border-[#e5e7eb] bg-white min-w-[100px]"
              >
                <PartnerLogoSmall partner={partner} />
                <p className="font-['Inter:Regular',sans-serif] text-[9px] text-[#9ca3af] text-center leading-tight w-[80px]">
                  {partner.fullName}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
