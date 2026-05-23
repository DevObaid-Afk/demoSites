# Framer Motion Animation System

## Architecture

Animation primitives live in `client/src/utils/animations.js`.

The system is organized around:

- `easings` - brand-level easing curves.
- `transitions` - reusable timing presets for pages, reveals, cards, nav, modals, floating elements, and hero imagery.
- `viewport` - shared scroll-trigger settings.
- Motion variants - page, reveal, stagger, cards, navbar, mobile menu, hero, gallery, and modal states.

## Global Motion Behavior

`main.jsx` wraps the app with:

```jsx
<MotionConfig reducedMotion="user">
```

This respects OS-level reduced-motion preferences without removing the premium experience for users who want animation.

## Implemented Patterns

### Page Transitions

`PageTransition` uses `pageMotion`, which animates opacity and vertical transform only. This is GPU-friendly and avoids layout thrash.

### Scroll Reveals

`Reveal` uses shared `revealMotion` and viewport settings:

- Runs once.
- Starts before the section fully enters view.
- Uses opacity and `translateY`.

### Stagger Animations

Use `staggerContainer` and `staggerItem` for grouped cards, stats, success messages, and editorial elements.

### Navbar Transitions

`Navbar` uses:

- `navShellMotion` for smooth scroll-state scaling.
- `mobileMenuMotion` for dropdown entrance/exit.
- `mobileMenuItemMotion` for staggered mobile links.

### Hero Entrance

`Hero` uses:

- `heroImageMotion` for cinematic image scale-in.
- `heroContentMotion` and `heroChildMotion` for staged text/CTA entrance.
- `floatingMotion` for subtle floating visual elements.

### Hover Interactions

Cards and gallery items use transform-based hover states:

- `translateY`
- small `scale`
- no animated width, height, top, left, or expensive layout properties.

## Performance Rules

- Animate `opacity` and `transform` only.
- Use `will-change-transform` sparingly on elements with active transform motion.
- Keep infinite animation limited to a few decorative hero elements.
- Avoid large stagger counts above the fold.
- Respect reduced motion globally.
- Do not animate filters or heavy shadows continuously.
- Prefer CSS color transitions for border/background changes.

## Mobile Optimization

- Mobile menu animation is short and transform-based.
- Scroll reveals trigger once to reduce repeated work.
- Hero floating elements are hidden on smaller viewports.
- Large hover effects are progressive enhancement; tap interactions still work without hover.
