import type { Metadata } from "next";
import {  Inter } from "next/font/google";
import "@/styles/globals.css"
import Navbar from "@/components/Navbar";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { pageMetadata, SITE_NAME, SITE_URL } from "@/app/utils/metadata";



const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ['400', '500', '600','700'], 
  style: ['normal', 'italic'],
 
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
    <html lang="uz">
      <body className={`${inter}`}>
        <Navbar/>
         <Header />   
         {children} 
         <Footer />      
      </body>
    </html>
  );
}
