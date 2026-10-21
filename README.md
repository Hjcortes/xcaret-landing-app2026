# Landing App Xcaret (React + Vite + Tailwind 3 + Framer Motion)

## Arrancar

```bash
npm install
npm run dev      # desarrollo
npm run build    # producción (carpeta dist/)
```

Funciona con Node 18, 20 y 22 en adelante (incluye 24).

## Estilos

- **Tailwind 3** para casi todo (clases en el JSX). La paleta está en `tailwind.config.js` como `xcaret-*` (`bg-xcaret-coral`, `text-xcaret-ink`, etc.) y es aproximada: ajustarla con el Figma.
- **CSS propio** solo en `src/styles/index.css`: las variables y clases de los cortes diagonales (`.diag-both`, `.diag-top`, `.diag-bottom`) y pequeños ajustes base. Si necesitas otro estilo especial, agrégalo ahí dentro de `@layer components`.
- La altura de la diagonal se controla con `--diag` (en `index.css`).
- Las clases de Tailwind van completas en el código (no concatenadas) para que el compilador las detecte.

## Imágenes de fondo por sección

Edita `src/data/backgrounds.js`. Cada sección tiene:

```js
mapa: {
  image: "/images/mapa-bg-jungle.jpg", // o null para no usar imagen
  position: "center",                  // background-position
  size: "cover",                       // cover | contain | auto
  overlay: "bg-black/10",              // clase Tailwind para oscurecer/aclarar
  color: null,                         // clase Tailwind que reemplaza el color base
  parallax: true,                      // el fondo se mueve más lento que el scroll
}
```

La imagen se recorta junto con la diagonal de la sección. Si la sección es `variant="photo"` (como el Mapa) no tiene color base, solo imagen.

## Estructura

```
src/
├─ main.jsx
├─ App.jsx                      # orquesta las 9 secciones + barra de progreso
├─ data/
│  ├─ content.js                # copy y URLs de las tiendas
│  └─ backgrounds.js            # fondos opcionales por sección
├─ components/
│  ├─ animations/
│  │  ├─ Reveal.jsx             # fade + desplazamiento al entrar al viewport
│  │  ├─ ParallaxImage.jsx      # imagen con parallax/rotación ligada al scroll
│  │  ├─ FloatIn.jsx            # entrada con resorte + flotación
│  │  └─ Stagger.jsx            # cascada de hijos
│  └─ ui/
│     ├─ Section.jsx            # color + diagonal + imagen de fondo opcional
│     ├─ SectionHeader.jsx
│     ├─ Closing.jsx            # frase de cierre
│     └─ StoreButtons.jsx
├─ sections/                    # Hero, Mapa, Actividades, Promociones,
│                               # FotoXcaret, Pase360, Pasaporte, Favoritos, CtaFinal
└─ styles/index.css
```

## Animaciones por sección

| Sección | Efecto |
|---|---|
| Hero | Teléfono entra rotado y luego parallax; nubes en sentidos opuestos |
| Mapa | Fondo de selva con parallax, pin que "cae", flamenco flotante |
| Actividades | Flamenco desde la izquierda; 3 pantallas en cascada |
| Promociones | Teléfono con parallax; notificación entra con resorte |
| Foto Xcaret | Collage con parallax + rotación; burbujas de "like" flotando |
| Pase 360 | La guacamaya cruza la sección según el scroll |
| Pasaporte | El libro entra en 3D y se endereza; hover con tilt |
| Favoritos | Corazones con entrada y flotación infinita en capas |
| CTA final | Features en cascada |

Todo respeta `prefers-reduced-motion`.

## Assets a exportar (carpeta `public/images/`)

PNG/WebP con fondo transparente (2x), SVG para íconos y badges.

- `badge-google-play.svg`, `badge-app-store.svg`
- `cloud-left.png`, `cloud-right.png`, `hero-phone-hand.png`, `macaw-small.png`
- `mapa-bg-jungle.jpg`, `mapa-phones.png`, `pin-location.png`, `flamingo-right.png`
- `flamingo-left.png`, `actividades-screen-1.png`, `-2.png`, `-3.png`
- `promo-phone.png`, `promo-notification.png`, `icon-store.svg`
- `icon-camera.svg`, `fotos-collage.png`, `like-bubble.png`
- `pase360-screens.png`, `macaw-flying.png`
- `icon-passport-stamp.svg`, `pasaporte-book.png`
- `heart-3d.png`, `favoritos-phones.png`

Cada elemento animado debe exportarse por separado, no dentro de una imagen aplanada.

## Pendientes

- URLs reales de Google Play y App Store en `src/data/content.js`.
- Fuente de marca (`fontFamily` en `tailwind.config.js`) y cargarla.
- Colores exactos del Figma en `tailwind.config.js`.
- Imágenes en WebP y con `width`/`height` para evitar saltos de layout.
