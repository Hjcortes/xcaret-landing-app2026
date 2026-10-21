import { content } from "../data/content.js";
import { backgrounds } from "../data/backgrounds.js";
import { Reveal, FloatIn, Stagger, StaggerItem } from "../components/animations";
import Section from "../components/ui/Section.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import Closing from "../components/ui/Closing.jsx";

// Tres pantallas del flujo: tienda → detalle de actividad → boleto con QR
const SCREENS = [
  { src: "/images/actividades-screen-1.png", alt: "Listado de actividades disponibles" },
  { src: "/images/actividades-screen-2.png", alt: "Detalle de una actividad" },
  { src: "/images/actividades-screen-3.png", alt: "Boleto con código QR" },
];

export default function Actividades() {
  const { actividades } = content;

  return (
    <Section id="actividades" variant="coral" diagonal="both" bg={backgrounds.actividades}>
      <SectionHeader
        tag={actividades.tag}
        title={actividades.title}
        subtitle={actividades.subtitle}
        light
      />

      <div className="relative grid grid-cols-1 items-center gap-8 text-center md:grid-cols-[1fr_1.2fr] md:text-left">
        <FloatIn
          src="/images/flamingo-left.png"
          from="left"
          float={12}
          className="absolute -left-10 -top-16 z-10 w-[120px] md:-left-[140px] md:-top-5 md:w-[220px]"
        />

        <Reveal direction="right">
          <h3 className="mb-2.5 font-extrabold">{actividades.lead}</h3>
          <p>{actividades.body}</p>
        </Reveal>

        <Stagger
          gap={0.18}
          className="flex flex-col items-center justify-center gap-3 md:flex-row md:items-start"
        >
          {SCREENS.map((s) => (
            <StaggerItem
              key={s.src}
              className="max-w-[260px] md:max-w-none md:[&:nth-child(2)]:mt-6"
            >
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                className="w-full rounded-[18px] shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
              />
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      <Closing className="text-white">{actividades.closing}</Closing>
    </Section>
  );
}
