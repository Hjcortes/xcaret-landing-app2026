// Todo el copy de la landing en un solo lugar (fácil de editar o traducir).
// Las rutas de imagen apuntan a /public/images — ver README para la lista de assets.
import { assetUrl } from "../utils/assets.js";

export const STORES = {
  google: {
    label: "Disponible en Google Play",
    href: "#", // TODO: URL real de Google Play
    img: assetUrl("images/badge-google-play.svg"),
  },
  apple: {
    label: "Descárgala en el App Store",
    href: "#", // TODO: URL real de App Store
    img: assetUrl("images/badge-app-store.svg"),
  },
};

export const content = {
  hero: {
    title: "Todo Xcaret en tu mano.",
    subtitle: "Vive más, encuentra más, disfruta más.",
    lead: "Descarga la App Xcaret y lleva contigo todo lo que necesitas para disfrutar tu visita.",
    body: "Desde el mapa y la navegación hasta tus fotos, actividades, promociones y experiencias especiales.",
    cta: "Descárgala antes de entrar al parque y úsala durante toda tu visita.",
  },
  mapa: {
    tag: "Mapa",
    title: "Encuentra tu camino.",
    subtitle: "Nosotros te llevamos.",
    lead: "Llévame: llega a donde quieres estar.",
    body: "Explora el mapa del parque, encuentra atractivos, restaurantes, servicios y actividades y deja que Llévame te indique cómo llegar.",
    closing: "Tu disfruta, la App encuentra el camino.",
  },
  actividades: {
    tag: "Actividades",
    title: "¿Quieres vivir algo más?",
    subtitle: "Hazlo desde el parque.",
    lead: "¿Ya estás dentro de Xcaret y quieres agregar una experiencia a tu día?",
    body: "Con la App puedes consultar las actividades disponibles, elegir la que quieres vivir, escanear tu brazalete y comprarla directamente desde tu celular para ese mismo día, sin tener que buscar un punto de venta.",
    closing: "Elige. Compra. Vive la experiencia.",
  },
  promociones: {
    tag: "Promociones",
    title: "Descubre más, aprovecha más.",
    subtitle: "Promociones y compras desde la App.",
    body: "Encuentra promociones disponibles, descubre opciones de compra y aprovecha oportunidades especiales directamente desde tu celular.",
    closing: "Todo en un solo lugar, sin dejar de disfrutar tu visita.",
  },
  fotos: {
    tag: "Foto Xcaret",
    title: "Tus mejores momentos, también están en la App.",
    subtitle: "Encuentra tus fotos, revive tu visita.",
    lead: "¿Te tomaste una foto en alguno de nuestros puntos fotográficos?",
    body: "Redime tu código y consulta tus fotos directamente desde la App Xcaret.",
  },
  pase360: {
    tag: "Pase 360",
    title: "Pase 360",
    subtitle: "Lleva Xcaret contigo después de tu visita.",
    body: "Consulta y disfruta los beneficios de tu Pase 360 directamente desde la App Xcaret.",
  },
  pasaporte: {
    tag: "Pasaporte Xcaret",
    title: "¿Ya encontraste todos los puntos del Pasaporte de Xcaret?",
    subtitle: "Descubre, recorre y completa.",
    body: "Encuentra los puntos del Pasaporte Xcaret dentro del parque y utiliza la App para descubrir dónde están.",
    closing: "Convierte tu recorrido en una aventura.",
  },
  favoritos: {
    tag: "Favoritos",
    title: "¿Viste actividades que te gustaría mucho hacer?",
    subtitle: "Haz clic en el <span class='text-pink-500 text-2xl'>♥</span> para agregarlas a tu lista.",
    body: "Encuentra los puntos de Favoritos dentro del parque y utiliza la App para descubrir dónde están y llegar más rápido.",
    closing: "No dejes de visitar lo que más te gusta.",
  },
  cta: {
    title: "No visites Xcaret sin tu App.",
    subtitle: "Descárgala antes de entrar y disfruta mucho más tu día.",
    features: [
      "MAPA", "LLÉVAME", "ACTIVIDADES", "COMPRAS",
      "PROMOCIONES", "FOTOS", "PASE 360", "PASAPORTE XCARET",
    ],
    footer: "Descarga App Xcaret",
  },
};
