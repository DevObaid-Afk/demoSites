import { useEffect, useId, useRef } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import { modalBackdropMotion, modalPanelMotion } from '../../utils/animations.js';

export default function Modal({ open, title, children, onClose }) {
  const titleId = useId();
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.setTimeout(() => closeRef.current?.focus(), 0);
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose]);

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          {...modalBackdropMotion}
          className="fixed inset-0 z-[80] grid place-items-end bg-ink/76 p-3 backdrop-blur-sm sm:place-items-center sm:p-6"
          role="presentation"
          onMouseDown={onClose}
        >
          <motion.section
            {...modalPanelMotion}
            className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-[28px] bg-porcelain p-5 shadow-glow md:p-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.26em] text-copper">Quick booking</p>
                <h2 id={titleId} className="mt-2 font-display text-4xl font-semibold text-ink">{title}</h2>
              </div>
              <button
                ref={closeRef}
                type="button"
                className="focus-ring grid h-11 w-11 shrink-0 place-items-center rounded-full bg-ink text-porcelain transition hover:bg-charcoal"
                aria-label="Close reservation modal"
                onClick={onClose}
              >
                <FiX />
              </button>
            </div>
            {children}
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
