import styles from "./AmbientBackdrop.module.css";
import { CausticLight, DappledLight } from "./Atmosphere";

/**
 * Persistent, fixed-position, low-opacity photo backdrop used behind page
 * content. This is the same ambient layer PageHero renders behind its hero
 * section, extracted so pages without a PageHero (e.g. detail/product pages)
 * can still get the moody photo backdrop that the dark frosted-glass cards
 * are designed to float over.
 */
export default function AmbientBackdrop({ tone = "ocean" }) {
  const defaultImage =
    tone === "reptile"
      ? "/images/foliage/background-rainforest.webp"
      : "/images/foliage/aquaticbackground.webp";
  return (
    <div className={styles.ambient} data-tone={tone} aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={defaultImage} alt="" className={styles.ambientImg} />
      {tone === "reptile" ? <DappledLight /> : <CausticLight />}
    </div>
  );
}
