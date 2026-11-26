import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import alpinejs from '@astrojs/alpinejs';
import sitemap from '@astrojs/sitemap';

// Web estática lista para Netlify (output: 'static')
export default defineConfig({
  output: 'static',
  site: 'https://aoveyco.com',
  integrations: [
    alpinejs(),
    sitemap({
      // /gracias/ es funcional (destino del formulario), no debe indexarse
      filter: (page) => !/\/gracias\/$/.test(page),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
