"use client";

import { useState } from "react";
import styles from "@/components/BookingWidget.module.css";
export default function ShopProductActions({ product }) {
  const [variant, setVariant] = useState(product.variants?.[0] ?? "");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  return (
    <div className={styles.widget}>
      <div className={styles.priceRow}>
        <span className={styles.price}>${product.price}</span>
        {product.type === "gift-card" && (
          <span className={styles.priceUnit}>starting value</span>
        )}
      </div>

      {product.variants && product.variants.length > 0 && (
        <div
          style={{
            marginBottom: 18,
          }}
        >
          <span className={styles.label}>
            {product.type === "gift-card" ? "Value" : "Size"}
          </span>
          <div className={styles.slotGrid}>
            {product.variants.map((v) => (
              <button
                key={v}
                type="button"
                className={styles.slotBtn}
                data-selected={variant === v}
                onClick={() => setVariant(v)}
              >
                {v}
              </button>
            ))}
          </div>
        </div>
      )}

      <span className={styles.label}>Quantity</span>
      <div className={styles.qtyRow}>
        <button
          type="button"
          className={styles.qtyBtn}
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          aria-label="Decrease quantity"
        >
          −
        </button>
        <strong>{quantity}</strong>
        <button
          type="button"
          className={styles.qtyBtn}
          onClick={() => setQuantity((q) => Math.min(10, q + 1))}
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>

      <button
        type="button"
        className="btn btn-primary btn-block"
        onClick={() => setAdded(true)}
      >
        {added ? "Added to cart ✓" : "Add to Cart"}
      </button>

      {added && (
        <p
          className="form-note"
          style={{
            marginTop: 10,
            textAlign: "center",
          }}
        >
          In production, this hands off to Shopify&apos;s cart/checkout — no
          separate Square checkout needed.
        </p>
      )}
    </div>
  );
}
