# SEO and Performance Architecture

## Meta Strategy

- Every route renders `Seo` from `React Helmet Async`.
- Titles use the pattern `Page | Lumiere Stay & Table`.
- Descriptions are page-specific and conversion-focused.
- Canonical URLs are generated from the route path.
- Robots tags default to `index,follow,max-image-preview:large`.
- Keywords are supported as a secondary signal, but page copy and structured data carry the real ranking work.

## Social Sharing

Each route includes:

- OpenGraph title, description, type, URL, image, image alt, locale, and site name.
- Twitter summary large image card.
- Shared brand image fallback, with page-level override support.

## Structured Data

Implemented:

- Combined `Restaurant` + `Hotel` local business schema.
- Postal address, phone, cuisine, price range, opening hours, amenities, and social profiles.
- Breadcrumb schema on every route.
- Menu schema on the menu route.

Recommended for production:

- Add `aggregateRating` only when real review data exists.
- Add `GeoCoordinates` for the real venue.
- Add `hasMap` pointing to the actual Google Business Profile or map URL.
- Add `HotelRoom` or `Room` schema for real bookable rooms.
- Add `Offer` schema for real packages and event menus.

## Semantic HTML

- Route content is wrapped in a single `main`.
- Homepage has one cinematic `h1`.
- Interior page hero sections render as `h1`.
- Section headings remain `h2`.
- Forms use labels, fieldsets, legends, and `aria-invalid`.
- Address and footer content use semantic structures.
- Skip link is available for keyboard users.

## Image Optimization

Implemented:

- Shared `OptimizedImage` primitive.
- Lazy loading for non-critical images.
- Async decoding.
- Width and height attributes to reduce layout shift.
- Responsive `sizes` hints.
- Hero image remains eager because it is above the fold.

Recommended for production:

- Replace remote Unsplash URLs with self-hosted AVIF/WebP assets.
- Generate multiple image widths and use `srcset`.
- Preload the final LCP hero image.
- Compress gallery and card images below 150 KB when possible.
- Use a CDN with immutable cache headers.

## Core Web Vitals

Largest Contentful Paint:

- Keep one dominant hero image.
- Preload the production hero image.
- Avoid render-blocking third-party scripts.
- Keep the hero overlay CSS lightweight.

Cumulative Layout Shift:

- Use explicit image dimensions.
- Use stable card aspect ratios.
- Avoid injecting late content above existing content.

Interaction to Next Paint:

- Lazy-load secondary routes.
- Keep filter/search state local and memoized.
- Avoid expensive animation on large lists.
- Use `useDeferredValue` for menu search.

## Mobile Performance

- Mobile-first Tailwind classes.
- Single-column layouts first, then enhanced grids.
- Large tap targets for CTAs, nav, forms, and filters.
- Persistent WhatsApp CTA.
- Horizontal scrolling only for category chips.

## Accessibility Checklist

- One `h1` per page.
- Keyboard-visible focus states.
- Skip link.
- Dialog uses `role="dialog"` and Escape close.
- Forms expose labels and field errors.
- Decorative images use empty alt text where appropriate.
- Content images use descriptive alt text.
- Contrast favors dark backgrounds with porcelain/gold text.

## Lighthouse Checklist

- Build and run `npm run build` in a normal terminal.
- Serve production build with `npm run preview`.
- Run Lighthouse mobile first.
- Confirm LCP under 2.5s.
- Confirm CLS below 0.1.
- Confirm INP below 200ms.
- Confirm all tap targets are sized correctly.
- Confirm image payload and unused JavaScript warnings.
- Confirm no missing meta descriptions or duplicate headings.

## Local SEO Checklist

- Replace demo address, phone, and URL with the real venue.
- Match NAP exactly across the site, Google Business Profile, and social listings.
- Add embedded map for the real venue.
- Add real opening hours and holiday hours.
- Add local landmarks and neighborhood copy where natural.
- Add reservation, private dining, rooms, and event pages if those are real revenue streams.
