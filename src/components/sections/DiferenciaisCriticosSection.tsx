import { LazyMotion, domAnimation, m } from "framer-motion";
import bonusMetodos from "@/assets/bonus-metodos.png";
import bonusOfertas from "@/assets/bonus-ofertas.jpeg";
import bonusFornecedores from "@/assets/bonus-fornecedores.jpeg";

const DiferenciaisCriticosSection = () => {
  const diferenciais = [
    {
      badge: "#DIFERENCIAL 1",
      title: "Afiliação Liberada",
      description: "Seja afiliado da Rise Community e ganhe comissão em CADA venda. Estrutura completa, suporte e direcionamento para começar do jeito certo. Recupere seu investimento com apenas 2 vendas e transforme isso em renda recorrente. Quanto mais você compartilha, mais você ganha.",
      value: "Comissão por venda + Suporte completo",
      image: bonusMetodos,
      imageAlt: "Afiliação Liberada"
    },
    {
      badge: "#DIFERENCIAL 2",
      title: "Checkout Próprio com Taxa 70% Menor",
      description: "Esqueça Hotmart, Kiwify e Monetizze. Aqui você tem seu próprio checkout com taxa 70% menor que o mercado. Receba direto na sua conta bancária, sem intermediários. Venda seus produtos, infoprodutos ou serviços e fique com MAIS do seu dinheiro.",
      value: "Taxa 70% menor + Receba direto na conta",
      image: bonusMetodos,
      imageAlt: "Checkout Próprio"
    },
    {
      badge: "#DIFERENCIAL 3",
      title: "RiseOffers - Ofertas Validadas Todos os Dias",
      description: "Novas oportunidades de renda organizadas e entregues todos os dias. Não é só listar ofertas. Cada uma é testada, validada e aprovada pela comunidade antes de chegar até você. Enquanto outros perdem tempo testando, você já aplica o que está dando resultado AGORA.",
      value: "Ofertas diárias + Pré-validadas pela comunidade",
      image: bonusOfertas,
      imageAlt: "Ofertas Validadas"
    },
    {
      badge: "#DIFERENCIAL 4",
      title: "+10.000 Cursos Completos",
      description: "Acesso a mais de 10 mil cursos completos via fornecedores exclusivos. Marketing digital, programação, design, vendas, e-commerce, dropshipping e muito mais. Tudo que você precisa aprender está aqui. Nunca mais gaste R$1.000+ em curso de guru. Aqui tem TUDO.",
      value: "+10.000 cursos + Todas as áreas",
      image: bonusMetodos,
      imageAlt: "10 mil cursos"
    },
    {
      badge: "#DIFERENCIAL 5",
      title: "Fornecedores Exclusivos de Rateio",
      description: "Acesso aos nossos próprios fornecedores de rateio. A lista secreta que os grandes players usam. Ferramentas premium, softwares, IAs, streamings e muito mais. Economize até 90% e tenha acesso a recursos que custariam milhares por mês.",
      value: "Fornecedores exclusivos + Economize 90%",
      image: bonusFornecedores,
      imageAlt: "Fornecedores de Rateio"
    },
    {
      badge: "#DIFERENCIAL 6",
      title: "Produtos Validados para Revenda",
      description: "Produtos digitais validados e prontos para você revender pelo preço que quiser. PLRs, e-books, templates, scripts e muito mais. Você não precisa criar nada. Pega, revende e lucra. Comece a ganhar dinheiro hoje mesmo sem precisar criar produto do zero.",
      value: "Produtos prontos + Revenda pelo preço que quiser",
      image: bonusMetodos,
      imageAlt: "Produtos para Revenda"
    }
  ];

  return (
    <LazyMotion features={domAnimation}>
    <section className="w-full py-8 md:py-12 px-4 md:px-6 bg-background relative z-50 hidden">
      <div className="max-w-5xl mx-auto relative z-50">
        {/* Cards de Diferenciais */}
        <div className="space-y-6 md:space-y-8">
          {diferenciais.map((diferencial, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`w-full ${(index === 1 || index === 2 || index === 4) ? 'hidden' : ''}`}
            >
              <div 
                className="group relative h-full flex flex-col md:flex-row items-center md:items-center justify-start bg-background border border-white/20 p-4 md:p-6 rounded-xl overflow-hidden hover:border-red-500/40 transition-all duration-300 w-full gap-4 md:gap-8"
              >
                {/* Imagem */}
                <div className="flex-shrink-0 w-full md:w-auto flex justify-center md:justify-start">
                  <img 
                    src={diferencial.image} 
                    alt={diferencial.imageAlt} 
                    className="w-[200px] md:w-[280px] h-auto object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                
                {/* Conteúdo */}
                <div className="flex flex-col text-center md:text-left w-full">
                  <span className="text-primary font-light text-sm md:text-base tracking-[0.2em]">
                    {diferencial.badge}
                  </span>
                  
                  <h3 className="text-foreground font-bold text-xl md:text-3xl mt-2">
                    {diferencial.title}
                  </h3>
                  
                  <p className="text-muted-foreground font-light text-sm md:text-base mt-3 leading-relaxed">
                    {diferencial.description}
                  </p>
                  
                  <p className="text-primary font-semibold text-base md:text-lg mt-4">
                    {diferencial.value}
                  </p>
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
    </LazyMotion>
  );
};

export default DiferenciaisCriticosSection;
