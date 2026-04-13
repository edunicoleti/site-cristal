import { motion } from "motion/react";
import { ProjectGallery } from "../components/ProjectGallery";
import { SEOHead } from "../components/SEOHead";
import fundoVideo from "../../assets/fundo-hero-cristal.mp4";

export function ProjetosPage() {
  return (
    <div className="relative bg-white">
      <SEOHead
        title="Projetos — Cristal Poços | Portfólio de Obras Realizadas"
        description="Conheça os projetos de perfuração de poços artesianos realizados pela Cristal Poços em todo o Brasil. Perfurações residenciais, rurais e industriais."
      />

      {/* Hero Section */}
      <section className="relative h-[380px] md:h-[400px] flex flex-col items-start justify-center overflow-clip">
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

        <div className="relative max-w-[1280px] w-full mx-auto px-[20px] md:px-[24px] z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#137fec] inline-flex items-center justify-center px-[16px] py-[8px] rounded-[9999px] mb-[24px]"
          >
            <span className="font-['Inter:Bold',sans-serif] font-bold text-[14px] text-white tracking-[1.4px] uppercase">
              Portfólio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-['Inter:Bold',sans-serif] font-bold text-[40px] md:text-[60px] text-white tracking-[-1px] md:tracking-[-1.5px] leading-[44px] md:leading-[60px]"
          >
            Projetos Realizados
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-['Inter:Regular',sans-serif] font-normal text-[17px] md:text-[20px] text-[#d1d5db] leading-[26px] md:leading-[28px] mt-[16px] max-w-[600px]"
          >
            Mais de 7.000 poços perfurados em todo o território nacional. Conheça alguns dos projetos que realizamos.
          </motion.p>
        </div>
      </section>

      {/* Gallery */}
      <ProjectGallery />
    </div>
  );
}
