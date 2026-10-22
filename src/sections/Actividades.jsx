import { content } from "../data/content.js";
import { backgrounds } from "../data/backgrounds.js";
import Section from "../components/ui/Section.jsx";
import { Reveal, FloatIn, ParallaxImage } from "../components/animations";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import Closing from "../components/ui/Closing.jsx";

export default function Actividades() {
  const { actividades } = content;

  return (
    <Section className="min-h-[80vh]" id="actividades" variant="coral" diagonal="both" bg={backgrounds.actividades}>
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
          className="absolute -left-10 -top-16 z-0 w-[120px] md:-left-[80%] md:-top-5 md:w-[720px]"
        />
          <Reveal direction="right">
            <h3 className="mb-2.5 text-2xl font-bold py-4 relative z-10">{actividades.lead}</h3>
            <p className="py-4 relative z-10">{actividades.body}</p>
          </Reveal>
        

        <Reveal direction="left">
          <ParallaxImage
            src="/images/actividades-screens.png"
            alt="Actividades disponibles en la App Xcaret"
            className="mx-auto block w-full min-w-[820px]"
            speed={30}
            rotate={1.5}
          />
        </Reveal>
      </div>

      <Closing className="text-white">{actividades.closing}</Closing>
    </Section>
  );
}
