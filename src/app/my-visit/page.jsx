"use client";

import Link from "next/link";
import PageHero from "@/components/PageHero";
import IconBadge from "@/components/IconBadge";
import { useVisitPlan } from "@/context/VisitPlanContext";
import styles from "./page.module.css";

export default function MyVisitPage() {
  const { items, removeItem, clear, totalPrice, totalMinutes } = useVisitPlan();

  return (
    <>
      <PageHero
        eyebrow="Your Plan"
        title="My Visit"
        subtitle="Everything you've added from across the site, in one place — build your day before you arrive."
        crumbLabel="My Visit"
      />

      <div className="container section">
        {items.length === 0 ? (
          <div className={`card ${styles.empty}`}>
            <IconBadge
              src="/images/icons/icon-clipboard.jpg"
              size={64}
              className={styles.emptyIcon}
            />
            <h2>Nothing added yet</h2>
            <p className="lede">
              Browse experiences, tours, and shows and tap &quot;Add to My
              Visit&quot; to start building your day.
            </p>
            <Link href="/visit" className="btn btn-primary">
              Browse Experiences
            </Link>
          </div>
        ) : (
          <>
            <div className={`card ${styles.summaryCard}`}>
              <div className={styles.summaryStats}>
                <span className={styles.summaryStat}>
                  <span className={styles.summaryNum}>{items.length}</span>
                  <span className={styles.summaryLabel}>
                    item{items.length === 1 ? "" : "s"}
                  </span>
                </span>
                {totalMinutes > 0 && (
                  <span className={styles.summaryStat}>
                    <span className={styles.summaryNum}>{totalMinutes}</span>
                    <span className={styles.summaryLabel}>minutes</span>
                  </span>
                )}
                <span className={styles.summaryStat}>
                  <span className={styles.summaryNum}>${totalPrice}</span>
                  <span className={styles.summaryLabel}>estimated total</span>
                </span>
              </div>
              <div className={styles.actions}>
                <Link href="/visit" className="btn btn-primary btn-sm">
                  Add More
                </Link>
                <button
                  type="button"
                  className="btn btn-outline btn-sm"
                  onClick={clear}
                >
                  Clear Plan
                </button>
              </div>
            </div>

            <div className={styles.list}>
              {items.map((item) => (
                <div key={item.id} className={`card ${styles.row}`}>
                  {item.image && (
                    <div className={styles.rowMedia}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={item.image} alt="" />
                    </div>
                  )}
                  <div className={styles.rowInfo}>
                    <h3 className={styles.rowName}>
                      {item.href ? (
                        <Link href={item.href}>{item.name}</Link>
                      ) : (
                        item.name
                      )}
                    </h3>
                    <p className={styles.rowMeta}>
                      {[item.duration, item.price ? `$${item.price}` : null]
                        .filter(Boolean)
                        .join(" · ")}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="btn btn-outline btn-sm"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <Link href="/visit" className="btn btn-primary btn-block">
              Book General Admission — $28
            </Link>
          </>
        )}
      </div>
    </>
  );
}
