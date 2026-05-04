import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/navbar";
import { personalInfo } from "@/data/personal";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://jtgiron.dev";

export const metadata: Metadata = {
  title: {
    default: `${personalInfo.name} — Developer`,
    template: `%s | ${personalInfo.name}`,
  },
  description: `${personalInfo.name} is a ${personalInfo.title.toLowerCase()} building performant web experiences with modern tools.`,
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${personalInfo.name} — Developer`,
    description: `${personalInfo.name} is a ${personalInfo.title.toLowerCase()} building performant web experiences with modern tools.`,
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
  authors: [{ name: personalInfo.name }],
  other: { "theme-color": "#09090b" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
    >
      <body className="min-h-screen bg-background font-sans antialiased text-foreground">
        <Navbar />
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
