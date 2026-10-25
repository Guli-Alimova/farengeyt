// Bosh sahifa boʻlimlari sarlavhasi: kichik mono yorliq + Literata sarlavha (prototipdagi .eyebrow + h2)
export default function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <>
      <p className="font-mono text-xs uppercase tracking-[0.09em] text-brand">{eyebrow}</p>
      <h2 className="mt-3 font-display text-[clamp(28px,3.4vw,38px)] font-semibold leading-[1.1] tracking-[-0.01em] text-ink">
        {title}
      </h2>
    </>
  );
}
