import { motion, useReducedMotion } from "framer-motion";
import { content } from "../data/content.js";
import { backgrounds } from "../data/backgrounds.js";
import { Reveal, ParallaxImage } from "../components/animations";
import Section from "../components/ui/Section.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import Closing from "../components/ui/Closing.jsx";

// Corazones decorativos: posición, tamaño y velocidad distintos para dar profundidad.
// (Van como estilos en línea porque son datos por elemento, no clases fijas.)
const HEARTS = [
  { top: "4%", left: "-3%", size: 120, dur: 5.5, y: 18, blur: 0 },
  { top: "28%", left: "6%", size: 70, dur: 4.2, y: 12, blur: 2 },
  { top: "52%", left: "-2%", size: 60, dur: 6, y: 16, blur: 1 },
  { top: "8%", right: "-4%", size: 150, dur: 6.5, y: 22, blur: 3 },
  { top: "62%", right: "2%", size: 90, dur: 5, y: 14, blur: 0 },
];

function Heart({ h, index, reduce }) {
  return (
    // Capa externa: entrada al hacer scroll. Capa interna: flotación en loop.
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute z-0"
      style={{ top: h.top, left: h.left, right: h.right, width: h.size }}
      initial={reduce ? false : { opacity: 0, scale: 0.4 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", delay: index * 0.12 }}
    >
      <motion.img
        src="/images/heart-3d.png"
        alt=""
        className="w-full"
        style={{ filter: h.blur ? `blur(${h.blur}px)` : undefined }}
        animate={reduce ? undefined : { y: [0, -h.y, 0], rotate: [0, 6, -6, 0] }}
        transition={{ duration: h.dur, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}


export default function Favoritos() {
  const { favoritos } = content;
  const reduce = useReducedMotion();

  return (
    <Section
      id="favoritos"
      variant="white"
      diagonal="none"
      bg={backgrounds.favoritos}
      className="overflow-hidden"
    >
      {HEARTS.map((h, i) => (
        <Heart key={i} h={h} index={i} reduce={reduce} />
      ))}

      <SectionHeader tag={favoritos.tag} title={favoritos.title} subtitleHtml={favoritos.subtitle} />

      <ParallaxImage
        src="/images/favoritos-phones.png"
        alt="Lista de favoritos en la App Xcaret"
        className="relative z-[1] mx-auto block w-[80%] max-w-[960px]"
        speed={30}
        rotate={1.5}
      />

      <Reveal as="p" delay={0.1} className="relative z-[1] mx-auto mt-8 max-w-[520px] text-center">
        {favoritos.body}
      </Reveal>
      <Closing delay={0.2} className="relative z-[1]">
        {favoritos.closing}
      </Closing>
    </Section>
  );
}
