import { FiArrowRight } from 'react-icons/fi';
import { rooms } from '../../data/content.js';
import Reveal from '../ui/Reveal.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';
import Button from '../ui/Button.jsx';
import OptimizedImage from '../ui/OptimizedImage.jsx';

export default function HotelRooms() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-porcelain md:py-28">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#1c1a17_0%,#12110f_100%)]" />
      <div className="absolute inset-x-0 top-0 gold-divider" />
      <div className="section-shell relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <SectionHeader
            align="left"
            invert
            eyebrow="Boutique rooms"
            title="Rooms that make dinner feel like a destination."
            copy="Each room package is designed as a calm next step after the table: soft linens, quiet finishes, and hospitality that follows the guest upstairs."
          />
          <Reveal className="flex justify-start lg:justify-end">
            <Button to="/rooms-dining" variant="secondary">
              Explore all stays <FiArrowRight />
            </Button>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {rooms.map((room, index) => (
            <Reveal
              key={room.name}
              delay={index * 0.08}
              className={`group overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.055] shadow-glow backdrop-blur transition-colors duration-500 hover:border-champagne/35 ${index === 1 ? 'lg:translate-y-8' : ''
                }`}
            >
              <div className="image-sheen relative aspect-[4/3] overflow-hidden">
                <OptimizedImage
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  src={room.image}
                  alt={room.name}
                />
              </div>
              <div className="p-7">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-4xl font-semibold">{room.name}</h3>
                  <p className="rounded-full bg-champagne px-4 py-2 text-sm font-bold text-ink">{room.price}</p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {room.details.map((detail) => (
                    <span key={detail} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-sm text-porcelain/72">
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
