import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

// Las clases van completas (no concatenadas) para que Tailwind las detecte.
const VARIANTS = {
  blue: {
    layer: "bg-gradient-to-b from-xcaret-blue-light via-xcaret-blue to-xcaret-blue-dark",
    text: "text-white",
  },
  coral: { layer: "bg-xcaret-coral", text: "text-white" },
  white: { layer: "bg-white", text: "text-xcaret-ink" },
  yellow: { layer: "bg-xcaret-yellow", text: "text-xcaret-ink" },
  lime: { layer: "bg-xcaret-lime", text: "text-xcaret-ink" },
  gray: { layer: "bg-xcaret-gray", text: "text-xcaret-ink" },
  photo: { layer: "", text: "text-white" }, // solo imagen de fondo
};

const DIAGONALS = {
  both: { clip: "diag-both", margin: "-mt-[var(--diag)] -mb-[var(--diag)]", z: "z-10" },
  top: { clip: "diag-top", margin: "-mt-[var(--diag)]", z: "z-10" },
  bottom: { clip: "diag-bottom", margin: "-mb-[var(--diag)]", z: "z-10" },
  none: { clip: "", margin: "", z: "" },
};

/**
 * Sección con fondo de color, corte diagonal y fondo de imagen opcional.
 *
 * variant:  "blue" | "coral" | "white" | "yellow" | "lime" | "gray" | "photo"
 * diagonal: "both" | "top" | "bottom" | "none"
 * bg:       objeto de data/backgrounds.js ({ image, position, size, overlay, color, parallax })
 * padded:   false para controlar el padding vertical desde `className`
 */
export default function Section({
  id,
  variant = "white",
  diagonal = "both",
  bg,
  padded = true,
  className = "",
  innerClassName = "",
  children,
}) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const v = VARIANTS[variant] ?? VARIANTS.white;
  const d = DIAGONALS[diagonal] ?? DIAGONALS.none;

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const parallax = Boolean(bg?.parallax) && !reduce;

  return (
    <section
      ref={ref}
      id={id}
      className={`relative isolate ${v.text} ${d.margin} ${
        padded ? "py-[calc(var(--diag)+3rem)]" : ""
      } ${className}`}
    >
      {/* Capa de fondo: color + imagen opcional + overlay, todo recortado por la diagonal */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 -z-10 overflow-hidden ${d.clip} ${bg?.color ?? v.layer}`}
      >
        {bg?.image && (
          <motion.div
            className={`absolute inset-x-0 ${parallax ? "-inset-y-[10%]" : "inset-y-0"}`}
            style={{
              backgroundImage: `url(${bg.image})`,
              backgroundPosition: bg.position ?? "center",
              backgroundSize: bg.size ?? "cover",
              backgroundRepeat: "no-repeat",
              y: parallax ? y : 0,
            }}
          />
        )}
        {bg?.overlay && <div className={`absolute inset-0 ${bg.overlay}`} />}
      </div>

      <div className={`relative mx-auto max-w-site px-5 ${innerClassName}`}>{children}</div>
    </section>
  );
}
