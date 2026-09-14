import PageHero from "@/components/PageHero";
import NewsletterForm from "@/components/NewsletterForm";
import IconBadge from "@/components/IconBadge";
import {
  IconInstagram,
  IconTikTok,
  IconYouTube,
  IconFacebook,
} from "@/components/icons";
import styles from "./page.module.css";
export const metadata = {
  title: "Connect",
  description:
    "Every LegaSea social channel, blog, and newsletter in one place.",
};
const channels = [
  {
    label: "Instagram",
    icon: IconInstagram,
    handle: "@legaseaaquarium",
    href: "https://instagram.com/legaseaaquarium",
  },
  {
    label: "TikTok",
    icon: IconTikTok,
    handle: "@legaseaaquarium",
    href: "https://tiktok.com",
  },
  {
    label: "YouTube",
    icon: IconYouTube,
    handle: "LegaSea Aquarium & Reptarium",
    href: "https://www.youtube.com/brianbarczyk",
  },
  {
    label: "Facebook",
    icon: IconFacebook,
    handle: "LegaSea Aquarium & The Reptarium",
    href: "https://www.facebook.com/legaseaaquarium",
  },
  {
    label: "Blog",
    icon: "/images/icons/icon-notepad.jpg",
    handle: "Animal spotlights & updates",
    href: "/blog",
  },
];
export default function ConnectPage() {
  return (
    <>
      <PageHero
        eyebrow="Follow Along"
        title="Connect"
        subtitle="Stay wild. Stay connected."
        crumbLabel="Connect"
        image="/images/ConnectHero.png"
      >
        <p className={styles.heroLead}>
          Follow LegaSea for animal encounters, behind-the-scenes moments, new
          arrivals, events, and everything happening around the aquarium and
          zoo.
        </p>

        <div className={styles.socialRow}>
          {channels
            .filter((c) => c.href.startsWith("http"))
            .map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={c.label}
                className={styles.socialIcon}
              >
                <c.icon size={20} />
              </a>
            ))}
        </div>

        <p className={styles.hashtagLine}>
          #LegaSeaAquarium &nbsp; #TheReptarium &nbsp; #GetCloserToWild
        </p>
      </PageHero>

      <div
        className={`container section ${styles.pageContainer}`}
      >
        <div className={styles.channelList}>
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={
                c.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className={`card ${styles.channelCard}`}
            >
              <span
                className={styles.channelIcon}
                aria-hidden="true"
              >
                {typeof c.icon === "string" ? (
                  <IconBadge src={c.icon} size={26} />
                ) : (
                  <c.icon size={26} />
                )}
              </span>
              <span className={styles.channelInfo}>
                <strong className={styles.channelLabel}>
                  {c.label}
                </strong>
                <span className={styles.channelHandle}>
                  {c.handle}
                </span>
              </span>
              <span
                aria-hidden="true"
                className={styles.channelArrow}
              >
                →
              </span>
            </a>
          ))}
        </div>

        <div
          className={`card ${styles.newsletterCard}`}
        >
          <h3 className={styles.newsletterTitle}>
            Subscribe to the newsletter
          </h3>
          <p className={styles.newsletterText}>
            Animal spotlights, conservation updates, and event announcements.
          </p>
          <div className={styles.newsletterFormRow}>
            <NewsletterForm />
          </div>
        </div>
      </div>
    </>
  );
}
