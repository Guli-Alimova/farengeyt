// Nashriyot bilan bogʻlanish maʼlumotlari: footer va /contact sahifasi shu yerdan oladi
export const contact = {
  phone: { label: "+998 90 999 18 19", href: "tel:+998909991819" },
  email: { label: "info@farengeyt.press", href: "mailto:info@farengeyt.press" },
  instagram: { label: "@farengeyt_press", href: "https://instagram.com/farengeyt_press" },
  hours: "Dushanba–Juma, 09:00–18:00",
  address: "Komolon 134 a",
};

export const socials = [
  { key: "facebook", label: "Facebook", href: "https://facebook.com/FarengeytPress" },
  { key: "instagram", label: "Instagram", href: contact.instagram.href },
  { key: "x", label: "X", href: "https://x.com/FarengeytPress" },
] as const;
