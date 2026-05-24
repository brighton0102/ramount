import {
  BadgeCheck,
  Building2,
  Hammer,
  Home,
  Ruler,
  ShieldCheck,
  Truck
} from "lucide-react";

export type ProductCategory = "Doors" | "Cornice Ceilings" | "Hardware";

export type Product = {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  price: number;
  badge?: string;
  image: string;
  summary: string;
  details: string[];
  finishes: string[];
  bestFor: string;
};

export const company = {
  name: "Ramount",
  city: "Harare",
  country: "Zimbabwe",
  phone: "+263 77 123 4567",
  whatsapp: "263771234567",
  email: "sales@ramount.co.zw",
  address: "Harare, Zimbabwe",
  hours: "Mon - Sat, 8:00 - 17:00"
};

export const categories = [
  {
    name: "Doors",
    slug: "doors",
    description:
      "Interior, exterior and statement doors selected for durability, finish quality and a premium first impression.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Cornice Ceilings",
    slug: "cornice-ceilings",
    description:
      "Clean ceiling trims and decorative cornices that sharpen rooms, hide rough transitions and add architectural polish.",
    image:
      "https://unsplash.com/photos/t85t3W1vXLs/download?force=true"
  },
  {
    name: "Hardware",
    slug: "hardware",
    description:
      "Handles, hinges, locks and finishing accessories that help every installation feel complete and secure.",
    image:
      "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=80"
  }
];

export const products: Product[] = [
  {
    id: "door-001",
    name: "FLM Door",
    slug: "flm-door",
    category: "Doors",
    price: 65,
    badge: "Guide price",
    image:
      "https://unsplash.com/photos/RYRX8u2adUA/download?force=true",
    summary:
      "A clean, budget-friendly FLM door option for everyday interior rooms and renovation projects.",
    details: ["Simple modern face", "Paint-ready surface", "Good value for multi-room projects"],
    finishes: ["White primer", "Grey primer", "Custom paint"],
    bestFor: "Bedrooms, passages, rentals and budget-conscious projects"
  },
  {
    id: "door-002",
    name: "FLM Deep Molded Door",
    slug: "flm-deep-molded-door",
    category: "Doors",
    price: 25,
    image:
      "https://unsplash.com/photos/B-dNtFPaelI/download?force=true",
    summary:
      "A molded interior door with deeper panel detail for customers who want definition at a low price point.",
    details: ["Deep molded panel profile", "Lightweight interior use", "Ready for paint finishing"],
    finishes: ["White primer", "Cream primer", "Custom paint"],
    bestFor: "Interior rooms, cottages and quick renovation jobs"
  },
  {
    id: "door-003",
    name: "Teak Door",
    slug: "teak-door",
    category: "Doors",
    price: 200,
    badge: "Teak",
    image:
      "https://unsplash.com/photos/SwpNtc1JyCs/download?force=true",
    summary:
      "A stronger timber-look door for customers who want a warmer, more premium finish.",
    details: ["Rich teak appearance", "Durable feel", "Can pair with premium locks and handles"],
    finishes: ["Natural teak", "Dark teak stain", "Clear varnish"],
    bestFor: "Main rooms, protected entrances and quality home upgrades"
  },
  {
    id: "door-004",
    name: "Teak Door FLM",
    slug: "teak-door-flm",
    category: "Doors",
    price: 150,
    image:
      "https://unsplash.com/photos/CsaCEoDYBQQ/download?force=true",
    summary:
      "A teak-style FLM option that balances a warmer wood look with project-friendly pricing.",
    details: ["Teak-style face", "FLM construction", "Suitable for neat interior upgrades"],
    finishes: ["Teak stain", "Walnut stain", "Clear varnish"],
    bestFor: "Homes that need a timber finish without a high-end door budget"
  },
  {
    id: "door-005",
    name: "Deep Molded Flush Door",
    slug: "deep-molded-flush-door",
    category: "Doors",
    price: 25,
    badge: "Value",
    image:
      "https://unsplash.com/photos/d-2M4NTKG1Q/download?force=true",
    summary:
      "A simple deep molded flush door for affordable, consistent interior finishing.",
    details: ["Flush molded face", "Paint-ready", "Easy to match across multiple rooms"],
    finishes: ["White primer", "Grey primer", "Custom paint"],
    bestFor: "Budget interiors, rentals, schools and bulk room installations"
  },
  {
    id: "cornice-001",
    name: "Shadowline Cornice Profile",
    slug: "shadowline-cornice-profile",
    category: "Cornice Ceilings",
    price: 12,
    badge: "Per metre",
    image:
      "https://unsplash.com/photos/t85t3W1vXLs/download?force=true",
    summary:
      "A crisp ceiling edge for modern rooms that need a subtle, architectural finish.",
    details: ["Clean linear profile", "Paint-ready", "Suitable for residential and commercial work"],
    finishes: ["White", "Warm white", "Custom paint"],
    bestFor: "Modern lounges, bedrooms and offices"
  },
  {
    id: "cornice-002",
    name: "Decorative Premium Cornice",
    slug: "decorative-premium-cornice",
    category: "Cornice Ceilings",
    price: 18,
    badge: "Per metre",
    image:
      "https://unsplash.com/photos/GyLjCHpSRKg/download?force=true",
    summary:
      "A richer profile for classic homes, hotels and formal rooms that need more visual detail.",
    details: ["Decorative layered profile", "Smooth paint finish", "Good for feature rooms"],
    finishes: ["White", "Ivory", "Custom paint"],
    bestFor: "Dining rooms, hotels, boardrooms and villas"
  },
  {
    id: "hardware-001",
    name: "Matte Black Handle Set",
    slug: "matte-black-handle-set",
    category: "Hardware",
    price: 42,
    image:
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=1200&q=80",
    summary:
      "A clean handle set that pairs well with modern timber, glass and painted doors.",
    details: ["Lever handle pair", "Matching escutcheon", "Smooth matte coating"],
    finishes: ["Matte black", "Brushed nickel", "Satin brass"],
    bestFor: "Interior doors and office spaces"
  },
  {
    id: "hardware-002",
    name: "Security Lock Bundle",
    slug: "security-lock-bundle",
    category: "Hardware",
    price: 68,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80",
    summary:
      "A practical lock and cylinder bundle for entry doors that need everyday security.",
    details: ["Cylinder lock", "Strike plate", "Multiple key set"],
    finishes: ["Chrome", "Brass", "Black"],
    bestFor: "Exterior doors, offices and storerooms"
  }
];

export const services = [
  {
    title: "Door Selection",
    description:
      "Guidance on door type, size, finish and hardware so customers buy the right product for the space.",
    icon: Home
  },
  {
    title: "Project Supply",
    description:
      "Bulk quotations for builders, landlords, developers and renovation teams across Zimbabwe.",
    icon: Building2
  },
  {
    title: "Measurement Support",
    description:
      "Help confirming openings, swing direction and quantities before a client commits to an order.",
    icon: Ruler
  },
  {
    title: "Finishing Advice",
    description:
      "Practical recommendations for handles, locks, hinges, cornices and matching trims.",
    icon: Hammer
  }
];

export const trustPoints = [
  { title: "Zimbabwe focused", description: "Products and advice shaped around local homes, climates and building needs.", icon: ShieldCheck },
  { title: "Clear quotations", description: "Customers can browse guide prices before requesting a final WhatsApp quote.", icon: BadgeCheck },
  { title: "Delivery planning", description: "Orders can be coordinated for collection or delivery depending on project location.", icon: Truck }
];

export const faqs = [
  {
    question: "Are the prices final?",
    answer:
      "Prices are guide prices in USD and may change depending on size, finish, stock availability and delivery requirements. WhatsApp Ramount for a confirmed quote."
  },
  {
    question: "Can Ramount supply for a full house or project?",
    answer:
      "Yes. Customers can share a door schedule, room list or plan and request a bulk quotation for doors, cornices and hardware."
  },
  {
    question: "Do you help with choosing the right door?",
    answer:
      "Yes. Ramount can advise on interior, exterior, security, glass-panel and feature entrance options based on the room and budget."
  },
  {
    question: " ",
    answer:
      " "
  }
];

export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(price);
}

export function whatsappLink(message: string) {
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
}
