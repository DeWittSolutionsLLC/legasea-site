import Link from "next/link";
import styles from "./BentoGrid.module.css";
export default function BentoGrid({ items }) {
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <Link
          href={item.href}
          key={item.href}
          className={`${styles.tile} ${item.size === "large" ? styles.large : ""} ${item.size === "wide" ? styles.wide : ""}`}
        >
          {item.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={item.image}
              alt=""
              className={styles.tileImg}
              loading="lazy"
            />
          ) : (
            <div className={styles.tileIcon} aria-hidden="true">
              {item.icon}
            </div>
          )}
          <div className={styles.tileOverlay}>
            <span className={styles.tileTag}>{item.tag}</span>
            <p className={styles.tileTitle}>{item.title}</p>
            <span className={styles.tilePrice}>{item.price}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
