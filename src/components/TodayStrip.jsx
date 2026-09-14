"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./TodayStrip.module.css";
import {
  IconSun,
  IconCloudSun,
  IconCloudRain,
  IconClock,
  IconUsers,
} from "@/components/icons";
import {
  formatShowTime,
  getCrowdLevel,
  getTodayWeather,
  getUpcomingShow,
  isShowLive,
  zones,
} from "@/lib/data";

const WEATHER_ICONS = {
  sun: IconSun,
  "cloud-sun": IconCloudSun,
  "cloud-rain": IconCloudRain,
};

export default function TodayStrip() {
  const [now, setNow] = useState(null);
  useEffect(() => {
    // The current time can't be known during SSR, so it's set after mount.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(id);
  }, []);

  if (!now) return null;

  const weather = getTodayWeather(now);
  const WeatherIcon = WEATHER_ICONS[weather.icon] ?? IconSun;
  const show = getUpcomingShow(now);
  const live = show ? isShowLive(show, now) : false;

  const busiest = zones.reduce((top, z) => {
    const level = getCrowdLevel(z.slug, now);
    const rank = { Low: 0, Moderate: 1, Busy: 2 }[level];
    return !top || rank > top.rank ? { zone: z, level, rank } : top;
  }, null);

  return (
    <div className={styles.strip}>
      <div className={styles.item}>
        <span className={styles.iconWrap}>
          <WeatherIcon size={18} />
        </span>
        <span>
          <span className={styles.label}>{weather.condition} Today</span>
          <span className={styles.value}>{weather.tip}</span>
        </span>
      </div>

      <div className={styles.item}>
        <span className={styles.iconWrap}>
          <IconClock size={18} />
        </span>
        <span>
          <span className={styles.label}>
            {live ? "Happening Now" : "Up Next"}
          </span>
          <span className={styles.value}>
            {show ? `${show.name} · ${formatShowTime(show)}` : "See schedule"}
          </span>
        </span>
      </div>

      <div className={styles.item}>
        <span className={styles.iconWrap}>
          <IconUsers size={18} />
        </span>
        <span>
          <span className={styles.label}>Busiest Zone Right Now</span>
          <span className={styles.value}>
            <Link href={`/map#${busiest.zone.slug}`} className={styles.link}>
              {busiest.zone.name} · {busiest.level}
            </Link>
          </span>
        </span>
      </div>
    </div>
  );
}
