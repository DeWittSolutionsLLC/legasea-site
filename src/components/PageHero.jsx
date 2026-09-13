import Link from "next/link";
import styles from "./PageHero.module.css";
import { CausticLight, DappledLight } from "./Atmosphere";
import ForegroundAccents from "./ForegroundAccents";
export default function PageHero({
  eyebrow,
  title,
  subtitle,
  tone = "ocean",
  crumbLabel,
  image,
}) {
  const defaultImage =
    tone === "reptile"
      ? "/images/foliage/background-rainforest.webp"
      : "/images/foliage/aquaticbackground.webp";
  return (
    <section className={styles.hero} data-tone={tone}>
      <div className={styles.bgLayer}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image ?? defaultImage} alt="" className={styles.bgImg} />
        <div className={styles.overlay} />
        {tone === "reptile" ? <DappledLight /> : <CausticLight />}
      </div>

      {!image && (
        <ForegroundAccents tone={tone === "reptile" ? "jungle" : "coral"} />
      )}

      <div className={styles.inner}>
        <div className={styles.panel}>
          <div className={styles.crumb}>
            <Link href="/">Home</Link> {crumbLabel ? `/ ${crumbLabel}` : ""}
          </div>
          <span
            className="eyebrow"
            style={{
              background: "rgba(255,255,255,0.18)",
              color: "white",
            }}
          >
            {eyebrow}
          </span>
          <h1 className={`${styles.title} display`}>{title}</h1>
          {subtitle && <p className={styles.sub}>{subtitle}</p>}
        </div>
      </div>

      <div className={styles.fade} />
    </section>
  );
}
