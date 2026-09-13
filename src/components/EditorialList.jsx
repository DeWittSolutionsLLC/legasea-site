import Link from "next/link";
import styles from "./EditorialList.module.css";
import { IconArrowRight } from "./icons";
export default function EditorialList({ items }) {
  return (
    <div className={styles.list}>
      {items.map((item) => (
        <Link href={item.href} key={item.href} className={styles.row}>
          <div className={styles.media}>
            {item.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={item.image} alt="" loading="lazy" />
            ) : (
              <div className={styles.mediaIcon} aria-hidden="true">
                {item.icon}
              </div>
            )}
          </div>
          <div className={styles.content}>
            {item.tag}
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
            <div className={styles.footer}>{item.footer}</div>
            <span
              className={styles.link}
              style={{
                marginTop: 14,
              }}
            >
              {item.linkLabel ?? "View details"}
              <IconArrowRight size={14} className={styles.linkArrow} />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
