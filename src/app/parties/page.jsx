import PageHero from "@/components/PageHero";
import EditorialList from "@/components/EditorialList";
import { parties } from "@/lib/data";
export const metadata = {
  title: "Parties & Groups",
  description:
    "Birthday parties, Bring-the-Zoo-to-You visits, field trips, and offsite events at LegaSea Aquarium & The Reptarium.",
};
export default function PartiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Parties & Groups"
        title="Bring the group — we'll bring the animals"
        subtitle="From a birthday room to a full offsite event, pick the package below and request your date."
        tone="reptile"
        crumbLabel="Parties & Groups"
        image="/images/BirthdayPartyHero.png"
      />

      <div className="container section">
        <EditorialList
          items={parties.map((p) => ({
            href: `/parties/${p.slug}`,
            image: p.image,
            icon: p.icon,
            title: p.name,
            description: p.description,
            footer: (
              <>
                <span
                  className="card-price"
                  style={{
                    fontSize: "1.15rem",
                  }}
                >
                  From ${p.startingPrice}
                </span>
                <span
                  style={{
                    color: "var(--glass-text-dim)",
                    fontSize: "0.9rem",
                  }}
                >
                  {p.summary}
                </span>
              </>
            ),
            linkLabel: "See what's included",
          }))}
        />
      </div>
    </>
  );
}
