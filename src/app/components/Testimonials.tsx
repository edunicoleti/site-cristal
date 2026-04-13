import { useRef, useCallback, useEffect, useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const testimonials = [
  {
    name: "João Carlos Mendonça",
    role: "Produtor Rural",
    location: "Chapecó - SC",
    text: "Após 3 anos tentando resolver o problema de água na fazenda com cisternas, a Cristal Poços perfurou em menos de uma semana. Hoje temos água em abundância durante todo o ano, sem interrupções.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1595956481935-a9e254951d49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
    project: "Poço Artesiano — 280m de profundidade",
  },
  {
    name: "Fabiana Torres",
    role: "Gestora Industrial",
    location: "Cascavel - PR",
    text: "O suporte técnico é impecável. A equipe acompanhou todo o processo de licenciamento e entregou o projeto rigorosamente no prazo. Profissionalismo de nível nacional, difícil de encontrar.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1765005204058-10418f5123c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
    project: "Sistema Hidráulico Industrial",
  },
  {
    name: "Rodrigo Almeida",
    role: "Produtor Rural",
    location: "Balsas - MA",
    text: "Economizamos R$ 8.000 por mês em caminhões-pipa. O investimento no poço artesiano se pagou em menos de 4 meses. Recomendo a Cristal Poços para qualquer propriedade que enfrenta falta d'água.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1520296337137-1f4843838f3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
    project: "Poço Artesiano — 320m de profundidade",
  },
  {
    name: "Carla Medeiros",
    role: "Diretora de Operações",
    location: "Florianópolis - SC",
    text: "Resolvemos o problema de desabastecimento do condomínio em 10 dias. A transparência no orçamento, sem custos ocultos, e a agilidade na execução foram os diferenciais que nos fizeram escolher a Cristal.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1675186914580-94356f7c012c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
    project: "Condomínio Residencial — 180m de profundidade",
  },
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

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
          <p className="font-['Inter:Bold',sans-serif] font-bold text-[12px] md:text-[14px] text-[#137fec] tracking-[2.8px] uppercase mb-[8px]"
          >
            Quem Confia na Cristal
          </p>
          <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[28px] md:text-[36px] text-[#111418] tracking-[-0.7px] md:tracking-[-0.9px] mb-[8px]">
            O que nossos clientes dizem
          </h2>
          <div className="bg-[#f97316] h-[4px] rounded-[9999px] w-[80px] mx-auto" />
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-[24px]">
              {testimonials.map((t, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] min-w-0"
                >
                  <div className="bg-white rounded-[20px] p-[32px] border border-[#dbe0e6] h-full flex flex-col hover:shadow-lg transition-shadow">
                    {/* Quote icon */}
                    <div className="bg-[rgba(19,127,236,0.08)] rounded-[12px] size-[44px] flex items-center justify-center mb-[20px] flex-shrink-0">
                      <Quote size={20} className="text-[#137fec]" />
                    </div>

                    {/* Stars */}
                    <div className="flex gap-[4px] mb-[16px]">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="text-[#f97316] fill-[#f97316]"
                        />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="font-['Inter:Regular',sans-serif] text-[15px] text-[#4b5563] leading-[26px] flex-1 mb-[24px]">
                      "{t.text}"
                    </p>

                    {/* Project badge */}
                    <div className="bg-[#f6f7f8] rounded-[8px] px-[12px] py-[6px] mb-[20px] w-fit">
                      <span className="font-['Inter:Bold',sans-serif] font-bold text-[11px] text-[#617589] uppercase tracking-wide">
                        {t.project}
                      </span>
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-[12px]">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="rounded-full size-[48px] object-cover border-2 border-[#e5e7eb]"
                      />
                      <div>
                        <p className="font-['Inter:Bold',sans-serif] font-bold text-[15px] text-[#111418]">
                          {t.name}
                        </p>
                        <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#617589]">
                          {t.role} · {t.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-[16px] mt-[32px]">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollPrev}
              className="bg-white border border-[#dbe0e6] rounded-full size-[44px] flex items-center justify-center hover:border-[#137fec] hover:text-[#137fec] transition-colors shadow-sm"
            >
              <ChevronLeft size={20} />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-[8px]">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={`rounded-full transition-all ${
                    i === selectedIndex
                      ? "bg-[#137fec] w-[24px] h-[8px]"
                      : "bg-[#dbe0e6] size-[8px]"
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollNext}
              className="bg-white border border-[#dbe0e6] rounded-full size-[44px] flex items-center justify-center hover:border-[#137fec] hover:text-[#137fec] transition-colors shadow-sm"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}