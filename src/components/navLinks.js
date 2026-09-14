export const navGroups = [
  {
    title: "Plan Your Visit",
    links: [
      {
        href: "/visit",
        label: "Visit",
        blurb: "Admission, tours & encounters",
      },
      {
        href: "/shows",
        label: "Show Schedule",
        blurb: "Today's feedings & talks",
      },
      {
        href: "/map",
        label: "Zone Map & Tour",
        blurb: "Self-guided route planner",
      },
      {
        href: "/stamps",
        label: "Stamp Hunt",
        blurb: "Find stickers, earn a prize",
      },
      {
        href: "/my-visit",
        label: "My Visit",
        blurb: "Everything you've added, in one place",
      },
    ],
  },
  {
    title: "Explore",
    links: [
      {
        href: "/our-story",
        label: "Our Story",
        blurb: "How LegaSea began",
      },
      {
        href: "/blog",
        label: "Blog",
        blurb: "Animal spotlights & updates",
      },
      {
        href: "/connect",
        label: "Connect",
        blurb: "All our social channels",
      },
    ],
  },
  {
    title: "Groups & Programs",
    links: [
      {
        href: "/parties",
        label: "Parties & Groups",
        blurb: "Birthdays, field trips & more",
      },
      {
        href: "/programs",
        label: "Zookeeper Programs",
        blurb: "Classes for ages 2-15",
      },
      {
        href: "/vip",
        label: "VIP & Membership",
        blurb: "Perks, scans & fast passes",
      },
    ],
  },
  {
    title: "Shop",
    links: [
      {
        href: "/shop",
        label: "Shop",
        blurb: "Merch & gift cards",
      },
    ],
  },
];
export const flatNavLinks = navGroups.flatMap((g) => g.links);
