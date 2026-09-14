import { notFound } from "next/navigation";
import ShopProductActions from "@/components/ShopProductActions";
import AmbientBackdrop from "@/components/AmbientBackdrop";
import { findProduct, shopProducts } from "@/lib/data";
import styles from "@/app/experience/[slug]/page.module.css";
export function generateStaticParams() {
  return shopProducts.map((p) => ({
    slug: p.slug,
  }));
}
export async function generateMetadata(props) {
  const { slug } = await props.params;
  const product = findProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
  };
}
export default async function ShopProductPage(props) {
  const { slug } = await props.params;
  const product = findProduct(slug);
  if (!product) notFound();
  return (
    <div className="container section">
      <AmbientBackdrop tone="coral" />
      <div className={styles.grid}>
        <div>
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "4 / 3",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              boxShadow: "var(--shadow-md)",
              marginBottom: 18,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.icon}
              alt={product.name}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <span className="tag">
            {product.type === "gift-card" ? "Gift Card" : "Merch"}
          </span>
          <h1
            style={{
              marginTop: 10,
              color: "var(--glass-text)",
            }}
          >
            {product.name}
          </h1>
          <p className="lede" style={{ color: "var(--glass-text-dim)" }}>
            {product.description}
          </p>
        </div>
        <div className={styles.sticky}>
          <ShopProductActions product={product} />
        </div>
      </div>
    </div>
  );
}
