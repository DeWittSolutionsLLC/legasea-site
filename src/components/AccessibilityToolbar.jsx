"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./AccessibilityToolbar.module.css";
const STORAGE_KEY = "legasea-a11y-prefs";
export default function AccessibilityToolbar() {
  const [open, setOpen] = useState(false);
  const [textSize, setTextSize] = useState("base");
  const [contrast, setContrast] = useState("normal");
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    // Reads localStorage (unavailable during SSR) once on mount, so the
    // sync-into-state here can't happen during render.
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (saved.textSize) setTextSize(saved.textSize);
      if (saved.contrast) setContrast(saved.contrast);
    } catch {
      // ignore
    }
    setLoaded(true);
  }, []);
  useEffect(() => {
    if (!loaded) return;
    document.body.setAttribute("data-text-size", textSize);
    document.body.setAttribute("data-contrast", contrast);
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          textSize,
          contrast,
        }),
      );
    } catch {
      // ignore
    }
  }, [textSize, contrast, loaded]);
  return (
    <div className={styles.wrap}>
      {open && (
        <div
          className={styles.panel}
          role="dialog"
          aria-label="Accessibility settings"
        >
          <div className={styles.panelTitle}>Accessibility Settings</div>

          <div className={styles.row}>
            <span className={styles.rowLabel}>Text size</span>
            <div className={styles.optionRow}>
              {["base", "lg", "xl"].map((size) => (
                <button
                  key={size}
                  type="button"
                  className={styles.optionBtn}
                  data-active={textSize === size}
                  onClick={() => setTextSize(size)}
                  aria-pressed={textSize === size}
                >
                  {size === "base" ? "A" : size === "lg" ? "A+" : "A++"}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.row}>
            <span className={styles.rowLabel}>Contrast</span>
            <div className={styles.optionRow}>
              {["normal", "high"].map((c) => (
                <button
                  key={c}
                  type="button"
                  className={styles.optionBtn}
                  data-active={contrast === c}
                  onClick={() => setContrast(c)}
                  aria-pressed={contrast === c}
                >
                  {c === "normal" ? "Standard" : "High contrast"}
                </button>
              ))}
            </div>
          </div>

          <Link href="/accessibility" className={styles.link}>
            Full accessibility &amp; visit info →
          </Link>
        </div>
      )}

      <button
        type="button"
        className={styles.toggle}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label="Accessibility settings"
        title="Accessibility settings"
      >
        <span aria-hidden="true">♿</span>
      </button>
    </div>
  );
}
