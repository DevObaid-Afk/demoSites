import { motion } from 'framer-motion';
import { pageMotion } from '../../utils/animations.js';

export default function PageTransition({ children }) {
  return (
    <motion.main id="main-content" tabIndex="-1" {...pageMotion}>
      {children}
    </motion.main>
  );
}
