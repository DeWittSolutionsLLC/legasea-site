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
    <Link href={href} className={styles.panel}>
      <div className={styles.media}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image ?? icon} alt="" />
      </div>
      <div className={styles.body}>
        {tag}
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.footer}>{footer}</div>
      </div>
    </Link>
  );
}
