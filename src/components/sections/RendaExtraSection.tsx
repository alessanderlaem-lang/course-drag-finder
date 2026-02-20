import { LazyMotion, domAnimation, m } from "framer-motion";
import { Check, Link2, DollarSign } from "lucide-react";

const RendaExtraSection = () => {
  return (
    <LazyMotion features={domAnimation}>
      <section className="w-full pt-20 md:pt-32 pb-16 md:pb-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          {/* Header */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold"
              style={{ fontFamily: "'Articulat CF', sans-serif" }}
            >
              <span className="text-white">Ganhe Dinheiro com o </span>
              <span
                style={{
                  background: "linear-gradient(90deg, #FF0000 0%, #A70505 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Programa de Afiliados
              </span>
            </h2>
            <p
              className="text-sm md:text-base text-[#999] max-w-2xl mx-auto mt-4"
              style={{ fontFamily: "'Articulat CF', sans-serif" }}
            >
              Seja afiliado da Rise Community e ganhe comissão em cada venda que indicar. Recupere seu investimento com apenas 2 vendas e transforme isso em renda recorrente.
            </p>
          </m.div>
        </div>

        {/* Conteúdo sobre afiliação */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto px-4 md:px-6"
        >
          <div className="rounded-[20px] border border-[#464646] bg-[#111111] p-6 md:p-10 relative overflow-hidden">
            {/* LED glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />

            <h3
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              <span className="text-white">Afiliação </span>
              <span className="text-primary">Rise Community</span>
            </h3>

            <p
              className="text-sm md:text-base text-[#bbb] leading-relaxed mb-6"
              style={{ fontFamily: "'Articulat CF', sans-serif" }}
            >
              Seja afiliado oficial da Rise Community e ganhe comissão em cada venda que indicar.
              Estrutura completa pronta para você começar — sem precisar criar produto, sem precisar de experiência.
              Recupere seu investimento com apenas 2 vendas e transforme isso em renda recorrente.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mb-6">
              {[
                "Comissão generosa por cada venda",
                "Link de afiliado exclusivo e personalizado",
                "Materiais de divulgação prontos",
                "Suporte e direcionamento completo",
                "Produtos com alta conversão validada",
                "Renda recorrente e escalável",
                "Recupere o investimento em 2 vendas",
                "Sem precisar criar produto do zero",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 py-1">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span
                    className="text-white/90 text-sm md:text-base"
                    style={{ fontFamily: "'Articulat CF', sans-serif" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary text-xs md:text-sm font-semibold px-4 py-2 rounded-lg">
                <DollarSign className="w-4 h-4" />
                Comissão por venda
              </span>
              <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary text-xs md:text-sm font-semibold px-4 py-2 rounded-lg">
                <Link2 className="w-4 h-4" />
                Link exclusivo de afiliado
              </span>
            </div>
          </div>
        </m.div>

      </section>
    </LazyMotion>
  );
};

export default RendaExtraSection;
