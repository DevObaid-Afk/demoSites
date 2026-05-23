import { FaStar } from 'react-icons/fa6';
import { testimonials } from '../../data/content.js';
import Reveal from '../ui/Reveal.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';

export default function Testimonials() {
  return (
    <section className="bg-charcoal py-20 text-porcelain md:py-28">
      <div className="section-shell">
        <SectionHeader invert eyebrow="Social proof" title="Guests describe it as effortless luxury." />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal
              key={item.name}
              delay={index * 0.08}
              className="rounded-[30px] border border-white/10 bg-white/[0.055] p-7 shadow-soft transition-colors duration-500 hover:border-champagne/30"
            >
              <div className="flex gap-1 text-champagne" aria-label={`${item.rating} star rating`}>
                {Array.from({ length: item.rating }).map((_, star) => <FaStar key={star} />)}
              </div>
              <p className="mt-6 text-lg leading-8 text-porcelain/76">"{item.text}"</p>
              <p className="mt-6 font-bold text-champagne">{item.name}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
