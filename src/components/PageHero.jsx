import Link from "next/link";
import Image from "next/image";
import styles from "./PageHero.module.css";
import { CausticLight, DappledLight } from "./Atmosphere";
import AmbientBackdrop from "./AmbientBackdrop";
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
  const heroObjectPosition =
    imagePosition || (tone === "reptile" ? "50% 25%" : "50% 50%");
  return (
    <>
      <AmbientBackdrop tone={tone} />

      <section className={styles.hero} data-tone={tone}>
        <div className={styles.bgLayer}>
          {backgroundImage && (
            <Image
              src={backgroundImage}
              alt=""
              fill
              sizes="100vw"
              className={styles.bgImgBehind}
              style={{
                objectFit: "cover",
                objectPosition: "50% 50%",
                filter: "brightness(0.6) saturate(0.95)",
              }}
            />
          )}
          {/* Main hero photo: this is the LCP element on most pages, so it
              loads eagerly (priority) via next/image instead of a plain img. */}
          <Image
            src={image ?? defaultImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className={styles.bgImg}
            style={{
              objectFit: "cover",
              objectPosition: heroObjectPosition,
              transform: "scale(1.03)",
            }}
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
