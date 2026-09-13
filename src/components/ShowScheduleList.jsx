"use client";

import { useEffect, useState } from "react";
import styles from "./ShowScheduleList.module.css";
import { formatShowTime, getUpcomingShow, isShowLive, shows } from "@/lib/data";
export default function ShowScheduleList() {
  const [now, setNow] = useState(null);
  useEffect(() => {
    // The current time can't be known during SSR, so it's set after mount
    // and then kept in sync on an interval (a genuine external-clock subscription).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(id);
  }, []);
  const nextShow = now ? getUpcomingShow(now) : null;
  return (
    <div className={styles.list}>
      {shows.map((show) => {
        const live = now ? isShowLive(show, now) : false;
        const isNext = !live && nextShow?.id === show.id;
        return (
          <div
            key={show.id}
            className={styles.row}
            data-live={live}
            data-next={isNext}
          >
            <div className={styles.time}>{formatShowTime(show)}</div>
            <div className={styles.body}>
              <div className={styles.name}>{show.name}</div>
              <div className={styles.meta}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/icons/icon-pin.jpg"
                  alt=""
                  style={{
                    width: 13,
                    height: 13,
                    borderRadius: "50%",
                    objectFit: "cover",
                    display: "inline-block",
                    verticalAlign: "middle",
                    marginRight: 4,
                  }}
                />
                {show.zone} · {show.durationMinutes} min · {show.description}
              </div>
            </div>
            {live && <span className={styles.badge}>Happening now</span>}
            {isNext && (
              <span className={`${styles.badge} ${styles.badgeNext}`}>
                Up next
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
