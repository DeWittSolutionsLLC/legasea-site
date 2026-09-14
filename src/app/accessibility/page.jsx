import PageHero from "@/components/PageHero";
import IconBadge from "@/components/IconBadge";
import SensoryMap from "@/components/SensoryMap";
import styles from "./page.module.css";
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
    text: "The first hour after opening (9:00–10:00 AM) on the first Tuesday of every month runs with lowered lighting and sound in Deep Tank Theater and no scheduled announcements. Noise-reducing headphones and a visual schedule of the day are available to borrow at Guest Services any time, not just during sensory-friendly hours.",
  },
  {
    icon: "/images/icons/icon-chat.jpg",
    title: "ASL interpretation requests",
    text: "Request an ASL interpreter for your visit — available with at least 2 weeks' notice. Contact Guest Services to arrange interpretation for shows, keeper talks, or a guided tour.",
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

      <div className={`container section ${styles.pageContainer}`}>
        <div className={`grid grid-2 ${styles.itemGrid}`}>
          {items.map((item) => (
            <div key={item.title} className={`card ${styles.itemCard}`}>
              <IconBadge
                src={item.icon}
                size={44}
                className={styles.itemIcon}
                aria-hidden="true"
              />
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemText}>{item.text}</p>
            </div>
          ))}
        </div>

        <div className={styles.sensorySection}>
          <h2 className={styles.sensoryHeading}>Sensory map</h2>
          <p className={styles.sensoryIntro}>
            Every zone below is rated for sound, light, and crowding, plus
            whether it has a hands-on touch element — use it to plan a route
            around your comfort level before you arrive.
          </p>
          <SensoryMap />
        </div>

        <div className={`card ${styles.toolbarCard}`}>
          <h3 className={styles.toolbarHeading}>
            <IconBadge src="/images/icons/icon-wheelchair.jpg" size={22} />
            On-site accessibility toolbar
          </h3>
          <p className={styles.toolbarText}>
            Look for the accessibility button in the bottom-left corner of any
            page. It lets you increase text size and switch to a high-contrast
            color theme, and your preference is remembered on future visits to
            this site. We test the full site with screen readers and
            keyboard-only navigation, and target WCAG 2.1 AA compliance across
            all pages.
          </p>
        </div>

        <hr className="divider" />

        <p className={styles.contactText}>
          Notice something that isn&apos;t accessible, or have a request for
          your visit? Contact Guest Services at{" "}
          <a href="tel:+15555550123" className={styles.contactLink}>
            (555) 555-0123
          </a>{" "}
          — we&apos;re happy to help plan ahead.
        </p>
      </div>
    </>
  );
}
