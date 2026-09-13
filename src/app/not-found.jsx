import Link from "next/link";
export default function NotFound() {
  return (
    <div
      className="container section"
      style={{
        textAlign: "center",
        padding: "100px 20px",
      }}
    >
      <div
        style={{
          fontSize: "3.4rem",
          marginBottom: 10,
        }}
        aria-hidden="true"
      >
        🐠💨
      </div>
      <h1>This page swam away</h1>
      <p
        className="lede"
        style={{
          margin: "0 auto 24px",
        }}
      >
        We couldn&apos;t find that page. Let&apos;s get you back on route.
      </p>
      <div
        style={{
          display: "flex",
          gap: 12,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Link href="/" className="btn btn-primary">
          Back to Home
        </Link>
        <Link href="/visit" className="btn btn-outline">
          Plan a Visit
        </Link>
      </div>
    </div>
  );
}
