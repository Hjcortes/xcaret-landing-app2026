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

        <ParallaxImage
          src="/images/mapa-phones.png"
          alt="Mapa interactivo del parque en la App Xcaret"
          className="mx-auto block w-[85%] max-w-[560px]"
          speed={50}
          rotate={2}
        />

        <motion.img
          src="/images/pin-location.png"
          alt=""
          className="absolute bottom-[14%] left-[8%] w-12 md:left-[22%] md:w-[800px]"
          style={reduce ? undefined : { y: pinY, opacity: pinOpacity }}
        />

        <Reveal direction="left" className="mt-8 text-center md:ml-auto md:max-w-[360px] md:text-left">
          <h3 className="mb-2 text-[1.1rem] font-extrabold">{mapa.lead}</h3>
          <p>{mapa.body}</p>
        </Reveal>

        <Reveal as="p" delay={0.2} className="mt-6 text-center font-bold md:text-left">
          {mapa.closing}
        </Reveal>

        <FloatIn
          src="/images/flamingo-right.png"
          from="right"
          className="absolute -right-2.5 bottom-[6%] w-[90px] md:-right-8 md:w-[150px]"
        />
      </div>
    </Section>
  );
}
