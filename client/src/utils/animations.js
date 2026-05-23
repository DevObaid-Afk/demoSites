export const easings = {
  premium: [0.22, 1, 0.36, 1],
  soft: [0.16, 1, 0.3, 1],
  crisp: [0.4, 0, 0.2, 1]
};

export const transitions = {
  page: { duration: 0.42, ease: easings.premium },
  reveal: { duration: 0.72, ease: easings.premium },
  card: { duration: 0.38, ease: easings.soft },
  nav: { duration: 0.28, ease: easings.crisp },
  modal: { duration: 0.28, ease: 'easeOut' },
  slowImage: { duration: 5.4, ease: 'easeOut' },
  float: { duration: 6.5, repeat: Infinity, ease: 'easeInOut' }
};

export const viewport = {
  once: true,
  margin: '-80px',
  amount: 0.18
};

export const pageMotion = {
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
  variants: {
    initial: { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0, transition: transitions.page },
    exit: { opacity: 0, y: -12, transition: { duration: 0.22, ease: easings.crisp } }
  }
};

export const revealMotion = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport,
  variants: {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 }
  }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transitions.reveal }
};

export const slideUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: transitions.reveal }
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08
    }
  }
};

export const staggerItem = {
  hidden: { opacity: 0, y: 22, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: transitions.card
  }
};

export const cardMotion = {
  initial: { opacity: 0, y: 24, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 18, scale: 0.98 },
  whileHover: { y: -8, scale: 1.01 },
  transition: transitions.card
};

export const buttonMotion = {
  whileHover: { y: -2 },
  whileTap: { scale: 0.98 },
  transition: { duration: 0.18, ease: easings.crisp }
};

export function navShellState(scrolled) {
  return {
    y: 0,
    scale: scrolled ? 0.985 : 1,
    transition: transitions.nav
  };
}

export const mobileMenuMotion = {
  initial: { opacity: 0, y: -14, scale: 0.98 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { ...transitions.nav, staggerChildren: 0.045, delayChildren: 0.04 }
  },
  exit: { opacity: 0, y: -14, scale: 0.98, transition: { duration: 0.18, ease: easings.crisp } }
};

export const mobileMenuItemMotion = {
  initial: { opacity: 0, x: -10 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -8 }
};

export const heroImageMotion = {
  initial: { scale: 1.08 },
  animate: { scale: 1 },
  transition: transitions.slowImage
};

export const heroContentMotion = {
  initial: 'hidden',
  animate: 'visible',
  variants: {
    hidden: { opacity: 0, y: 34 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ...transitions.reveal, staggerChildren: 0.08, delayChildren: 0.12 }
    }
  }
};

export const heroChildMotion = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: transitions.reveal }
};

export function floatingMotion(distance = 12, duration = 6.5) {
  return {
    animate: { y: [0, -distance, 0] },
    transition: { ...transitions.float, duration }
  };
}

export const galleryHoverMotion = {
  whileHover: { y: -5, scale: 1.015 },
  transition: transitions.card
};

export const statHoverMotion = {
  whileHover: { y: -4 },
  transition: transitions.card
};

export const modalBackdropMotion = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2, ease: easings.crisp }
};

export const modalPanelMotion = {
  initial: { opacity: 0, y: 24, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 24, scale: 0.98 },
  transition: transitions.modal
};
