import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";

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
    default: "Stone & Salt | Commercial Grounds Management | Greater Cincinnati",
    template: "%s | Stone & Salt",
  },
  description:
    "Year-round commercial grounds management and snow removal in Greater Cincinnati. One vendor. Four seasons. Documented service. $2M insured.",
  keywords: [
    "commercial grounds management Cincinnati",
    "commercial snow removal Cincinnati",
    "snow plowing Cincinnati",
    "commercial landscaping Ohio",
    "property management landscaping",
    "office park grounds maintenance",
    "HOA grounds care Cincinnati",
    "commercial snow plowing Butler County",
    "snow removal West Chester Ohio",
    "grounds maintenance Liberty Township",
    "parking lot snow removal",
    "commercial hardscaping Cincinnati",
    "seasonal snow contracts Cincinnati",
    "year-round grounds management",
    "commercial property maintenance Ohio",
  ],
  authors: [{ name: "Stone & Salt" }],
  creator: "Stone & Salt",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://stoneandsaltohio.com",
    siteName: "Stone & Salt",
    title: "Stone & Salt | Commercial Grounds Management | Greater Cincinnati",
    description:
      "Year-round commercial grounds management and snow removal in Greater Cincinnati. One vendor. Four seasons. Documented service.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Stone & Salt - Commercial Snow & Grounds Cincinnati",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stone & Salt | Commercial Grounds Management",
    description: "Year-round commercial grounds management and snow removal. One vendor. Four seasons.",
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
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${montserrat.variable} ${openSans.variable} antialiased bg-soft-cream text-slate`}
      >
        {/* Google Analytics 4 */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-SM66W3MPTS" strategy="afterInteractive" />
        <Script id="ga4-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SM66W3MPTS');
          `}
        </Script>
        {/* Microsoft Clarity Analytics */}
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "v7jsazisjy");
          `}
        </Script>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-sun-ochre focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:text-sm focus:font-semibold"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
