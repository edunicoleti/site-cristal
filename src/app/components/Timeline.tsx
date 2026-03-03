import { motion } from "motion/react";
import { Droplet, TrendingUp, Award, Trophy, Building2, Globe } from "lucide-react";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  stats?: string;
}

const events: TimelineEvent[] = [
  {
    year: "1998",
    title: "Fundação da Cristal Poços",
    description: "Início das atividades com foco em perfuração residencial e pequenos sistemas. Primeiro escritório em Chapecó/SC com equipe de 5 profissionais.",
    icon: <Droplet size={24} />,
    color: "#f97316",
    stats: "5 colaboradores"
  },
  {
    year: "2005",
    title: "Expansão da Frota",
    description: "Aquisição de perfuratrizes de alta potência para atender ao segmento industrial e grandes empreendimentos. Investimento de R$ 2M em equipamentos.",
    icon: <TrendingUp size={24} />,
    color: "#137fec",
    stats: "500+ poços perfurados"
  },
  {
    year: "2010",
    title: "Abertura da Filial Balsas/MA",
    description: "Expansão para o Nordeste com nova base operacional estratégica. Ampliação da área de cobertura para 7 estados do Brasil.",
    icon: <Building2 size={24} />,
    color: "#f97316",
    stats: "2 filiais ativas"
  },
  {
    year: "2013",
    title: "Certificação Ambiental",
    description: "Obtenção de certificações ambientais e licenças específicas para atuação em áreas de preservação permanente. Compliance total com DAEE/IGAM.",
    icon: <Award size={24} />,
    color: "#137fec",
    stats: "100% regularizado"
  },
  {
    year: "2018",
    title: "Modernização Tecnológica",
    description: "Implementação de sistemas de georreferenciamento e análise geológica computadorizada. Tecnologia de ponta em todas as perfurações.",
    icon: <Globe size={24} />,
    color: "#f97316",
    stats: "1.000+ poços perfurados"
  },
  {
    year: "2023",
    title: "Liderança Regional",
    description: "Reconhecimento como referência em perfuração de poços no Brasil, com atuação em mais de 9 estados. Equipe especializada de 50+ profissionais.",
    icon: <Trophy size={24} />,
    color: "#137fec",
    stats: "1.200+ poços perfurados"
  }
];

export function Timeline() {
  return (
    <section className="bg-gradient-to-b from-[#f6f7f8] to-white py-[64px] md:py-[96px]">
      <div className="max-w-[1280px] mx-auto px-[16px] md:px-[24px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-[48px] md:mb-[80px]"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-[8px] bg-[#137fec]/10 px-[16px] py-[8px] rounded-[9999px] mb-[16px]"
          >
            <div className="bg-[#137fec] rounded-full size-[8px]" />
            <span className="font-['Inter:Bold',sans-serif] font-bold text-[12px] md:text-[14px] text-[#137fec] tracking-[1.4px] uppercase">
              Nossa História
            </span>
          </motion.div>
          
          <h2 className="font-['Inter:Black',sans-serif] font-black text-[32px] md:text-[48px] text-[#111418] mb-[16px] tracking-[-1px]">
            Nossa Evolução
          </h2>
          
          <p className="font-['Inter:Medium',sans-serif] font-medium text-[16px] md:text-[20px] text-[#617589] max-w-[700px] mx-auto">
            25 anos de trajetória marcada por inovação, crescimento e compromisso com a excelência
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line - Desktop */}
          <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-[4px] bg-gradient-to-b from-[#f97316] via-[#137fec] to-[#f97316] transform -translate-x-1/2" />
          
          {/* Vertical Line - Mobile */}
          <div className="md:hidden absolute left-[24px] top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#f97316] via-[#137fec] to-[#f97316]" />

          {/* Events */}
          <div className="space-y-[40px] md:space-y-[80px]">
            {events.map((event, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Desktop Layout */}
                  <div className="hidden md:grid md:grid-cols-2 gap-[48px] items-center">
                    {/* Left Content */}
                    {isLeft ? (
                      <>
                        <motion.div 
                          whileHover={{ scale: 1.02, x: -8 }}
                          className="text-right pr-[32px]"
                        >
                          <div className="bg-white rounded-[20px] p-[32px] shadow-lg border-2 border-[#f0f0f0] hover:border-[#137fec]/30 transition-all">
                            <div className="flex items-center justify-end gap-[12px] mb-[12px]">
                              <h3 className="font-['Inter:Black',sans-serif] font-black text-[24px] text-[#111418]">
                                {event.title}
                              </h3>
                              <div 
                                className="rounded-[12px] p-[12px] flex-shrink-0"
                                style={{ backgroundColor: `${event.color}15` }}
                              >
                                <div style={{ color: event.color }}>
                                  {event.icon}
                                </div>
                              </div>
                            </div>
                            <p className="font-['Inter:Regular',sans-serif] text-[15px] text-[#617589] leading-[24px] mb-[16px]">
                              {event.description}
                            </p>
                            {event.stats && (
                              <div 
                                className="inline-flex items-center gap-[8px] px-[12px] py-[6px] rounded-[8px]"
                                style={{ backgroundColor: `${event.color}10` }}
                              >
                                <span 
                                  className="font-['Inter:Bold',sans-serif] font-bold text-[12px] uppercase tracking-wide"
                                  style={{ color: event.color }}
                                >
                                  {event.stats}
                                </span>
                              </div>
                            )}
                          </div>
                        </motion.div>
                        <div />
                      </>
                    ) : (
                      <>
                        <div />
                        <motion.div 
                          whileHover={{ scale: 1.02, x: 8 }}
                          className="text-left pl-[32px]"
                        >
                          <div className="bg-white rounded-[20px] p-[32px] shadow-lg border-2 border-[#f0f0f0] hover:border-[#137fec]/30 transition-all">
                            <div className="flex items-center gap-[12px] mb-[12px]">
                              <div 
                                className="rounded-[12px] p-[12px] flex-shrink-0"
                                style={{ backgroundColor: `${event.color}15` }}
                              >
                                <div style={{ color: event.color }}>
                                  {event.icon}
                                </div>
                              </div>
                              <h3 className="font-['Inter:Black',sans-serif] font-black text-[24px] text-[#111418]">
                                {event.title}
                              </h3>
                            </div>
                            <p className="font-['Inter:Regular',sans-serif] text-[15px] text-[#617589] leading-[24px] mb-[16px]">
                              {event.description}
                            </p>
                            {event.stats && (
                              <div 
                                className="inline-flex items-center gap-[8px] px-[12px] py-[6px] rounded-[8px]"
                                style={{ backgroundColor: `${event.color}10` }}
                              >
                                <span 
                                  className="font-['Inter:Bold',sans-serif] font-bold text-[12px] uppercase tracking-wide"
                                  style={{ color: event.color }}
                                >
                                  {event.stats}
                                </span>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      </>
                    )}
                  </div>

                  {/* Mobile Layout */}
                  <div className="md:hidden pl-[56px]">
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="bg-white rounded-[16px] p-[24px] shadow-lg border-2 border-[#f0f0f0]"
                    >
                      <div className="flex items-start gap-[12px] mb-[12px]">
                        <div 
                          className="rounded-[12px] p-[10px] flex-shrink-0"
                          style={{ backgroundColor: `${event.color}15` }}
                        >
                          <div style={{ color: event.color }}>
                            {event.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-['Inter:Black',sans-serif] font-black text-[18px] text-[#111418] mb-[4px]">
                            {event.title}
                          </h3>
                          {event.stats && (
                            <div 
                              className="inline-flex items-center gap-[6px] px-[10px] py-[4px] rounded-[6px] mb-[8px]"
                              style={{ backgroundColor: `${event.color}10` }}
                            >
                              <span 
                                className="font-['Inter:Bold',sans-serif] font-bold text-[11px] uppercase tracking-wide"
                                style={{ color: event.color }}
                              >
                                {event.stats}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                      <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#617589] leading-[22px]">
                        {event.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Year Badge - Center */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, delay: index * 0.1 + 0.2 }}
                    className="absolute top-1/2 -translate-y-1/2 left-[24px] -translate-x-1/2 md:left-1/2 md:-translate-x-1/2"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="relative"
                    >
                      {/* Outer Ring */}
                      <div 
                        className="absolute inset-[-8px] rounded-full opacity-20"
                        style={{ backgroundColor: event.color }}
                      />
                      
                      {/* Main Circle */}
                      <div 
                        className="size-[72px] md:size-[88px] rounded-full flex items-center justify-center shadow-xl border-4 border-white relative z-10"
                        style={{ backgroundColor: event.color }}
                      >
                        <span className="font-['Inter:Black',sans-serif] font-black text-[18px] md:text-[22px] text-white">
                          {event.year}
                        </span>
                      </div>

                      {/* Pulse Effect */}
                      <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 rounded-full"
                        style={{ backgroundColor: event.color }}
                      />
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Footer Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-[64px] md:mt-[96px] text-center"
        >
          <div className="bg-gradient-to-r from-[#137fec] to-[#0c5fb8] rounded-[24px] p-[32px] md:p-[48px] shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-[24px] md:gap-[32px]">
              {[
                { value: "25+", label: "Anos de História" },
                { value: "1.200+", label: "Poços Perfurados" },
                { value: "9", label: "Estados Atendidos" },
                { value: "50+", label: "Profissionais" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="font-['Inter:Black',sans-serif] font-black text-[32px] md:text-[48px] text-white mb-[8px]">
                    {stat.value}
                  </div>
                  <div className="font-['Inter:Medium',sans-serif] font-medium text-[13px] md:text-[16px] text-[#dbeafe]">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}