import { motion, useReducedMotion } from "framer-motion";
import { content } from "../data/content.js";
import { backgrounds } from "../data/backgrounds.js";
import { Reveal, ParallaxImage } from "../components/animations";
import Section from "../components/ui/Section.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import Closing from "../components/ui/Closing.jsx";

export default function Promociones() {
  const { promociones } = content;
  const reduce = useReducedMotion();

  return (
    <Section id="promociones" variant="white" diagonal="none" bg={backgrounds.promociones}>
      <SectionHeader
        tag={promociones.tag}
        title={promociones.title}
        subtitle={promociones.subtitle}
      />

      <div className="grid grid-cols-1 items-center gap-8 text-center md:grid-cols-[1.1fr_1fr] md:text-left">
        <div className="relative">
          <ParallaxImage
            src="/images/promo-phone.png"
            alt="Promociones en la App Xcaret"
            className="mx-auto block max-w-full lg:max-w-[800px]"
            speed={30}
            rotate={-2}
          />
          {/* Tarjeta flotante de notificación: entra desde la derecha con un pequeño pop */}
          {/* <motion.img
            src="/images/promo-notification.png"
            alt="Notificación: ahora hasta 15% en parques"
            className="absolute right-0 top-[12%] w-[70%] drop-shadow-xl md:-right-[4%] md:w-[62%]"
            initial={reduce ? false : { opacity: 0, x: 80, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ type: "spring", stiffness: 90, damping: 12, delay: 0.3 }}
          /> */}
        </div>

        <Reveal direction="left" className="md:text-right">
          <motion.img
            src="/images/icon-store.svg"
            alt=""
            className="mx-auto mb-4 w-24 md:ml-auto md:mr-0"
            whileInView={reduce ? undefined : { rotate: [0, -8, 8, 0] }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
          <p>{promociones.body}</p>
        </Reveal>
      </div>

      <Closing>{promociones.closing}</Closing>
    </Section>
  );
}
