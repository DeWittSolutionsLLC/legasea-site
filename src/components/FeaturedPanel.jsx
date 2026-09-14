import Link from "next/link";
import styles from "./FeaturedPanel.module.css";
export default function FeaturedPanel({
  href,
  image,
  icon,
  tag,
  title,
  description,
  footer,
}) {
  return (
    <div className={styles.panel}>
      <Link href={href} className={styles.media} aria-label={title}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image ?? icon} alt={title} loading="lazy" />
      </Link>
      <div className={styles.body}>
        <Link href={href} style={{ display: "contents" }}>
          {tag}
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </Link>
        <div className={styles.footer}>{footer}</div>
      </div>
    </div>
  );
}
