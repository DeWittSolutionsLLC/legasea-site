import Link from "next/link";
import IconBadge from "@/components/IconBadge";
export default function NotFound() {
  return (
    <div
      className="container section"
      style={{
        textAlign: "center",
        padding: "100px 20px",
      }}
    >
      <IconBadge
        src="/images/icons/icon-fish.jpg"
        size={96}
        style={{ margin: "0 auto 10px" }}
      />
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
