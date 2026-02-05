"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface IntroScreenProps {
  onComplete: () => void;
}

export default function IntroScreen({ onComplete }: IntroScreenProps) {
  const [phase, setPhase] = useState<"visible" | "out">("visible");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("out"), 2800);
    const t2 = setTimeout(onComplete, 3800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1a1724] transition-opacity duration-700 ease-out"
      style={{ opacity: phase === "out" ? 0 : 1 }}
      aria-hidden={phase === "out"}
    >
      <div className="intro-logo flex flex-col items-center gap-4">
        <Image
          src="/vura-logo.png"
          alt="Vura"
          width={160}
          height={48}
          priority
          className="h-12 w-auto brightness-0 invert md:h-14"
        />
        <span className="text-[10px] uppercase tracking-[0.35em] text-white/50">
          Elevating Digital Infrastructure
        </span>
      </div>
    </div>
  );
}
