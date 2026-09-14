import PageHero from "@/components/PageHero";
import ShowScheduleList from "@/components/ShowScheduleList";
export const metadata = {
  title: "Show Schedule",
  description:
    "Today's full show and keeper talk schedule at LegaSea Aquarium & The Reptarium.",
};
export default function ShowsPage() {
  return (
    <>
      <PageHero
        eyebrow="Today's Schedule"
        title="Shows &amp; keeper talks"
        subtitle="Every show is included with general admission. Times update live — the current or next show is always highlighted."
        tone="reptile"
        crumbLabel="Show Schedule"
        image="/images/ShowScheduleHero.jpg"
      />

      <div className="container section">
        <ShowScheduleList />
      </div>
    </>
  );
}
