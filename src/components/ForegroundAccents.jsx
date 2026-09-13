"use client";

import { useEffect, useRef } from "react";
import styles from "./ForegroundAccents.module.css";
const ASSETS = {
  jungle: {
    left: "/images/foliage/panel-jungle-left.webp",
    right: "/images/foliage/panel-jungle-right.webp",
  },
  coral: {
    left: "/images/foliage/panel-coral-left.webp",
    right: "/images/foliage/panel-coral-right.webp",
  },
  // Half Reptarium, half Aquarium — trees framing one side, reef the other.
  mixed: {
    left: "/images/foliage/panel-jungle-left.webp",
    right: "/images/foliage/panel-coral-right.webp",
  },
};
export default function ForegroundAccents({ tone }) {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const layerRef = useRef(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches)
      return;
    const container = layerRef.current;
    if (!container) return;
    let raf = 0;
    function handleMove(e) {
      if (raf || !container) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const rect = container.getBoundingClientRect();
        const relY = (e.clientY - rect.top) / rect.height;
        if (relY < -0.5 || relY > 1.5) return;
        const nx = (e.clientX / window.innerWidth - 0.5) * 2;
        if (leftRef.current)
          leftRef.current.style.transform = `translateX(${nx * -10}px)`;
        if (rightRef.current)
          rightRef.current.style.transform = `translateX(${nx * -10}px)`;
      });
    }
    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  const src = ASSETS[tone];
  return (
    <div className={styles.layer} ref={layerRef} aria-hidden="true">
      <div ref={leftRef} className={`${styles.piece} ${styles.left}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src.left} alt="" />
      </div>
      <div ref={rightRef} className={`${styles.piece} ${styles.right}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src.right} alt="" />
      </div>
    </div>
  );
}
