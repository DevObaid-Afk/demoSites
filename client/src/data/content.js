import {
  FaChampagneGlasses,
  FaLeaf,
  FaLocationDot,
  FaSpa,
  FaStar,
} from "react-icons/fa6";
import { GiCoffeeCup, GiKnifeFork, GiHotMeal } from "react-icons/gi";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Rooms / Dining", href: "/rooms-dining" },
  { label: "Reservation", href: "/reservation" },
  { label: "Contact", href: "/contact" },
];

export const heroSlides = [
  {
    eyebrow: "Restaurant + boutique hotel",
    title: "A refined escape for memorable nights and slow mornings.",
    copy: "Chef-led seasonal dining, intimate suites, crafted cocktails, and service tuned for celebrations, stays, and quiet luxury.",
    image: "/imgOne-hero.jpg",
  },
  {
    eyebrow: "Private dining available",
    title: "Dinner service with the calm precision of a luxury stay.",
    copy: "Reserve tables, tasting menus, chef counters, or a room-and-dining experience in a few taps.",
    image: "/imgTwo-hero.jpg",
  }
];

export const highlights = [
  {
    icon: GiKnifeFork,
    title: "Chef tasting menus",
    text: "Seasonal courses, wine pairings, and private chef-table evenings.",
  },
  {
    icon: FaSpa,
    title: "Boutique suites",
    text: "Quiet rooms with linen bedding, rain showers, and sunrise breakfast.",
  },
  {
    icon: FaLocationDot,
    title: "City-center address",
    text: "Easy arrival, valet options, and nearby cultural landmarks.",
  },
  {
    icon: FaChampagneGlasses,
    title: "Events made graceful",
    text: "Anniversaries, business dinners, rehearsal meals, and weekend stays.",
  },
];

export const featuredDishes = [
  {
    name: "Saffron Lobster Risotto",
    price: "₹380",
    image:
      "https://images.unsplash.com/photo-1633436374961-09b92742047b?auto=format&fit=crop&w=900&q=80",
    tag: "Signature",
  },
  {
    name: "Wild Mushroom Ravioli",
    price: "₹260",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80",
    tag: "Vegetarian",
  },
  {
    name: "Charred Citrus Sea Bass",
    price: "₹340",
    image:
      "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80",
    tag: "Coastal",
  },
];

export const menuItems = [
  {
    name: "Burrata with Fig Mostarda",
    category: "Starters",
    price: 18,
    type: "veg",
    description: "Creamy burrata, toasted sourdough, aged balsamic, basil oil.",
  },
  {
    name: "Tandoor Prawn Skewers",
    category: "Starters",
    price: 22,
    type: "non-veg",
    description: "Charred prawns, lime leaf, smoked chili butter.",
  },
  {
    name: "Wild Mushroom Ravioli",
    category: "Mains",
    price: 26,
    type: "veg",
    description: "Brown butter, thyme, parmesan, porcini cream.",
  },
  {
    name: "Heritage Chicken Roulade",
    category: "Mains",
    price: 31,
    type: "non-veg",
    description: "Truffle jus, root vegetables, crisp leek.",
  },
  {
    name: "Saffron Lobster Risotto",
    category: "Mains",
    price: 38,
    type: "non-veg",
    description: "Maine lobster, saffron, mascarpone, preserved lemon.",
  },
  {
    name: "Cacao Mousse Opera",
    category: "Desserts",
    price: 14,
    type: "veg",
    description: "Dark chocolate, coffee cream, almond praline.",
  },
  {
    name: "Rose-Pistachio Kulfi",
    category: "Desserts",
    price: 12,
    type: "veg",
    description: "Slow-churned kulfi, candied pistachio, rose syrup.",
  },
  {
    name: "Midnight Negroni",
    category: "Drinks",
    price: 16,
    type: "veg",
    description: "Gin, bitter orange, vermouth, smoked citrus.",
  },
  {
    name: "Garden Spritz Zero",
    category: "Drinks",
    price: 11,
    type: "veg",
    description: "Seedlip, cucumber, basil, sparkling elderflower.",
  },
];

export const rooms = [
  {
    name: "Atelier Suite",
    price: "₹2600/night",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80",
    details: ["King bed", "Balcony breakfast", "Soaking tub"],
  },
  {
    name: "Garden Room",
    price: "₹1900/night",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    details: ["Queen bed", "Courtyard view", "Evening tea"],
  },
  {
    name: "Chef Table Stay",
    price: "₹4200/night",
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
    details: ["Suite stay", "Tasting menu", "Wine pairing"],
  },
];

export const testimonials = [
  {
    name: "Maya R.",
    text: "The room felt serene, dinner was theatre, and the team remembered every detail.",
    rating: 5,
  },
  {
    name: "Adrian K.",
    text: "Exactly the kind of elevated hospitality our client dinner needed.",
    rating: 5,
  },
  {
    name: "Priya S.",
    text: "Beautifully paced tasting menu and the smoothest reservation experience.",
    rating: 5,
  },
];

export const gallery = [
  "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80",
];

export const stats = [
  { value: "14", label: "boutique rooms" },
  { value: "4.9", label: "guest rating" },
  { value: "36", label: "seasonal dishes" },
  { value: "7", label: "private dining spaces" },
];

export const amenityIcons = [FaStar, FaLeaf, GiCoffeeCup, GiHotMeal];
