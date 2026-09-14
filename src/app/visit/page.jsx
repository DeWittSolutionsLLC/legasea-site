import Link from "next/link";
import PageHero from "@/components/PageHero";
import FeaturedPanel from "@/components/FeaturedPanel";
import EditorialList from "@/components/EditorialList";
import CompactList from "@/components/CompactList";
import Testimonials from "@/components/Testimonials";
import { IconClock } from "@/components/icons";
import AddToVisitButton from "@/components/AddToVisitButton";
import { experiences } from "@/lib/data";
import styles from "./page.module.css";
export const metadata = {
  title: "Visit",
  description:
    "Browse general admission, guided tours, and animal encounters at LegaSea Aquarium & The Reptarium — all bookable in one place.",
};
export default function VisitPage() {
  const admission = experiences.filter((e) => e.category === "admission");
  const tours = experiences.filter((e) => e.category === "tour");
  const encounters = experiences.filter((e) => e.category === "encounter");
  return (
    <>
      <PageHero
        eyebrow="Plan Your Visit"
        title="One ticket. Every zone, show, and encounter."
        subtitle="Browse general admission, guided tours, and bookable animal encounters below — every price shown is live and bookable right now."
        crumbLabel="Visit"
        image="/images/PlanYourVisitHero.jpg"
      />

      <div className="container section">
        {admission.length > 0 && (
          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionTitle}>
              General Admission
            </h2>
            <p className={styles.sectionSubtitle}>
              Your ticket into every hall and show, all day.
            </p>
            {admission.map((exp) => (
              <FeaturedPanel
                key={exp.slug}
                href={`/experience/${exp.slug}`}
                image={exp.image ?? exp.video?.poster}
                icon={exp.icon}
                tag={<span className="tag tag--coral">{exp.duration}</span>}
                title={exp.name}
                description={exp.description}
                footer={
                  <>
                    <span
                      className={`card-price ${styles.priceLarge}`}
                    >
                      ${exp.price}
                    </span>
                    <AddToVisitButton
                      item={{
                        id: exp.slug,
                        name: exp.name,
                        price: exp.price,
                        duration: exp.duration,
                        image: exp.image ?? exp.video?.poster ?? exp.icon,
                        href: `/experience/${exp.slug}`,
                      }}
                    />
                  </>
                }
              />
            ))}
          </div>
        )}

        {tours.length > 0 && (
          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionTitle}>
              Guided Tours
            </h2>
            <p className={styles.sectionSubtitleTight}>
              Small-group, keeper-led experiences with limited daily slots.
            </p>
            <EditorialList
              items={tours.map((exp) => ({
                href: `/experience/${exp.slug}`,
                image: exp.image ?? exp.video?.poster,
                icon: exp.icon,
                tag: <span className="tag tag--coral">{exp.duration}</span>,
                title: exp.name,
                description: exp.description,
                footer: (
                  <>
                    <span
                      className={`card-price ${styles.priceMedium}`}
                    >
                      ${exp.price}
                    </span>
                    {exp.ageNote && <span className="tag">{exp.ageNote}</span>}
                    <AddToVisitButton
                      item={{
                        id: exp.slug,
                        name: exp.name,
                        price: exp.price,
                        duration: exp.duration,
                        image: exp.image ?? exp.video?.poster ?? exp.icon,
                        href: `/experience/${exp.slug}`,
                      }}
                    />
                  </>
                ),
              }))}
            />
          </div>
        )}

        {encounters.length > 0 && (
          <div className={styles.sectionBlockTight}>
            <h2 className={styles.sectionTitle}>
              Animal Encounters
            </h2>
            <p className={styles.sectionSubtitle}>
              Short, hands-on moments — the same booking flow you&apos;ll find
              at each station QR code.
            </p>
            <CompactList
              items={encounters.map((exp) => ({
                href: `/experience/${exp.slug}`,
                image: exp.image ?? exp.video?.poster,
                icon: exp.icon,
                title: exp.name,
                meta: exp.summary,
                trailing: (
                  <>
                    <span className={styles.durationMeta}>
                      <IconClock size={12} /> {exp.duration}
                    </span>
                    <span className="card-price">${exp.price}</span>
                    <AddToVisitButton
                      item={{
                        id: exp.slug,
                        name: exp.name,
                        price: exp.price,
                        duration: exp.duration,
                        image: exp.image ?? exp.video?.poster ?? exp.icon,
                        href: `/experience/${exp.slug}`,
                      }}
                    />
                  </>
                ),
              }))}
            />
          </div>
        )}

        <div className={styles.sectionBlock}>
          <h2 className={styles.sectionTitle}>What Visitors Are Saying</h2>
          <p className={styles.sectionSubtitle}>
            Real feedback from families, members, and school groups who&apos;ve
            already visited.
          </p>
          <Testimonials />
        </div>

        <div className={styles.sectionBlock}>
          <h2 className={styles.sectionTitle}>Getting Here</h2>
          <p className={styles.sectionSubtitle}>
            We&apos;re at 45550 Van Dyke Ave, Utica, MI 48317 — here&apos;s
            what to know if you&apos;re travelling from out of town.
          </p>
          <div className={styles.travelGrid}>
            <div className={`card ${styles.travelCard}`}>
              <div className="card-body">
                <h3>Flying In</h3>
                <p className={styles.travelCardText}>
                  Detroit Metropolitan Wayne County Airport (DTW) is about 48
                  minutes away (43.8 miles). Bishop International Airport
                  (FNT) is about 46 minutes away (50.9 miles) via I-75 S.
                </p>
              </div>
            </div>
            <div className={`card ${styles.travelCard}`}>
              <div className="card-body">
                <h3>Nearby Hotels</h3>
                <p className={styles.travelCardText}>
                  Staying overnight? You&apos;ll find hotels in Utica, Shelby
                  Township, and Sterling Heights, MI, including Comfort Inn,
                  La Quinta Inn &amp; Suites, Holiday Inn Express &amp;
                  Suites, Hyatt Place Detroit/Utica, and Hampton Inn.
                </p>
              </div>
            </div>
            <div className={`card ${styles.travelCard}`}>
              <div className="card-body">
                <h3>RV &amp; Camping</h3>
                <p className={styles.travelCardText}>
                  Road-tripping in an RV? Cross-n-Creek Campground
                  (Ravenna), Algonac State Park (Marine City), and Pontiac
                  Lake State Recreation Area (Waterford) are all within
                  driving distance.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`card ${styles.groupCallout}`}
        >
          <div>
            <h3 className={styles.groupCalloutTitle}>
              Planning a group visit instead?
            </h3>
            <p className={styles.groupCalloutText}>
              Birthday parties, field trips, and offsite events have their own
              packages.
            </p>
          </div>
          <Link href="/parties" className="btn btn-reptile">
            See Parties &amp; Groups
          </Link>
        </div>
      </div>
    </>
  );
}
