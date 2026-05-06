import { Link } from "react-router";
import { motion } from "motion/react";

import { MessageCircle, Settings, CalendarCheck, ClipboardCheck } from "lucide-react";
import imgSection from "figma:asset/ec85bce54266d7aaaf8f0e10d293c5227cd2f32f.png";
import fundoVideo from "../../assets/fundo-hero-cristal-compressed.mp4";
import { BrazilMapInteractive } from "../components/BrazilMapInteractive";
import { Partners } from "../components/Partners";
import { DrillingProcessUI } from "../components/DrillingProcessUI";
import { SEOHead } from "../components/SEOHead";
import { useCountUp } from "../hooks/useCountUp";
import { WaterCTACard, WHATSAPP_URL, WhatsAppIcon } from "../components/WaterCTACard";



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
      <motion.div
        className="font-['Inter:Bold',sans-serif] font-bold text-[40px] md:text-[48px] text-[#137fec]"
        whileHover={{ scale: 1.08 }}
      >
        {display}
      </motion.div>
      <div className="font-['Inter:Medium',sans-serif] font-medium text-[14px] md:text-[16px] text-[#617589] mt-[4px]">
        {label}
      </div>
    </div>
  );
}

export function HomePage() {
  return (
    <div className="relative">
      <SEOHead
        title="Cristal Poços — Perfuração de Poços Artesianos | Chapecó SC"
        description="Mais de 25 anos perfurando poços artesianos com tecnologia de ponta. Atuamos em SC, MA e mais 7 estados. Orçamento gratuito. Legalizado e certificado."
      />

      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[640px] flex flex-col items-start justify-center">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute h-full w-full object-cover"
              poster={imgSection}
            >
              <source src={fundoVideo} type="video/mp4" />
              <img
                src={imgSection}
                alt=""
                className="absolute h-full w-full object-cover"
              />
            </video>
          </div>
          <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0.85)] md:from-[rgba(0,0,0,0.8)] via-[rgba(0,0,0,0.65)] inset-0 to-[rgba(0,0,0,0.3)]" />
        </div>

        <div className="relative max-w-[1280px] w-full mx-auto px-[20px] md:px-[24px] py-[40px] md:py-0">
          <div className="max-w-[672px] flex flex-col gap-[20px] md:gap-[24px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="backdrop-blur-[6px] bg-[rgba(19,127,236,0.2)] flex gap-[8px] items-center px-[16px] py-[8px] rounded-[9999px] w-fit"
            >
              <div className="bg-[#137fec] rounded-[9999px] size-[8px]" />
              <span className="font-['Inter:Bold',sans-serif] font-bold text-[12px] text-white tracking-[0.6px] uppercase">
                Líder em Perfuração de Poços Artesianos
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-['Inter:Bold',sans-serif] font-bold text-[32px] sm:text-[40px] md:text-[60px] text-white tracking-[-0.8px] md:tracking-[-1.5px] leading-[38px] sm:leading-[46px] md:leading-[64px]"
            >
              Melhore sua
              <br />
              <span className="text-[#137fec]">captação de água</span>
              <br />
              com quem entende
              <br className="sm:hidden" />
              {" "}do assunto!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-['Inter:Medium',sans-serif] font-medium text-[15px] sm:text-[17px] md:text-[20px] text-[#e5e7eb] leading-[22px] sm:leading-[26px] md:leading-[28px]"
            >
              Mais de 27 anos de experiência transformando o acesso à água com tecnologia de ponta e máxima transparência para o seu projeto.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-[10px] sm:gap-[12px] md:gap-[16px] pt-[12px] md:pt-[16px] w-full max-w-[400px] sm:max-w-none"
            >
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Link
                  to="/contato"
                  className="bg-[#137fec] flex gap-[8px] items-center justify-center px-[20px] sm:px-[28px] md:px-[32px] py-[14px] sm:py-[16px] md:py-[17px] rounded-[10px] md:rounded-[12px] shadow-[0px_20px_25px_-5px_rgba(19,127,236,0.3),0px_8px_10px_-6px_rgba(19,127,236,0.3)] transition-shadow hover:shadow-[0px_20px_30px_-5px_rgba(19,127,236,0.5)] w-full"
                >
                  <MessageCircle size={20} className="text-white shrink-0" />
                  <span className="font-['Inter:Bold',sans-serif] font-bold text-[15px] sm:text-[17px] md:text-[18px] text-white">
                    Solicite um Orçamento
                  </span>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Link
                  to="/servicos"
                  className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] flex gap-[8px] items-center justify-center px-[20px] sm:px-[28px] md:px-[33px] py-[14px] sm:py-[16px] md:py-[17px] rounded-[10px] md:rounded-[12px] transition-all hover:bg-[rgba(255,255,255,0.15)] w-full"
                >
                  <svg width="14" height="18" viewBox="0 0 16 20" fill="none" className="shrink-0">
                    <path
                      d="M8 0L0 4V9.09091C0 14.1455 3.12 18.8182 8 20C12.88 18.8182 16 14.1455 16 9.09091V4L8 0Z"
                      fill="white"
                    />
                  </svg>
                  <span className="font-['Inter:Bold',sans-serif] font-bold text-[15px] sm:text-[17px] md:text-[18px] text-white">
                    Nossos Serviços
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section — com CountUp */}
      <section className="bg-white py-[32px] md:py-[48px]">
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[24px]">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-[24px] md:gap-[32px]">
            <StatItem end={27} suffix="+" label="Anos de Experiência" />
            <StatItem end={7000} suffix="+" label="Poços Perfurados" format="dot" />
            <StatItem end={24} suffix="h" label="Assistência Técnica" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#f6f7f8] py-[64px] md:py-[96px]">
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[24px]">
          <div className="text-center mb-[48px] md:mb-[64px]">
            <p className="font-['Inter:Bold',sans-serif] font-bold text-[12px] md:text-[14px] text-[#137fec] tracking-[2.8px] uppercase mb-[8px]">
              Diferenciais Cristal
            </p>
            <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[28px] md:text-[36px] text-[#111418] tracking-[-0.7px] md:tracking-[-0.9px] mb-[8px]">
              Por que escolher a nossa empresa?
            </h2>
            <div className="bg-[#f97316] h-[4px] rounded-[9999px] w-[80px] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] md:gap-[32px]">
            {[
              {
                icon: <CalendarCheck size={28} className="text-[#137fec]" />,
                title: "27+ Anos de Experiência",
                description:
                  "Uma trajetória sólida marcada pelo sucesso técnico e a satisfação contínua de milhares de clientes rurais, industriais e residenciais em todo território nacional.",
              },
              {
                icon: <Settings size={28} className="text-[#137fec]" />,
                title: "Tecnologia Avançada",
                description:
                  "Investimos continuamente em tecnologia e inovação, aplicando equipamentos modernos e estudos geológicos precisos para definir a melhor solução para cada projeto, conforme a necessidade do cliente e as características do terreno.",
              },
              {
                icon: <ClipboardCheck size={28} className="text-[#137fec]" />,
                title: "Transparência e Eficiência",
                description:
                  "Propostas claras, sem custos ocultos, com execução completa desde o licenciamento ambiental prévio, execução da obra e outorga.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white border border-[#dbe0e6] rounded-[16px] p-[33px] transition-shadow hover:shadow-lg"
              >
                <motion.div
                  className="bg-[rgba(19,127,236,0.1)] rounded-[12px] size-[56px] flex items-center justify-center mb-[20px]"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="font-['Inter:Bold',sans-serif] font-bold text-[20px] text-[#111418] mb-[8px]">
                  {feature.title}
                </h3>
                <p className="font-['Inter:Regular',sans-serif] font-normal text-[16px] text-[#617589] leading-[26px]">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Drilling Process Animation — oculto temporariamente, manter para uso futuro */}
      {/* <DrillingProcessUI /> */}

      {/* Coverage Section */}
      <section className="bg-white py-[64px] md:py-[96px]">
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[24px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-[48px] md:mb-[64px]"
          >
            <p className="font-['Inter:Bold',sans-serif] font-bold text-[12px] md:text-[14px] text-[#137fec] tracking-[2.8px] uppercase mb-[8px] md:mb-[16px]">
              Presença Nacional
            </p>
            <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[28px] md:text-[36px] text-[#111418] tracking-[-0.7px] md:tracking-[-0.9px] mb-[8px] md:mb-[16px]">
              Onde Atuamos
            </h2>
            <div className="bg-[#f97316] h-[4px] rounded-[9999px] w-[80px]" />
          </motion.div>

          <BrazilMapInteractive />
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

      {/* Partners */}
      <Partners />
    </div>
  );
}