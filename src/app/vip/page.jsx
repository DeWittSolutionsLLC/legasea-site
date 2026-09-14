import Link from "next/link";
import PageHero from "@/components/PageHero";
import MemberCard from "@/components/MemberCard";
import GeofenceDemo from "@/components/GeofenceDemo";
import IconBadge from "@/components/IconBadge";
import styles from "@/app/experience/[slug]/page.module.css";
export const metadata = {
  title: "VIP & Membership",
  description:
    "LegaSea VIP membership perks — fast-pass lines, a scannable member card, and tracked visit rewards.",
};
const tiers = [
  {
    name: "Reef Pass",
    price: "$89/yr",
    perks: [
      "Unlimited general admission",
      "10% off shop purchases",
      "Member-only event invites",
    ],
  },
  {
    name: "Reptarium VIP",
    price: "$179/yr",
    perks: [
      "Everything in Reef Pass",
      "Fast-pass line at every encounter",
      "1 free guided tour/quarter",
      "VIP Scan Shirt included",
    ],
  },
  {
    name: "Founders Circle",
    price: "$349/yr",
    perks: [
      "Everything in Reptarium VIP",
      "4 guest passes/year",
      "Behind-the-scenes annual visit",
      "Name on the donor wall",
    ],
  },
];
export default function VipPage() {
  return (
    <>
      <PageHero
        eyebrow="VIP & Membership"
        title="Membership that gets scanned, not just shown"
        subtitle="Every membership tier includes a scannable member card — flash it at any station for fast-pass access and tracked perks."
        tone="coral"
        crumbLabel="VIP & Membership"
        image="/images/VipHero.jpg"
      />

      <div className="container section">
        <div
          className="grid grid-3"
          style={{
            marginBottom: 48,
          }}
        >
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="card"
              style={{
                padding: 24,
              }}
            >
              <span className="tag tag--coral">{tier.price}</span>
              <h3
                style={{
                  margin: "10px 0 14px",
                }}
              >
                {tier.name}
              </h3>
              <ul
                style={{
                  display: "grid",
                  gap: 8,
                  marginBottom: 18,
                }}
              >
                {tier.perks.map((perk) => (
                  <li
                    key={perk}
                    style={{
                      display: "flex",
                      gap: 8,
                      fontSize: "0.92rem",
                    }}
                  >
                    <IconBadge
                      src="/images/icons/icon-check.jpg"
                      size={18}
                      style={{ flexShrink: 0 }}
                    />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/shop/vip-scan-shirt"
                className="btn btn-outline btn-outline--glass btn-block"
              >
                See VIP Scan Shirt
              </Link>
            </div>
          ))}
        </div>

        <div className={styles.grid}>
          <div>
            <h2 style={{ color: "var(--glass-text)" }}>
              Your digital member card
            </h2>
            <p className="lede" style={{ color: "var(--glass-text-dim)" }}>
              Membership is tracked automatically — this preview shows the card
              guests would see in their account, plus how a station scan logs
              against it.
            </p>
            <MemberCard />
          </div>
          <div>
            <h2 style={{ color: "var(--glass-text)" }}>Nearby offers</h2>
            <p className="lede" style={{ color: "var(--glass-text-dim)" }}>
              Geo-fencing (Phase 4) triggers offers automatically as members
              approach the property.
            </p>
            <GeofenceDemo />
          </div>
        </div>
      </div>
    </>
  );
}
