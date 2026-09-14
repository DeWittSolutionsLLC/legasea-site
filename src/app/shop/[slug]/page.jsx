import { notFound } from "next/navigation";
import ShopProductActions from "@/components/ShopProductActions";
import AmbientBackdrop from "@/components/AmbientBackdrop";
import { findProduct, shopProducts } from "@/lib/data";
import styles from "./page.module.css";
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
          <div className={styles.heroMedia}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.icon}
              alt={product.name}
              className={styles.heroImage}
            />
          </div>
          <span className="tag">
            {product.type === "gift-card" ? "Gift Card" : "Merch"}
          </span>
          <h1 className={styles.title}>{product.name}</h1>
          <p className={`lede ${styles.description}`}>
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
