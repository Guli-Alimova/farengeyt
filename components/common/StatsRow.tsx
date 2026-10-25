export type Stat = { value: number; label: string };

// Raqamlar: qator (seriya boʻlimi) yoki ustun («Biz haqimizda», katta raqamlar).
// Qiymati 0 boʻlgan raqam koʻrinmaydi
export default function StatsRow({
  stats,
  className = "",
  layout = "row",
}: {
  stats: Stat[];
  className?: string;
  layout?: "row" | "column";
}) {
  const shown = stats.filter((s) => s.value > 0);
  if (shown.length === 0) return null;

  if (layout === "column") {
    return (
      <ul className={`font-mono text-[13px] text-muted ${className}`}>
        {shown.map((s) => (
          <li key={s.label} className="flex items-baseline gap-3 border-b border-line py-2 last:border-b-0">
            <b className="min-w-[2ch] font-display text-[44px] font-semibold leading-none text-ink">{s.value}</b>
            {s.label}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <p className={`flex flex-wrap gap-x-5 gap-y-2 font-mono text-[13px] text-muted ${className}`}>
      {shown.map((s) => (
        <span key={s.label}>
          <b className="mr-1.5 font-display text-[26px] font-semibold text-ink">{s.value}</b>
          {s.label}
        </span>
      ))}
    </p>
  );
}
