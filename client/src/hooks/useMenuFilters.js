import { useDeferredValue, useMemo, useState } from 'react';
import { menuCategories, menuItems } from '../data/menu.js';

export function useMenuFilters() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const deferredSearch = useDeferredValue(searchTerm);

  const filteredItems = useMemo(() => {
    const normalizedSearch = deferredSearch.trim().toLowerCase();

    return menuItems.filter((item) => {
      const categoryMatch = activeCategory === 'All' || item.category === activeCategory;
      const searchableText = [
        item.name,
        item.category,
        item.description,
        item.type,
        item.popular ? 'popular' : '',
        ...item.tags
      ]
        .join(' ')
        .toLowerCase();

      return categoryMatch && (!normalizedSearch || searchableText.includes(normalizedSearch));
    });
  }, [activeCategory, deferredSearch]);

  const popularCount = useMemo(() => menuItems.filter((item) => item.popular).length, []);

  return {
    activeCategory,
    categories: menuCategories,
    filteredItems,
    popularCount,
    searchTerm,
    setActiveCategory,
    setSearchTerm,
    totalCount: menuItems.length
  };
}
