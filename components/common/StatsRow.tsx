export type Stat = { value: number; label: string };

// Raqamlar qatori (seriya boʻlimi, «Biz haqimizda»). Qiymati 0 boʻlgan raqam koʻrinmaydi
export default function StatsRow({ stats, className = "" }: { stats: Stat[]; className?: string }) {
  const shown = stats.filter((s) => s.value > 0);
  if (shown.length === 0) return null;

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
