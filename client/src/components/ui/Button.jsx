import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { buttonMotion } from '../../utils/animations.js';

const variants = {
  primary: 'bg-champagne text-ink hover:bg-[#e4c678]',
  secondary: 'border border-champagne/50 text-porcelain hover:bg-champagne hover:text-ink',
  dark: 'bg-ink text-porcelain hover:bg-charcoal'
};

export default function Button({ children, to, href, variant = 'primary', className = '', ...props }) {
  const classes = `focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-bold uppercase tracking-[0.16em] transition-colors disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${className}`;
  const content = (
    <motion.span {...buttonMotion} className="inline-flex items-center gap-2">
      {children}
    </motion.span>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
