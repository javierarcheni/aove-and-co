export const languages = {
  es: "Español",
  en: "English",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "es";

/**
 * Mapa de rutas por página. Es la única fuente de verdad para:
 * - el selector de idioma
 * - los hreflang de cada página
 * - los enlaces internos del footer
 *
 * Al añadir una página nueva, añade aquí su par de rutas y el resto funciona solo.
 */
export const routes = {
  home: { es: "/", en: "/en/" },
  legal: { es: "/aviso-legal/", en: "/en/legal-notice/" },
  privacy: { es: "/privacidad/", en: "/en/privacy/" },
  cookies: { es: "/cookies/", en: "/en/cookies/" },
  thanks: { es: "/gracias/", en: "/en/thank-you/" },
} as const;

export type PageId = keyof typeof routes;

/** Normaliza cualquier ruta a la forma `/algo/` (siempre con barra final). */
export function normalizePath(pathname: string): string {
  if (!pathname) return "/";
  const withLeading = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return withLeading.endsWith("/") ? withLeading : `${withLeading}/`;
}

/** Deduce el idioma a partir de la URL actual. */
export function getLangFromUrl(url: URL | string): Lang {
  const pathname = typeof url === "string" ? url : url.pathname;
  const path = normalizePath(pathname);

  return path === "/en/" || path.startsWith("/en/") ? "en" : "es";
}

/** Devuelve la ruta de una página en un idioma concreto. */
export function pathFor(page: PageId, lang: Lang): string {
  return routes[page][lang];
}

/** Devuelve el id de página a partir de su ruta, o null si no está mapeada. */
export function getPageFromPath(pathname: string): PageId | null {
  const path = normalizePath(pathname);

  for (const [id, paths] of Object.entries(routes)) {
    if (paths.es === path || paths.en === path) return id as PageId;
  }

  return null;
}

/** Ruta equivalente de la página actual en el otro idioma. */
export function alternatePath(pathname: string, lang: Lang): string {
  const page = getPageFromPath(pathname);

  if (page) return pathFor(page, lang);

  // Fallback para páginas aún no mapeadas: intercambia el prefijo /en.
  const path = normalizePath(pathname);

  return lang === "en" ? `/en${path}` : path.replace(/^\/en\//, "/");
}

/** Ruta canónica absoluta (con dominio) para una ruta dada. */
export function absoluteUrl(site: URL | undefined, path: string): string {
  const origin = site ? site.origin : "https://aoveyco.com";

  return `${origin}${normalizePath(path)}`;
}
