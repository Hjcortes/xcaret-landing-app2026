import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { content } from "../data/content.js";
import { backgrounds } from "../data/backgrounds.js";
import { Reveal, ParallaxImage, FloatIn } from "../components/animations";
import Section from "../components/ui/Section.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import { assetUrl } from "../utils/assets.js";

export default function Mapa() {
  const { mapa } = content;
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  // El pin de ubicación "cae" a la mitad de la sección
  const pinY = useTransform(scrollYProgress, [0.2, 0.5], [-120, 0]);
  const pinOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);

  return (
    <Section
      id="mapa"
      variant="photo"
      diagonal="none"
      bg={backgrounds.mapa}
      padded={false}
      className="min-h-[90vh] overflow-hidden pt-24 pb-[calc(var(--diag)+6rem)]"
    >
      <div ref={ref} className="relative">
        <SectionHeader tag={mapa.tag} title={mapa.title} subtitle={mapa.subtitle} light />

  {/* Escenario a todo el ancho. Desde md todo se coloca en % y escala como el diseño */}
        <div className="relative left-1/2 w-screen max-w-[1920px] -translate-x-1/2 md:aspect-[8/3]">
  {/* Teléfonos */}
          <div className="mx-auto w-[80%] max-w-[420px] md:absolute md:left-[54%] md:bottom-2 md:mx-0 md:w-[42%] md:max-w-none hidden md:block">
            <ParallaxImage
              src={assetUrl("images/mapa-phones.png")}
              alt="Mapa interactivo del parque en la App Xcaret"
              className="block w-full"
              speed={50}
              rotate={2}
            />
          </div>
          <div className="mx-auto w-full  md:absolute md:left-[54%] md:bottom-2 md:mx-0 md:max-w-none block md:hidden">
            <ParallaxImage
              src={assetUrl("images/mapa-phones-mb.png")}
              alt="Mapa interactivo del parque en la App Xcaret"
              className="block w-full"
              speed={50}
              rotate={2}
            />
          </div>

          {/* Pin (incluye la curva) */}
          <motion.img
            src={assetUrl("images/pin-location.png")}
            alt=""
            className="mx-auto mt-6 w-[80%] md:absolute md:left-[27%] md:top-[24%] md:mx-0 md:mt-0 md:w-[40%] hidden md:block"
            style={reduce ? undefined : { y: pinY, opacity: pinOpacity }}
          />

          {/* Párrafo: derecha, bajo los teléfonos, alineado a la derecha */}
          <Reveal
            direction="left"
            className="mt-6 px-5 text-center md:absolute md:right-[22%] md:top-[84%] md:mt-0 md:w-[28%] md:px-0 md:text-right md:text-[clamp(0.875rem,1.07vw,1.28rem)]"
          >
            <h3 className="mb-2 text-xl font-bold">{mapa.lead}</h3>
            <p>{mapa.body}</p>
          </Reveal>

          {/* Frase: centrada bajo el pin */}
          <Reveal
            as="p"
            delay={0.2}
            className="relative z-10 mt-6 px-5 text-center text-lg font-bold [text-shadow:0_2px_8px_rgba(0,0,0,0.7)] md:absolute md:inset-x-0 md:top-[114%] md:mt-0 md:px-0 md:text-[clamp(1rem,1.2vw,1.44rem)]"
          >
            {mapa.closing}
          </Reveal>

          <FloatIn
            src={assetUrl("images/flamingo-right.png")}
            from="right"
            className="absolute z-0 top-[85%] right-[-2%] w-[80%] md:top-[65%] md:right-[-2%] md:w-[40%]"
          />
        </div>
      </div>
    </Section>
  );
}
