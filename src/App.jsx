import { motion, useScroll, useSpring } from "framer-motion";
import Hero from "./sections/Hero.jsx";
import Mapa from "./sections/Mapa.jsx";
import Actividades from "./sections/Actividades.jsx";
import Promociones from "./sections/Promociones.jsx";
import FotoXcaret from "./sections/FotoXcaret.jsx";
import Pase360 from "./sections/Pase360.jsx";
import Pasaporte from "./sections/Pasaporte.jsx";
import Favoritos from "./sections/Favoritos.jsx";
import CtaFinal from "./sections/CtaFinal.jsx";

export default function App() {
  // Barra de progreso de scroll (opcional, se puede quitar)
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <main>
        <Hero />
        <Mapa />
        <Actividades />
        <Promociones />
        <FotoXcaret />
        <Pase360 />
        <Pasaporte />
        <Favoritos />
        <CtaFinal />
      </main>
    </>
  );
}
