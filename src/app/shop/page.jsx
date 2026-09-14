import PageHero from "@/components/PageHero";
import BentoGrid from "@/components/BentoGrid";
import FeaturedPanel from "@/components/FeaturedPanel";
import { shopProducts } from "@/lib/data";
import styles from "./page.module.css";
export const metadata = {
  title: "Shop",
  description:
    "Shop LegaSea merch and gift cards — browse and buy without leaving the site.",
};
export default function ShopPage() {
  const merch = shopProducts.filter((p) => p.type === "merch");
  const giftCards = shopProducts.filter((p) => p.type === "gift-card");
  return (
    <>
      <PageHero
        eyebrow="Shop"
        title="Merch &amp; gift cards, one checkout"
        subtitle="Everything here ships from the same cart as your tickets — merch and gift cards live together in one Shopify-powered shop."
        tone="coral"
        crumbLabel="Shop"
        image="/images/ShopHero.jpg"
      />

      <div className="container section">
        <h2 className={styles.sectionHeading}>Merch</h2>
        <BentoGrid
          items={merch.map((p, i) => ({
            href: `/shop/${p.slug}`,
            image: undefined,
            icon: p.icon,
            tag: p.slug === "vip-scan-shirt" ? "Members" : "Merch",
            title: p.name,
            price: `$${p.price}`,
            size:
              i === 0
                ? "large"
                : p.slug === "vip-scan-shirt"
                  ? "wide"
                  : "normal",
          }))}
        />

        <div className={styles.giftCardsSection}>
          <h2 className={styles.sectionHeading}>Gift Cards</h2>
          {giftCards.map((p) => (
            <FeaturedPanel
              key={p.slug}
              href={`/shop/${p.slug}`}
              icon={p.icon}
              tag={<span className="tag">Digital · Instant delivery</span>}
              title={p.name}
              description={p.description}
              footer={
                <span className={`card-price ${styles.giftCardPrice}`}>
                  From ${p.price}
                </span>
              }
            />
          ))}
        </div>
      </div>
    </>
  );
}
