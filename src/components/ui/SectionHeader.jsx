import { Reveal } from "../animations";

export default function SectionHeader({ tag, title, subtitle, subtitleHtml, align = "center", light = false }) {
  return (
    <header
      className={`relative z-10 mb-10 ${align === "left" ? "text-left" : "text-center"} ${
        light ? "text-white" : ""
      }`}
    >
      {tag && (
        <span className="my-8 block text-[0.7rem] uppercase tracking-[0.08em] opacity-60">
          {tag}
        </span>
      )}
      <Reveal as="h2" className="text-[clamp(1.8rem,5vw,3rem)] font-extrabold">
        {title}
      </Reveal>
      {(subtitle || subtitleHtml) && (
    <Reveal
      as="h3"
      className="mt-2.5 text-[clamp(1rem,2.2vw,1.25rem)]"
      delay={0.1}
      {...(subtitleHtml ? { dangerouslySetInnerHTML: { __html: subtitleHtml } } : {})}
    >
      {subtitle}
    </Reveal>
  )}
    </header>
  );
}
