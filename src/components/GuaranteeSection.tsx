import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import garantiaMobile from "@/assets/garantia-7-dias-new.png";

// Componente do badge animado de 7 dias de garantia
const GuaranteeBadge = () => {
  return (
    <div className="flex justify-center mb-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="195"
        height="195"
        viewBox="0 0 195 195"
        fill="none"
        className="animate-pulse"
      >
        <defs>
          <linearGradient id="paint0_linear" x1="97.5" y1="20" x2="97.5" y2="175" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FF4444" />
            <stop offset="100%" stopColor="#CC0000" />
          </linearGradient>
        </defs>

        {/* Background circle */}
        <circle
          id="Background"
          cx="97.5003"
          cy="97.5"
          r="97.5"
          fill="#362323"
        />

        {/* Content group */}
        <g id="Content">
          {/* Inner circle */}
          <circle
            id="Background_2"
            cx="97.5007"
            cy="97.5"
            r="78.2205"
            fill="#1D1111"
            stroke="#4C2E2E"
            strokeWidth="1.61157"
          />

          {/* Background texture */}
          <g id="texture" opacity="0.44">
            <rect
              width="155"
              height="155"
              rx="77.5"
              transform="matrix(-1 0 0 1 175 20)"
              fill="url(#paint0_linear)"
            />
          </g>
        </g>

        {/* Red circle border - animated */}
        <g id="Vector">
          <circle
            cx="97.5"
            cy="97.5"
            r="85"
            fill="none"
            stroke="#FF0000"
            strokeWidth="8"
            strokeDasharray="267.04 534.08"
            strokeDashoffset="0"
            className="animate-spin"
            style={{
              animation: "spin 4s linear infinite",
              transformOrigin: "center",
            }}
          />
        </g>

        {/* Number 7 - text centered */}
        <text
          x="97.5"
          y="110"
          textAnchor="middle"
          fontSize="72"
          fontWeight="bold"
          fill="#FF0000"
          fontFamily="Arial, sans-serif"
          className="animate-pulse"
        >
          7
        </text>
      </svg>

      <style>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        .animate-spin {
          animation: spin 4s linear infinite;
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

const GuaranteeSection = () => {
  return (
    <Section id="guarantee" spacing="lg" className="py-12 md:py-16">
      <Container>
        <div className="flex flex-col items-center justify-center text-center">
          {/* Mobile view - image */}
          <div className="md:hidden w-full flex justify-center mb-8">
            <img 
              src={garantiaMobile} 
              alt="7 Dias de Garantia" 
              className="w-full max-w-[26rem] h-auto rounded-3xl"
            />
          </div>

          {/* Desktop view - animated badge */}
          <div className="hidden md:block">
            <GuaranteeBadge />
          </div>

        </div>
      </Container>
    </Section>
  );
};

export default GuaranteeSection;
