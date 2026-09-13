import PageHero from "@/components/PageHero";
import ZoneMap from "@/components/ZoneMap";
export const metadata = {
  title: "Zone Map & Self-Guided Tour",
  description:
    "Explore LegaSea's six zones and follow a suggested self-guided tour route.",
};
export default function MapPage() {
  return (
    <>
      <PageHero
        eyebrow="Wayfinding"
        title="Zone map &amp; self-guided tour"
        subtitle="Six zones, one suggested route. Tap any pin for details, or start the tour to follow it step by step."
        crumbLabel="Zone Map"
        image="/images/FrontOfBuilding.webp"
      />

      <div className="container section">
        <ZoneMap />
      </div>
    </>
  );
}
