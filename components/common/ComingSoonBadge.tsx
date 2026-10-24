// «Tez kunda» belgisi (status: "coming-soon" kitoblar uchun). Dizayni vaqtincha oddiy.
export default function ComingSoonBadge({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-block bg-secondary text-white text-xs font-semibold px-2 py-1 rounded ${className}`}>
      Tez kunda
    </span>
  );
}
