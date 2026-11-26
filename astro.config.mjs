import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import alpinejs from "@astrojs/alpinejs";
import sitemap from "@astrojs/sitemap";

// Web estática lista para Netlify (output: 'static')
export default defineConfig({
  output: "static",
  site: "https://aoveyco.com",

  // Español en la raíz (/) e inglés bajo /en/. Sin prefijo para el idioma por defecto.
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [
    alpinejs(),
    sitemap({
      // /gracias/ es funcional (destino del formulario), no debe indexarse
      filter: (page) => !/\/(gracias|thank-you)\/$/.test(page),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
