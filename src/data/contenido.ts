export type Episodio = {
  id: string;
  numero: number;
  titulo: string;
  categoria: 'Entrevista' | 'Cultura' | 'Cata';
  fecha: string;
  duracion: string;
  resumen: string;
  notas: string[];
  productor: { nombre: string; origen: string; enlace: string };
  youtubeId: string;
  spotify?: string;
  apple?: string;
};

export const episodios: Episodio[] = [
  {
    id: 'ep01-oro-tradicional',
    numero: 1,
    titulo: 'Oro Tradicional: lo que un Jaén honesto puede enseñar a Valencia',
    categoria: 'Entrevista',
    fecha: '2026-11-10',
    duracion: '42 min',
    resumen:
      'Visitamos a Oro Tradicional en Jaén para entender qué hay detrás de un AOVE bien hecho: cosecha temprana, molturación en horas y precio justo en origen. Sin tecnicismos elitistas.',
    notas: [
      'Por qué la aceituna verde da menos kilos pero mucho más aroma y picor.',
      'Qué preguntar en una almazara antes de confiar en una etiqueta.',
      'Cómo leer acidez, fecha de cosecha y variedad sin que te la cuelen.',
    ],
    productor: { nombre: 'Oro Tradicional', origen: 'Jaén', enlace: '#' },
    youtubeId: 'dQw4w9WgXcQ',
  },
  {
    id: 'ep02-cata-sin-miedo',
    numero: 2,
    titulo: 'Cata sin miedo: frutado, amargo y picante explicados en 20 minutos',
    categoria: 'Cata',
    fecha: '2026-11-17',
    duracion: '28 min',
    resumen:
      'Una cata guiada con pan de masa madre para aprender a distinguir un virgen extra real de un aceite plano. El episodio que nos piden en cada evento.',
    notas: [
      'El ritual de copa azul: calentar, oler, sorber y toser un poco.',
      'Defectos comunes: rancio, atrojado y por qué huelen a lo que huelen.',
      'Maridaje base: pan, tomate y huevo frito. Sin humo.',
    ],
    productor: { nombre: 'Selección AOVE & Co', origen: 'Varias almazaras', enlace: '/productores' },
    youtubeId: 'dQw4w9WgXcQ',
  },
  {
    id: 'ep03-precio-origen',
    numero: 3,
    titulo: 'Por qué un buen AOVE no puede costar 4 € (y por qué eso es buena noticia)',
    categoria: 'Cultura',
    fecha: '2026-11-24',
    duracion: '35 min',
    resumen:
      'Hablamos de costes reales: kilo de aceituna, rendimiento en almazara, botella y logística. Transparencia total para entender el precio justo.',
    notas: [
      'Del olivo a la botella: dónde se va cada euro.',
      'Cosecha temprana vs. tardía: matemáticas sin trampa.',
      'Qué significa pagar justo al productor en Levante.',
    ],
    productor: { nombre: 'Varios productores', origen: 'Jaén · Valencia', enlace: '/el-camino' },
    youtubeId: 'dQw4w9WgXcQ',
  },
];

export type EntradaBitacora = {
  fecha: string;
  hito: string;
  titulo: string;
  texto: string;
  estado: 'Hecho' | 'En curso' | 'Siguiente';
};

export const bitacora: EntradaBitacora[] = [
  {
    fecha: '2026-11-20',
    hito: 'Hito 04',
    titulo: 'Primera alianza cerrada con Jaén y ruta a Valencia',
    texto:
      'Acuerdo con Oro Tradicional para traer sus primeros lotes a Valencia. Aprendizaje: el transporte en frío y el bag-in-box para catas nos ahorran roturas y mantienen el frutado.',
    estado: 'Hecho',
  },
  {
    fecha: '2026-11-14',
    hito: 'Hito 03',
    titulo: 'Pop-up 01 validado: 34 personas, 0 botellas de postureo',
    texto:
      'Cata de tres AOVEs + pan de masa madre + queso artesano en Ruzafa. El 78% dejó email para el siguiente. Aprendizaje: la gente quiere oler y preguntar, no PowerPoints.',
    estado: 'Hecho',
  },
  {
    fecha: '2026-11-25',
    hito: 'Hito 05',
    titulo: 'Ahora: local en Valencia y newsletter semanal',
    texto:
      'Estamos visitando locales en Ruzafa y El Carmen para la futura tienda. Mientras tanto, el videopódcast y esta bitácora son la tienda: cada semana contamos números reales.',
    estado: 'En curso',
  },
];

export type Evento = {
  titulo: string;
  fecha: string;
  lugar: string;
  plazas: number;
  precio: string;
  descripcion: string;
  pasado?: boolean;
  asistencia?: string;
};

export const proximoEvento: Evento = {
  titulo: 'Cata pop-up 02: Tres AOVEs, un pan y cero humo',
  fecha: 'Sábado 13 dic · 12:00',
  lugar: 'Espacio singular en Ruzafa, Valencia (se confirma por email)',
  plazas: 24,
  precio: '18 € · incluye cata + maridaje',
  descripcion:
    'Picual temprano de Jaén, arbequina dulce y nuestro coupage & Co, con pan de masa madre, queso artesano y tomate de proximidad. Plazas limitadas de verdad.',
};

export const eventosPasados: Evento[] = [
  {
    titulo: 'Pop-up 01 · Ruzafa',
    fecha: 'Oct 2026',
    lugar: 'Ruzafa, Valencia',
    plazas: 34,
    precio: '—',
    descripcion: 'Tres AOVEs + maridaje base. 78% dejó email para repetir.',
    pasado: true,
    asistencia: '34 asistentes',
  },
  {
    titulo: 'Cata privada Horeca',
    fecha: 'Oct 2026',
    lugar: 'Valencia',
    plazas: 12,
    precio: '—',
    descripcion: 'Prueba con 3 restaurantes para carta de AOVEs en mesa.',
    pasado: true,
    asistencia: '3 restaurantes',
  },
];
