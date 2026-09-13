import PageHero from "@/components/PageHero";
import StampHunt from "@/components/StampHunt";
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
        image="/images/StampCollectionHero.png"
      />

      <div className="container section">
        <div
          className="card"
          style={{
            padding: 18,
            marginBottom: 28,
            background: "var(--ocean-100)",
          }}
        >
          <strong
            style={{
              color: "var(--ocean-800)",
            }}
          >
            👀 This is a live demo
          </strong>
          <p
            style={{
              margin: "6px 0 0",
              color: "var(--ink-600)",
            }}
          >
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
