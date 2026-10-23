import { motion, useReducedMotion } from "framer-motion";
import { content } from "../data/content.js";
import { backgrounds } from "../data/backgrounds.js";
import { Reveal, FloatIn, ParallaxImage } from "../components/animations";
import Section from "../components/ui/Section.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import { assetUrl } from "../utils/assets.js";

export default function FotoXcaret() {
  const { fotos } = content;
  const reduce = useReducedMotion();

  return (
    <Section id="fotos" variant="yellow" diagonal="both" bg={backgrounds.fotos}>
      <SectionHeader tag={fotos.tag} title={fotos.title} subtitle={fotos.subtitle} />

      <div className="grid grid-cols-1 items-center gap-8 text-center md:grid-cols-[1fr_1.2fr] md:text-left">
        <Reveal direction="right">
          <motion.img
            src={assetUrl("images/icon-camera.svg")}
            alt=""
            className="mx-auto mb-8 w-24 md:mx-0"
            whileInView={reduce ? undefined : { scale: [1, 1.15, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
          <h3 className="mb-2 text-2xl font-bold">{fotos.lead}</h3>
          <p>{fotos.body}</p>
        </Reveal>

        <div className="relative">
          <ParallaxImage
            src={assetUrl("images/fotos-collage.png")}
            alt="Fotos del parque disponibles en la App"
            className="block w-full"
            speed={40}
            rotate={3}
          />
          <FloatIn
            src={assetUrl("images/heart-bubble.png")}
            from="top"
            delay={0.3}
            float={44}
            className="absolute -top-[-67%] right-[18%] w-[110px]"
          />
          <FloatIn
            src={assetUrl("images/surprised-bubble.png")}
            from="bottom"
            delay={0.5}
            float={24}
            className="absolute bottom-[34%] left-[18%] w-[100px]"
          />
        </div>
      </div>
    </Section>
  );
}
