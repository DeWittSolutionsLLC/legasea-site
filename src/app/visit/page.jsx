import Link from "next/link";
import PageHero from "@/components/PageHero";
import FeaturedPanel from "@/components/FeaturedPanel";
import EditorialList from "@/components/EditorialList";
import CompactList from "@/components/CompactList";
import { IconClock } from "@/components/icons";
import { experiences } from "@/lib/data";
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
        image="/images/PlanYourVisitHero.png"
      />

      <div className="container section">
        {admission.length > 0 && (
          <div
            style={{
              marginBottom: 64,
            }}
          >
            <h2
              style={{
                marginBottom: 4,
                color: "var(--glass-text)",
              }}
            >
              General Admission
            </h2>
            <p
              style={{
                color: "var(--glass-text-dim)",
                marginBottom: 20,
              }}
            >
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
                  <span
                    className="card-price"
                    style={{
                      fontSize: "1.3rem",
                    }}
                  >
                    ${exp.price}
                  </span>
                }
              />
            ))}
          </div>
        )}

        {tours.length > 0 && (
          <div
            style={{
              marginBottom: 64,
            }}
          >
            <h2
              style={{
                marginBottom: 4,
                color: "var(--glass-text)",
              }}
            >
              Guided Tours
            </h2>
            <p
              style={{
                color: "var(--glass-text-dim)",
                marginBottom: 12,
              }}
            >
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
                      className="card-price"
                      style={{
                        fontSize: "1.15rem",
                      }}
                    >
                      ${exp.price}
                    </span>
                    {exp.ageNote && <span className="tag">{exp.ageNote}</span>}
                  </>
                ),
              }))}
            />
          </div>
        )}

        {encounters.length > 0 && (
          <div
            style={{
              marginBottom: 56,
            }}
          >
            <h2
              style={{
                marginBottom: 4,
                color: "var(--glass-text)",
              }}
            >
              Animal Encounters
            </h2>
            <p
              style={{
                color: "var(--glass-text-dim)",
                marginBottom: 20,
              }}
            >
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
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 4,
                        fontSize: "0.8rem",
                        color: "var(--glass-text-dim)",
                      }}
                    >
                      <IconClock size={12} /> {exp.duration}
                    </span>
                    <span className="card-price">${exp.price}</span>
                  </>
                ),
              }))}
            />
          </div>
        )}

        <div
          className="card"
          style={{
            padding: 28,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <div>
            <h3
              style={{
                marginBottom: 4,
              }}
            >
              Planning a group visit instead?
            </h3>
            <p
              style={{
                margin: 0,
                color: "var(--glass-text-dim)",
              }}
            >
              Birthday parties, field trips, and offsite events have their own
              packages.
            </p>
          </div>
          <Link href="/parties" className="btn btn-ocean">
            See Parties &amp; Groups
          </Link>
        </div>
      </div>
    </>
  );
}
