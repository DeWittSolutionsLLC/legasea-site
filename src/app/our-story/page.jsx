import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import styles from "./page.module.css";
export const metadata = {
  title: "Our Story",
  description:
    "How LegaSea Aquarium & The Reptarium started, and how it's grown.",
};
const milestones = [
  {
    year: "2011",
    title: "A backyard reptile collection",
    text: "It started small — a handful of rescued reptiles and a lot of curious neighborhood kids stopping by to see them.",
  },
  {
    year: "2014",
    title: "The Reptarium opens",
    text: "Our first public building opened its doors, built around rescued and rehomed reptiles that needed a permanent home.",
  },
  {
    year: "2018",
    title: "LegaSea Aquarium joins the family",
    text: "A marine wing was added, starting with Reef Hall and growing into what's now Deep Tank Theater.",
  },
  {
    year: "2023",
    title: "Mangrove Walk & conservation partnerships",
    text: "We opened the outdoor Mangrove Walk and began formal conservation partnerships with regional reef and wetland restoration groups.",
  },
  {
    year: "Today",
    title: "Still animal-rescue-first",
    text: "Every new resident still starts the same way it did in 2011 — with a rescue story worth telling.",
  },
];
export default function OurStoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="How LegaSea started"
        subtitle="From a backyard reptile collection to two connected halls of marine and reptile life — every animal here has a rescue story."
        tone="reptile"
        crumbLabel="Our Story"
      />

      <div className={`container section ${styles.pageContainer}`}>
        <div className={`card ${styles.logoCard}`}>
          <Image
            src="/images/LegaseaLogoFull.webp"
            alt="LegaSea Aquarium & The Reptarium"
            width={1024}
            height={727}
            className={styles.logoImage}
          />
        </div>

        <div className={styles.milestoneList}>
          {milestones.map((m) => (
            <div className={`card ${styles.milestoneCard}`} key={m.year}>
              <div className={styles.milestoneYear}>{m.year}</div>
              <div>
                <h3 className={styles.milestoneTitle}>{m.title}</h3>
                <p className={styles.milestoneText}>{m.text}</p>
              </div>
            </div>
          ))}
        </div>

        <hr className="divider" />

        <div className={styles.ctaSection}>
          <h2 className={styles.ctaHeading}>
            Come meet the animals behind the story
          </h2>
          <p className={`lede ${styles.ctaLede}`}>
            Every rescue story continues on-site — ask any keeper about the
            animal in front of you.
          </p>
          <Link href="/visit" className="btn btn-primary">
            Plan Your Visit
          </Link>
        </div>
      </div>
    </>
  );
}
