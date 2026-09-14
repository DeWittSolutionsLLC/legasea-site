"use client";

import { useState } from "react";

const GROUP_TYPES = [
  "School Class",
  "Scout Troop",
  "Homeschool Group",
  "Summer Camp",
  "Corporate/Team Event",
  "Other",
];

export default function InquiryForm({
  itemName,
  ctaLabel = "Request This Date",
  dateLabel = "Preferred date",
  variant,
}) {
  const isGroup = variant === "group";
  const [submitted, setSubmitted] = useState(false);
  const [taxExempt, setTaxExempt] = useState(false);

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

      {isGroup && (
        <>
          <div className="field">
            <label htmlFor="inq-group-type">Group type</label>
            <select id="inq-group-type" defaultValue="">
              <option value="" disabled>
                Select a group type
              </option>
              {GROUP_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="inq-arrival">Preferred arrival time</label>
            <input
              id="inq-arrival"
              type="time"
              placeholder="9:00 AM"
            />
          </div>
          <div className="field">
            <label
              htmlFor="inq-tax-exempt"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontWeight: 600,
              }}
            >
              <input
                id="inq-tax-exempt"
                type="checkbox"
                checked={taxExempt}
                onChange={(e) => setTaxExempt(e.target.checked)}
                style={{
                  width: "auto",
                }}
              />
              This is a school or nonprofit booking with a tax-exempt
              certificate or PO
            </label>
            {taxExempt && (
              <input
                id="inq-po-number"
                placeholder="PO / tax-exempt certificate number"
                style={{
                  marginTop: 8,
                }}
              />
            )}
          </div>
        </>
      )}

      <div className="field">
        <label htmlFor="inq-notes">
          {isGroup
            ? "Curriculum focus or special requests"
            : "Anything else we should know?"}
        </label>
        <textarea
          id="inq-notes"
          rows={3}
          placeholder={
            isGroup
              ? "e.g. tying the visit to a marine biology or ecosystems unit"
              : "Optional"
          }
        />
      </div>

      <button type="submit" className="btn btn-primary btn-block">
        {ctaLabel}
      </button>
    </form>
  );
}
