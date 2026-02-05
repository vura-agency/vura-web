"use client";

import type { ClientePortafolio } from "@/app/lib/portfolio";
import { etiquetasServicio } from "@/app/lib/portfolio";

interface PortfolioCardProps {
  cliente: ClientePortafolio;
  onVerDetalle: (cliente: ClientePortafolio) => void;
}

export default function PortfolioCard({ cliente, onVerDetalle }: PortfolioCardProps) {
  const tiposUnicos = [...new Set(cliente.trabajos.map((t) => t.tipo))];

  return (
    <article
      id={`cliente-${cliente.slug}`}
      className="card-glow group rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-[var(--vura-light)]/30 hover:bg-white/[0.06] sm:p-6"
    >
      <div className="mb-4 flex flex-wrap gap-2">
        {tiposUnicos.map((tipo) => (
          <span
            key={tipo}
            className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-[var(--vura-light)]"
          >
            {etiquetasServicio[tipo]}
          </span>
        ))}
      </div>
      <h3 className="text-lg font-semibold text-white">{cliente.nombre}</h3>
      <p className="mb-1 text-sm text-[var(--vura-light)]">{cliente.industria}</p>
      <p className="mb-6 text-sm leading-relaxed text-[var(--foreground-muted)]">{cliente.resumen}</p>
      <button
        type="button"
        onClick={() => onVerDetalle(cliente)}
        className="text-sm font-medium text-[var(--vura-light)] underline-offset-2 hover:text-white hover:underline"
      >
        Ver detalle del proyecto →
      </button>
    </article>
  );
}
