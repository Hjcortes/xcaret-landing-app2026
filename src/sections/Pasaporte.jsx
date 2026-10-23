import { motion, useReducedMotion } from "framer-motion";
import { content } from "../data/content.js";
import { backgrounds } from "../data/backgrounds.js";
import { Reveal } from "../components/animations";
import Section from "../components/ui/Section.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import Closing from "../components/ui/Closing.jsx";

export default function Pasaporte() {
  const { pasaporte } = content;
  const reduce = useReducedMotion();

  return (
    <Section id="pasaporte" variant="lime" diagonal="both" bg={backgrounds.pasaporte}>
      <SectionHeader tag={pasaporte.tag} title={pasaporte.title} subtitle={pasaporte.subtitle} />

      <div className="grid grid-cols-1 items-center gap-8 text-center md:grid-cols-2 md:text-left">
        <Reveal direction="right">
          <img
            src="/images/icon-passport-stamp.svg"
            alt=""
            className="mx-auto mb-4 w-[72px] md:mx-0"
          />
          <p>{pasaporte.body}</p>
        </Reveal>

        {/* El libro "se abre": entra rotado en 3D y se endereza al llegar al viewport */}
        <motion.div
          style={{ perspective: 1200 }}
          initial={reduce ? false : { opacity: 0, rotateY: -50, rotateZ: 8, x: 80 }}
          whileInView={{ opacity: 1, rotateY: 0, rotateZ: -6, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          whileHover={reduce ? undefined : { rotateZ: -2, scale: 1.03 }}
        >
          <img
            src="/images/pasaporte-book.png"
            alt="Pasaporte Xcaret"
            loading="lazy"
            className="mx-auto block w-full max-w-[620px] drop-shadow-[0_24px_30px_rgba(0,0,0,0.3)]"
          />
        </motion.div>
      </div>

      <Closing>{pasaporte.closing}</Closing>
    </Section>
  );
}
