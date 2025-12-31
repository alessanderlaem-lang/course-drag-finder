import ctaButton from "@/assets/cta-button.png";

interface HeroSectionProps {
  onCtaClick: () => void;
}

const HeroSection = ({ onCtaClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[100svh] lg:min-h-screen bg-background overflow-visible z-30">
      {/* Fundo preto para cobrir qualquer gap */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Background com o design completo */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
        <div className="relative mx-auto h-[100svh] w-full translate-y-0 min-[900px]:h-full min-[900px]:w-auto min-[900px]:flex min-[900px]:flex-row-reverse min-[900px]:items-start min-[900px]:gap-8">
          <img
            src="/images/hero-background.jpg"
            alt="Rise Community - Maior comunidade de Marketing Digital e Networking do Brasil"
            className="block w-full h-full max-w-none object-cover object-center -translate-y-28 min-[900px]:translate-y-0 min-[900px]:object-contain min-[900px]:h-[85vh] min-[900px]:w-auto min-[900px]:mt-20 transition-transform"
            loading="eager"
            fetchPriority="high"
          />

          {/* Texto ao lado da imagem - desktop only */}
          <div className="hidden min-[900px]:flex flex-col pt-[20vh]">
            <p className="text-primary text-xs min-[1200px]:text-sm font-medium tracking-[0.15em] mb-4">
              PAGAMENTO ÚNICO + ATUALIZAÇÕES SEMANAIS
            </p>
            <h1 className="text-foreground text-4xl min-[1200px]:text-5xl min-[1440px]:text-6xl font-bold leading-tight">
              <span className="block">Maior comunidade de</span>
              <span className="block">Marketing digital e</span>
              <span className="block">Networking do Brasil</span>
            </h1>
            <p className="text-foreground/80 text-base min-[1200px]:text-lg min-[1440px]:text-xl font-light leading-relaxed mt-4">
              <span className="block">Tenha o mesmo acesso que os grandes players têm,</span>
              <span className="block">Networking poderoso, recursos exclusivos e uma comunidade</span>
              <span className="block">ativa com +9,000 membros</span>
            </p>
            <img
              src={ctaButton}
              alt="Quero saber mais"
              onClick={onCtaClick}
              className="-mt-36 w-72 cursor-pointer hover:scale-105 transition-transform"
            />
          </div>

          {/* Backdrop sob a preview do Discord (evita qualquer fundo cinza) */}
          <div className="lg:hidden absolute inset-x-0 bottom-[-12rem] h-[28rem] bg-background pointer-events-none" />

          {/* Texto abaixo da imagem - mobile only */}
          <div className="lg:hidden flex flex-col items-center text-center absolute inset-x-0 top-[62%] px-4 pb-[calc(env(safe-area-inset-bottom)+12px)]">
            <p className="text-primary text-[10px] font-medium tracking-[0.15em] mb-2 whitespace-nowrap">
              PAGAMENTO ÚNICO + ATUALIZAÇÕES SEMANAIS
            </p>

            <h1 className="text-foreground text-xl font-bold leading-tight mb-3">
              <span className="block whitespace-nowrap">Maior comunidade de Marketing Digital</span>
              <span className="block whitespace-nowrap">e Networking do Brasil</span>
            </h1>

            <p className="text-foreground/80 text-[10px] leading-relaxed whitespace-nowrap">
              Tenha o mesmo acesso que os grandes players têm, Networking poderoso, recursos
            </p>
            <p className="text-foreground/80 text-[10px] leading-relaxed whitespace-nowrap">
              exclusivos e uma comunidade ativa com +9.000 membros
            </p>

            <img
              src={ctaButton}
              alt="Quero saber mais"
              onClick={onCtaClick}
              className="-mt-40 w-64 cursor-pointer hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
