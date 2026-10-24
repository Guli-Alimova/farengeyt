import sizes from "@/app/data/cover-sizes.json"; // scripts/resize-images.mjs yozadi

// 3D kitob shakli uchun umumiy hisoblar: Book3D (kartochka, kitob sahifasi) va HeroShelf (javon)

const ratios = Object.values(sizes as Record<string, { width: number; height: number }>).map(
  (s) => s.width / s.height,
);

// Muqova fayli yoʻq kitoblar uchun nisbat: mavjud muqovalar nisbatining oʻrtachasi
export const AVG_COVER_RATIO = ratios.length
  ? ratios.reduce((sum, r) => sum + r, 0) / ratios.length
  : 132 / 186;

// Muqova eni / boʻyi: kitob shu shaklda chiziladi, muqova kesilmaydi
export function shapeRatio(cover?: string, coverRatio?: number) {
  return cover && coverRatio ? coverRatio : AVG_COVER_RATIO;
}

// Sahifalar soni maʼlummi (boʻsh yoki notoʻgʻri qiymat — yoʻq)
export function hasPages(pages: string | undefined) {
  const n = Number.parseInt(pages ?? "", 10);
  return Number.isFinite(n) && n > 0;
}

// Qalinlik sahifalar soniga qarab, cheklangan oraliqda (scale = 1 da 14–34 px)
export function thickness(pages: string | undefined, scale: number) {
  const n = Number.parseInt(pages ?? "", 10);
  const t = hasPages(pages) ? Math.min(34, Math.max(14, 8 + n * 0.06)) : 22;
  return Math.round(t * scale);
}

// Umurtqa rangiga qarab matn oq yoki toʻq boʻladi
export function inkFor(hex: string) {
  const [r, g, b] = [1, 3, 5].map((i) => Number.parseInt(hex.slice(i, i + 2), 16) / 255);
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance > 0.55 ? "#1A1A1A" : "#FFFFFF";
}
