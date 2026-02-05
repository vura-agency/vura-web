"use client";

import { Camera, ExternalLink, Globe, Linkedin, MessageCircle, Share2 } from "lucide-react";
import type { ClientePortafolio } from "@/app/lib/portfolio";
import { etiquetasServicio } from "@/app/lib/portfolio";

interface PortfolioDetailProps {
  cliente: ClientePortafolio | null;
  onCerrar: () => void;
}

function IconEnlace({ tipo }: { tipo: string }) {
  const className = "h-4 w-4 shrink-0";
  switch (tipo) {
    case "web":
      return <Globe className={className} />;
    case "instagram":
      return <Camera className={className} />;
    case "facebook":
      return <Share2 className={className} />;
    case "linkedin":
      return <Linkedin className={className} />;
    case "twitter":
      return <MessageCircle className={className} />;
    default:
      return <ExternalLink className={className} />;
  }
}

export default function PortfolioDetail({ cliente, onCerrar }: PortfolioDetailProps) {
  if (!cliente) return null;

  return (
    <div className="rounded-xl border border-white/15 bg-[var(--background-card)] p-4 shadow-xl sm:rounded-2xl sm:p-6 md:p-8">
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-white">{cliente.nombre}</h3>
          <p className="text-sm text-[var(--vura-light)]">{cliente.industria}</p>
        </div>
        <button
          type="button"
          onClick={onCerrar}
          className="rounded-lg px-3 py-1.5 text-sm font-medium text-[var(--vura-light)] hover:bg-white/10 hover:text-white"
        >
          Cerrar
        </button>
      </div>

      <p className="mb-8 text-[var(--foreground-muted)]">{cliente.resumen}</p>

      <section className="mb-8">
        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--vura-light)]">
          Lo que realizamos
        </h4>
        <ul className="space-y-4">
          {cliente.trabajos.map((trabajo) => (
            <li key={trabajo.tipo + trabajo.titulo} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <span className="mb-1 block text-xs font-medium text-[var(--vura-light)]">
                {etiquetasServicio[trabajo.tipo]}
              </span>
              <p className="font-medium text-white">{trabajo.titulo}</p>
              <p className="mt-1 text-sm text-[var(--foreground-muted)]">{trabajo.descripcion}</p>
              {trabajo.url && (
                <a
                  href={trabajo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm font-medium text-[var(--vura-light)] hover:text-white hover:underline"
                >
                  Ver en vivo →
                </a>
              )}
            </li>
          ))}
        </ul>
      </section>

      {cliente.enlaces.length > 0 && (
        <section>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--vura-light)]">
            Redes y enlaces
          </h4>
          <div className="flex flex-wrap gap-3">
            {cliente.enlaces.map((enlace) => (
              <a
                key={enlace.url}
                href={enlace.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-[var(--vura-light)] hover:bg-white/10"
              >
                <IconEnlace tipo={enlace.tipo} />
                {enlace.label}
              </a>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
