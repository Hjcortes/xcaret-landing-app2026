import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { content } from "../data/content.js";
import { backgrounds } from "../data/backgrounds.js";
import { Reveal, ParallaxImage } from "../components/animations";
import Section from "../components/ui/Section.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";

export default function Pase360() {
  const { pase360 } = content;
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  // La guacamaya cruza la sección de izquierda a derecha mientras haces scroll
  const macawX = useTransform(scrollYProgress, [0.1, 0.9], ["-30%", "30%"]);
  const macawY = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [40, -20, 30]);
  const macawRotate = useTransform(scrollYProgress, [0.1, 0.9], [-8, 6]);

  return (
    <Section
      id="pase360"
      variant="white"
      diagonal="none"
      bg={backgrounds.pase360}
      padded={false}
      className="pt-12 pb-[calc(var(--diag)+3rem)]"
    >
      <div ref={ref}>
        <SectionHeader tag={pase360.tag} title={pase360.title} subtitle={pase360.subtitle} />

        <div className="relative grid place-items-center">
          <ParallaxImage
            src="/images/pase360-screens.png"
            alt="Pase 360 en la App Xcaret"
            className="block w-[90%] max-w-[560px]"
            speed={30}
          />
          <motion.img
            src="/images/macaw-flying.png"
            alt=""
            className="pointer-events-none absolute bottom-0 left-0 w-[60%] max-w-[520px]"
            style={reduce ? undefined : { x: macawX, y: macawY, rotate: macawRotate }}
          />
        </div>

        <Reveal as="p" delay={0.1} className="mt-8 text-center">
          {pase360.body}
        </Reveal>
      </div>
    </Section>
  );
}
