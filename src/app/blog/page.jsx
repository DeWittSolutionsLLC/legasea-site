import PageHero from "@/components/PageHero";
import NewsletterForm from "@/components/NewsletterForm";
import FeaturedPanel from "@/components/FeaturedPanel";
import CompactList from "@/components/CompactList";
import { blogPosts } from "@/lib/data";
import styles from "./page.module.css";
export const metadata = {
  title: "Blog",
  description:
    "Animal spotlights, conservation updates, behind-the-scenes, and event recaps.",
};
function formatDate(date) {
  return new Date(date).toLocaleDateString(undefined, {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
export default function BlogPage() {
  const [latest, ...rest] = blogPosts;
  return (
    <>
      <PageHero
        eyebrow="The Blog"
        title="Animal spotlights &amp; conservation news"
        subtitle="Fresh posts on our animals, our conservation work, and what's happening on-site."
        crumbLabel="Blog"
      />

      <div className="container section">
        {latest && (
          <div className={styles.featuredWrap}>
            <FeaturedPanel
              href={`/blog/${latest.slug}`}
              icon={latest.icon}
              tag={<span className="tag">{latest.category}</span>}
              title={latest.title}
              description={latest.excerpt}
              footer={
                <span className={styles.featuredMeta}>
                  {formatDate(latest.date)} · {latest.readMinutes} min read
                </span>
              }
            />
          </div>
        )}

        {rest.length > 0 && (
          <CompactList
            items={rest.map((post) => ({
              href: `/blog/${post.slug}`,
              icon: post.icon,
              title: post.title,
              meta: post.excerpt,
              trailing: (
                <span className={styles.listMeta}>
                  {formatDate(post.date)}
                  <br />
                  {post.readMinutes} min read
                </span>
              ),
            }))}
          />
        )}

        <div className={`card ${styles.newsletterCard}`}>
          <h3 className={styles.newsletterHeading}>Never miss a post</h3>
          <p className={styles.newsletterText}>
            Get animal spotlights and event announcements in your inbox.
          </p>
          <div className={styles.newsletterFormWrap}>
            <NewsletterForm />
          </div>
        </div>
      </div>
    </>
  );
}
