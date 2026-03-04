import { Link } from "react-router";
import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import svgPaths from "../../imports/svg-z6zitnfa74";
import fundoVideo from "../../assets/fundo-hero-cristal.mp4";
import imgSedeCristal from "figma:asset/c09dd4bf03d4b6a4a043f0ba702ed84e9d181e05.png";
import imgAb6AXuAl6BxAw5F1XwwBaOsLsVePkjoKh6MQgcwzTkcH6Etvid6M1JMe80KdHcrqLx4U7ITepntN6PgKamwUbyAuwwqy9ZqNy7Yt73XVjGnLdbx9X4JXyLqIf8UsGizPoSzftMa4CWaIloeNby4Yfb4EQ1TeXp3AjkXkFPhW9RjNeYy3LvzdGNaFPqH9SdsPt8URvnwzWzM1GOlnUOvUBcNotbMiyaw2IsxM9LQKjXlOndfYySnjfjwwhYmTkaA8WKmPpalPnAbi0E from "figma:asset/fa0e2d147a58c6e2d212e1a94f7a89dba2806dc5.png";
import imgAb6AXuCbfq8RbFgKUrm4GsZ2I0F4L66ETWlzN0A2OcEdt8MeQhdRmycItv3Owb2XIpEAmyLv3AdJ1VK82L5NWggQtNzwKcScIuts3RP7BFk0Qm72XQppssQwJyGx8Zupc4UvAne1CBrwm610SozOezyGi6UkedCjxLtodny7KxGftWmfWJscjMcToJyW7GmMMo3HdMv2EiDmll3QIiI7DiSxAt4QYos0E43N49Jw1UYeUaV3HXtFz63R7Zemdj7IxHk4PuEy from "figma:asset/034e49cb80791c49f75dd5cb7776dafe792ad22f.png";
import imgAb6AXuC1HJmsRts2Qa3ViUb80ZXbjdA136MUcy6ZR9Dj2J2PzytQMyi4PmEs91ZQcOd99NMhiEVf7LedGgJJgk7Hrzod4PNCBhdWqjMfaKwUvYpmbvx2T5MQj6HjbnZpW4PWgyWe2ZhWl7U7NzuCxVwG829Muyt1Hkp8H37AUHrGuAaij7RAcqt6KIisCeF68ZtQk4GGsOSkEkjvEiYwqk6G2NVz1Tr7SgQyl0LvwdA5CiXs9XynGMimAej5ZqgFywgG5LNCuI2Ba from "figma:asset/23a6f4e738f76857fa5cfe7f38c13d3a0685cf1a.png";
import imgAb6AXuDDcYwplx3ZheCuXpjk29Z92Bde0XuzsHxXwllXiofurF3SdaoJ8QA3PjMj5MbkRxl4SaYxywH7RZddnOo708WjuZaxt3VBdHi3Yi8PlkGsejvDhGhK7KRcYcka5XrVKiuTjHfA8M6ZFr1Q7ZftTQzLm2Obd9EHeciUsEPh4IpcG9Z2SsifMj1SozLoKhyJgvMa2TbljaT6RIuPs1V0LHd7Clj11Ya0AW6DmIoCnsgLdwU5KAk5GLhQjZsUChmi0P3X6U from "figma:asset/8c0c7e6b95e729c77009e44dbd72d72bad9fd401.png";
import { Timeline } from "../components/Timeline";
import { SEOHead } from "../components/SEOHead";
import { useCountUp } from "../hooks/useCountUp";

const WHATSAPP_URL =
  "https://wa.me/5549999999999?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20perfura%C3%A7%C3%A3o%20de%20po%C3%A7o%20artesiano.";

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
      <div className="font-['Inter:Black',sans-serif] font-black text-[32px] md:text-[48px] text-[#137fec]">
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
        title="Quem Somos — Cristal Poços | 25 Anos de Excelência"
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

          <h1 className="font-['Inter:Black',sans-serif] font-black text-[36px] md:text-[60px] text-white tracking-[-2px] md:tracking-[-3px] leading-[38px] md:leading-[60px] mb-[16px]">
            25 Anos de Excelência em
            <br />
            <span className="text-[#f97316]">Águas Subterrâneas</span>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[24px] md:gap-[32px]">
            <StatItem end={25} suffix="+" label="Anos de Expertise" />
            <StatItem end={1200} suffix="+" label="Poços Artesianos" format="dot" />
            <StatItem end={100} suffix="%" label="Legalizado" />
            <StatItem end={24} suffix="h" label="Suporte Técnico" />
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-[64px] md:py-[96px]">
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[48px] lg:px-[160px]">
          <div className="flex flex-col md:flex-row gap-[48px] md:gap-[64px] items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1"
            >
              <h2 className="font-['Inter:Black',sans-serif] font-black text-[28px] md:text-[36px] text-[#111418] leading-[32px] md:leading-[40px] mb-[24px]">
                Uma trajetória marcada
                <br />
                pela{" "}
                <span className="text-[#137fec] underline decoration-[#f97316]">
                  precisão técnica
                </span>{" "}
                e<br className="hidden md:block" />
                inovação.
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
                  <div className="flex items-center -space-x-4">
                    <img
                      src={imgAb6AXuAl6BxAw5F1XwwBaOsLsVePkjoKh6MQgcwzTkcH6Etvid6M1JMe80KdHcrqLx4U7ITepntN6PgKamwUbyAuwwqy9ZqNy7Yt73XVjGnLdbx9X4JXyLqIf8UsGizPoSzftMa4CWaIloeNby4Yfb4EQ1TeXp3AjkXkFPhW9RjNeYy3LvzdGNaFPqH9SdsPt8URvnwzWzM1GOlnUOvUBcNotbMiyaw2IsxM9LQKjXlOndfYySnjfjwwhYmTkaA8WKmPpalPnAbi0E}
                      alt=""
                      className="rounded-full size-[40px] md:size-[48px] border-4 border-white"
                    />
                    <img
                      src={imgAb6AXuCbfq8RbFgKUrm4GsZ2I0F4L66ETWlzN0A2OcEdt8MeQhdRmycItv3Owb2XIpEAmyLv3AdJ1VK82L5NWggQtNzwKcScIuts3RP7BFk0Qm72XQppssQwJyGx8Zupc4UvAne1CBrwm610SozOezyGi6UkedCjxLtodny7KxGftWmfWJscjMcToJyW7GmMMo3HdMv2EiDmll3QIiI7DiSxAt4QYos0E43N49Jw1UYeUaV3HXtFz63R7Zemdj7IxHk4PuEy}
                      alt=""
                      className="rounded-full size-[40px] md:size-[48px] border-4 border-white"
                    />
                  </div>
                  <div>
                    <p className="font-['Inter:Medium',sans-serif] font-medium text-[13px] md:text-[14px] text-[#6b7280] leading-[18px] md:leading-[20px]">
                      Nossa equipe de especialistas está pronta para seu projeto.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="flex-1 relative w-full">
              <div className="hidden md:block absolute flex inset-[-24.22px_-25.13px_-24.21px_-25.14px] items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="flex-none h-[532px] w-[480px]"
                >
                  <div
                    className="bg-[rgba(19,127,236,0.1)] rounded-[16px] size-full"
                    style={{ transform: "rotate(-2deg)" }}
                  />
                </motion.div>
              </div>
              <motion.img
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                src={imgSedeCristal}
                alt="Sede Cristal Poços Artesianos"
                className="relative rounded-[12px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] w-full h-[300px] md:h-[500px] object-cover cursor-pointer"
              />
            </div>
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

      {/* Environmental Commitment Section */}
      <section className="py-[64px] md:py-[96px]">
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[48px] lg:px-[96px]">
          <div className="flex flex-col md:flex-row gap-[48px] md:gap-[64px] items-start">
            <div className="flex-1">
              <div className="flex gap-[8px] items-center mb-[16px]">
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                  <path d={svgPaths.p12cee600} fill="#137FEC" />
                </svg>
                <span className="font-['Inter:Bold',sans-serif] font-bold text-[14px] text-[#137fec] tracking-[1.4px] uppercase">
                  Responsabilidade
                </span>
              </div>

              <h2 className="font-['Inter:Black',sans-serif] font-black text-[28px] md:text-[36px] text-[#111418] leading-[34px] md:leading-[40px] mb-[16px]">
                Compromisso com o
                <br />
                Meio Ambiente
              </h2>

              <p className="font-['Inter:Regular',sans-serif] font-normal text-[16px] md:text-[18px] text-[#4b5563] leading-[26px] md:leading-[28px]">
                Na Cristal Poços, acreditamos que a água é o nosso bem mais
                precioso. Por isso, cada perfuração é precedida de estudos
                geológicos rigorosos para evitar a contaminação de aquíferos e
                garantir o{" "}
                <span className="font-bold text-[#f97316]">uso sustentável</span>{" "}
                dos recursos hídricos.
              </p>

              <div className="grid grid-cols-2 gap-[24px] mt-[32px]">
                <div>
                  <h4 className="font-['Inter:Bold',sans-serif] font-bold text-[14px] text-[#111418] mb-[8px]">
                    Licenciamento
                  </h4>
                  <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] text-[#6b7280] leading-[18px]">
                    Regularização total junto ao DAEE/IGAM.
                  </p>
                </div>
                <div>
                  <h4 className="font-['Inter:Bold',sans-serif] font-bold text-[14px] text-[#111418] mb-[8px]">
                    Gestão Hídrica
                  </h4>
                  <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] text-[#6b7280] leading-[18px]">
                    Projetos sustentáveis com economia de recursos.
                  </p>
                </div>
              </div>
            </div>

            {/* Images — responsivas com overlap apenas no desktop */}
            <div className="flex-1 relative w-full md:pb-[60px]">
              <img
                src={imgAb6AXuC1HJmsRts2Qa3ViUb80ZXbjdA136MUcy6ZR9Dj2J2PzytQMyi4PmEs91ZQcOd99NMhiEVf7LedGgJJgk7Hrzod4PNCBhdWqjMfaKwUvYpmbvx2T5MQj6HjbnZpW4PWgyWe2ZhWl7U7NzuCxVwG829Muyt1Hkp8H37AUHrGuAaij7RAcqt6KIisCeF68ZtQk4GGsOSkEkjvEiYwqk6G2NVz1Tr7SgQyl0LvwdA5CiXs9XynGMimAej5ZqgFywgG5LNCuI2Ba}
                alt="Meio Ambiente"
                className="rounded-[16px] w-full h-[260px] md:h-[400px] object-cover shadow-lg"
              />
              <img
                src={imgAb6AXuDDcYwplx3ZheCuXpjk29Z92Bde0XuzsHxXwllXiofurF3SdaoJ8QA3PjMj5MbkRxl4SaYxywH7RZddnOo708WjuZaxt3VBdHi3Yi8PlkGsejvDhGhK7KRcYcka5XrVKiuTjHfA8M6ZFr1Q7ZftTQzLm2Obd9EHeciUsEPh4IpcG9Z2SsifMj1SozLoKhyJgvMa2TbljaT6RIuPs1V0LHd7Clj11Ya0AW6DmIoCnsgLdwU5KAk5GLhQjZsUChmi0P3X6U}
                alt="Sustentabilidade"
                className="hidden md:block absolute bottom-0 left-[50px] rounded-[16px] w-[180px] h-[180px] object-cover shadow-xl border-4 border-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Evolution Section */}
      <Timeline />

      {/* CTA Section */}
      <section className="py-[64px] md:py-[96px]">
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[24px]">
          <div className="bg-[#137fec] rounded-[24px] md:rounded-[40px] px-[24px] md:px-[64px] lg:px-[96px] py-[48px] md:py-[96px] text-center relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 1232 468\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\"><rect x=\"0\" y=\"0\" height=\"100%\" width=\"100%\" fill=\"url(%23grad)\" opacity=\"1\"/><defs><radialGradient id=\"grad\" gradientUnits=\"userSpaceOnUse\" cx=\"0\" cy=\"0\" r=\"10\" gradientTransform=\"matrix(165.52 0 0 62.876 -54824 -20826)\"><stop stop-color=\"rgba(255,255,255,1)\" offset=\"0.009304\"/><stop stop-color=\"rgba(255,255,255,0)\" offset=\"0.009304\"/></radialGradient></defs></svg>')",
              }}
            />

            <div className="relative">
              <h2 className="font-['Inter:Black',sans-serif] font-black text-[28px] md:text-[48px] text-white tracking-[-0.7px] md:tracking-[-1.2px] leading-[32px] md:leading-[48px] mb-[24px]">
                Pronto para garantir sua independência
                <br className="hidden md:block" />
                hídrica?
              </h2>

              <p className="font-['Inter:Medium',sans-serif] font-medium text-[16px] md:text-[20px] text-[#dbeafe] leading-[24px] md:leading-[28px] mb-[32px] max-w-[700px] mx-auto">
                Entre em contato agora mesmo e descubra como podemos ajudar você
                a ter acesso contínuo e de qualidade à água.
              </p>

              <div className="flex flex-col sm:flex-row gap-[12px] md:gap-[16px] justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contato"
                    className="bg-white flex gap-[12px] items-center justify-center px-[24px] md:px-[32px] py-[14px] md:py-[16px] rounded-[12px] transition-shadow hover:shadow-lg"
                  >
                    <MessageCircle size={20} className="text-[#137fec]" />
                    <span className="font-['Inter:Bold',sans-serif] font-bold text-[16px] md:text-[18px] text-[#137fec]">
                      Falar com Especialista
                    </span>
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/servicos"
                    className="bg-[#f97316] flex gap-[12px] items-center justify-center px-[24px] md:px-[32px] py-[14px] md:py-[16px] rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.2)] transition-shadow hover:shadow-[0px_10px_20px_-3px_rgba(249,115,22,0.5)]"
                  >
                    <span className="font-['Inter:Bold',sans-serif] font-bold text-[16px] md:text-[18px] text-white">
                      Ver Nossos Serviços
                    </span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}