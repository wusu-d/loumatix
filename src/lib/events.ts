type TicketType = {
  id: number;
  name: string;
  price: number;
};

export type Event = {
  id: number;
  name: string;
  date: string;
  description: string;
  image: string;
  location: string;
  ticketTypes: TicketType[];
};

export const events: Event[] = [
  {
    id: 1,
    name: "Summer Music Festival",
    date: "2024-07-15",
    description:
      "Join us for an unforgettable day of music featuring top artists from around the world. Experience a diverse range of genres, from rock and pop to electronic and indie, all in one amazing venue.",
    image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",
    location: "Mobolaji Johnson Arena, Onikan, Lagos",
    ticketTypes: [
      { id: 1, name: "Regular", price: 89 },
      { id: 2, name: "VIP", price: 199 },
      { id: 3, name: "Backstage", price: 299 },
    ],
  },
  {
    id: 2,
    name: "Night of Worship",
    date: "2024-08-20",
    description:
      "Experience an atmosphere of divine presence with powerful worship leaders from across Nigeria. A night of spiritual refreshing and supernatural encounters.",
    image: "https://images.pexels.com/photos/2747448/pexels-photo-2747448.jpeg",
    location: "Tafawa Balewa Square, Lagos Island",
    ticketTypes: [
      { id: 4, name: "Regular", price: 50 },
      { id: 5, name: "VIP", price: 150 },
      { id: 6, name: "Backstage", price: 250 },
    ],
  },
  {
    id: 3,
    name: "Tech Leaders Summit",
    date: "2024-09-05",
    description:
      "Connect with industry leaders, learn about emerging technologies, and explore opportunities in Nigeria's growing tech ecosystem. Features keynote speakers, panel discussions and networking sessions.",
    image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg",
    location: "Eko Convention Centre, Victoria Island, Lagos",
    ticketTypes: [
      { id: 7, name: "Regular", price: 150 },
      { id: 8, name: "VIP", price: 300 },
      { id: 9, name: "Backstage", price: 450 },
    ],
  },
  {
    id: 4,
    name: "Afrobeats Night",
    date: "2024-10-12",
    description:
      "Dance the night away with performances from Nigeria's hottest Afrobeats artists. Experience the best of African rhythm, culture and entertainment.",
    image: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg",
    location: "National Stadium, Surulere, Lagos",
    ticketTypes: [
      { id: 10, name: "Regular", price: 100 },
      { id: 11, name: "VIP", price: 250 },
      { id: 12, name: "Backstage", price: 400 },
    ],
  },
  {
    id: 5,
    name: "Business Conference",
    date: "2024-11-08",
    description:
      "Join successful entrepreneurs and business leaders for a day of insights, strategies and networking. Learn proven methods to scale your business in the Nigerian market.",
    image: "https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg",
    location: "Oriental Hotel, Victoria Island, Lagos",
    ticketTypes: [
      { id: 13, name: "Regular", price: 200 },
      { id: 14, name: "VIP", price: 400 },
      { id: 15, name: "Backstage", price: 600 },
    ],
  },
  {
    id: 6,
    name: "Food & Culture Festival",
    date: "2024-12-03",
    description:
      "Celebrate Nigeria's rich culinary heritage with a showcase of traditional and modern cuisine. Enjoy cooking demonstrations, food tasting, and cultural performances.",
    image: "https://images.pexels.com/photos/5638268/pexels-photo-5638268.jpeg",
    location: "Freedom Park, Lagos Island",
    ticketTypes: [
      { id: 16, name: "Regular", price: 75 },
      { id: 17, name: "VIP", price: 180 },
      { id: 18, name: "Backstage", price: 280 },
    ],
  },
  {
    id: 7,
    name: "Fashion Week Lagos",
    date: "2025-01-15",
    description:
      "Experience the cutting edge of African fashion with runway shows, exhibitions, and masterclasses from leading designers. Network with industry professionals and fashion enthusiasts.",
    image: "https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg",
    location: "Landmark Event Centre, Victoria Island",
    ticketTypes: [
      { id: 19, name: "Regular", price: 120 },
      { id: 20, name: "VIP", price: 275 },
      { id: 21, name: "Backstage", price: 425 },
    ],
  },
  {
    id: 8,
    name: "Comedy Night Extravaganza",
    date: "2025-02-20",
    description:
      "Laugh out loud with Nigeria's top comedians as they deliver their best performances. A night of pure entertainment and hilarious storytelling.",
    image: "https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg",
    location: "Terra Kulture, Victoria Island",
    ticketTypes: [
      { id: 22, name: "Regular", price: 80 },
      { id: 23, name: "VIP", price: 185 },
      { id: 24, name: "Backstage", price: 290 },
    ],
  },
  {
    id: 9,
    name: "Sports & Fitness Expo",
    date: "2025-03-10",
    description:
      "Get inspired to live a healthier lifestyle with fitness demonstrations, sports competitions, and wellness workshops. Meet athletes and health experts.",
    image: "https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg",
    location: "Teslim Balogun Stadium, Surulere",
    ticketTypes: [
      { id: 25, name: "Regular", price: 65 },
      { id: 26, name: "VIP", price: 160 },
      { id: 27, name: "Backstage", price: 260 },
    ],
  },
  {
    id: 10,
    name: "Art Exhibition & Auction",
    date: "2025-04-05",
    description:
      "Discover contemporary African art at this prestigious exhibition featuring both established and emerging artists. Participate in live auctions and artist talks.",
    image: "https://images.pexels.com/photos/1647121/pexels-photo-1647121.jpeg",
    location: "Nike Art Gallery, Lekki",
    ticketTypes: [
      { id: 28, name: "Regular", price: 90 },
      { id: 29, name: "VIP", price: 220 },
      { id: 30, name: "Backstage", price: 350 },
    ],
  },
];
