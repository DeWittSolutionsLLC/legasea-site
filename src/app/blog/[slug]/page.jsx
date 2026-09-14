import Link from "next/link";
import { notFound } from "next/navigation";
import AmbientBackdrop from "@/components/AmbientBackdrop";
import { blogPosts, findBlogPost } from "@/lib/data";
import styles from "./page.module.css";
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
    <article className={`container section ${styles.article}`}>
      <AmbientBackdrop tone="ocean" />
      <Link href="/blog" className={styles.backLink}>
        ← Back to Blog
      </Link>

      <div className={styles.thumbnail}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.icon}
          alt={post.title}
          className={styles.thumbnailImage}
        />
      </div>
      <span className="tag">{post.category}</span>
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.meta}>
        By {post.author} ·{" "}
        {new Date(post.date).toLocaleDateString(undefined, {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}{" "}
        · {post.readMinutes} min read
      </p>

      {post.body.map((para, i) => (
        <p key={i} className={`lede ${styles.bodyParagraph}`}>
          {para}
        </p>
      ))}
    </article>
  );
}
