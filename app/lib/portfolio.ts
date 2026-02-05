export type ServicioPortafolio =
  | "redes-sociales"
  | "pagina-web"
  | "ecommerce"
  | "sistema";

export interface EnlaceCliente {
  tipo: "web" | "instagram" | "facebook" | "linkedin" | "twitter" | "otro";
  label: string;
  url: string;
}

export interface TrabajoRealizado {
  tipo: ServicioPortafolio;
  titulo: string;
  descripcion: string;
  url?: string;
  imagen?: string;
}

export interface ClientePortafolio {
  id: string;
  nombre: string;
  slug: string;
  industria: string;
  resumen: string;
  imagen?: string;
  trabajos: TrabajoRealizado[];
  enlaces: EnlaceCliente[];
}

export const clientesPortafolio: ClientePortafolio[] = [
  {
    id: "1",
    nombre: "Ejemplo Cliente A",
    slug: "ejemplo-cliente-a",
    industria: "Retail",
    resumen: "Transformación digital integral: tienda online, redes y sistema de inventario.",
    trabajos: [
      {
        tipo: "ecommerce",
        titulo: "Tienda online",
        descripcion: "Ecommerce con catálogo, carrito y pasarela de pago.",
        url: "https://ejemplo-a.com",
      },
      {
        tipo: "redes-sociales",
        titulo: "Gestión de redes",
        descripcion: "Estrategia y contenido para Instagram y Facebook.",
      },
      {
        tipo: "sistema",
        titulo: "Panel de inventario",
        descripcion: "Sistema interno para stock y pedidos.",
      },
    ],
    enlaces: [
      { tipo: "web", label: "Sitio web", url: "https://ejemplo-a.com" },
      { tipo: "instagram", label: "Instagram", url: "https://instagram.com/ejemplo-a" },
    ],
  },
  {
    id: "2",
    nombre: "Ejemplo Cliente B",
    slug: "ejemplo-cliente-b",
    industria: "Servicios profesionales",
    resumen: "Landing, presencia en redes y CRM a medida.",
    trabajos: [
      {
        tipo: "pagina-web",
        titulo: "Landing y blog",
        descripcion: "Sitio corporativo con formularios de contacto y blog SEO.",
        url: "https://ejemplo-b.com",
      },
      {
        tipo: "redes-sociales",
        titulo: "LinkedIn y redes",
        descripcion: "Contenido B2B y generación de leads.",
      },
      {
        tipo: "sistema",
        titulo: "CRM interno",
        descripcion: "Gestión de clientes y pipeline de ventas.",
      },
    ],
    enlaces: [
      { tipo: "web", label: "Sitio web", url: "https://ejemplo-b.com" },
      { tipo: "linkedin", label: "LinkedIn", url: "https://linkedin.com/company/ejemplo-b" },
    ],
  },
  {
    id: "3",
    nombre: "Ejemplo Cliente C",
    slug: "ejemplo-cliente-c",
    industria: "Gastronomía",
    resumen: "Web, redes sociales y sistema de reservas y pedidos.",
    trabajos: [
      {
        tipo: "pagina-web",
        titulo: "Sitio web",
        descripcion: "Web con menú, galería y reservas online.",
        url: "https://ejemplo-c.com",
      },
      {
        tipo: "redes-sociales",
        titulo: "Instagram y Facebook",
        descripcion: "Contenido visual y promociones.",
      },
      {
        tipo: "sistema",
        titulo: "Reservas y pedidos",
        descripcion: "Sistema de reservas y pedidos para delivery.",
      },
    ],
    enlaces: [
      { tipo: "web", label: "Sitio web", url: "https://ejemplo-c.com" },
      { tipo: "instagram", label: "Instagram", url: "https://instagram.com/ejemplo-c" },
      { tipo: "facebook", label: "Facebook", url: "https://facebook.com/ejemplo-c" },
    ],
  },
];

export const etiquetasServicio: Record<ServicioPortafolio, string> = {
  "redes-sociales": "Redes sociales",
  "pagina-web": "Página web",
  ecommerce: "Ecommerce",
  sistema: "Sistema a medida",
};
