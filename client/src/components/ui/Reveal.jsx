import { motion } from 'framer-motion';
import { revealMotion, transitions } from '../../utils/animations.js';

export default function Reveal({ children, className = '', delay = 0, as = 'div', ...props }) {
  const Component = motion[as] || motion.div;
  return (
    <Component
      {...revealMotion}
      transition={{ ...transitions.reveal, delay }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
}
