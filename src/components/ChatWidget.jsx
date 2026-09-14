"use client";

import { useState } from "react";
import styles from "./ChatWidget.module.css";
import { faqs } from "@/lib/data";
const STARTER_CHIPS = [
  "Hours?",
  "Ticket prices?",
  "Membership?",
  "Accessibility?",
];
function answerFor(input) {
  const lower = input.toLowerCase();
  const match = faqs.find((f) => f.keywords.some((k) => lower.includes(k)));
  if (match) return match.answer;
  return "I don't have that answer yet — try asking about hours, tickets, membership, directions, encounters, or accessibility. For anything else, guest services can help at (586) 884-6941.";
}
export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi! I'm the LegaSea FAQ bot. Ask me about hours, tickets, membership, directions, or animal encounters.",
    },
  ]);
  const [input, setInput] = useState("");
  function send(text) {
    if (!text.trim()) return;
    const reply = answerFor(text);
    setMessages((m) => [
      ...m,
      {
        from: "user",
        text,
      },
      {
        from: "bot",
        text: reply,
      },
    ]);
    setInput("");
  }
  return (
    <div className={styles.wrap}>
      {open && (
        <div
          className={styles.panel}
          role="dialog"
          aria-label="LegaSea help chat"
        >
          <div className={styles.head}>
            LegaSea Chat
            <small>Instant answers on hours, tickets &amp; more</small>
          </div>

          <div className={styles.thread}>
            {messages.map((m, i) => (
              <div
                key={i}
                className={`${styles.bubble} ${m.from === "bot" ? styles.bubbleBot : styles.bubbleUser}`}
              >
                {m.text}
              </div>
            ))}
          </div>

          <div className={styles.chips}>
            {STARTER_CHIPS.map((c) => (
              <button
                key={c}
                type="button"
                className={styles.chip}
                onClick={() => send(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <form
            className={styles.inputRow}
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
          >
            <input
              type="text"
              placeholder="Ask a question…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              aria-label="Type a question"
            />
            <button type="submit" className={styles.sendBtn} aria-label="Send">
              ➤
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        className={styles.toggle}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {open ? (
          <span aria-hidden="true">✕</span>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src="/images/icons/icon-chat.jpg"
            alt=""
            className={styles.toggleIcon}
          />
        )}
      </button>
    </div>
  );
}
