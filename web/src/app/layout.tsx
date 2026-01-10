import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Signal Room",
    template: "%s • Signal Room",
  },
  description: "A sleek, static-exported podcast website with mocked episodes.",
  metadataBase: new URL("https://example.invalid"),
  openGraph: {
    title: "Signal Room",
    description:
      "A sleek, static-exported podcast website with mocked episodes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
