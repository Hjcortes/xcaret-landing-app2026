import { motion, useReducedMotion } from "framer-motion";

/**
 * Aparece al entrar en el viewport (una sola vez).
 * direction: "up" | "down" | "left" | "right" | "none"
 */
export default function Reveal({
  children,
  direction = "up",
  distance = 48,
  delay = 0,
  duration = 0.7,
  scale = 1,
  as = "div",
  className = "",
  ...rest
}) {
  const reduce = useReducedMotion();
  const Comp = motion[as] ?? motion.div;

  const axis = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  }[direction];

  return (
    <Comp
      className={className}
      initial={reduce ? false : { opacity: 0, scale, ...axis }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Comp>
  );
}
