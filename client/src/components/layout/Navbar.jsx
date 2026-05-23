import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { navItems } from '../../data/content.js';
import Button from '../ui/Button.jsx';
import { useReservationModal } from '../../context/ReservationModalContext.jsx';
import { mobileMenuItemMotion, mobileMenuMotion, navShellState } from '../../utils/animations.js';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openReservationModal } = useReservationModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled ? 'py-3' : 'py-5'}`}>
      <motion.nav
        initial={false}
        animate={navShellState(scrolled)}
        className={`section-shell flex items-center justify-between rounded-full px-5 py-3 text-soft-shadow shadow-glow transition-colors ${scrolled ? 'dark-glass' : 'border border-white/15 bg-ink/62 backdrop-blur-xl'}`}
        aria-label="Main navigation"
      >
        <NavLink to="/" className="focus-ring rounded-full font-display text-2xl font-bold text-white">
          Lumiere
        </NavLink>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `focus-ring rounded-full px-1 text-sm font-bold transition-colors ${isActive ? 'text-champagne' : 'text-white/90 hover:text-white'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button type="button" onClick={openReservationModal} className="min-h-10 px-5 text-xs">Book now</Button>
        </div>

        <button
          type="button"
          className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-white/25 text-white lg:hidden"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            variants={mobileMenuMotion}
            initial="initial"
            animate="animate"
            exit="exit"
            className="section-shell mobile-nav-panel mt-3 overflow-hidden rounded-[28px] p-4 lg:hidden"
          >
            {navItems.map((item) => (
              <motion.div key={item.href} variants={mobileMenuItemMotion}>
                <NavLink
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `focus-ring block rounded-2xl px-4 py-3 font-semibold transition-colors ${
                      isActive
                        ? 'bg-champagne/[0.18] text-champagne'
                        : 'text-porcelain/[0.88] hover:bg-porcelain/10 hover:text-white'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
