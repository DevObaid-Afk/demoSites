import { memo } from 'react';
import { motion } from 'framer-motion';
import { FaFire } from 'react-icons/fa6';
import OptimizedImage from '../ui/OptimizedImage.jsx';
import { cardMotion } from '../../utils/animations.js';
import { formatINR } from '../../utils/currency.js';

function MenuCard({ item, index }) {
  const isVeg = item.type === 'veg';

  return (
    <motion.article
      layout
      {...cardMotion}
      transition={{ ...cardMotion.transition, delay: Math.min(index * 0.035, 0.18) }}
      className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.055] shadow-soft backdrop-blur transition-colors duration-500 hover:border-champagne/35 hover:shadow-glow will-change-transform"
    >
      <div className="image-sheen relative aspect-[4/3] overflow-hidden">
        <OptimizedImage
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <span className={`rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] backdrop-blur-md ${isVeg ? 'border-sage/50 bg-sage/20 text-white' : 'border-wine/60 bg-wine/[0.55] text-white'}`}>
            {isVeg ? 'Veg' : 'Non-veg'}
          </span>
          {item.popular && (
            <span className="inline-flex items-center gap-1 rounded-full border border-champagne/45 bg-ink/[0.62] px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-champagne backdrop-blur-md">
              <FaFire /> Popular
            </span>
          )}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-champagne">{item.category}</p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-porcelain">{item.name}</h2>
          </div>
          <p className="rounded-full bg-champagne px-4 py-2 font-bold text-ink">{formatINR(item.price)}</p>
        </div>
        <p className="mt-4 leading-7 text-porcelain/66">{item.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold text-porcelain/66">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default memo(MenuCard);
