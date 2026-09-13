import { Bebas_Neue, Walter_Turncoat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBookCta from "@/components/StickyBookCta";
import AccessibilityToolbar from "@/components/AccessibilityToolbar";
import ChatWidget from "@/components/ChatWidget";
import { SITE_URL } from "@/lib/site";
const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});
const walterTurncoat = Walter_Turncoat({
  variable: "--font-turncoat",
  subsets: ["latin"],
  weight: "400",
});
const futura = localFont({
  variable: "--font-futura",
  src: [
    {
      path: "../fonts/futura/FuturaCyrillicLight.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/futura/FuturaCyrillicBook.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/futura/FuturaCyrillicMedium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/futura/FuturaCyrillicDemi.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/futura/FuturaCyrillicBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/futura/FuturaCyrillicHeavy.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/futura/FuturaCyrillicExtraBold.ttf",
      weight: "900",
      style: "normal",
    },
  ],
});
const ahkio = localFont({
  variable: "--font-ahkio",
  src: [
    {
      path: "../fonts/ahkio/ahkio-thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/ahkio/ahkio-light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/ahkio/ahkio-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/ahkio/ahkio-bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/ahkio/ahkio-black.otf",
      weight: "900",
      style: "normal",
    },
  ],
});
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "LegaSea Aquarium & The Reptarium",
    template: "%s · LegaSea Aquarium & The Reptarium",
  },
  description:
    "Plan your visit to LegaSea Aquarium & The Reptarium — tickets, tours, animal encounters, shows, and events for the whole family.",
  icons: {
    icon: "/LegaseaIcon.webp",
    apple: "/LegaseaIcon.webp",
  },
  openGraph: {
    title: "LegaSea Aquarium & The Reptarium",
    description:
      "Plan your visit to LegaSea Aquarium & The Reptarium — tickets, tours, animal encounters, shows, and events for the whole family.",
    images: ["/images/LegaseaLogoFull.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "LegaSea Aquarium & The Reptarium",
    description:
      "Plan your visit to LegaSea Aquarium & The Reptarium — tickets, tours, animal encounters, shows, and events for the whole family.",
    images: ["/images/LegaseaLogoFull.webp"],
  },
};
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${walterTurncoat.variable} ${futura.variable} ${ahkio.variable}`}
    >
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <StickyBookCta />
        <AccessibilityToolbar />
        <ChatWidget />
      </body>
    </html>
  );
}
