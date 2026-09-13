"use client";

import { useEffect, useRef, useState } from "react";
export default function HeroVideo({ className }) {
  const videoRef = useRef(null);
  const [allowMotion, setAllowMotion] = useState(true);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setAllowMotion(!query.matches);
    const handler = (e) => setAllowMotion(!e.matches);
    query.addEventListener("change", handler);
    return () => query.removeEventListener("change", handler);
  }, []);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (allowMotion) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [allowMotion]);
  return (
    <video
      ref={videoRef}
      className={className}
      poster="/images/LegaseaHeroVideo-poster.jpg"
      muted
      loop
      playsInline
      autoPlay
      aria-hidden="true"
    >
      <source src="/images/LegaseaHeroVideo-web.mp4" type="video/mp4" />
    </video>
  );
}
