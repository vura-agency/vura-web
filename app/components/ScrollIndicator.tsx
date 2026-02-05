"use client";

import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <a
      href="#servicios"
      className="absolute bottom-4 left-1/2 flex min-h-[44px] min-w-[44px] -translate-x-1/2 flex-col items-center justify-center gap-1 text-white/50 transition hover:text-white/80 sm:bottom-8 sm:gap-2"
      aria-label="Scroll a servicios"
    >
      <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
      <span className="animate-bounce">
        <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2} />
      </span>
    </a>
  );
}
