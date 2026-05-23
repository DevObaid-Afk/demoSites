import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa6';
import { heroSlides, stats } from '../../data/content.js';
import Button from '../ui/Button.jsx';
import {
  floatingMotion,
  heroChildMotion,
  heroContentMotion,
  statHoverMotion,
  staggerContainer,
  staggerItem
} from '../../utils/animations.js';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-ink text-porcelain" aria-label="Luxury restaurant and boutique hotel introduction">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: false }}
        loop
        speed={450}
        autoplay={{ delay: 5200, disableOnInteraction: false }}
        className="hero-swiper absolute inset-0"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={slide.title}>
            <img
              className="hero-slide-image h-full w-full object-cover opacity-70"
              src={slide.image}
              alt=""
              loading="eager"
              decoding={index === 0 ? 'sync' : 'async'}
              fetchpriority={index === 0 ? 'high' : 'low'}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(216,180,106,.16),transparent_34%),linear-gradient(90deg,rgba(18,17,15,.88),rgba(18,17,15,.46)_48%,rgba(18,17,15,.9)),linear-gradient(180deg,rgba(18,17,15,.55),#12110f_94%)]" />

      <motion.div
        {...floatingMotion(12, 6)}
        className="pointer-events-none absolute right-[6%] top-32 hidden w-44 rounded-[28px] border border-champagne/20 bg-ink/52 p-5 text-soft-shadow shadow-glow backdrop-blur-xl will-change-transform lg:block"
      >
        <div className="flex gap-1 text-xs text-champagne">
          {Array.from({ length: 5 }).map((_, index) => <FaStar key={index} />)}
        </div>
        <p className="mt-4 font-display text-2xl leading-7">Chef table bookings tonight</p>
      </motion.div>

      <motion.div
        {...floatingMotion(-14, 7)}
        className="pointer-events-none absolute bottom-28 right-[12%] hidden rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-porcelain text-soft-shadow shadow-soft backdrop-blur-xl will-change-transform xl:block"
      >
        Private dining · 14 suites · valet arrival
      </motion.div>

      <div className="section-shell relative z-10 flex min-h-screen items-end pb-16 pt-40 md:pb-24">
        <motion.div {...heroContentMotion} className="max-w-5xl">
          <motion.div variants={heroChildMotion} className="mb-6 flex flex-wrap items-center gap-4 text-soft-shadow">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-champagne">{heroSlides[0].eyebrow}</p>
            <span className="hidden h-px w-24 bg-champagne/60 sm:block" />
            <p className="text-sm font-medium text-white/86">Open for dinner, stays, and private celebrations</p>
          </motion.div>

          <motion.h1 variants={heroChildMotion} className="max-w-4xl text-balance font-display text-5xl font-semibold leading-[0.94] text-hero-shadow md:text-7xl xl:text-8xl">
            {heroSlides[0].title}
          </motion.h1>

          <motion.p variants={heroChildMotion} className="mt-7 max-w-2xl text-lg font-medium leading-8 text-white/84 text-soft-shadow md:text-xl">
            {heroSlides[0].copy}
          </motion.p>

          <motion.div variants={heroChildMotion} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button to="/reservation">Reserve tonight <FiArrowRight /></Button>
            <Button to="/rooms-dining" variant="secondary">View rooms</Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="section-shell relative z-10 -mt-16 grid gap-3 pb-8 sm:grid-cols-2 lg:grid-cols-4"
      >
        {stats.map((item) => (
          <motion.div
            key={item.label}
            variants={staggerItem}
            {...statHoverMotion}
            className="glass rounded-[24px] px-5 py-4 text-porcelain shadow-soft transition hover:border-champagne/45 will-change-transform"
          >
            <p className="font-display text-3xl text-champagne">{item.value}</p>
            <p className="text-sm font-semibold text-porcelain/72">{item.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
