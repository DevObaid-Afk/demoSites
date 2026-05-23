import { FaClock, FaLocationDot, FaPhone } from 'react-icons/fa6';
import Reveal from '../ui/Reveal.jsx';

export default function LocationSection() {
  const items = [
    { icon: FaLocationDot, title: 'Address', text: '18 Aurelia Lane, Downtown, NY 10012' },
    { icon: FaClock, title: 'Hours', text: 'Breakfast 7-10, Dinner 5-11, Stays daily' },
    { icon: FaPhone, title: 'Concierge', text: '+1 (555) 123-4567' }
  ];

  return (
    <section className="bg-porcelain py-20 md:py-28">
      <div className="section-shell grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-copper">Location</p>
          <h2 className="mt-4 font-display text-4xl font-semibold md:text-6xl">In the city, softened by hospitality.</h2>
          <div className="mt-8 space-y-4">
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex gap-4 rounded-3xl bg-white p-5 shadow-soft transition-colors hover:bg-white/90">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-ink text-champagne"><Icon /></div>
                  <div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="mt-1 text-ink/66">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
        <Reveal className="min-h-[360px] overflow-hidden rounded-[30px] border border-ink/10 shadow-soft">
          <iframe
            title="Map showing Lumiere downtown location"
            className="h-full min-h-[360px] w-full"
            loading="lazy"
            width="900"
            height="420"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=New%20York%20SoHo&output=embed"
          />
        </Reveal>
      </div>
    </section>
  );
}
