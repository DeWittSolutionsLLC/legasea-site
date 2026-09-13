import PageHero from "@/components/PageHero";
import NewsletterForm from "@/components/NewsletterForm";
export const metadata = {
  title: "Connect",
  description:
    "Every LegaSea social channel, blog, and newsletter in one place.",
};
const channels = [
  {
    label: "Instagram",
    icon: "📸",
    handle: "@legaseaaquarium",
    href: "https://instagram.com",
  },
  {
    label: "TikTok",
    icon: "🎵",
    handle: "@legaseaaquarium",
    href: "https://tiktok.com",
  },
  {
    label: "YouTube",
    icon: "▶️",
    handle: "LegaSea Aquarium & Reptarium",
    href: "https://youtube.com",
  },
  {
    label: "Facebook",
    icon: "👍",
    handle: "LegaSea Aquarium & The Reptarium",
    href: "https://facebook.com",
  },
  {
    label: "Blog",
    icon: "📝",
    handle: "Animal spotlights & updates",
    href: "/blog",
  },
];
export default function ConnectPage() {
  return (
    <>
      <PageHero
        eyebrow="Connect"
        title="Every channel, one link"
        subtitle="Follow along, or grab this page's link for print materials, email signatures, and QR codes."
        crumbLabel="Connect"
      />

      <div
        className="container section"
        style={{
          maxWidth: 640,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 14,
            marginBottom: 40,
          }}
        >
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={
                c.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="card"
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: "16px 20px",
                gap: 16,
              }}
            >
              <span
                style={{
                  fontSize: "1.8rem",
                }}
                aria-hidden="true"
              >
                {c.icon}
              </span>
              <span
                style={{
                  flex: 1,
                }}
              >
                <strong
                  style={{
                    display: "block",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {c.label}
                </strong>
                <span
                  style={{
                    color: "var(--ink-500)",
                    fontSize: "0.88rem",
                  }}
                >
                  {c.handle}
                </span>
              </span>
              <span
                aria-hidden="true"
                style={{
                  color: "var(--ink-300)",
                }}
              >
                →
              </span>
            </a>
          ))}
        </div>

        <div
          className="card"
          style={{
            padding: 26,
            textAlign: "center",
          }}
        >
          <h3
            style={{
              marginBottom: 6,
            }}
          >
            Subscribe to the newsletter
          </h3>
          <p
            style={{
              color: "var(--ink-500)",
              marginBottom: 18,
            }}
          >
            Animal spotlights, conservation updates, and event announcements.
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
