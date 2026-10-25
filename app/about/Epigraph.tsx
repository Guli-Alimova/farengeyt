// Bredberining «Farengeyt boʻyicha 451 daraja» romanidan iqtibos. Matnni nashriyot egasi beradi
// (oʻzimiz yozmaymiz va tarjima qilmaymiz). Boʻsh boʻlsa, epigraf sahifada koʻrinmaydi
const EPIGRAPH = "";

export default function Epigraph() {
  if (!EPIGRAPH.trim()) return null;

  return (
    <figure className="container pb-12">
      <blockquote className="max-w-[40ch] font-display text-[clamp(22px,3vw,32px)] leading-[1.3] text-ink">
        {EPIGRAPH}
      </blockquote>
      <figcaption className="mt-4 font-mono text-[13px] text-muted">
        {"— Rey Bredberi, «Farengeyt boʻyicha 451 daraja»"}
      </figcaption>
    </figure>
  );
}
