import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, LogIn, Zap } from "lucide-react";

interface StepProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const StepCard = ({ number, title, description, icon, delay }: StepProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className="relative"
    >
      <div className="group relative">
        {/* Card Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Card Content */}
        <div className="relative p-8 md:p-10 rounded-2xl border border-red-500/20 bg-black/40 backdrop-blur-sm hover:border-red-500/40 transition-all duration-300 h-full">
          {/* Number Badge */}
          <div className="absolute -top-6 -left-6 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center shadow-lg shadow-red-600/50">
            <span className="text-2xl md:text-3xl font-bold text-white">{number}</span>
          </div>

          {/* Icon */}
          <div className="flex justify-end mb-6 pt-4">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center shadow-lg shadow-red-600/30 group-hover:scale-110 transition-transform duration-300">
              {icon}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3 mt-4">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            {description}
          </p>

          {/* Bottom Accent Line */}
          <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-600 to-transparent w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl" />
        </div>
      </div>
    </motion.div>
  );
};

const HowAccessWorks = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const steps = [
    {
      number: "01",
      title: "Receba seu acesso",
      description:
        "Após a confirmação da compra, você receberá imediatamente um e-mail com seus dados de acesso à nossa área de membros e nosso Discord.",
      icon: <Mail className="w-6 h-6 md:w-7 md:h-7 text-white" />,
    },
    {
      number: "02",
      title: "Faça login na plataforma",
      description:
        "Acesse a área de membros exclusiva com tutoriais de registro e links de acesso da comunidade do Discord.",
      icon: <LogIn className="w-6 h-6 md:w-7 md:h-7 text-white" />,
    },
    {
      number: "03",
      title: "Comece a usar na hora",
      description:
        "Entre no Discord, faça o registro conforme os tutoriais e aproveite tudo que a Rise Community oferece.",
      icon: <Zap className="w-6 h-6 md:w-7 md:h-7 text-white" />,
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden bg-black"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <div className="inline-block mb-4">
            <span className="text-sm md:text-base font-semibold text-red-500 bg-red-500/10 px-4 py-2 rounded-full">
              PASSO A PASSO
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            <span className="text-white">Como Funciona </span>
            <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
              o Acesso?
            </span>
          </h2>

          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-4">
            Siga o passo a passo abaixo e faça como as mais de{" "}
            <span className="text-white font-semibold">9 mil pessoas</span> que já
            fazem parte da plataforma.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mt-4"
          >
            <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm md:text-base text-green-400 font-medium">
                ⏱️ Em menos de 5 minutos você já pode estar explorando tudo!
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto mb-12 md:mb-16">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
              delay={index * 0.15}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <div className="inline-block">
            <button
              className="group relative px-8 md:px-12 py-3 md:py-4 rounded-full font-semibold text-white transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #FF0000 0%, #CC0000 100%)",
              }}
            >
              <span className="flex items-center gap-2">
                Quero entrar na Rise Community
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-red-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowAccessWorks;
