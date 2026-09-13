import { notFound } from "next/navigation";
import ProgramRegister from "@/components/ProgramRegister";
import DetailHero from "@/components/DetailHero";
import { findProgram, programs } from "@/lib/data";
import styles from "@/app/experience/[slug]/page.module.css";
export function generateStaticParams() {
  return programs.map((p) => ({
    slug: p.slug,
  }));
}
export async function generateMetadata(props) {
  const { slug } = await props.params;
  const program = findProgram(slug);
  if (!program) return {};
  return {
    title: program.name,
    description: program.summary,
  };
}
export default async function ProgramDetailPage(props) {
  const { slug } = await props.params;
  const program = findProgram(slug);
  if (!program) notFound();
  return (
    <div className="container section">
      <div className={styles.grid}>
        <div>
          <DetailHero
            icon={program.icon}
            image={program.image}
            alt={program.name}
          />
          <span className="tag tag--reptile">{program.ageRange}</span>
          <h1
            style={{
              marginTop: 10,
            }}
          >
            {program.name}
          </h1>
          <p className="lede">{program.description}</p>
        </div>

        <div className={styles.sticky}>
          <ProgramRegister program={program} />
        </div>
      </div>
    </div>
  );
}
