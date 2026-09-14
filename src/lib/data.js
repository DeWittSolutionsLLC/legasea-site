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
    summary: "Full-day, self-guided access to the reptile hall, aquariums, and mammal exhibits.",
    description:
      "One ticket gets you into every exhibit hall for the day — reptiles, freshwater and saltwater aquariums, and mammal habitats — plus every scheduled show. Book online for current pricing.",
    duration: "All day",
    price: 28,
    slots: generateSlots(60),
  },
  {
    slug: "adventure-pass",
    category: "admission",
    name: "Adventure Pass",
    zone: "welcome-plaza",
    icon: "/images/icons/icon-medal.jpg",
    summary: "Our best-value bundle — seven experiences in one pass.",
    description:
      "Get the most out of your visit: the Adventure Pass bundles seven of our most popular add-on experiences (a $105 value) into a single $85 pass.",
    duration: "All day",
    price: 85,
    slots: generateSlots(30),
  },
  {
    slug: "reptarium-behind-the-scenes",
    category: "tour",
    name: "Reptarium Annex Private Tour",
    zone: "reptarium",
    icon: "/images/icons/icon-lizard.jpg",
    summary: "A guided, hands-on tour of the original reptile zoo across the street.",
    description:
      "A private, hour-long guided tour of the Reptarium Annex — the original reptile zoo, home to over 100 reptiles. One of our animal educators introduces 10–15 reptiles up close.",
    duration: "60 min",
    price: 250,
    ageNote: "Up to 25 guests included, max capacity 40",
    slots: generateSlots(12),
    image: "/images/AnnexPrivateToursPhoto.webp",
  },
  {
    slug: "shark-dive-vip",
    category: "tour",
    name: "Ultimate Zoo Experience With Jay",
    zone: "deep-tank",
    icon: "/images/icons/icon-shark.jpg",
    summary: "A private, one-on-one animal encounter with one of our senior keepers.",
    description:
      "Our top-tier private tour: a one-on-one reptile interaction, full aquarium access, and a hands-on encounter with a mammal of your choosing, plus a chance to meet some of our rarest animals. Jay's schedule books out a couple weeks in advance.",
    duration: "60 min",
    price: 450,
    ageNote: "1-5 guests",
    slots: generateSlots(10),
    image: "/images/foliage/aquaticbackground.webp",
  },
  {
    slug: "feed-a-ray",
    category: "encounter",
    name: "Stingray & Turtle Pond Feeding",
    zone: "deep-tank",
    icon: "/images/icons/icon-ray.jpg",
    summary: "Hand-feed our stingrays or turtle pond residents, keeper-supervised.",
    description:
      "Step up to the touch pool with a keeper and hand-feed our resident stingrays, or head to the turtle pond instead. $5 for members, $6 for non-members — pick up as many feedings as you'd like during your visit.",
    duration: "10 min",
    price: 6,
    ageNote: "All ages, adult supervision under 8",
    slots: generateSlots(8),
    video: {
      src: "/images/legaseaRayVideo-web.mp4",
      poster: "/images/legaseaRayVideo-poster.jpg",
    },
  },
  {
    slug: "surprise-feeding",
    category: "encounter",
    name: "Surprise Feeding",
    zone: "reptarium",
    icon: "/images/icons/icon-snake.jpg",
    summary: "Two premium feedings, picked for you — one reptile, one aquatic animal.",
    description:
      "A surprise pairing of two premium animal-ambassador feedings: one reptile and one aquatic animal, chosen by our keeper team on the day.",
    duration: "15 min",
    price: 15,
    slots: generateSlots(10),
  },
  {
    slug: "hold-a-reptile",
    category: "encounter",
    name: "Hold a Reptile",
    zone: "reptarium",
    icon: "/images/icons/icon-snake.jpg",
    summary: "Meet and hold one of our ambassador reptiles with a keeper.",
    description:
      "A staff-guided, one-on-one moment with one of our ambassador reptiles — the same kind of hands-on interaction our field-trip groups get throughout the reptile hall.",
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
    summary: "Ask a keeper anything about animal care and conservation.",
    description:
      "A relaxed session with an on-duty keeper covering conservation work, animal care, and Q&A from the group.",
    duration: "15 min",
    price: 8,
    slots: generateSlots(15),
    image: "/images/PrivateFieldTripPhoto.webp",
  },
  {
    slug: "meet-a-capybara",
    category: "encounter",
    name: "Meet Javier the Capybara",
    zone: "kids-cove",
    icon: "/images/icons/icon-capybara.jpg",
    summary: "A premium, hands-on visit with Javier, our resident capybara.",
    description:
      "Capybaras are famously mellow — step in for a calm, up-close visit and a few minutes of gentle petting with Javier, alongside a keeper. One of our Premium Mammal Experiences.",
    duration: "10 min",
    price: 30,
    slots: generateSlots(10),
    image: "/images/CapybaraPhoto-web.webp",
  },
  {
    slug: "meet-stitch-the-binturong",
    category: "encounter",
    name: "Meet Stitch the Binturong",
    zone: "kids-cove",
    icon: "/images/icons/icon-capybara.jpg",
    summary: "A premium encounter with Stitch, our binturong.",
    description:
      "Binturongs (also called bearcats) are gentle, curious animals — get an up-close, hands-on visit with Stitch alongside a keeper. One of our Premium Mammal Experiences.",
    duration: "10 min",
    price: 30,
    slots: generateSlots(10),
  },
  {
    slug: "standard-mammal-experience",
    category: "encounter",
    name: "Meet Brillo the Armadillo",
    zone: "kids-cove",
    icon: "/images/icons/icon-capybara.jpg",
    summary: "A hands-on visit with Brillo the armadillo or our Maine Coon kittens.",
    description:
      "A shorter, standard-tier mammal encounter — meet Brillo the armadillo or spend a few minutes with our Maine Coon kittens, keeper-supervised.",
    duration: "10 min",
    price: 15,
    slots: generateSlots(12),
  },
  {
    slug: "sloth-holding-experience",
    category: "encounter",
    name: "Hold Lilo the Sloth",
    zone: "kids-cove",
    icon: "/images/icons/icon-sprout.jpg",
    summary: "Hold Lilo, our two-toed sloth — ages 18 and up.",
    description:
      "Our most requested mammal encounter: hold Lilo, our amazing and cuddly two-toed sloth, for a private photo-worthy moment. $100 for one guest, $180 for two.",
    duration: "10 min",
    price: 100,
    ageNote: "Ages 18+",
    slots: generateSlots(6),
  },
  {
    slug: "fish-spa",
    category: "encounter",
    name: "Fish Spa",
    zone: "reef-hall",
    icon: "/images/icons/icon-fish.jpg",
    summary: "Let our doctor fish tickle your toes at the saltwater aquarium.",
    description:
      "A ticklish favorite — dip your feet into our doctor fish tank at the saltwater aquarium section and let them nibble away.",
    duration: "10 min",
    price: 15,
    slots: generateSlots(15),
  },
  {
    slug: "gem-mining",
    category: "encounter",
    name: "Mining Station",
    zone: "kids-cove",
    icon: "/images/icons/icon-gem.jpg",
    summary: "Sluice a bag of mining rough and keep every gem you find.",
    description:
      "Select a bag of mining rough enriched with real gemstones, fossils, arrowheads, and seashells, then wash it through our sluice to see what you've found. Every find is yours to keep — starting at $12 per bag.",
    duration: "15 min",
    price: 12,
    slots: generateSlots(20),
    image: "/images/MiningPhoto-web.webp",
  },
];
export const shopProducts = [
  {
    slug: "reptarium-logo-tee",
    type: "merch",
    name: "LegaSea Aquarium & The Reptarium Logo Tee",
    icon: "/images/icons/icon-tshirt.jpg",
    price: 20,
    description: "Unisex tee with the LegaSea Aquarium & The Reptarium logo.",
    variants: ["S", "M", "L", "XL"],
  },
  {
    slug: "powered-by-reptiles-tee",
    type: "merch",
    name: "\"Powered By Reptiles\" Tee",
    icon: "/images/icons/icon-tshirt.jpg",
    price: 30,
    description: "Our \"LegaSea Powered By Reptiles\" graphic tee.",
    variants: ["S", "M", "L", "XL"],
  },
  {
    slug: "bushi-barczyk-cobra-tee",
    type: "merch",
    name: "Black & Cobra Tee — Bushi & Barczyk",
    icon: "/images/icons/icon-tshirt.jpg",
    price: 20,
    description: "A black tee featuring Bushi the cobra, part of our Barczyk-designed graphic series.",
    variants: ["S", "M", "L", "XL"],
  },
  {
    slug: "boo-boo-barczyk-tee",
    type: "merch",
    name: "Octopus & Chameleon Tee — BooBoo & Barczyk",
    icon: "/images/icons/icon-tshirt.jpg",
    price: 20,
    description: "A graphic tee featuring an octopus and chameleon design from our Barczyk series.",
    variants: ["S", "M", "L", "XL"],
  },
  {
    slug: "reptarium-hoodie",
    type: "merch",
    name: "LegaSea Aquarium & The Reptarium Hoodie",
    icon: "/images/icons/icon-tshirt.jpg",
    price: 40,
    description: "A cozy pullover hoodie with the LegaSea Aquarium & The Reptarium logo.",
    variants: ["S", "M", "L", "XL"],
  },
  {
    slug: "snapback-hat",
    type: "merch",
    name: "Snapback Hat",
    icon: "/images/icons/icon-cap.jpg",
    price: 30,
    description: "Snapback hat with the LegaSea Aquarium & The Reptarium logo.",
  },
  {
    slug: "flex-fit-hat",
    type: "merch",
    name: "Flex-Fit Hat",
    icon: "/images/icons/icon-cap.jpg",
    price: 30,
    description: "Flex-fit hat with the LegaSea Aquarium & The Reptarium logo.",
  },
  {
    slug: "reptarium-beanie",
    type: "merch",
    name: "The Reptarium Beanie",
    icon: "/images/icons/icon-cap.jpg",
    price: 20,
    description: "Warm knit beanie with The Reptarium logo.",
  },
  {
    slug: "be-good-to-people-patch",
    type: "merch",
    name: "\"Be Good To People\" Velcro Patch",
    icon: "/images/icons/icon-heart.jpg",
    price: 5,
    description:
      "A velcro patch featuring one of Brian Barczyk's favorite sayings: \"Be Good To People.\"",
  },
  {
    slug: "reptarium-logo-patch",
    type: "merch",
    name: "LegaSea Aquarium & The Reptarium Logo Patch",
    icon: "/images/icons/icon-heart.jpg",
    price: 5,
    description: "A velcro patch with the LegaSea Aquarium & The Reptarium logo.",
  },
  {
    slug: "brian-bowser-patch",
    type: "merch",
    name: "Brian & Bowser Velcro Patch",
    icon: "/images/icons/icon-heart.jpg",
    price: 5,
    description:
      "A velcro patch of Brian Barczyk with Bowser, our alligator snapping turtle.",
  },
  {
    slug: "frog-cave-pin",
    type: "merch",
    name: "Into The Frog Cave Pin — March Pin of the Month",
    icon: "/images/icons/icon-star.jpg",
    price: 20,
    description: "March's limited-edition Pin of the Month, \"Into The Frog Cave.\"",
  },
  {
    slug: "world-we-share-pin",
    type: "merch",
    name: "The World We Share Pin — April Pin of the Month",
    icon: "/images/icons/icon-star.jpg",
    price: 20,
    description: "April's limited-edition Pin of the Month, \"The World We Share.\"",
  },
  {
    slug: "love-our-oceans-pin",
    type: "merch",
    name: "Love Our Oceans Pin — February Pin of the Month",
    icon: "/images/icons/icon-star.jpg",
    price: 20,
    description: "February's limited-edition Pin of the Month, \"Love Our Oceans.\"",
  },
  {
    slug: "pin-club-subscription",
    type: "merch",
    name: "LegaSea Pin Club — Monthly Subscription",
    icon: "/images/icons/icon-star.jpg",
    price: 20,
    description:
      "A monthly subscription for a custom LegaSea-branded enamel pin, delivered every month.",
  },
  {
    slug: "animal-ambassador-pins",
    type: "merch",
    name: "Animal Ambassador Enamel Pins",
    icon: "/images/icons/icon-star.jpg",
    price: 20,
    description:
      "Collectible enamel pins featuring our animal ambassadors — mix and match your favorites ($20-$80 depending on design).",
  },
  {
    slug: "animal-ambassador-stickers",
    type: "merch",
    name: "Animal Ambassador Stickers",
    icon: "/images/icons/icon-star.jpg",
    price: 3,
    description: "Vinyl stickers featuring our animal ambassadors.",
  },
  {
    slug: "reptarium-mural-poster",
    type: "merch",
    name: "Reptarium Reptile Mural Poster",
    icon: "/images/icons/icon-notepad.jpg",
    price: 30,
    description:
      "A print of the reptile mural from the original Reptarium party room.",
  },
  {
    slug: "reptarium-coloring-book",
    type: "merch",
    name: "Reptarium Coloring Book",
    icon: "/images/icons/icon-notepad.jpg",
    price: 12,
    description: "A coloring book featuring artwork from the original Reptarium location.",
  },
  {
    slug: "legasea-tumbler",
    type: "merch",
    name: "LegaSea Aquarium Tumbler",
    icon: "/images/icons/icon-mug.jpg",
    price: 20,
    description: "Insulated tumbler with the LegaSea Aquarium logo.",
  },
  {
    slug: "reptarium-mug",
    type: "merch",
    name: "Reptarium Mug",
    icon: "/images/icons/icon-mug.jpg",
    price: 30,
    description: "Ceramic mug with The Reptarium logo.",
  },
  {
    slug: "legasea-coffee-mug",
    type: "merch",
    name: "LegaSea Coffee Mug",
    icon: "/images/icons/icon-mug.jpg",
    price: 18,
    description: "Ceramic coffee mug with the LegaSea Aquarium logo.",
  },
  {
    slug: "legasea-coffee-bag",
    type: "merch",
    name: "LegaSea Coffee (12oz Bag)",
    icon: "/images/icons/icon-mug.jpg",
    price: 15,
    description: "A 12oz bag of LegaSea-branded coffee.",
  },
  {
    slug: "legasea-ceramics",
    type: "merch",
    name: "LegaSea Ceramics",
    icon: "/images/icons/icon-mug.jpg",
    price: 8,
    description: "A range of LegaSea-branded ceramic pieces, priced $8-$22 depending on the item.",
  },
  {
    slug: "bear-proof-enclosure",
    type: "merch",
    name: "Bear Proof Enclosure",
    icon: "/images/icons/icon-foliage.jpg",
    price: 60,
    description:
      "Part of the LegaSea Aquarium & The Reptarium Terrarium Cube combo lineup — a durable reptile enclosure.",
  },
  {
    slug: "terrarium-cube",
    type: "merch",
    name: "Terrarium Cube",
    icon: "/images/icons/icon-foliage.jpg",
    price: 60,
    description:
      "Part of the LegaSea Aquarium & The Reptarium Terrarium Cube combo lineup — a compact reptile terrarium.",
  },
  {
    slug: "onemillionwrists-bracelet",
    type: "merch",
    name: "#OneMillionWrists Bracelet",
    icon: "/images/icons/icon-heart.jpg",
    price: 6,
    description:
      "\"I Helped Build The LegaSea Aquarium\" — each $6 bracelet symbolizes the $6 million invested in building LegaSea Aquarium, honoring Brian Barczyk's vision. Ask at Guest Services if it's out of stock online.",
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
      "A private party room plus a surprise reptile meet & greet for the birthday guest.",
    description:
      "Reserve the Basic Room (10 guests, $299) or the Deluxe Room (20 guests, $599) for two hours of party-room access, with a surprise reptile meet & greet and a gift for the birthday guest included. Additional guests are $19.99 each. Prefer a private experience? The Reptarium Annex offers a 2-hour private party from $450 for 15 guests, with Jets Pizza included and 50% off same-day admission to LegaSea.",
    startingPrice: 299,
    includes: [
      "2-hour party room access (Basic: 10 guests · Deluxe: 20 guests)",
      "Surprise reptile meet & greet",
      "Gift for the birthday guest",
      "You may bring your own cake (no other outside food, for the safety of our aquatic animals)",
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
      "A keeper and 10–15 ambassador animals — snakes, lizards, turtles, frogs, and even a baby alligator — travel to your location for a one-hour interactive presentation. Indoor or outdoor (70°F+ and shade required outdoors). We don't travel outside Michigan, and a travel fee applies beyond 20 miles from Utica. Please book at least 2 weeks ahead.",
    startingPrice: 400,
    includes: [
      "1-hour interactive presentation, 10-15 animals",
      "Additional hours: $350 each",
      "30-minute presentations also available: $250 each (2 minimum)",
      "Mammal-only option available: $299",
    ],
    image: "/images/ZooToYouPhoto.webp",
  },
  {
    slug: "field-trips",
    name: "Field Trips",
    icon: "/images/icons/icon-bus.jpg",
    summary: "Self-guided group visits for school, scout, and camp groups.",
    description:
      "A 1.5-hour self-guided visit through the reptile, aquatic, and mammal sections, with staff stationed throughout for animal interactions. $12 per attendee, including chaperones and staff — minimum 25 people, no maximum. Final headcount and payment are due 10 days before your visit. Prefer something more private? The Reptarium Annex offers a 1-hour guided, hands-on private field trip for up to 25 guests at $250.",
    startingPrice: 12,
    includes: [
      "1.5-hour self-guided visit (min. 25 attendees)",
      "Staff stationed throughout for animal interactions",
      "Open to the public during your visit",
      "Available 10 AM–6 PM daily (closed Tuesdays, Sept–Dec)",
    ],
    image: "/images/FieldTripsAtLegaseaAquariumPhotos.webp",
  },
  {
    slug: "guided-tours",
    name: "Private Guided Tours",
    icon: "/images/icons/icon-tent.jpg",
    summary:
      "Small-group private tours with a private reptile interaction, from Premium to our top-tier keeper experience.",
    description:
      "Two private tour tiers: the Premium Tour ($300+, up to 10 guests) includes a one-on-one private reptile interaction plus 50% off admission, with optional feeding and sloth-experience upgrades. The Ultimate Zoo Experience With Jay ($450+, 1-5 guests) adds full aquarium access and a hands-on encounter with a mammal of your choosing — Jay's schedule books a couple weeks out.",
    startingPrice: 300,
    includes: [
      "Premium Tour: 1-on-1 reptile interaction, up to 10 guests, 50% off admission",
      "Ultimate Zoo Experience With Jay: adds aquarium access + your choice of mammal encounter",
      "Optional feeding & sloth-experience upgrades",
      "Book in advance — Jay's tours fill up quickly",
    ],
    image: "/images/OffsiteEventsPhoto.webp",
  },
];
export const programs = [
  {
    slug: "tiny-tots-zookeeper",
    name: "Tiny Tots Zookeeper",
    ageRange: "Ages 0-5",
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
    ageRange: "Ages 6-7",
    icon: "/images/icons/icon-chick.jpg",
    summary: "Hands-on basics of feeding, habitats, and gentle handling.",
    description:
      "A weekly class covering simple animal care tasks under close keeper supervision. This program is currently waitlist-only — join the waitlist to be notified when a spot opens.",
    price: 18,
    cadence: "Saturdays · Waitlist only",
    waitlist: true,
  },
  {
    slug: "junior-zookeeper",
    name: "Junior Zookeeper",
    ageRange: "Ages 8-12",
    icon: "/images/icons/icon-owl.jpg",
    summary:
      "A multi-week series covering diet prep, enrichment, and habitat care.",
    description:
      "Junior Zookeepers rotate through the reptile, aquatic, and mammal sections over a multi-week series, building real animal care skills each session.",
    price: 22,
    cadence: "Sundays, 11:00 AM · multi-week series",
    image: "/images/JuniorZookeeperPhoto.webp",
  },
  {
    slug: "teen-zookeeper",
    name: "Teen Zookeeper",
    ageRange: "Ages 13-15",
    icon: "/images/icons/icon-eagle.jpg",
    summary:
      "Our most advanced pre-professional track, including a keeper shadow day.",
    description:
      "Teen Zookeepers get hands-on with enrichment design, husbandry logs, and a full shadow day alongside a professional keeper team.",
    price: 30,
    cadence: "Sundays, 1:00 PM · multi-week series",
  },
];
export const shows = [
  {
    id: "shark-show",
    name: "Shark Show",
    zone: "Deep Tank Theater",
    startHour: 11,
    startMinute: 30,
    durationMinutes: 20,
    description:
      "Get up close with our sharks and learn how our team cares for these apex predators.",
  },
  {
    id: "reptile-show",
    name: "Reptile Show",
    zone: "The Reptarium",
    startHour: 12,
    startMinute: 30,
    durationMinutes: 20,
    description:
      "A keeper introduces a rotating lineup of snakes and lizards from the reptile hall.",
  },
  {
    id: "mystery-animal-show-1",
    name: "Mystery Animal Show",
    zone: "Welcome Plaza",
    startHour: 13,
    startMinute: 30,
    durationMinutes: 20,
    description:
      "You won't know who's coming out until showtime — a keeper favorite surprise animal.",
  },
  {
    id: "mystery-animal-show-2",
    name: "Mystery Animal Show",
    zone: "Welcome Plaza",
    startHour: 14,
    startMinute: 30,
    durationMinutes: 20,
    description:
      "A second surprise lineup — no two Mystery Animal Shows are quite the same.",
  },
  {
    id: "freshwater-predator-show",
    name: "Freshwater Predator Show",
    zone: "Reef Hall",
    startHour: 15,
    startMinute: 30,
    durationMinutes: 20,
    description:
      "Meet our freshwater predators up close and learn what makes them such effective hunters.",
  },
  {
    id: "big-snake-show",
    name: "Big Snake Show",
    zone: "The Reptarium",
    startHour: 16,
    startMinute: 30,
    durationMinutes: 20,
    description:
      "Our largest snakes make an appearance for this can't-miss end-of-day show.",
  },
  {
    id: "stingray-show",
    name: "Stingray Show",
    zone: "Deep Tank Theater",
    startHour: 17,
    startMinute: 30,
    durationMinutes: 20,
    description:
      "A keeper talk and feeding session at the stingray touch pool.",
  },
];
export const blogPosts = [
  {
    slug: "meet-nova-the-frilled-lizard",
    title: "Meet Nova: Our Frilled Lizard",
    excerpt:
      "A closer look at Nova, our male frilled lizard, and the famous neck frill that gives the species its name.",
    category: "Animal Spotlight",
    author: "Reptarium Keeper Staff",
    date: "2026-08-14",
    readMinutes: 4,
    icon: "/images/icons/icon-lizard.jpg",
    body: [
      "Nova is a male Chlamydosaurus kingii — a frilled lizard native to Northern Australia and Southern New Guinea. Adults typically reach around 33 inches long, and Nova is no exception.",
      "His diet is a rotating menu of crickets, roaches, hornworms, silkworms, soldier fly larvae, superworms, and canned grasshoppers, all dusted with a calcium and vitamin D3 supplement to keep his bones strong.",
      "In the wild, frilled lizards can live for decades; in captivity, they typically live up to 20 years. Come say hi to Nova in The Reptarium on your next visit.",
    ],
  },
  {
    slug: "taz-the-argentine-blue-tegu",
    title: "Taz: Our Argentine Blue Tegu",
    excerpt:
      "Get to know Taz, one of our most striking reptile ambassadors, and what makes blue tegus such capable omnivores.",
    category: "Animal Spotlight",
    author: "Reptarium Keeper Staff",
    date: "2026-07-30",
    readMinutes: 4,
    icon: "/images/icons/icon-lizard.jpg",
    body: [
      "Taz is a male Salvator merianae, or Argentine blue tegu — native to Brazil, Argentina, Paraguay, Uruguay, and Bolivia. Tegus are known for their striking light-blue coloration, which is most intense in adult males like Taz.",
      "Tegus are true omnivores: Taz's diet includes feeder insects like mealworms and roaches, vertebrate prey, crayfish, and the occasional fruit treat, with vitamin and mineral supplementation as needed.",
      "In captivity, Argentine blue tegus like Taz typically live 12-20 years. Ask a keeper about him next time you're in The Reptarium.",
    ],
  },
  {
    slug: "bowser-the-alligator-snapping-turtle",
    title: "Bowser: Our Alligator Snapping Turtle",
    excerpt:
      "One of the heaviest freshwater turtle species on Earth, right here at LegaSea.",
    category: "Animal Spotlight",
    author: "Reptarium Keeper Staff",
    date: "2026-07-02",
    readMinutes: 4,
    icon: "/images/icons/icon-frog.jpg",
    body: [
      "Bowser is a male Macrochelys temminckii — an alligator snapping turtle, native to freshwater habitats across the southeastern United States, from the Florida Panhandle west to Texas and north into the Midwest.",
      "Alligator snapping turtles are among the heaviest freshwater turtles in the world — adults typically reach 30-40 inches across and 150-180 pounds. In the wild, they can live anywhere from 20 to 70 years.",
      "Bowser is a guest favorite for a reason — come see one of nature's most impressive freshwater reptiles up close.",
    ],
  },
  {
    slug: "meet-javier-the-capybara",
    title: "Meet Javier: Our Resident Capybara",
    excerpt:
      "The star of our Premium Mammal Experience — everything to know before you meet Javier.",
    category: "Animal Spotlight",
    author: "Animal Care Team",
    date: "2026-06-20",
    readMinutes: 3,
    icon: "/images/icons/icon-capybara.jpg",
    body: [
      "Capybaras are the largest rodents in the world, and famously one of the most mellow — which makes Javier a natural for up-close, hands-on encounters.",
      "Javier is one of the stars of our Premium Mammal Experience, alongside Stitch the binturong and Lilo the two-toed sloth. Keepers say he's usually the calmest animal in the building.",
      "You can book time with Javier as an add-on the day of your visit at the front counter — availability is limited, so keepers recommend asking early in your visit.",
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
  // Crowds build from open toward a midday peak (~1PM), then ease off.
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
      "Fall hours (Sept 14–Dec 19): Mon, Wed, Thu, Fri 10 AM–6 PM; Sat & Sun 11 AM–7 PM. We're closed Tuesdays.",
  },
  {
    keywords: ["ticket", "admission", "price", "cost", "how much"],
    question: "How much are tickets?",
    answer:
      "General Admission is bookable online — visit the Visit page for current pricing, or ask about the Adventure Pass ($85) which bundles 7 of our most popular experiences.",
  },
  {
    keywords: ["member", "membership", "vip"],
    question: "How does membership work?",
    answer:
      "VIP members get a scannable membership card, fast-pass lines, and perks tracked automatically as you visit. See the VIP & Membership page, or book an Annual Membership online.",
  },
  {
    keywords: ["direction", "address", "parking", "where"],
    question: "Where are you located?",
    answer:
      "We're located at 45550 Van Dyke Ave, Utica, MI 48317. The Reptarium Annex is just across the street at 45559 Van Dyke Ave. Free parking is available on-site.",
  },
  {
    keywords: ["animal", "feed", "encounter", "touch"],
    question: "Can I feed or touch an animal?",
    answer:
      "Yes! Stingray & turtle pond feedings and Hold a Reptile are both bookable encounters — available at the front counter the day of your visit, or book ahead on the Visit page.",
  },
  {
    keywords: ["party", "birthday"],
    question: "Do you host birthday parties?",
    answer:
      "Yes — our Basic Room ($299/10 guests) and Deluxe Room ($599/20 guests) both include a surprise reptile meet & greet. See the Parties & Groups page for details.",
  },
  {
    keywords: ["accessib", "wheelchair", "ada", "disab", "sensory"],
    question: "Is the facility accessible?",
    answer:
      "Yes — the full facility is wheelchair accessible, and we offer sensory-friendly hours. Details are on the Accessibility page.",
  },
  {
    keywords: ["phone", "call", "contact", "email"],
    question: "How do I contact you?",
    answer:
      "Call (586) 884-6941 (Mon–Fri, 8 AM–4 PM EST) or email LegaSea@TheReptarium.com.",
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
