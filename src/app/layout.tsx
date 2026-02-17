import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const siteUrl = "https://plexoapp.com";

export const metadata: Metadata = {
  title: "Plexo — Retail Operations, Perfected",
  description:
    "The all-in-one platform to manage tasks, audits, training, and campaigns across every store.",
  keywords: [
    "retail operations",
    "store management",
    "task management",
    "retail audits",
    "store compliance",
  ],
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Plexo — Retail Operations, Perfected",
    description:
      "The all-in-one platform to manage tasks, audits, training, and campaigns across every store.",
    siteName: "Plexo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plexo — Retail Operations, Perfected",
    description:
      "The all-in-one platform to manage tasks, audits, training, and campaigns across every store.",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Plexo",
              url: siteUrl,
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web, iOS, Android",
              description:
                "The all-in-one platform to manage tasks, audits, training, and campaigns across every store.",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                description: "Custom pricing — book a demo for a personalized quote",
              },
              publisher: {
                "@type": "Organization",
                name: "Plexo",
                url: siteUrl,
                logo: `${siteUrl}/logo.svg`,
              },
            }),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
