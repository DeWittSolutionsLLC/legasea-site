"use client";

import { useState } from "react";
import styles from "./BookingWidget.module.css";
function makeConfirmationCode() {
  return `LS-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;
}
export default function BookingWidget({ experience }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [confirmed, setConfirmed] = useState(null);
  const total = experience.price * quantity;
  function handleBook() {
    if (!selectedSlot) return;
    // In production this calls the RocketRez checkout/payment flow and
    // waits for a confirmation response before showing this screen.
    setConfirmed({
      slot: selectedSlot,
      code: makeConfirmationCode(),
      qty: quantity,
    });
  }
  if (confirmed) {
    return (
      <div className={styles.widget}>
        <div className={styles.confirmWrap}>
          <div className={styles.confirmIcon}>✅</div>
          <h3
            style={{
              marginBottom: 4,
            }}
          >
            You&apos;re booked!
          </h3>
          <p
            style={{
              color: "var(--ink-500)",
              margin: 0,
            }}
          >
            {confirmed.qty} × {experience.name} · {confirmed.slot}
          </p>
          <div className={styles.confirmCode}>{confirmed.code}</div>
          <p className="form-note">
            A confirmation would be sent by email/SMS here. Show this code at
            the exhibit or guest services.
          </p>
          <button
            type="button"
            className="btn btn-outline btn-sm"
            onClick={() => {
              setConfirmed(null);
              setSelectedSlot(null);
            }}
          >
            Book another slot
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.widget}>
      <div className={styles.priceRow}>
        <span className={styles.price}>${experience.price}</span>
        <span className={styles.priceUnit}>per person</span>
      </div>

      {experience.category === "admission" && (
        <div>
          <span className={styles.label}>Quantity</span>
          <div className={styles.qtyRow}>
            <button
              type="button"
              className={styles.qtyBtn}
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              aria-label="Decrease quantity"
            >
              −
            </button>
            <strong>{quantity}</strong>
            <button
              type="button"
              className={styles.qtyBtn}
              onClick={() => setQuantity((q) => Math.min(10, q + 1))}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
        </div>
      )}

      <span className={styles.label}>Today&apos;s available times</span>
      <div className={styles.slotGrid}>
        {experience.slots.map((slot) => (
          <button
            key={slot.time}
            type="button"
            className={styles.slotBtn}
            data-selected={selectedSlot === slot.time}
            disabled={slot.spotsLeft === 0}
            onClick={() => setSelectedSlot(slot.time)}
          >
            {slot.time}
            <span className={styles.spotsLeft}>
              {slot.spotsLeft === 0 ? "Full" : `${slot.spotsLeft} left`}
            </span>
          </button>
        ))}
      </div>

      <div className={styles.totalRow}>
        <span>Total</span>
        <span>${total}</span>
      </div>

      <button
        type="button"
        className="btn btn-primary btn-block"
        disabled={!selectedSlot}
        onClick={handleBook}
      >
        {selectedSlot ? `Book ${selectedSlot}` : "Select a time"}
      </button>
    </div>
  );
}
