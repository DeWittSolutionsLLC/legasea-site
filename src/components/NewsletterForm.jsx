"use client";

import { useState } from "react";
export default function NewsletterForm({ compact = false }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  function handleSubmit(e) {
    e.preventDefault();
    if (!email.includes("@")) return;
    // In production this posts to the email service provider (Mailchimp/Klaviyo).
    setStatus("submitted");
  }
  if (status === "submitted") {
    return (
      <p className="form-success">
        You&apos;re on the list — watch for our next newsletter 🐠
      </p>
    );
  }
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        gap: 10,
        flexWrap: "wrap",
        alignItems: "flex-end",
      }}
    >
      <div
        className="field"
        style={{
          marginBottom: 0,
          flex: compact ? "1 1 180px" : "1 1 240px",
        }}
      >
        {!compact && <label htmlFor="newsletter-email">Email address</label>}
        <input
          id="newsletter-email"
          type="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary btn-sm">
        Subscribe
      </button>
    </form>
  );
}
