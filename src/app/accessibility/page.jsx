import PageHero from "@/components/PageHero";
import IconBadge from "@/components/IconBadge";
export const metadata = {
  title: "Accessibility",
  description:
    "Accessibility information for LegaSea Aquarium & The Reptarium — wheelchair routes, sensory-friendly hours, service animal policy, and site accessibility tools.",
};
const items = [
  {
    icon: "/images/icons/icon-wheelchair.jpg",
    title: "Wheelchair & mobility access",
    text: "The entire facility, including Mangrove Walk's boardwalk, is step-free. Wheelchairs and motorized scooters are available to borrow at Guest Services, first-come first-served.",
  },
  {
    icon: "/images/icons/icon-meditation.jpg",
    title: "Sensory-friendly hours",
    text: "The first hour after opening (9:00–10:00 AM) on the first Tuesday of every month runs with lowered lighting and sound in Deep Tank Theater and no scheduled announcements.",
  },
  {
    icon: "/images/icons/icon-servicedog.jpg",
    title: "Service animal policy",
    text: "Trained service animals are welcome throughout the facility. Due to the live-animal environment, we ask that service animals stay leashed and away from touch-pool edges.",
  },
  {
    icon: "/images/icons/icon-restroom.jpg",
    title: "Accessible restrooms & seating",
    text: "Accessible restrooms are located near Welcome Plaza, Reef Hall, and Deep Tank Theater. Bench seating is available in every zone.",
  },
  {
    icon: "/images/icons/icon-parking.jpg",
    title: "Accessible parking",
    text: "Accessible parking spaces are in the front row of the main lot, closest to the Welcome Plaza entrance ramp.",
  },
];
export default function AccessibilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Accessibility"
        title="Visit planning &amp; site accessibility"
        subtitle="Information for planning an accessible visit, plus the on-site tools available on this website."
        crumbLabel="Accessibility"
        image="/images/AccessibilityHero.jpg"
      />

      <div
        className="container section"
        style={{
          maxWidth: 800,
        }}
      >
        <div
          className="grid grid-2"
          style={{
            marginBottom: 48,
          }}
        >
          {items.map((item) => (
            <div
              key={item.title}
              className="card"
              style={{
                padding: 22,
              }}
            >
              <IconBadge
                src={item.icon}
                size={44}
                style={{ marginBottom: 8 }}
                aria-hidden="true"
              />
              <h3
                style={{
                  marginBottom: 6,
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  color: "var(--glass-text-dim)",
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div
          className="card"
          style={{
            padding: 26,
          }}
        >
          <h3
            style={{
              marginBottom: 8,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <IconBadge src="/images/icons/icon-wheelchair.jpg" size={22} />
            On-site accessibility toolbar
          </h3>
          <p
            style={{
              color: "var(--glass-text-dim)",
              marginBottom: 0,
            }}
          >
            Look for the accessibility button in the bottom-left corner of any
            page. It lets you increase text size and switch to a high-contrast
            color theme, and your preference is remembered on future visits to
            this site. We test the full site with screen readers and
            keyboard-only navigation, and target WCAG 2.1 AA compliance across
            all pages.
          </p>
        </div>

        <hr className="divider" />

        <p
          style={{
            color: "var(--glass-text-dim)",
          }}
        >
          Notice something that isn&apos;t accessible, or have a request for
          your visit? Contact Guest Services at{" "}
          <a
            href="tel:+15555550123"
            style={{
              color: "var(--coral-400)",
              fontWeight: 600,
            }}
          >
            (555) 555-0123
          </a>{" "}
          — we&apos;re happy to help plan ahead.
        </p>
      </div>
    </>
  );
}
