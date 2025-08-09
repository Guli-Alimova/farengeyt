import { Suspense } from "react";
import BooksContent from "./BooksContent";

export default function Page() {
  return (
    <Suspense fallback={<div className="p-8">Yuklanmoqda...</div>}>
      <BooksContent />
    </Suspense>
  );
}
