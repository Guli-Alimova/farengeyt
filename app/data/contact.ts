// Hafta kunlari Date.getDay() tartibida (0 = yakshanba)
export const DAY_NAMES = ["Yakshanba", "Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba"];

// Ish vaqti bitta joyda: footer'dagi matn ham, /contact'dagi «Hozir ochiqmi?» belgisi ham shundan.
// Kunlar ketma-ket boʻlishi kerak (matn «birinchi–oxirgi» koʻrinishida yoziladi)
export const workHours = {
  days: [1, 2, 3, 4, 5] as readonly number[],
  open: "09:00",
  close: "18:00",
  timeZone: "Asia/Tashkent",
};

// Nashriyot bilan bogʻlanish maʼlumotlari: footer va /contact sahifasi shu yerdan oladi
export const contact = {
  phone: { label: "+998 90 999 18 19", href: "tel:+998909991819" },
  email: { label: "info@farengeyt.press", href: "mailto:info@farengeyt.press" },
  instagram: { label: "@farengeyt_press", href: "https://instagram.com/farengeyt_press" },
  telegram: { label: "@farengeyt_press", href: "https://t.me/farengeyt_press" },
  hours: `${DAY_NAMES[workHours.days[0]]}–${DAY_NAMES[workHours.days[workHours.days.length - 1]]}, ${workHours.open}–${workHours.close}`,
  address: "Komolon 134 a",
};

export const socials = [
  { key: "facebook", label: "Facebook", href: "https://facebook.com/FarengeytPress" },
  { key: "instagram", label: "Instagram", href: contact.instagram.href },
  { key: "x", label: "X", href: "https://x.com/FarengeytPress" },
] as const;
