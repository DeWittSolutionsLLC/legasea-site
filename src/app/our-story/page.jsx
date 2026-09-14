import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import styles from "./page.module.css";
export const metadata = {
  title: "Our Story",
  description:
    "How The Reptarium and LegaSea Aquarium came to be, and how Brian Barczyk's vision lives on today.",
};
const beginnings = [
  {
    label: "Building One",
    title: "The Reptarium",
    text: "Renowned reptile educator and YouTuber Brian Barczyk built The Reptarium in Utica, Michigan — a hands-on reptile zoo that introduced thousands of guests to the animals he loved.",
  },
  {
    label: "Building Two",
    title: "LegaSea Aquarium",
    text: "Just across the street, the 30,000-square-foot LegaSea Aquarium opened as the next chapter of Brian's vision — a $6 million investment that grew our home into Michigan's newest aquarium & zoo, blending marine life with the reptile and mammal exhibits guests already loved.",
  },
];

const sponsorGroups = [
  {
    heading: "In-Kind Sponsors",
    names: [
      "Vision Products",
      "New Pig",
      "Zoomed",
      "Reef Breeders",
      "Jets Pizza",
      "Zara Shawarma Grill",
      "Aquaterra Exotic Pets",
      "Daenerys Mother of Spiders",
    ],
  },
  {
    heading: "Exhibit Sponsors",
    names: [
      "Katherine Bergeron",
      "Robert Herman",
      "MorphMarket",
      "Dubia Roaches",
      "Cold Blooded Cafe",
      "Detroit Sausage",
      "Dairy Queen",
      "Toad Ranch Cages",
      "Gatorland",
      "Jaws Florida",
      "Tarantula Cribs",
      "Garden State Tortoise",
      "Hong Kong Cafe",
      "Citizens Bank",
      "Charles Dyer IV",
      "Scaled Up Expos",
      "Wickens Wicked Reptiles",
    ],
  },
];

export default function OurStoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="How LegaSea started"
        subtitle="Two connected buildings, one shared mission — Michigan's newest aquarium & zoo, built on Brian Barczyk's vision for hands-on wildlife education."
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

        <h2 className={styles.sectionHeading}>How We Began</h2>
        <div className={styles.milestoneList}>
          {beginnings.map((b) => (
            <div className={`card ${styles.milestoneCard}`} key={b.title}>
              <div className={styles.milestoneYear}>{b.label}</div>
              <div>
                <h3 className={styles.milestoneTitle}>{b.title}</h3>
                <p className={styles.milestoneText}>{b.text}</p>
              </div>
            </div>
          ))}
        </div>

        <hr className="divider" />

        <div className={`card ${styles.legacyCard}`}>
          <span className="tag tag--coral">Brian&rsquo;s Legacy</span>
          <h2 className={styles.legacyHeading}>Carrying his vision forward</h2>
          <p className={styles.legacyText}>
            Brian Barczyk was the visionary behind both The Reptarium and
            LegaSea Aquarium — a lifelong reptile educator and YouTuber who
            dedicated his career to bringing people closer to the animal
            world. Brian passed away following a battle with stage 4
            pancreatic cancer, but his mission didn&rsquo;t end with him:
            LegaSea Aquarium stands today as a continuation of his vision, and
            his legacy lives on in every visit and every animal encounter
            here. Our{" "}
            <span className={styles.legacyHighlight}>#OneMillionWrists</span>{" "}
            campaign honors his memory with $6 wristbands — ask at Guest
            Services to grab one and be part of the tribute.
          </p>
        </div>

        <hr className="divider" />

        <div className={`card ${styles.sponsorCard}`}>
          <h2 className={styles.sectionHeading}>Our Sponsors</h2>
          <p className={styles.sponsorLede}>
            LegaSea Aquarium&rsquo;s building was made possible with support
            from these generous sponsors and partners.
          </p>
          {sponsorGroups.map((group) => (
            <div className={styles.sponsorGroup} key={group.heading}>
              <h3 className={styles.sponsorGroupHeading}>{group.heading}</h3>
              <ul className={styles.sponsorList}>
                {group.names.map((name) => (
                  <li key={name}>
                    <span className="tag">{name}</span>
                  </li>
                ))}
              </ul>
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
