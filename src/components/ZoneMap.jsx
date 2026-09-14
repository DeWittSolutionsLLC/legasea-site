"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./ZoneMap.module.css";
import IconBadge from "@/components/IconBadge";
import { IconUsers } from "@/components/icons";
import { experiences, getCrowdLevel, getZoneTone, zones } from "@/lib/data";
const CROWD_TAG_CLASS = {
  Low: "tag--reptile",
  Moderate: "",
  Busy: "tag--coral",
};
const TOUR_ORDER = [
  "welcome-plaza",
  "reef-hall",
  "reptarium",
  "mangrove-walk",
  "deep-tank",
  "kids-cove",
];
export default function ZoneMap() {
  const [selected, setSelected] = useState(zones[0].slug);
  const [tourActive, setTourActive] = useState(false);
  const [tourStep, setTourStep] = useState(0);
  const [now, setNow] = useState(null);
  useEffect(() => {
    // Reads the URL hash (unavailable during SSR) once on mount.
    const hash = window.location.hash.replace("#", "");
    if (hash && zones.some((z) => z.slug === hash)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSelected(hash);
    }
  }, []);
  useEffect(() => {
    // The current time can't be known during SSR, so it's set after mount.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(id);
  }, []);
  const zone = zones.find((z) => z.slug === selected) ?? zones[0];
  const zoneExperiences = experiences.filter((e) => e.zone === zone.slug);
  function startTour() {
    setTourActive(true);
    setTourStep(0);
    setSelected(TOUR_ORDER[0]);
  }
  function stepTour(delta) {
    const next = Math.min(Math.max(tourStep + delta, 0), TOUR_ORDER.length - 1);
    setTourStep(next);
    setSelected(TOUR_ORDER[next]);
  }
  return (
    <div>
      <div className={styles.tourBar}>
        <div>
          <h2
            style={{
              marginBottom: 4,
              color: "var(--sand-100)",
            }}
          >
            Facility Map
          </h2>
          <p
            style={{
              margin: 0,
              color: "var(--sand-300)",
            }}
          >
            Tap a zone to see what&apos;s there, or start the suggested
            self-guided route.
          </p>
        </div>
        {!tourActive ? (
          <button type="button" className="btn btn-primary" onClick={startTour}>
            Start Self-Guided Tour
          </button>
        ) : (
          <div
            style={{
              display: "flex",
              gap: 8,
              alignItems: "center",
            }}
          >
            <span className="tag tag--coral">
              Stop {tourStep + 1} of {TOUR_ORDER.length}
            </span>
            <button
              type="button"
              className="btn btn-outline btn-outline--glass btn-sm"
              onClick={() => stepTour(-1)}
              disabled={tourStep === 0}
            >
              ← Prev
            </button>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={() => stepTour(1)}
              disabled={tourStep === TOUR_ORDER.length - 1}
            >
              Next →
            </button>
            <button
              type="button"
              className="btn btn-outline btn-outline--glass btn-sm"
              onClick={() => setTourActive(false)}
            >
              End Tour
            </button>
          </div>
        )}
      </div>

      <div className={styles.mapWrap}>
        <span
          className={styles.youAreHere}
          style={{ display: "inline-flex", alignItems: "center", gap: 6 }}
        >
          <IconBadge src="/images/icons/icon-pin.jpg" size={18} />
          You are here: Welcome Plaza
        </span>

        {tourActive && (
          <svg className={styles.path} aria-hidden="true">
            <polyline
              points={TOUR_ORDER.map((slug) => {
                const z = zones.find((zz) => zz.slug === slug);
                return `${z.x}%,${z.y}%`;
              }).join(" ")}
              fill="none"
              stroke="var(--coral-500)"
              strokeWidth={3}
              strokeDasharray="8 6"
              strokeLinecap="round"
            />
          </svg>
        )}

        {zones.map((z) => {
          const tourIndex = TOUR_ORDER.indexOf(z.slug);
          return (
            <button
              key={z.slug}
              type="button"
              className={styles.pin}
              style={{
                left: `${z.x}%`,
                top: `${z.y}%`,
              }}
              data-active={selected === z.slug}
              onClick={() => setSelected(z.slug)}
            >
              <span className={styles.pinDot} aria-hidden="true">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={z.icon} alt="" />
                {tourActive && tourIndex >= 0 && (
                  <span className={styles.pinOrder}>{tourIndex + 1}</span>
                )}
              </span>
              <span className={styles.pinLabel}>{z.name}</span>
            </button>
          );
        })}
      </div>

      <div className={styles.detailCard} id={zone.slug}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          <span
            className={`eyebrow eyebrow--${getZoneTone(zone.slug)}`}
            style={{ display: "inline-flex", alignItems: "center", gap: 6 }}
          >
            <IconBadge src={zone.icon} size={30} />
            {zone.name}
          </span>
          {now && (
            <span
              className={`tag ${CROWD_TAG_CLASS[getCrowdLevel(zone.slug, now)]}`}
              style={{ display: "inline-flex", alignItems: "center", gap: 5 }}
            >
              <IconUsers size={13} />
              {getCrowdLevel(zone.slug, now)} right now
            </span>
          )}
        </div>
        <p
          style={{
            margin: "10px 0 14px",
          }}
        >
          {zone.description}
        </p>
        <div
          style={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            marginBottom: 16,
          }}
        >
          {zone.highlights.map((h) => (
            <span className="tag" key={h}>
              {h}
            </span>
          ))}
        </div>

        {zoneExperiences.length > 0 && (
          <>
            <h4
              style={{
                marginBottom: 10,
              }}
            >
              Bookable here
            </h4>
            <div
              style={{
                display: "flex",
                gap: 10,
                flexWrap: "wrap",
              }}
            >
              {zoneExperiences.map((e) => (
                <Link
                  key={e.slug}
                  href={`/experience/${e.slug}`}
                  className="btn btn-outline btn-outline--glass btn-sm"
                >
                  <IconBadge src={e.icon} size={30} />
                  {e.name}
                </Link>
              ))}
            </div>
          </>
        )}
      </div>

      <div className={styles.zoneList}>
        {zones.map((z) => (
          <button
            key={z.slug}
            type="button"
            className={styles.zoneChip}
            data-active={selected === z.slug}
            onClick={() => setSelected(z.slug)}
          >
            <IconBadge src={z.icon} size={32} aria-hidden="true" />
            <strong
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.88rem",
              }}
            >
              {z.name}
            </strong>
            {now && (
              <span
                aria-hidden="true"
                title={`${getCrowdLevel(z.slug, now)} crowds`}
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  display: "inline-block",
                  background: {
                    Low: "var(--reptile-500)",
                    Moderate: "var(--canopy-glow, #e2c073)",
                    Busy: "var(--coral-500)",
                  }[getCrowdLevel(z.slug, now)],
                }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
