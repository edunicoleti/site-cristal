import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { getProjects, Project } from "../../utils/cms";

export function ProjectGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setProjects(getProjects());

    const handleStorageChange = () => {
      setProjects(getProjects());
    };
    
    // Listen for custom event to update projects when changed in admin
    window.addEventListener("projectsUpdated", handleStorageChange);
    return () => {
      window.removeEventListener("projectsUpdated", handleStorageChange);
    };
  }, []);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((prev) =>
      prev !== null && projects.length > 0 ? (prev - 1 + projects.length) % projects.length : null
    );
  const nextImage = () =>
    setLightboxIndex((prev) =>
      prev !== null && projects.length > 0 ? (prev + 1) % projects.length : null
    );

  return (
    <section className="bg-white py-[64px] md:py-[96px]">
      <div className="max-w-[1280px] mx-auto px-[16px] md:px-[24px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-[48px] md:mb-[64px]"
        >
          <p className="font-['Inter:Bold',sans-serif] font-bold text-[12px] md:text-[14px] text-[#137fec] tracking-[2.8px] uppercase mb-[8px]">
            Portfólio
          </p>
          <h2 className="font-['Inter:Black',sans-serif] font-black text-[28px] md:text-[36px] text-[#111418] tracking-[-0.7px] md:tracking-[-0.9px] mb-[8px]">
            Projetos Realizados
          </h2>
          <div className="bg-[#f97316] h-[4px] rounded-[9999px] w-[80px]" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px] md:gap-[24px]">
          {projects.map((project, index) => (
            <motion.div
              key={project.id || index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-[16px] overflow-hidden cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.url}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.85)] via-[rgba(0,0,0,0.3)] to-transparent opacity-100 transition-opacity duration-300 flex flex-col justify-end p-[20px]">
                <div className="bg-[#137fec] text-white text-[11px] font-['Inter:Bold',sans-serif] font-bold px-[10px] py-[4px] rounded-[6px] w-fit mb-[8px] uppercase tracking-wide">
                  {project.type}
                </div>
                <h3 className="font-['Inter:Bold',sans-serif] font-bold text-[16px] text-white mb-[4px]">
                  {project.title}
                </h3>
                <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#d1d5db]">
                  {project.location} · {project.depth}
                </p>
              </div>

              {/* Zoom icon */}
              <div className="absolute top-[12px] right-[12px] bg-white/90 rounded-full size-[36px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                <ZoomIn size={16} className="text-[#111418]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-[16px]"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              className="absolute top-[16px] right-[16px] bg-white/10 hover:bg-white/20 rounded-full size-[44px] flex items-center justify-center transition-colors z-10"
              onClick={closeLightbox}
            >
              <X size={20} className="text-white" />
            </button>

            {/* Prev */}
            <button
              className="absolute left-[16px] md:left-[32px] bg-white/10 hover:bg-white/20 rounded-full size-[44px] md:size-[56px] flex items-center justify-center transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              <ChevronLeft size={24} className="text-white" />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="max-w-[900px] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={projects[lightboxIndex].url}
                alt={projects[lightboxIndex].title}
                className="w-full rounded-[12px] max-h-[70vh] object-contain"
              />
              <div className="mt-[16px] text-center">
                <div className="inline-block bg-[#137fec] text-white text-[11px] font-['Inter:Bold',sans-serif] font-bold px-[10px] py-[4px] rounded-[6px] uppercase tracking-wide mb-[8px]">
                  {projects[lightboxIndex].type}
                </div>
                <h3 className="font-['Inter:Bold',sans-serif] font-bold text-[18px] text-white mb-[4px]">
                  {projects[lightboxIndex].title}
                </h3>
                <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#9ca3af]">
                  {projects[lightboxIndex].location} ·{" "}
                  {projects[lightboxIndex].depth}
                </p>
              </div>
            </motion.div>

            {/* Next */}
            <button
              className="absolute right-[16px] md:right-[32px] bg-white/10 hover:bg-white/20 rounded-full size-[44px] md:size-[56px] flex items-center justify-center transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              <ChevronRight size={24} className="text-white" />
            </button>

            {/* Counter */}
            <div className="absolute bottom-[16px] left-1/2 -translate-x-1/2 bg-white/10 rounded-full px-[16px] py-[6px]">
              <span className="font-['Inter:Medium',sans-serif] text-[13px] text-white">
                {lightboxIndex + 1} / {projects.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}