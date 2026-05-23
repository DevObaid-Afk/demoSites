import { AnimatePresence, motion } from 'framer-motion';
import MenuCard from './MenuCard.jsx';
import { slideUp } from '../../utils/animations.js';

export default function MenuGrid({ items, searchTerm }) {
  return (
    <div className="section-shell">
      {items.length > 0 ? (
        <motion.div layout className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence>
            {items.map((item, index) => (
              <MenuCard key={item.id} item={item} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key="empty-menu"
            variants={slideUp}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="rounded-[30px] border border-white/10 bg-white/[0.055] p-10 text-center text-porcelain shadow-soft"
          >
            <h2 className="font-display text-4xl font-semibold">No dishes found</h2>
            <p className="mx-auto mt-3 max-w-xl leading-7 text-porcelain/66">
              Nothing matches "{searchTerm}". Try a category, ingredient, or popular item search.
            </p>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
