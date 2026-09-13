import Link from "next/link";
import styles from "./StickyBookCta.module.css";
export default function StickyBookCta() {
  return (
    <div className={styles.bar}>
      <span className={styles.text}>
        <strong>Plan today&apos;s visit</strong>
        General admission from $28
      </span>
      <Link href="/visit" className="btn btn-primary btn-sm">
        Book Now
      </Link>
    </div>
  );
}
