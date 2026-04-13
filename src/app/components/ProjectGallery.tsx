import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

// ─── Static photo list ────────────────────────────────────────────────────────
const BASE = "/cristalpocos/fotos%20projetos/";

const photos: { src: string; alt: string }[] = [
  { src: "poco-artesiano-aereo-drone-chapeco-01.jpg",        alt: "Vista aérea de poço artesiano em Chapecó SC" },
  { src: "poco-artesiano-aereo-drone-chapeco-02.jpg",        alt: "Drone sobre obra de poço artesiano Chapecó" },
  { src: "poco-artesiano-aereo-drone-chapeco-03.jpg",        alt: "Imagem aérea de perfuração artesiana Chapecó" },
  { src: "poco-artesiano-aereo-drone-chapeco-04.jpg",        alt: "Poço artesiano vista drone dezembro 2022" },
  { src: "poco-artesiano-aereo-drone-chapeco-05.jpg",        alt: "Obra poço artesiano drone Chapecó 2022" },
  { src: "poco-artesiano-aereo-drone-entardecer-01.jpg",     alt: "Poço artesiano ao entardecer vista aérea SC" },
  { src: "poco-artesiano-aereo-drone-chapeco-06.jpg",        alt: "Poço artesiano drone Chapecó dezembro 2022" },
  { src: "poco-artesiano-aereo-drone-chapeco-07.jpg",        alt: "Imagem aérea poço artesiano rural Chapecó" },
  { src: "poco-artesiano-aereo-drone-chapeco-08.jpg",        alt: "Vista aérea perfuração poço artesiano SC" },
  { src: "poco-artesiano-aereo-drone-chapeco-09.jpg",        alt: "Poço artesiano drone abril 2023 Chapecó" },
  { src: "poco-artesiano-aereo-drone-chapeco-10.jpg",        alt: "Obra poço artesiano aérea sul do Brasil" },
  { src: "poco-artesiano-aereo-drone-chapeco-11.jpg",        alt: "Vista drone poço artesiano Chapecó 2023" },
  { src: "poco-artesiano-aereo-drone-chapeco-12.jpg",        alt: "Imagem aérea poço artesiano agosto 2023" },
  { src: "poco-artesiano-aereo-drone-chapeco-13.jpg",        alt: "Drone poço artesiano Chapecó SC 2023" },
  { src: "poco-artesiano-aereo-drone-chapeco-14.jpg",        alt: "Vista aérea captação água subterrânea SC" },
  { src: "poco-artesiano-aereo-drone-chapeco-15.jpg",        alt: "Poço artesiano drone setembro 2023" },
  { src: "poco-artesiano-aereo-drone-chapeco-16.jpg",        alt: "Obra poço artesiano aérea setembro 2023" },
  { src: "poco-artesiano-aereo-drone-chapeco-17.jpg",        alt: "Perfuração poço artesiano vista drone SC" },
  { src: "poco-artesiano-aereo-drone-chapeco-18.jpg",        alt: "Poço artesiano drone março 2024 Chapecó" },
  { src: "poco-artesiano-aereo-drone-chapeco-19.jpg",        alt: "Vista aérea poço artesiano Chapecó 2025" },
  { src: "poco-artesiano-aereo-propriedade-rural-01.jpg",    alt: "Poço artesiano em propriedade rural sul Brasil" },
  { src: "poco-artesiano-aereo-propriedade-rural-02.jpg",    alt: "Propriedade rural com poço artesiano SC" },
  { src: "bomba-submersivel-poco-artesiano-instalacao-01.jpg", alt: "Instalação bomba submersível poço artesiano" },
  { src: "perfuracao-poco-artesiano-interior-sc-01.jpg",     alt: "Perfuração poço artesiano interior Santa Catarina" },
  { src: "perfuracao-poco-artesiano-interior-sc-02.jpg",     alt: "Obra perfuração poço artesiano interior SC" },
  { src: "perfuracao-poco-artesiano-campo-sul-brasil-01.jpg", alt: "Perfuração poço artesiano campo sul do Brasil" },
  { src: "poco-artesiano-obra-terreno-chapeco-01.jpg",       alt: "Obra poço artesiano em terreno Chapecó SC" },
  { src: "poco-artesiano-perfuracao-sonda-chapeco-01.jpg",   alt: "Sonda de perfuração poço artesiano Chapecó" },
  { src: "poco-artesiano-perfuracao-sonda-equipamento-02.jpg", alt: "Equipamento sonda perfuração poço artesiano" },
  { src: "poco-artesiano-sonda-perfuracao-chapeco-02.jpg",   alt: "Sonda de perfuração em ação Chapecó SC" },
  { src: "poco-artesiano-obra-perfuracao-rural-01.jpg",      alt: "Obra perfuração poço artesiano zona rural SC" },
  { src: "poco-artesiano-instalacao-tubulacao-01.jpg",       alt: "Instalação tubulação poço artesiano SC" },
].map((p) => ({ ...p, src: BASE + p.src }));

// ─── Component ────────────────────────────────────────────────────────────────
export function ProjectGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const total = photos.length;

  const openLightbox = useCallback((i: number) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const prev = useCallback(
    () => setLightboxIndex((i) => (i !== null ? (i - 1 + total) % total : null)),
    [total]
  );
  const next = useCallback(
    () => setLightboxIndex((i) => (i !== null ? (i + 1) % total : null)),
    [total]
  );

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, closeLightbox, prev, next]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  // Touch swipe handlers
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    // Only horizontal swipes with enough travel and more horizontal than vertical
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      dx < 0 ? next() : prev();
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <section className="bg-white py-[64px] md:py-[96px]">
      <div className="max-w-[1280px] mx-auto px-[16px] md:px-[24px]">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-[40px] md:mb-[56px]"
        >
          <p className="font-['Inter:Bold',sans-serif] font-bold text-[12px] md:text-[13px] text-[#137fec] tracking-[2.8px] uppercase mb-[10px]">
            Portfólio
          </p>
          <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[28px] md:text-[36px] text-[#111418] tracking-[-0.7px] md:tracking-[-0.9px] mb-[12px]">
            Projetos Realizados
          </h2>
          <div className="bg-[#137fec] h-[4px] rounded-[9999px] w-[64px]" />
        </motion.div>

        {/* Photo grid — 2 cols mobile · 3 cols md · 4 cols lg */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[8px] sm:gap-[12px] md:gap-[16px]">
          {photos.map((photo, index) => (
            <motion.button
              key={photo.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: Math.min(index * 0.04, 0.4), duration: 0.35 }}
              className="group relative rounded-[10px] sm:rounded-[12px] overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#137fec] focus-visible:ring-offset-2"
              onClick={() => openLightbox(index)}
              aria-label={photo.alt}
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#f3f4f6]">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Subtle hover overlay + zoom icon */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
                <div className="bg-white/90 rounded-full size-[38px] sm:size-[44px] flex items-center justify-center opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 shadow-lg">
                  <ZoomIn size={16} className="text-[#111418]" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* ── Lightbox ─────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/95 z-[200] flex items-center justify-center"
            onClick={closeLightbox}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {/* Close button */}
            <button
              className="absolute top-[12px] right-[12px] md:top-[20px] md:right-[20px] bg-white/10 hover:bg-white/25 active:bg-white/30 rounded-full size-[44px] flex items-center justify-center transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
              aria-label="Fechar"
            >
              <X size={20} className="text-white" />
            </button>

            {/* Prev button */}
            <button
              className="absolute left-[8px] md:left-[24px] top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 active:bg-white/30 rounded-full size-[44px] md:size-[52px] flex items-center justify-center transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Foto anterior"
            >
              <ChevronLeft size={22} className="text-white" />
            </button>

            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.18 }}
                className="px-[60px] md:px-[80px] w-full max-w-[1100px] flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={photos[lightboxIndex].src}
                  alt={photos[lightboxIndex].alt}
                  className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-[10px] shadow-2xl select-none"
                  draggable={false}
                />
              </motion.div>
            </AnimatePresence>

            {/* Next button */}
            <button
              className="absolute right-[8px] md:right-[24px] top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 active:bg-white/30 rounded-full size-[44px] md:size-[52px] flex items-center justify-center transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Próxima foto"
            >
              <ChevronRight size={22} className="text-white" />
            </button>

            {/* Counter pill */}
            <div className="absolute bottom-[16px] left-1/2 -translate-x-1/2 bg-white/15 backdrop-blur-sm rounded-full px-[18px] py-[7px] pointer-events-none">
              <span className="font-['Inter:Medium',sans-serif] font-medium text-[13px] text-white tabular-nums">
                {lightboxIndex + 1} / {total}
              </span>
            </div>

            {/* Swipe hint — mobile only, fades out */}
            <motion.div
              initial={{ opacity: 0.7 }}
              animate={{ opacity: 0 }}
              transition={{ delay: 2, duration: 1 }}
              className="md:hidden absolute bottom-[48px] left-1/2 -translate-x-1/2 pointer-events-none"
            >
              <span className="font-['Inter:Regular',sans-serif] text-[11px] text-white/60 tracking-wide">
                ← deslize para navegar →
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
