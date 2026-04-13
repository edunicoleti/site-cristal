import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Pause, Play, Grid3X3 } from "lucide-react";

// ─── Fotos ───────────────────────────────────────────────────────────────────
const BASE = "/fotos%20projetos/";
const AUTOPLAY_MS = 5000;

const photos: { src: string; alt: string }[] = [
  { src: "poco-artesiano-aereo-drone-chapeco-01.jpg",          alt: "Vista aérea de poço artesiano em Chapecó SC" },
  { src: "poco-artesiano-aereo-drone-chapeco-02.jpg",          alt: "Drone sobre obra de poço artesiano Chapecó" },
  { src: "poco-artesiano-aereo-drone-chapeco-03.jpg",          alt: "Imagem aérea de perfuração artesiana Chapecó" },
  { src: "poco-artesiano-aereo-drone-chapeco-04.jpg",          alt: "Poço artesiano vista drone dezembro 2022" },
  { src: "poco-artesiano-aereo-drone-chapeco-05.jpg",          alt: "Obra poço artesiano drone Chapecó 2022" },
  { src: "poco-artesiano-aereo-drone-entardecer-01.jpg",       alt: "Poço artesiano ao entardecer vista aérea SC" },
  { src: "poco-artesiano-aereo-drone-chapeco-06.jpg",          alt: "Poço artesiano drone Chapecó dezembro 2022" },
  { src: "poco-artesiano-aereo-drone-chapeco-07.jpg",          alt: "Imagem aérea poço artesiano rural Chapecó" },
  { src: "poco-artesiano-aereo-drone-chapeco-08.jpg",          alt: "Vista aérea perfuração poço artesiano SC" },
  { src: "poco-artesiano-aereo-drone-chapeco-09.jpg",          alt: "Poço artesiano drone abril 2023 Chapecó" },
  { src: "poco-artesiano-aereo-drone-chapeco-10.jpg",          alt: "Obra poço artesiano aérea sul do Brasil" },
  { src: "poco-artesiano-aereo-drone-chapeco-11.jpg",          alt: "Vista drone poço artesiano Chapecó 2023" },
  { src: "poco-artesiano-aereo-drone-chapeco-12.jpg",          alt: "Imagem aérea poço artesiano agosto 2023" },
  { src: "poco-artesiano-aereo-drone-chapeco-13.jpg",          alt: "Drone poço artesiano Chapecó SC 2023" },
  { src: "poco-artesiano-aereo-drone-chapeco-14.jpg",          alt: "Vista aérea captação água subterrânea SC" },
  { src: "poco-artesiano-aereo-drone-chapeco-15.jpg",          alt: "Poço artesiano drone setembro 2023" },
  { src: "poco-artesiano-aereo-drone-chapeco-16.jpg",          alt: "Obra poço artesiano aérea setembro 2023" },
  { src: "poco-artesiano-aereo-drone-chapeco-17.jpg",          alt: "Perfuração poço artesiano vista drone SC" },
  { src: "poco-artesiano-aereo-drone-chapeco-18.jpg",          alt: "Poço artesiano drone março 2024 Chapecó" },
  { src: "poco-artesiano-aereo-drone-chapeco-19.jpg",          alt: "Vista aérea poço artesiano Chapecó 2025" },
  { src: "poco-artesiano-aereo-propriedade-rural-01.jpg",      alt: "Poço artesiano em propriedade rural sul Brasil" },
  { src: "poco-artesiano-aereo-propriedade-rural-02.jpg",      alt: "Propriedade rural com poço artesiano SC" },
  { src: "bomba-submersivel-poco-artesiano-instalacao-01.jpg", alt: "Instalação bomba submersível poço artesiano" },
  { src: "perfuracao-poco-artesiano-interior-sc-01.jpg",       alt: "Perfuração poço artesiano interior Santa Catarina" },
  { src: "perfuracao-poco-artesiano-interior-sc-02.jpg",       alt: "Obra perfuração poço artesiano interior SC" },
  { src: "perfuracao-poco-artesiano-campo-sul-brasil-01.jpg",  alt: "Perfuração poço artesiano campo sul do Brasil" },
  { src: "poco-artesiano-obra-terreno-chapeco-01.jpg",         alt: "Obra poço artesiano em terreno Chapecó SC" },
  { src: "poco-artesiano-perfuracao-sonda-chapeco-01.jpg",     alt: "Sonda de perfuração poço artesiano Chapecó" },
  { src: "poco-artesiano-perfuracao-sonda-equipamento-02.jpg", alt: "Equipamento sonda perfuração poço artesiano" },
  { src: "poco-artesiano-sonda-perfuracao-chapeco-02.jpg",     alt: "Sonda de perfuração em ação Chapecó SC" },
  { src: "poco-artesiano-obra-perfuracao-rural-01.jpg",        alt: "Obra perfuração poço artesiano zona rural SC" },
  { src: "poco-artesiano-instalacao-tubulacao-01.jpg",         alt: "Instalação tubulação poço artesiano SC" },
].map((p) => ({ ...p, src: BASE + p.src }));

// ─── Componente ───────────────────────────────────────────────────────────────
export function ProjectGallery() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showGrid, setShowGrid] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(1);

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);
  const total = photos.length;

  // ── Navegação ───────────────────────────────────────────────────────────────
  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + total) % total);
    setProgress(0);
  }, [total]);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % total);
    setProgress(0);
  }, [total]);

  const goTo = useCallback((i: number) => {
    setDirection(i > current ? 1 : -1);
    setCurrent(i);
    setProgress(0);
    setShowGrid(false);
  }, [current]);

  // ── Autoplay com progress bar ───────────────────────────────────────────────
  useEffect(() => {
    if (!isPlaying || showGrid) return;

    const step = 50;
    const increment = (step / AUTOPLAY_MS) * 100;

    const progressTimer = setInterval(() => {
      setProgress((p) => {
        if (p + increment >= 100) return 100;
        return p + increment;
      });
    }, step);

    const slideTimer = setTimeout(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % total);
      setProgress(0);
    }, AUTOPLAY_MS);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(slideTimer);
    };
  }, [isPlaying, showGrid, current, total]);

  // ── Scroll thumbnail ativo para o centro ────────────────────────────────────
  useEffect(() => {
    const container = thumbsRef.current;
    if (!container) return;
    const thumb = container.children[current] as HTMLElement;
    if (!thumb) return;
    const offset = thumb.offsetLeft - container.clientWidth / 2 + thumb.clientWidth / 2;
    container.scrollTo({ left: offset, behavior: "smooth" });
  }, [current]);

  // ── Teclado ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
      else if (e.key === " ") { e.preventDefault(); setIsPlaying((p) => !p); }
      else if (e.key === "Escape") setShowGrid(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [prev, next]);

  // ── Touch ───────────────────────────────────────────────────────────────────
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      dx < 0 ? next() : prev();
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  // ── Variantes de animação ────────────────────────────────────────────────────
  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
  };

  return (
    <section className="bg-[#f9fafb] py-[56px] md:py-[80px]">
      <div className="max-w-[1280px] mx-auto px-[16px] md:px-[24px]">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-[32px] md:mb-[40px]"
        >
          <div>
            <p className="font-['Inter:Bold',sans-serif] font-bold text-[11px] md:text-[13px] text-[#137fec] tracking-[2.8px] uppercase mb-[8px]">
              Portfólio
            </p>
            <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[28px] md:text-[36px] text-[#111418] tracking-[-0.7px] md:tracking-[-0.9px] mb-[12px]">
              Projetos Realizados
            </h2>
            <div className="bg-[#137fec] h-[3px] rounded-full w-[56px]" />
          </div>

          {/* Toggle grade/slideshow */}
          <button
            onClick={() => setShowGrid((g) => !g)}
            className={`flex items-center gap-[8px] px-[14px] py-[9px] rounded-[10px] border text-[13px] font-['Inter:Medium',sans-serif] font-medium transition-all duration-200 ${
              showGrid
                ? "bg-[#137fec] border-[#137fec] text-white"
                : "bg-[#f0f1f3] border-[#e5e7eb] text-[#6b7280] hover:bg-[#e5e7eb] hover:text-[#111418]"
            }`}
          >
            <Grid3X3 size={15} />
            <span className="hidden sm:inline">Grade</span>
          </button>
        </motion.div>

        {/* ── MODO GRID ── */}
        <AnimatePresence mode="wait">
          {showGrid && (
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[6px] sm:gap-[8px] md:gap-[10px]"
            >
              {photos.map((photo, i) => (
                <button
                  key={photo.src}
                  onClick={() => goTo(i)}
                  className={`group relative rounded-[8px] overflow-hidden aspect-[4/3] focus:outline-none transition-all duration-200 ${
                    i === current
                      ? "ring-2 ring-[#137fec] ring-offset-2 ring-offset-[#f9fafb]"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {i === current && (
                    <div className="absolute inset-0 bg-[#137fec]/20" />
                  )}
                </button>
              ))}
            </motion.div>
          )}

          {/* ── MODO SLIDESHOW ── */}
          {!showGrid && (
            <motion.div
              key="slideshow"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              {/* ── Hero Image ── */}
              <div
                className="relative rounded-[16px] md:rounded-[20px] overflow-hidden bg-[#e5e7eb] select-none"
                style={{ height: "clamp(280px, 60vh, 640px)" }}
                onMouseEnter={() => setIsPlaying(false)}
                onMouseLeave={() => setIsPlaying(true)}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
              >
                {/* Imagem com crossfade */}
                <AnimatePresence custom={direction} mode="wait">
                  <motion.img
                    key={current}
                    src={photos[current].src}
                    alt={photos[current].alt}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                    className="absolute inset-0 w-full h-full object-cover"
                    draggable={false}
                  />
                </AnimatePresence>

                {/* Gradiente inferior */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

                {/* Progress bar */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/10">
                  <motion.div
                    className="h-full bg-[#137fec]"
                    style={{ width: `${progress}%` }}
                    transition={{ duration: 0 }}
                  />
                </div>

                {/* Topo: counter + play/pause */}
                <div className="absolute top-[14px] left-[14px] right-[14px] flex items-center justify-between pointer-events-none">
                  <div className="bg-black/50 backdrop-blur-sm rounded-full px-[14px] py-[6px] pointer-events-auto">
                    <span className="font-['Inter:Medium',sans-serif] font-medium text-[13px] text-white tabular-nums">
                      {current + 1} <span className="text-white/40">/</span> {total}
                    </span>
                  </div>

                  <button
                    onClick={() => setIsPlaying((p) => !p)}
                    className="bg-black/50 backdrop-blur-sm rounded-full size-[36px] flex items-center justify-center hover:bg-black/70 transition-colors pointer-events-auto"
                    aria-label={isPlaying ? "Pausar" : "Reproduzir"}
                  >
                    {isPlaying
                      ? <Pause size={14} className="text-white" />
                      : <Play size={14} className="text-white ml-[1px]" />
                    }
                  </button>
                </div>

                {/* Seta Esquerda */}
                <button
                  onClick={prev}
                  className="absolute left-[10px] md:left-[16px] top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 backdrop-blur-sm rounded-full size-[44px] md:size-[52px] flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
                  aria-label="Foto anterior"
                >
                  <ChevronLeft size={22} className="text-white" />
                </button>

                {/* Seta Direita */}
                <button
                  onClick={next}
                  className="absolute right-[10px] md:right-[16px] top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 backdrop-blur-sm rounded-full size-[44px] md:size-[52px] flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
                  aria-label="Próxima foto"
                >
                  <ChevronRight size={22} className="text-white" />
                </button>

                {/* Swipe hint mobile */}
                <motion.div
                  initial={{ opacity: 0.7 }}
                  animate={{ opacity: 0 }}
                  transition={{ delay: 2.5, duration: 1 }}
                  className="md:hidden absolute bottom-[16px] left-1/2 -translate-x-1/2 pointer-events-none"
                >
                  <span className="text-[11px] text-white/50 tracking-wide">
                    ← deslize →
                  </span>
                </motion.div>
              </div>

              {/* ── Thumbnails strip ── */}
              <div
                ref={thumbsRef}
                className="flex gap-[6px] md:gap-[8px] mt-[10px] md:mt-[12px] overflow-x-auto pb-[4px] scrollbar-hide"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {photos.map((photo, i) => (
                  <button
                    key={photo.src}
                    onClick={() => goTo(i)}
                    aria-label={photo.alt}
                    className={`flex-none rounded-[8px] md:rounded-[10px] overflow-hidden transition-all duration-200 focus:outline-none ${
                      i === current
                        ? "ring-2 ring-[#137fec] ring-offset-1 ring-offset-[#f9fafb] opacity-100"
                        : "opacity-40 hover:opacity-75"
                    }`}
                    style={{ width: "clamp(60px, 8vw, 96px)", height: "clamp(40px, 5.5vw, 64px)" }}
                  >
                    <img
                      src={photo.src}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Dot indicators — apenas no mobile */}
              <div className="flex md:hidden gap-[6px] justify-center mt-[16px]">
                {Array.from({ length: Math.min(total, 9) }).map((_, i) => {
                  // Janela deslizante de 9 dots
                  const dotIndex = Math.max(0, Math.min(current - 4, total - 9));
                  const realIndex = dotIndex + i;
                  const isActive = realIndex === current;
                  return (
                    <button
                      key={realIndex}
                      onClick={() => goTo(realIndex)}
                      className={`rounded-full transition-all duration-200 ${
                        isActive
                          ? "bg-[#137fec] w-[20px] h-[6px]"
                          : "bg-white/20 size-[6px] hover:bg-white/40"
                      }`}
                      aria-label={`Foto ${realIndex + 1}`}
                    />
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
