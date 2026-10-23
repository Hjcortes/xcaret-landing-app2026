import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

/**
 * Imagen con parallax ligado al scroll.
 * speed: cuántos px se desplaza de punta a punta (positivo = sube más lento que el scroll).
 * rotate: grados de rotación total mientras cruza el viewport.
 */
export default function ParallaxImage({
  src,
  alt = "",
  speed = 60,
  rotate = 0,
  scaleFrom = 1,
  scaleTo = 1,
  className = "",
  style,
  ...rest
}) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed, -speed]);
  const r = useTransform(scrollYProgress, [0, 1], [-rotate, rotate]);
  const s = useTransform(scrollYProgress, [0, 0.5, 1], [scaleFrom, scaleTo, scaleFrom]);

  return (
    <motion.img
      ref={ref}
      src={src}
      alt={alt}
      loading="lazy"
      className={className}
      style={reduce ? style : { ...style, y, rotate: r, scale: s }}
      {...rest}
    />
  );
}
