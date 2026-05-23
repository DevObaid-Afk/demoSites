import { FiArrowRight } from 'react-icons/fi';
import Button from '../ui/Button.jsx';
import Reveal from '../ui/Reveal.jsx';
import { useReservationModal } from '../../context/ReservationModalContext.jsx';

export default function ReservationCta() {
  const { openReservationModal } = useReservationModal();

  return (
    <section className="relative overflow-hidden bg-ink px-4 py-20 text-porcelain md:py-28">
      <div className="absolute inset-0 luxury-ambient opacity-70" />
      <Reveal className="relative z-10 mx-auto max-w-6xl overflow-hidden rounded-[36px] border border-champagne/20 bg-[linear-gradient(135deg,rgba(216,180,106,.28),rgba(118,52,63,.3)_45%,rgba(18,17,15,.82))] p-8 text-center shadow-glow md:p-16">
        <div className="mx-auto mb-8 h-px max-w-xs bg-champagne/60" />
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-champagne">Book with confidence</p>
        <h2 className="mt-4 font-display text-4xl font-semibold md:text-6xl">Reserve a table, a room, or the full evening.</h2>
        <p className="mx-auto mt-5 max-w-2xl leading-8 text-porcelain/72">Choose dinner, a suite, chef-table stay, or private dining. The booking flow is fast, clear, and supported by a direct concierge handoff.</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button type="button" onClick={openReservationModal}>Start reservation <FiArrowRight /></Button>
          <Button to="/contact" variant="secondary">Plan an event</Button>
        </div>
      </Reveal>
    </section>
  );
}
