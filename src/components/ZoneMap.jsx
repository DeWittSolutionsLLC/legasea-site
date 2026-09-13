"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./ZoneMap.module.css";
import { experiences, zones } from "@/lib/data";
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
  useEffect(() => {
    // Reads the URL hash (unavailable during SSR) once on mount.
    const hash = window.location.hash.replace("#", "");
    if (hash && zones.some((z) => z.slug === hash)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSelected(hash);
    }
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
            }}
          >
            Facility Map
          </h2>
          <p
            style={{
              margin: 0,
              color: "var(--ink-500)",
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
              className="btn btn-outline btn-sm"
              onClick={() => stepTour(-1)}
              disabled={tourStep === 0}
            >
              ← Prev
            </button>
            <button
              type="button"
              className="btn btn-ocean btn-sm"
              onClick={() => stepTour(1)}
              disabled={tourStep === TOUR_ORDER.length - 1}
            >
              Next →
            </button>
            <button
              type="button"
              className="btn btn-outline btn-sm"
              onClick={() => setTourActive(false)}
            >
              End Tour
            </button>
          </div>
        )}
      </div>

      <div className={styles.mapWrap}>
        <span className={styles.youAreHere}>
          📍 You are here: Welcome Plaza
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
              <span
                className={styles.pinDot}
                style={{
                  color: z.color,
                }}
                aria-hidden="true"
              >
                {z.icon}
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
        <span className="eyebrow eyebrow--ocean">
          {zone.icon} {zone.name}
        </span>
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
                  className="btn btn-outline btn-sm"
                >
                  {e.icon} {e.name}
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
            <div
              style={{
                fontSize: "1.4rem",
              }}
              aria-hidden="true"
            >
              {z.icon}
            </div>
            <strong
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.88rem",
              }}
            >
              {z.name}
            </strong>
          </button>
        ))}
      </div>
    </div>
  );
}
