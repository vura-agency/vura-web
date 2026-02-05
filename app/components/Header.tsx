"use client";

import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { FolderOpen, Home, LayoutGrid, Mail, Menu } from "lucide-react";
import { useState } from "react";

const navLinks: { href: string; label: string; Icon: LucideIcon }[] = [
  { href: "#inicio", label: "Inicio", Icon: Home },
  { href: "#servicios", label: "Servicios", Icon: LayoutGrid },
  { href: "#portafolio", label: "Portafolio", Icon: FolderOpen },
  { href: "#contacto", label: "Contacto", Icon: Mail },
];

const islandBase = "rounded-[2rem] border border-white/10 bg-[var(--background)]/70 backdrop-blur-xl";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop: vertical Dynamic Island a la izquierda */}
      <header className="fixed left-4 top-1/2 z-50 hidden -translate-y-1/2 lg:block xl:left-6" role="banner">
        <nav
          className={`flex flex-col items-center gap-2 py-5 ${islandBase}`}
          style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.06)" }}
          aria-label="Navegación principal"
        >
          <Link href="/" className="mb-2 px-5 transition opacity-90 hover:opacity-100" aria-label="Vura - Inicio">
            <Image src="/vura-logo.png" alt="" width={90} height={28} priority className="h-7 w-auto brightness-0 invert" />
          </Link>
          <div className="h-px w-8 bg-white/10" aria-hidden />
          <ul className="flex flex-col gap-0.5 py-2">
            {navLinks.map(({ href, label, Icon }) => (
              <li key={href}>
                <a
                  href={href}
                  className="flex justify-center rounded-full p-2.5 text-white/75 transition hover:bg-white/10 hover:text-white"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </a>
              </li>
            ))}
          </ul>
          <div className="h-px w-8 bg-white/10" aria-hidden />
          <a
            href="#contacto"
            className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1a1724] transition hover:bg-white/95"
            aria-label="Contactar"
          >
            <Mail className="h-5 w-5" strokeWidth={2} />
          </a>
        </nav>
      </header>

      {/* Móvil: Dynamic Island pill en la parte superior (safe-area para notch) */}
      <header
        className="fixed left-3 right-3 top-[max(0.75rem,env(safe-area-inset-top))] z-50 sm:left-1/2 sm:right-auto sm:w-auto sm:max-w-[280px] sm:-translate-x-1/2 lg:hidden"
        role="banner"
      >
        <nav
          className={`flex min-h-[44px] items-center justify-between gap-3 px-4 py-2.5 ${islandBase}`}
          style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.06)" }}
          aria-label="Navegación principal"
        >
          <Link href="/" className="shrink-0 transition opacity-90 hover:opacity-100" aria-label="Vura - Inicio">
            <Image src="/vura-logo.png" alt="" width={80} height={24} priority className="h-6 w-auto brightness-0 invert" />
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 min-h-[44px] min-w-[44px] items-center justify-center rounded-full text-white/80 transition hover:bg-white/10 hover:text-white"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            <Menu className="h-5 w-5" strokeWidth={2} />
          </button>
        </nav>
        {mobileOpen && (
          <div
            id="mobile-nav"
            className="absolute left-0 right-0 top-full mt-2 flex flex-col gap-0.5 rounded-2xl border border-white/10 bg-[var(--background)]/95 py-3 backdrop-blur-xl sm:left-1/2 sm:right-auto sm:w-64 sm:-translate-x-1/2"
            style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.3)" }}
          >
            {navLinks.map(({ href, label, Icon }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="flex min-h-[44px] items-center justify-center gap-3 px-6 py-2.5 text-white/80 transition hover:bg-white/10 hover:text-white"
                aria-label={label}
              >
                <Icon className="h-5 w-5 shrink-0" strokeWidth={1.8} />
              </a>
            ))}
            <div className="my-1 h-px bg-white/10" />
            <a
              href="#contacto"
              onClick={() => setMobileOpen(false)}
              className="mx-3 flex min-h-[44px] items-center justify-center rounded-full bg-white text-[#1a1724]"
              aria-label="Contactar"
            >
              <Mail className="h-5 w-5" strokeWidth={2} />
            </a>
          </div>
        )}
      </header>
    </>
  );
}
