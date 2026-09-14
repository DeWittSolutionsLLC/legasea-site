"use client";

import { useEffect, useState } from "react";
import styles from "./WalletPass.module.css";
const STORAGE_KEY = "legasea-member-id";

function makeBarcodeWidths(seed) {
  const widths = [];
  let n = seed;
  for (let i = 0; i < 38; i++) {
    n = (n * 9301 + 49297) % 233280;
    widths.push(4 + (n % 22));
  }
  return widths;
}

export default function WalletPass({ tiers }) {
  const [activeTier, setActiveTier] = useState(tiers[0].name);
  const [memberId, setMemberId] = useState("");
  const [addedTo, setAddedTo] = useState(null);
  useEffect(() => {
    // Reuses the same member id as MemberCard (unavailable during SSR).
    let id = localStorage.getItem(STORAGE_KEY);
    if (!id) {
      id = `LS-VIP-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
      localStorage.setItem(STORAGE_KEY, id);
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMemberId(id);
  }, []);

  const tier = tiers.find((t) => t.name === activeTier) ?? tiers[0];
  const seed = Array.from(activeTier).reduce((s, c) => s + c.charCodeAt(0), 0);
  const barWidths = makeBarcodeWidths(seed || 1);

  return (
    <div className={styles.wrap}>
      <div className={styles.tabs}>
        {tiers.map((t) => (
          <button
            key={t.name}
            type="button"
            className={styles.tab}
            data-active={t.name === activeTier}
            onClick={() => setActiveTier(t.name)}
          >
            {t.name}
          </button>
        ))}
      </div>

      <div className={styles.pass}>
        <div className={styles.passHead}>
          <div>
            <div className={styles.brand}>LegaSea Aquarium &amp; The Reptarium</div>
            <div className={styles.tierName}>{tier.name}</div>
          </div>
          <div className={styles.brand}>{tier.price}</div>
        </div>

        <div className={styles.passRow}>
          <span className={styles.passField}>
            <span className={styles.passFieldLabel}>Member ID</span>
            <span className={styles.passFieldValue}>{memberId || "—"}</span>
          </span>
          <span className={styles.passField}>
            <span className={styles.passFieldLabel}>Valid Thru</span>
            <span className={styles.passFieldValue}>12/2026</span>
          </span>
        </div>

        <div className={styles.barcode} aria-hidden="true">
          {barWidths.map((w, i) => (
            <span key={i} style={{ height: `${w * 1.6}px` }} />
          ))}
        </div>
      </div>

      <div className={styles.walletButtons}>
        <button
          type="button"
          className={styles.walletBtn}
          onClick={() => setAddedTo("Apple Wallet")}
        >
          Add to Apple Wallet
        </button>
        <button
          type="button"
          className={styles.walletBtn}
          data-variant="google"
          onClick={() => setAddedTo("Google Wallet")}
        >
          Add to Google Wallet
        </button>
      </div>
      {addedTo ? (
        <p className={`form-success ${styles.note}`}>
          Demo only — in production this would hand off to {addedTo} with your
          {" "}
          {tier.name} pass pre-filled.
        </p>
      ) : (
        <p className={styles.note}>
          Switch tiers above to preview the pass each membership level gets.
        </p>
      )}
    </div>
  );
}
