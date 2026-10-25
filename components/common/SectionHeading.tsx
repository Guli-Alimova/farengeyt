import type { ReactNode } from "react";

// Boʻlim va sahifa sarlavhasi: kichik mono yorliq + Literata sarlavha (prototipdagi .eyebrow + h2).
// Sahifa boshida as="h1", yorliq oʻrnida breadcrumb (PageHeading)
export default function SectionHeading({
  eyebrow,
  title,
  as: Heading = "h2",
}: {
  eyebrow: ReactNode;
  title: string;
  as?: "h1" | "h2";
}) {
  return (
    <>
      <div className="font-mono text-xs uppercase tracking-[0.09em] text-brand">{eyebrow}</div>
      <Heading className="mt-3 font-display text-[clamp(28px,3.4vw,38px)] font-semibold leading-[1.1] tracking-[-0.01em] text-ink">
        {title}
      </Heading>
    </>
  );
}
