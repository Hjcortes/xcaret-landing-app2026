import { STORES } from "../../data/content.js";

export default function StoreButtons({ className = "justify-center" }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {Object.entries(STORES).map(([key, s]) => (
        <a
          key={key}
          href={s.href}
          aria-label={s.label}
          className="inline-block transition-transform duration-200 hover:-translate-y-0.5 hover:scale-105"
        >
          <img src={s.img} alt={s.label} height="44" className="block h-11 w-auto" />
        </a>
      ))}
    </div>
  );
}
