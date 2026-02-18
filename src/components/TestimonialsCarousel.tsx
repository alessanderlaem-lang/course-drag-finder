import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import feedback1 from "@/assets/feedbacks/feedback-1.jpeg";
import feedback2 from "@/assets/feedbacks/feedback-2.jpeg";
import feedback3 from "@/assets/feedbacks/feedback-3.jpeg";
import feedback4 from "@/assets/feedbacks/feedback-4.jpeg";
import feedback5 from "@/assets/feedbacks/feedback-5.jpeg";
import feedback6 from "@/assets/feedbacks/feedback-6.jpeg";

const feedbacks = [feedback1, feedback2, feedback3, feedback4, feedback5, feedback6];

const TestimonialsCarousel = () => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      align: "start",
      containScroll: false,
    },
    [
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    ]
  );

  return (
    <section className="w-full mt-8 md:mt-12 pb-6 md:pb-8 bg-background relative z-30">
      <div className="text-center mb-6 md:mb-8 px-4">
        <h2
          className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto uppercase"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          O que nossos{" "}
          <span
            className="inline-block animate-[shimmer_10s_ease-in-out_infinite]"
            style={{
              background:
                "linear-gradient(90deg, hsl(0 100% 50%) 0%, hsl(0 100% 50%) 40%, #fff 50%, hsl(0 100% 50%) 60%, hsl(0 100% 50%) 100%)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            membros
          </span>{" "}
          estão falando
        </h2>
      </div>

      {/* Carrossel com drag infinito */}
      <div className="overflow-hidden relative w-full">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-4">
            {[...feedbacks, ...feedbacks, ...feedbacks].map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Feedback de membro ${(idx % feedbacks.length) + 1}`}
                className="h-[400px] md:h-[650px] w-auto rounded-xl object-cover flex-shrink-0 shadow-[0_0_15px_rgba(0,0,0,0.5)] border border-white/[0.06]"
                loading="lazy"
                decoding="async"
                draggable={false}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
