import { testimonials } from "@/lib/data";
import { IconStar, IconQuote } from "@/components/icons";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  return (
    <div className={styles.grid}>
      {testimonials.map((t) => (
        <figure className={`card ${styles.testimonialCard}`} key={t.id}>
          <IconQuote size={20} className={styles.quoteMark} />
          <div
            className={styles.stars}
            role="img"
            aria-label={`Rated ${t.rating} out of 5 stars`}
          >
            {Array.from({ length: 5 }, (_, i) => (
              <IconStar
                key={i}
                size={15}
                filled={i < t.rating}
                className={i < t.rating ? styles.starFilled : styles.starEmpty}
              />
            ))}
          </div>
          <blockquote className={styles.quote}>&ldquo;{t.quote}&rdquo;</blockquote>
          <figcaption className={styles.meta}>
            <span className={styles.name}>{t.name}</span>
            <span className={styles.context}>{t.context}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
