import { useEffect, useRef } from "react";
import heroBg from "@/assets/hero/Camada-4-11.jpg";
import avatarCarlos from "@/assets/hero/Carlos.png";
import avatarMateus from "@/assets/hero/Mateus.png";
import avatarWaleska from "@/assets/hero/Waleska.png";
import avatarIsrael from "@/assets/hero/Israel.png";

interface HeroSectionProps {
  onCtaClick: () => void;
}

const HeroSection = ({ onCtaClick }: HeroSectionProps) => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (marquee) {
      marquee.style.animationPlayState = "running";
    }
  }, []);

  const marqueeText =
    "Rise Community   •   Networking   •   Ferramentas   •   Comunidade   •   Marketing Digital   •   ";

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section
        className="relative w-full flex flex-col items-center justify-end overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover", // Desktop: cover
          backgroundPosition: "center top", // Desktop: center top
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
        }}
      >
        {/* Mobile-specific background adjustment */}
        <style>{`
          @media (max-width: 768px) {
            section:has(.hero-content-mobile) {
              background-size: 180% !important;
              background-position: center 22% !important;
            }
          }
        `}</style>
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />

        {/* Hero Content - responsivo mobile e desktop */}
        <div
          className="hero-content-mobile relative z-10 flex flex-col items-center text-center px-4 w-full max-w-[1140px] mx-auto pt-[180px] md:pt-[360px] lg:pt-[480px] xl:pt-[580px] pb-20 md:pb-32 lg:pb-36"
        >
          {/* Rise Community Badge - responsivo */}
          <div
            className="inline-flex items-center justify-center mb-3 md:mb-4"
            style={{
              backgroundColor: "rgba(255, 57, 57, 0.2)",
              borderRadius: "22px",
              padding: "10px 28px", // Mobile menor
              minWidth: "auto",
              height: "auto",
            }}
          >
            <span
              className="text-sm md:text-lg"
              style={{
                color: "rgb(255, 160, 160)",
                fontFamily: "'Articulat CF', sans-serif",
                fontWeight: 500,
              }}
            >
              Rise Community:
            </span>
          </div>

          {/* Main Title - responsivo mobile (menor) */}
          <h1
            className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] font-semibold mb-3 md:mb-4 w-full"
            style={{
              fontFamily: "'Articulat CF', sans-serif",
              maxWidth: "1060px",
              lineHeight: "1.1",
              textAlign: "center",
            }}
          >
            <span
              style={{
                color: "rgb(255, 255, 255)",
              }}
            >
              O lugar certo pra quem quer começar no marketing digital{" "}
            </span>
            <span
              style={{
                background:
                  "linear-gradient(90deg, #FF0000 0%, #A70505 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              sem ficar perdido
            </span>
          </h1>

          {/* Subtitle - responsivo mobile (menor) */}
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 md:mb-7"
            style={{
              color: "rgb(220, 207, 207)",
              fontFamily: "'Articulat CF', sans-serif",
              maxWidth: "726px",
              lineHeight: "1.3",
              textAlign: "center",
            }}
          >
            Uma comunidade completa que te dá direção,{" "}
            <span style={{ fontWeight: 600, color: "white" }}>
              oportunidades reais e networking,
            </span>{" "}
            mesmo que você ainda não tenha resultado nenhum no digital.
          </p>

          {/* CTA + Social Proof - mobile: coluna, desktop: linha */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 w-full">
            {/* CTA Button - responsivo mobile (menor padding) */}
            <button
              onClick={onCtaClick}
              className="group flex items-center justify-center gap-2 md:gap-3 text-white font-normal transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,0,0,0.4)] w-full max-w-[340px] md:max-w-none md:w-auto"
              style={{
                backgroundColor: "rgb(255, 0, 0)",
                fontFamily: "'Articulat CF', sans-serif",
                padding: "18px 40px", // Mobile: menor
                borderRadius: "9000px",
                fontSize: "16px", // Mobile: 16px
              }}
            >
              <span className="text-[15px] md:text-[18px]">
                Quero entrar na Rise Community
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 26 26"
                fill="none"
                className="transition-transform group-hover:translate-x-1 flex-shrink-0"
              >
                <path
                  d="M8.9375 8.9375V6.90625C8.9375 6.36753 9.15151 5.85087 9.53244 5.46994C9.91337 5.08901 10.43 4.875 10.9688 4.875H21.5312C22.07 4.875 22.5866 5.08901 22.9676 5.46994C23.3485 5.85087 23.5625 6.36753 23.5625 6.90625V19.0938C23.5625 19.6325 23.3485 20.1491 22.9676 20.5301C22.5866 20.911 22.07 21.125 21.5312 21.125H10.9688C10.43 21.125 9.91337 20.911 9.53244 20.5301C9.15151 20.1491 8.9375 19.6325 8.9375 19.0938V17.0625"
                  stroke="white"
                  strokeWidth="1.625"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.8125 17.0625L17.875 13L13.8125 8.9375M2.4375 13H17.0625"
                  stroke="white"
                  strokeWidth="1.625"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Social Proof - fica abaixo do CTA no mobile */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <img
                  src={avatarCarlos}
                  alt="Carlos"
                  className="w-[34px] h-[34px] md:w-[38px] md:h-[38px] rounded-full border-2 border-black"
                />
                <img
                  src={avatarMateus}
                  alt="Mateus"
                  className="w-[34px] h-[34px] md:w-[38px] md:h-[38px] rounded-full border-2 border-black"
                />
                <img
                  src={avatarWaleska}
                  alt="Waleska"
                  className="w-[34px] h-[34px] md:w-[38px] md:h-[38px] rounded-full border-2 border-black"
                />
                <img
                  src={avatarIsrael}
                  alt="Israel"
                  className="w-[34px] h-[34px] md:w-[38px] md:h-[38px] rounded-full border-2 border-black"
                />
              </div>
              <p
                className="text-xs max-w-[140px]"
                style={{
                  fontFamily: "'Articulat CF', sans-serif",
                  color: "rgb(215, 215, 215)",
                  lineHeight: "1.3",
                }}
              >
                Milhares de empresários{" "}
                <b className="text-white">escalaram sua empresa!</b>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MARQUEE SCROLL SECTION - OCULTA NO MOBILE ===== */}
      <div
        className="hidden md:block relative w-full overflow-hidden py-5"
        style={{ backgroundColor: "rgb(10, 10, 10)", marginTop: "0px" }}
      >
        <div
          ref={marqueeRef}
          className="marquee-track flex whitespace-nowrap"
        >
          <span
            className="marquee-text text-lg font-medium inline-block"
            style={{
              color: "rgb(255, 160, 160)",
              fontFamily: "'Articulat CF', sans-serif",
            }}
          >
            {marqueeText.repeat(12)}
          </span>
          <span
            className="marquee-text text-lg font-medium inline-block"
            style={{
              color: "rgb(255, 160, 160)",
              fontFamily: "'Articulat CF', sans-serif",
            }}
          >
            {marqueeText.repeat(12)}
          </span>
        </div>
      </div>

      {/* ===== 3 CARDS SECTION ===== */}
      <section
        className="relative w-full px-4 mt-0 md:-mt-32 z-20"
        style={{ backgroundColor: "transparent" }}
      >
        {/* Blur/Glass container */}
        <div
          className="max-w-[1140px] mx-auto rounded-[12px] p-4 md:p-5"
          style={{
            background: "rgba(40, 40, 40, 0.4)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.03)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Card 1 */}
            <div
              className="relative rounded-[15px] p-[44px] md:p-[50px_44px] flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "rgb(0, 0, 0)",
                border: "1px solid rgba(51, 33, 33, 0.5)",
                minHeight: "330px",
              }}
            >
              <div className="w-10 h-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <rect width="39.6667" height="39.6667" rx="3" fill="url(#card1_grad)" />
                  <path d="M24.3528 16.9074L14.6536 26.6066L13.0602 25.0131L22.7582 15.314H14.2107V13.0602H26.6066V25.456H24.3528V16.9074Z" fill="white" />
                  <defs>
                    <linearGradient id="card1_grad" x1="0" y1="19.8333" x2="39.6667" y2="19.8333" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FF1300" /><stop offset="1" stopColor="#992016" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="text-[22px] font-semibold leading-[1.2] text-white" style={{ fontFamily: "'Articulat CF', sans-serif" }}>
                Tudo o que você precisa no digital,{" "}
                <span style={{ background: "linear-gradient(90deg, #FF0000 0%, #A70505 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  em um só lugar
                </span>
              </h3>
              <p className="text-base leading-[1.3]" style={{ color: "rgb(171, 171, 171)", fontFamily: "'Articulat CF', sans-serif" }}>
                Marketing digital sem bagunça: estratégias, oportunidades, ferramentas, networking e caminhos claros para sair do zero.
              </p>
              <img src="https://risecommunity.com.br/wp-content/uploads/2026/01/bt.svg" alt="" className="absolute bottom-3 left-3 w-[22px] h-[22px] opacity-40" />
              <img src="https://risecommunity.com.br/wp-content/uploads/2026/01/tp.svg" alt="" className="absolute top-3 right-3 w-[22px] h-[22px] opacity-40" />
            </div>

            {/* Card 2 */}
            <div
              className="relative rounded-[15px] p-[44px] md:p-[50px_44px] flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "rgb(0, 0, 0)",
                border: "1px solid rgba(51, 33, 33, 0.5)",
                minHeight: "330px",
              }}
            >
              <div className="w-10 h-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <rect width="39.6667" height="39.6667" rx="3" fill="url(#card2_grad)" />
                  <path d="M24.3528 16.9074L14.6536 26.6066L13.0602 25.0131L22.7582 15.314H14.2107V13.0602H26.6066V25.456H24.3528V16.9074Z" fill="white" />
                  <defs>
                    <linearGradient id="card2_grad" x1="0" y1="19.8333" x2="39.6667" y2="19.8333" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FF1300" /><stop offset="1" stopColor="#992016" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="text-[22px] font-semibold leading-[1.2] text-white" style={{ fontFamily: "'Articulat CF', sans-serif" }}>
                Pagamento único,{" "}
                <span style={{ background: "linear-gradient(90deg, #FF0000 0%, #A70505 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  sem mensalidade
                </span>
              </h3>
              <p className="text-base leading-[1.3]" style={{ color: "rgb(171, 171, 171)", fontFamily: "'Articulat CF', sans-serif" }}>
                Você entra uma vez só. Sem planos escondidos, sem renovação automática, sem pegadinha.
              </p>
              <img src="https://risecommunity.com.br/wp-content/uploads/2026/01/bt.svg" alt="" className="absolute bottom-3 left-3 w-[22px] h-[22px] opacity-40" />
              <img src="https://risecommunity.com.br/wp-content/uploads/2026/01/tp.svg" alt="" className="absolute top-3 right-3 w-[22px] h-[22px] opacity-40" />
            </div>

            {/* Card 3 */}
            <div
              className="relative rounded-[15px] p-[44px] md:p-[50px_44px] flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "rgb(0, 0, 0)",
                border: "1px solid rgba(51, 33, 33, 0.5)",
                minHeight: "330px",
              }}
            >
              <div className="w-10 h-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <rect width="39.6667" height="39.6667" rx="3" fill="url(#card3_grad)" />
                  <path d="M24.3528 16.9074L14.6536 26.6066L13.0602 25.0131L22.7582 15.314H14.2107V13.0602H26.6066V25.456H24.3528V16.9074Z" fill="white" />
                  <defs>
                    <linearGradient id="card3_grad" x1="0" y1="19.8333" x2="39.6667" y2="19.8333" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FF1300" /><stop offset="1" stopColor="#992016" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="text-[22px] font-semibold leading-[1.2] text-white" style={{ fontFamily: "'Articulat CF', sans-serif" }}>
                Comunidade ativa e{" "}
                <span style={{ background: "linear-gradient(90deg, #FF0000 0%, #A70505 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  networking real
                </span>
              </h3>
              <p className="text-base leading-[1.3]" style={{ color: "rgb(171, 171, 171)", fontFamily: "'Articulat CF', sans-serif" }}>
                Aqui você não anda sozinho. Grupos ativos, troca de networking diária e pessoas no mesmo nível que você.
              </p>
              <img src="https://risecommunity.com.br/wp-content/uploads/2026/01/bt.svg" alt="" className="absolute bottom-3 left-3 w-[22px] h-[22px] opacity-40" />
              <img src="https://risecommunity.com.br/wp-content/uploads/2026/01/tp.svg" alt="" className="absolute top-3 right-3 w-[22px] h-[22px] opacity-40" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
