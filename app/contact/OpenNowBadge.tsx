"use client";

import { useEffect, useState } from "react";
import { openStatus, type OpenStatus } from "@/app/utils/openStatus";

// «Hozir ochiqmi?» belgisi. Faqat brauzerda hisoblanadi (statik HTML'da boʻsh), joyi oldindan
// band qilingan, shuning uchun paydo boʻlganda sahifa sakramaydi. Har daqiqa boshida yangilanadi
export default function OpenNowBadge() {
  const [status, setStatus] = useState<OpenStatus | null>(null);

  useEffect(() => {
    const update = () => setStatus(openStatus(new Date()));
    let interval: number | undefined;
    update();
    const timeout = window.setTimeout(() => {
      update();
      interval = window.setInterval(update, 60_000);
    }, 60_000 - (Date.now() % 60_000));
    const onVisible = () => {
      if (document.visibilityState === "visible") update();
    };
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      window.clearTimeout(timeout);
      window.clearInterval(interval);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);

  const tone = status?.open ? "bg-brand-soft text-brand" : "bg-ember-soft text-ember";

  return (
    <p className="mt-2 min-h-7">
      <span
        aria-hidden={status ? undefined : true}
        className={`inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[12px] transition-opacity duration-300 motion-reduce:transition-none ${tone} ${status ? "opacity-100" : "opacity-0"}`}
      >
        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-current" />
        {status?.text}
      </span>
    </p>
  );
}
