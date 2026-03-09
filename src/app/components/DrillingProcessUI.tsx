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
        <div className="relative w-full h-[380px] md:h-[600px] bg-gradient-to-b from-[#87CEEB] to-[#e0f2fe] rounded-[24px] md:rounded-[32px] overflow-hidden border border-slate-200 shadow-inner">
            <motion.div
                className="absolute top-0 left-0 w-full h-full"
            >
                <svg
                    viewBox="0 0 800 1400"
                    className="w-full h-full drop-shadow-md object-cover md:object-fill"
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

                    {/* CAMERA GROUP - Movimento interno do SVG para consertar bug no mobile */}
                    <motion.g
                        animate={{ y: getCameraOffset() }}
                        transition={{ type: "spring", damping: 25, stiffness: 120 }}
                    >

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
                            {/* Chassi Base */}
                            <rect x="180" y="180" width="250" height="20" rx="4" fill="#334155" />
                            {/* Para-choque dianteiro */}
                            <rect x="175" y="182" width="10" height="15" rx="3" fill="#1e293b" />

                            {/* Cabine Caminhão (Virada para a esquerda) */}
                            <path d="M 250 120 L 220 120 L 190 160 L 190 180 L 250 180 Z" fill="#e2e8f0" />
                            <path d="M 245 125 L 222 125 L 195 160 L 245 160 Z" fill="#0f172a" opacity="0.8" />
                            {/* Divisória porta/vidro */}
                            <line x1="225" y1="125" x2="225" y2="180" stroke="#cbd5e1" strokeWidth="2" />
                            <rect x="230" y="165" width="8" height="4" rx="1" fill="#94a3b8" />

                            {/* Corpo Traseiro (Motor e Bombas) */}
                            <rect x="260" y="130" width="110" height="50" rx="4" fill="#f97316" />
                            {/* Grade de ventilação Lateral */}
                            <rect x="340" y="140" width="20" height="30" rx="2" fill="#ea580c" />
                            <line x1="340" y1="145" x2="360" y2="145" stroke="#c2410c" strokeWidth="2" />
                            <line x1="340" y1="150" x2="360" y2="150" stroke="#c2410c" strokeWidth="2" />
                            <line x1="340" y1="155" x2="360" y2="155" stroke="#c2410c" strokeWidth="2" />
                            <line x1="340" y1="160" x2="360" y2="160" stroke="#c2410c" strokeWidth="2" />

                            {/* Marca */}
                            <text x="296" y="148" fill="#ffffff" fontSize="12" fontWeight="900" fontFamily="Inter, sans-serif" letterSpacing="1.5" textAnchor="middle">
                                CRISTAL
                            </text>
                            <text x="296" y="164" fill="#ffffff" fontSize="12" fontWeight="900" fontFamily="Inter, sans-serif" letterSpacing="1.5" textAnchor="middle">
                                POÇOS
                            </text>

                            {/* Torre de Perfuração */}
                            <rect x="385" y="40" width="30" height="150" fill="#f97316" rx="2" />
                            <path d="M 385 40 L 415 40 L 400 20 Z" fill="#ea580c" />
                            {/* Grades da Torre */}
                            <line x1="390" y1="50" x2="410" y2="70" stroke="#c2410c" strokeWidth="2" />
                            <line x1="410" y1="50" x2="390" y2="70" stroke="#c2410c" strokeWidth="2" />
                            <line x1="390" y1="80" x2="410" y2="100" stroke="#c2410c" strokeWidth="2" />
                            <line x1="410" y1="80" x2="390" y2="100" stroke="#c2410c" strokeWidth="2" />
                            <line x1="390" y1="110" x2="410" y2="130" stroke="#c2410c" strokeWidth="2" />
                            <line x1="410" y1="110" x2="390" y2="130" stroke="#c2410c" strokeWidth="2" />

                            {/* Motor rotativo (Cabeçote) */}
                            <motion.g
                                animate={{ y: currentStep === 2 ? [0, 80, 0] : 0 }}
                                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                            >
                                <rect x="375" y="50" width="50" height="40" rx="4" fill="#1e293b" />
                                <rect x="385" y="45" width="30" height="10" fill="#94a3b8" />
                                {/* Eixo de rotação visual */}
                                <motion.rect
                                    x="395" y="90" width="10" height="15" fill="#facc15"
                                    animate={{ scaleX: [-1, 1] }}
                                    transition={{ repeat: Infinity, duration: 0.1 }}
                                />
                            </motion.g>

                            {/* Rodas (4 eixos) - estilo pesadas */}
                            <circle cx="220" cy="200" r="16" fill="#111827" stroke="#475569" strokeWidth="3" />
                            <circle cx="220" cy="200" r="6" fill="#cbd5e1" />

                            <circle cx="280" cy="200" r="16" fill="#111827" stroke="#475569" strokeWidth="3" />
                            <circle cx="280" cy="200" r="6" fill="#cbd5e1" />

                            <circle cx="340" cy="200" r="16" fill="#111827" stroke="#475569" strokeWidth="3" />
                            <circle cx="340" cy="200" r="6" fill="#cbd5e1" />

                            <circle cx="400" cy="200" r="16" fill="#111827" stroke="#475569" strokeWidth="3" />
                            <circle cx="400" cy="200" r="6" fill="#cbd5e1" />

                            {/* Estabilizadores (patolas descendo no passo 2) */}
                            <motion.rect
                                x="190" y="200" width="10" height="20" fill="#facc15"
                                initial={{ height: 0 }}
                                animate={{ height: currentStep >= 2 ? 20 : 0 }}
                            />
                            <motion.rect
                                x="420" y="200" width="10" height="20" fill="#facc15"
                                initial={{ height: 0 }}
                                animate={{ height: currentStep >= 2 ? 20 : 0 }}
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
                    </motion.g>
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
        <section ref={containerRef} className="relative bg-white w-full h-[500vh]">
            <div className="sticky top-0 h-screen w-full flex items-start lg:items-center justify-center overflow-hidden">
                {/* Background decorations */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#137fec]/[0.02] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#ea580c]/[0.02] rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

                <div className="max-w-[1280px] mx-auto px-[16px] md:px-[24px] relative z-10 w-full pt-[16px] pb-[16px] md:py-[80px]">
                    {/* Section Header */}
                    <div className="text-center max-w-4xl mx-auto mb-[32px] md:mb-[64px]">
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
                            className="font-['Outfit',sans-serif] text-[26px] sm:text-[32px] md:text-[48px] font-extrabold text-[#0f172a] leading-tight mb-[16px]"
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
                    <div className="flex flex-col lg:grid lg:grid-cols-12 gap-[32px] md:gap-[48px] items-center">

                        {/* =======================================================
                            MOBILE NAV (Horizontal Stepper & Info Card) 
                            Mostrado antes do SVG no CSS, escondido no Desktop 
                        =======================================================*/}
                        <div className="w-full lg:hidden flex flex-col gap-4 order-2 pb-[16px]">

                            {/* Horizontal Progress bar / Dots */}
                            <div className="flex justify-between items-center w-full max-w-[320px] mx-auto relative px-[10px]">
                                {/* Connecting Background Line */}
                                <div className="absolute left-[30px] right-[30px] top-1/2 -translate-y-1/2 h-[2px] bg-slate-200 -z-10" />

                                {/* Progress Connecting Line */}
                                <motion.div
                                    className="absolute left-[30px] top-1/2 -translate-y-1/2 h-[2px] bg-[#137fec] -z-10"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${((activeStep - 1) / (DRILLING_STEPS.length - 1)) * 100}%` }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    style={{ maxWidth: 'calc(100% - 60px)' }}
                                />

                                {DRILLING_STEPS.map((step) => {
                                    const isActive = activeStep === step.id;
                                    const isPast = activeStep > step.id;

                                    return (
                                        <div
                                            key={`mob-nav-${step.id}`}
                                            className={`relative z-10 w-[32px] h-[32px] rounded-full flex items-center justify-center transition-all duration-300 border-2
                                                 ${isActive ? 'bg-[#137fec] border-[#137fec] text-white scale-110 shadow-md' :
                                                    isPast ? 'bg-slate-700 border-slate-700 text-white' :
                                                        'bg-white border-slate-300 text-slate-300'}`
                                            }
                                        >
                                            <span className="font-['Outfit',sans-serif] font-bold text-[14px]">
                                                {step.id}
                                            </span>
                                        </div>
                                    )
                                })}
                            </div>

                            {/* Active Step Info Card */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`mob-card-${activeStep}`}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-slate-50 border border-slate-100 rounded-[16px] p-[20px] text-center shadow-sm"
                                >
                                    <h3 className="font-['Inter',sans-serif] text-[20px] font-bold text-[#0f172a] mb-[8px]">
                                        {DRILLING_STEPS[activeStep - 1].title}
                                    </h3>
                                    <p className="font-['Inter',sans-serif] text-[15px] text-slate-600 leading-relaxed">
                                        {DRILLING_STEPS[activeStep - 1].description}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>


                        {/* =======================================================
                            DESKTOP NAV (Vertical Progress Sidebar)
                            Visível apenas em Desktop
                        =======================================================*/}
                        <div className="hidden lg:col-span-5 lg:flex flex-col pt-[20px] pb-[80px] order-1">
                            {DRILLING_STEPS.map((step, index) => {
                                const isActive = activeStep === step.id;
                                const isPast = activeStep > step.id;
                                const isLast = index === DRILLING_STEPS.length - 1;

                                return (
                                    <div
                                        key={step.id}
                                        className={`relative text-left w-full transition-all duration-500 flex items-start gap-[24px] ${isActive ? "opacity-100" : "opacity-40"
                                            }`}
                                    >
                                        {/* Linha de Conexão (Não renderiza no último item) */}
                                        {!isLast && (
                                            <div className={`absolute left-[23px] top-[56px] bottom-[-16px] w-[2px] rounded-full transition-colors duration-500 ${isPast ? "bg-[#137fec]" : "bg-slate-200"}`} />
                                        )}

                                        {/* Ícone Container */}
                                        <div
                                            className={`relative z-10 w-[48px] h-[48px] rounded-[14px] flex items-center justify-center shrink-0 transition-all duration-500 border-2 ${isActive
                                                ? "bg-gradient-to-br from-[#137fec] to-[#3b82f6] border-[#137fec] text-white shadow-[0_0_24px_rgba(19,127,236,0.3)] scale-110"
                                                : isPast
                                                    ? "bg-slate-800 border-slate-800 text-white"
                                                    : "bg-white border-slate-200 text-slate-400"
                                                }`}
                                        >
                                            <step.icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                                        </div>
                                        {/* Texto Content */}
                                        <div className="flex-1 mt-[10px] pb-[40px]">
                                            <h3
                                                className={`font-['Inter',sans-serif] text-[18px] md:text-[20px] mb-[8px] transition-colors duration-300 ${isActive ? "font-bold text-[#0f172a]" : "font-semibold text-slate-500"
                                                    }`}
                                            >
                                                {step.title}
                                            </h3>
                                            <div
                                                className={`overflow-hidden transition-all duration-500 ${isActive ? "max-h-[200px] opacity-100 mt-[8px]" : "max-h-0 opacity-0"
                                                    }`}
                                            >
                                                <p className="font-['Inter',sans-serif] text-[15px] md:text-[16px] text-slate-600 leading-relaxed pr-[16px]">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* =======================================================
                            SVG SIMULATION VIEWPORT 
                            Top on Mobile, Right side on Desktop
                        =======================================================*/}
                        <div className="w-full lg:col-span-7 order-1 lg:order-2">
                            <DrillingSimulation currentStep={activeStep} />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
