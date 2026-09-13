import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
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

      <div
        className="container section"
        style={{
          maxWidth: 800,
        }}
      >
        <div
          className="card"
          style={{
            padding: "32px 20px",
            marginBottom: 40,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image
            src="/images/LegaseaLogoFull.webp"
            alt="LegaSea Aquarium & The Reptarium"
            width={1024}
            height={727}
            style={{
              height: "auto",
              width: "min(360px, 100%)",
            }}
          />
        </div>

        <div
          
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 28,
          }}
        >
          {milestones.map((m) => (
            <div
              className="card"
              key={m.year}
              style={{
                display: "flex",
                gap: 20,
                padding: "22px 24px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--coral-400)",
                  fontWeight: 700,
                  minWidth: 70,
                  fontSize: "1.05rem",
                }}
              >
                {m.year}
              </div>
              <div>
                <h3
                  style={{
                    marginBottom: 4,
                    color: "var(--glass-text)",
                  }}
                >
                  {m.title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    color: "var(--glass-text-dim)",
                  }}
                >
                  {m.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <hr className="divider" />

        <div
          style={{
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "var(--glass-text)",
            }}
          >
            Come meet the animals behind the story
          </h2>
          <p
            className="lede"
            style={{
              margin: "0 auto 20px",
              color: "var(--glass-text-dim)",
            }}
          >
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
