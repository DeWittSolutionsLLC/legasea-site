"use client";

import { useState } from "react";
export default function InquiryForm({
  itemName,
  ctaLabel = "Request This Date",
  dateLabel = "Preferred date",
}) {
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    // In production this posts to the group-sales inbox / CRM.
    setSubmitted(true);
  }
  if (submitted) {
    return (
      <p className="form-success">
        Thanks! Your request for {itemName} is in — our group sales team replies
        within 1 business day.
      </p>
    );
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="card"
      style={{
        padding: 24,
      }}
    >
      <h3
        style={{
          marginBottom: 4,
        }}
      >
        Request a Booking
      </h3>
      <p
        style={{
          color: "var(--glass-text-dim)",
          marginBottom: 18,
        }}
      >
        {itemName}
      </p>

      <div className="field">
        <label htmlFor="inq-name">Your name</label>
        <input id="inq-name" required placeholder="Jamie Rivera" />
      </div>
      <div className="field">
        <label htmlFor="inq-email">Email</label>
        <input
          id="inq-email"
          type="email"
          required
          placeholder="you@example.com"
        />
      </div>
      <div className="field">
        <label htmlFor="inq-date">{dateLabel}</label>
        <input id="inq-date" type="date" required />
      </div>
      <div className="field">
        <label htmlFor="inq-guests">Estimated group size</label>
        <input id="inq-guests" type="number" min={1} placeholder="15" />
      </div>
      <div className="field">
        <label htmlFor="inq-notes">Anything else we should know?</label>
        <textarea id="inq-notes" rows={3} placeholder="Optional" />
      </div>

      <button type="submit" className="btn btn-primary btn-block">
        {ctaLabel}
      </button>
    </form>
  );
}
