import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { content } from "../data/content.js";
import { backgrounds } from "../data/backgrounds.js";
import { Reveal, ParallaxImage, FloatIn } from "../components/animations";
import Section from "../components/ui/Section.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";

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
          <div className="mx-auto w-[80%] max-w-[420px] md:absolute md:left-[54%] md:bottom-2 md:mx-0 md:w-[42%] md:max-w-none">
            <ParallaxImage
              src="/images/mapa-phones.png"
              alt="Mapa interactivo del parque en la App Xcaret"
              className="block w-full"
              speed={50}
              rotate={2}
            />
          </div>

          {/* Pin (incluye la curva) */}
          <motion.img
            src="/images/pin-location.png"
            alt=""
            className="mx-auto mt-6 block w-[80%] md:absolute md:left-[27%] md:top-[24%] md:mx-0 md:mt-0 md:w-[40%]"
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
            className="mt-6 px-5 text-center text-lg font-bold [text-shadow:0_2px_8px_rgba(0,0,0,0.7)] md:absolute md:inset-x-0 md:top-[114%] md:mt-0 md:px-0 md:text-[clamp(1rem,1.2vw,1.44rem)]"
          >
            {mapa.closing}
          </Reveal>

          <FloatIn
            src="/images/flamingo-right.png"
            from="right"
            className="absolute top-[65%] right-[-2%] w-[90px] md:w-[40%]"
          />
        </div>
      </div>
    </Section>
  );
}
