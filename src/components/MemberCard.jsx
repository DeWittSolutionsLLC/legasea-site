"use client";

import { useEffect, useState } from "react";
const STORAGE_KEY = "legasea-member-id";
function makeId() {
  return `LS-VIP-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
}
export default function MemberCard() {
  const [memberId, setMemberId] = useState(null);
  const [scans, setScans] = useState(0);
  useEffect(() => {
    // Reads/writes localStorage (unavailable during SSR) once on mount.
    let id = localStorage.getItem(STORAGE_KEY);
    if (!id) {
      id = makeId();
      localStorage.setItem(STORAGE_KEY, id);
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMemberId(id);
    setScans(Number(localStorage.getItem(`${STORAGE_KEY}-scans`) || 0));
  }, []);
  function simulateScan() {
    const next = scans + 1;
    setScans(next);
    localStorage.setItem(`${STORAGE_KEY}-scans`, String(next));
  }
  if (!memberId) return null;
  return (
    <div
      style={{
        background:
          "linear-gradient(135deg, var(--ocean-700), var(--reptile-600))",
        borderRadius: "var(--radius-lg)",
        padding: 26,
        color: "white",
        boxShadow: "var(--shadow-md)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "0.75rem",
              opacity: 0.8,
              letterSpacing: 1,
            }}
          >
            VIP MEMBER
          </div>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.3rem",
              marginTop: 2,
            }}
          >
            LegaSea Scan Card
          </div>
        </div>
        <span
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            overflow: "hidden",
            display: "block",
          }}
          aria-hidden="true"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/icons/icon-vest.jpg"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </span>
      </div>

      <div
        style={{
          fontFamily: "var(--font-mono, monospace)",
          fontSize: "1.15rem",
          letterSpacing: 2,
          margin: "22px 0 6px",
        }}
      >
        {memberId}
      </div>
      <div
        style={{
          fontSize: "0.82rem",
          opacity: 0.85,
          marginBottom: 18,
        }}
      >
        {scans} station scan{scans === 1 ? "" : "s"} logged this visit
      </div>

      <button
        type="button"
        className="btn btn-ghost btn-sm"
        onClick={simulateScan}
      >
        Simulate station scan
      </button>
    </div>
  );
}
