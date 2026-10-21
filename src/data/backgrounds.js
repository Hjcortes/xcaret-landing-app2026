/**
 * Fondos opcionales por sección. Para poner una imagen de fondo basta con
 * completar `image` con una ruta de /public/images (o una URL).
 *
 *  image    → ruta de la imagen, o null para usar solo el color de la sección
 *  position → background-position (ej. "center", "top", "50% 30%")
 *  size     → background-size ("cover" | "contain" | "auto")
 *  overlay  → clase Tailwind para oscurecer/aclarar la imagen (ej. "bg-black/30")
 *  color    → clase Tailwind que reemplaza el color base de la sección (ej. "bg-xcaret-lime")
 *  parallax → true para que el fondo se mueva más lento que el scroll
 *
 * La imagen se recorta junto con el corte diagonal de la sección.
 */
export const backgrounds = {
  hero: {
    image: null, // ej. "/images/bg-hero.jpg"
    position: "center",
    size: "cover",
    overlay: null,
    color: null,
    parallax: false,
  },
  mapa: {
    image: "/images/mapa-bg-jungle.jpg",
    position: "center",
    size: "cover",
    overlay: "bg-black/10",
    color: null,
    parallax: true,
  },
  actividades: {
    image: null,
    position: "center",
    size: "cover",
    overlay: null,
    color: null,
    parallax: false,
  },
  promociones: {
    image: null,
    position: "center",
    size: "cover",
    overlay: null,
    color: null,
    parallax: false,
  },
  fotos: {
    image: null,
    position: "center",
    size: "cover",
    overlay: null,
    color: null,
    parallax: false,
  },
  pase360: {
    image: null,
    position: "center",
    size: "cover",
    overlay: null,
    color: null,
    parallax: false,
  },
  pasaporte: {
    image: null,
    position: "center",
    size: "cover",
    overlay: null,
    color: null,
    parallax: false,
  },
  favoritos: {
    image: null,
    position: "center",
    size: "cover",
    overlay: null,
    color: null,
    parallax: false,
  },
  cta: {
    image: null,
    position: "center",
    size: "cover",
    overlay: null,
    color: null,
    parallax: false,
  },
};
