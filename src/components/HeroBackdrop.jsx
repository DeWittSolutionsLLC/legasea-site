"use client";

import { useEffect, useRef } from "react";
import styles from "./HeroBackdrop.module.css";
export default function HeroBackdrop() {
  const imgRef = useRef(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches)
      return;
    let raf = 0;
    function handleMove(e) {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const nx = (e.clientX / window.innerWidth - 0.5) * 2;
        const ny = (e.clientY / window.innerHeight - 0.5) * 2;
        if (imgRef.current) {
          imgRef.current.style.transform = `translate(${nx * -12}px, ${ny * -8}px) scale(1.02)`;
        }
      });
    }
    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <div className={styles.frame} aria-hidden="true">
      <div className={styles.buildingWrap}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/FrontOfBuilding.webp"
          alt=""
          className={styles.buildingImg}
        />
      </div>
      <div ref={imgRef} className={styles.imgWrap}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/lizard-hero.png" alt="" className={styles.img} />
      </div>
      <div className={styles.topShade} />
      <div className={styles.overlay} />
      <div className={styles.vignette} />
    </div>
  );
}
