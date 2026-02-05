"use client";

export default function HeroVisual() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* Orbes de gradiente animados */}
      <div
        className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-[120px] animate-float-slow"
        style={{
          background: "radial-gradient(circle, rgba(107, 91, 122, 0.5) 0%, rgba(107, 91, 122, 0.2) 40%, transparent 70%)",
        }}
      />
      <div
        className="absolute right-1/4 top-1/2 h-[350px] w-[350px] rounded-full opacity-30 blur-[100px] animate-float"
        style={{
          background: "radial-gradient(circle, rgba(143, 125, 158, 0.4) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute bottom-1/4 left-1/4 h-[280px] w-[280px] rounded-full opacity-25 blur-[80px] animate-float-slow"
        style={{
          background: "radial-gradient(circle, rgba(107, 91, 122, 0.45) 0%, transparent 65%)",
        }}
      />
      {/* Red / nodos (infraestructura digital) */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.12]"
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="50%" stopColor="rgba(143,125,158,0.6)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Líneas de conexión */}
        <line x1="200" y1="200" x2="400" y2="280" stroke="url(#lineGrad)" strokeWidth="0.5" className="animate-pulse" style={{ animationDuration: "3s" }} />
        <line x1="400" y1="280" x2="600" y2="200" stroke="url(#lineGrad)" strokeWidth="0.5" style={{ animationDelay: "0.5s" }} />
        <line x1="400" y1="280" x2="400" y2="400" stroke="url(#lineGrad)" strokeWidth="0.5" style={{ animationDelay: "1s" }} />
        <line x1="250" y1="450" x2="400" y2="400" stroke="url(#lineGrad)" strokeWidth="0.5" />
        <line x1="550" y1="450" x2="400" y2="400" stroke="url(#lineGrad)" strokeWidth="0.5" />
        {/* Nodos */}
        <circle cx="200" cy="200" r="3" fill="rgba(143,125,158,0.8)" filter="url(#glow)" className="animate-pulse" />
        <circle cx="400" cy="280" r="4" fill="rgba(255,255,255,0.4)" filter="url(#glow)" className="animate-pulse" style={{ animationDuration: "2s" }} />
        <circle cx="600" cy="200" r="3" fill="rgba(143,125,158,0.8)" filter="url(#glow)" />
        <circle cx="400" cy="400" r="3" fill="rgba(143,125,158,0.6)" filter="url(#glow)" />
        <circle cx="250" cy="450" r="2" fill="rgba(143,125,158,0.5)" />
        <circle cx="550" cy="450" r="2" fill="rgba(143,125,158,0.5)" />
      </svg>
    </div>
  );
}
