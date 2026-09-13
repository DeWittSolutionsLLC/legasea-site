import Link from "next/link";
import styles from "./PageHero.module.css";
import { CausticLight, DappledLight } from "./Atmosphere";
export default function PageHero({
  eyebrow,
  title,
  subtitle,
  tone = "ocean",
  crumbLabel,
  image,
  imagePosition,
  backgroundImage,
  children,
}) {
  const defaultImage =
    tone === "reptile"
      ? "/images/foliage/background-rainforest.webp"
      : "/images/foliage/aquaticbackground.webp";
  return (
    <>
      <div className={styles.ambient} data-tone={tone} aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={defaultImage} alt="" className={styles.ambientImg} />
        {tone === "reptile" ? <DappledLight /> : <CausticLight />}
      </div>

      <section className={styles.hero} data-tone={tone}>
        <div className={styles.bgLayer}>
          {backgroundImage && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={backgroundImage} alt="" className={styles.bgImgBehind} />
          )}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image ?? defaultImage}
            alt=""
            className={styles.bgImg}
            style={
              imagePosition ? { objectPosition: imagePosition } : undefined
            }
          />
          <div className={styles.overlay} />
          {tone === "reptile" ? <DappledLight /> : <CausticLight />}
        </div>

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
            {children}
          </div>
        </div>

        <div className={styles.fade} />
      </section>
    </>
  );
}
