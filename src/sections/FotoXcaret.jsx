import { motion, useReducedMotion } from "framer-motion";
import { content } from "../data/content.js";
import { backgrounds } from "../data/backgrounds.js";
import { Reveal, FloatIn, ParallaxImage } from "../components/animations";
import Section from "../components/ui/Section.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";

export default function FotoXcaret() {
  const { fotos } = content;
  const reduce = useReducedMotion();

  return (
    <Section id="fotos" variant="yellow" diagonal="both" bg={backgrounds.fotos}>
      <SectionHeader tag={fotos.tag} title={fotos.title} subtitle={fotos.subtitle} />

      <div className="grid grid-cols-1 items-center gap-8 text-center md:grid-cols-[1fr_1.2fr] md:text-left">
        <Reveal direction="right">
          <motion.img
            src="/images/icon-camera.svg"
            alt=""
            className="mx-auto mb-4 w-16 md:mx-0"
            whileInView={reduce ? undefined : { scale: [1, 1.15, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
          <h3 className="mb-2 font-extrabold">{fotos.lead}</h3>
          <p>{fotos.body}</p>
        </Reveal>

        <div className="relative">
          <ParallaxImage
            src="/images/fotos-collage.png"
            alt="Fotos del parque disponibles en la App"
            className="block w-full"
            speed={40}
            rotate={3}
          />
          <FloatIn
            src="/images/like-bubble.png"
            from="top"
            delay={0.3}
            float={14}
            className="absolute -top-[4%] right-[8%] w-[70px]"
          />
          <FloatIn
            src="/images/like-bubble.png"
            from="bottom"
            delay={0.5}
            float={10}
            className="absolute bottom-[4%] left-[14%] w-[90px]"
          />
        </div>
      </div>
    </Section>
  );
}
