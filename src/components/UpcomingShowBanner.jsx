"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { formatShowTime, getUpcomingShow, isShowLive } from "@/lib/data";
import styles from "@/app/page.module.css";
export default function UpcomingShowBanner() {
  const [show, setShow] = useState(null);
  const [live, setLive] = useState(false);
  useEffect(() => {
    function tick() {
      const now = new Date();
      const next = getUpcomingShow(now);
      setShow(next);
      setLive(next ? isShowLive(next, now) : false);
    }
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);
  if (!show) return null;
  return (
    <div className={styles.showBanner}>
      <div className={styles.showBannerLeft}>
        <span className={styles.pulseDot} aria-hidden="true" />
        <div>
          <strong
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--glass-text)",
            }}
          >
            {live ? "Happening now" : "Starting soon"}: {show.name}
          </strong>
          <div
            style={{
              fontSize: "0.88rem",
              color: "var(--glass-text-dim)",
            }}
          >
            {formatShowTime(show)} · {show.zone}
          </div>
        </div>
      </div>
      <Link href="/shows" className={`btn ${styles.btnGlass}`}>
        Full Schedule
      </Link>
    </div>
  );
}
