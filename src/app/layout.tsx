import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stoneandsaltohio.com"),
  title: {
    default: "Stone & Salt | Greater Cincinnati Landscaping, Hardscapes & Snow Removal",
    template: "%s | Stone & Salt",
  },
  description:
    "Year-round outdoor services for Greater Cincinnati. Professional landscaping, hardscape installation, grounds maintenance, and snow removal. Four seasons. One call.",
  keywords: [
    "landscaping Cincinnati",
    "hardscape installation Cincinnati",
    "snow removal Cincinnati",
    "commercial landscaping Ohio",
    "patio installation Cincinnati",
    "landscape design Mason Ohio",
    "grounds maintenance West Chester",
    "Liberty Township landscaping",
  ],
  authors: [{ name: "Stone & Salt" }],
  creator: "Stone & Salt",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://stoneandsaltohio.com",
    siteName: "Stone & Salt",
    title: "Stone & Salt | Greater Cincinnati Landscaping, Hardscapes & Snow Removal",
    description:
      "Year-round outdoor services for Greater Cincinnati. Professional landscaping, hardscape installation, grounds maintenance, and snow removal.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Stone & Salt - Greater Cincinnati Landscaping",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stone & Salt | Greater Cincinnati Landscaping",
    description: "Year-round outdoor services. Four seasons. One call.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${montserrat.variable} ${openSans.variable} antialiased bg-soft-cream text-slate`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
