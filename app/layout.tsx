import type { Metadata } from "next";
import { IBM_Plex_Mono, Literata, Noto_Sans } from "next/font/google";
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
      className={`${literata.variable} ${notoSans.variable} ${plexMono.variable}`}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
