import type { Metadata } from "next";
import "./globals.css";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
