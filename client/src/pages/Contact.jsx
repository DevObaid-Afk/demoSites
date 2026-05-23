import { useCallback, useState } from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa6';
import PageTransition from '../components/ui/PageTransition.jsx';
import Seo from '../components/ui/Seo.jsx';
import SectionHeader from '../components/ui/SectionHeader.jsx';
import Button from '../components/ui/Button.jsx';
import Reveal from '../components/ui/Reveal.jsx';

export default function Contact() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = Object.fromEntries(new FormData(form));
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Contact failed');

      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }, []);

  return (
    <PageTransition>
      <Seo title="Contact" path="/contact" description="Contact Lumiere for restaurant reservations, boutique hotel stays, private dining, and event enquiries." />
      <section className="bg-ink pb-16 pt-36 text-porcelain">
        <div className="section-shell">
          <SectionHeader as="h1" invert eyebrow="Contact" title="Questions, celebrations, and special requests start here." />
        </div>
      </section>
      <section className="bg-porcelain py-16 md:py-24">
        <div className="section-shell grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <Reveal className="rounded-[32px] bg-white p-6 shadow-soft md:p-8">
            <h2 className="font-display text-4xl font-semibold">Visit Lumiere</h2>
            <div className="mt-6 space-y-5 leading-8 text-ink/68">
              <p>18 Aurelia Lane, Downtown, NY 10012</p>
              <p>Breakfast 7:00-10:00 · Dinner 17:00-23:00 · Hotel desk always open</p>
              <p>hello@lumierestaytable.com · +1 (555) 123-4567</p>
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href="https://wa.me/15551234567" target="_blank" rel="noreferrer"><FaWhatsapp /> WhatsApp</Button>
              <a href="https://instagram.com" className="focus-ring grid h-12 w-12 place-items-center rounded-full bg-ink text-porcelain transition-colors hover:bg-charcoal" aria-label="Instagram" target="_blank" rel="noreferrer"><FaInstagram /></a>
            </div>
            <div className="mt-8 overflow-hidden rounded-[24px]">
              <iframe title="Map to Lumiere" className="h-72 w-full" loading="lazy" width="720" height="288" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=New%20York%20SoHo&output=embed" />
            </div>
          </Reveal>
          <Reveal as="form" onSubmit={handleSubmit} className="grid gap-4 rounded-[32px] bg-white p-5 shadow-soft md:p-8">
            <label className="grid gap-2 text-sm font-bold text-ink/72">Name<input name="name" required autoComplete="name" className="focus-ring h-12 rounded-2xl border border-ink/10 bg-porcelain px-4" /></label>
            <label className="grid gap-2 text-sm font-bold text-ink/72">Email<input name="email" required type="email" autoComplete="email" className="focus-ring h-12 rounded-2xl border border-ink/10 bg-porcelain px-4" /></label>
            <label className="grid gap-2 text-sm font-bold text-ink/72">Subject<input name="subject" required className="focus-ring h-12 rounded-2xl border border-ink/10 bg-porcelain px-4" /></label>
            <label className="grid gap-2 text-sm font-bold text-ink/72">Message<textarea name="message" required rows="6" minLength="10" className="focus-ring rounded-2xl border border-ink/10 bg-porcelain p-4" /></label>
            <Button type="submit" variant="dark" disabled={status === 'sending'}>{status === 'sending' ? 'Sending...' : 'Send message'}</Button>
            <div aria-live="polite">
              {status === 'sent' && <p className="rounded-2xl bg-sage/[0.18] p-4 font-semibold">Message received.</p>}
              {status === 'error' && <p className="rounded-2xl bg-wine/[0.14] p-4 font-semibold text-wine">Message could not send right now.</p>}
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
