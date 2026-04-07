import { motion } from "motion/react";

const partners = [
  {
    abbr: "ABAS",
    fullName: "Assoc. Brasileira de Águas Subterrâneas",
    logoUrl: "https://www.abas.org/wp-content/uploads/2023/08/abas-705x1024.png",
    bgColor: "#f0f7ff",
  },
  {
    abbr: "CONFEA",
    fullName: "Conselho Federal de Engenharia",
    logoUrl: "https://www.crearo.org.br/wp-content/uploads/2020/11/Logo-Confea-847x210.png",
    bgColor: "#fff7ed",
  },
  {
    abbr: "ABNT",
    fullName: "Normas Técnicas Brasileiras",
    logoUrl: "https://portais.univasf.edu.br/biblioteca/imagens/logo-abnt.png/@@images/image.png",
    bgColor: "#f0f7ff",
  },
  {
    abbr: "ANA",
    fullName: "Agência Nacional de Águas",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Logotipo_ANA_-_Ag%C3%AAncia_Nacional_de_%C3%81guas_e_Saneamento_B%C3%A1sico.png",
    bgColor: "#f0f7ff",
  },
  {
    abbr: "IBAMA",
    fullName: "Instituto Brasileiro do Meio Ambiente",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Logo_IBAMA.svg/500px-Logo_IBAMA.svg.png",
    bgColor: "#f0fff4",
  },
  {
    abbr: "CPRM",
    fullName: "Serviço Geológico do Brasil",
    logoUrl: "https://www.gov.br/dnit/pt-br/assuntos/aquaviario/parcerias_daq/CPRM.png",
    bgColor: "#f0f7ff",
  },
];

const allPartners = [...partners, ...partners];

function PartnerLogo({ partner }: { partner: typeof partners[0] }) {
  return (
    <div
      className="w-[72px] h-[52px] rounded-[10px] flex items-center justify-center overflow-hidden p-[6px] transition-colors"
      style={{ backgroundColor: partner.bgColor }}
    >
      <img
        src={partner.logoUrl}
        alt={`Logo ${partner.abbr}`}
        className="w-full h-full object-contain"
        loading="lazy"
        onError={(e) => {
          // Fallback: show abbreviation text if image fails
          const target = e.currentTarget;
          const parent = target.parentElement;
          if (parent) {
            target.style.display = "none";
            parent.innerHTML = `<span style="font-family:Inter,sans-serif;font-weight:900;font-size:13px;color:#137fec;letter-spacing:1px">${partner.abbr}</span>`;
          }
        }}
      />
    </div>
  );
}

function PartnerLogoSmall({ partner }: { partner: typeof partners[0] }) {
  return (
    <div
      className="w-[62px] h-[44px] rounded-[8px] flex items-center justify-center overflow-hidden p-[5px]"
      style={{ backgroundColor: partner.bgColor }}
    >
      <img
        src={partner.logoUrl}
        alt={`Logo ${partner.abbr}`}
        className="w-full h-full object-contain"
        loading="lazy"
        onError={(e) => {
          const target = e.currentTarget;
          const parent = target.parentElement;
          if (parent) {
            target.style.display = "none";
            parent.innerHTML = `<span style="font-family:Inter,sans-serif;font-weight:900;font-size:11px;color:#137fec;letter-spacing:1px">${partner.abbr}</span>`;
          }
        }}
      />
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
        <div className="hidden md:grid md:grid-cols-6 gap-[20px]">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              whileHover={{ scale: 1.05 }}
              className="group flex flex-col items-center gap-[10px] p-[18px] rounded-[12px] border border-[#e5e7eb] hover:border-[#137fec]/40 hover:shadow-md transition-all cursor-default"
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
                className="flex flex-col items-center gap-[6px] p-[12px] rounded-[12px] border border-[#e5e7eb] bg-white min-w-[110px]"
              >
                <PartnerLogoSmall partner={partner} />
                <p className="font-['Inter:Regular',sans-serif] text-[9px] text-[#9ca3af] text-center leading-tight w-[90px]">
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
