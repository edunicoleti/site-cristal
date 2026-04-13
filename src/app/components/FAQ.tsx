import { motion } from "motion/react";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Quanto tempo leva para perfurar um poço artesiano?",
    answer:
      "O tempo médio de perfuração varia entre 3 a 7 dias úteis, dependendo da profundidade necessária e do tipo de terreno. Poços residenciais com até 200m geralmente são concluídos em 3 dias. Projetos industriais ou em terrenos rochosos podem levar até 10 dias. Após a perfuração, a instalação completa do sistema de bombeamento leva mais 1 a 2 dias.",
  },
  {
    question: "Qual a profundidade média de um poço artesiano?",
    answer:
      "A profundidade varia muito conforme a região e a geologia local. Em média, os poços da Cristal Poços têm entre 80m e 350m de profundidade. Na região Sul (SC, PR), poços sedimentares atingem entre 100m e 250m. No Nordeste (MA), onde atuamos em Balsas, a profundidade média é de 200m a 320m. Realizamos estudo geofísico prévio para determinar a profundidade ideal.",
  },
  {
    question: "É necessária licença para perfurar um poço artesiano?",
    answer:
      "Sim, é obrigatório. A perfuração de poços artesianos exige autorização dos órgãos estaduais de recursos hídricos (DAEE em SP, IGAM em MG, SRH nos demais estados) e, em alguns casos, licença ambiental. A Cristal Poços cuida de todo esse processo burocrático por você, garantindo que sua perfuração seja 100% regularizada e dentro das normas da ABNT.",
  },
  {
    question: "Qual a durabilidade de um poço artesiano bem executado?",
    answer:
      "Um poço artesiano executado com técnica adequada e materiais de qualidade tem vida útil superior a 30 anos. Poços com manutenção preventiva regular podem durar mais de 50 anos. A durabilidade depende principalmente da qualidade dos revestimentos utilizados, da profundidade adequada e da realização de manutenções periódicas a cada 2-3 anos.",
  },
  {
    question: "O poço artesiano precisa de manutenção periódica?",
    answer:
      "Sim. Recomendamos inspeção anual e limpeza/desinfecção a cada 2 anos. A manutenção preventiva inclui verificação do bombeamento, análise bacteriológica e físico-química da água, limpeza do filtro e verificação dos revestimentos. Sem manutenção, há risco de redução da vazão, contaminação e deterioração precoce do equipamento. A Cristal Poços oferece contrato de manutenção com equipe especializada.",
  },
  {
    question: "Qual a diferença entre poço artesiano, semiartesiano e tubular profundo?",
    answer:
      "Poço artesiano: a pressão natural faz a água subir até a superfície sem bomba. Poço semiartesiano (tubular profundo): a água está sob pressão, mas não sobe naturalmente — necessita bomba. Poço tubular raso: atinge apenas o lençol freático, mais vulnerável à contaminação. Para uso residencial, rural e industrial, recomendamos o poço tubular profundo com bombeamento elétrico ou solar, que é o mais seguro e abundante.",
  },
  {
    question: "É possível perfurar em qualquer tipo de terreno?",
    answer:
      "Sim, a Cristal Poços possui equipamentos para perfuração em todos os tipos de solo: sedimentar (argiloso, arenoso), rochoso (granito, basalto) e misto. Terrenos rochosos exigem perfuratrizes roto-pneumáticas de alta potência, que fazem parte da nossa frota. O único fator limitante é a presença de aquíferos na região, que verificamos através de estudo geofísico prévio gratuito.",
  },
  {
    question: "Como saber se há água potável no meu terreno?",
    answer:
      "Realizamos um estudo de viabilidade hidrológica gratuito antes de qualquer orçamento. Utilizamos técnicas de prospecção geofísica (resistividade elétrica e caminhamento elétrico) que mapeiam a presença e profundidade dos aquíferos com alta precisão. Essa análise evita perfurações em locais inadequados e reduz o risco de poços secos. Entre em contato para agendar a visita técnica.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f6f7f8] py-[64px] md:py-[96px]">
      <div className="max-w-[1280px] mx-auto px-[16px] md:px-[24px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-[48px] md:mb-[64px]"
        >
          <p className="font-['Inter:Bold',sans-serif] font-bold text-[12px] md:text-[14px] text-[#137fec] tracking-[2.8px] uppercase mb-[8px]">
            Dúvidas Frequentes
          </p>
          <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[28px] md:text-[36px] text-[#111418] tracking-[-0.7px] md:tracking-[-0.9px] mb-[8px]">
            Perguntas e Respostas
          </h2>
          <div className="bg-[#f97316] h-[4px] rounded-[9999px] w-[80px] mx-auto mb-[16px]" />
          <p className="font-['Inter:Medium',sans-serif] font-medium text-[14px] md:text-[16px] text-[#617589] max-w-[600px] mx-auto">
            Tire suas principais dúvidas sobre perfuração de poços artesianos
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="max-w-[900px] mx-auto space-y-[12px]">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`bg-white rounded-[16px] border overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "border-[#137fec] shadow-md"
                  : "border-[#e5e7eb] hover:border-[#137fec]/40"
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between gap-[16px] px-[24px] py-[20px] text-left"
              >
                <div className="flex items-center gap-[16px]">
                  <div
                    className={`size-[28px] rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                      openIndex === index
                        ? "bg-[#137fec]"
                        : "bg-[#f6f7f8]"
                    }`}
                  >
                    <span
                      className={`font-['Inter:Bold',sans-serif] font-bold text-[11px] ${
                        openIndex === index ? "text-white" : "text-[#617589]"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <span
                    className={`font-['Inter:Bold',sans-serif] font-bold text-[14px] md:text-[16px] transition-colors ${
                      openIndex === index ? "text-[#137fec]" : "text-[#111418]"
                    }`}
                  >
                    {faq.question}
                  </span>
                </div>
                <div
                  className={`flex-shrink-0 rounded-full size-[32px] flex items-center justify-center transition-colors ${
                    openIndex === index
                      ? "bg-[#137fec] text-white"
                      : "bg-[#f6f7f8] text-[#617589]"
                  }`}
                >
                  {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>

              {/* Answer */}
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ overflow: "hidden" }}
              >
                <div className="px-[24px] pb-[24px] pl-[68px]">
                  <p className="font-['Inter:Regular',sans-serif] text-[14px] md:text-[16px] text-[#4b5563] leading-[26px]">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-[48px]"
        >
          <p className="font-['Inter:Medium',sans-serif] text-[15px] text-[#617589] mb-[16px]">
            Não encontrou sua dúvida?
          </p>
          <a
            href="https://wa.me/5549999999999?text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20perfura%C3%A7%C3%A3o%20de%20po%C3%A7o%20artesiano."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[8px] bg-[#137fec] text-white font-['Inter:Bold',sans-serif] font-bold text-[15px] px-[24px] py-[12px] rounded-[10px] hover:bg-[#0c5fb8] transition-colors"
          >
            Fale com um Especialista
          </a>
        </motion.div>
      </div>
    </section>
  );
}
