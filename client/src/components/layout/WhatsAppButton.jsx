import { FaWhatsapp } from 'react-icons/fa6';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/15551234567?text=Hello%20Lumiere%2C%20I%27d%20like%20to%20make%20a%20reservation."
      className="focus-ring fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom))] right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-2xl text-white shadow-soft transition-transform hover:-translate-y-1 hover:shadow-glow md:h-16 md:w-16"
      aria-label="Reserve through WhatsApp"
      target="_blank"
      rel="noreferrer"
    >
      <FaWhatsapp />
    </a>
  );
}
