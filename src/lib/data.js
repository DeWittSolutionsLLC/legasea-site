// ---------------------------------------------------------------------
// Mock content layer.
//
// This stands in for the three live systems described in the systems
// design doc: RocketRez (bookings/slots), Shopify Storefront API
// (products), and a headless CMS (blog/show schedule/zones). Swapping
// this file for real API calls is the Phase 1 integration work — every
// page in src/app reads through these functions rather than touching
// mock arrays directly, so the swap is localized here.
// ---------------------------------------------------------------------

const SLOT_TIMES = ["10:00 AM", "11:30 AM", "1:00 PM", "2:30 PM", "4:00 PM"];
function generateSlots(baseSpots) {
  return SLOT_TIMES.map((time, i) => ({
    time,
    spotsLeft: Math.max(0, baseSpots - i * 2),
  }));
}
export const zones = [
  {
    slug: "reef-hall",
    name: "Reef Hall",
    icon: "/images/icons/icon-fish.jpg",
    color: "var(--ocean-500)",
    x: 18,
    y: 28,
    description:
      "Our flagship coral reef tanks — home to tangs, clownfish, and a 12-foot viewing wall.",
    highlights: ["Living Reef Tank", "Touch Tide Pool", "Seahorse Nursery"],
    crowdWeight: 2,
    sensory: {
      sound: "moderate",
      light: "moderate",
      crowding: "moderate",
      touch: true,
      notes: "Splashing from the tide pool and a low ambient hum from tank filtration.",
    },
  },
  {
    slug: "reptarium",
    name: "The Reptarium",
    icon: "/images/icons/icon-lizard.jpg",
    color: "var(--reptile-500)",
    x: 62,
    y: 24,
    description:
      "Snakes, lizards, and crocodilians up close, plus daily keeper talks on venom safety.",
    highlights: [
      "Venom Lab Window",
      "Crocodile Cove",
      "Free-Roam Tortoise Yard",
    ],
    crowdWeight: 2,
    sensory: {
      sound: "low",
      light: "low",
      crowding: "low",
      touch: false,
      notes: "Dim, quiet exhibit lighting to match reptile habitats — a good low-stimulation stop.",
    },
  },
  {
    slug: "mangrove-walk",
    name: "Mangrove Walk",
    icon: "/images/icons/icon-foliage.jpg",
    color: "var(--reptile-600)",
    x: 40,
    y: 55,
    description:
      "An open-air boardwalk through mangrove habitat with frogs, turtles, and wading birds.",
    highlights: ["Turtle Lagoon", "Frog Grotto", "Bird Blind"],
    crowdWeight: 1,
    sensory: {
      sound: "low",
      light: "bright",
      crowding: "low",
      touch: false,
      notes: "Outdoor and open-air, with natural daylight and the most space to spread out.",
    },
  },
  {
    slug: "deep-tank",
    name: "Deep Tank Theater",
    icon: "/images/icons/icon-shark.jpg",
    color: "var(--ocean-700)",
    x: 78,
    y: 60,
    description:
      "A 300,000-gallon tank with sharks and rays, plus stadium seating for dive shows.",
    highlights: ["Shark Dive Show", "Ray Touch Pool", "Underwater Tunnel"],
    crowdWeight: 3,
    sensory: {
      sound: "high",
      light: "moderate",
      crowding: "high",
      touch: true,
      notes: "Show narration is amplified over speakers and stadium seating fills up fast before showtime.",
    },
  },
  {
    slug: "kids-cove",
    name: "Kids' Cove",
    icon: "/images/icons/icon-crab.jpg",
    color: "var(--coral-500)",
    x: 22,
    y: 80,
    description:
      "A splash pad, crawl-through tunnels, and the Zookeeper program classroom.",
    highlights: ["Splash Pad", "Crawl Tunnels", "Zookeeper Classroom"],
    crowdWeight: 2,
    sensory: {
      sound: "high",
      light: "bright",
      crowding: "high",
      touch: true,
      notes: "The splash pad area is loud and busy, especially midday — a high-stimulation zone.",
    },
  },
  {
    slug: "welcome-plaza",
    name: "Welcome Plaza",
    icon: "/images/icons/icon-ticket.jpg",
    color: "var(--ink-500)",
    x: 55,
    y: 88,
    description:
      "Guest services, gift shop, and the main entrance — start your visit here.",
    highlights: ["Guest Services", "Gift Shop", "Café"],
    crowdWeight: 3,
    sensory: {
      sound: "moderate",
      light: "bright",
      crowding: "high",
      touch: false,
      notes: "Busiest right at opening and closing as guests arrive and check out of the gift shop.",
    },
  },
];
export const experiences = [
  {
    slug: "general-admission",
    category: "admission",
    name: "General Admission",
    zone: "welcome-plaza",
    icon: "/images/icons/icon-ticket.jpg",
    summary: "Full-day access to every hall, tank, and show.",
    description:
      "One ticket gets you into Reef Hall, The Reptarium, Mangrove Walk, and Deep Tank Theater for the entire day, including all scheduled shows and keeper talks.",
    duration: "All day",
    price: 28,
    slots: generateSlots(60),
  },
  {
    slug: "reptarium-behind-the-scenes",
    category: "tour",
    name: "Reptarium Behind-the-Scenes Tour",
    zone: "reptarium",
    icon: "/images/icons/icon-lizard.jpg",
    summary: "A 45-minute guided walk through keeper-only reptile spaces.",
    description:
      "Go past the glass into feed prep, the quarantine room, and the annex with a Reptarium keeper. Includes an up-close encounter with a resident iguana.",
    duration: "45 min",
    price: 22,
    ageNote: "Recommended ages 6+",
    slots: generateSlots(12),
    image: "/images/AnnexPrivateToursPhoto.webp",
  },
  {
    slug: "shark-dive-vip",
    category: "tour",
    name: "Deep Tank VIP Viewing",
    zone: "deep-tank",
    icon: "/images/icons/icon-shark.jpg",
    summary: "Front-row seating plus a pre-show chat with the dive team.",
    description:
      "Skip the general seating crowd with a reserved front-row spot at Deep Tank Theater and a 10-minute Q&A with the dive team before showtime.",
    duration: "30 min",
    price: 15,
    slots: generateSlots(20),
    image: "/images/foliage/aquaticbackground.webp",
  },
  {
    slug: "feed-a-ray",
    category: "encounter",
    name: "Feed a Ray",
    zone: "deep-tank",
    icon: "/images/icons/icon-ray.jpg",
    summary: "Hand-feed cownose rays at the touch pool, keeper-supervised.",
    description:
      "Step up to the Ray Touch Pool with a keeper and hand-feed our resident cownose rays. Includes a souvenir photo. This is the flagship QR-scan-to-book experience at the exhibit.",
    duration: "15 min",
    price: 12,
    ageNote: "All ages, adult supervision under 8",
    slots: generateSlots(8),
    video: {
      src: "/images/legaseaRayVideo-web.mp4",
      poster: "/images/legaseaRayVideo-poster.jpg",
    },
  },
  {
    slug: "hold-a-reptile",
    category: "encounter",
    name: "Hold a Reptile",
    zone: "reptarium",
    icon: "/images/icons/icon-snake.jpg",
    summary: "Meet and hold a corn snake or bearded dragon with a keeper.",
    description:
      "A five-minute one-on-one with a keeper and one of our ambassador reptiles. Perfect for a scan-and-book moment right outside the Reptarium exit.",
    duration: "10 min",
    price: 10,
    slots: generateSlots(10),
  },
  {
    slug: "keeper-meet-greet",
    category: "encounter",
    name: "Keeper Meet & Greet",
    zone: "mangrove-walk",
    icon: "/images/icons/icon-keeper.jpg",
    summary: "Ask a keeper anything at the Mangrove Walk turtle lagoon.",
    description:
      "A relaxed 15-minute session with an on-duty keeper covering conservation work, animal care, and Q&A from the group — including hands-on time at the turtle lagoon.",
    duration: "15 min",
    price: 8,
    slots: generateSlots(15),
    image: "/images/PrivateFieldTripPhoto.webp",
  },
  {
    slug: "meet-a-capybara",
    category: "encounter",
    name: "Meet a Capybara",
    zone: "kids-cove",
    icon: "/images/icons/icon-capybara.jpg",
    summary: "Get nose-to-nose with our resident capybara, keeper-supervised.",
    description:
      "Capybaras are famously mellow — step in for a calm, up-close visit and a few minutes of gentle petting alongside a keeper.",
    duration: "10 min",
    price: 10,
    slots: generateSlots(10),
    image: "/images/CapybaraPhoto-web.webp",
  },
  {
    slug: "gem-mining",
    category: "encounter",
    name: "Gem Mining",
    zone: "kids-cove",
    icon: "/images/icons/icon-gem.jpg",
    summary: "Sluice a bag of mining rough and keep every gem you find.",
    description:
      "Select a bag of mining rough enriched with real gemstones and fossils, then wash it through our sluice to see what you've found. Every gem is yours to keep.",
    duration: "15 min",
    price: 8,
    slots: generateSlots(20),
    image: "/images/MiningPhoto-web.webp",
  },
];
export const shopProducts = [
  {
    slug: "legasea-plush-clownfish",
    type: "merch",
    name: "Clownfish Plush",
    icon: "/images/icons/icon-plush.jpg",
    price: 18,
    description:
      "Soft, huggable clownfish plush — a Reef Hall gift shop bestseller.",
    variants: ["Small", "Large"],
  },
  {
    slug: "reptarium-tee",
    type: "merch",
    name: "The Reptarium Tee",
    icon: "/images/icons/icon-tshirt.jpg",
    price: 24,
    description: "Unisex cotton tee with the original Reptarium crest artwork.",
    variants: ["S", "M", "L", "XL", "XXL"],
  },
  {
    slug: "vip-scan-shirt",
    type: "merch",
    name: "VIP Scan Shirt",
    icon: "/images/icons/icon-vest.jpg",
    price: 32,
    description:
      "Members-only wearable with an embedded scan tag — flash it at any station for VIP perks.",
    variants: ["S", "M", "L", "XL"],
  },
  {
    slug: "kids-explorer-hat",
    type: "merch",
    name: "Kids' Explorer Hat",
    icon: "/images/icons/icon-cap.jpg",
    price: 16,
    description: "Wide-brim sun hat sized for Kids' Cove explorers.",
    variants: ["Toddler", "Youth"],
  },
  {
    slug: "coral-mug",
    type: "merch",
    name: "Reef Hall Ceramic Mug",
    icon: "/images/icons/icon-mug.jpg",
    price: 14,
    description: "14oz mug featuring hand-illustrated coral reef artwork.",
  },
  {
    slug: "digital-gift-card",
    type: "gift-card",
    name: "Digital Gift Card",
    icon: "/images/icons/icon-gift.jpg",
    price: 25,
    description:
      "Emailed instantly. Redeemable for admission, encounters, and shop purchases.",
    variants: ["$25", "$50", "$100", "$150"],
  },
];
export const parties = [
  {
    slug: "birthday-parties",
    name: "Birthday Parties",
    icon: "/images/icons/icon-cake.jpg",
    summary:
      "A private party room plus a guided animal encounter for the birthday guest.",
    description:
      "Reserve a party room in Kids' Cove for two hours, with a dedicated party host, a keeper-led animal encounter, and admission for your whole group.",
    startingPrice: 349,
    includes: [
      "2-hour private party room",
      "Keeper-led animal encounter",
      "Admission for up to 15 guests",
      "Decorations and paper goods",
    ],
    image: "/images/BirthdayPartyPhoto.webp",
  },
  {
    slug: "bring-the-zoo-to-you",
    name: "Bring-the-Zoo-to-You",
    icon: "/images/icons/icon-van.jpg",
    summary:
      "Our mobile ambassador team visits your school, event, or backyard.",
    description:
      "A keeper and a small team of ambassador animals travel to your location for a 45-minute interactive presentation, tailored to the audience's age.",
    startingPrice: 275,
    includes: [
      "45-minute presentation",
      "3-5 ambassador animals",
      "Q&A session",
      "Travel within 50 miles",
    ],
    image: "/images/ZooToYouPhoto.webp",
  },
  {
    slug: "field-trips",
    name: "Field Trips",
    icon: "/images/icons/icon-bus.jpg",
    summary: "Curriculum-aligned group visits for school and scout groups.",
    description:
      "Discounted group admission with an optional classroom session covering marine biology or herpetology basics, aligned to state science standards.",
    startingPrice: 12,
    includes: [
      "Discounted per-student admission",
      "Optional 30-min classroom session",
      "Chaperone admission included",
      "Self-guided scavenger hunt worksheet",
    ],
    image: "/images/FieldTripsAtLegaseaAquariumPhotos.webp",
  },
  {
    slug: "offsite-events",
    name: "Offsite Events",
    icon: "/images/icons/icon-tent.jpg",
    summary:
      "Full-scale animal programming for festivals, corporate events, and fundraisers.",
    description:
      "For larger offsite events, we bring a custom lineup of ambassador animals, educational signage, and staff to run a booth or full presentation.",
    startingPrice: 600,
    includes: [
      "Custom animal lineup",
      "Educational signage",
      "2-4 staff members",
      "Setup & teardown",
    ],
    image: "/images/OffsiteEventsPhoto.webp",
  },
];
export const programs = [
  {
    slug: "tiny-tots-zookeeper",
    name: "Tiny Tots Zookeeper",
    ageRange: "Ages 2-4",
    icon: "/images/icons/icon-chick.jpg",
    summary: "A gentle, sensory-friendly first introduction to animal care.",
    description:
      "A caregiver-and-child class built around songs, textures, and short animal visits. No prior experience needed — this is many kids' first program.",
    price: 15,
    cadence: "Saturdays, 9:00 AM",
    image: "/images/TinyTotPhoto.webp",
  },
  {
    slug: "lil-zookeeper",
    name: "Lil' Zookeeper",
    ageRange: "Ages 5-6",
    icon: "/images/icons/icon-chick.jpg",
    summary: "Hands-on basics of feeding, habitats, and gentle handling.",
    description:
      "A 45-minute weekly class covering simple animal care tasks under close keeper supervision. This program runs at capacity most seasons.",
    price: 18,
    cadence: "Saturdays, 10:15 AM",
    waitlist: true,
  },
  {
    slug: "junior-zookeeper",
    name: "Junior Zookeeper",
    ageRange: "Ages 7-10",
    icon: "/images/icons/icon-owl.jpg",
    summary:
      "A multi-week series covering diet prep, enrichment, and habitat care.",
    description:
      "Junior Zookeepers rotate through Reef Hall, The Reptarium, and Mangrove Walk over a 4-week series, building real animal care skills each session.",
    price: 22,
    cadence: "Sundays, 11:00 AM · 4-week series",
    image: "/images/JuniorZookeeperPhoto.webp",
  },
  {
    slug: "teen-zookeeper",
    name: "Teen Zookeeper",
    ageRange: "Ages 11-15",
    icon: "/images/icons/icon-eagle.jpg",
    summary:
      "Our most advanced pre-professional track, including a keeper shadow day.",
    description:
      "Teen Zookeepers get hands-on with enrichment design, husbandry logs, and a full shadow day alongside a professional keeper team.",
    price: 30,
    cadence: "Sundays, 1:00 PM · 6-week series",
  },
];
export const shows = [
  {
    id: "reef-feeding",
    name: "Reef Hall Feeding",
    zone: "Reef Hall",
    startHour: 10,
    startMinute: 30,
    durationMinutes: 20,
    description:
      "Watch our reef fish feed and learn how keepers plan a balanced tank diet.",
  },
  {
    id: "venom-talk",
    name: "Venom Lab Keeper Talk",
    zone: "The Reptarium",
    startHour: 11,
    startMinute: 45,
    durationMinutes: 25,
    description:
      "A keeper explains venom extraction, antivenom research, and safety protocol.",
  },
  {
    id: "shark-dive",
    name: "Deep Tank Shark Dive",
    zone: "Deep Tank Theater",
    startHour: 13,
    startMinute: 0,
    durationMinutes: 30,
    description:
      "A live dive with sharks and rays, narrated from the surface by a marine biologist.",
  },
  {
    id: "croc-cove",
    name: "Crocodile Cove Enrichment",
    zone: "The Reptarium",
    startHour: 14,
    startMinute: 15,
    durationMinutes: 20,
    description:
      "Enrichment feeding for our resident crocodilians — a crowd favorite.",
  },
  {
    id: "ray-touch",
    name: "Ray Touch Pool Talk",
    zone: "Deep Tank Theater",
    startHour: 15,
    startMinute: 30,
    durationMinutes: 15,
    description: "A quick keeper talk before open ray touch-pool hours begin.",
  },
  {
    id: "sunset-mangrove",
    name: "Mangrove Sunset Walk",
    zone: "Mangrove Walk",
    startHour: 16,
    startMinute: 45,
    durationMinutes: 25,
    description: "A guided walk as nocturnal mangrove residents start to stir.",
  },
];
export const blogPosts = [
  {
    slug: "meet-nova-the-cownose-ray",
    title: "Meet Nova: Our Newest Cownose Ray",
    excerpt:
      "Nova joined the Deep Tank Theater touch pool this spring after a rescue and rehab story worth telling.",
    category: "Animal Spotlight",
    author: "Marine Care Team",
    date: "2026-08-14",
    readMinutes: 4,
    icon: "/images/icons/icon-ray.jpg",
    body: [
      "Nova arrived at LegaSea in early spring after being found stranded in shallow water following a storm. After several weeks of rehabilitation with our marine care team, she's now a full-time resident of the Deep Tank Theater touch pool.",
      "Cownose rays are gentle, curious animals, and Nova has quickly become one of the more food-motivated residents in the pool — keepers say she's usually first in line at feeding time.",
      "You can meet Nova yourself during our Feed a Ray encounter, bookable right at the touch pool by scanning the station QR code.",
    ],
  },
  {
    slug: "how-we-care-for-venomous-reptiles",
    title: "Behind the Glass: How We Care for Venomous Reptiles",
    excerpt:
      "A look at the daily protocols, safety gear, and training that go into keeping our venom lab running safely.",
    category: "Behind the Scenes",
    author: "Reptarium Keeper Staff",
    date: "2026-07-30",
    readMinutes: 6,
    icon: "/images/icons/icon-lizard.jpg",
    body: [
      "Every keeper who works with venomous species at The Reptarium completes months of shadow training before ever handling an animal solo. Safety protocol governs everything from enclosure design to how tools are stored.",
      "Our venom lab window lets guests watch real husbandry work — feeding, health checks, and enclosure maintenance — from a safe, glassed-in vantage point.",
      "Ask about our Reptarium Behind-the-Scenes Tour if you want a keeper to walk you through the full protocol in person.",
    ],
  },
  {
    slug: "conservation-update-summer-2026",
    title: "Conservation Update: Summer 2026",
    excerpt:
      "An update on the coral propagation project and our partnership with regional wetland restoration groups.",
    category: "Conservation",
    author: "Conservation Team",
    date: "2026-07-02",
    readMinutes: 5,
    icon: "/images/icons/icon-wave.jpg",
    body: [
      "This summer, our coral propagation program successfully out-planted its first batch of nursery-grown staghorn coral fragments in partnership with a regional reef restoration project.",
      "Meanwhile, the Mangrove Walk exhibit continues to support a wetland restoration partnership, with keeper-led guest talks happening most weekends.",
      "A portion of every General Admission ticket helps fund this work — thank you for visiting.",
    ],
  },
  {
    slug: "recap-summer-night-lights",
    title: "Event Recap: Summer Night Lights",
    excerpt: "Photos and highlights from our after-hours summer lantern event.",
    category: "Event Recap",
    author: "Events Team",
    date: "2026-06-20",
    readMinutes: 3,
    icon: "/images/icons/icon-lantern.jpg",
    body: [
      "Summer Night Lights brought guests back after dark for a glow-lantern walk through Mangrove Walk and a special nighttime feeding at Deep Tank Theater.",
      "Nocturnal reptile activity in The Reptarium was a highlight — several guests got to see species that are rarely active during normal daytime hours.",
      "Keep an eye on the Shows & Events page for our next after-hours date.",
    ],
  },
];
export const stickers = [
  {
    id: "clownfish",
    zoneSlug: "reef-hall",
    name: "Hidden Clownfish",
    icon: "/images/icons/icon-fish.jpg",
    hint: "Near the reef viewing wall",
  },
  {
    id: "gecko",
    zoneSlug: "reptarium",
    name: "Hidden Gecko",
    icon: "/images/icons/icon-lizard.jpg",
    hint: "By the venom lab window",
  },
  {
    id: "frog",
    zoneSlug: "mangrove-walk",
    name: "Hidden Frog",
    icon: "/images/icons/icon-frog.jpg",
    hint: "Along the frog grotto rail",
  },
  {
    id: "ray",
    zoneSlug: "deep-tank",
    name: "Hidden Ray",
    icon: "/images/icons/icon-ray.jpg",
    hint: "Beside the touch pool",
  },
  {
    id: "crab",
    zoneSlug: "kids-cove",
    name: "Hidden Crab",
    icon: "/images/icons/icon-crab.jpg",
    hint: "Near the splash pad entrance",
  },
];
export const testimonials = [
  {
    id: "t-marcus",
    name: "Marcus D.",
    context: "Visited with two kids, ages 6 and 9",
    rating: 5,
    quote:
      "The Feed a Ray encounter was the highlight of our whole trip — my kids are still talking about it weeks later. Booking right from the QR code at the station made it so easy.",
  },
  {
    id: "t-priya",
    name: "Priya S.",
    context: "Reptarium VIP member",
    rating: 5,
    quote:
      "Fast-pass line access alone paid for the membership after two visits. The scan card is genuinely convenient, not just a gimmick.",
  },
  {
    id: "t-janet",
    name: "Janet & Tom R.",
    context: "Booked a Junior Zookeeper series for their daughter",
    rating: 5,
    quote:
      "Our daughter came out of every session excited to tell us something new. The keepers clearly love working with kids, not just animals.",
  },
  {
    id: "t-devon",
    name: "Devon K.",
    context: "Field trip chaperone, 4th grade class",
    rating: 4,
    quote:
      "Well organized for a group of 30 eight-year-olds, which is saying something. The classroom session tied in nicely with what they'd been learning about habitats.",
  },
  {
    id: "t-alicia",
    name: "Alicia M.",
    context: "First-time visitor, used the sensory map",
    rating: 5,
    quote:
      "I have a kid who gets overwhelmed easily, and being able to plan our route around the quieter zones ahead of time made a huge difference.",
  },
  {
    id: "t-ben",
    name: "Ben H.",
    context: "Booked a birthday party for a 7-year-old",
    rating: 5,
    quote:
      "The party host handled everything — we just showed up. The capybara encounter had every kid at the party asking their parents for one.",
  },
];
const WEATHER_CONDITIONS = [
  {
    condition: "Sunny",
    icon: "sun",
    tip: "Clear skies today — Mangrove Walk's open-air boardwalk is a great place to start.",
  },
  {
    condition: "Partly Cloudy",
    icon: "cloud-sun",
    tip: "Mild and mostly clear — a great day to do the full self-guided outdoor route.",
  },
  {
    condition: "Light Rain",
    icon: "cloud-rain",
    tip: "Light rain expected — Reef Hall, The Reptarium, and Deep Tank Theater are all indoors.",
  },
];
export function getTodayWeather(now = new Date()) {
  const dayOfYear = Math.floor(
    (now - new Date(now.getFullYear(), 0, 0)) / 86_400_000,
  );
  return WEATHER_CONDITIONS[dayOfYear % WEATHER_CONDITIONS.length];
}
const CROWD_LEVELS = ["Low", "Moderate", "Busy"];
export function getCrowdLevel(zoneSlug, now = new Date()) {
  const zone = zones.find((z) => z.slug === zoneSlug);
  if (!zone) return CROWD_LEVELS[0];
  const hour = now.getHours() + now.getMinutes() / 60;
  // Crowds build from open (9AM) toward a midday peak (~1PM), then ease off.
  const curve = Math.max(0, 1 - Math.abs(hour - 13) / 5);
  const score = curve * zone.crowdWeight;
  if (score > 1.6) return CROWD_LEVELS[2];
  if (score > 0.7) return CROWD_LEVELS[1];
  return CROWD_LEVELS[0];
}
export const faqs = [
  {
    keywords: ["hour", "open", "close", "time"],
    question: "What are your hours?",
    answer:
      "We're open daily from 9:00 AM to 6:00 PM, with last admission at 5:00 PM.",
  },
  {
    keywords: ["ticket", "admission", "price", "cost", "how much"],
    question: "How much are tickets?",
    answer:
      "General Admission is $28 for a full day, all shows included. You can book it on the Visit page.",
  },
  {
    keywords: ["member", "membership", "vip"],
    question: "How does membership work?",
    answer:
      "VIP members get a scannable membership card, fast-pass lines, and perks tracked automatically as you visit. See the VIP & Membership page for tiers.",
  },
  {
    keywords: ["direction", "address", "parking", "where"],
    question: "Where are you located?",
    answer:
      "We're located at 1 Reef Hall Way. Free parking is available in the main lot off the highway exit.",
  },
  {
    keywords: ["animal", "feed", "encounter", "touch"],
    question: "Can I feed or touch an animal?",
    answer:
      "Yes! Feed a Ray and Hold a Reptile are both bookable encounters — scan the QR code at either station or book ahead on the Visit page.",
  },
  {
    keywords: ["party", "birthday"],
    question: "Do you host birthday parties?",
    answer:
      "Yes, our Birthday Parties package includes a private room and a keeper-led animal encounter. See the Parties & Groups page.",
  },
  {
    keywords: ["accessib", "wheelchair", "ada", "disab", "sensory"],
    question: "Is the facility accessible?",
    answer:
      "Yes — the full facility is wheelchair accessible, and we offer sensory-friendly hours. Details are on the Accessibility page.",
  },
];
export function getUpcomingShow(now = new Date()) {
  const minutesNow = now.getHours() * 60 + now.getMinutes();
  const withStart = shows
    .map((s) => ({
      show: s,
      startMin: s.startHour * 60 + s.startMinute,
    }))
    .sort((a, b) => a.startMin - b.startMin);
  const next = withStart.find((s) => s.startMin >= minutesNow);
  return (next ?? withStart[0])?.show ?? null;
}
export function isShowLive(show, now = new Date()) {
  const minutesNow = now.getHours() * 60 + now.getMinutes();
  const start = show.startHour * 60 + show.startMinute;
  return minutesNow >= start && minutesNow <= start + show.durationMinutes;
}
export function formatShowTime(show) {
  const h = show.startHour % 12 === 0 ? 12 : show.startHour % 12;
  const m = show.startMinute.toString().padStart(2, "0");
  const ampm = show.startHour >= 12 ? "PM" : "AM";
  return `${h}:${m} ${ampm}`;
}
export function findExperience(slug) {
  return experiences.find((e) => e.slug === slug);
}
export function findProduct(slug) {
  return shopProducts.find((p) => p.slug === slug);
}
export function findParty(slug) {
  return parties.find((p) => p.slug === slug);
}
export function findProgram(slug) {
  return programs.find((p) => p.slug === slug);
}
export function findBlogPost(slug) {
  return blogPosts.find((p) => p.slug === slug);
}
export function findZone(slug) {
  return zones.find((z) => z.slug === slug);
}
