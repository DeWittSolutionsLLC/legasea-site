"use client";

import { useEffect, useState } from "react";
import styles from "./StampHunt.module.css";
import { stickers, zones } from "@/lib/data";
const STORAGE_KEY = "legasea-stamp-hunt";
function loadScans() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}
function makeCode() {
  return `REDEEM-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
}
export default function StampHunt() {
  const [scans, setScans] = useState([]);
  const [claimed, setClaimed] = useState(false);
  const [staffInput, setStaffInput] = useState("");
  const [staffResult, setStaffResult] = useState("idle");
  const [redemptionCode, setRedemptionCode] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [newlyFoundId, setNewlyFoundId] = useState(null);
  useEffect(() => {
    // Reads localStorage (unavailable during SSR) once on mount, and
    // generates the redemption code client-side to match.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setScans(loadScans());
    setClaimed(localStorage.getItem(`${STORAGE_KEY}-claimed`) === "true");
    setRedemptionCode(makeCode());
    setLoaded(true);
  }, []);
  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(scans));
  }, [scans, loaded]);
  function simulateScan(id) {
    // Server-side, this validates the sticker's unique code hasn't already
    // been redeemed by this guest account (NFR-7) before logging the scan.
    if (scans.some((s) => s.id === id)) return;
    setScans((s) => [
      ...s,
      {
        id,
        scannedAt: new Date().toISOString(),
      },
    ]);
    // Flags this badge as the one to play the "just scanned" pop-in
    // animation for; stickers restored from localStorage on load never
    // pass through here, so they render as found without replaying it.
    setNewlyFoundId(id);
  }
  function resetDemo() {
    setScans([]);
    setClaimed(false);
    setNewlyFoundId(null);
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(`${STORAGE_KEY}-claimed`);
  }
  function verifyStaffCode(e) {
    e.preventDefault();
    setStaffResult(staffInput.trim() === redemptionCode ? "valid" : "invalid");
  }
  function markClaimed() {
    setClaimed(true);
    localStorage.setItem(`${STORAGE_KEY}-claimed`, "true");
  }
  const found = scans.length;
  const total = stickers.length;
  const complete = found === total;
  return (
    <div>
      <div className={styles.progressWrap}>
        <span className={styles.progressCount}>
          {found} of {total} found
        </span>
        <div className={styles.progressBarTrack}>
          <div
            className={styles.progressBarFill}
            style={{
              width: `${(found / total) * 100}%`,
            }}
          />
        </div>
        {found > 0 && (
          <button
            type="button"
            className="btn btn-outline btn-outline--glass btn-sm"
            onClick={resetDemo}
          >
            Reset demo
          </button>
        )}
      </div>

      <div className={styles.grid}>
        {stickers.map((sticker) => {
          const isFound = scans.some((s) => s.id === sticker.id);
          const zone = zones.find((z) => z.slug === sticker.zoneSlug);
          const justFound = newlyFoundId === sticker.id;
          return (
            <div
              key={sticker.id}
              className={`${styles.stickerCard} ${
                justFound ? styles.justFound : ""
              }`}
              data-found={isFound}
            >
              <div className={styles.stickerIcon} aria-hidden="true">
                <div className={styles.stickerIconRing}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={sticker.icon} alt="" />
                </div>
              </div>
              <strong
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--glass-text)",
                }}
              >
                {sticker.name}
              </strong>
              <p className={styles.hint}>
                {zone ? `${zone.name} — ` : ""}
                {sticker.hint}
              </p>
              {isFound ? (
                <span className={`tag tag--reptile ${styles.foundTag}`}>
                  Found ✓
                </span>
              ) : (
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={() => simulateScan(sticker.id)}
                >
                  Simulate Scan
                </button>
              )}
            </div>
          );
        })}
      </div>

      {complete && !claimed && (
        <div className={styles.redemption}>
          <h2>All 5 stamps collected! 🎉</h2>
          <p
            style={{
              color: "var(--ocean-200)",
            }}
          >
            Show this code at Guest Services to claim your wristband or pin.
          </p>
          <div className={styles.code}>{redemptionCode}</div>
          <div>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={markClaimed}
            >
              Mark as claimed (staff demo)
            </button>
          </div>
        </div>
      )}

      {complete && claimed && (
        <div
          className={styles.redemption}
          style={{
            background: "var(--reptile-600)",
          }}
        >
          <h2>Reward claimed ✓</h2>
          <p
            style={{
              color: "rgba(255,255,255,0.85)",
            }}
          >
            This code is now marked redeemed and can&apos;t be used again.
          </p>
        </div>
      )}

      <div className={styles.staffBox}>
        <h4
          style={{
            marginBottom: 6,
          }}
        >
          Staff redemption verification (demo)
        </h4>
        <p
          style={{
            color: "var(--glass-text-dim)",
            marginBottom: 14,
          }}
        >
          A simplified version of the guest-services tool staff use to check a
          redemption code.
        </p>
        <form
          onSubmit={verifyStaffCode}
          style={{
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
          }}
        >
          <input
            type="text"
            value={staffInput}
            onChange={(e) => {
              setStaffInput(e.target.value);
              setStaffResult("idle");
            }}
            placeholder="Enter guest's code"
            style={{
              flex: "1 1 220px",
              padding: "10px 14px",
              borderRadius: "var(--radius-sm)",
              border: "1.5px solid var(--sand-300)",
            }}
          />
          <button type="submit" className="btn btn-primary btn-sm">
            Verify
          </button>
        </form>
        {staffResult === "valid" && (
          <p
            className="form-success"
            style={{
              marginTop: 10,
            }}
          >
            Valid code — all 5 stamps confirmed for this guest.
          </p>
        )}
        {staffResult === "invalid" && (
          <p
            style={{
              marginTop: 10,
              color: "var(--coral-400)",
              fontWeight: 600,
            }}
          >
            Not a recognized code.
          </p>
        )}
      </div>
    </div>
  );
}
