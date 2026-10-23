import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { content } from "../data/content.js";
import { backgrounds } from "../data/backgrounds.js";
import { Reveal, FloatIn } from "../components/animations";
import Section from "../components/ui/Section.jsx";
import StoreButtons from "../components/ui/StoreButtons.jsx";
import { assetUrl } from "../utils/assets.js";

export default function Hero() {
  const { hero } = content;
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  // El teléfono baja más lento que el scroll y rota apenas.
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const phoneRotate = useTransform(scrollYProgress, [0, 1], [0, -6]);
  // Las nubes se mueven en sentidos opuestos.
  const cloudL = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const cloudR = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <Section
      id="inicio"
      variant="blue"
      diagonal="none"
      bg={backgrounds.hero}
      padded={false}
      fluid
      className="pt-12 min-h-[90vh]"
    >
      <div ref={ref} className="relative">
        <Reveal as="h1" direction="down" className="text-center text-[clamp(2rem,6vw,3.4rem)] font-extrabold">
          {hero.title}
        </Reveal>
        <Reveal as="p" delay={0.1} className="mt-1.5 text-center font-semibold text-xl">
          {hero.subtitle}
        </Reveal>

        <motion.img
          src={assetUrl("images/cloud-left.png")}
          alt=""
          className="pointer-events-none absolute -left-[44%] top-[25%] -z-10 w-[36%] md:w-[42%]"
          style={reduce ? undefined : { x: cloudL }}
        />
        <motion.img
          src={assetUrl("images/cloud-right.png")}
          alt=""
          className="pointer-events-none absolute -right-[24%] -top-[-50%] md:-top-[2%] -z-10 w-[36%] md:w-[38%]"
          style={reduce ? undefined : { x: cloudR }}
        />

        <div className="mt-10 grid grid-cols-1 items-center gap-8 text-center md:grid-cols-2 md:text-left">
          <div>
            <Reveal as="h3" direction="right" className="text-2xl font-bold pb-4">
              {hero.lead}
            </Reveal>
            <Reveal as="p" direction="right" delay={0.1}>
              {hero.body}
            </Reveal>
            <Reveal as="p" direction="right" delay={0.2} className="mt-6 font-bold">
              {hero.cta}
            </Reveal>
            <Reveal delay={0.3}>
              <StoreButtons className="justify-center md:justify-start" />
            </Reveal>
          </div>

          <motion.div
  className="-mr-5 md:-mr-[max(1.25rem,calc((100vw-1100px)/2+1.25rem))]"
  initial={reduce ? false : { opacity: 0, y: 80, rotate: 8 }}
  animate={{ opacity: 1, y: 0, rotate: 0 }}
  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
>
  <motion.img
    src={assetUrl("images/hero-phone-hand.png")}
    alt="App Xcaret en un celular"
    className="ml-auto block w-full max-w-[420px] md:max-w-[920px]"
    style={reduce ? undefined : { y: phoneY, rotate: phoneRotate }}
  />
</motion.div>
        </div>

        <FloatIn
          src={assetUrl("images/macaw-small.png")}
          from="right"
          float={8}
          className="absolute -bottom-10 right-0 w-[90px] md:w-[140px]"
        />
      </div>
    </Section>
  );
}
