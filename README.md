# AOVE & Co — AOVE y Compañía

Web oficial estática: videopódcast + building in public + catas en Valencia + distribución en Levante. Sin carrito: convierte a suscripción, lista de espera y contacto profesional.

## Arquitectura de información

```
/ → Home hub editorial
/videopodcast → Listado filtrable (Entrevista / Cultura / Cata)
/el-camino → Timeline building in public hacia tienda en Valencia
/eventos → Formato de catas + próxima + pasadas + reserva / lista de espera
/productores → Propuesta para almazaras + form cualificado + bloque Horeca
/manifiesto → Historia, por qué el puente origen→Levante, visión
```

## Sistema de diseño

- **Colores del logo:** lima `#ADDD10` (acento/CTA), verde noche `#182311` (fondo), crema `#F3F0E9` (texto).
- **Tipografías:** `Fraunces` (display serif editorial, clase `.font-display`) + `Inter` (texto).
- **Tono:** cercano, divulgativo, transparente. Nada de lujo inaccesible ni folclore.
- **Componentes:** `SectionHeading`, `HeroHome`, `VideopodcastDestacado` (lite-youtube), `BitacoraPreview`, `EventosPreview` (form Netlify), `ProductoresBanner`, `Navbar` (rutas + Alpine), `Footer`.
- **Datos:** `src/data/contenido.ts` (episodios, bitácora, eventos). Edita ahí para publicar.

## Conversión (sin e-commerce)

1. Newsletter / YouTube / Spotify → forms `newsletter-*` + enlaces en `/videopodcast`.
2. Catas Valencia → forms `lista-espera-catas` + `reserva-evento` (Netlify Forms).
3. Productores / Horeca → forms `productores` + `horeca` en `/productores`.

## Comandos

```sh
npm install
npm run dev
npm run build   # → dist/
```

Netlify: build `npm run build`, publish `dist`. Forms ya llevan `data-netlify="true"`.
Sustituye los `youtubeId: 'dQw4w9WgXcQ'` de ejemplo y los `href="#"` por URLs reales.
