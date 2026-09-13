"use client";

import { useState } from "react";
import styles from "@/components/BookingWidget.module.css";
export default function ProgramRegister({ program }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  function handleSubmit(e) {
    e.preventDefault();
    setStatus("done");
  }
  if (status === "done") {
    return (
      <div className={styles.widget}>
        <div className={styles.confirmWrap}>
          <div className={styles.confirmIcon}>
            {program.waitlist ? "📋" : "✅"}
          </div>
          <h3
            style={{
              marginBottom: 4,
            }}
          >
            {program.waitlist
              ? "You're on the waitlist!"
              : "You're registered!"}
          </h3>
          <p
            style={{
              color: "var(--ink-500)",
              margin: 0,
            }}
          >
            {program.name} · {program.cadence}
          </p>
          <p
            className="form-note"
            style={{
              marginTop: 10,
            }}
          >
            A confirmation would be sent to {email || "your email"} here.
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.widget}>
      <div className={styles.priceRow}>
        <span className={styles.price}>${program.price}</span>
        <span className={styles.priceUnit}>per session</span>
      </div>

      <p
        style={{
          color: "var(--ink-600)",
          marginBottom: 16,
        }}
      >
        <strong>{program.cadence}</strong>
      </p>

      {program.waitlist && (
        <div
          className="card"
          style={{
            padding: 14,
            background: "var(--coral-100)",
            marginBottom: 16,
          }}
        >
          <strong
            style={{
              color: "var(--coral-600)",
            }}
          >
            Currently full
          </strong>
          <p
            style={{
              margin: "4px 0 0",
              fontSize: "0.88rem",
              color: "var(--ink-600)",
            }}
          >
            Join the waitlist below — we&apos;ll email you the moment a spot
            opens.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="program-email">Parent/guardian email</label>
          <input
            id="program-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          {program.waitlist ? "Join Waitlist" : "Register Now"}
        </button>
      </form>
    </div>
  );
}
