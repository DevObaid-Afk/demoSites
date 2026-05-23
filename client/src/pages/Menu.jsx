import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/ui/PageTransition.jsx';
import Seo from '../components/ui/Seo.jsx';
import SectionHeader from '../components/ui/SectionHeader.jsx';
import MenuControls from '../components/menu/MenuControls.jsx';
import MenuGrid from '../components/menu/MenuGrid.jsx';
import { menuItems } from '../data/menu.js';
import { useMenuFilters } from '../hooks/useMenuFilters.js';

export default function Menu() {
  const {
    activeCategory,
    categories,
    filteredItems,
    popularCount,
    searchTerm,
    setActiveCategory,
    setSearchTerm,
    totalCount
  } = useMenuFilters();

  const menuJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    name: 'Lumiere Seasonal Restaurant Menu',
    hasMenuSection: categories
      .filter((category) => category !== 'All')
      .map((category) => ({
        '@type': 'MenuSection',
        name: category,
        hasMenuItem: menuItems
          .filter((item) => item.category === category)
          .map((item) => ({
            '@type': 'MenuItem',
            name: item.name,
            description: item.description,
            image: item.image,
            offers: {
              '@type': 'Offer',
              price: item.price,
              priceCurrency: 'INR'
            }
          }))
      }))
  };

  return (
    <PageTransition>
      <Seo
        title="Menu"
        path="/menu"
        description="Explore Lumiere's luxury restaurant menu with category filters, search, dietary badges, popular dishes, pricing, and seasonal specials."
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(menuJsonLd)}</script>
      </Helmet>

      <section className="relative overflow-hidden bg-ink pb-16 pt-36 text-porcelain">
        <div className="absolute inset-0 luxury-ambient opacity-70" />
        <div className="section-shell relative z-10">
          <SectionHeader
            as="h1"
            invert
            eyebrow="Menu"
            title="Seasonal plates, polished classics, and crafted pours."
            copy="Search, filter, and compare a chef-led menu built for mobile-first browsing and high-intent reservations."
          />

          <div className="mx-auto mt-8 grid max-w-4xl gap-3 sm:grid-cols-3">
            {[
              [`${totalCount}`, 'curated items'],
              [`${popularCount}`, 'popular picks'],
              [activeCategory, 'active category']
            ].map(([value, label]) => (
              <div key={label} className="rounded-[24px] border border-white/10 bg-white/[0.055] p-4 text-center shadow-soft backdrop-blur">
                <p className="font-display text-3xl text-champagne">{value}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-porcelain/58">{label}</p>
              </div>
            ))}
          </div>

          <MenuControls
            categories={categories}
            activeCategory={activeCategory}
            searchTerm={searchTerm}
            onCategoryChange={setActiveCategory}
            onSearchChange={setSearchTerm}
          />
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#12110f_0%,#1c1a17_48%,#12110f_100%)] py-16 text-porcelain md:py-24">
        <MenuGrid items={filteredItems} searchTerm={searchTerm} />
      </section>
    </PageTransition>
  );
}
