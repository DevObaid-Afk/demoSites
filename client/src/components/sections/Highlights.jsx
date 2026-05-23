import { highlights, stats } from '../../data/content.js';
import Reveal from '../ui/Reveal.jsx';

export default function Highlights() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-20 text-porcelain md:py-28">
      <div className="absolute inset-x-0 top-0 gold-divider" />
      <div className="section-shell grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-champagne">Guest experience</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">Everything feels considered before you ask.</h2>
          <p className="mt-5 leading-8 text-porcelain/70">
            Lumiere blends the revenue power of reservations with the emotional pull of hospitality: stay, dine, celebrate, return.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 shadow-soft">
                <p className="font-display text-4xl text-champagne">{stat.value}</p>
                <p className="mt-1 text-sm text-porcelain/58">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.06} className="group rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-soft transition-colors duration-500 hover:border-champagne/35 hover:bg-white/[0.07]">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-champagne text-xl text-ink"><Icon /></div>
                <h3 className="mt-6 font-display text-3xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-porcelain/64">{item.text}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
