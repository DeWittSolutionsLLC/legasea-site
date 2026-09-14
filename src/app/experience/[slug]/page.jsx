import { notFound } from "next/navigation";
import BookingWidget from "@/components/BookingWidget";
import DetailHero from "@/components/DetailHero";
import AmbientBackdrop from "@/components/AmbientBackdrop";
import IconBadge from "@/components/IconBadge";
import { experiences, findExperience, findZone, getZoneTone } from "@/lib/data";
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
      <AmbientBackdrop tone={getZoneTone(experience.zone)} />
      <div className={styles.grid}>
        <div>
          <DetailHero
            icon={experience.icon}
            image={experience.image}
            video={experience.video}
            alt={experience.name}
          />
          {zone && (
            <span className={`tag ${styles.zoneTag}`}>
              <IconBadge src="/images/icons/icon-pin.jpg" size={14} />
              {zone.name}
            </span>
          )}
          <h1 className={styles.title}>{experience.name}</h1>
          <p className={`lede ${styles.description}`}>
            {experience.description}
          </p>

          <div className={styles.tagRow}>
            <span className={`tag tag--coral ${styles.durationTag}`}>
              <IconBadge src="/images/icons/icon-stopwatch.jpg" size={14} />
              {experience.duration}
            </span>
            {experience.ageNote && (
              <span className="tag">{experience.ageNote}</span>
            )}
          </div>

          {experience.category === "encounter" && (
            <div className={`card ${styles.qrCard}`}>
              <strong className={styles.qrHeading}>
                <IconBadge src="/images/icons/icon-phone.jpg" size={18} />
                Scanned this from a station QR code?
              </strong>
              <p className={styles.qrText}>
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
