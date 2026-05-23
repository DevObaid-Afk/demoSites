import { gallery } from '../../data/content.js';
import Reveal from '../ui/Reveal.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';
import OptimizedImage from '../ui/OptimizedImage.jsx';
import { galleryHoverMotion } from '../../utils/animations.js';

export default function Gallery() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-porcelain md:py-28">
      <div className="absolute inset-x-0 top-0 gold-divider" />
      <div className="section-shell">
        <SectionHeader invert eyebrow="Instagram gallery" title="A visual rhythm of rooms, tables, and warm service." />
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {gallery.map((image, index) => (
            <Reveal
              key={image}
              delay={index * 0.04}
              {...galleryHoverMotion}
              className={`group image-sheen relative overflow-hidden rounded-[26px] border border-white/10 shadow-soft transition-colors duration-500 hover:border-champagne/35 will-change-transform ${index === 1 || index === 4 ? 'md:row-span-2' : ''}`}
            >
              <OptimizedImage className="h-full min-h-44 w-full object-cover transition duration-700 group-hover:scale-110" src={image} alt="Lumiere dining and hotel atmosphere" sizes="(min-width: 768px) 25vw, 50vw" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
