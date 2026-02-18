import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { Analytics } from "@vercel/analytics/react";
import { routing } from "@/i18n/routing";
import { getAlternates } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const siteUrl = "https://plexoapp.com";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("homeTitle"),
    description: t("homeDescription"),
    metadataBase: new URL(siteUrl),
    alternates: getAlternates("/", locale),
    openGraph: {
      type: "website",
      url: siteUrl,
      title: t("homeTitle"),
      description: t("homeDescription"),
      siteName: "Plexo",
    },
    twitter: {
      card: "summary_large_image",
      title: t("homeTitle"),
      description: t("homeDescription"),
    },
    icons: {
      icon: "/favicon.svg",
      apple: "/favicon.svg",
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "es")) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const tMeta = await getTranslations("Metadata");

  return (
    <html lang={locale} className="scroll-smooth">
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
              description: tMeta("jsonLdDescription"),
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                description: tMeta("jsonLdOffersDescription"),
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
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
