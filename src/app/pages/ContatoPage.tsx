import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { SEOHead } from "../components/SEOHead";
import { BrazilMapInteractive } from "../components/BrazilMapInteractive";
import fundoVideo from "../../assets/fundo-hero-cristal.mp4";

const WHATSAPP_URL =
  "https://wa.me/5549999999999?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20perfura%C3%A7%C3%A3o%20de%20po%C3%A7o%20artesiano.";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export function ContatoPage() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: { subject: "Orçamento" },
  });

  // Máscara de telefone
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let v = e.target.value.replace(/\D/g, "").slice(0, 11);
    if (v.length > 6) {
      v = `(${v.slice(0, 2)}) ${v.slice(2, 7)}-${v.slice(7)}`;
    } else if (v.length > 2) {
      v = `(${v.slice(0, 2)}) ${v.slice(2)}`;
    } else if (v.length > 0) {
      v = `(${v}`;
    }
    setValue("phone", v, { shouldValidate: true });
  };

  const onSubmit = async (data: FormData) => {
    // Simula envio (substitua por integração real)
    await new Promise((r) => setTimeout(r, 1200));
    console.log("Form data:", data);

    toast.custom(
      () => (
        <div className="flex items-start gap-[12px] bg-white border border-[#e5e7eb] rounded-[12px] p-[16px] shadow-xl min-w-[320px]">
          <div className="bg-[#ecfdf5] rounded-full p-[6px] flex-shrink-0">
            <CheckCircle size={18} className="text-[#10b981]" />
          </div>
          <div>
            <p className="font-['Inter:Bold',sans-serif] font-bold text-[14px] text-[#111418] mb-[2px]">
              Mensagem enviada com sucesso!
            </p>
            <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#617589]">
              Retornaremos em até 24h úteis. Obrigado, {data.name.split(" ")[0]}!
            </p>
          </div>
        </div>
      ),
      { duration: 5000 }
    );
    reset();
  };

  return (
    <div className="relative">
      <SEOHead
        title="Contato — Cristal Poços | Fale com Nossos Especialistas"
        description="Entre em contato com a Cristal Poços. Matriz em Chapecó/SC e filial em Balsas/MA. Orçamento gratuito e estudo de viabilidade sem custo."
      />

      {/* Hero Section */}
      <section className="relative py-[80px] md:py-[120px] overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute h-full w-full object-cover"
          >
            <source src={fundoVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#0a0f1a] mix-blend-multiply opacity-80" />
        </div>

        <div className="relative max-w-[1280px] mx-auto px-[16px] md:px-[24px] z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-[800px] mx-auto"
          >
            <p className="font-['Inter:Bold',sans-serif] font-bold text-[12px] md:text-[14px] text-[#dbeafe] tracking-[2.8px] uppercase mb-[16px]">
              Entre em Contato
            </p>
            <h1 className="font-['Inter:Bold',sans-serif] font-bold text-[32px] md:text-[48px] text-white tracking-[-0.8px] md:tracking-[-1.2px] leading-[36px] md:leading-[48px] mb-[24px]">
              Fale com Nossos Especialistas
            </h1>
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[16px] md:text-[20px] text-[#dbeafe] leading-[24px] md:leading-[28px]">
              Estamos prontos para atender você e fornecer a melhor solução
              <br className="hidden md:block" />
              em perfuração de poços artesianos
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-[48px] md:py-[80px] bg-[#f6f7f8]">
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[24px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] md:gap-[24px]">
            {[
              {
                icon: <Phone size={24} />,
                title: "Telefone",
                info: "+55 (49) 9999-9999",
                color: "#137fec",
              },
              {
                icon: <Mail size={24} />,
                title: "E-mail",
                info: "contato@cristalpocos.com.br",
                color: "#f97316",
              },
              {
                icon: <MapPin size={24} />,
                title: "Localização",
                info: "Chapecó - SC",
                color: "#137fec",
              },
              {
                icon: <Clock size={24} />,
                title: "Horário",
                info: "Seg-Sex: 8h às 18h",
                color: "#f97316",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-[16px] p-[28px] md:p-[32px] shadow-md hover:shadow-xl transition-all"
              >
                <div
                  className="size-[56px] rounded-[12px] flex items-center justify-center mb-[20px]"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <div style={{ color: item.color }}>{item.icon}</div>
                </div>
                <h3 className="font-['Inter:Bold',sans-serif] font-bold text-[18px] text-[#111418] mb-[8px]">
                  {item.title}
                </h3>
                <p className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#617589]">
                  {item.info}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-[64px] md:py-[96px] bg-white">
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[24px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[48px] md:gap-[64px]">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[28px] md:text-[36px] text-[#111418] mb-[24px]">
                Envie sua Mensagem
              </h2>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-[20px] md:space-y-[24px]"
                noValidate
              >
                {/* Nome */}
                <div>
                  <label className="font-['Inter:Bold',sans-serif] font-bold text-[14px] text-[#111418] mb-[8px] block">
                    Nome Completo <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Seu nome completo"
                    {...register("name", {
                      required: "Nome é obrigatório",
                      minLength: { value: 3, message: "Nome muito curto" },
                    })}
                    className={`w-full px-[16px] py-[14px] border rounded-[12px] font-['Inter:Regular',sans-serif] text-[16px] focus:outline-none focus:ring-2 transition-all ${errors.name
                      ? "border-red-400 focus:ring-red-300 bg-red-50"
                      : "border-[#dbe0e6] focus:ring-[#137fec]"
                      }`}
                  />
                  {errors.name && (
                    <p className="mt-[6px] text-[12px] text-red-500 font-['Inter:Medium',sans-serif]">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* E-mail + Telefone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
                  <div>
                    <label className="font-['Inter:Bold',sans-serif] font-bold text-[14px] text-[#111418] mb-[8px] block">
                      E-mail <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="seu@email.com"
                      {...register("email", {
                        required: "E-mail é obrigatório",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "E-mail inválido",
                        },
                      })}
                      className={`w-full px-[16px] py-[14px] border rounded-[12px] font-['Inter:Regular',sans-serif] text-[16px] focus:outline-none focus:ring-2 transition-all ${errors.email
                        ? "border-red-400 focus:ring-red-300 bg-red-50"
                        : "border-[#dbe0e6] focus:ring-[#137fec]"
                        }`}
                    />
                    {errors.email && (
                      <p className="mt-[6px] text-[12px] text-red-500 font-['Inter:Medium',sans-serif]">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="font-['Inter:Bold',sans-serif] font-bold text-[14px] text-[#111418] mb-[8px] block">
                      Telefone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="(00) 00000-0000"
                      {...register("phone", {
                        required: "Telefone é obrigatório",
                        minLength: { value: 14, message: "Telefone incompleto" },
                      })}
                      onChange={handlePhoneChange}
                      className={`w-full px-[16px] py-[14px] border rounded-[12px] font-['Inter:Regular',sans-serif] text-[16px] focus:outline-none focus:ring-2 transition-all ${errors.phone
                        ? "border-red-400 focus:ring-red-300 bg-red-50"
                        : "border-[#dbe0e6] focus:ring-[#137fec]"
                        }`}
                    />
                    {errors.phone && (
                      <p className="mt-[6px] text-[12px] text-red-500 font-['Inter:Medium',sans-serif]">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Assunto */}
                <div>
                  <label className="font-['Inter:Bold',sans-serif] font-bold text-[14px] text-[#111418] mb-[8px] block">
                    Assunto
                  </label>
                  <select
                    {...register("subject")}
                    className="w-full px-[16px] py-[14px] border border-[#dbe0e6] rounded-[12px] font-['Inter:Regular',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#137fec] transition-all bg-white"
                  >
                    <option>Orçamento</option>
                    <option>Estudo de Viabilidade Gratuito</option>
                    <option>Dúvidas Técnicas</option>
                    <option>Manutenção</option>
                    <option>Regularização / Outorga</option>
                    <option>Outros</option>
                  </select>
                </div>

                {/* Mensagem */}
                <div>
                  <label className="font-['Inter:Bold',sans-serif] font-bold text-[14px] text-[#111418] mb-[8px] block">
                    Mensagem <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Descreva seu projeto: localização, tipo de uso (residencial, rural, industrial), área do terreno..."
                    {...register("message", {
                      required: "Mensagem é obrigatória",
                      minLength: { value: 20, message: "Mensagem muito curta (mínimo 20 caracteres)" },
                    })}
                    className={`w-full px-[16px] py-[14px] border rounded-[12px] font-['Inter:Regular',sans-serif] text-[16px] focus:outline-none focus:ring-2 transition-all resize-none ${errors.message
                      ? "border-red-400 focus:ring-red-300 bg-red-50"
                      : "border-[#dbe0e6] focus:ring-[#137fec]"
                      }`}
                  />
                  {errors.message && (
                    <p className="mt-[6px] text-[12px] text-red-500 font-['Inter:Medium',sans-serif]">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#137fec] text-white font-['Inter:Bold',sans-serif] font-bold text-[16px] md:text-[18px] px-[32px] py-[16px] rounded-[12px] hover:bg-[#0c5fb8] transition-all flex items-center justify-center gap-[8px] shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <MessageCircle size={20} />
                      Enviar Mensagem
                    </>
                  )}
                </motion.button>

                <p className="text-[12px] text-[#9ca3af] text-center font-['Inter:Regular',sans-serif]">
                  Campos marcados com <span className="text-red-500">*</span> são obrigatórios.
                  Respondemos em até 24h úteis.
                </p>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[28px] md:text-[36px] text-[#111418] mb-[24px]">
                Nossas Filiais
              </h2>

              <div className="space-y-[20px] md:space-y-[24px]">
                {/* Matriz */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-[#f6f7f8] rounded-[16px] p-[24px] border border-[#dbe0e6]"
                >
                  <div className="flex items-center gap-[12px] mb-[16px]">
                    <div className="bg-[#137fec] rounded-full p-[10px]">
                      <MapPin size={20} className="text-white" />
                    </div>
                    <div>
                      <span className="font-['Inter:Bold',sans-serif] font-bold text-[12px] text-[#617589] uppercase tracking-wide">
                        Matriz
                      </span>
                      <h3 className="font-['Inter:Bold',sans-serif] font-bold text-[20px] text-[#111418]">
                        Chapecó - SC
                      </h3>
                    </div>
                  </div>
                  <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#617589] mb-[12px] leading-[22px]">
                    Rua Exemplo, 123 - Centro
                    <br />
                    Chapecó - Santa Catarina
                    <br />
                    CEP: 89800-000
                  </p>
                  <p className="font-['Inter:Bold',sans-serif] font-bold text-[14px] text-[#111418]">
                    📞 +55 (49) 9999-9999
                  </p>
                </motion.div>

                {/* Filial */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-[#f6f7f8] rounded-[16px] p-[24px] border border-[#dbe0e6]"
                >
                  <div className="flex items-center gap-[12px] mb-[16px]">
                    <div className="bg-[#f97316] rounded-full p-[10px]">
                      <MapPin size={20} className="text-white" />
                    </div>
                    <div>
                      <span className="font-['Inter:Bold',sans-serif] font-bold text-[12px] text-[#617589] uppercase tracking-wide">
                        Filial
                      </span>
                      <h3 className="font-['Inter:Bold',sans-serif] font-bold text-[20px] text-[#111418]">
                        Balsas - MA
                      </h3>
                    </div>
                  </div>
                  <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#617589] mb-[12px] leading-[22px]">
                    Avenida Exemplo, 456
                    <br />
                    Balsas - Maranhão
                    <br />
                    CEP: 65800-000
                  </p>
                  <p className="font-['Inter:Bold',sans-serif] font-bold text-[14px] text-[#111418]">
                    📞 +55 (99) 9999-9999
                  </p>
                </motion.div>
              </div>

              {/* WhatsApp CTA */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="mt-[24px] md:mt-[32px] bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-[16px] p-[28px] md:p-[32px] text-white"
              >
                <h3 className="font-['Inter:Bold',sans-serif] font-bold text-[22px] md:text-[24px] mb-[12px]">
                  Prefere WhatsApp?
                </h3>
                <p className="font-['Inter:Regular',sans-serif] text-[14px] opacity-90 mb-[20px]">
                  Fale diretamente com nossos especialistas agora mesmo!
                </p>
                <motion.a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-[#25D366] font-['Inter:Bold',sans-serif] font-bold text-[16px] px-[24px] py-[14px] rounded-[12px] w-full flex items-center justify-center gap-[8px] shadow-lg"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M17.05 2.91C15.18 1.03 12.69 0 10.04 0C4.58 0 0.13 4.45 0.13 9.91C0.13 11.66 0.59 13.36 1.45 14.86L0.05 20L5.31 18.62C6.76 19.41 8.38 19.83 10.04 19.83C15.5 19.83 19.95 15.38 19.95 9.92C19.95 7.27 18.92 4.78 17.05 2.91ZM10.04 18.15C8.56 18.15 7.11 17.75 5.84 17L5.54 16.82L2.42 17.64L3.25 14.6L3.05 14.29C2.23 12.98 1.79 11.46 1.79 9.91C1.79 5.37 5.49 1.67 10.03 1.67C12.23 1.67 14.3 2.53 15.85 4.09C17.41 5.65 18.26 7.72 18.26 9.92C18.27 14.46 14.57 18.15 10.04 18.15ZM14.56 12.1C14.31 11.97 13.09 11.37 12.87 11.29C12.64 11.2 12.48 11.16 12.31 11.41C12.14 11.66 11.67 12.22 11.53 12.39C11.38 12.56 11.24 12.58 10.99 12.45C10.74 12.32 9.94 12.06 8.99 11.2C8.24 10.53 7.73 9.7 7.59 9.45C7.44 9.2 7.58 9.06 7.71 8.93C7.83 8.81 7.96 8.62 8.09 8.48C8.22 8.34 8.27 8.23 8.35 8.06C8.43 7.89 8.39 7.75 8.33 7.62C8.27 7.49 7.73 6.26 7.53 5.76C7.33 5.28 7.13 5.34 6.98 5.33H6.53C6.36 5.33 6.1 5.39 5.87 5.64C5.65 5.89 5 6.49 5 7.72C5 8.95 5.9 10.14 6.03 10.31C6.16 10.48 7.73 12.94 10.11 14.01C10.69 14.27 11.14 14.42 11.49 14.53C12.07 14.72 12.6 14.69 13.02 14.63C13.49 14.56 14.5 14.03 14.7 13.45C14.9 12.87 14.9 12.38 14.84 12.27C14.78 12.16 14.81 12.23 14.56 12.1Z"
                      fill="currentColor"
                    />
                  </svg>
                  Abrir WhatsApp
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="bg-white py-[64px] md:py-[96px]">
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[24px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-[48px] md:mb-[64px]"
          >
            <p className="font-['Inter:Bold',sans-serif] font-bold text-[12px] md:text-[14px] text-[#137fec] tracking-[2.8px] uppercase mb-[8px] md:mb-[16px]">
              Presença Nacional
            </p>
            <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[28px] md:text-[36px] text-[#111418] tracking-[-0.7px] md:tracking-[-0.9px] mb-[8px] md:mb-[16px]">
              Onde Atuamos
            </h2>
            <div className="bg-[#f97316] h-[4px] rounded-[9999px] w-[80px]" />
          </motion.div>

          <BrazilMapInteractive />
        </div>
      </section>
    </div>
  );
}
