import Reveal from './Reveal.jsx';

export default function SectionHeader({ eyebrow, title, copy, align = 'center', invert = false, as = 'h2' }) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center mx-auto';
  const Heading = as;
  return (
    <Reveal className={`flex max-w-3xl flex-col gap-4 ${alignment}`}>
      {eyebrow && (
        <p className={`text-xs font-bold uppercase tracking-[0.28em] ${invert ? 'text-champagne' : 'text-copper'}`}>
          {eyebrow}
        </p>
      )}
      <Heading className={`font-display text-4xl font-semibold leading-tight md:text-6xl ${invert ? 'text-porcelain' : 'text-ink'}`}>
        {title}
      </Heading>
      {copy && <p className={`text-base leading-8 md:text-lg ${invert ? 'text-porcelain/72' : 'text-ink/68'}`}>{copy}</p>}
    </Reveal>
  );
}
