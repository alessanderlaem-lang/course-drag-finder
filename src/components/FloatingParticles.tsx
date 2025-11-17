const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Partículas grandes */}
      <div className="absolute top-[10%] left-[5%] w-2 h-2 bg-red-500/30 rounded-full animate-float-slow" />
      <div className="absolute top-[20%] right-[10%] w-3 h-3 bg-red-500/20 rounded-full animate-float-medium" />
      <div className="absolute top-[60%] left-[15%] w-2 h-2 bg-red-500/25 rounded-full animate-float-fast" />
      <div className="absolute top-[80%] right-[20%] w-3 h-3 bg-red-500/30 rounded-full animate-float-slow" />
      <div className="absolute top-[40%] right-[5%] w-2 h-2 bg-red-500/20 rounded-full animate-float-medium" />
      
      {/* Partículas pequenas */}
      <div className="absolute top-[15%] left-[25%] w-1 h-1 bg-red-400/40 rounded-full animate-float-fast" />
      <div className="absolute top-[35%] left-[8%] w-1 h-1 bg-red-400/30 rounded-full animate-float-slow" />
      <div className="absolute top-[70%] left-[30%] w-1 h-1 bg-red-400/35 rounded-full animate-float-medium" />
      <div className="absolute top-[25%] right-[15%] w-1 h-1 bg-red-400/40 rounded-full animate-float-fast" />
      <div className="absolute top-[55%] right-[25%] w-1 h-1 bg-red-400/30 rounded-full animate-float-slow" />
      <div className="absolute top-[85%] right-[8%] w-1 h-1 bg-red-400/35 rounded-full animate-float-medium" />

      {/* Linhas decorativas */}
      <div className="absolute top-[30%] left-0 w-32 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent animate-pulse-slow" />
      <div className="absolute top-[65%] right-0 w-40 h-px bg-gradient-to-l from-transparent via-red-500/25 to-transparent animate-pulse-slow" style={{ animationDelay: '1s' }} />
    </div>
  );
};

export default FloatingParticles;
