import { Link } from "react-router";
import { motion } from "motion/react";
import imgCristalLogoDark from "@/assets/logo-dark.png";

export function Footer() {
  return (
    <footer className="bg-[#111418] text-white">
      <div className="max-w-[1280px] mx-auto px-[16px] md:px-[24px] py-[48px] md:py-[64px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px] md:gap-[48px]">
          {/* Cristal Poços */}
          <div>
            <div className="flex items-center gap-[12px] mb-[24px]">
              <img src={imgCristalLogoDark} alt="Cristal Poços" className="h-[72px] md:h-[72px]" />
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#9ca3af] leading-[22px]">
              Referência em perfuração de poços há mais de 25 anos, comprometida com a qualidade e o meio
              ambiente.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="font-['Inter:Bold',sans-serif] font-bold text-[16px] mb-[16px]">
              Navegação
            </h3>
            <ul className="space-y-[12px]">
              <li>
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link
                    to="/"
                    className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#9ca3af] hover:text-white transition-colors"
                  >
                    Início
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link
                    to="/quem-somos"
                    className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#9ca3af] hover:text-white transition-colors"
                  >
                    Quem Somos
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link
                    to="/servicos"
                    className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#9ca3af] hover:text-white transition-colors"
                  >
                    Serviços
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link
                    to="/contato"
                    className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#9ca3af] hover:text-white transition-colors"
                  >
                    Contato
                  </Link>
                </motion.div>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-['Inter:Bold',sans-serif] font-bold text-[16px] mb-[16px]">
              Contato
            </h3>
            <ul className="space-y-[12px]">
              <li className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#9ca3af]">
                +55 (49) 9999-9999
              </li>
              <li className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#9ca3af]">
                contato@cristalpocos.com.br
              </li>
              <li className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#9ca3af]">
                Chapecó - SC
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="font-['Inter:Bold',sans-serif] font-bold text-[16px] mb-[16px]">
              Redes Sociais
            </h3>
            <div className="flex gap-[12px]">
              {[
                { href: "#", label: "Facebook", icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
                { href: "#", label: "Instagram", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
                { href: "#", label: "LinkedIn", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[rgba(255,255,255,0.1)] rounded-full size-[40px] flex items-center justify-center hover:bg-[rgba(255,255,255,0.2)] transition-colors"
                  aria-label={social.label}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d={social.icon} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[rgba(255,255,255,0.1)] mt-[32px] md:mt-[48px] pt-[24px] text-center relative flex justify-center items-center">
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] md:text-[14px] text-[#6b7280]">
            © 2026 Cristal Poços Artesianos. Todos os direitos reservados.
          </p>
          <Link 
            to="/admin" 
            className="absolute right-0 text-[#6b7280] opacity-0 hover:opacity-100 transition-opacity p-2 text-xs"
            title="Área Administrativa"
          >
            Admin
          </Link>
        </div>
      </div>
    </footer>
  );
}