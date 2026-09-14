import Link from "next/link";
import { notFound } from "next/navigation";
import AmbientBackdrop from "@/components/AmbientBackdrop";
import { blogPosts, findBlogPost } from "@/lib/data";
export function generateStaticParams() {
  return blogPosts.map((p) => ({
    slug: p.slug,
  }));
}
export async function generateMetadata(props) {
  const { slug } = await props.params;
  const post = findBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}
export default async function BlogPostPage(props) {
  const { slug } = await props.params;
  const post = findBlogPost(slug);
  if (!post) notFound();
  return (
    <article
      className="container section"
      style={{
        maxWidth: 760,
      }}
    >
      <AmbientBackdrop tone="ocean" />
      <Link
        href="/blog"
        style={{
          color: "var(--glass-text)",
          fontSize: "0.9rem",
        }}
      >
        ← Back to Blog
      </Link>

      <div
        style={{
          width: 72,
          height: 72,
          borderRadius: "var(--radius-md)",
          overflow: "hidden",
          margin: "18px 0 6px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.icon}
          alt={post.title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <span className="tag">{post.category}</span>
      <h1
        style={{
          marginTop: 10,
          color: "var(--glass-text)",
        }}
      >
        {post.title}
      </h1>
      <p
        style={{
          color: "var(--glass-text-dim)",
          marginBottom: 30,
        }}
      >
        By {post.author} ·{" "}
        {new Date(post.date).toLocaleDateString(undefined, {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}{" "}
        · {post.readMinutes} min read
      </p>

      {post.body.map((para, i) => (
        <p
          key={i}
          className="lede"
          style={{
            color: "var(--glass-text-dim)",
          }}
        >
          {para}
        </p>
      ))}
    </article>
  );
}
