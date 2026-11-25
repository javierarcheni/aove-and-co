import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import alpinejs from '@astrojs/alpinejs';

// Web estática lista para Netlify (output: 'static')
export default defineConfig({
  output: 'static',
  site: 'https://aove-and-co.netlify.app',
  integrations: [alpinejs()],
  vite: {
    plugins: [tailwindcss()],
  },
});
