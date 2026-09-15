import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.blackseedsincorp.com"),
  title: {
    default: "blackseedsincorp — We build with you in MIND",
    template: "%s | blackseedsincorp.com",
  },
  description: "Young Black engineers in VI Lagos building AI, luxury commerce & scalable platforms live on Vercel. 6 live projects.",
  keywords: ["blackseedsincorp", "VI Lagos", "AI agency", "Next.js", "Vercel"],
  authors: [{ name: "blackseedsincorp" }],
  creator: "blackseedsincorp",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://www.blackseedsincorp.com",
    siteName: "blackseedsincorp.com",
    title: "blackseedsincorp — We build with you in MIND",
    description: "Young Black engineers (20s-30s) in VI building AI, luxury commerce & scalable platforms. 6 live.",
    images: [
      {
        url: "/BlackseedsincorpLogo(new).png",
        width: 800,
        height: 800,
        alt: "blackseedsincorp.com — EST. 2020",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "blackseedsincorp — We build with you in MIND",
    description: "Young Black engineers in VI Lagos building AI, luxury commerce & scalable platforms.",
    images: ["/BlackseedsincorpLogo(new).png"],
    creator: "@blackseedsincorp",
  },
  icons: {
    icon: "/BlackseedsincorpLogo(new).png",
    shortcut: "/BlackseedsincorpLogo(new).png",
    apple: "/BlackseedsincorpLogo(new).png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}