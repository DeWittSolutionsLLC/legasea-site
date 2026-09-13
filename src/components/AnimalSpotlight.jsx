"use client";

import { useState } from "react";
import styles from "./AnimalSpotlight.module.css";
import { IconChevronDown } from "./icons";
import { CausticLight } from "./Atmosphere";
export default function AnimalSpotlight({
  name,
  tagline,
  photo,
  badge,
  teaser,
  bio,
}) {
  const [open, setOpen] = useState(false);
  return (
    <section className={styles.wrap}>
      <div className={styles.media}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={photo} alt="" />
      </div>
      <div className={styles.body}>
        <CausticLight />
        <div className={styles.bodyInner}>
          <span className={styles.badge}>{badge}</span>
          <h2 className={`${styles.name} display`}>{name}</h2>
          <p className={styles.tagline}>{tagline}</p>
          <p className={styles.teaser}>{teaser}</p>

          <button
            type="button"
            className={styles.toggle}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
          >
            {open ? "Show less" : `Read ${name.split(" ")[0]}'s full story`}
            <span className={styles.chevron} data-open={open}>
              <IconChevronDown size={14} />
            </span>
          </button>

          <div className={styles.expand} data-open={open}>
            <div className={styles.expandInner}>
              {bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
