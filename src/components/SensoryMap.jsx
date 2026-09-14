import IconBadge from "@/components/IconBadge";
import { zones } from "@/lib/data";
import styles from "./SensoryMap.module.css";

// Rank each sensory level 1 (calmest) - 3 (most intense) so the dot meter
// and tag color can share one scale, even though "light" uses "bright"
// instead of "high" for its top value.
const LEVEL_RANK = { low: 1, moderate: 2, high: 3, bright: 3 };
const LEVEL_TAG_CLASS = {
  low: "tag--reptile",
  moderate: "",
  high: "tag--coral",
  bright: "tag--coral",
};
const LEVEL_LABEL = {
  low: "Low",
  moderate: "Moderate",
  high: "High",
  bright: "Bright",
};

function SensoryMeter({ label, value }) {
  const rank = LEVEL_RANK[value] ?? 1;
  const tagClass = LEVEL_TAG_CLASS[value] ?? "";
  return (
    <div className={styles.meterRow}>
      <span className={styles.meterLabel}>{label}</span>
      <span className={styles.meterDots} data-rank={rank} aria-hidden="true">
        {[1, 2, 3].map((dot) => (
          <span key={dot} className={styles.dot} data-filled={dot <= rank} />
        ))}
      </span>
      <span className={`tag ${tagClass}`.trim()}>
        {LEVEL_LABEL[value] ?? value}
      </span>
    </div>
  );
}

// Renders every zone's sound/light/crowding profile as a grid of cards, so
// visitors with sensory sensitivities can plan a route ahead of time — the
// same idea behind the printed sensory maps zoos and aquariums publish.
export default function SensoryMap() {
  return (
    <div className={styles.grid} aria-label="Sensory map by zone">
      {zones.map((zone) => (
        <div key={zone.slug} className={`card ${styles.zoneCard}`}>
          <div className={styles.zoneHeader}>
            <IconBadge src={zone.icon} size={40} aria-hidden="true" />
            <h3 className={styles.zoneName}>{zone.name}</h3>
          </div>

          <div className={styles.meters}>
            <SensoryMeter label="Sound" value={zone.sensory.sound} />
            <SensoryMeter label="Light" value={zone.sensory.light} />
            <SensoryMeter label="Crowding" value={zone.sensory.crowding} />
          </div>

          {zone.sensory.touch && (
            <span className={`tag ${styles.touchTag}`}>Hands-on element</span>
          )}

          <p className={styles.notes}>{zone.sensory.notes}</p>
        </div>
      ))}
    </div>
  );
}
