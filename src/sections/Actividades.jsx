import { content } from "../data/content.js";
import { backgrounds } from "../data/backgrounds.js";
import Section from "../components/ui/Section.jsx";
import { Reveal, FloatIn, ParallaxImage } from "../components/animations";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import Closing from "../components/ui/Closing.jsx";
import { assetUrl } from "../utils/assets.js";

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

  <div className="relative left-1/2 w-screen max-w-[1920px] -translate-x-1/2">
    <FloatIn
      src={assetUrl("/images/flamingo-left.png")}
      from="left"
      float={12}
      className="absolute -left-[70%] -top-16 z-0 w-[100%] md:-left-[20%] md:top-0 md:w-[36%]"
    />

    <div className="relative z-10 grid grid-cols-1 items-center gap-8 px-5 text-center md:grid-cols-[1fr_1.2fr] md:pl-[24%] md:pr-[6%] md:text-left">
      <Reveal direction="right">
        <h3 className="mb-2.5 py-4 text-2xl font-bold">{actividades.lead}</h3>
        <p className="py-4">{actividades.body}</p>
      </Reveal>

      <Reveal direction="left">
        <ParallaxImage
          src={assetUrl("/images/actividades-screens.png")}
          alt="Actividades disponibles en la App Xcaret"
          className="mx-auto block w-full sm:w-[320px] md:w-[10/12] xl:min-w-[720px]"
          speed={30}
          rotate={1.5}
        />
      </Reveal>
    </div>
  </div>

  <Closing className="text-white">{actividades.closing}</Closing>
</Section>
  );
}
