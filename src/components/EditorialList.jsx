import Link from "next/link";
import styles from "./EditorialList.module.css";
import { IconArrowRight } from "./icons";
export default function EditorialList({ items }) {
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
          <div className={styles.content}>
            <Link href={item.href} style={{ display: "contents" }}>
              {item.tag}
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </Link>
            <div className={styles.footer}>{item.footer}</div>
            <Link
              href={item.href}
              className={styles.link}
              style={{
                marginTop: 14,
              }}
            >
              {item.linkLabel ?? "View details"}
              <IconArrowRight size={14} className={styles.linkArrow} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
