import PageHero from "@/components/PageHero";
import StampHunt from "@/components/StampHunt";
import styles from "./page.module.css";
export const metadata = {
  title: "Digital Stamp Hunt",
  description:
    "Find five hidden stickers around LegaSea, scan each one, and redeem a physical reward at guest services.",
};
export default function StampsPage() {
  return (
    <>
      <PageHero
        eyebrow="Scavenger Hunt"
        title="Find every hidden sticker"
        subtitle="Five animal-shaped stickers are hidden around the facility. Scan each with your phone as you find it — collect all five to unlock a reward at guest services."
        tone="reptile"
        crumbLabel="Stamp Hunt"
        image="/images/StampCollectionHero.jpg"
      />

      <div className="container section">
        <div
          className={`card ${styles.demoNotice}`}
        >
          <strong className={styles.demoNoticeLabel}>
            This is a live demo
          </strong>
          <p className={styles.demoNoticeText}>
            On-site, each sticker has a real QR code — scanning it logs the
            stamp to your account automatically. Here, use &quot;Simulate
            Scan&quot; to preview the flow.
          </p>
        </div>

        <StampHunt />
      </div>
    </>
  );
}
