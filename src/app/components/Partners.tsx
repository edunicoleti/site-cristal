import { motion } from "motion/react";

export type PartnerData = {
  abbr: string;
  fullName: string;
  logoUrl: string;
  bgColor: string;
  accentColor: string;
  tag: string;
};

export const partners: PartnerData[] = [
  {
    abbr: "ABAS",
    fullName: "Assoc. Brasileira de Águas Subterrâneas",
    logoUrl: "https://www.abas.org/wp-content/uploads/2023/08/abas-705x1024.png",
    bgColor: "#f0f7ff",
    accentColor: "#137fec",
    tag: "Associação",
  },
  {
    abbr: "CONFEA",
    fullName: "Conselho Federal de Engenharia",
    logoUrl: "https://www.crearo.org.br/wp-content/uploads/2020/11/Logo-Confea-847x210.png",
    bgColor: "#fff7ed",
    accentColor: "#f97316",
    tag: "Regulação",
  },
  {
    abbr: "ABNT",
    fullName: "Normas Técnicas Brasileiras",
    logoUrl: "https://portais.univasf.edu.br/biblioteca/imagens/logo-abnt.png/@@images/image.png",
    bgColor: "#f0f7ff",
    accentColor: "#137fec",
    tag: "Normalização",
  },
  {
    abbr: "ANA",
    fullName: "Agência Nacional de Águas",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Logotipo_ANA_-_Ag%C3%AAncia_Nacional_de_%C3%81guas_e_Saneamento_B%C3%A1sico.png",
    bgColor: "#f0f7ff",
    accentColor: "#137fec",
    tag: "Regulação",
  },
  {
    abbr: "IBAMA",
    fullName: "Instituto Brasileiro do Meio Ambiente",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Logo_IBAMA.svg/500px-Logo_IBAMA.svg.png",
    bgColor: "#f0fff4",
    accentColor: "#16a34a",
    tag: "Meio Ambiente",
  },
  {
    abbr: "CPRM",
    fullName: "Serviço Geológico do Brasil",
    logoUrl: "https://www.gov.br/dnit/pt-br/assuntos/aquaviario/parcerias_daq/CPRM.png",
    bgColor: "#f0f7ff",
    accentColor: "#137fec",
    tag: "Geologia",
  },
];

const allPartners = [...partners, ...partners];

export function PartnerCard({
  partner,
  index,
}: {
  partner: PartnerData;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group bg-white border border-[#e5e7eb] hover:border-[#137fec]/40 rounded-[16px] p-[28px] flex flex-col items-center gap-[16px] hover:shadow-lg transition-all cursor-default"
    >
      {/* Logo area — generous size */}
      <div
        className="w-full h-[88px] rounded-[12px] flex items-center justify-center p-[16px] transition-colors group-hover:opacity-95"
        style={{ backgroundColor: partner.bgColor }}
      >
        <img
          src={partner.logoUrl}
          alt={`Logo ${partner.abbr}`}
          className="max-w-full max-h-full object-contain"
          loading="lazy"
          onError={(e) => {
            const target = e.currentTarget;
            const parent = target.parentElement;
            if (parent) {
              target.style.display = "none";
              parent.innerHTML = `<span style="font-family:Inter,sans-serif;font-weight:900;font-size:22px;color:${partner.accentColor};letter-spacing:2px">${partner.abbr}</span>`;
            }
          }}
        />
      </div>

      {/* Info */}
      <div className="text-center w-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold text-[13px] text-[#111418] leading-[18px]">
          {partner.abbr}
        </p>
        <p className="font-['Inter:Regular',sans-serif] text-[12px] text-[#9ca3af] leading-[16px] mt-[2px]">
          {partner.fullName}
        </p>
      </div>
    </motion.div>
  );
}

export function MobilePartnerCard({ partner }: { partner: PartnerData }) {
  return (
    <div className="flex flex-col items-center gap-[10px] p-[16px] rounded-[14px] border border-[#e5e7eb] bg-white min-w-[140px]">
      <div
        className="w-full h-[64px] rounded-[10px] flex items-center justify-center p-[12px]"
        style={{ backgroundColor: partner.bgColor }}
      >
        <img
          src={partner.logoUrl}
          alt={`Logo ${partner.abbr}`}
          className="max-w-full max-h-full object-contain"
          loading="lazy"
          onError={(e) => {
            const target = e.currentTarget;
            const parent = target.parentElement;
            if (parent) {
              target.style.display = "none";
              parent.innerHTML = `<span style="font-family:Inter,sans-serif;font-weight:900;font-size:16px;color:${partner.accentColor};letter-spacing:1.5px">${partner.abbr}</span>`;
            }
          }}
        />
      </div>
      <div className="text-center">
        <p className="font-['Inter:Bold',sans-serif] font-bold text-[12px] text-[#111418]">
          {partner.abbr}
        </p>
        <p className="font-['Inter:Regular',sans-serif] text-[10px] text-[#9ca3af] leading-tight mt-[2px] max-w-[120px]">
          {partner.fullName}
        </p>
      </div>
    </div>
  );
}

export function Partners() {
  return (
    <section className="bg-[#f6f7f8] py-[56px] md:py-[80px] border-t border-[#e5e7eb]">
      <div className="max-w-[1280px] mx-auto px-[16px] md:px-[24px]">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-[40px] md:mb-[52px]"
        >
          <p className="font-['Inter:Bold',sans-serif] font-bold text-[12px] md:text-[13px] text-[#137fec] tracking-[2.8px] uppercase mb-[10px]">
            Certificações e Parcerias
          </p>
          <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[24px] md:text-[32px] text-[#111418] tracking-[-0.5px] md:tracking-[-0.8px] mb-[10px]">
            Órgãos que reconhecem nossa atuação
          </h2>
          <p className="font-['Inter:Regular',sans-serif] text-[14px] md:text-[16px] text-[#617589] max-w-[480px] mx-auto leading-[22px]">
            Trabalhamos em conformidade com as principais entidades reguladoras e associações do setor hídrico brasileiro.
          </p>
        </motion.div>

        {/* Desktop: 3-col grid (2 rows) */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-6 gap-[16px] lg:gap-[20px]">
          {partners.map((partner, index) => (
            <PartnerCard key={index} partner={partner} index={index} />
          ))}
        </div>

        {/* Mobile: infinite marquee */}
        <div className="md:hidden overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-[12px] w-max"
          >
            {allPartners.map((partner, index) => (
              <MobilePartnerCard key={index} partner={partner} />
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
