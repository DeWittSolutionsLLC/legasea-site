import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
import NewsletterForm from "./NewsletterForm";
const socials = [
  {
    label: "Instagram",
    icon: "📸",
    href: "https://instagram.com",
  },
  {
    label: "TikTok",
    icon: "🎵",
    href: "https://tiktok.com",
  },
  {
    label: "YouTube",
    icon: "▶️",
    href: "https://youtube.com",
  },
  {
    label: "Facebook",
    icon: "👍",
    href: "https://facebook.com",
  },
];
const trustBadges = [
  {
    icon: "⭐",
    title: "4.8 / 5 average rating",
    subtitle: "1,200+ guest reviews",
  },
  {
    icon: "🏅",
    title: "USDA licensed facility",
    subtitle: "Animal exhibitor",
  },
  {
    icon: "🌱",
    title: "Family-owned since 2011",
    subtitle: "Animal-rescue-first",
  },
  {
    icon: "🤝",
    title: "10,000+ guests a year",
    subtitle: "And counting",
  },
];
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div>
          <div className={styles.brand}>
            <Image
              src="/LegaseaIcon.webp"
              alt=""
              width={155}
              height={110}
              className={styles.brandMark}
            />
            LegaSea
          </div>
          <p className={styles.tagline}>
            LegaSea Aquarium &amp; The Reptarium — an interactive marine and
            reptile experience for the whole family.
          </p>
          <div className={styles.socialRow}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className={styles.socialBtn}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span aria-hidden="true">{s.icon}</span>
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className={styles.heading}>Plan a Visit</div>
          <ul className={styles.linkList}>
            <li>
              <Link href="/visit">Tickets &amp; Tours</Link>
            </li>
            <li>
              <Link href="/shows">Show Schedule</Link>
            </li>
            <li>
              <Link href="/map">Zone Map</Link>
            </li>
            <li>
              <Link href="/accessibility">Accessibility</Link>
            </li>
          </ul>
        </div>

        <div>
          <div className={styles.heading}>Explore</div>
          <ul className={styles.linkList}>
            <li>
              <Link href="/our-story">Our Story</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/connect">Connect</Link>
            </li>
            <li>
              <Link href="/vip">VIP &amp; Membership</Link>
            </li>
          </ul>
        </div>

        <div>
          <div className={styles.heading}>Get Our Newsletter</div>
          <NewsletterForm compact />
        </div>
      </div>

      <div className={styles.trustRow}>
        <div className={styles.trustInner}>
          {trustBadges.map((b) => (
            <div className={styles.trustBadge} key={b.title}>
              <span className={styles.trustIcon} aria-hidden="true">
                {b.icon}
              </span>
              <span className={styles.trustText}>
                <strong>{b.title}</strong>
                <span>{b.subtitle}</span>
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <span>
            © {new Date().getFullYear()} LegaSea Aquarium &amp; The Reptarium.
          </span>
          <span>
            1 Reef Hall Way · Open daily 9AM–6PM ·{" "}
            <a href="tel:+15555550123">(555) 555-0123</a>
          </span>
        </div>
        <div
          className={styles.bottomInner}
          style={{
            marginTop: 6,
            fontSize: "0.72rem",
          }}
        >
          <span>
            Rainforest photo by eflon and rainbow eucalyptus photo by Paxson
            Woelber, licensed under{" "}
            <a
              href="https://creativecommons.org/licenses/by/2.0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CC BY 2.0
            </a>{" "}
            /{" "}
            <a
              href="https://creativecommons.org/licenses/by-sa/4.0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CC BY-SA 4.0
            </a>
            . Palm silhouette photo by Prakash G, licensed under CC BY-SA 4.0
            (all cropped/edited).
          </span>
        </div>
      </div>
    </footer>
  );
}
