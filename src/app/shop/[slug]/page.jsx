import { notFound } from "next/navigation";
import ShopProductActions from "@/components/ShopProductActions";
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
      <div className={styles.grid}>
        <div>
          <div
            style={{
              fontSize: "3.4rem",
              marginBottom: 10,
            }}
            aria-hidden="true"
          >
            {product.icon}
          </div>
          <span className="tag">
            {product.type === "gift-card" ? "Gift Card" : "Merch"}
          </span>
          <h1
            style={{
              marginTop: 10,
            }}
          >
            {product.name}
          </h1>
          <p className="lede">{product.description}</p>
        </div>
        <div className={styles.sticky}>
          <ShopProductActions product={product} />
        </div>
      </div>
    </div>
  );
}
