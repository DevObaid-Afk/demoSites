import { amenityIcons } from '../data/content.js';
import PageTransition from '../components/ui/PageTransition.jsx';
import Seo from '../components/ui/Seo.jsx';
import SectionHeader from '../components/ui/SectionHeader.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import OptimizedImage from '../components/ui/OptimizedImage.jsx';

export default function About() {
  return (
    <PageTransition>
      <Seo title="About" path="/about" description="Learn about Lumiere's boutique hospitality concept, culinary philosophy, and guest-first service approach." />
      <section className="bg-ink pt-36 text-porcelain">
        <div className="section-shell grid gap-10 pb-20 lg:grid-cols-[.9fr_1.1fr]">
          <SectionHeader as="h1" align="left" invert eyebrow="Our story" title="Luxury with a pulse, not a script." copy="Lumiere is built as a hospitality demo for venues that need to sell tables, rooms, private dining, and trust from the first scroll." />
          <Reveal className="overflow-hidden rounded-[32px] shadow-glow">
            <OptimizedImage src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=82" alt="Elegant restaurant service" className="h-full min-h-[420px] w-full object-cover" width={1400} height={933} sizes="(min-width: 1024px) 50vw, 100vw" />
          </Reveal>
        </div>
      </section>
      <section className="bg-porcelain py-20 md:py-28">
        <div className="section-shell grid gap-8 lg:grid-cols-4">
          {['Ingredient-led menus', 'Human-first service', 'Room and table journeys', 'Conversion-aware design'].map((item, index) => {
            const Icon = amenityIcons[index];
            return (
              <Reveal key={item} delay={index * 0.08} className="rounded-[28px] bg-white p-7 shadow-soft">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-ink text-champagne"><Icon /></div>
                <h2 className="mt-6 font-display text-3xl font-semibold">{item}</h2>
                <p className="mt-3 leading-7 text-ink/64">A polished section pattern that can scale into a real hospitality brand system.</p>
              </Reveal>
            );
          })}
        </div>
      </section>
    </PageTransition>
  );
}
