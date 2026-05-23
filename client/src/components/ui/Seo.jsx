import { Helmet } from 'react-helmet-async';
import { absoluteUrl, breadcrumbSchema, localBusinessSchema, pageTitle, site } from '../../utils/seo.js';

export default function Seo({
  title,
  description = site.description,
  path = '/',
  image = site.image,
  type = 'website',
  keywords = 'luxury restaurant, boutique hotel, private dining, reservations, tasting menu',
  noindex = false,
  jsonLd = []
}) {
  const canonical = absoluteUrl(path);
  const resolvedTitle = pageTitle(title);
  const schemas = [
    localBusinessSchema({ url: canonical, image, description }),
    breadcrumbSchema([{ name: 'Home', path: '/' }, ...(path === '/' ? [] : [{ name: title || site.name, path }])]),
    ...jsonLd
  ];

  return (
    <Helmet>
      <html lang="en" />
      <title>{resolvedTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={noindex ? 'noindex,nofollow' : 'index,follow,max-image-preview:large'} />
      <link rel="canonical" href={canonical} />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:locale" content={site.locale} />
      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={`${site.name} restaurant and boutique hotel`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={site.twitterHandle} />
      <meta name="twitter:title" content={resolvedTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">{JSON.stringify(schema)}</script>
      ))}
    </Helmet>
  );
}
