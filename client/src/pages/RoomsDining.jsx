import { rooms } from '../data/content.js';
import PageTransition from '../components/ui/PageTransition.jsx';
import Seo from '../components/ui/Seo.jsx';
import SectionHeader from '../components/ui/SectionHeader.jsx';
import Button from '../components/ui/Button.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import OptimizedImage from '../components/ui/OptimizedImage.jsx';

export default function RoomsDining() {
  return (
    <PageTransition>
      <Seo title="Rooms / Dining" path="/rooms-dining" description="Discover Lumiere's boutique hotel rooms, dining packages, and chef-table stay experiences." />
      <section className="bg-ink pb-16 pt-36 text-porcelain">
        <div className="section-shell">
          <SectionHeader as="h1" invert eyebrow="Rooms / Dining" title="Stay for the room. Return for the table." copy="Package cards are designed to make high-value bookings easy to compare on mobile, tablet, and desktop." />
        </div>
      </section>
      <section className="bg-porcelain py-16 md:py-24">
        <div className="section-shell grid gap-6 lg:grid-cols-3">
          {rooms.map((room, index) => (
            <Reveal key={room.name} delay={index * 0.08} className="group overflow-hidden rounded-[30px] bg-white shadow-soft">
              <div className="aspect-[4/3] overflow-hidden">
                <OptimizedImage className="h-full w-full object-cover transition duration-700 group-hover:scale-110" src={room.image} alt={room.name} width={1200} height={900} />
              </div>
              <div className="p-7">
                <div className="flex items-start justify-between gap-4">
                  <h2 className="font-display text-4xl font-semibold">{room.name}</h2>
                  <p className="font-bold text-copper">{room.price}</p>
                </div>
                <ul className="mt-6 space-y-3 text-ink/66">
                  {room.details.map((detail) => <li key={detail}>• {detail}</li>)}
                </ul>
                <Button to="/reservation" variant="dark" className="mt-7 w-full">Book package</Button>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
