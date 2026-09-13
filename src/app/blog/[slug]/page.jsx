import Link from "next/link";
import { notFound } from "next/navigation";
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
      <Link
        href="/blog"
        style={{
          color: "var(--ocean-600)",
          fontSize: "0.9rem",
        }}
      >
        ← Back to Blog
      </Link>

      <div
        style={{
          fontSize: "3rem",
          margin: "18px 0 6px",
        }}
        aria-hidden="true"
      >
        {post.icon}
      </div>
      <span className="tag">{post.category}</span>
      <h1
        style={{
          marginTop: 10,
        }}
      >
        {post.title}
      </h1>
      <p
        style={{
          color: "var(--ink-500)",
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
            color: "var(--ink-700)",
          }}
        >
          {para}
        </p>
      ))}
    </article>
  );
}
