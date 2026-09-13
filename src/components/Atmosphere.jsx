import styles from "./Atmosphere.module.css";
const BUBBLES = [
  {
    left: "6%",
    size: 10,
    delay: "0s",
    duration: "9s",
    drift: "10px",
  },
  {
    left: "18%",
    size: 6,
    delay: "2.2s",
    duration: "11s",
    drift: "-14px",
  },
  {
    left: "32%",
    size: 14,
    delay: "4.1s",
    duration: "13s",
    drift: "8px",
  },
  {
    left: "47%",
    size: 7,
    delay: "1.1s",
    duration: "10s",
    drift: "-6px",
  },
  {
    left: "61%",
    size: 11,
    delay: "5.4s",
    duration: "12s",
    drift: "16px",
  },
  {
    left: "74%",
    size: 5,
    delay: "3s",
    duration: "9.5s",
    drift: "-10px",
  },
  {
    left: "86%",
    size: 13,
    delay: "6.2s",
    duration: "14s",
    drift: "6px",
  },
  {
    left: "93%",
    size: 8,
    delay: "0.6s",
    duration: "10.5s",
    drift: "-8px",
  },
];
const MOTES = [
  {
    left: "10%",
    top: "18%",
    size: 5,
    delay: "0s",
    duration: "7s",
    driftX: "18px",
  },
  {
    left: "26%",
    top: "40%",
    size: 3,
    delay: "1.4s",
    duration: "8.5s",
    driftX: "-14px",
  },
  {
    left: "40%",
    top: "12%",
    size: 4,
    delay: "2.8s",
    duration: "6.5s",
    driftX: "22px",
  },
  {
    left: "55%",
    top: "55%",
    size: 6,
    delay: "0.8s",
    duration: "9s",
    driftX: "-18px",
  },
  {
    left: "68%",
    top: "24%",
    size: 3,
    delay: "3.6s",
    duration: "7.5s",
    driftX: "12px",
  },
  {
    left: "80%",
    top: "48%",
    size: 5,
    delay: "2s",
    duration: "8s",
    driftX: "-20px",
  },
  {
    left: "90%",
    top: "16%",
    size: 4,
    delay: "4.4s",
    duration: "7s",
    driftX: "16px",
  },
];
export function CausticLight() {
  return (
    <div className={styles.layer} aria-hidden="true">
      <div className={styles.caustic} />
      {BUBBLES.map((b, i) => (
        <span
          key={i}
          className={styles.bubble}
          style={{
            left: b.left,
            width: b.size,
            height: b.size,
            animationDelay: b.delay,
            animationDuration: b.duration,
            "--drift": b.drift,
          }}
        />
      ))}
    </div>
  );
}
export function DappledLight() {
  return (
    <div className={styles.layer} aria-hidden="true">
      <div className={styles.dappled} />
      {MOTES.map((m, i) => (
        <span
          key={i}
          className={styles.mote}
          style={{
            left: m.left,
            top: m.top,
            width: m.size,
            height: m.size,
            animationDelay: m.delay,
            animationDuration: m.duration,
            "--drift-x": m.driftX,
          }}
        />
      ))}
    </div>
  );
}
