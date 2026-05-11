import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { WaterCTACard, WHATSAPP_URL, WhatsAppIcon } from "../components/WaterCTACard";
import {
  MessageCircle,
  Wrench,
  Sun,
  Zap,
  Activity,
  Waves,
  Clock,
  Droplets,
  ShieldCheck,
  RefreshCw,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Award,
} from "lucide-react";
import { SEOHead } from "../components/SEOHead";
import fundoVideo from "../../assets/fundo-hero-cristal.mp4";
import triconePov from "../../assets/tricone-pov.png";
import pdcPov from "../../assets/pdc-pov.png";

// ── Ícones como imagens PNG reais das brocas ─────────────────────────────────
function TriconeBitIcon() {
  return <img src={triconePov} alt="Broca Tricone" width="72" height="72" className="object-contain" />;
}

function PDCBitIcon() {
  return <img src={pdcPov} alt="Broca PDC" width="72" height="72" className="object-contain" />;
}


const NAV_ITEMS = [
  { id: "perfuracao", label: "Perfuração" },
  { id: "instalacao", label: "Instalação" },
  { id: "manutencao", label: "Manutenção" },
  { id: "sustentabilidade", label: "Sustentabilidade" },
];

export function ServicosPage() {
  const [activeSection, setActiveSection] = useState("perfuracao");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="relative bg-white">
      <SEOHead
        title="Serviços | Cristal Poços Artesianos — Perfuração, Instalação, Manutenção"
        description="Perfuração, instalação, manutenção e licenciamento ambiental de poços artesianos com 27 anos de expertise. Atuamos em todo território nacional."
      />

      {/* Hero */}
      <section className="relative h-[380px] md:h-[420px] flex flex-col items-start justify-center overflow-clip">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none z-0">
          <video autoPlay loop muted playsInline className="absolute h-full w-full object-cover">
            <source src={fundoVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#0a0f1a] mix-blend-multiply opacity-80" />
        </div>
        <div className="relative max-w-[1280px] w-full mx-auto px-[20px] md:px-[24px] z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#137fec] inline-flex items-center justify-center px-[16px] py-[8px] rounded-[9999px] mb-[20px]"
          >
            <span className="font-['Inter:Bold',sans-serif] font-bold text-[13px] text-white tracking-[1.4px] uppercase">
              Soluções Completas
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-['Inter:Bold',sans-serif] font-bold text-[40px] md:text-[64px] text-white tracking-[-1px] md:tracking-[-1.5px] leading-[44px] md:leading-[68px] mb-[16px]"
          >
            Nossos Serviços
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-['Inter:Regular',sans-serif] font-normal text-[17px] md:text-[20px] text-[#d1d5db] leading-[26px] md:leading-[28px] max-w-[560px]"
          >
            +27 anos perfurando, instalando e mantendo poços artesianos em todo o Brasil com tecnologia, segurança e responsabilidade ambiental.
          </motion.p>
        </div>
      </section>

      {/* Sticky Anchor Nav */}
      <div className="sticky top-[78px] z-30 bg-white border-b border-[#e5e7eb] shadow-sm">
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[24px]">
          <div className="grid grid-cols-2 md:flex md:gap-0">
            {NAV_ITEMS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`w-full md:w-auto px-[8px] md:px-[28px] py-[12px] md:py-[16px] font-['Inter:Medium',sans-serif] font-medium text-[13px] md:text-[15px] border-b-[3px] transition-all ${
                  activeSection === id
                    ? "border-[#137fec] text-[#137fec]"
                    : "border-transparent text-[#617589] hover:text-[#111418]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ─── PERFURAÇÃO ─────────────────────────────────────────── */}
      <section id="perfuracao" className="py-[72px] md:py-[96px] bg-white scroll-mt-[132px]">
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[48px] lg:px-[80px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-[48px] md:mb-[64px]"
          >
            <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[32px] md:text-[44px] text-[#111418] tracking-[-0.7px] leading-[36px] md:leading-[48px] mb-[12px]">
              Perfuração
            </h2>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[16px] md:text-[18px] text-[#617589] leading-[26px] max-w-[680px]">
              Atuamos em todo território nacional com autonomia e tecnologia específica para cada região, garantindo o melhor resultado para cada tipo de terreno e aquífero.
            </p>
            <div className="bg-[#f97316] h-[4px] rounded-[9999px] w-[64px] mt-[20px]" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] md:gap-[32px]">

            {/* ── Região Sul — Tricone Bit ────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-[24px] overflow-hidden border border-[#bfdbfe] shadow-md hover:shadow-xl transition-all flex flex-col"
            >
              {/* Hero image */}
              <div className="relative h-[240px] overflow-hidden">
                <img
                  src={triconePov}
                  alt="Broca Tricone"
                  className="w-full h-full object-cover object-center scale-105"
                />
                {/* Gradient overlay bottom → blue */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d5fb8] via-[#0d6fd4]/40 to-transparent" />
                {/* Badges over image */}
                <div className="absolute top-[16px] left-[16px] right-[16px] flex items-center justify-between">
                  <span className="bg-black/50 backdrop-blur-sm text-white text-[11px] font-['Inter:Bold',sans-serif] font-bold tracking-[1.4px] uppercase px-[14px] py-[6px] rounded-[9999px]">
                    Região Sul e Sudoeste
                  </span>
                  <span className="bg-[#137fec] text-white text-[11px] font-['Inter:Bold',sans-serif] font-bold tracking-[1px] uppercase px-[12px] py-[6px] rounded-[9999px]">
                    Tricone Bit
                  </span>
                </div>
              </div>

              {/* Info section */}
              <div className="bg-gradient-to-br from-[#0d5fb8] to-[#137fec] px-[28px] pt-[24px] pb-[28px]">
                <h3 className="font-['Inter:Bold',sans-serif] font-bold text-[22px] md:text-[24px] text-white leading-[28px] mb-[8px]">
                  Sistema Roto Pneumático e Rotativo
                </h3>
                <p className="text-white/75 text-[14px] leading-[21px] mb-[20px]">
                  Broca de 3 cones rotativos com dentes de carboneto para romper formações cristalinas compactas
                </p>
                <span className="bg-white/15 border border-white/25 text-white text-[12px] font-['Inter:Medium',sans-serif] font-medium px-[12px] py-[5px] rounded-[9999px]">
                  Aquífero Guarani
                </span>
              </div>

              {/* Specs */}
              <div className="bg-white p-[24px] md:p-[28px] mt-auto">
                <div className="grid grid-cols-2 gap-[10px]">
                  {[
                    { label: "Profundidade", value: "Até 1.500 m" },
                    { label: "Diâmetros", value: '6½" a 24"' },
                    { label: "Sistema", value: "Roto pneumático" },
                    { label: "Região", value: "Sul e Sudoeste" },
                  ].map(({ label, value }) => (
                    <div key={label} className="bg-[#f6f7f8] rounded-[12px] px-[14px] py-[12px]">
                      <p className="text-[10px] font-['Inter:Medium',sans-serif] font-medium text-[#9ca3af] uppercase tracking-[0.8px] mb-[4px]">{label}</p>
                      <p className="text-[14px] font-['Inter:Bold',sans-serif] font-bold text-[#111418]">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* ── Centro-Oeste e Nordeste — PDC Bit ──────────────── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-[24px] overflow-hidden border border-[#fed7aa] shadow-md hover:shadow-xl transition-all flex flex-col"
            >
              {/* Hero image */}
              <div className="relative h-[240px] overflow-hidden">
                <img
                  src={pdcPov}
                  alt="Broca PDC"
                  className="w-full h-full object-cover object-center scale-105"
                />
                {/* Gradient overlay bottom → orange */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#c2500a] via-[#ea6c0a]/40 to-transparent" />
                {/* Badges over image */}
                <div className="absolute top-[16px] left-[16px] right-[16px] flex items-center justify-between">
                  <span className="bg-black/50 backdrop-blur-sm text-white text-[11px] font-['Inter:Bold',sans-serif] font-bold tracking-[1.4px] uppercase px-[14px] py-[6px] rounded-[9999px]">
                    Centro-Oeste e Nordeste
                  </span>
                  <span className="bg-[#f97316] text-white text-[11px] font-['Inter:Bold',sans-serif] font-bold tracking-[1px] uppercase px-[12px] py-[6px] rounded-[9999px]">
                    PDC Bit
                  </span>
                </div>
              </div>

              {/* Info section */}
              <div className="bg-gradient-to-br from-[#c2500a] to-[#f97316] px-[28px] pt-[24px] pb-[28px]">
                <h3 className="font-['Inter:Bold',sans-serif] font-bold text-[22px] md:text-[24px] text-white leading-[28px] mb-[8px]">
                  Sistema Rotativo com Fluídos
                </h3>
                <p className="text-white/75 text-[14px] leading-[21px] mb-[20px]">
                  Broca de diamante sintético (PDC) com lâminas em espiral e jatos de fluido para corte em formações sedimentares
                </p>
                <span className="bg-white/15 border border-white/25 text-white text-[12px] font-['Inter:Medium',sans-serif] font-medium px-[12px] py-[5px] rounded-[9999px]">
                  Alta Vazão / Irrigação
                </span>
              </div>

              {/* Specs */}
              <div className="bg-white p-[24px] md:p-[28px] mt-auto">
                <div className="grid grid-cols-2 gap-[10px]">
                  {[
                    { label: "Profundidade", value: "Até 1.200 m" },
                    { label: "Diâmetros", value: '12¾" a 32"' },
                    { label: "Sistema", value: "Rotativo fluídos" },
                    { label: "Região", value: "CO e Nordeste" },
                  ].map(({ label, value }) => (
                    <div key={label} className="bg-[#f6f7f8] rounded-[12px] px-[14px] py-[12px]">
                      <p className="text-[10px] font-['Inter:Medium',sans-serif] font-medium text-[#9ca3af] uppercase tracking-[0.8px] mb-[4px]">{label}</p>
                      <p className="text-[14px] font-['Inter:Bold',sans-serif] font-bold text-[#111418]">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── INSTALAÇÃO ─────────────────────────────────────────── */}
      <section id="instalacao" className="py-[72px] md:py-[96px] bg-[#f6f7f8] scroll-mt-[132px]">
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[48px] lg:px-[80px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-[48px] md:mb-[64px]"
          >
            <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[32px] md:text-[44px] text-[#111418] tracking-[-0.7px] leading-[36px] md:leading-[48px] mb-[12px]">
              Instalação
            </h2>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[16px] md:text-[18px] text-[#617589] leading-[26px] max-w-[680px]">
              Instalações completas com tecnologia de ponta para maximizar a eficiência, segurança e sustentabilidade do seu sistema de captação.
            </p>
            <div className="bg-[#f97316] h-[4px] rounded-[9999px] w-[64px] mt-[20px]" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[24px]">
            {[
              {
                icon: <Wrench size={24} className="text-[#137fec]" />,
                title: "Instalação Completa",
                description:
                  "Bomba submersa, coluna de recalque, cabos elétricos e painel de comando. Tudo instalado com precisão técnica e certificado.",
              },
              {
                icon: <Activity size={24} className="text-[#137fec]" />,
                title: "Sistema Paker",
                description:
                  "Direciona o fluxo de água dentro do poço, aumentando significativamente a eficiência e a vazão da captação.",
              },
              {
                icon: <Sun size={24} className="text-[#137fec]" />,
                title: "Bombeamento Solar",
                description:
                  "Energia limpa e economia real. Sistemas fotovoltaicos dedicados para bombeamento autônomo, sustentável e de baixo custo operacional.",
              },
              {
                icon: <Zap size={24} className="text-[#137fec]" />,
                title: "Automação de Poços",
                description:
                  "Monitore, controle e proteja seu sistema remotamente. Sensores e painéis inteligentes que otimizam o uso, reduzem desperdícios e geram relatórios de conformidade.",
              },
              {
                icon: <Activity size={24} className="text-[#137fec]" />,
                title: "Teste de Vazão",
                description:
                  "Medição precisa da capacidade de produção do poço para dimensionamento correto dos equipamentos e garantia de desempenho.",
              },
              {
                icon: <Waves size={24} className="text-[#137fec]" />,
                title: "Adutoras de Alta Vazão",
                description:
                  "Soluções completas para transporte eficiente de grandes volumes de água a partir de poços, rios, reservatórios e fontes superficiais.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white border border-[#e5e7eb] rounded-[16px] p-[28px] md:p-[32px] hover:shadow-lg transition-all"
              >
                <div className="bg-[rgba(19,127,236,0.08)] rounded-[12px] size-[52px] flex items-center justify-center mb-[18px]">
                  {item.icon}
                </div>
                <h3 className="font-['Inter:Bold',sans-serif] font-bold text-[17px] md:text-[18px] text-[#111418] mb-[8px]">
                  {item.title}
                </h3>
                <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] md:text-[15px] text-[#617589] leading-[22px]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MANUTENÇÃO ─────────────────────────────────────────── */}
      <section id="manutencao" className="py-[72px] md:py-[96px] bg-white scroll-mt-[132px]">
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[48px] lg:px-[80px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-[48px] md:mb-[64px]"
          >
            <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[32px] md:text-[44px] text-[#111418] tracking-[-0.7px] leading-[36px] md:leading-[48px] mb-[12px]">
              Manutenção
            </h2>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[16px] md:text-[18px] text-[#617589] leading-[26px] max-w-[680px]">
              Trabalhamos com manutenção preventiva e corretiva de forma integrada, garantindo que seu poço opere com máximo desempenho, segurança e durabilidade.
            </p>
            <div className="bg-[#f97316] h-[4px] rounded-[9999px] w-[64px] mt-[20px]" />
          </motion.div>

          {/* Quick Services */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[16px] md:gap-[20px] mb-[48px] md:mb-[64px]">
            {[
              { icon: <Clock size={20} className="text-[#137fec]" />, title: "Assistência 24h", desc: "Equipes de prontidão para emergências mecânicas ou elétricas." },
              { icon: <Droplets size={20} className="text-[#137fec]" />, title: "Limpeza e Desinfecção", desc: "Processos químicos e mecânicos para eliminar sedimentos e agentes biológicos." },
              { icon: <ShieldCheck size={20} className="text-[#137fec]" />, title: "Análise de Potabilidade", desc: "Monitoramento contínuo da qualidade da água conforme normas reguladoras." },
              { icon: <RefreshCw size={20} className="text-[#137fec]" />, title: "Recuperação de Poços", desc: "Reforma e reativação de poços antigos ou abandonados com tecnologia de revestimento." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-[#f6f7f8] rounded-[14px] p-[20px] md:p-[24px]"
              >
                <div className="bg-white rounded-[10px] size-[40px] flex items-center justify-center mb-[12px] shadow-sm">
                  {item.icon}
                </div>
                <h4 className="font-['Inter:Bold',sans-serif] font-bold text-[13px] md:text-[14px] text-[#111418] mb-[6px] leading-[18px]">
                  {item.title}
                </h4>
                <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] md:text-[13px] text-[#617589] leading-[18px]">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Corretiva + Preventiva */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] md:gap-[32px]">
            {/* Corretiva */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#fff7ed] border border-[#fed7aa] rounded-[20px] p-[32px] md:p-[40px]"
            >
              <div className="flex items-center gap-[12px] mb-[20px]">
                <div className="bg-[#f97316]/10 border border-[#f97316]/20 rounded-[10px] size-[44px] flex items-center justify-center">
                  <AlertTriangle size={20} className="text-[#f97316]" />
                </div>
                <div>
                  <p className="font-['Inter:Bold',sans-serif] font-bold text-[11px] text-[#f97316] tracking-[1.4px] uppercase">Intervenção Imediata</p>
                  <h3 className="font-['Inter:Bold',sans-serif] font-bold text-[18px] md:text-[20px] text-[#111418]">
                    Manutenção Corretiva
                  </h3>
                </div>
              </div>
              <p className="text-[14px] text-[#4b5563] leading-[22px] mb-[24px]">
                Realizada quando o poço apresenta falhas ou queda de desempenho, exigindo intervenção técnica imediata.
              </p>
              <div className="space-y-[20px]">
                <div>
                  <p className="font-['Inter:Medium',sans-serif] font-medium text-[12px] text-[#9a7340] uppercase tracking-[1px] mb-[10px]">Problemas atendidos</p>
                  <ul className="space-y-[6px]">
                    {["Redução ou perda de vazão", "Queima ou falha da bomba submersa", "Entrada de areia ou sedimentos", "Problemas elétricos", "Obstruções e incrustações"].map((item) => (
                      <li key={item} className="flex items-center gap-[8px]">
                        <div className="bg-[#f97316] rounded-full size-[5px] shrink-0" />
                        <span className="text-[13px] text-[#4b5563]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-['Inter:Medium',sans-serif] font-medium text-[12px] text-[#9a7340] uppercase tracking-[1px] mb-[10px]">Serviços executados</p>
                  <ul className="space-y-[6px]">
                    {["Retirada e reinstalação de equipamentos", "Substituição de bomba e componentes", "Limpeza e desobstrução do poço", "Testes de vazão e desempenho", "Diagnóstico técnico completo"].map((item) => (
                      <li key={item} className="flex items-center gap-[8px]">
                        <CheckCircle2 size={13} className="text-[#f97316] shrink-0" />
                        <span className="text-[13px] text-[#4b5563]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Preventiva */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-[20px] p-[32px] md:p-[40px]"
            >
              <div className="flex items-center gap-[12px] mb-[20px]">
                <div className="bg-[#16a34a]/10 border border-[#16a34a]/20 rounded-[10px] size-[44px] flex items-center justify-center">
                  <ShieldCheck size={20} className="text-[#16a34a]" />
                </div>
                <div>
                  <p className="font-['Inter:Bold',sans-serif] font-bold text-[11px] text-[#16a34a] tracking-[1.4px] uppercase">Planejada e Periódica</p>
                  <h3 className="font-['Inter:Bold',sans-serif] font-bold text-[18px] md:text-[20px] text-[#111418]">
                    Manutenção Preventiva
                  </h3>
                </div>
              </div>
              <p className="text-[14px] text-[#4b5563] leading-[22px] mb-[24px]">
                Essencial para garantir o desempenho contínuo, a qualidade da água e a vida útil do poço artesiano.
              </p>
              <div className="space-y-[20px]">
                <div>
                  <p className="font-['Inter:Medium',sans-serif] font-medium text-[12px] text-[#2d6a4a] uppercase tracking-[1px] mb-[10px]">O que fazemos</p>
                  <ul className="space-y-[6px]">
                    {["Inspeção geral do sistema (bomba, cabos e conexões)", "Verificação de vazão e níveis do poço", "Análise do funcionamento elétrico", "Limpeza preventiva da coluna e equipamentos", "Avaliação de desgaste dos componentes"].map((item) => (
                      <li key={item} className="flex items-center gap-[8px]">
                        <div className="bg-[#16a34a] rounded-full size-[5px] shrink-0" />
                        <span className="text-[13px] text-[#4b5563]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-['Inter:Medium',sans-serif] font-medium text-[12px] text-[#2d6a4a] uppercase tracking-[1px] mb-[10px]">Benefícios</p>
                  <ul className="space-y-[6px]">
                    {["Maior vida útil dos equipamentos", "Redução de custos com emergências", "Operação contínua sem interrupções", "Qualidade da água garantida", "Conformidade com normas reguladoras"].map((item) => (
                      <li key={item} className="flex items-center gap-[8px]">
                        <CheckCircle2 size={13} className="text-[#16a34a] shrink-0" />
                        <span className="text-[13px] text-[#4b5563]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── SUSTENTABILIDADE ───────────────────────────────────── */}
      <section id="sustentabilidade" className="py-[72px] md:py-[96px] bg-[#f6f7f8] scroll-mt-[132px]">
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[48px] lg:px-[80px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-[48px] md:mb-[64px]"
          >
            <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[32px] md:text-[44px] text-[#111418] tracking-[-0.7px] leading-[36px] md:leading-[48px] mb-[12px]">
              Sustentabilidade
            </h2>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[16px] md:text-[18px] text-[#617589] leading-[26px] max-w-[720px]">
              A gestão de recursos hídricos é fundamental para garantir o uso sustentável, legal e eficiente da água de poços artesianos — evitando desperdícios, sanções legais e perda de desempenho do sistema.
            </p>
            <div className="bg-[#f97316] h-[4px] rounded-[9999px] w-[64px] mt-[20px]" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] md:gap-[32px]">
            {/* LAP */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-[20px] border border-[#e5e7eb] overflow-hidden"
            >
              <div className="bg-gradient-to-r from-[#137fec] to-[#0d6fd4] p-[28px] md:p-[32px]">
                <div className="flex items-center gap-[12px] mb-[12px]">
                  <div className="bg-[rgba(255,255,255,0.15)] rounded-[10px] size-[44px] flex items-center justify-center">
                    <FileText size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-['Inter:Bold',sans-serif] font-bold text-[11px] text-[#bfdbfe] tracking-[1.4px] uppercase">Etapa Inicial Obrigatória</p>
                    <h3 className="font-['Inter:Bold',sans-serif] font-bold text-[20px] md:text-[22px] text-white">
                      Licença Ambiental Prévia (LAP)
                    </h3>
                  </div>
                </div>
                <p className="text-[14px] text-[#dbeafe] leading-[22px]">
                  Emitida pelos órgãos ambientais estaduais (SEMAD, SEMA, IMA), garante a viabilidade do projeto com foco em sustentabilidade antes da obra começar.
                </p>
              </div>
              <div className="p-[28px] md:p-[32px]">
                <p className="font-['Inter:Medium',sans-serif] font-medium text-[12px] text-[#6b7280] uppercase tracking-[1px] mb-[12px]">O que está incluso</p>
                <ul className="space-y-[8px] mb-[24px]">
                  {["Levantamento de informações técnicas do local", "Análise de viabilidade ambiental", "Elaboração de documentação e projetos", "Protocolo junto aos órgãos competentes", "Solicitação de autorização para perfuração"].map((item) => (
                    <li key={item} className="flex items-start gap-[8px]">
                      <CheckCircle2 size={14} className="text-[#137fec] mt-[3px] shrink-0" />
                      <span className="text-[14px] text-[#4b5563] leading-[20px]">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-[#f6f7f8] rounded-[14px] p-[20px]">
                  <p className="font-['Inter:Bold',sans-serif] font-bold text-[13px] text-[#111418] mb-[12px]">Por que contratar a Cristal Poços?</p>
                  <ul className="space-y-[10px]">
                    {[
                      { title: "Expertise geológica comprovada", desc: "Dados do SIAGAS/CPRM para embasar o estudo hidrogeológico" },
                      { title: "Processo ágil", desc: "Documentação concluída em 15–30 dias, com aprovação rápida" },
                      { title: "Economia real", desc: "Evite custos 10× maiores com retrabalho ou multas" },
                    ].map(({ title, desc }) => (
                      <li key={title} className="flex items-start gap-[10px]">
                        <div className="bg-[#137fec] rounded-full size-[6px] mt-[7px] shrink-0" />
                        <span className="text-[13px] text-[#4b5563] leading-[20px]">
                          <span className="font-['Inter:Medium',sans-serif] font-medium text-[#111418]">{title}:</span>{" "}{desc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Outorga */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-[20px] border border-[#e5e7eb] overflow-hidden"
            >
              <div className="bg-gradient-to-r from-[#1c7c4a] to-[#15a35a] p-[28px] md:p-[32px]">
                <div className="flex items-center gap-[12px] mb-[12px]">
                  <div className="bg-[rgba(255,255,255,0.15)] rounded-[10px] size-[44px] flex items-center justify-center">
                    <Award size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-['Inter:Bold',sans-serif] font-bold text-[11px] text-[#a7f3d0] tracking-[1.4px] uppercase">Legalização Definitiva</p>
                    <h3 className="font-['Inter:Bold',sans-serif] font-bold text-[20px] md:text-[22px] text-white">
                      Outorga de Uso da Água
                    </h3>
                  </div>
                </div>
                <p className="text-[14px] text-[#d1fae5] leading-[22px]">
                  Emitida pela ANA ou agências estaduais, legaliza o uso definitivo da água subterrânea após a perfuração, garantindo sua captação por décadas.
                </p>
              </div>
              <div className="p-[28px] md:p-[32px]">
                <p className="font-['Inter:Medium',sans-serif] font-medium text-[12px] text-[#6b7280] uppercase tracking-[1px] mb-[12px]">O que está incluso</p>
                <ul className="space-y-[8px] mb-[24px]">
                  {["Levantamento de dados técnicos do poço", "Elaboração de relatórios e documentação completa", "Perfis litológicos, análise de água e modelagem hidrogeológica", "Protocolo junto ao órgão ambiental", "Regularização de poços novos e existentes", "Monitoramento inicial até conclusão do órgão competente"].map((item) => (
                    <li key={item} className="flex items-start gap-[8px]">
                      <CheckCircle2 size={14} className="text-[#1c7c4a] mt-[3px] shrink-0" />
                      <span className="text-[14px] text-[#4b5563] leading-[20px]">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-[14px] p-[20px]">
                  <p className="font-['Inter:Bold',sans-serif] font-bold text-[13px] text-[#111418] mb-[12px]">Vantagens exclusivas Cristal Poços</p>
                  <ul className="space-y-[10px]">
                    {[
                      { title: "Pacote integrado", desc: "Projeto, instalações, monitoramento e desconto em renovação futura" },
                      { title: "Documentação completa", desc: "Relatórios técnicos com máxima eficiência e agilidade" },
                      { title: "Água garantida por décadas", desc: "Seu poço como ativo legal e produtivo, sem interrupções" },
                    ].map(({ title, desc }) => (
                      <li key={title} className="flex items-start gap-[10px]">
                        <div className="bg-[#1c7c4a] rounded-full size-[6px] mt-[7px] shrink-0" />
                        <span className="text-[13px] text-[#4b5563] leading-[20px]">
                          <span className="font-['Inter:Medium',sans-serif] font-medium text-[#111418]">{title}:</span>{" "}{desc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────── */}
      <section className="py-[64px] md:py-[96px]">
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[24px]">
          <WaterCTACard>
            <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[28px] md:text-[48px] text-white tracking-[-0.7px] md:tracking-[-1.2px] leading-[32px] md:leading-[48px] mb-[24px] md:mb-[32px]">
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
