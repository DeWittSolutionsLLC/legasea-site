import { notFound } from "next/navigation";
import BookingWidget from "@/components/BookingWidget";
import DetailHero from "@/components/DetailHero";
import { experiences, findExperience, findZone } from "@/lib/data";
import styles from "./page.module.css";
export function generateStaticParams() {
  return experiences.map((e) => ({
    slug: e.slug,
  }));
}
export async function generateMetadata(props) {
  const { slug } = await props.params;
  const experience = findExperience(slug);
  if (!experience) return {};
  return {
    title: experience.name,
    description: experience.summary,
  };
}
export default async function ExperiencePage(props) {
  const { slug } = await props.params;
  const experience = findExperience(slug);
  if (!experience) notFound();
  const zone = findZone(experience.zone);
  return (
    <div className="container section">
      <div className={styles.grid}>
        <div>
          <DetailHero
            icon={experience.icon}
            image={experience.image}
            video={experience.video}
            alt={experience.name}
          />
          {zone && (
            <span
              className="tag"
              style={{
                marginBottom: 10,
              }}
            >
              📍 {zone.name}
            </span>
          )}
          <h1
            style={{
              marginTop: 10,
            }}
          >
            {experience.name}
          </h1>
          <p className="lede">{experience.description}</p>

          <div
            style={{
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
              margin: "18px 0",
            }}
          >
            <span className="tag tag--coral">⏱ {experience.duration}</span>
            {experience.ageNote && (
              <span className="tag">{experience.ageNote}</span>
            )}
          </div>

          {experience.category === "encounter" && (
            <div
              className="card"
              style={{
                padding: 18,
                background: "var(--ocean-100)",
                marginTop: 20,
              }}
            >
              <strong
                style={{
                  color: "var(--ocean-800)",
                }}
              >
                📱 Scanned this from a station QR code?
              </strong>
              <p
                style={{
                  margin: "6px 0 0",
                  color: "var(--ink-600)",
                }}
              >
                You&apos;re in the right place — pick a time on the right and
                you&apos;ll get an instant confirmation.
              </p>
            </div>
          )}
        </div>

        <div className={styles.sticky}>
          <BookingWidget experience={experience} />
        </div>
      </div>
    </div>
  );
}
