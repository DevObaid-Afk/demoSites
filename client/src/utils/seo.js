export const site = {
  name: 'Lumiere Stay & Table',
  url: 'https://www.lumierestaytable.com',
  locale: 'en_US',
  twitterHandle: '@lumierestay',
  phone: '+1-555-123-4567',
  image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80',
  description:
    'A luxury restaurant and boutique hotel experience with chef-led dining, serene rooms, and effortless reservations.',
  address: {
    streetAddress: '18 Aurelia Lane',
    addressLocality: 'Downtown',
    addressRegion: 'NY',
    postalCode: '10012',
    addressCountry: 'US'
  }
};

export function pageTitle(title) {
  return title ? `${title} | ${site.name}` : site.name;
}

export function absoluteUrl(path = '/') {
  return `${site.url}${path.startsWith('/') ? path : `/${path}`}`;
}

export function localBusinessSchema({ url = site.url, image = site.image, description = site.description } = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': ['Restaurant', 'Hotel'],
    '@id': `${site.url}/#business`,
    name: site.name,
    url,
    image,
    description,
    telephone: site.phone,
    priceRange: '$$$',
    servesCuisine: ['Modern European', 'Seasonal', 'Indian-inspired'],
    amenityFeature: ['Restaurant', 'Boutique hotel rooms', 'Private dining', 'Reservations'],
    address: {
      '@type': 'PostalAddress',
      ...site.address
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '07:00',
        closes: '23:00'
      }
    ],
    sameAs: ['https://instagram.com', 'https://wa.me/15551234567']
  };
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}
