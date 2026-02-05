"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Cpu, Palette, Play, TrendingUp } from "lucide-react";
import Header from "./components/Header";
import HeroHeadline from "./components/HeroHeadline";
import HeroVisual from "./components/HeroVisual";
import IntroScreen from "./components/IntroScreen";
import PortfolioCard from "./components/PortfolioCard";
import PortfolioDetail from "./components/PortfolioDetail";
import ScrollIndicator from "./components/ScrollIndicator";
import { clientesPortafolio, type ClientePortafolio } from "./lib/portfolio";

export default function Home() {
  const [clienteDetalle, setClienteDetalle] = useState<ClientePortafolio | null>(null);
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      {!introDone && <IntroScreen onComplete={() => setIntroDone(true)} />}
      <div
        className="min-h-screen"
        style={{
          opacity: introDone ? 1 : 0,
          pointerEvents: introDone ? "auto" : "none",
          transition: "opacity 0.6s ease-out",
        }}
      >
        <Header />
        <main className="min-w-0 overflow-x-hidden pt-[calc(4.25rem+env(safe-area-inset-top,0px))] sm:pt-[calc(4.5rem+env(safe-area-inset-top,0px))] lg:pt-0 lg:pl-[8.5rem]">
        {/* Hero - contenido + imagen real */}
        <section id="inicio" className="relative min-h-[80vh] px-4 pt-16 pb-16 sm:min-h-[85vh] sm:px-6 sm:pt-24 sm:pb-20 md:pt-28 md:pb-24 lg:min-h-[85vh] lg:px-6 lg:pt-32 lg:pb-28">
          <HeroVisual />
          <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="max-w-2xl text-center lg:text-left">
            <HeroHeadline />
            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-[var(--foreground-muted)] sm:mt-8 sm:text-base md:text-lg animate-fade-up" style={{ animationDelay: "0.3s", opacity: 0, animationFillMode: "forwards" }}>
              Sistemas a medida + diseño UX/UI + marketing de resultados. Un solo aliado para
              construir tu infraestructura digital y hacerla crecer.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-2 animate-fade-up sm:mt-10 sm:gap-3 lg:justify-start" style={{ animationDelay: "0.45s", opacity: 0, animationFillMode: "forwards" }}>
              <a
                href="#servicios"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-[#1a1724] shadow-[0_0_25px_rgba(255,255,255,0.2)] transition hover:bg-white/95 hover:shadow-[0_0_35px_rgba(255,255,255,0.3)] sm:px-5"
              >
                Ver servicios
                <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2} />
              </a>
              <a
                href="#portafolio"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/10 sm:px-5"
              >
                <Play className="h-4 w-4 shrink-0" strokeWidth={2} />
                Ver portafolio
              </a>
            </div>
            <p className="mt-12 text-xs text-[var(--foreground-muted)] sm:mt-16 animate-fade-up" style={{ animationDelay: "0.6s", opacity: 0, animationFillMode: "forwards" }}>
              Confían en nosotros empresas que buscan transformación digital
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-white/40 animate-fade-up sm:mt-6 sm:gap-x-8 lg:justify-start md:gap-x-12" style={{ animationDelay: "0.7s", opacity: 0, animationFillMode: "forwards" }}>
              {["Retail", "Servicios", "Ecommerce", "Startups", "PYMEs", "Empresas"].map((name) => (
                <span key={name}>{name}</span>
              ))}
            </div>
            </div>
            <div className="relative mt-8 sm:mt-0">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-[var(--vura)]/20 to-transparent blur-2xl sm:-inset-4" aria-hidden />
              <div className="relative overflow-hidden rounded-xl border border-white/10 shadow-2xl sm:rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80"
                  alt="Dashboard y datos - soluciones digitales"
                  width={900}
                  height={600}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
          <ScrollIndicator />
        </section>

        {/* Servicios - stats + texto + cards con glow */}
        <section id="servicios" className="relative py-16 sm:py-20 md:py-24 lg:py-28">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden />
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mb-12 grid grid-cols-2 gap-4 sm:gap-6 sm:mb-16 md:mb-20 md:grid-cols-4 md:gap-8 lg:gap-12">
              {[
                { value: "+50", label: "Proyectos" },
                { value: "100%", label: "Integral" },
                { value: "24/7", label: "Soporte" },
                { value: "1", label: "Solo aliado" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl" style={{ textShadow: "0 0 40px rgba(107,91,122,0.4)" }}>
                    {stat.value}
                  </div>
                  <div className="mt-0.5 text-[10px] uppercase tracking-wider text-[var(--foreground-muted)] sm:mt-1 sm:text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:gap-12 sm:px-6 lg:grid-cols-12 lg:gap-20">
            <div className="text-center lg:col-span-4 lg:pt-8 lg:text-left">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-[var(--vura-light)] sm:mb-4">
                Qué hacemos
              </p>
              <h2 className="mb-4 text-xl font-semibold leading-tight text-white sm:mb-6 sm:text-2xl md:text-3xl">
                Ecosistema integral: desarrollo, diseño y crecimiento
              </h2>
              <p className="max-w-sm text-sm text-[var(--foreground-muted)] sm:text-base">
                Un solo aliado para sistemas, experiencia de usuario y marketing de resultados.
              </p>
            </div>
            <div className="grid gap-4 sm:gap-6 lg:col-span-8 sm:grid-cols-2 md:grid-cols-3">
              <div className="card-glow group rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-[var(--vura-light)]/40 hover:bg-white/[0.06] sm:p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--vura)]/20 text-[var(--vura-light)] transition group-hover:bg-[var(--vura)]/30">
                  <Cpu className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="mb-2 font-semibold text-white">Sistemas a medida</h3>
                <p className="text-sm leading-relaxed text-[var(--foreground-muted)]">
                  Plataformas, CRMs y aplicaciones web que optimizan tu operación.
                </p>
              </div>
              <div className="card-glow group rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-[var(--vura-light)]/40 hover:bg-white/[0.06] sm:p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--vura)]/20 text-[var(--vura-light)] transition group-hover:bg-[var(--vura)]/30">
                  <Palette className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="mb-2 font-semibold text-white">Diseño UX/UI</h3>
                <p className="text-sm leading-relaxed text-[var(--foreground-muted)]">
                  Interfaces limpias y coherentes con tu marca.
                </p>
              </div>
              <div className="card-glow group rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-[var(--vura-light)]/40 hover:bg-white/[0.06] sm:p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--vura)]/20 text-[var(--vura-light)] transition group-hover:bg-[var(--vura)]/30">
                  <TrendingUp className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="mb-2 font-semibold text-white">Marketing de resultados</h3>
                <p className="text-sm leading-relaxed text-[var(--foreground-muted)]">
                  Estrategias con datos para tráfico y conversiones.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cómo trabajamos - imagen + texto para romper estilo genérico */}
        <section className="relative py-16 sm:py-20 md:py-24 lg:py-28">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden />
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 sm:gap-14 sm:px-6 lg:grid-cols-2 lg:gap-20">
            <div className="relative order-2 lg:order-1">
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="Trabajo en equipo y desarrollo"
                  width={800}
                  height={533}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-[var(--vura-light)]">
                Cómo trabajamos
              </p>
              <h2 className="mb-4 text-xl font-semibold leading-tight text-white sm:mb-6 sm:text-2xl md:text-3xl">
                Un solo equipo para tu transformación digital
              </h2>
              <p className="mb-6 max-w-lg text-sm text-[var(--foreground-muted)] sm:mb-8 sm:text-base">
                Coordinamos desarrollo, diseño y marketing desde el primer día. Sin fragmentar proveedores ni presupuestos: una estrategia, un roadmap y resultados medibles.
              </p>
              <ul className="space-y-3 text-sm text-white/90">
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--vura-light)]" />
                  Diagnóstico y objetivos alineados a negocio
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--vura-light)]" />
                  Entregas incrementales con métricas claras
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--vura-light)]" />
                  Un punto de contacto y comunicación transparente
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Portafolio - por lados: título izquierda, grid derecha. Centrado en móvil */}
        <section id="portafolio" className="relative py-16 sm:py-20 md:py-24 lg:py-28">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden />
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:gap-14 sm:px-6 lg:grid-cols-12 lg:gap-20">
            <div className="text-center lg:col-span-4 lg:text-left lg:pt-8">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-[var(--vura-light)] sm:mb-4">
                Portafolio
              </p>
              <h2 className="mb-4 text-xl font-semibold leading-tight text-white sm:mb-6 sm:text-2xl md:text-3xl">
                Clientes y proyectos
              </h2>
              <p className="mx-auto max-w-sm text-sm text-[var(--foreground-muted)] sm:text-base lg:mx-0">
                Redes, páginas web, ecommerce y sistemas a medida.
              </p>
            </div>
            <div className="mb-10 grid gap-4 sm:mb-12 sm:grid-cols-2 sm:gap-6 lg:col-span-8 lg:grid-cols-2">
              {clientesPortafolio.map((cliente) => (
                <PortfolioCard
                  key={cliente.id}
                  cliente={cliente}
                  onVerDetalle={setClienteDetalle}
                />
              ))}
            </div>

            {clienteDetalle && (
              <div className="transition-opacity duration-300 lg:col-span-12">
                <PortfolioDetail cliente={clienteDetalle} onCerrar={() => setClienteDetalle(null)} />
              </div>
            )}
          </div>
        </section>

        {/* CTA - impacto visual: anillo + glow */}
        <section id="contacto" className="relative py-16 sm:py-20 md:py-24 lg:py-28">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden />
          <div className="relative mx-auto max-w-2xl px-4 text-center sm:px-6">
            <div className="pointer-events-none absolute -inset-4 rounded-full opacity-80 sm:-inset-8" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(107,91,122,0.25) 0%, transparent 65%)" }} />
            <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-8 sm:rounded-3xl sm:p-10 md:p-14">
              <div className="absolute inset-0 rounded-3xl ring-1 ring-[var(--vura-light)]/20 ring-inset" aria-hidden />
              <h2 className="mb-3 text-xl font-semibold leading-tight text-white sm:mb-4 sm:text-2xl md:text-3xl">
                ¿Listo para elevar tu infraestructura digital?
              </h2>
              <p className="mb-8 text-sm text-[var(--foreground-muted)] sm:mb-10 sm:text-base">
                Un solo punto de contacto. Desarrollo, diseño y marketing alineados con tus objetivos.
              </p>
              <a
                href="mailto:hola@vura.com"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#1a1724] shadow-[0_0_30px_rgba(255,255,255,0.15)] transition hover:bg-white/95 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] sm:px-8"
              >
                Contactar
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </a>
            </div>
          </div>
        </section>

        {/* Footer - minimalista, línea gradiente */}
        <footer className="relative py-10 sm:py-12 md:py-14">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden />
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-4 text-center sm:gap-6 sm:px-6 md:flex-row md:text-left">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/vura-logo.png"
                alt="Vura"
                width={100}
                height={30}
                className="h-7 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-xs text-[var(--foreground-muted)] sm:text-sm">
              Elevating Digital Infrastructure · Sistemas a medida + Marketing de resultados
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <a href="#inicio" className="text-sm text-white/80 hover:text-white">
                Inicio
              </a>
              <a href="#portafolio" className="text-sm text-white/80 hover:text-white">
                Portafolio
              </a>
              <a href="#contacto" className="text-sm text-white/80 hover:text-white">
                Contacto
              </a>
            </div>
          </div>
        </footer>
      </main>
      </div>
    </>
  );
}
