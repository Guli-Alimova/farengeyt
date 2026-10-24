# Farengeyt Press sayti: loyiha rejasi va qarorlar

Bu fayl claude.ai suhbatida kelishilgan barcha qarorlarni jamlaydi. Claude Code har bir yangi vazifadan oldin shu faylni hisobga olsin. Fayldagi qaror kod yoki CLAUDE.md bilan zid kelsa, avval egasidan so'rang.

## 1. Loyiha haqida

- Sayt: Farengeyt Press MChJ nashriyoti (Toshkent). Ilmiy-ommabop, taʼlimiy va tarjima adabiyot.
- Texnologiya: Next.js (App Router, `output: 'export'`), Tailwind, GitHub, Vercel. `main` ga har bir push haqiqiy saytga chiqadi.
- Dizayn namunasi: Hackett Publishing (jiddiy, kitobga yo'naltirilgan). Penguin emas.
- Vizual namuna: `design/prototip.html`. Kodini ko'chirmang, dizaynni loyihaning o'z tuzilmasida quring.

## 2. Ish tartibi (har doim)

1. Har bir katta ish alohida branch'da. Commit va push faqat egasining ruxsati bilan. `main` ga hech qachon to'g'ridan-to'g'ri push qilinmaydi.
2. Katta, ko'p faylli vazifa: avval reja (plan mode), egasi tasdiqlaydi. Kichik vazifa: to'g'ridan-to'g'ri.
3. Har bir o'zgarishdan keyin: `npx tsc --noEmit`, `npm run lint`, kerak bo'lsa `npm run build`.
4. Windows: `npm run dev` ishlab turganda `npm run build` qilinmaydi (`.next` band bo'ladi, keyin dev serverda Internal Server Error chiqadi). Build'dan oldin dev server to'xtatiladi. Muammo bo'lsa `.next` o'chiriladi.
5. Saytga chiqarish: branch push → Vercel preview'da tekshirish → GitHub Pull Request → merge → production'ni tekshirish → lokal `main` ni yangilash, eski branch'ni o'chirish.
6. Yangi paket, skript yoki build jarayoniga o'zgarish qo'shilsa, nima uchunligini egasiga tushuntiring.
7. Brauzerda ko'rinadigan narsani (filtr, animatsiya, menyu) egasi o'zi tekshiradi. Nimani tekshirish kerakligini aniq ayting.
8. PowerShell'da ikkilik fayllarni `>` bilan yozmang (buziladi).

## 3. Matn va maʼlumot qoidalari

- Oʻ/gʻ uchun `ʻ` (U+02BB), tutuq belgisi uchun `ʼ` (U+02BC). Kod, izoh va inglizcha matnlarga tegilmaydi.
- Sarlavhalarda faqat birinchi so'z bosh harf bilan ("Bosh sahifa", "Tanlangan kitoblar").
- Kitob nomlari «» qo'shtirnoqda.
- Mualliflar o'zbekcha transliteratsiyada, to'liq ism bilan, "A, B va C" shaklida.
- Asl inglizcha nomlarda qisqa predloglar kichik harf bilan ("Biology for Beginners").
- Narx saytda yozilmaydi (Uzum'dagi narx bilan farq qilib qolmasligi uchun). Faqat "Sotib olish" havolasi.
- Maʼlumoti yo'q maydon saytda ko'rinmaydi.
- «Iqtisodiyot», «Kimyo», «Matematika» hali nashr qilinmagan: holati "Tez kunda", nashr yili va sahifalar soni bo'sh.

## 4. Bajarilgan ishlar

- 1-bosqich (merge qilingan): Book turi, janr nomlari bitta joyda, sahifa sarlavhalari va Open Graph (prebuild muqova nusxalari), galereyadagi buzilgan yo'llar, imlo va oʻ/gʻ belgilari, menyu havolalari, podkast nomi.
- 3-bosqich (merge qilingan): "Kitob haqida" jadvali, yangi maydonlar (asl nomi, muallif, tarjimon, muharrir, ISBN, Uzum havolasi), "Tez kunda" holati, 4 ta kitob maʼlumoti.
- Dizayn, 1-qadam (`dizayn` branch'ida): ranglar va shriftlar, yangi header va footer, eski GIF va bezaklar olib tashlandi, muqovalar siqildi (asl nusxalar `originals/`, Git'da yo'q).

## 5. Dizayn qarorlari

- Ranglar va shriftlar: prototipdagidek. Brend ko'ki #29479E. Shriftlar: Literata (sarlavhalar), Noto Sans (matn), IBM Plex Mono (kichik yorliqlar, ISBN).
- Logo matni: "Farengeyt Press". "451" logoda ham, footer'da ham yo'q.
- Qorong'i rejim: ranglari yozilgan, lekin dizayn tugaguncha o'chiq. Oxirgi qadamda yoqiladi.
- 3D: faqat CSS 3D, kutubxonasiz. Three.js, GSAP, janrlar uchun alohida 3D javon ishlatilmaydi.
- Kartochkalarda 3D kitoblar (sichqoncha bilan burilish, ustiga borganda muqova ochilib titul ko'rinadi). Telefonda burilish yo'q, bosilganda kitob sahifasi ochiladi.
- Hero'da 3D kitob javoni (bosilgan kitob javondan chiqib muqovasini ko'rsatadi).
- Uchqunlar: faqat mayda va sokin, ixtiyoriy, eng oxirida. Egasi ko'rib qaror qiladi.
- `prefers-reduced-motion` hamma joyda hurmat qilinadi. Telefonda sekinlashmasligi shart.
- Muqovalar: 3D kitob uchun tekis (qiyshaymagan, fonsiz) muqova kerak. Fayllar `public/images/covers/` ga qo'yiladi, `book.json` dagi `cover` maydoni orqali ulanadi. Fayllar kelguncha vaqtinchalik rangli muqova. Bosmaxona yoymasi berilsa, old qismi va umurtqasi kesib olinadi, bleed va kesish belgilari olib tashlanadi.

## 6. Qolgan dizayn qadamlari (`dizayn` branch'ida, har biri alohida commit)

2. Book3D komponenti va kitob kartochkalari: umurtqa rangi muqovadan olinadi va `book.json` ga yoziladi; kartochkalar /books va bosh sahifadagi "Tanlangan kitoblar"da; /books janr filtri tugmalar ko'rinishida; bosh sahifadagi brauzer komponentiga faqat kerakli maydonlar uzatiladi.
3. Hero'dagi 3D javon.
4. Kitob sahifasi (katta 3D kitob, "Kitob haqida" jadvali), «Boshlangʻich saboqlar» seriya bo'limi (yelpig'ich muqovalar), /books'da qidiruv (nom, muallif, asl nomi).
5. "O'qituvchilar va maktablar uchun" bloki, Telegram obunasi, kitob sahifasida "Muallif haqida", "Tez kunda" kitoblarda "Chiqqanda xabar olish", uchqunlar (egasi tasdiqlasa), qorong'i rejimni yoqish.
6. Hammasi tayyor bo'lgach: build, preview, Pull Request, merge.

## 7. Ochiq masalalar (egasidan so'ralsin)

- «Behalovat avlod» muallifining yozilishi (o'zbekcha muqovadagi kabi). Blogdagi «Jonatan Hait» ham shunga moslanadi.
- «Pul» mualliflari: Eddi Reynolds, Metyu Oldem va Lara Brayan (titul sahifasidan tasdiqlansin).
- Muharrir ismining yozilishi (Yoʻldoshev yoki Yuldoshev).
- Tekis muqova fayllari.
- Telegram kanal manzili, "O'qituvchilar uchun" bloki matni.
- `fizika4.jpg`, `fizika5.jpg`: «Fizika» galereyasiga kerakmi.
- Keyinroq: `farengeyt.press` domenini ulash, ruscha versiya.
