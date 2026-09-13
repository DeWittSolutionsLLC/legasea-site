"use client";

import { useState } from "react";

// Demo facility coordinate — swap for the real property location when the
// Phase 4 geo-fencing service is wired up.
const FACILITY = {
  lat: 26.1224,
  lng: -80.1373,
};
const DEMO_RADIUS_MILES = 150;
function haversineMiles(a, b) {
  const R = 3958.8;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLng = ((b.lng - a.lng) * Math.PI) / 180;
  const lat1 = (a.lat * Math.PI) / 180;
  const lat2 = (b.lat * Math.PI) / 180;
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.min(1, Math.sqrt(h)));
}
export default function GeofenceDemo() {
  const [status, setStatus] = useState("idle");
  const [distance, setDistance] = useState(null);
  function checkLocation() {
    if (!navigator.geolocation) {
      setStatus("denied");
      return;
    }
    setStatus("checking");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const dist = haversineMiles(FACILITY, {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setDistance(dist);
        setStatus(dist <= DEMO_RADIUS_MILES ? "near" : "far");
      },
      () => setStatus("denied"),
      {
        timeout: 8000,
      },
    );
  }
  return (
    <div
      className="card"
      style={{
        padding: 24,
      }}
    >
      <span className="eyebrow">Phase 4 Preview</span>
      <h3
        style={{
          margin: "10px 0 6px",
        }}
      >
        Location-based offers (demo)
      </h3>
      <p
        style={{
          color: "var(--ink-500)",
          marginBottom: 16,
        }}
      >
        On-site, entering the property perimeter automatically triggers an offer
        notification. This demo checks your browser location against a{" "}
        {DEMO_RADIUS_MILES}-mile radius to show how that moment would look.
      </p>

      {status === "idle" && (
        <button
          type="button"
          className="btn btn-ocean btn-sm"
          onClick={checkLocation}
        >
          Check my location
        </button>
      )}

      {status === "checking" && <p className="form-note">Checking location…</p>}

      {status === "denied" && (
        <p className="form-note">
          Location wasn&apos;t available (permission denied or unsupported).
          On-site, this would use the mobile app&apos;s geofencing SDK instead
          of the browser.
        </p>
      )}

      {status === "near" && (
        <div className="form-success">
          🎉 You&apos;re within range — here&apos;s a demo offer: 10% off your
          next gift shop purchase, valid today only.
        </div>
      )}

      {status === "far" && (
        <p className="form-note">
          You&apos;re about {Math.round(distance ?? 0)} miles from the demo
          perimeter, so no offer fired — that&apos;s expected unless you&apos;re
          nearby.
        </p>
      )}
    </div>
  );
}
