import { Reveal } from "../animations";

/** Frase de cierre en negritas al final de cada sección. */
export default function Closing({ children, delay = 0.1, className = "" }) {
  return (
    <Reveal as="p" delay={delay} className={`mt-10 text-center text-[1.05rem] font-bold ${className}`}>
      {children}
    </Reveal>
  );
}
