import { Package, ShoppingCart, Target, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const EcosystemSection = () => {
  const pillars = [
    {
      icon: Package,
      title: "Ecossistema Completo",
      description: "Não é só uma comunidade. É TODO o sistema que você precisa: Ferramentas premium, produtos para revenda, checkout próprio, ofertas validadas diariamente e uma rede de 7.000+ executores. Tudo integrado. Tudo funcionando. Você nunca mais gasta com cursos caros ou ferramentas separadas."
    },
    {
      icon: ShoppingCart,
      title: "Venda Seus Próprios Produtos",
      description: "Checkout próprio com taxa 70% menor que Hotmart, Kiwify e Monetizze. Receba direto na sua conta bancária. MAIS: produtos validados para você revender pelo preço que quiser. Você não só aprende, você VENDE. Recupere seu investimento com apenas 2 vendas."
    },
    {
      icon: Target,
      title: "Ofertas Validadas Todos os Dias",
      description: "Novas oportunidades de renda todos os dias. Não é só listar ofertas. Cada uma é testada, validada e aprovada por 7.000+ membros ativos. Você vê o que funciona NA PRÁTICA, aplica e ganha. Enquanto outros perdem tempo testando, você já entra no que está dando resultado."
    },
    {
      icon: Wrench,
      title: "50+ Ferramentas Premium",
      description: "Acesso a 50+ ferramentas que custariam R$5.000+/mês se compradas separadamente. ChatGPT, Midjourney, Canva Pro, CapCut Pro e muito mais. Economize 90% e tenha tudo que os grandes players usam. Novas ferramentas sendo adicionadas toda semana."
    }
  ];

  return (
    <section className="w-full -mt-14 pb-16 md:-mt-20 md:pb-24 px-4 md:px-6 bg-background relative z-50">
      <div className="max-w-7xl mx-auto relative z-50">
        {/* Título */}
        <div className="text-center mb-10 md:mb-16 space-y-0 md:space-y-4 relative z-50">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            Mais que uma Comunidade, um <span className="text-primary">Ecossistema</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
            Chega de gastar fortunas com cursos caros, ferramentas premium e produtos. 
            Aqui você tem <span className="text-primary font-semibold">TUDO</span> que precisa em um só lugar. 
            Todo o caminho completo do zero ao lucro. Sem precisar comprar mais nada.
          </p>
        </div>

        {/* Grid de Pilares */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative h-full flex flex-col bg-background border border-white/20 p-6 md:p-8 rounded-xl hover:border-red-500/40 transition-all duration-300"
            >
              {/* Ícone */}
              <div className="mb-5">
                <pillar.icon className="w-12 h-12 md:w-14 md:h-14 text-primary" strokeWidth={1.5} />
              </div>

              {/* Título */}
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                {pillar.title}
              </h3>

              {/* Descrição */}
              <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
