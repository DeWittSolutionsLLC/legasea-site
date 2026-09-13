import Link from "next/link";
import styles from "./CompactList.module.css";
import { IconArrowRight } from "./icons";
export default function CompactList({ items }) {
  return (
    <div className={styles.list}>
      {items.map((item) => (
        <Link href={item.href} key={item.href} className={styles.row}>
          <div className={styles.media}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.image ?? item.icon} alt="" loading="lazy" />
          </div>
          <div className={styles.content}>
            <p className={styles.title}>{item.title}</p>
            <p className={styles.meta}>{item.meta}</p>
          </div>
          <div className={styles.trailing}>
            {item.trailing}
            <IconArrowRight size={14} />
          </div>
        </Link>
      ))}
    </div>
  );
}
