import { Link } from "react-router";
import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { WaterCTACard, WHATSAPP_URL, WhatsAppIcon } from "../components/WaterCTACard";
import svgPaths from "../../imports/svg-z6zitnfa74";
import fundoVideo from "../../assets/fundo-hero-cristal.mp4";
import { SEOHead } from "../components/SEOHead";
import { useCountUp } from "../hooks/useCountUp";


function StatItem({
  end,
  suffix,
  label,
  format,
}: {
  end: number;
  suffix: string;
  label: string;
  format?: "dot";
}) {
  const { count, ref } = useCountUp(end, 2000);
  const display =
    format === "dot"
      ? count.toLocaleString("pt-BR") + suffix
      : count + suffix;
  return (
    <div className="text-center" ref={ref}>
      <div className="font-['Inter:Bold',sans-serif] font-bold text-[32px] md:text-[48px] text-[#137fec]">
        {display}
      </div>
      <div className="font-['Inter:Medium',sans-serif] font-medium text-[13px] md:text-[16px] text-[#617589] mt-[4px]">
        {label}
      </div>
    </div>
  );
}

export function QuemSomosPage() {
  return (
    <div className="relative bg-white">
      <SEOHead
        title="Quem Somos — Cristal Poços | +27 Anos de Excelência"
        description="Fundada em 1998, a Cristal Poços é referência nacional em perfuração de poços artesianos. Conheça nossa história, missão e valores."
      />

      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[450px] flex items-center justify-center overflow-clip">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute h-full w-full object-cover"
          >
            <source src={fundoVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#0a0f1a] mix-blend-multiply opacity-80" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-[896px] text-center z-10 px-[20px] md:px-0"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-[#f97316] inline-flex items-center justify-center px-[12px] py-[4px] rounded-[9999px] mb-[32px] md:mb-[48px]"
          >
            <span className="font-['Inter:Bold',sans-serif] font-bold text-[12px] text-white tracking-[1.2px] uppercase">
              Nossa História
            </span>
          </motion.div>

          <h1 className="font-['Inter:Bold',sans-serif] font-bold text-[36px] md:text-[60px] text-white tracking-[-2px] md:tracking-[-3px] leading-[38px] md:leading-[60px] mb-[16px]">
            <span className="text-[#f97316]">+27 Anos</span> de Excelência em
            <br />
            Águas Subterrâneas
          </h1>

          <p className="font-['Inter:Light',sans-serif] font-light text-[17px] md:text-[20px] text-[#d1d5db] leading-[25px] md:leading-[28px] max-w-[658px] mx-auto">
            Transformando a tecnologia em soluções sustentáveis para o acesso à
            água potável em todo o território nacional.
          </p>
        </motion.div>
      </section>

      {/* Stats Section — CountUp */}
      <section className="bg-white py-[48px] border-b border-[#e5e7eb]">
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[24px]">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-[24px] md:gap-[32px]">
            <StatItem end={27} suffix="+" label="Anos de Experiência" />
            <StatItem end={7000} suffix="+" label="Poços Perfurados" format="dot" />
            <StatItem end={24} suffix="h" label="Assistência Técnica" />
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-[64px] md:py-[96px]">
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[48px] lg:px-[160px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[48px] md:gap-[64px] items-start">
            {/* Left Column - Text (Top) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[28px] md:text-[36px] text-[#111418] leading-[32px] md:leading-[40px] mb-[24px]">
                Uma trajetória marcada pela{" "}
                <span className="text-[#137fec] underline decoration-[#f97316]">
                  precisão técnica
                </span>{" "}
                e inovação.
              </h2>

              <div className="space-y-[20px] md:space-y-[24px]">
                <p className="font-['Inter:Regular',sans-serif] font-normal text-[15px] md:text-[18px] text-[#4b5563] leading-[24px] md:leading-[29.25px]">
                  Fundada em 1998, a{" "}
                  <span className="font-bold text-[#111418]">Cristal Poços</span>{" "}
                  nasceu com o objetivo de preencher uma lacuna no mercado de
                  perfuração: a união entre alta tecnologia e respeito rigoroso às
                  normas ambientais.
                </p>

                <p className="font-['Inter:Regular',sans-serif] font-normal text-[15px] md:text-[18px] text-[#4b5563] leading-[24px] md:leading-[29.25px]">
                  Ao longo das décadas, investimos massivamente em nossa frota e
                  no treinamento de nossa equipe técnica. Hoje, somos referência
                  nacional, atendendo desde propriedades rurais até grandes
                  complexos industriais com a mesma dedicação e eficiência.
                </p>

                <div className="flex items-center gap-[16px] pt-[16px]">
                  <div>
                    <p className="font-['Inter:Medium',sans-serif] font-medium text-[13px] md:text-[14px] text-[#6b7280] leading-[18px] md:leading-[20px]">
                      Nossa equipe de especialistas está pronta para seu projeto.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Sede Photo (Top) */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] w-full overflow-hidden cursor-pointer"
            >
              <img
                src="/sede-cristal-po%C3%A7os-artesianos-chapec%C3%B3.png"
                alt="Sede Cristal Poços Artesianos — Chapecó SC"
                className="w-full h-full object-cover aspect-square rounded-[16px]"
              />
            </motion.div>

            {/* Left Column - Team Photo (Bottom) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className="relative rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] w-full overflow-hidden cursor-pointer"
            >
              <img
                src="/fotos%20projetos/perfuracao-campo.jpg"
                alt="Perfuração de poço artesiano em área rural — Vista aérea Cristal Poços"
                className="w-full h-full object-cover aspect-square rounded-[16px]"
              />
            </motion.div>

            {/* Right Column - Equipment Photo (Bottom) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="relative rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] w-full overflow-hidden cursor-pointer"
            >
              <img
                src="/fotos%20projetos/perfuracao-lago.jpg"
                alt="Sonda de perfuração Cristal Poços em obra próxima a reservatório de água"
                className="w-full h-full object-cover aspect-square rounded-[16px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values Section */}
      <section className="bg-[#111418] py-[64px] md:py-[96px]">
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[48px] lg:px-[96px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-[48px] md:mb-[64px]"
          >
            <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[28px] md:text-[36px] text-white mb-[16px]">
              Nossos Pilares Institucionais
            </h2>
            <div className="bg-[#f97316] h-[4px] w-[96px] mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] md:gap-[32px]">
            {[
              {
                icon: svgPaths.p7b81100,
                viewBox: "0 0 30 34",
                title: "Missão",
                description:
                  "Prover soluções inteligentes e sustentáveis para captação de água, garantindo segurança hídrica e qualidade de vida para nossos clientes através da excelência técnica.",
              },
              {
                icon: svgPaths.p238b3640,
                viewBox: "0 0 44 30",
                title: "Visão",
                description:
                  "Ser reconhecida como a empresa mais confiável e inovadora em perfuração de poços no Brasil, liderando o mercado com práticas de impacto ambiental positivo.",
              },
              {
                icon: svgPaths.p3267bcc0,
                viewBox: "0 0 32 40",
                title: "Valores",
                items: [
                  "Ética e Transparência",
                  "Rigor Técnico",
                  "Sustentabilidade",
                  "Respeito ao Cliente",
                ],
              },
            ].map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-[12px] p-[32px] md:p-[41px] transition-all hover:bg-[rgba(255,255,255,0.08)]"
              >
                <motion.svg
                  className="mb-[24px]"
                  width={pillar.viewBox.split(" ")[2]}
                  height={pillar.viewBox.split(" ")[3]}
                  viewBox={pillar.viewBox}
                  fill="none"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <path d={pillar.icon} fill="#137FEC" />
                </motion.svg>
                <h3 className="font-['Inter:Bold',sans-serif] font-bold text-[20px] text-white mb-[16px]">
                  {pillar.title}
                </h3>
                {pillar.description && (
                  <p className="font-['Inter:Regular',sans-serif] font-normal text-[16px] text-[#9ca3af] leading-[26px]">
                    {pillar.description}
                  </p>
                )}
                {pillar.items && (
                  <ul className="space-y-[8px]">
                    {pillar.items.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="flex gap-[8px] items-center"
                      >
                        <div className="bg-[#f97316] rounded-full size-[6px]" />
                        <span className="font-['Inter:Regular',sans-serif] font-normal text-[16px] text-[#9ca3af]">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-[64px] md:py-[96px]">
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[24px]">
          <WaterCTACard>
            <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[28px] md:text-[48px] text-white tracking-[-0.7px] md:tracking-[-1.2px] leading-[32px] md:leading-[48px] mb-[24px] md:mb-[32px] max-w-[800px] mx-auto">
              Fale com nossos especialistas
            </h2>

            <p className="font-['Inter:Medium',sans-serif] font-medium text-[16px] md:text-[20px] text-[#dbeafe] leading-[24px] md:leading-[28px] mb-[24px] md:mb-[32px]">
              Entre em contato agora mesmo e garanta a melhor captação para
              <br className="hidden md:block" /> sua propriedade com quem é
              referência no mercado.
            </p>

            <div className="flex flex-col sm:flex-row gap-[12px] md:gap-[16px] justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contato"
                  className="bg-white flex gap-[12px] items-center justify-center px-[24px] md:px-[32px] py-[14px] md:py-[16px] rounded-[12px] transition-shadow hover:shadow-lg"
                >
                  <MessageCircle size={20} className="text-[#137fec]" />
                  <span className="font-['Inter:Bold',sans-serif] font-bold text-[16px] md:text-[18px] text-[#137fec]">
                    Solicitar Orçamento Grátis
                  </span>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] flex gap-[12px] items-center justify-center px-[24px] md:px-[32px] py-[14px] md:py-[16px] rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(37,211,102,0.3),0px_4px_6px_-4px_rgba(37,211,102,0.3)] transition-shadow hover:shadow-[0px_10px_20px_-3px_rgba(37,211,102,0.5)]"
                >
                  <WhatsAppIcon />
                  <span className="font-['Inter:Bold',sans-serif] font-bold text-[16px] md:text-[18px] text-white">
                    Conversar no WhatsApp
                  </span>
                </a>
              </motion.div>
            </div>
          </WaterCTACard>
        </div>
      </section>
    </div>
  );
}