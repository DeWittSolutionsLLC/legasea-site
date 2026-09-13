import Link from "next/link";
import styles from "./ProgramTimeline.module.css";
export default function ProgramTimeline({ steps }) {
  return (
    <div className={styles.timeline}>
      {steps.map((step) => (
        <div className={styles.step} key={step.href}>
          <div className={styles.node} aria-hidden="true">
            {step.icon}
          </div>
          <Link href={step.href} className={styles.card}>
            {step.image && (
              <div className={styles.media}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={step.image} alt="" loading="lazy" />
              </div>
            )}
            <div className={styles.body}>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.description}>{step.description}</p>
              <div className={styles.footer}>{step.footer}</div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
