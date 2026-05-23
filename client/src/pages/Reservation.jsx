import PageTransition from '../components/ui/PageTransition.jsx';
import Seo from '../components/ui/Seo.jsx';
import SectionHeader from '../components/ui/SectionHeader.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import ReservationForm from '../components/reservation/ReservationForm.jsx';

export default function Reservation() {
  return (
    <PageTransition>
      <Seo title="Reservation" path="/reservation" description="Reserve a table, room, or dining package at Lumiere with validation, WhatsApp booking, and confirmation-ready backend architecture." />
      <section className="relative overflow-hidden bg-ink pb-16 pt-36 text-porcelain">
        <div className="absolute inset-0 luxury-ambient opacity-70" />
        <div className="section-shell relative z-10">
          <SectionHeader as="h1" invert eyebrow="Reservation" title="Book the evening without friction." copy="A conversion-focused booking flow with validation, date and time selection, guest count, table or room choice, email confirmation, and WhatsApp handoff." />
        </div>
      </section>
      <section className="bg-porcelain py-16 md:py-24">
        <div className="section-shell grid gap-8 lg:grid-cols-[1.15fr_.85fr]">
          <Reveal className="rounded-[32px] border border-champagne/[0.24] bg-[linear-gradient(145deg,rgba(118,52,63,0.94),rgba(18,17,15,0.97)_62%)] p-5 text-porcelain shadow-glow md:p-8">
            <ReservationForm surface="dark" />
          </Reveal>
          <Reveal className="rounded-[32px] bg-ink p-8 text-porcelain shadow-glow">
            <h2 className="font-display text-4xl font-semibold">Reservation architecture</h2>
            <p className="mt-4 leading-8 text-porcelain/68">
              The system separates client validation, API validation, persistence, email delivery, and WhatsApp handoff so each layer can scale independently.
            </p>
            <div className="mt-8 space-y-4">
              {[
                'Date picker with future-date validation',
                'Time slot and guest-count controls',
                'Table, room, chef table, and private dining selection',
                'Sanitized Express API with reservation-specific rate limit',
                'Email confirmation and WhatsApp URL generation'
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-porcelain/78">{item}</div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
