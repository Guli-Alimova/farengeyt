import type { Metadata } from "next";
import { IBM_Plex_Mono, Literata, Noto_Sans } from "next/font/google";
import localFont from "next/font/local";
import "@/styles/globals.css"
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { pageMetadata, SITE_NAME, SITE_URL } from "@/app/utils/metadata";

// "latin" subseti ʻ (U+02BB) va ʼ (U+02BC) belgilarini ham oʻz ichiga oladi
const literata = Literata({
  variable: "--font-literata",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});

// Literata'da ʻ (U+02BB) glifining kengligi 0: belgi oldingi harf ustiga tushadi. Shu ikki belgi
// Noto Serif'dan olinadi (OFL, Google Fonts'dan ʻʼ subseti, wght 400–700). font-display'da Literata'dan oldin
const okina = localFont({
  src: "./fonts/noto-serif-okina.woff2",
  variable: "--font-okina",
  weight: "400 700",
  declarations: [{ prop: "unicode-range", value: "U+02BB-02BC" }],
  adjustFontFallback: false, // aks holda Arial'dan qilingan fallback barcha harflarni Literata'dan oldin oladi
  preload: false,
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  ...pageMetadata({ path: "/" }),
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_NAME, template: `%s | ${SITE_NAME}` },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uz"
      className={`${okina.variable} ${literata.variable} ${notoSans.variable} ${plexMono.variable}`}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
