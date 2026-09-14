"use client";

import { useState } from "react";
import Link from "next/link";
import { useVisitPlan } from "@/context/VisitPlanContext";
import { IconList, IconArrowRight } from "@/components/icons";
import styles from "./MyVisitDrawer.module.css";

export default function MyVisitDrawer() {
  const [open, setOpen] = useState(false);
  const { items, removeItem, totalPrice, totalMinutes } = useVisitPlan();

  if (items.length === 0 && !open) {
    return null;
  }

  return (
    <>
      <button
        type="button"
        className={styles.trigger}
        onClick={() => setOpen(true)}
        aria-label="Open My Visit planner"
      >
        <IconList size={16} />
        My Visit
        {items.length > 0 && <span className={styles.count}>{items.length}</span>}
      </button>

      {open && (
        <>
          <div
            className={styles.overlay}
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className={styles.panel} role="dialog" aria-label="My Visit planner">
            <div className={styles.panelHead}>
              <h3 className={styles.panelTitle}>My Visit</h3>
              <button
                type="button"
                className={styles.closeBtn}
                onClick={() => setOpen(false)}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className={styles.panelBody}>
              {items.length === 0 ? (
                <p className={styles.empty}>
                  Nothing added yet — look for &quot;Add to My Visit&quot; on any
                  experience, tour, or show.
                </p>
              ) : (
                items.map((item) => (
                  <div key={item.id} className={styles.row}>
                    <div className={styles.rowInfo}>
                      <p className={styles.rowName}>{item.name}</p>
                      <p className={styles.rowMeta}>
                        {[item.duration, item.price ? `$${item.price}` : null]
                          .filter(Boolean)
                          .join(" · ")}
                      </p>
                    </div>
                    <button
                      type="button"
                      className={styles.removeBtn}
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className={styles.panelFoot}>
                <div className={styles.summaryRow}>
                  <span>{items.length} item{items.length === 1 ? "" : "s"}</span>
                  <span>
                    {totalMinutes > 0 ? `~${totalMinutes} min · ` : ""}
                    ${totalPrice}
                  </span>
                </div>
                <Link
                  href="/my-visit"
                  className="btn btn-primary btn-block"
                  onClick={() => setOpen(false)}
                >
                  View Full Plan <IconArrowRight size={14} />
                </Link>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}
