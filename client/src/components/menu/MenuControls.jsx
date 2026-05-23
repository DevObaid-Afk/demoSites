import { FiSearch, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { slideUp } from '../../utils/animations.js';

export default function MenuControls({ categories, activeCategory, searchTerm, onCategoryChange, onSearchChange }) {
  return (
    <motion.div
      variants={slideUp}
      initial="hidden"
      animate="visible"
      className="mx-auto mt-10 max-w-6xl rounded-[30px] border border-white/10 bg-white/[0.055] p-3 shadow-glow backdrop-blur-xl md:p-4"
    >
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center">
        <label className="relative min-w-0 flex-1">
          <span className="sr-only">Search menu items</span>
          <FiSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-porcelain/50" />
          <input
            value={searchTerm}
            onChange={(event) => onSearchChange(event.target.value)}
            className="focus-ring h-14 min-h-14 w-full rounded-full border border-white/10 bg-ink/58 py-4 pl-11 pr-12 text-porcelain placeholder:text-porcelain/52"
            placeholder="Search dishes, ingredients, popular..."
            type="search"
          />
          {searchTerm && (
            <button
              type="button"
              className="focus-ring absolute right-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full text-porcelain/66 transition hover:bg-white/10 hover:text-porcelain"
              onClick={() => onSearchChange('')}
              aria-label="Clear menu search"
            >
              <FiX />
            </button>
          )}
        </label>

        <div className="flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Menu categories">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => onCategoryChange(category)}
              className={`focus-ring min-h-12 shrink-0 rounded-full px-5 text-sm font-bold transition ${
                activeCategory === category
                  ? 'bg-champagne text-ink shadow-glow'
                  : 'bg-white/[0.08] text-porcelain hover:bg-white/[0.14]'
              }`}
              role="tab"
              aria-selected={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
