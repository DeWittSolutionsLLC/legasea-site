import Link from "next/link";
import PageHero from "@/components/PageHero";
import MemberCard from "@/components/MemberCard";
import WalletPass from "@/components/WalletPass";
import GeofenceDemo from "@/components/GeofenceDemo";
import IconBadge from "@/components/IconBadge";
import styles from "./page.module.css";
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
      "LegaSea logo tee included",
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
        <div className={`grid grid-3 ${styles.tiersGrid}`}>
          {tiers.map((tier) => (
            <div key={tier.name} className={`card ${styles.tierCard}`}>
              <span className="tag tag--coral">{tier.price}</span>
              <h3 className={styles.tierName}>{tier.name}</h3>
              <ul className={styles.perkList}>
                {tier.perks.map((perk) => (
                  <li key={perk} className={styles.perkItem}>
                    <IconBadge
                      src="/images/icons/icon-check.jpg"
                      size={18}
                      className={styles.perkIcon}
                    />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/shop/reptarium-logo-tee"
                className="btn btn-outline btn-outline--glass btn-block"
              >
                See LegaSea Logo Tee
              </Link>
            </div>
          ))}
        </div>

        <div className={styles.grid}>
          <div>
            <h2 className={styles.sectionTitle}>Your digital member card</h2>
            <p className={`lede ${styles.sectionLede}`}>
              Membership is tracked automatically — this preview shows the card
              guests would see in their account, plus how a station scan logs
              against it.
            </p>
            <MemberCard />
          </div>
          <div>
            <h2 className={styles.sectionTitle}>Nearby offers</h2>
            <p className={`lede ${styles.sectionLede}`}>
              Geo-fencing (Phase 4) triggers offers automatically as members
              approach the property.
            </p>
            <GeofenceDemo />
          </div>
        </div>

        <h2 className={styles.sectionTitle} style={{ marginTop: 44 }}>
          Add your pass to your phone&apos;s wallet
        </h2>
        <p className={`lede ${styles.sectionLede}`}>
          Skip pulling up the app — flash your phone&apos;s lock screen at any
          station scan point instead.
        </p>
        <WalletPass tiers={tiers} />
      </div>
    </>
  );
}
