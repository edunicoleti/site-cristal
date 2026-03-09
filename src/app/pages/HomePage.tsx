import { Link } from "react-router";
import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import imgSection from "figma:asset/ec85bce54266d7aaaf8f0e10d293c5227cd2f32f.png";
import fundoVideo from "../../assets/fundo-hero-cristal.mp4";
import { BrazilMapInteractive } from "../components/BrazilMapInteractive";
import { Testimonials } from "../components/Testimonials";
import { Partners } from "../components/Partners";
import { DrillingProcessUI } from "../components/DrillingProcessUI";
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
      <motion.div
        className="font-['Inter:Black',sans-serif] font-black text-[40px] md:text-[48px] text-[#137fec]"
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
                Líder em Perfuração de Poços
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-['Inter:Black',sans-serif] font-black text-[32px] sm:text-[40px] md:text-[60px] text-white tracking-[-0.8px] md:tracking-[-1.5px] leading-[38px] sm:leading-[46px] md:leading-[64px]"
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
              Mais de 25 anos de experiência transformando o acesso à água com
              tecnologia de ponta e máxima transparência para sua propriedade.
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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[24px] md:gap-[32px]">
            <StatItem end={25} suffix="+" label="Anos de Experiência" />
            <StatItem end={1200} suffix="+" label="Poços Perfurados" format="dot" />
            <StatItem end={100} suffix="%" label="Legalizado" />
            <StatItem end={24} suffix="h" label="Suporte Técnico" />
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
            <h2 className="font-['Inter:Black',sans-serif] font-black text-[28px] md:text-[36px] text-[#111418] tracking-[-0.7px] md:tracking-[-0.9px] mb-[8px]">
              Por que escolher a nossa empresa?
            </h2>
            <div className="bg-[#f97316] h-[4px] rounded-[9999px] w-[80px] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] md:gap-[32px]">
            {[
              {
                icon: (
                  <svg width="18" height="19" viewBox="0 0 18 19" fill="none">
                    <path d="M9 0L0 4.75L9 9.5L18 4.75L9 0Z" fill="#137FEC" />
                    <path
                      d="M0 7.125V14.25L9 19L18 14.25V7.125L9 11.875L0 7.125Z"
                      fill="#137FEC"
                    />
                  </svg>
                ),
                title: "Tecnologia Avançada",
                description:
                  "Utilizamos perfuratrizes roto-pneumáticas modernas e técnicas geofísicas de alta precisão para garantir o melhor fluxo de água.",
              },
              {
                icon: (
                  <svg width="22" height="21" viewBox="0 0 22 21" fill="none">
                    <path
                      d="M11 0L13.708 7.604H22L15.646 12.292L18.354 19.896L11 15.208L3.646 19.896L6.354 12.292L0 7.604H8.292L11 0Z"
                      fill="#137FEC"
                    />
                  </svg>
                ),
                title: "25+ Anos de Experiência",
                description:
                  "Uma trajetória sólida marcada pelo sucesso técnico e a satisfação contínua de centenas de clientes rurais, industriais e residenciais.",
              },
              {
                icon: (
                  <svg width="18" height="19" viewBox="0 0 18 19" fill="none">
                    <path
                      d="M9 0C4.032 0 0 4.032 0 9C0 13.968 4.032 18 9 18C13.968 18 18 13.968 18 9C18 4.032 13.968 0 9 0ZM9 16.2C5.022 16.2 1.8 12.978 1.8 9C1.8 5.022 5.022 1.8 9 1.8C12.978 1.8 16.2 5.022 16.2 9C16.2 12.978 12.978 16.2 9 16.2Z"
                      fill="#137FEC"
                    />
                    <path d="M13.5 8.1H9.9V4.5H8.1V9.9H13.5V8.1Z" fill="#137FEC" />
                  </svg>
                ),
                title: "Transparência Total",
                description:
                  "Processos claros, orçamentos detalhados sem custos ocultos e auxílio completo em todo o licenciamento ambiental e outorga.",
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

      {/* Drilling Process Animation */}
      <DrillingProcessUI />

      {/* Testimonials — Sprint 3.1 */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-[64px] md:py-[96px]">
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[24px]">
          <div className="bg-[#137fec] rounded-[24px] md:rounded-[40px] px-[24px] md:px-[64px] lg:px-[232px] py-[48px] md:py-[96px] relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 1232 468\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\"><rect x=\"0\" y=\"0\" height=\"100%\" width=\"100%\" fill=\"url(%23grad)\" opacity=\"1\"/><defs><radialGradient id=\"grad\" gradientUnits=\"userSpaceOnUse\" cx=\"0\" cy=\"0\" r=\"10\" gradientTransform=\"matrix(165.52 0 0 62.876 -54824 -20826)\"><stop stop-color=\"rgba(255,255,255,1)\" offset=\"0.009304\"/><stop stop-color=\"rgba(255,255,255,0)\" offset=\"0.009304\"/></radialGradient></defs></svg>')",
              }}
            />

            <div className="relative max-w-[768px] mx-auto text-center">
              <h2 className="font-['Inter:Black',sans-serif] font-black text-[28px] md:text-[48px] text-white tracking-[-0.7px] md:tracking-[-1.2px] leading-[32px] md:leading-[48px] mb-[24px] md:mb-[32px] max-w-[800px] mx-auto">
                Pronto para ter sua própria fonte de água cristalina?
              </h2>

              <p className="font-['Inter:Medium',sans-serif] font-medium text-[16px] md:text-[20px] text-[#dbeafe] leading-[24px] md:leading-[28px] mb-[24px] md:mb-[32px]">
                Fale com nossos especialistas agora mesmo e garanta a melhor
                captação para
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
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M17.05 2.91C15.18 1.03 12.69 0 10.04 0C4.58 0 0.13 4.45 0.13 9.91C0.13 11.66 0.59 13.36 1.45 14.86L0.05 20L5.31 18.62C6.76 19.41 8.38 19.83 10.04 19.83C15.5 19.83 19.95 15.38 19.95 9.92C19.95 7.27 18.92 4.78 17.05 2.91ZM10.04 18.15C8.56 18.15 7.11 17.75 5.84 17L5.54 16.82L2.42 17.64L3.25 14.6L3.05 14.29C2.23 12.98 1.79 11.46 1.79 9.91C1.79 5.37 5.49 1.67 10.03 1.67C12.23 1.67 14.3 2.53 15.85 4.09C17.41 5.65 18.26 7.72 18.26 9.92C18.27 14.46 14.57 18.15 10.04 18.15ZM14.56 12.1C14.31 11.97 13.09 11.37 12.87 11.29C12.64 11.2 12.48 11.16 12.31 11.41C12.14 11.66 11.67 12.22 11.53 12.39C11.38 12.56 11.24 12.58 10.99 12.45C10.74 12.32 9.94 12.06 8.99 11.2C8.24 10.53 7.73 9.7 7.59 9.45C7.44 9.2 7.58 9.06 7.71 8.93C7.83 8.81 7.96 8.62 8.09 8.48C8.22 8.34 8.27 8.23 8.35 8.06C8.43 7.89 8.39 7.75 8.33 7.62C8.27 7.49 7.73 6.26 7.53 5.76C7.33 5.28 7.13 5.34 6.98 5.33H6.53C6.36 5.33 6.1 5.39 5.87 5.64C5.65 5.89 5 6.49 5 7.72C5 8.95 5.9 10.14 6.03 10.31C6.16 10.48 7.73 12.94 10.11 14.01C10.69 14.27 11.14 14.42 11.49 14.53C12.07 14.72 12.6 14.69 13.02 14.63C13.49 14.56 14.5 14.03 14.7 13.45C14.9 12.87 14.9 12.38 14.84 12.27C14.78 12.16 14.81 12.23 14.56 12.1Z"
                        fill="white"
                      />
                    </svg>
                    <span className="font-['Inter:Bold',sans-serif] font-bold text-[16px] md:text-[18px] text-white">
                      Conversar no WhatsApp
                    </span>
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
            <h2 className="font-['Inter:Black',sans-serif] font-black text-[28px] md:text-[36px] text-[#111418] tracking-[-0.7px] md:tracking-[-0.9px] mb-[8px] md:mb-[16px]">
              Onde Atuamos
            </h2>
            <div className="bg-[#f97316] h-[4px] rounded-[9999px] w-[80px]" />
          </motion.div>

          <BrazilMapInteractive />
        </div>
      </section>

      {/* Partners */}
      <Partners />
    </div>
  );
}