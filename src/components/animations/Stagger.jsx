import { motion, useReducedMotion } from "framer-motion";

const container = (gap) => ({
  hidden: {},
  show: { transition: { staggerChildren: gap } },
});

const item = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

/** Contenedor que revela a sus hijos <StaggerItem> en cascada. */
export function Stagger({ children, gap = 0.12, className = "" }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={container(gap)}
      initial={reduce ? "show" : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }) {
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}
