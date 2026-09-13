import PageHero from "@/components/PageHero";
import NewsletterForm from "@/components/NewsletterForm";
import FeaturedPanel from "@/components/FeaturedPanel";
import CompactList from "@/components/CompactList";
import { blogPosts } from "@/lib/data";
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
          <div
            style={{
              marginBottom: 40,
            }}
          >
            <FeaturedPanel
              href={`/blog/${latest.slug}`}
              icon={latest.icon}
              tag={<span className="tag">{latest.category}</span>}
              title={latest.title}
              description={latest.excerpt}
              footer={
                <span
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    fontSize: "0.88rem",
                  }}
                >
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
                <span
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--glass-text-dim)",
                    textAlign: "right",
                  }}
                >
                  {formatDate(post.date)}
                  <br />
                  {post.readMinutes} min read
                </span>
              ),
            }))}
          />
        )}

        <div
          className="card"
          style={{
            padding: 32,
            textAlign: "center",
            marginTop: 56,
          }}
        >
          <h3
            style={{
              marginBottom: 6,
            }}
          >
            Never miss a post
          </h3>
          <p
            style={{
              color: "var(--glass-text-dim)",
              marginBottom: 18,
            }}
          >
            Get animal spotlights and event announcements in your inbox.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <NewsletterForm />
          </div>
        </div>
      </div>
    </>
  );
}
