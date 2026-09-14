import { notFound } from "next/navigation";
import InquiryForm from "@/components/InquiryForm";
import DetailHero from "@/components/DetailHero";
import AmbientBackdrop from "@/components/AmbientBackdrop";
import IconBadge from "@/components/IconBadge";
import { findParty, parties } from "@/lib/data";
import styles from "./page.module.css";
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
  const groupSlugs = ["field-trips", "bring-the-zoo-to-you"];
  const variant = groupSlugs.includes(party.slug) ? "group" : undefined;
  return (
    <div className="container section">
      <AmbientBackdrop tone="reptile" />
      <div className={styles.grid}>
        <div>
          <DetailHero icon={party.icon} image={party.image} alt={party.name} />
          <h1 className={styles.title}>{party.name}</h1>
          <p className={`lede ${styles.description}`}>
            {party.description}
          </p>

          <h3 className={styles.subheading}>What&apos;s included</h3>
          <ul className={styles.includesList}>
            {party.includes.map((item) => (
              <li key={item} className={styles.includesItem}>
                <IconBadge
                  src="/images/icons/icon-check.jpg"
                  size={18}
                  className={styles.includesIcon}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className={`card-price ${styles.priceTag}`}>
            Starting at ${party.startingPrice}
          </p>
        </div>

        <div className={styles.sticky}>
          <InquiryForm itemName={party.name} variant={variant} />
        </div>
      </div>
    </div>
  );
}
