// Todo el copy de la landing en un solo lugar (fácil de editar o traducir).
// Las rutas de imagen apuntan a /public/images — ver README para la lista de assets.
import { assetUrl } from "../utils/assets.js";

export const STORES = {
  google: {
    label: "Disponible en Google Play",
    href: "#", //  URL real de Google Play
    img: assetUrl("/images/badge-google-play.svg"),
  },
  apple: {
    label: "Descárgala en el App Store",
    href: "#", //  URL real de App Store
    img: assetUrl("/images/badge-app-store.svg"),
  },
};

export const content = {
  hero: {
    title: "App Xcaret: tu visita, a tu ritmo.",
    subtitle: "Explora, elige y disfruta. Todo a la mano.",
    lead: "Encuentra tu camino, descubre qué hacer y revive tus mejores momentos.",
    body: "Lleva la App Xcaret contigo y disfruta el parque a tu manera. ",
    cta: "Descárgala antes de llegar. Úsala en cada aventura.",
  },
  mapa: {
    tag: "Mapa",
    title: "Dedícate a explorar. La App te guía.",
    subtitle: "Tu siguiente parada empieza con Llévame.",
    lead: "Ubica actividades, restaurantes y servicios en el mapa del parque.",
    body: "Elige a dónde quieres ir y la App te mostrará cómo llegar.",
    closing: "Menos buscar. Más disfrutar.",
  },
  actividades: {
    tag: "Actividades",
    title: "¿Quieres una aventura adicional?",
    subtitle: "Súmala a tu día desde la App Xcaret.",
    lead: "¿Ya estás en el parque?",
    body: "Explora las actividades adicionales, consulta los horarios disponibles y compra tu próxima experiencia desde tu celular.",
    closing: "Elige. Compra. Vive el momento.",
  },
  promociones: {
    tag: "Promociones",
    title: "Promociones en tu mano.",
    subtitle: "¡Compra desde la App!.",
    body: "Consulta las promociones disponibles y encuentra opciones de compra desde la App. Tu próxima experiencia podría estar entre ellas.",
    closing: "Todo a la mano, sin poner tu día en pausa.",
  },
  fotos: {
    tag: "Foto Xcaret",
    title: "Revive ese momento especial.",
    subtitle: "Tus fotos de los parques Xcaret, en tu App.",
    lead: "¿Pasaste por todos los puntos Xelfie en el parque?",
    body: "Ingresa tu código de compra y vuelve a vivir lo mejor de tu visita.",
  },
  pase360: {
    tag: "Pase 360",
    title: "Pase 360, todo en una sola app.",
    subtitle: "Todas tus compras en un solo wallet.",
    body: "Con tu Pase 360, llevas en la app tus entradas a todos los parques que visitarás durante tus vacaciones en Cancún y la Riviera Maya.",
  },
  pasaporte: {
    tag: "Pasaporte Xcaret",
    title: "Registra tu próxima parada con el Pasaporte Xcaret.",
    subtitle: "Descubre, recorre y completa tu Pasaporte.",
    body: "Ubica en la App los puntos del Pasaporte Xcaret y recórrelos todos. Grandes sorpresas te encontrarás en tu camino.",
    closing: "Encuentra los puntos. Completa tu aventura.",
  },
  favoritos: {
    tag: "Favoritos",
    title: "¿Te encantó? ¡Guárdalo en favoritos!",
    subtitle: "Dale <span class='text-pink-500 text-2xl'>♥</span> a lo que quieres vivir.",
    body: "Toca el corazón de las actividades que te interesan para agregarlas a tu lista. Consulta tus favoritos y usa el mapa para encontrarlos durante tu visita. ",
    closing: "Tu día, con más de lo que te gusta.",
  },
  cta: {
    title: "¿Listo para vivir más Xcaret?",
    subtitle: "Empieza por descargar la App. Descárgala antes de tu visita y lleva Xcaret contigo. ",
    features: [
      "MAPA", "LLÉVAME", "ACTIVIDADES", "COMPRAS",
      "PROMOCIONES", "FOTOS", "PASE 360", "PASAPORTE XCARET",
    ],
    footer: "Descarga la App Xcaret",
  },
};
