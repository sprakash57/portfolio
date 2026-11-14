import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { profile } from "@/content/profile";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const title = `${profile.name}: ${profile.roles.join(" & ")}`;

const [firstName, ...rest] = profile.name.split(" ");

// The share image comes from app/opengraph-image.tsx and the icons from app/icon.tsx, app/apple-icon.tsx.
export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title,
  description: profile.seoDescription,
  alternates: { canonical: "/" },
  authors: [{ name: profile.name, url: profile.siteUrl }],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: profile.name,
    locale: "en_US",
    title,
    description: profile.seoDescription,
    firstName,
    lastName: rest.join(" "),
  },
  twitter: { card: "summary_large_image", title, description: profile.seoDescription },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0d0d0c" },
    { media: "(prefers-color-scheme: light)", color: "#f7f6f2" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-dvh font-sans">{children}</body>
    </html>
  );
}
