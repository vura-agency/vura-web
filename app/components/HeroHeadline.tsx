"use client";

import { useEffect, useState } from "react";

const palabras = [
  "Infrastructure",
  "Crecimiento",
  "Resultados",
  "Sistemas",
  "Experiencia",
  "Visibilidad",
];

export default function HeroHeadline() {
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndice((i) => (i + 1) % palabras.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <h1 className="mb-4 text-3xl font-bold leading-[1.1] tracking-tight text-white sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl [perspective:1000px]">
      <span className="hero-line block overflow-hidden">
        <span className="hero-flip block animate-flip-in origin-bottom">
          Elevating Digital
        </span>
      </span>
      <span className="hero-line block overflow-hidden">
        <span className="hero-flip inline-block animate-flip-in origin-bottom rounded-lg bg-white px-1.5 py-0.5 text-[#1a1724] sm:px-2" style={{ animationDelay: "0.15s" }}>
          {palabras[indice]}
        </span>
      </span>
    </h1>
  );
}
