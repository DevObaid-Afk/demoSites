import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import WhatsAppButton from './WhatsAppButton.jsx';

export default function AppLayout() {
  return (
    <>
      <a href="#main-content" className="focus-ring fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-champagne px-5 py-3 font-bold text-ink transition focus:translate-y-0">
        Skip to content
      </a>
      <Navbar />
      <Outlet />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
