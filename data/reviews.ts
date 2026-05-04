// data/reviews.ts
// Edit this file to add, remove, or update reviews shown in the testimonials slider.

export interface Review {
  id: number;
  name: string;
  vehicle: string;
  avatar: string;
  rating: number; // 1–5
  text: string;
}

export interface TestimonialsStats {
  averageRating: number;
  totalReviews: string;
  tagline: string;
  avatars: string[]; // shown stacked at the bottom of the stats card
}

export const reviews: Review[] = [
  {
    id: 1,
    name: "Ethan Langdon",
    vehicle: "Range Rover Velar",
    avatar: "https://i.pravatar.cc/80?img=11",
    rating: 5,
    text: "I booked in minutes and the pickup was quick and organised. The car felt brand new, super clean, and drove smoothly the entire trip through Marrakech.",
  },
  {
    id: 2,
    name: "Kevin Ramos",
    vehicle: "Mercedes S-Class",
    avatar: "https://i.pravatar.cc/80?img=15",
    rating: 5,
    text: "The pricing was clear from the start, with no surprises at checkout. My sedan was spotless, comfortable, and perfect for a weekend getaway to Essaouira.",
  },
  {
    id: 3,
    name: "Marco Terance",
    vehicle: "BMW X5",
    avatar: "https://i.pravatar.cc/80?img=52",
    rating: 5,
    text: "Membership perks are incredibly useful. I got an easy upgrade without extra steps, and support responded fast when I needed to adjust my return time.",
  },
  {
    id: 4,
    name: "Sophie Laurent",
    vehicle: "Porsche Cayenne",
    avatar: "https://i.pravatar.cc/80?img=47",
    rating: 5,
    text: "Velaro exceeded every expectation. The concierge met us at Marrakech Menara with the car already chilled and ready. Absolutely white-glove from start to finish.",
  },
  {
    id: 5,
    name: "James Whitfield",
    vehicle: "Tesla Model X",
    avatar: "https://i.pravatar.cc/80?img=33",
    rating: 4,
    text: "Clean electric vehicle, seamless app booking, and the team was super responsive. Will definitely rent again on my next trip to Morocco.",
  },
  {
    id: 6,
    name: "Amina El Fassi",
    vehicle: "Jeep Wrangler",
    avatar: "https://i.pravatar.cc/80?img=44",
    rating: 5,
    text: "Perfect vehicle for exploring the Atlas mountains. Velaro recommended the Wrangler specifically for our route and it handled every road beautifully.",
  },
];

export const testimonialsStats: TestimonialsStats = {
  averageRating: 4.8,
  totalReviews: "2,400+",
  tagline: "Consistently rated high for service, speed, and overall driving experience.",
  avatars: [
    "https://i.pravatar.cc/80?img=11",
    "https://i.pravatar.cc/80?img=15",
    "https://i.pravatar.cc/80?img=52",
  ],
};
