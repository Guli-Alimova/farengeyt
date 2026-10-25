import { DAY_NAMES, workHours } from "@/app/data/contact";

export type OpenStatus = { open: boolean; text: string };

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Vaqt nashriyot mintaqasida (Asia/Tashkent) olinadi, foydalanuvchi qayerda boʻlishidan qatʼi nazar
const tashkentClock = new Intl.DateTimeFormat("en-US", {
  timeZone: workHours.timeZone,
  weekday: "short",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

const toMinutes = (time: string) => {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
};

// «Hozir ochiq · 18:00 gacha» yoki «Hozir yopiq · Dushanba 09:00 da ochiladi»
export function openStatus(now: Date): OpenStatus {
  const parts = Object.fromEntries(tashkentClock.formatToParts(now).map((p) => [p.type, p.value]));
  const day = WEEKDAYS.indexOf(parts.weekday);
  const minute = Number(parts.hour) * 60 + Number(parts.minute);
  const isWorkday = (d: number) => workHours.days.includes(d);

  if (isWorkday(day) && minute >= toMinutes(workHours.open) && minute < toMinutes(workHours.close)) {
    return { open: true, text: `Hozir ochiq · ${workHours.close} gacha` };
  }
  if (isWorkday(day) && minute < toMinutes(workHours.open)) {
    return { open: false, text: `Hozir yopiq · Bugun ${workHours.open} da ochiladi` };
  }
  for (let i = 1; i <= 7; i++) {
    const next = (day + i) % 7;
    if (isWorkday(next)) {
      return { open: false, text: `Hozir yopiq · ${DAY_NAMES[next]} ${workHours.open} da ochiladi` };
    }
  }
  return { open: false, text: "Hozir yopiq" };
}
