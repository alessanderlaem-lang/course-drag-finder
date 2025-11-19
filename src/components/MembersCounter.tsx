import { useState, useEffect, useRef } from 'react';

const MembersCounter = () => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const targetCount = 7155; // Novo valor final
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Só anima quando a seção está visível E ainda não animou
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            startAnimation();
          }
        });
      },
      {
        threshold: 0.3, // Anima quando 30% da seção está visível
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const startAnimation = () => {
    // Duração total da animação em ms (2.5 segundos)
    const duration = 2500;
    const startTime = Date.now();
    
    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function para movimento suave (ease-out)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * targetCount);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(targetCount);
      }
    };
    
    requestAnimationFrame(animate);
  };
  
  // Formatar número com separador de milhar
  const formatNumber = (num: number) => {
    return num.toLocaleString('pt-BR');
  };

  return (
    <section ref={sectionRef} className="w-full py-6 md:py-8 px-4 md:px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        {/* Título */}
        <h2 className="text-xl md:text-2xl text-white font-normal">
          Contagem de membros...
        </h2>
        
        {/* Número Principal */}
        <div className="relative inline-block">
          <h3 className="text-7xl md:text-8xl lg:text-9xl font-bold text-[#FF0000] tracking-tight leading-none">
            {formatNumber(count)}
          </h3>
          {/* Efeito de brilho no número */}
          <div className="absolute inset-0 blur-3xl bg-[#FF0000]/25" />
        </div>
      </div>
    </section>
  );
};

export default MembersCounter;
