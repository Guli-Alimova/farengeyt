import Link from "next/link";
import SectionHeading from "./SectionHeading";

// Ichki sahifalar (about, contact) boshi: breadcrumb + h1
export default function PageHeading({ title }: { title: string }) {
  return (
    <div className="container pb-8 pt-12">
      <SectionHeading
        as="h1"
        title={title}
        eyebrow={
          <nav aria-label="Sahifa yoʻli">
            <Link href="/" className="hover:underline">Bosh sahifa</Link>
            <span aria-hidden="true" className="mx-2 text-muted">&gt;</span>
            <span aria-current="page" className="text-muted">{title}</span>
          </nav>
        }
      />
    </div>
  );
}
