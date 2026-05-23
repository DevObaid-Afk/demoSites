import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';
import { navItems } from '../../data/content.js';

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com', icon: FaInstagram },
  { label: 'WhatsApp', href: 'https://wa.me/15551234567', icon: FaWhatsapp },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: FaLinkedinIn }
];

export default function Footer() {
  return (
    <footer className="bg-ink py-14 text-porcelain">
      <div className="section-shell grid gap-10 md:grid-cols-[1.2fr_.8fr_.8fr]">
        <div>
          <Link to="/" className="font-display text-4xl font-bold">Lumiere</Link>
          <p className="mt-4 max-w-md leading-7 text-porcelain/66">
            Chef-led dining, boutique suites, private events, and polished hospitality in the heart of the city.
          </p>
          <div className="mt-6 flex gap-3">
            {socialLinks.map((item) => (
              <a key={item.label} className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-white/15 text-porcelain transition-colors hover:bg-white/10" href={item.href} aria-label={item.label} target="_blank" rel="noreferrer">
                <item.icon />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.22em] text-champagne">Explore</h2>
          <ul className="mt-5 space-y-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link className="text-porcelain/70 transition hover:text-porcelain" to={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.22em] text-champagne">Visit</h2>
          <address className="mt-5 not-italic leading-8 text-porcelain/70">
            18 Aurelia Lane<br />
            Downtown, NY 10012<br />
            hello@lumierestaytable.com<br />
            +1 (555) 123-4567
          </address>
        </div>
      </div>
      <div className="section-shell mt-10 border-t border-white/10 pt-6 text-sm text-porcelain/48">
        <p>© 2026 Lumiere Stay & Table. All rights reserved.</p>
      </div>
    </footer>
  );
}
