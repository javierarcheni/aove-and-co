import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import alpinejs from '@astrojs/alpinejs';
import sitemap from '@astrojs/sitemap';

// Web estática lista para Netlify (output: 'static')
export default defineConfig({
  output: 'static',
  site: 'https://aove-and-co.netlify.app',
  integrations: [
    alpinejs(),
    sitemap({
      // Solo lo enlazado e indexable; el resto lleva noindex hasta su lanzamiento
      filter: (page) =>
        !/\/gracias\/$/.test(page) &&
        !/\/(videopodcast|el-camino|eventos|productores|manifiesto)\/?$/.test(page),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
