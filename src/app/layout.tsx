import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { SITE_CONFIG } from "@/lib/config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default:
      "VIP Service | Executive Airport & Intercity Transfers — Vienna, Bratislava, Budapest",
    template: "%s | VIP Service",
  },
  description:
    "Discreet, punctual chauffeur transfers for corporate executives between Vienna, Bratislava, Budapest and Prague. Fixed rates, flight monitoring, 24/7 availability.",
  keywords: [
    "executive transfer Bratislava",
    "Vienna airport transfer",
    "VIP chauffeur service",
    "corporate limousine Vienna Bratislava",
    "Schwechat airport transfer",
    "luxury transfer Budapest",
  ],
  authors: [{ name: SITE_CONFIG.ownerName }],
  openGraph: {
    title: "VIP Service | Executive Airport & Intercity Transfers",
    description:
      "Discreet, punctual chauffeur transfers between Vienna, Bratislava, Budapest and Prague.",
    url: SITE_CONFIG.url,
    siteName: "VIP Service",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TaxiService",
        name: SITE_CONFIG.companyName,
        image: `${SITE_CONFIG.url}/og-image.jpg`,
        url: SITE_CONFIG.url,
        telephone: SITE_CONFIG.phoneE164,
        email: SITE_CONFIG.email,
        priceRange: "€€€",
        areaServed: [
          { "@type": "City", name: "Bratislava" },
          { "@type": "City", name: "Vienna" },
          { "@type": "City", name: "Budapest" },
          { "@type": "City", name: "Prague" },
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bratislava",
          addressCountry: "SK",
        },
        founder: {
          "@type": "Person",
          name: SITE_CONFIG.ownerName,
        },
      },
      {
        "@type": "LimousineService",
        name: SITE_CONFIG.companyName,
        image: `${SITE_CONFIG.url}/og-image.jpg`,
        url: SITE_CONFIG.url,
        telephone: SITE_CONFIG.phoneE164,
        email: SITE_CONFIG.email,
        priceRange: "€€€",
        description:
          "Executive chauffeur and limousine transfer service for corporate travelers between Vienna, Bratislava, Budapest and Prague.",
        areaServed: [
          { "@type": "City", name: "Bratislava" },
          { "@type": "City", name: "Vienna" },
          { "@type": "City", name: "Budapest" },
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bratislava",
          addressCountry: "SK",
        },
        founder: {
          "@type": "Person",
          name: SITE_CONFIG.ownerName,
        },
        makesOffer: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Bratislava to Vienna Airport Transfer",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Vienna to Budapest Transfer",
            },
          },
        ],
      },
    ],
  };

  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} bg-obsidian font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
