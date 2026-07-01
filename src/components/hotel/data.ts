import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomExecutive from "@/assets/room-executive.jpg";
import roomFamily from "@/assets/room-family.jpg";
import roomStandard from "@/assets/room-standard.jpg";

export const WHATSAPP_NUMBER = "237674844485";
export const PHONE_DISPLAY = "+237 674 844 485";
export const PHONE_TEL = "+237674844485";
export const WHATSAPP_MESSAGE = "Hello Hollyken Hotel, I would like to make a reservation.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
export const MAPS_URL = "https://maps.app.goo.gl/ApE8Nng6ZZ4oLaCu5";
export const MAPS_EMBED = "https://www.google.com/maps?q=Hollyken+Hotel&output=embed";

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/rooms", label: "Rooms" },
  { to: "/dining", label: "Dining" },
  { to: "/gallery", label: "Gallery" },
  { to: "/amenities", label: "Amenities" },
  { to: "/reviews", label: "Reviews" },
  { to: "/location", label: "Location" },
  { to: "/contact", label: "Contact" },
] as const;

export type Room = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  highlights: string[];
};

export const ROOMS: Room[] = [
  {
    slug: "deluxe",
    name: "Deluxe Room",
    tagline: "Refined comfort with a warm signature glow",
    description:
      "Our Deluxe Room pairs a plush king bed with hand-picked textiles and soft ambient lighting for a restful, elevated stay.",
    image: roomDeluxe,
    highlights: ["King bed", "En-suite bathroom", "Smart TV", "Complimentary Wi-Fi"],
  },
  {
    slug: "executive",
    name: "Executive Room",
    tagline: "Space to work, unwind and entertain",
    description:
      "A generous suite designed for business travellers and long stays, with a private lounge, work desk and skyline views.",
    image: roomExecutive,
    highlights: ["Private lounge", "Work desk", "Rain shower", "Premium linens"],
  },
  {
    slug: "family",
    name: "Family Room",
    tagline: "Room to gather, rest and make memories",
    description:
      "Two beautifully dressed queen beds, warm lighting and a family-friendly layout perfect for weekend getaways.",
    image: roomFamily,
    highlights: ["Two queen beds", "Family lounge", "Blackout curtains", "In-room dining"],
  },
  {
    slug: "standard",
    name: "Standard Room",
    tagline: "Everyday elegance at exceptional value",
    description:
      "A quietly luxurious room with everything you need for a comfortable, restful stay — thoughtfully priced.",
    image: roomStandard,
    highlights: ["Queen bed", "Air conditioning", "Daily housekeeping", "Complimentary Wi-Fi"],
  },
];

export const AMENITIES = [
  { icon: "wifi", title: "Free Wi-Fi", copy: "High-speed connectivity in every room and public space." },
  { icon: "clock", title: "24/7 Reception", copy: "A friendly welcome, day or night." },
  { icon: "utensils", title: "Restaurant", copy: "Fresh local and international menus, served daily." },
  { icon: "bell", title: "Room Service", copy: "Dine in comfort with in-room service at your pace." },
  { icon: "presentation", title: "Conference Hall", copy: "Elegant spaces for meetings, workshops and celebrations." },
  { icon: "parking", title: "Secure Parking", copy: "On-site parking for guests and visitors." },
  { icon: "snowflake", title: "Air Conditioning", copy: "Individually controlled climate in every room." },
  { icon: "bed", title: "Comfortable Rooms", copy: "Plush bedding and hand-picked linens throughout." },
  { icon: "sparkles", title: "Daily Housekeeping", copy: "Immaculate rooms every single day of your stay." },
  { icon: "shield", title: "Round-the-clock Security", copy: "Peace of mind is part of the welcome." },
  { icon: "users", title: "Family Friendly", copy: "Warm, welcoming and safe for guests of every age." },
  { icon: "leaf", title: "Peaceful Setting", copy: "A quiet retreat with a calm, unhurried atmosphere." },
] as const;

export const WHY_CHOOSE = [
  { title: "Exceptional service", copy: "A team that genuinely cares about every guest's stay." },
  { title: "Impeccably clean", copy: "Rooms and public spaces maintained to a high standard." },
  { title: "Restful comfort", copy: "Beds and rooms designed for real, restorative rest." },
  { title: "Peaceful atmosphere", copy: "A calm, unhurried environment to slow down in." },
  { title: "Professional staff", copy: "Warm, discreet and always ready to help." },
  { title: "Great location", copy: "Well connected, easy to reach, close to what you need." },
  { title: "Quality hospitality", copy: "Thoughtful touches from arrival to farewell." },
  { title: "Affordable luxury", copy: "Elegant surroundings at honest, welcoming prices." },
];

export const REVIEWS = [
  { name: "Adaeze O.", stay: "Business trip", stars: 5, quote: "Excellent customer service from arrival to check-out. The staff made me feel truly welcome." },
  { name: "Samuel N.", stay: "Weekend getaway", stars: 5, quote: "Good hospitality, comfortable rooms and a peaceful environment. Exactly what I needed." },
  { name: "Marie K.", stay: "Family visit", stars: 5, quote: "Clean, quiet and beautifully kept. The children loved it and we slept so well." },
  { name: "Daniel A.", stay: "Solo traveller", stars: 5, quote: "Great location and lovely food. The breakfast was a beautiful surprise." },
  { name: "Priscilla T.", stay: "Anniversary", stars: 5, quote: "The atmosphere is calm and elegant. We'll be coming back for our next anniversary." },
  { name: "Jean-Paul M.", stay: "Business trip", stars: 4, quote: "Comfortable and quiet — perfect for focused work. A few small in-room touches could still be added." },
];

export const FAQS = [
  { q: "What time is check-in and check-out?", a: "Check-in from 2:00 PM, check-out by 12:00 PM. Earlier or later times can often be arranged — please just ask." },
  { q: "Is breakfast included?", a: "Breakfast is available every morning in our restaurant and can be added to any reservation." },
  { q: "Do you have parking?", a: "Yes, secure on-site parking is available for all guests." },
  { q: "Can I book by WhatsApp?", a: "Absolutely. The fastest way to reserve is via WhatsApp — a real member of our team will confirm your booking." },
  { q: "Do you host events or meetings?", a: "Yes, our conference space and restaurant can be arranged for meetings, workshops and private celebrations." },
];