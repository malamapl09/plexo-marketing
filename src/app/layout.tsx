import "./globals.css";

// Bare root layout — the real <html>/<body> lives in [locale]/layout.tsx
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
