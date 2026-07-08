import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";
import GradientMesh from "@/components/GradientMesh";
import SmoothScroll from "@/components/SmoothScroll";
import { site } from "@/data/site";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description:
    "Big Data Engineer with 4+ years designing enterprise ETL pipelines, data ingestion, and cloud data platforms — Python, Hive, Hadoop, AWS.",
  keywords: [
    "Abhiram Singuru",
    "big data engineer",
    "data engineer",
    "ETL developer",
    "Hadoop",
    "Hive",
    "AWS",
    "Python",
    "Oracle PL/SQL",
    "portfolio",
    "Hyderabad",
    "Tata Consultancy Services",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    title: `${site.name} — ${site.role}`,
    description: "Big Data Engineer with 4+ years designing enterprise ETL pipelines, data ingestion, and cloud data platforms.",
    siteName: site.name,
    images: [{ url: "/images/profile.png", width: 1200, height: 1200, alt: `${site.name} portfolio` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: "Big Data Engineer with 4+ years designing enterprise ETL pipelines and cloud data platforms.",
    images: ["/images/profile.png"],
  },
  robots: { index: true, follow: true },
  icons: [{ rel: "icon", url: "/images/favicon.svg" }],
};

export default function RootLayout({ children }) {
  const ga = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="bg-bg text-fg font-sans antialiased min-h-screen flex flex-col relative">
        {ga && (
          <>
            <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${ga}`} />
            <Script id="ga-init" strategy="lazyOnload">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${ga}');`}
            </Script>
          </>
        )}
        <GradientMesh />
        <div className="noise-overlay" aria-hidden />
        <SmoothScroll>
          <Header />
          <main className="flex-1 relative z-10">{children}</main>
          <Footer />
        </SmoothScroll>
        <CommandPalette />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
