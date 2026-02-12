import Section from "@/components/layout/Section";
import { Check } from "lucide-react";
import paymentMethods from "@/assets/payment-methods.webp";

const CHECKOUT_URL = "https://risecheckout.com/c/b0a5e71_943557";

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
    <Section id="pricing" spacing="lg" className="!pb-4 !pt-4 md:!pt-auto md:!pb-auto">
      <div className="container mx-auto px-1 md:px-4">
        <div className="max-w-2xl mx-auto">
          {/* Card de Preço */}
          <div className="bg-black border rounded-3xl p-4 px-3 md:p-12" style={{ borderColor: '#808080' }}>
            {/* Logo */}
             <div className="text-center mb-8 pt-6">
              <h2 className="font-bold leading-none" style={{ fontFamily: "'League Spartan', sans-serif" }}>
                <span
                  style={{
                    fontSize: "78px",
                    background: "linear-gradient(90deg, #FF0000 0%, #A70505 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    display: "block",
                    position: "relative" as const,
                    zIndex: 2,
                    lineHeight: "1",
                    paddingTop: "24px",
                    marginBottom: "-38px",
                  }}
                >
                  RISE
                  {/* Sombra escura abaixo do RISE */}
                  <span
                    style={{
                      position: "absolute",
                      bottom: "5px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "70%",
                      height: "25px",
                      background: "radial-gradient(ellipse at center, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0) 80%)",
                      zIndex: 1,
                      pointerEvents: "none",
                    }}
                  />
                </span>
                <span
                  className="text-white"
                  style={{
                    fontSize: "63px",
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
                  className="flex items-start gap-3 p-4 border rounded-xl"
                  style={{ borderColor: '#808080' }}
                >
                  <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-white text-base md:text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Preço */}
            <div className="text-center mb-8">
              <p className="text-gray-300 text-lg mb-4">POR APENAS 4X DE</p>
              <div className="mb-4 flex items-baseline justify-center">
                <span className="text-3xl md:text-4xl font-semibold relative -top-4 left-2" style={{ background: "linear-gradient(90deg, #FF0000 0%, #A70505 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>R$ </span>
                <span
                  className="font-semibold relative left-2.5"
                  style={{
                    fontSize: "clamp(100px, 22vw, 170px)",
                    background: "linear-gradient(90deg, #FF0000 0%, #A70505 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    lineHeight: "1",
                  }}
                >
                  8
                </span>
                <span
                  className="font-normal relative left-2"
                  style={{
                    fontSize: "clamp(70px, 16vw, 120px)",
                    background: "linear-gradient(90deg, #FF0000 0%, #A70505 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    lineHeight: "1",
                  }}
                >
                  ,
                </span>
                <span
                  className="font-semibold relative -top-2 left-1.5"
                  style={{
                    fontSize: "clamp(55px, 12vw, 95px)",
                    background: "linear-gradient(90deg, #FF0000 0%, #A70505 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    lineHeight: "1",
                  }}
                >
                  37
                </span>
              </div>
              <p className="text-gray-300 text-lg">OU 29,90 À VISTA</p>
            </div>

            {/* Botão CTA */}
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full md:w-full mx-auto text-white font-bold text-lg py-4 px-8 rounded-full transition-all duration-200 text-center hover:scale-105 max-w-[85%] md:max-w-none"
              style={{ background: "linear-gradient(90deg, #FF0000 0%, #8B0000 100%)" }}
            >
              GARANTIR MINHA VAGA
            </a>

            {/* Ícones de Pagamento */}
            <div className="flex justify-center items-center mt-8">
              <img src={paymentMethods} alt="MasterCard, VISA, Boleto, PayPal" className="h-10 md:h-12 opacity-70" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default PricingSection;
