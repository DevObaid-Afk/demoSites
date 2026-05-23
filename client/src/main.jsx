import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, MotionConfig } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-fade';
import './styles.css';

import AppLayout from './components/layout/AppLayout.jsx';
import ScrollToTop from './components/layout/ScrollToTop.jsx';
import Home from './pages/Home.jsx';
import { ReservationModalProvider } from './context/ReservationModalContext.jsx';

const Menu = lazy(() => import('./pages/Menu.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const RoomsDining = lazy(() => import('./pages/RoomsDining.jsx'));
const Reservation = lazy(() => import('./pages/Reservation.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/rooms-dining" element={<RoomsDining />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ReservationModalProvider>
          <MotionConfig reducedMotion="user">
            <ScrollToTop />
            <Suspense fallback={<div className="min-h-screen bg-ink text-porcelain" aria-label="Loading page" />}>
              <AnimatedRoutes />
            </Suspense>
          </MotionConfig>
        </ReservationModalProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
