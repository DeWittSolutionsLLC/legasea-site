import { notFound } from "next/navigation";
import InquiryForm from "@/components/InquiryForm";
import DetailHero from "@/components/DetailHero";
import AmbientBackdrop from "@/components/AmbientBackdrop";
import IconBadge from "@/components/IconBadge";
import { findParty, parties } from "@/lib/data";
import styles from "@/app/experience/[slug]/page.module.css";
export function generateStaticParams() {
  return parties.map((p) => ({
    slug: p.slug,
  }));
}
export async function generateMetadata(props) {
  const { slug } = await props.params;
  const party = findParty(slug);
  if (!party) return {};
  return {
    title: party.name,
    description: party.summary,
  };
}
export default async function PartyDetailPage(props) {
  const { slug } = await props.params;
  const party = findParty(slug);
  if (!party) notFound();
  return (
    <div className="container section">
      <AmbientBackdrop tone="reptile" />
      <div className={styles.grid}>
        <div>
          <DetailHero icon={party.icon} image={party.image} alt={party.name} />
          <h1 style={{ color: "var(--glass-text)" }}>{party.name}</h1>
          <p className="lede" style={{ color: "var(--glass-text-dim)" }}>
            {party.description}
          </p>

          <h3 style={{ color: "var(--glass-text)" }}>What&apos;s included</h3>
          <ul
            style={{
              display: "grid",
              gap: 10,
            }}
          >
            {party.includes.map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  gap: 10,
                  alignItems: "flex-start",
                  color: "var(--glass-text-dim)",
                }}
              >
                <IconBadge
                  src="/images/icons/icon-check.jpg"
                  size={18}
                  style={{ flexShrink: 0 }}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p
            className="card-price"
            style={{
              fontSize: "1.4rem",
              marginTop: 20,
              color: "var(--coral-400)",
            }}
          >
            Starting at ${party.startingPrice}
          </p>
        </div>

        <div className={styles.sticky}>
          <InquiryForm itemName={party.name} />
        </div>
      </div>
    </div>
  );
}
