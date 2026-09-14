import Link from "next/link";
import styles from "./CompactList.module.css";
import { IconArrowRight } from "./icons";
export default function CompactList({ items }) {
  return (
    <div className={styles.list}>
      {items.map((item) => (
        <div key={item.href} className={styles.row}>
          <Link
            href={item.href}
            className={styles.media}
            aria-label={item.title}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.image ?? item.icon}
              alt={item.title}
              loading="lazy"
            />
          </Link>
          <Link href={item.href} className={styles.content}>
            <p className={styles.title}>{item.title}</p>
            <p className={styles.meta}>{item.meta}</p>
          </Link>
          <div className={styles.trailing}>
            {item.trailing}
            <IconArrowRight size={14} />
          </div>
        </div>
      ))}
    </div>
  );
}
