import Seo from '../components/ui/Seo.jsx';
import PageTransition from '../components/ui/PageTransition.jsx';
import Hero from '../components/sections/Hero.jsx';
import FeaturedDishes from '../components/sections/FeaturedDishes.jsx';
import Highlights from '../components/sections/Highlights.jsx';
import HotelRooms from '../components/sections/HotelRooms.jsx';
import Testimonials from '../components/sections/Testimonials.jsx';
import Gallery from '../components/sections/Gallery.jsx';
import ReservationCta from '../components/sections/ReservationCta.jsx';
import LocationSection from '../components/sections/LocationSection.jsx';

export default function Home() {
  return (
    <PageTransition>
      <Seo path="/" />
      <Hero />
      <FeaturedDishes />
      <Highlights />
      <HotelRooms />
      <ReservationCta />
      <Testimonials />
      <Gallery />
      <LocationSection />
    </PageTransition>
  );
}
