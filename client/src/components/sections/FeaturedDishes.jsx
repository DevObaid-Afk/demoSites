import { featuredDishes } from '../../data/content.js';
import Reveal from '../ui/Reveal.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';
import OptimizedImage from '../ui/OptimizedImage.jsx';

export default function FeaturedDishes() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-porcelain md:py-28">
      <div className="absolute inset-0 luxury-ambient opacity-80" />
      <div className="section-shell relative z-10">
        <SectionHeader invert eyebrow="Seasonal signatures" title="Plates composed for appetite, theatre, and memory." copy="Every course is built around texture, aroma, pacing, and the kind of detail guests remember after checkout." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featuredDishes.map((dish, index) => (
            <Reveal key={dish.name} delay={index * 0.08} className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.06] shadow-glow backdrop-blur transition-colors duration-500 hover:border-champagne/35">
              <div className="image-sheen relative aspect-[4/3] overflow-hidden">
                <OptimizedImage className="h-full w-full object-cover transition duration-700 group-hover:scale-110" src={dish.image} alt={dish.name} />
              </div>
              <div className="p-6">
                <div className="mb-4 inline-flex rounded-full bg-champagne/[0.16] px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-champagne">{dish.tag}</div>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-3xl font-semibold">{dish.name}</h3>
                  <p className="font-bold text-champagne">{dish.price}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
