import { motion, useReducedMotion } from "framer-motion";

/**
 * Entrada con rebote suave + flotación continua (ideal para flamingos,
 * guacamaya, corazones y burbujas de "like").
 */
export default function FloatIn({
  src,
  alt = "",
  from = "left", // "left" | "right" | "bottom" | "top"
  delay = 0,
  float = 10, // amplitud de la flotación en px (0 = sin flotación)
  className = "",
  style,
}) {
  const reduce = useReducedMotion();

  const offset = {
    left: { x: -140, y: 0 },
    right: { x: 140, y: 0 },
    bottom: { x: 0, y: 140 },
    top: { x: 0, y: -140 },
  }[from];

  return (
    <motion.div
      className={className}
      style={style}
      initial={reduce ? false : { opacity: 0, rotate: -6, ...offset }}
      whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", stiffness: 70, damping: 14, delay }}
    >
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ display: "block", width: "100%" }}
        animate={reduce || !float ? undefined : { y: [0, -float, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
