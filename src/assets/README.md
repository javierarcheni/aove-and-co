# `src/assets` — imágenes del proyecto

Pon aquí tus imágenes reales. Astro las optimiza con `astro:assets`.

```
src/assets/
  hero/          → imagen principal (olivar, botella, almazara)
  productos/     → Picual, Arbequina, Coupage, hostelería
  nosotros/      → finca, equipo, almazara
  README.md
```

## Cómo usar

```astro
---
import { Image } from 'astro:assets';
import heroOlivar from '../assets/hero/olivar.jpg';
---

<Image
  src={heroOlivar}
  alt="Olivar de cosecha temprana AOVE & Co"
  widths={[480, 800, 1200]}
  sizes="(max-width: 768px) 100vw, 50vw"
  format="webp"
  loading="eager"
/>
```

## Recomendaciones

- **Hero:** JPG 1600px, `< 300KB`, `loading="eager"`
- **Productos/secciones:** JPG/WebP 800–1200px, `loading="lazy"`
- **Logos/iconos:** SVG en `src/assets/` o `public/` si no necesitan optimización
- **Fotos reales:** ponlas en `hero/`, `productos/`, `nosotros/` y borra los `*.svg` de ejemplo cuando las tengas
- **Alt en español:** descriptivo, p. ej. `Botella Picual cosecha temprana`
- **Public vs assets:** `public/` solo para `favicon.svg`, `robots.txt`, archivos que deben mantener URL fija
