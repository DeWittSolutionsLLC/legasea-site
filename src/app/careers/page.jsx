import PageHero from "@/components/PageHero";
import styles from "./page.module.css";

export const metadata = {
  title: "Careers",
  description:
    "Open positions at LegaSea Aquarium & The Reptarium — join a team focused on education, conservation, and animal care.",
};

const openings = [
  {
    title: "Animal Educator",
    email: "jay.tingle@thereptarium.com",
  },
  {
    title: "Animal Care",
    email: "mike.wilson@thereptarium.com",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Join the LegaSea Team"
        subtitle="Competitive wages and benefits, room to grow, and a dedicated community doing work that matters for education and conservation."
        crumbLabel="Careers"
        image="/images/ZookeeperHero.jpg"
      />

      <div className={`container section ${styles.pageContainer}`}>
        <p className={styles.intro}>
          At LegaSea Aquarium &amp; The Reptarium, we&apos;re looking for
          people who care about animals and about sharing that care with
          guests. Team members get competitive wages and benefits, real
          opportunities for professional growth, and a place in a close-knit
          community working every day toward education and conservation.
        </p>

        <h2 className={styles.sectionHeading}>Open positions</h2>

        <div className="grid grid-2">
          {openings.map((job) => (
            <div key={job.title} className={`card ${styles.jobCard}`}>
              <h3 className={styles.jobTitle}>{job.title}</h3>
              <p className={styles.jobApply}>
                Apply by emailing{" "}
                <a href={`mailto:${job.email}`} className={styles.jobLink}>
                  {job.email}
                </a>
              </p>
            </div>
          ))}
        </div>

        <div className={`card ${styles.howToApplyCard}`}>
          <h3 className={styles.howToApplyHeading}>How to apply</h3>
          <p className={styles.howToApplyText}>
            Applicants should submit resumes and cover letters via email to
            the appropriate department lead listed above, selecting the
            position that matches their interest.
          </p>
        </div>

        <hr className="divider" />

        <p className={styles.eeoText}>
          All qualified applicants will receive consideration for employment
          without regard to race, color, religion, sex, sexual orientation,
          gender identity, national origin, or protected veteran status and
          will not be discriminated against on the basis of disability.
        </p>
      </div>
    </>
  );
}
