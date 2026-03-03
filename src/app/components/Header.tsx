import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import imgCristalLogo from "figma:asset/2a3d4d6193e931ad4cdcad44d0a2dfef321b2778.png";

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const menuItems = [
    { path: "/", label: "Início" },
    { path: "/quem-somos", label: "Quem somos" },
    { path: "/servicos", label: "Serviços" },
    { path: "/contato", label: "Contato" },
  ];

  return (
    <>
      <header
        className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "shadow-[0_2px_20px_rgba(0,0,0,0.08)] border-b border-transparent"
            : "border-b border-[#e5e7eb]"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[24px] flex items-center justify-between h-[64px] md:h-[77px]">
          <Link to="/" className="flex items-center">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              src={imgCristalLogo}
              alt="Cristal Poços"
              className="h-[36px] md:h-[48px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-[32px]">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-['Inter:Medium',sans-serif] font-medium text-[14px] relative ${
                  isActive(item.path) &&
                  (item.path === "/" ? location.pathname === "/" : true)
                    ? "text-[#137fec]"
                    : "text-[#111418] hover:text-[#137fec]"
                } transition-colors`}
              >
                {item.label}
                {isActive(item.path) &&
                  (item.path === "/" ? location.pathname === "/" : true) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-[24px] left-0 right-0 h-[3px] bg-[#137fec]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block"
          >
            <Link
              to="/contato"
              className="bg-[#f97316] text-white font-['Inter:Bold',sans-serif] font-bold text-[14px] px-[24px] py-[12px] rounded-[8px] hover:bg-[#ea580c] transition-all flex items-center gap-[8px] shadow-md hover:shadow-lg"
            >
              <MessageCircle size={16} />
              Solicite um Orçamento
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-[8px] rounded-[8px] hover:bg-[#f6f7f8] transition-colors relative z-[60]"
          >
            {mobileMenuOpen ? (
              <X size={24} className="text-[#111418]" />
            ) : (
              <Menu size={24} className="text-[#111418]" />
            )}
          </motion.button>
        </div>
      </header>

      {/* Mobile Menu Overlay & Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
              className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[55]"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="md:hidden fixed top-0 right-0 bottom-0 w-[280px] bg-white shadow-2xl z-[60] flex flex-col"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-[24px] py-[20px] border-b border-[#e5e7eb]">
                <img
                  src={imgCristalLogo}
                  alt="Cristal Poços"
                  className="h-[32px]"
                />
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-[8px] rounded-[8px] hover:bg-[#f6f7f8] transition-colors"
                >
                  <X size={20} className="text-[#111418]" />
                </motion.button>
              </div>

              {/* Navigation */}
              <nav className="flex-1 flex flex-col px-[16px] py-[24px] gap-[8px] overflow-y-auto">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`font-['Inter:Medium',sans-serif] font-medium text-[16px] px-[16px] py-[14px] rounded-[12px] block transition-all ${
                        isActive(item.path) &&
                        (item.path === "/" ? location.pathname === "/" : true)
                          ? "text-[#137fec] bg-[#eff6ff] shadow-sm"
                          : "text-[#111418] hover:bg-[#f6f7f8]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* CTA Button */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: menuItems.length * 0.05 }}
                className="px-[16px] pb-[24px] border-t border-[#e5e7eb] pt-[24px]"
              >
                <Link
                  to="/contato"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-[#f97316] text-white font-['Inter:Bold',sans-serif] font-bold text-[16px] px-[24px] py-[16px] rounded-[12px] hover:bg-[#ea580c] transition-all flex items-center justify-center gap-[8px] shadow-md w-full"
                >
                  <MessageCircle size={20} />
                  Solicite um Orçamento
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
