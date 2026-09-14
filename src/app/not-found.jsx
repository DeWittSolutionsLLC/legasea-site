import Link from "next/link";
import IconBadge from "@/components/IconBadge";
import styles from "./not-found.module.css";
export default function NotFound() {
  return (
    <div className={`container section ${styles.notFoundContainer}`}>
      <IconBadge
        src="/images/icons/icon-fish.jpg"
        size={96}
        className={styles.notFoundIcon}
      />
      <h1>This page swam away</h1>
      <p className={`lede ${styles.notFoundLede}`}>
        We couldn&apos;t find that page. Let&apos;s get you back on route.
      </p>
      <div className={styles.notFoundActions}>
        <Link href="/" className="btn btn-primary">
          Back to Home
        </Link>
        <Link href="/visit" className="btn btn-outline">
          Plan a Visit
        </Link>
      </div>
    </div>
  );
}
