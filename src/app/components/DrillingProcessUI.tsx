import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { Droplets, Settings, ShieldCheck, Waves, ArrowDownCircle } from "lucide-react";

// --- Types & Constants ---
type DrillingStep = {
    id: number;
    title: string;
    description: string;
    icon: React.ElementType;
};

const DRILLING_STEPS: DrillingStep[] = [
    {
        id: 1,
        title: "Análise e Locação",
        description: "Mapeamento hidrogeológico do terreno para encontrar o ponto com maior potencial hídrico.",
        icon: ArrowDownCircle,
    },
    {
        id: 2,
        title: "Perfuração Especializada",
        description: "Nossas sondas perfuram através do solo e rocha sólida com máxima eficiência técnica.",
        icon: Settings,
    },
    {
        id: 3,
        title: "Revestimento e Filtros",
        description: "Instalação de tubulações geomecânicas e filtros para impedir desmoronamentos.",
        icon: ShieldCheck,
    },
    {
        id: 4,
        title: "Pré-Filtro e Selagem",
        description: "Aplicação de pré-filtro e selagem para evitar contaminação superficial da água.",
        icon: Waves,
    },
    {
        id: 5,
        title: "Água Cristalina",
        description: "Instalação do equipamento de bombeamento. Sua fonte própria de água está pronta!",
        icon: Droplets,
    },
];

// --- Subcomponents (SVGs) ---
// We will build the SVG visual parts here linked to the current step.

const DrillingSimulation = ({ currentStep }: { currentStep: number }) => {
    // Configurações de deslocamento vertical da "câmera" do SVG baseado no passo
    const getCameraOffset = () => {
        switch (currentStep) {
            case 1: return 0;     // Superfície
            case 2: return -300;  // Perfurando rocha
            case 3: return -500;  // Revestimento na rocha profunda
            case 4: return -650;  // Filtros e pré-filtro
            case 5: return -800;  // Aquífero (fundo)
            default: return 0;
        }
    };

    return (
        <div className="relative w-full h-[500px] md:h-[600px] bg-gradient-to-b from-[#87CEEB] to-[#e0f2fe] rounded-[24px] overflow-hidden border border-slate-200 shadow-inner">
            <motion.div
                className="absolute top-0 left-0 w-full"
                animate={{ y: getCameraOffset() }}
                transition={{ type: "spring", damping: 25, stiffness: 120 }}
            >
                <svg
                    viewBox="0 0 800 1400"
                    className="w-full h-auto drop-shadow-md"
                    preserveAspectRatio="xMidYMin slice"
                >
                    {/* DEFINITIONS */}
                    <defs>
                        <linearGradient id="soil" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#8B5A2B" />
                            <stop offset="100%" stopColor="#5C4033" />
                        </linearGradient>
                        <linearGradient id="rock" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#696969" />
                            <stop offset="100%" stopColor="#2F4F4F" />
                        </linearGradient>
                        <linearGradient id="aquifer" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#0ea5e9" />
                            <stop offset="100%" stopColor="#0284c7" />
                        </linearGradient>
                        <pattern id="soilTexture" width="40" height="40" patternUnits="userSpaceOnUse">
                            <circle cx="10" cy="10" r="1.5" fill="#3e2723" opacity="0.4" />
                            <circle cx="30" cy="25" r="1" fill="#3e2723" opacity="0.2" />
                        </pattern>
                    </defs>

                    {/* BACKGROUND LAYERS */}
                    {/* Camada 1: Grama (Y: 200 a 220) */}
                    <rect x="0" y="200" width="800" height="20" fill="#4ade80" />

                    {/* Camada 2: Solo/Terra (Y: 220 a 500) */}
                    <rect x="0" y="220" width="800" height="280" fill="url(#soil)" />
                    <rect x="0" y="220" width="800" height="280" fill="url(#soilTexture)" />

                    {/* Camada 3: Rocha (Y: 500 a 1000) */}
                    <rect x="0" y="500" width="800" height="500" fill="url(#rock)" />
                    {/* Fissuras decorativas na rocha */}
                    <path d="M 200 600 Q 250 620 220 680" stroke="#4a4a4a" strokeWidth="4" fill="transparent" />
                    <path d="M 600 750 Q 550 780 580 850" stroke="#4a4a4a" strokeWidth="4" fill="transparent" />

                    {/* Camada 4: Aquífero (Y: 1000 a 1400) */}
                    <rect x="0" y="1000" width="800" height="400" fill="url(#aquifer)" />
                    {/* Ondas e Fluxos do Aquífero */}
                    <g opacity="0.3">
                        <path d="M 0 1100 Q 200 1050 400 1100 T 800 1100" stroke="#bae6fd" strokeWidth="10" fill="transparent" />
                        <path d="M 0 1250 Q 200 1300 400 1250 T 800 1250" stroke="#bae6fd" strokeWidth="8" fill="transparent" />
                    </g>

                    {/* O FURO (Hole) central - Fica visível a partir do passo 2 */}
                    <motion.rect
                        x="360"
                        y="200"
                        width="80"
                        fill="#1a1a1a"
                        initial={{ height: 0 }}
                        animate={{
                            height: currentStep >= 2 ? 1100 : 0
                        }}
                        transition={{ duration: currentStep === 2 ? 3 : 0.5, ease: "linear" }}
                    />

                    {/* REVESTIMENTO (Pipes) - Fica visível a partir do passo 3 */}
                    <motion.rect
                        x="365"
                        y="180"
                        width="70"
                        fill="#94a3b8" /* PVC Cinza/Aço */
                        stroke="#64748b"
                        strokeWidth="2"
                        initial={{ height: 0 }}
                        animate={{
                            height: currentStep >= 3 ? 1080 : 0
                        }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                    {/* Sessões do tubo (Juntas) */}
                    {Array.from({ length: 10 }).map((_, i) => (
                        <motion.line
                            key={`joint-${i}`}
                            x1="362"
                            y1={280 + i * 100}
                            x2="438"
                            y2={280 + i * 100}
                            stroke="#475569"
                            strokeWidth="4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: currentStep >= 3 ? 1 : 0 }}
                            transition={{ delay: currentStep === 3 ? i * 0.15 : 0 }}
                        />
                    ))}

                    {/* PRÉ-FILTRO (Cascalho ao redor do cano) e CIMENTAÇÃO - Passo 4 */}
                    <motion.g
                        initial={{ opacity: 0 }}
                        animate={{ opacity: currentStep >= 4 ? 1 : 0 }}
                        transition={{ duration: 1 }}
                    >
                        {/* Cimentação no topo (Y: 200 a 250) */}
                        <rect x="360" y="200" width="80" height="50" fill="#cbd5e1" />

                        {/* Cascalho (Y: 250 a 1100) */}
                        {Array.from({ length: 15 }).map((_, i) => (
                            <React.Fragment key={`gravel-${i}`}>
                                <circle cx="363" cy={280 + i * 50} r="2" fill="#d4d4d8" />
                                <circle cx="437" cy={300 + i * 50} r="2" fill="#d4d4d8" />
                                <circle cx="362" cy={305 + i * 50} r="1.5" fill="#a1a1aa" />
                            </React.Fragment>
                        ))}

                        {/* Ranhuras do Filtro do tubo no aquífero (Y: 1050 a 1250) */}
                        {Array.from({ length: 8 }).map((_, i) => (
                            <line
                                key={`filter-${i}`}
                                x1="375"
                                y1={1050 + i * 25}
                                x2="425"
                                y2={1050 + i * 25}
                                stroke="#334155"
                                strokeWidth="2"
                                strokeDasharray="4 4"
                            />
                        ))}
                    </motion.g>

                    {/* BOMBA SUBMERSA E ÁGUA JORRANDO - Passo 5 */}
                    <motion.g
                        initial={{ opacity: 0, y: 1300 }}
                        animate={{
                            opacity: currentStep === 5 ? 1 : 0,
                            y: currentStep === 5 ? 1200 : 1300
                        }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        {/* Bomba Caneta */}
                        <rect x="380" y="0" width="40" height="80" rx="10" fill="#cbd5e1" stroke="#334155" strokeWidth="2" />
                        <path d="M 390 10 L 410 10 M 390 30 L 410 30 M 390 50 L 410 50" stroke="#64748b" strokeWidth="2" />
                        {/* Cabo de energia */}
                        <path d="M 385 0 L 385 -1050" stroke="#fcd34d" strokeWidth="3" strokeDasharray="10 5" />
                        {/* Mangueira de recalque */}
                        <path d="M 400 0 L 400 -1050" stroke="#137fec" strokeWidth="12" />
                    </motion.g>

                    {/* PARTÍCULAS DE ÁGUA SUBINDO (Step 5) */}
                    <AnimatePresence>
                        {currentStep === 5 && (
                            <motion.g>
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <motion.circle
                                        key={`water-${i}`}
                                        cx={395 + Math.random() * 10}
                                        initial={{ cy: 1100, opacity: 0 }}
                                        animate={{ cy: 200, opacity: [0, 1, 1, 0] }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            delay: i * 0.3,
                                            ease: "linear"
                                        }}
                                        r="4"
                                        fill="#ffffff"
                                    />
                                ))}

                                {/* Geyser/Jorro d'água na superfície */}
                                <motion.path
                                    d="M 400 200 Q 350 100 400 150 Q 450 100 400 200"
                                    fill="#3b82f6"
                                    initial={{ scaleY: 0, opacity: 0 }}
                                    animate={{ scaleY: [0, 1.2, 0.8, 1], opacity: 0.8 }}
                                    transition={{ delay: 1, duration: 0.5 }}
                                    style={{ transformOrigin: "400px 200px" }}
                                />
                            </motion.g>
                        )}
                    </AnimatePresence>

                    {/* SONDA PERFURATRIZ (Máquina na superfície) */}
                    {/* Esconde a máquina a partir do passo 3 (quando entra o tubo limpo) */}
                    <motion.g
                        initial={{ opacity: 1, x: -100 }}
                        animate={{
                            opacity: currentStep < 3 ? 1 : 0,
                            x: currentStep === 1 ? -100 : 0
                        }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Caminhão / Base */}
                        <rect x="250" y="140" width="160" height="60" rx="8" fill="#f97316" />

                        {/* Texto no Caminhão */}
                        <text x="260" y="175" fill="#ffffff" fontSize="16" fontWeight="bold" fontFamily="Inter, sans-serif">
                            Cristal Poços
                        </text>

                        <circle cx="280" cy="200" r="15" fill="#1f2937" />
                        <circle cx="370" cy="200" r="15" fill="#1f2937" />
                        {/* Cabine */}
                        <rect x="230" y="110" width="50" height="50" rx="5" fill="#cbd5e1" />
                        <rect x="235" y="115" width="20" height="25" rx="3" fill="#64748b" />
                        {/* Torre de perfuração */}
                        <rect x="380" y="40" width="20" height="150" fill="#f97316" />
                        {/* Motor rotativo */}
                        <motion.rect
                            animate={{ y: currentStep === 2 ? [0, 60, 0] : 0 }}
                            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                            x="370" y="40" width="40" height="30" fill="#334155"
                        />
                    </motion.g>

                    {/* ASTE DE PERFURAÇÃO (Broca) - Só existe no passo 2 */}
                    <motion.g
                        initial={{ opacity: 0 }}
                        animate={{ opacity: currentStep === 2 ? 1 : 0 }}
                    >
                        {/* Aste descendo */}
                        <motion.rect
                            x="395"
                            y="180"
                            width="10"
                            fill="#cbd5e1"
                            initial={{ height: 0 }}
                            animate={{ height: currentStep === 2 ? 1000 : 0 }}
                            transition={{ duration: 3, ease: "linear" }}
                        />
                        {/* CABEÇA DA BROCA (giratória) acompanhando o final da haste */}
                        <motion.g
                            initial={{ y: 180 }}
                            animate={{ y: currentStep === 2 ? 1180 : 180 }}
                            transition={{ duration: 3, ease: "linear" }}
                        >
                            <motion.polygon
                                points="390,0 410,0 400,20"
                                fill="#facc15"
                                animate={{ rotateY: [0, 180, 360] }}
                                transition={{ repeat: Infinity, duration: 0.2, ease: "linear" }}
                                style={{ transformOrigin: "400px 10px" }}
                            />
                        </motion.g>
                    </motion.g>

                    {/* RADAR / ONDAS (Apenas Passo 1) */}
                    <AnimatePresence>
                        {currentStep === 1 && (
                            <motion.g
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                {Array.from({ length: 4 }).map((_, i) => (
                                    <motion.path
                                        key={`radar-${i}`}
                                        d="M 350 250 Q 400 300 450 250"
                                        stroke="#3b82f6"
                                        strokeWidth="4"
                                        fill="transparent"
                                        initial={{ y: 0, opacity: 1, scale: 0.8 }}
                                        animate={{ y: 200 + (i * 50), opacity: 0, scale: 1.5 }}
                                        transition={{ repeat: Infinity, duration: 2, delay: i * 0.5 }}
                                        style={{ transformOrigin: "400px 250px" }}
                                    />
                                ))}
                            </motion.g>
                        )}
                    </AnimatePresence>

                </svg>
            </motion.div>

            {/* HUD Extra: Profundidade Virtual */}
            <div className="absolute left-[16px] bottom-[16px] bg-white/90 backdrop-blur box-border border border-slate-200 px-[12px] py-[6px] rounded-lg shadow-sm flex items-center gap-[8px]">
                <div className="w-[8px] h-[8px] bg-red-500 rounded-full animate-pulse" />
                <span className="font-['Inter',sans-serif] text-[12px] font-bold text-slate-700">
                    {currentStep === 1 ? "0m - Superfície" :
                        currentStep === 2 ? "150m - Perfuração" :
                            currentStep === 3 ? "200m - Revestimento" :
                                currentStep === 4 ? "200m - Selagem" :
                                    "250m - Aquífero Atingido"}
                </span>
            </div>
        </div>
    );
};

// --- Main Component ---
export function DrillingProcessUI() {
    const [activeStep, setActiveStep] = useState(1);
    const containerRef = useRef<HTMLDivElement>(null);

    // Scroll tracking logic
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // Divide the scroll progress (0 to 1) into 5 segments
        if (latest < 0.2) setActiveStep(1);
        else if (latest < 0.4) setActiveStep(2);
        else if (latest < 0.6) setActiveStep(3);
        else if (latest < 0.8) setActiveStep(4);
        else setActiveStep(5);
    });

    return (
        <section ref={containerRef} className="relative bg-white w-full h-[300vh]">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                {/* Background decorations */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#137fec]/[0.02] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#ea580c]/[0.02] rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

                <div className="max-w-[1280px] mx-auto px-[16px] md:px-[24px] relative z-10 w-full py-[60px] md:py-[80px]">
                    {/* Section Header */}
                    <div className="text-center max-w-2xl mx-auto mb-[64px]">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-[8px] px-[12px] py-[6px] rounded-full bg-[#137fec]/10 border border-[#137fec]/20 mb-[16px]"
                        >
                            <Settings size={14} className="text-[#137fec]" />
                            <span className="font-['Inter',sans-serif] text-[12px] font-bold text-[#137fec] uppercase tracking-[1px]">
                                Engenharia Completa
                            </span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="font-['Outfit',sans-serif] text-[36px] md:text-[48px] font-extrabold text-[#0f172a] leading-tight mb-[16px]"
                        >
                            A Jornada até a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#137fec] to-[#3b82f6]">Água Pura</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="font-['Inter',sans-serif] text-[#64748b] text-[16px] md:text-[18px] leading-relaxed"
                        >
                            Entenda como transformamos conhecimento geológico e tecnologia em uma fonte segura e cristalina para o seu negócio ou residência.
                        </motion.p>
                    </div>

                    {/* Main Interactive Interactive Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-[48px] items-center">

                        {/* Left Side: Steps Navigation */}
                        <div className="lg:col-span-5 flex flex-col gap-[16px]">
                            {DRILLING_STEPS.map((step, index) => {
                                const isActive = activeStep === step.id;
                                const isPast = activeStep > step.id;

                                return (
                                    <button
                                        key={step.id}
                                        onClick={() => setActiveStep(step.id)}
                                        className={`relative text-left w-full rounded-[20px] p-[24px] transition-all duration-300 border ${isActive
                                            ? "bg-white border-[#137fec]/20 shadow-[0_12px_40px_-12px_rgba(19,127,236,0.15)]"
                                            : "bg-transparent border-transparent hover:bg-slate-50"
                                            }`}
                                    >
                                        <div className="flex items-start gap-[16px]">
                                            <div
                                                className={`w-[48px] h-[48px] rounded-[14px] flex items-center justify-center shrink-0 transition-all duration-500 ${isActive
                                                    ? "bg-gradient-to-br from-[#137fec] to-[#3b82f6] text-white shadow-lg shadow-blue-500/30"
                                                    : isPast
                                                        ? "bg-slate-800 text-white"
                                                        : "bg-slate-100 text-slate-400"
                                                    }`}
                                            >
                                                <step.icon size={22} />
                                            </div>
                                            <div>
                                                <h3
                                                    className={`font-['Inter',sans-serif] text-[18px] mb-[6px] transition-colors duration-300 ${isActive ? "font-bold text-[#0f172a]" : "font-semibold text-slate-500"
                                                        }`}
                                                >
                                                    {step.title}
                                                </h3>
                                                <AnimatePresence>
                                                    {isActive && (
                                                        <motion.div
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: "auto" }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            transition={{ duration: 0.3 }}
                                                        >
                                                            <p className="font-['Inter',sans-serif] text-[14px] text-slate-500 leading-relaxed mt-[4px]">
                                                                {step.description}
                                                            </p>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

                        <div className="lg:col-span-7">
                            <DrillingSimulation currentStep={activeStep} />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
