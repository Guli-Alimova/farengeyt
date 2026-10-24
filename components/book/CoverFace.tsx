import Image from "next/image";

type CoverFaceProps = {
  title: string;
  cover?: string;
  sizes: string; // muqova ekranda qancha kenglikda chiziladi
  scale: number; // vaqtinchalik muqova shriftlari uchun (1 = kartochkadagi sm kitob)
};

// 3D kitobning old muqovasi: haqiqiy rasm yoki tekis muqova fayli kelguncha umurtqa rangida nom.
// Fon va matn rangi ota elementdan keladi. --cover-fit: javon kichrayganda shriftlar ham kichrayadi
export default function CoverFace({ title, cover, sizes, scale }: CoverFaceProps) {
  if (cover) {
    return <Image src={cover} alt="" fill sizes={sizes} loading="lazy" className="object-cover" />;
  }

  const px = (n: number) => `calc(${n * scale}px * var(--cover-fit, 1))`;
  return (
    <span className="flex h-full flex-col p-[10%]">
      <span
        className="mt-auto font-display font-bold leading-none [overflow-wrap:anywhere]"
        style={{ fontSize: px(title.length > 9 ? 16 : 22) }}
      >
        {title}
      </span>
      <span className="mt-[6%] font-mono tracking-[0.12em] opacity-75" style={{ fontSize: px(7) }}>
        FARENGEYT
      </span>
    </span>
  );
}
