import { content } from "../data/content.js";
import { backgrounds } from "../data/backgrounds.js";
import { Reveal, Stagger, StaggerItem } from "../components/animations";
import Section from "../components/ui/Section.jsx";
import StoreButtons from "../components/ui/StoreButtons.jsx";

export default function CtaFinal() {
  const { cta } = content;

  return (
    <Section
      id="descarga"
      variant="gray"
      diagonal="top"
      bg={backgrounds.cta}
      innerClassName="text-center"
      className="pb-24"
    >
      <Reveal as="h2" className="text-[clamp(1.8rem,5vw,2.8rem)] font-extrabold">
        {cta.title}
      </Reveal>
      <Reveal as="p" delay={0.1} className="mb-8 mt-3 font-semibold">
        {cta.subtitle}
      </Reveal>

      <Stagger
        gap={0.06}
        className="mb-8 flex flex-wrap justify-center gap-x-4 gap-y-1.5 text-[0.8rem] tracking-[0.12em] opacity-75"
      >
        {cta.features.map((f) => (
          <StaggerItem
            key={f}
            className="after:ml-4 after:opacity-50 after:content-['|'] last:after:hidden max-md:after:hidden"
          >
            {f}
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal delay={0.2}>
        <StoreButtons className="justify-center" />
      </Reveal>

      <Reveal as="p" delay={0.3} className="mt-6 font-extrabold">
        {cta.footer}
      </Reveal>
    </Section>
  );
}
