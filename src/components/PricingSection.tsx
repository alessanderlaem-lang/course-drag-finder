import Section from "@/components/layout/Section";
import { Check } from "lucide-react";

const CHECKOUT_URL = "https://wa.me/?text=ol%C3%A1%2C%20quero%20adquirir%20meu%20acesso%20a%20rise%20community";

const PricingSection = () => {
  const benefits = [
    "Comunidade fechada e exclusiva no Discord",
    "Conteúdos atualizado diariamente",
    "Suporte direto para tirar todas as dúvidas",
    "Pagamento único & acesso vitalício",
    "Rise Offers — ofertas diárias",
    "Fornecedores de rateio",
    "Consulta de dados via Telegram",
    "Grupos de networking ativos",
  ];

  return (
    <Section id="pricing" spacing="lg" className="!pb-4 md:!pb-auto">
      <div className="container mx-auto px-1 md:px-4">
        <div className="max-w-2xl mx-auto">
          {/* Card de Preço */}
          <div className="bg-black border border-gray-800 rounded-3xl p-4 px-3 md:p-12">
            {/* Logo */}
            <div className="text-center mb-8">
              <h2 className="font-bold leading-none" style={{ fontFamily: "'League Spartan', sans-serif" }}>
                <span
                  style={{
                    fontSize: "62px",
                    background: "linear-gradient(90deg, #FF0000 0%, #A70505 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    display: "block",
                    lineHeight: "1",
                  }}
                >
                  RISE
                </span>
                <span
                  className="text-white"
                  style={{
                    fontSize: "50.2px",
                    display: "block",
                    lineHeight: "1",
                    marginTop: "-8px",
                  }}
                >
                  COMMUNITY
                </span>
              </h2>
            </div>

            {/* Título */}
            <h3 className="text-2xl md:text-3xl font-semibold text-white text-center mb-10">
              Quanto custa ter acesso
              <br />
              a tudo isso?
            </h3>

            {/* Lista de Benefícios */}
            <div className="space-y-4 mb-12">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 border border-gray-800 rounded-xl"
                >
                  <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-white text-base md:text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Preço */}
            <div className="text-center mb-8">
              <p className="text-gray-300 text-lg mb-4">POR APENAS 9X DE</p>
              <div className="mb-4">
                <span className="text-4xl md:text-5xl font-bold" style={{ background: "linear-gradient(90deg, #FF0000 0%, #A70505 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>R$ </span>
                <span
                  className="text-7xl md:text-8xl font-bold"
                  style={{
                    background: "linear-gradient(90deg, #FF0000 0%, #A70505 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  7,04
                </span>
              </div>
              <p className="text-gray-300 text-lg">OU 29,90 À VISTA</p>
            </div>

            {/* Botão CTA */}
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-red-600 hover:bg-red-700 text-white font-bold text-lg py-4 px-8 rounded-full transition-all duration-200 text-center hover:scale-105"
            >
              GARANTIR MINHA VAGA
            </a>

            {/* Ícones de Pagamento */}
            <div className="flex justify-center items-center gap-4 mt-8 opacity-70">
              <span className="text-gray-400 text-sm">MasterCard</span>
              <span className="text-gray-400 text-sm">VISA</span>
              <span className="text-gray-400 text-sm">BOLETO</span>
              <span className="text-gray-400 text-sm">PayPal</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default PricingSection;
