import Image from "next/image";
import styles from "./DetailHero.module.css";
export default function DetailHero({ icon, image, video, alt }) {
  if (video) {
    return (
      <video
        className={styles.video}
        poster={video.poster}
        controls
        playsInline
        preload="none"
        aria-label={alt}
      >
        <source src={video.src} type="video/mp4" />
      </video>
    );
  }
  if (image) {
    return (
      <div className={styles.mediaWrap}>
        <Image
          src={image}
          alt={alt}
          fill
          className={styles.media}
          sizes="(max-width: 760px) 100vw, 560px"
        />
      </div>
    );
  }
  return (
    <div className={styles.mediaWrap}>
      <Image
        src={icon}
        alt={alt}
        fill
        className={styles.media}
        sizes="(max-width: 760px) 100vw, 560px"
      />
    </div>
  );
}
