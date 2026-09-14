import { notFound } from "next/navigation";
import BookingWidget from "@/components/BookingWidget";
import DetailHero from "@/components/DetailHero";
import AmbientBackdrop from "@/components/AmbientBackdrop";
import IconBadge from "@/components/IconBadge";
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
      <AmbientBackdrop tone="ocean" />
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
                display: "inline-flex",
                alignItems: "center",
                gap: 5,
              }}
            >
              <IconBadge src="/images/icons/icon-pin.jpg" size={14} />
              {zone.name}
            </span>
          )}
          <h1
            style={{
              marginTop: 10,
              color: "var(--glass-text)",
            }}
          >
            {experience.name}
          </h1>
          <p className="lede" style={{ color: "var(--glass-text-dim)" }}>
            {experience.description}
          </p>

          <div
            style={{
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
              margin: "18px 0",
            }}
          >
            <span
              className="tag tag--coral"
              style={{ display: "inline-flex", alignItems: "center", gap: 5 }}
            >
              <IconBadge src="/images/icons/icon-stopwatch.jpg" size={14} />
              {experience.duration}
            </span>
            {experience.ageNote && (
              <span className="tag">{experience.ageNote}</span>
            )}
          </div>

          {experience.category === "encounter" && (
            <div
              className="card"
              style={{
                padding: 18,
                marginTop: 20,
              }}
            >
              <strong
                style={{
                  color: "var(--coral-400)",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <IconBadge src="/images/icons/icon-phone.jpg" size={18} />
                Scanned this from a station QR code?
              </strong>
              <p
                style={{
                  margin: "6px 0 0",
                  color: "var(--glass-text-dim)",
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
