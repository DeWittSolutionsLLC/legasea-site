import PageHero from "@/components/PageHero";
import ProgramTimeline from "@/components/ProgramTimeline";
import { programs } from "@/lib/data";
export const metadata = {
  title: "Zookeeper Programs",
  description:
    "Tiny Tots, Lil', Junior, and Teen Zookeeper programs at LegaSea.",
};
export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Zookeeper Programs"
        title="A class for every age, 2 to 15"
        subtitle="Hands-on animal care classes that grow with your kid — from a first sensory visit to a pre-professional keeper shadow day."
        tone="reptile"
        crumbLabel="Zookeeper Programs"
        image="/images/ZookeeperHero.png"
      />

      <div className="container section">
        <ProgramTimeline
          steps={programs.map((p) => ({
            href: `/programs/${p.slug}`,
            image: p.image,
            icon: p.icon,
            title: `${p.name} · ${p.ageRange}`,
            description: p.summary,
            footer: (
              <>
                <span className="card-price">${p.price}/session</span>
                <span className="tag">{p.cadence}</span>
                {p.waitlist && <span className="tag tag--coral">Waitlist</span>}
              </>
            ),
          }))}
        />
      </div>
    </>
  );
}
