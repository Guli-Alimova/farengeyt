import type { Metadata } from "next";

export const SITE_NAME = "Farengeyt Press";
export const SITE_DESCRIPTION =
  "Farengeyt Press — ma’rifatning ziyosiga va g‘oyalarning kuchiga ishongan mustaqil nashriyot";

// Vercel build paytida asosiy domenni beradi; lokal build uchun localhost
export const SITE_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

const DEFAULT_IMAGE = "/images/Farengeyt_Press_LOGO_small.png";

type PageMetadataOptions = {
  title?: string;
  description?: string;
  path: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "book";
};

// Har bir sahifa o'z openGraph'ini berishi kerak, aks holda ota sahifaniki meros qoladi
export function pageMetadata({
  title,
  description = SITE_DESCRIPTION,
  path,
  image = DEFAULT_IMAGE,
  imageAlt = SITE_NAME,
  type = "website",
}: PageMetadataOptions): Metadata {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

  return {
    title,
    description,
    openGraph: {
      type,
      title: fullTitle,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "uz_UZ",
      images: [{ url: image, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

export function truncate(text: string, max = 160): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return `${(lastSpace > 0 ? cut.slice(0, lastSpace) : cut).trimEnd()}…`;
}
