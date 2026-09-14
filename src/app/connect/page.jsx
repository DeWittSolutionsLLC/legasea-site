import PageHero from "@/components/PageHero";
import NewsletterForm from "@/components/NewsletterForm";
import {
  IconInstagram,
  IconTikTok,
  IconYouTube,
  IconFacebook,
} from "@/components/icons";
export const metadata = {
  title: "Connect",
  description:
    "Every LegaSea social channel, blog, and newsletter in one place.",
};
const channels = [
  {
    label: "Instagram",
    icon: IconInstagram,
    handle: "@legaseaaquarium",
    href: "http://instagram.com/legaseaaquarium",
  },
  {
    label: "TikTok",
    icon: IconTikTok,
    handle: "@legaseaaquarium",
    href: "https://tiktok.com",
  },
  {
    label: "YouTube",
    icon: IconYouTube,
    handle: "LegaSea Aquarium & Reptarium",
    href: "https://www.youtube.com/brianbarczyk",
  },
  {
    label: "Facebook",
    icon: IconFacebook,
    handle: "LegaSea Aquarium & The Reptarium",
    href: "https://www.facebook.com/legaseaaquarium",
  },
  {
    label: "Blog",
    icon: "/images/icons/icon-notepad.jpg",
    handle: "Animal spotlights & updates",
    href: "/blog",
  },
];
export default function ConnectPage() {
  return (
    <>
      <PageHero
        eyebrow="Follow Along"
        title="Connect"
        subtitle="Stay wild. Stay connected."
        crumbLabel="Connect"
        image="/images/ConnectHero.png"
      >
        <p
          style={{
            color: "var(--glass-text-dim)",
            maxWidth: "44ch",
            margin: "10px 0 20px",
          }}
        >
          Follow LegaSea for animal encounters, behind-the-scenes moments, new
          arrivals, events, and everything happening around the aquarium and
          zoo.
        </p>

        <div
          style={{
            display: "flex",
            gap: 10,
            marginBottom: 18,
          }}
        >
          {channels
            .filter((c) => c.href.startsWith("http"))
            .map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={c.label}
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "var(--glass-bg-strong)",
                  border: "1px solid var(--glass-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                }}
              >
                <c.icon size={20} />
              </a>
            ))}
        </div>

        <p
          style={{
            fontFamily: "var(--font-accent)",
            fontSize: "0.85rem",
            fontWeight: 700,
            letterSpacing: "0.4px",
            color: "var(--reef-glow)",
            margin: 0,
          }}
        >
          #LegaSeaAquarium &nbsp; #TheReptarium &nbsp; #GetCloserToWild
        </p>
      </PageHero>

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
                  display: "flex",
                }}
                aria-hidden="true"
              >
                {typeof c.icon === "string" ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={c.icon}
                    alt=""
                    style={{
                      width: 26,
                      height: 26,
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <c.icon size={26} />
                )}
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
                    color: "var(--glass-text-dim)",
                    fontSize: "0.88rem",
                  }}
                >
                  {c.handle}
                </span>
              </span>
              <span
                aria-hidden="true"
                style={{
                  color: "var(--glass-text-dim)",
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
              color: "var(--glass-text-dim)",
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
