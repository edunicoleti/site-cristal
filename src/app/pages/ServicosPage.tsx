import { Link } from "react-router";
import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import svgPaths from "../../imports/svg-wcjskpv9i9";
import imgHeroSection from "figma:asset/6f3f1e25c33a868dc8533d3ce96ab231c98b4d58.png";
import { ProjectGallery } from "../components/ProjectGallery";
import { FAQ } from "../components/FAQ";
import { SEOHead } from "../components/SEOHead";

const WHATSAPP_URL =
  "https://wa.me/5549999999999?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20perfura%C3%A7%C3%A3o%20de%20po%C3%A7o%20artesiano.";

export function ServicosPage() {
  return (
    <div className="relative bg-white">
      <SEOHead
        title="Serviços — Cristal Poços | Perfuração, Manutenção e Bombeamento"
        description="Perfuração de poços artesianos, bombeamento solar, manutenção, análise de potabilidade e regularização ambiental. Orçamento gratuito."
      />

      {/* Hero Section */}
      <section className="relative h-[380px] md:h-[400px] flex flex-col items-start justify-center overflow-clip">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img
              alt=""
              className="absolute h-[200%] left-0 max-w-none top-[-50%] w-full object-cover"
              src={imgHeroSection}
            />
          </div>
          <div className="absolute bg-[rgba(16,25,34,0.7)] inset-0" />
        </div>

        <div className="relative max-w-[1280px] w-full mx-auto px-[20px] md:px-[24px] z-10">
          <div className="bg-[#137fec] inline-flex items-center justify-center px-[16px] py-[8px] rounded-[9999px] mb-[24px]">
            <span className="font-['Inter:Bold',sans-serif] font-bold text-[14px] text-white tracking-[1.4px] uppercase">
              O que fazemos
            </span>
          </div>

          <h1 className="font-['Inter:Black',sans-serif] font-black text-[40px] md:text-[60px] text-white tracking-[-1px] md:tracking-[-1.5px] leading-[44px] md:leading-[60px]">
            Nossos Serviços
          </h1>

          <p className="font-['Inter:Regular',sans-serif] font-normal text-[17px] md:text-[20px] text-[#d1d5db] leading-[26px] md:leading-[28px] mt-[16px] max-w-[600px]">
            Tecnologia de ponta e precisão de engenharia para garantir o seu
            abastecimento de água. Tudo com transparência e total suporte.
          </p>
        </div>
      </section>

      {/* Perfuração e Instalação */}
      <section className="bg-white py-[64px] md:py-[96px]">
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[48px] lg:px-[80px]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border-l-4 border-[#137fec] pl-[24px] md:pl-[28px] mb-[48px]"
          >
            <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[28px] md:text-[36px] text-[#111418] mb-[12px] md:mb-[16px]">
              Perfuração e Instalação
            </h2>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[16px] md:text-[18px] text-[#617589] leading-[26px] md:leading-[28px] max-w-[700px]">
              Dominamos as mais complexas técnicas de perfuração, atendendo desde
              residências até grandes indústrias e agronegócios.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] md:gap-[24px]">
            {[
              {
                icon: svgPaths.p1ee3ab40,
                title: "Aquífero Guarani",
                description:
                  "Especialistas em perfurações de alta profundidade e grande diâmetro, alcançando reservatórios estratégicos com máxima segurança.",
              },
              {
                icon: svgPaths.p3eeb2280,
                title: "Poços Sedimentares",
                description:
                  "Soluções otimizadas para terrenos com camadas de sedimentos, utilizando revestimentos especiais para garantir a pureza da água.",
              },
              {
                icon: svgPaths.p3da682a0,
                title: "Bombeamento Solar",
                description:
                  "Energia limpa e economia real. Instalamos sistemas fotovoltaicos dedicados para o bombeamento autônomo e sustentável.",
              },
              {
                icon: svgPaths.p2497f100,
                title: "Sistemas Hidráulicos",
                description:
                  'Montagem completa de quadros de comando, redes de distribuição e reservatórios, entregando o projeto "chave na mão".',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-[#f6f7f8] rounded-[12px] p-[24px] transition-shadow hover:shadow-lg"
              >
                <motion.div
                  className="bg-[rgba(19,127,236,0.1)] rounded-[8px] size-[56px] flex items-center justify-center mb-[24px]"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg width="23" height="24" viewBox="0 0 23 24" fill="none">
                    <path d={service.icon} fill="#137FEC" />
                  </svg>
                </motion.div>
                <h3 className="font-['Inter:Bold',sans-serif] font-bold text-[18px] md:text-[20px] text-[#111418] mb-[10px]">
                  {service.title}
                </h3>
                <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#617589] leading-[22px]">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manutenção e Sustentabilidade */}
      <section className="bg-[#f6f7f8] py-[64px] md:py-[96px]">
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[48px] lg:px-[80px]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border-l-4 border-[#137fec] pl-[24px] md:pl-[28px] mb-[48px]"
          >
            <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[28px] md:text-[36px] text-[#111418] mb-[12px] md:mb-[16px]">
              Manutenção e Sustentabilidade
            </h2>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[16px] md:text-[18px] text-[#617589] leading-[26px] md:leading-[28px] max-w-[700px]">
              Cuidamos do seu patrimônio com agilidade. A manutenção preventiva
              garante a longevidade e a qualidade da água do seu poço.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[24px] mb-[20px] md:mb-[24px]">
            {[
              {
                icon: svgPaths.p2d0baf00,
                title: "Assistência 24h",
                description:
                  "Equipes de prontidão para emergências mecânicas ou elétricas no seu sistema de bombeamento.",
              },
              {
                icon: svgPaths.p36be8500,
                title: "Limpeza e Desinfecção",
                description:
                  "Processos químicos e mecânicos rigorosos para eliminar sedimentos e agentes biológicos prejudiciais.",
              },
              {
                icon: svgPaths.p3f9f9400,
                title: "Análise de Potabilidade",
                description:
                  "Monitoramento constante da qualidade da água seguindo as normas dos órgãos reguladores.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -6, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                className="bg-white border border-[#e5e7eb] rounded-[12px] p-[24px] md:p-[25px] flex gap-[20px] transition-all"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <svg
                    className="mb-[8px]"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <path d={service.icon} fill="#137FEC" />
                  </svg>
                </motion.div>
                <div>
                  <h3 className="font-['Inter:Bold',sans-serif] font-bold text-[17px] md:text-[18px] text-[#111418] mb-[8px]">
                    {service.title}
                  </h3>
                  <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#617589] leading-[21px]">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[24px]">
            {[
              {
                icon: svgPaths.p2d750900,
                title: "Recuperação de Poços",
                description:
                  "Reforma e reativação de poços antigos ou abandonados com tecnologia de revestimento interno.",
              },
              {
                icon: svgPaths.p3bb1200,
                title: "Outorga e Regularização",
                description:
                  "Consultoria completa para licenciamento ambiental e regularização documental junto ao DAEE/IGAM.",
              },
              {
                icon: svgPaths.p18f6af16,
                title: "Teste de Vazão",
                description:
                  "Medição precisa da capacidade de produção do poço para dimensionamento correto dos equipamentos.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.15 }}
                whileHover={{ y: -6, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                className="bg-white border border-[#e5e7eb] rounded-[12px] p-[24px] md:p-[25px] flex gap-[20px] transition-all"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <svg
                    className="mb-[8px]"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <path d={service.icon} fill="#137FEC" />
                  </svg>
                </motion.div>
                <div>
                  <h3 className="font-['Inter:Bold',sans-serif] font-bold text-[17px] md:text-[18px] text-[#111418] mb-[8px]">
                    {service.title}
                  </h3>
                  <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#617589] leading-[21px]">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery — Sprint 3.2 */}
      <ProjectGallery />

      {/* FAQ — Sprint 3.3 */}
      <FAQ />

      {/* CTA Section */}
      <section className="bg-white py-[64px] md:py-[96px]">
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
                Pronto para ter sua própria fonte
                <br className="hidden md:block" />
                de água?
              </h2>

              <p className="font-['Inter:Medium',sans-serif] font-medium text-[16px] md:text-[20px] text-[#dbeafe] leading-[24px] md:leading-[28px] mb-[32px] max-w-[700px] mx-auto">
                Nosso time técnico está pronto para realizar um estudo de
                viabilidade gratuito para o seu projeto.
              </p>

              <div className="flex flex-col sm:flex-row gap-[12px] md:gap-[16px] justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contato"
                    className="bg-white flex gap-[12px] items-center justify-center px-[24px] md:px-[32px] py-[14px] md:py-[16px] rounded-[12px] transition-shadow hover:shadow-lg"
                  >
                    <MessageCircle size={20} className="text-[#137fec]" />
                    <span className="font-['Inter:Bold',sans-serif] font-bold text-[16px] md:text-[18px] text-[#137fec]">
                      Solicitar Estudo Gratuito
                    </span>
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] flex gap-[12px] items-center justify-center px-[24px] md:px-[32px] py-[14px] md:py-[16px] rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(37,211,102,0.3)] transition-shadow hover:shadow-[0px_10px_20px_-3px_rgba(37,211,102,0.5)]"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M17.05 2.91C15.18 1.03 12.69 0 10.04 0C4.58 0 0.13 4.45 0.13 9.91C0.13 11.66 0.59 13.36 1.45 14.86L0.05 20L5.31 18.62C6.76 19.41 8.38 19.83 10.04 19.83C15.5 19.83 19.95 15.38 19.95 9.92C19.95 7.27 18.92 4.78 17.05 2.91ZM10.04 18.15C8.56 18.15 7.11 17.75 5.84 17L5.54 16.82L2.42 17.64L3.25 14.6L3.05 14.29C2.23 12.98 1.79 11.46 1.79 9.91C1.79 5.37 5.49 1.67 10.03 1.67C12.23 1.67 14.3 2.53 15.85 4.09C17.41 5.65 18.26 7.72 18.26 9.92C18.27 14.46 14.57 18.15 10.04 18.15ZM14.56 12.1C14.31 11.97 13.09 11.37 12.87 11.29C12.64 11.2 12.48 11.16 12.31 11.41C12.14 11.66 11.67 12.22 11.53 12.39C11.38 12.56 11.24 12.58 10.99 12.45C10.74 12.32 9.94 12.06 8.99 11.2C8.24 10.53 7.73 9.7 7.59 9.45C7.44 9.2 7.58 9.06 7.71 8.93C7.83 8.81 7.96 8.62 8.09 8.48C8.22 8.34 8.27 8.23 8.35 8.06C8.43 7.89 8.39 7.75 8.33 7.62C8.27 7.49 7.73 6.26 7.53 5.76C7.33 5.28 7.13 5.34 6.98 5.33H6.53C6.36 5.33 6.1 5.39 5.87 5.64C5.65 5.89 5 6.49 5 7.72C5 8.95 5.9 10.14 6.03 10.31C6.16 10.48 7.73 12.94 10.11 14.01C10.69 14.27 11.14 14.42 11.49 14.53C12.07 14.72 12.6 14.69 13.02 14.63C13.49 14.56 14.5 14.03 14.7 13.45C14.9 12.87 14.9 12.38 14.84 12.27C14.78 12.16 14.81 12.23 14.56 12.1Z"
                        fill="white"
                      />
                    </svg>
                    <span className="font-['Inter:Bold',sans-serif] font-bold text-[16px] md:text-[18px] text-white">
                      Falar no WhatsApp
                    </span>
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
