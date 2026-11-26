import type { Lang } from "./config";

const es = {
  // Nav
  "nav.homeLabel": "AOVE & Co — inicio",
  "nav.logoAlt": "AOVE & Co — AOVE y Compañía",
  "nav.language": "Idioma",

  // Meta
  "meta.home.title":
    "AOVE & Co — El AOVE, siempre mejor en compañía | Valencia",
  "meta.home.description":
    "Proyecto independiente en Valencia que acerca el AOVE real a las personas: aliado de marcas pequeñas, videopódcast, catas y camino comercial en el Levante.",
  "meta.thanks.title": "Gracias — AOVE & Co",
  "meta.thanks.description": "Mensaje recibido. Te respondemos en 48h.",
  "meta.legal.title": "Aviso legal — AOVE & Co",
  "meta.legal.description":
    "Aviso legal de AOVE & Co: titularidad, condiciones de uso y propiedad intelectual.",
  "meta.privacy.title": "Política de privacidad — AOVE & Co",
  "meta.privacy.description":
    "Cómo trata AOVE & Co tus datos: formulario de contacto, finalidades, derechos y conservación.",
  "meta.cookies.title": "Política de cookies — AOVE & Co",
  "meta.cookies.description":
    "Qué cookies y tecnologías usa AOVE & Co: solo técnicas y de seguridad, sin publicidad.",

  // Home
  "home.badge": "Proyecto en lanzamiento",
  "home.h1.lead": "El AOVE, siempre",
  "home.h1.highlight": "mejor en compañía.",
  "home.intro1":
    "Detrás de AOVE & Co. está Javier Archeni, una persona arrancando un proyecto con una idea muy clara: ser un aliado útil para los productores que hacen un buen AOVE.",
  "home.intro2":
    "No vengo a reinventar el aceite, porque ya hay productores y profesionales haciendo un trabajo increíble. Vengo a aportar valor donde más se necesita para salir a mercado: creando visibilidad y abriendo canales en Valencia y el Levante.",
  "home.intro3":
    "Empezamos en pequeño y en abierto: con contenido para darles voz, catas cercanas en Valencia para probar juntos y los primeros pasos comerciales, con el horizonte de construir algún día nuestro propio espacio físico.",
  "home.portraitAlt": "Javier Archeni, fundador de AOVE & Co",
  "home.portraitCaption": "Javier Archeni, AOVE & Co",
  "home.services.lead": "¿Y qué",
  "home.services.highlight": "hace AOVE & Co?",
  "home.services.subtitle":
    "Cuatro frentes en los que trabajo para acercar el buen AOVE a las personas.",
  "home.service1.title": "Comercialización y mercados",
  "home.service1.text":
    "Ayudo a productores y marcas a encontrar clientes: busco canales, hablo con comercios y hostelería y abro mercado para sus aceites.",
  "home.service2.title": "Selección y promoción",
  "home.service2.text":
    "Descubro aceites que merecen la pena y cuento los proyectos que hay detrás de cada botella.",
  "home.service3.title": "Experiencias y divulgación",
  "home.service3.text":
    "El aceite se entiende probándolo: organizo degustaciones y encuentros para descubrir matices y origen.",
  "home.service4.title": "Venta y distribución",
  "home.service4.text":
    "Facilito que buenos aceites lleguen a particulares y profesionales, en tienda, espacios y online.",
  "home.contact.eyebrow": "Contacto",
  "home.contact.title": "Me encantará saber de ti",
  "home.contact.text":
    "Si haces un buen aceite, si lo vendes o si simplemente te apasiona, escríbeme. Leo todo y respondo en 48h.",

  // Formulario
  "form.title": "Escríbeme directamente",
  "form.subtitle": "Deja tu mensaje aquí",
  "form.name": "Nombre",
  "form.namePlaceholder": "Tu nombre",
  "form.email": "Email",
  "form.emailPlaceholder": "tu@email.com",
  "form.message": "Mensaje",
  "form.messagePlaceholder":
    "Cuéntame: soy productor, tienda, hostelería… ¿qué haces y qué buscas?",
  "form.chars": "caracteres",
  "form.consentBefore": "He leído y acepto la",
  "form.consentLink": "política de privacidad",
  "form.submit": "Enviar mensaje",
  "form.honeypot": "Si eres humano, deja esto vacío:",
  "form.dataTitle": "Protección de datos",
  "form.dataBefore":
    "Responsable: Francisco Javier Archeni Sanz. Finalidad: gestionar tu consulta o propuesta. Legitimación: tu consentimiento al enviar este formulario. No se cederán datos a terceros salvo obligación legal o proveedores necesarios. Puedes ejercer tus derechos escribiendo a hola@aoveyco.com. Más información en la",
  "form.dataLink": "política de privacidad",

  // Gracias
  "thanks.title": "Mensaje",
  "thanks.titleHighlight": "recibido.",
  "thanks.text":
    "Gracias por escribir. Te leo yo personalmente y respondo en 48h.",
  "thanks.back": "Volver al inicio",

  // Footer
  "footer.instagram": "Instagram de AOVE & Co",
  "footer.tagline": "AOVE & Co — El AOVE, siempre mejor en compañía.",
  "footer.legalNav": "Páginas legales",
  "footer.legal": "Aviso legal",
  "footer.privacy": "Privacidad",
  "footer.cookies": "Cookies",

  // WhatsApp
  "wa.openLabel": "Escríbenos por WhatsApp",
  "wa.dialogLabel": "Contactar por WhatsApp",
  "wa.close": "Cerrar",
  "wa.p1Before": "Te atendemos por WhatsApp",
  "wa.p1Strong": "en cuanto nos sea posible",
  "wa.p1After": "; no siempre podemos responder al momento.",
  "wa.p2Before": "Para consultas extensas es preferible el",
  "wa.p2Link": "formulario de contacto",
  "wa.p3Before":
    "Al contactar por WhatsApp aceptas facilitar los datos personales que te solicitemos para atenderte (p. ej. nombre y motivo de la consulta). Más información en la",
  "wa.p3Link": "política de privacidad",
  "wa.cta": "Contactar por WhatsApp",
  "wa.message": "Hola, te escribo desde la web de AOVE & Co",

  // Legal
  "legal.eyebrow": "Legal",
  "legal.lastUpdate": "Última actualización: noviembre de 2026.",
} as const;

const en: Record<keyof typeof es, string> = {
  // Nav
  "nav.homeLabel": "AOVE & Co — home",
  "nav.logoAlt": "AOVE & Co — AOVE y Compañía",
  "nav.language": "Language",

  // Meta
  "meta.home.title":
    "AOVE & Co — Great olive oil is always better in company | Valencia",
  "meta.home.description":
    "An independent project in Valencia bringing real extra virgin olive oil closer to people: an ally for small brands, video podcast, tastings and a commercial path across the Levante region.",
  "meta.thanks.title": "Thank you — AOVE & Co",
  "meta.thanks.description": "Message received. We will reply within 48 hours.",
  "meta.legal.title": "Legal notice — AOVE & Co",
  "meta.legal.description":
    "AOVE & Co legal notice: ownership, terms of use and intellectual property.",
  "meta.privacy.title": "Privacy policy — AOVE & Co",
  "meta.privacy.description":
    "How AOVE & Co handles your data: contact form, purposes, rights and retention.",
  "meta.cookies.title": "Cookie policy — AOVE & Co",
  "meta.cookies.description":
    "Which cookies and technologies AOVE & Co uses: technical and security only, no advertising.",

  // Home
  "home.badge": "Project launching",
  "home.h1.lead": "Great olive oil is always",
  "home.h1.highlight": "better in company.",
  "home.intro1":
    "Behind AOVE & Co. is Javier Archeni, one person starting a project with a very clear idea: to be a useful ally for producers who make good extra virgin olive oil.",
  "home.intro2":
    "I'm not here to reinvent olive oil — there are already producers and professionals doing incredible work. I'm here to add value where it matters most when going to market: building visibility and opening channels in Valencia and the Levante region.",
  "home.intro3":
    "We're starting small and in the open: with content to give them a voice, tastings in Valencia to try things together and the first commercial steps, with the goal of one day building our own physical space.",
  "home.portraitAlt": "Javier Archeni, founder of AOVE & Co",
  "home.portraitCaption": "Javier Archeni, AOVE & Co",
  "home.services.lead": "So what",
  "home.services.highlight": "does AOVE & Co. do?",
  "home.services.subtitle":
    "Four areas where I work to bring good extra virgin olive oil closer to people.",
  "home.service1.title": "Sales and markets",
  "home.service1.text":
    "I help producers and brands find customers: I look for channels, talk to retailers and hospitality and open markets for their oils.",
  "home.service2.title": "Curation and promotion",
  "home.service2.text":
    "I discover oils worth trying and tell the stories behind every bottle.",
  "home.service3.title": "Experiences and education",
  "home.service3.text":
    "Olive oil is understood by tasting it: I organise tastings and gatherings to explore aromas and origin.",
  "home.service4.title": "Retail and distribution",
  "home.service4.text":
    "I help good oils reach individuals and professionals — in shops, venues and online.",
  "home.contact.eyebrow": "Contact",
  "home.contact.title": "I'd love to hear from you",
  "home.contact.text":
    "If you make a good olive oil, if you sell it, or if you're simply passionate about it, write to me. I read everything and reply within 48 hours.",

  // Form
  "form.title": "Write to me directly",
  "form.subtitle": "Leave your message here",
  "form.name": "Name",
  "form.namePlaceholder": "Your name",
  "form.email": "Email",
  "form.emailPlaceholder": "you@email.com",
  "form.message": "Message",
  "form.messagePlaceholder":
    "Tell me: I'm a producer, a shop, hospitality… what do you do and what are you looking for?",
  "form.chars": "characters",
  "form.consentBefore": "I have read and accept the",
  "form.consentLink": "privacy policy",
  "form.submit": "Send message",
  "form.honeypot": "If you are human, leave this empty:",
  "form.dataTitle": "Data protection",
  "form.dataBefore":
    "Controller: Francisco Javier Archeni Sanz. Purpose: to handle your enquiry or proposal. Legal basis: your consent when submitting this form. Data will not be shared with third parties except where legally required or with necessary providers. You can exercise your rights by writing to hola@aoveyco.com. More information in the",
  "form.dataLink": "privacy policy",

  // Thanks
  "thanks.title": "Message",
  "thanks.titleHighlight": "received.",
  "thanks.text":
    "Thanks for writing. I read every message personally and reply within 48 hours.",
  "thanks.back": "Back to home",

  // Footer
  "footer.instagram": "AOVE & Co on Instagram",
  "footer.tagline": "AOVE & Co — Great olive oil is always better in company.",
  "footer.legalNav": "Legal pages",
  "footer.legal": "Legal notice",
  "footer.privacy": "Privacy",
  "footer.cookies": "Cookies",

  // WhatsApp
  "wa.openLabel": "Message us on WhatsApp",
  "wa.dialogLabel": "Contact us on WhatsApp",
  "wa.close": "Close",
  "wa.p1Before": "We reply on WhatsApp",
  "wa.p1Strong": "as soon as we can",
  "wa.p1After": "; we can't always answer right away.",
  "wa.p2Before": "For longer enquiries, the",
  "wa.p2Link": "contact form",
  "wa.p3Before":
    "By contacting us on WhatsApp you agree to provide the personal data we ask for in order to help you (e.g. name and reason for your enquiry). More information in the",
  "wa.p3Link": "privacy policy",
  "wa.cta": "Contact us on WhatsApp",
  "wa.message": "Hi, I'm writing from the AOVE & Co website",

  // Legal
  "legal.eyebrow": "Legal",
  "legal.lastUpdate": "Last updated: November 2026.",
};

export const ui = { es, en };

export type UiKey = keyof typeof es;

/** Traduce una clave al idioma indicado. */
export function t(lang: Lang, key: UiKey): string {
  return ui[lang][key] ?? ui.es[key];
}

/** Devuelve una función de traducción ya ligada a un idioma. */
export function useTranslations(lang: Lang) {
  return (key: UiKey) => t(lang, key);
}
