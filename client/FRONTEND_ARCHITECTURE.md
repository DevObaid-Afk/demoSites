# Frontend Architecture

## Stack

- React + Vite for fast local development and production bundling
- Tailwind CSS for token-driven responsive styling
- Framer Motion for page transitions, scroll reveals, modal animation, and micro-interactions
- React Router for SEO-friendly route-level pages
- React Helmet Async for per-page metadata and structured data
- Swiper.js for premium hero/media experiences
- React Icons for accessible interface icons

## Folder Structure

```txt
client/
  public/
    robots.txt
    sitemap.xml
  src/
    assets/                 # Optimized local media when replacing remote demo images
    components/
      layout/               # Navbar, footer, app shell, global CTAs
      reservation/          # Booking-specific UI flows
      sections/             # Page sections composed from shared UI
      ui/                   # Reusable primitives: Button, Modal, Reveal, SEO
    context/                # Cross-cutting UI state providers
    data/                   # Structured content models for menus, rooms, galleries
    hooks/                  # Reusable behavior hooks as the app grows
    pages/                  # Route-level semantic pages
    utils/                  # SEO helpers, animation presets, shared utilities
    main.jsx                # App bootstrap and route tree
    styles.css              # Global Tailwind imports, base styles, utility classes
```

## Component Hierarchy

```txt
HelmetProvider
  BrowserRouter
    ReservationModalProvider
      ScrollToTop
      Suspense
        AnimatePresence
          Routes
            AppLayout
              Navbar
              Page route
                Seo
                PageTransition
                Section components
              Footer
              WhatsAppButton
      ReservationModal
        Modal
```

## Route Structure

- `/` - Home with hero, featured dishes, highlights, testimonials, gallery, CTA, location
- `/menu` - Searchable, filterable menu with category tabs and dietary markers
- `/about` - Brand story and hospitality positioning
- `/rooms-dining` - Boutique room and dining package cards
- `/reservation` - Full booking form for high-intent users and SEO landing traffic
- `/contact` - Contact form, map embed, hours, social links

Routes are lazy-loaded except the homepage to keep the first load light.

## Shared UI Components

- `Button` - Link, anchor, or native button with consistent sizing and motion
- `Modal` - Accessible dialog shell with Escape close, backdrop close, scroll lock, and Framer Motion
- `Reveal` - Scroll reveal wrapper with centralized animation tokens
- `PageTransition` - Route transition wrapper
- `SectionHeader` - Reusable editorial headings
- `Seo` - Meta tags, OpenGraph, canonical URL, Twitter card, JSON-LD

## Layout System

- `Navbar` is sticky/fixed with scroll-state styling and mobile drawer navigation
- `Footer` includes semantic address, nav links, and social CTAs
- `WhatsAppButton` is a persistent mobile-first conversion CTA
- `AppLayout` owns the shared shell around every route
- `ReservationModalProvider` keeps the quick booking modal globally available

## Theme Configuration

Tailwind tokens live in `tailwind.config.js`:

- Colors: `ink`, `charcoal`, `porcelain`, `champagne`, `copper`, `sage`, `wine`
- Typography: display serif for luxury headings, body sans-serif for readability
- Shadows: `soft` and `glow` for premium cards and modal emphasis
- Backgrounds: subtle gold accent utilities

Global helpers live in `styles.css`:

- `.section-shell` for consistent responsive page width
- `.glass` and `.dark-glass` for premium translucent surfaces
- `.focus-ring` for accessible keyboard focus states

## Animation Architecture

Motion presets are centralized in `src/utils/animations.js`:

- `pageMotion` for route transitions
- `revealMotion` for scroll reveal sections
- `modalBackdropMotion` and `modalPanelMotion` for dialogs
- Shared easing token for brand consistency

This keeps animation behavior reusable and prevents one-off motion values across components.

## Responsive Strategy

- Mobile-first Tailwind classes, then progressive enhancement at `sm`, `md`, `lg`, and `xl`
- Single-column content on mobile, two/three-column grids on larger screens
- Stable card aspect ratios to prevent layout shift
- Horizontal overflow only for intentional controls like menu category tabs
- Large tap targets for mobile conversion controls
- Text scales by breakpoint, not viewport math, to preserve readability

## SEO Strategy

- Every page owns a `Seo` component with title, description, canonical URL, OpenGraph, and JSON-LD
- Route paths are clean and sitemap-ready
- Semantic page structure uses real headings, sections, forms, address content, and accessible labels
- `robots.txt` and `sitemap.xml` are included in `public`
- Lazy-loaded pages improve initial payload size

## Performance Strategy

- Vite manual chunks split motion, router, and Swiper code
- Homepage is eager; secondary routes are lazy
- Images use responsive remote URLs and `loading="lazy"` where appropriate
- Heavy UI state is localized; cross-app state is limited to the reservation modal provider
- Backend calls are isolated to form submit handlers

## Conversion Architecture

- Primary CTAs open the quick reservation modal
- Full `/reservation` page remains available for search, ads, and users needing more context
- WhatsApp CTA exists globally and inside booking flows
- Menu, room cards, and reservation CTAs all guide users toward a booking action
