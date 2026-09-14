import Link from "next/link";
import styles from "./page.module.css";
import { blogPosts, experiences, zones, findBlogPost } from "@/lib/data";
import TodayStrip from "@/components/TodayStrip";
import HeroVideo from "@/components/HeroVideo";
import HeroBackdrop from "@/components/HeroBackdrop";
import { CausticLight, DappledLight } from "@/components/Atmosphere";
import MediaThumb from "@/components/MediaThumb";
import ForegroundAccents from "@/components/ForegroundAccents";
import SocialFeed from "@/components/SocialFeed";
import Testimonials from "@/components/Testimonials";
import AnimalSpotlight from "@/components/AnimalSpotlight";
import IconBadge from "@/components/IconBadge";
import AddToVisitButton from "@/components/AddToVisitButton";
import {
  IconClock,
  IconTicket,
  IconLeaf,
  IconChevronDown,
} from "@/components/icons";
function EncounterCard({ exp }) {
  const href = `/experience/${exp.slug}`;
  return (
    <div className={styles.glassCard}>
      <Link href={href} style={{ display: "contents" }} aria-label={exp.name}>
        <MediaThumb
          image={exp.image ?? exp.video?.poster}
          icon={exp.icon}
          alt={exp.name}
          background="rgba(255,255,255,0.05)"
        />
      </Link>
      <div className={styles.glassCardBody}>
        <Link href={href} style={{ display: "contents" }}>
          <span className={styles.glassTag}>
            <IconClock size={12} /> {exp.duration}
          </span>
          <h3>{exp.name}</h3>
          <p>{exp.summary}</p>
        </Link>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 10,
            flexWrap: "wrap",
          }}
        >
          <span className={styles.glassPrice}>${exp.price}</span>
          <AddToVisitButton
            item={{
              id: exp.slug,
              name: exp.name,
              price: exp.price,
              duration: exp.duration,
              image: exp.image ?? exp.video?.poster ?? exp.icon,
              href,
            }}
          />
        </div>
      </div>
    </div>
  );
}
export default function Home() {
  const underwater = experiences.filter((e) => e.zone === "deep-tank");
  const jungle = experiences.filter((e) =>
    ["hold-a-reptile", "meet-a-capybara", "gem-mining"].includes(e.slug),
  );
  const novaPost = findBlogPost("meet-nova-the-cownose-ray");
  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className={styles.hero}>
        <HeroBackdrop />
        <DappledLight />

        <div className={styles.heroInner}>
          <span className={styles.heroBadge}>
            <IconLeaf size={14} />
            Open Wed–Mon · Closed Tuesdays
          </span>
          <h1 className={`${styles.heroTitle} display`}>
            Come Experience The<br></br>
            <em>LegaSea DIFFERENCE.</em>
          </h1>
          <p className={styles.heroSub}>
            LegaSea Aquarium & The Reptarium brings you closer to incredible
            reptiles, aquatic life, and mammals through interactive exhibits,
            daily shows, and unforgettable animal experiences.
          </p>
          <div className={styles.heroActions}>
            <Link href="/visit" className={`btn ${styles.btnGlow}`}>
              BOOK YOUR VISIT
            </Link>
            <Link href="/map" className={`btn ${styles.btnGlass}`}>
              EXPLORE THE EXPERIENCE
            </Link>
          </div>
        </div>

        <span className={styles.scrollCue} aria-hidden="true">
          <IconChevronDown size={20} />
        </span>
      </section>

      <div className={styles.leadIn}>
        <div className="container">
          <div className={styles.statsRow}>
            <div className={styles.statCard}>
              <div className={styles.statNum}>6</div>
              <div className={styles.statLabel}>Zones to explore</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNum}>15+</div>
              <div className={styles.statLabel}>
                Bookable encounters &amp; tours
              </div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNum}>6</div>
              <div className={styles.statLabel}>
                Daily shows &amp; keeper talks
              </div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNum}>5</div>
              <div className={styles.statLabel}>Hidden stickers to find</div>
            </div>
          </div>
          <TodayStrip />
        </div>
      </div>

      {/* ---------------- Meet Nova ---------------- */}
      {novaPost && (
        <AnimalSpotlight
          name="Nova"
          tagline="Resident Cownose Ray · Deep Tank Theater"
          photo="/images/legaseaRayVideo-poster.jpg"
          badge="Animal Spotlight"
          teaser={novaPost.excerpt}
          bio={novaPost.body}
        />
      )}

      {/* ---------------- Underwater encounters ---------------- */}
      <section
        className={`${styles.zoneBand} ${styles["zoneBand--underwater"]}`}
      >
        <div className={styles.zoneBandBg}>
          <HeroVideo className={styles.zoneBandVideo} />
          <div className={styles.zoneBandOverlay} />
          <CausticLight />
        </div>
        <ForegroundAccents tone="coral" />
        <div className={styles.zoneBandInner}>
          <div className={styles.zoneBandHead}>
            <span
              className="eyebrow eyebrow--ocean"
              style={{
                background: "rgba(95,227,255,0.15)",
                color: "var(--reef-glow)",
              }}
            >
              Descend
            </span>
            <h2 className="display">Into the reef</h2>
            <p>
              Scan a station QR code tank-side, or reserve ahead — either way
              you&apos;ll see live slot availability and book in seconds.
            </p>
          </div>
          <div className={styles.glassGrid}>
            {underwater.map((exp) => (
              <EncounterCard exp={exp} key={exp.slug} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Jungle encounters ---------------- */}
      <section className={`${styles.zoneBand} ${styles["zoneBand--jungle"]}`}>
        <DappledLight />
        <ForegroundAccents tone="jungle" />
        <div className={styles.zoneBandInner}>
          <div className={styles.zoneBandHead}>
            <span
              className="eyebrow"
              style={{
                background: "rgba(226,192,115,0.16)",
                color: "var(--canopy-glow)",
              }}
            >
              Wander In
            </span>
            <h2 className="display">The Reptarium canopy</h2>
            <p>
              From gentle mammal visits to hands-on reptile encounters — every
              stop is a short, keeper-supervised moment.
            </p>
          </div>
          <div className={styles.glassGrid}>
            {jungle.map((exp) => (
              <EncounterCard exp={exp} key={exp.slug} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Zone map bridge ---------------- */}
      <section className={styles.bridge}>
        <div className="container">
          <div className={styles.zoneBandHead}>
            <span className="eyebrow">Wayfinding</span>
            <h2 className="display">Six zones, one self-guided trail</h2>
            <p>
              Follow the suggested path or pick your own — the trail map shows
              you what&apos;s nearby and how to get there.
            </p>
          </div>
          <div className={styles.zonesStrip}>
            {zones.map((zone) => (
              <Link
                href={`/map#${zone.slug}`}
                key={zone.slug}
                className={styles.zoneChip}
              >
                <div className={styles.zoneChipIcon} aria-hidden="true">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={zone.icon} alt="" />
                </div>
                <strong
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 600,
                  }}
                >
                  {zone.name}
                </strong>
              </Link>
            ))}
          </div>
          <div
            style={{
              textAlign: "center",
              marginTop: 28,
            }}
          >
            <Link href="/map" className={`btn ${styles.btnGlass}`}>
              Open Full Trail Map
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- Stamp hunt ---------------- */}
      <section
        className={`${styles.zoneBand} ${styles["zoneBand--jungle"]}`}
        style={{
          paddingTop: 0,
        }}
      >
        <ForegroundAccents tone="jungle" />
        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 3,
          }}
        >
          <div className={styles.stampPanel}>
            <span
              className="eyebrow"
              style={{
                background: "rgba(226,192,115,0.16)",
                color: "var(--canopy-glow)",
              }}
            >
              Scavenger Hunt
            </span>
            <h2
              className="display"
              style={{
                color: "white",
              }}
            >
              Find every hidden sticker, win a prize
            </h2>
            <p
              style={{
                color: "var(--glass-text-dim)",
                maxWidth: 560,
                margin: "0 auto 22px",
              }}
            >
              Five animal-shaped stickers are hidden across the facility. Scan
              each one to log a digital stamp — collect all five and redeem a
              wristband or pin at guest services.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 10,
                marginBottom: 16,
              }}
            >
              {[
                "/images/icons/icon-fish.jpg",
                "/images/icons/icon-lizard.jpg",
                "/images/icons/icon-frog.jpg",
                "/images/icons/icon-ray.jpg",
                "/images/icons/icon-crab.jpg",
              ].map((src) => (
                <IconBadge
                  key={src}
                  src={src}
                  size={40}
                  style={{ border: "2px solid rgba(255,255,255,0.4)" }}
                />
              ))}
            </div>
            <Link href="/stamps" className={`btn ${styles.btnGlow}`}>
              Start the Hunt
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- Blog ---------------- */}
      <section className={`${styles.zoneBand} ${styles["zoneBand--mixed"]}`}>
        <DappledLight />
        <CausticLight />
        <ForegroundAccents tone="mixed" />
        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 3,
          }}
        >
          <div className={styles.zoneBandHead}>
            <span className="eyebrow">From the Blog</span>
            <h2 className="display">
              Animal spotlights &amp; conservation news
            </h2>
          </div>
          <div className={styles.glassGrid}>
            {blogPosts.slice(0, 3).map((post) => (
              <Link
                href={`/blog/${post.slug}`}
                key={post.slug}
                className={styles.glassCard}
              >
                <div
                  className="card-media"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.icon}
                    alt={post.title}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className={styles.glassCardBody}>
                  <span className={styles.glassTag}>{post.category}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Testimonials ---------------- */}
      <section className={styles.testimonialSection}>
        <div className="container">
          <div className={styles.zoneBandHead}>
            <span className="eyebrow">What Guests Say</span>
            <h2 className="display">Loved by families like yours</h2>
            <p>Real reviews from recent visitors — every quote is unedited.</p>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* ---------------- Social feed ---------------- */}
      <section className={styles.blogSection}>
        <div className="container">
          <div className={styles.zoneBandHead}>
            <span className="eyebrow">@legaseaaquarium</span>
            <h2 className="display">Follow along</h2>
            <p>Real moments from the floor — tag us in yours.</p>
          </div>
          <SocialFeed />
          <div
            style={{
              textAlign: "center",
              marginTop: 28,
            }}
          >
            <Link href="/connect" className={`btn ${styles.btnGlass}`}>
              See All Our Channels
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- Final CTA ---------------- */}
      <section className={styles.ctaBand}>
        <div className={styles.ctaBandBg}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/foliage/aquaticbackground.webp"
            alt=""
            loading="lazy"
            className={styles.ctaBandImg}
          />
          <div className={styles.ctaBandOverlay} />
          <CausticLight />
        </div>
        <div className={styles.ctaBandInner}>
          <span className={styles.heroBadge}>
            <IconTicket size={14} />
            From $28
          </span>
          <h2 className="display">Ready to explore?</h2>
          <p
            style={{
              color: "var(--glass-text-dim)",
              margin: "14px 0 28px",
            }}
          >
            General admission includes every zone, every show, and every keeper
            talk.
          </p>
          <Link href="/visit" className={`btn ${styles.btnGlow}`}>
            Get Tickets
          </Link>
        </div>
      </section>
    </>
  );
}
