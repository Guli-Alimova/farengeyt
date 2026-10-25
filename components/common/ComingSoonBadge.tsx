// «Tez kunda» belgisi (status: "coming-soon" kitoblar uchun)
export default function ComingSoonBadge({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-block rounded-full bg-ember-soft px-[11px] py-1 text-xs font-semibold text-ember ${className}`}>
      Tez kunda
    </span>
  );
}
