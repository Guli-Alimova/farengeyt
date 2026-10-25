# CLAUDE.md

**Har bir vazifadan oldin `design/LOYIHA-REJASI.md` ni hisobga ol.**

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Rules

- **Always ask the user before any `git commit` or `git push`.** Pushing to `main` deploys to the live site immediately via Vercel.
- All site text is in Uzbek, Latin script (not Cyrillic).
- Book titles are written in «» quotes, e.g. «Pul».
- Uzbek text uses ʻ (U+02BB) for oʻ/gʻ and ʼ (U+02BC) for the tutuq belgisi (maʼlumot, taʼlim).
  Never use ', ‘, ’ or ` in Uzbek words. Applies to components, book.json and category names;
  not to code, comments or English text.
- Author names (`author`, and the same people elsewhere on the site) are written in full (first name + surname)
  in Uzbek transliteration, e.g. «Eddi Reynolds», «Minna Leysi». Exception chosen by the user: Jonathan Haidt
  stays in English spelling. Translator/editor names are written as the user gives them.
- Lists of names use the «A, B va C» form (commas, «va» before the last name), e.g.
  «Eddi Reynolds, Metyu Oldem va Lara Brayan».
- English titles (`originalTitle`) use title case with prepositions/articles in lowercase unless first:
  «Money for Beginners», not «Money For Beginners».
- Don't change the spelling of personal names on your own; ask the user when something looks inconsistent.

## Commands

- `npm run dev`: dev server at http://localhost:3000
- `npm run build`: production build. Because of `output: 'export'`, this writes a fully static site to `out/`
- `npm run lint`: ESLint (`next/core-web-vitals` + `next/typescript`)

There is no test suite. Use `npm run lint` and `npm run build` to catch errors: the build type-checks the code and fails on lint errors such as unescaped entities in JSX.

## Architecture

The site is a static Next.js 15 (App Router) + React 19 + TypeScript site for the Farengeyt Press publishing house.

- **Static export only** (`next.config.ts`: `output: 'export'`, `images.unoptimized: true`). This means:
  - no API routes, server actions, middleware, or runtime server features
  - every dynamic route must implement `generateStaticParams`, as `app/books/[id]/page.tsx` does
  - `next/image` does no optimization
- **Data source**: all book data lives in `app/data/book.json`. Always import it through `app/data/books.ts` (`import { books } from "@/app/data/books"`), which types it as `Book[]` (`app/type/Book.ts`). Then a missing or mistyped required field fails `tsc`/the build. `gallery` and `hamkor` (partner logo) are optional. Book details fields: `author`, `translator`, `editor`, `originalTitle`, `originalLanguage`, `isbn`, `price` (whole soʻm, or `null`) and `uzumUrl` (must start with `https://uzum.uz/`, shown as the «Sotib olish» button). `totalPage` is the page count and `format` is the cover type (Qattiq/Yumshoq qoplamli). On the book page every field is shown in the «Kitob haqida» table, and empty values (`""`/`null`) are hidden, never shown as "N/A". `app/data/books.ts` fails the build on an invalid `uzumUrl`, `price` or `isbn`. `status` is required: `"published"` or `"coming-soon"` (not yet published). It is validated in `books.ts` and then typed as `BookStatus`. Coming-soon books show `ComingSoonBadge` («Tez kunda», `components/common/ComingSoonBadge.tsx`) on `BookCard` and the book page, and they never show the «Sotib olish» button. The home-page `FeaturedBooks` reads from `books` too, so don't add a separate book list. A field added to the JSON but not to `Book` goes undetected, so update the type as well. To add a book, add an entry to the JSON and put its images in `public/images/`. `firebase` is listed as a dependency but isn't used anywhere yet.
- **Layout**: `app/layout.tsx` wraps every page with `Header` and `Footer` and loads the fonts via `next/font/google` (Literata, Noto Sans, IBM Plex Mono). Literata's ʻ (U+02BB) has zero width, so `font-display` puts `--font-okina` first: a 1 KB Noto Serif subset (`app/fonts/noto-serif-okina.woff2`, `next/font/local`, `unicode-range: U+02BB-02BC`) that supplies only ʻ and ʼ. The new design reference is `design/prototip.html`: rebuild it in components, don't copy its code; its drawn covers are placeholders for the real cover images. The home page (`app/page.tsx`) stacks the section components from `components/` in this order: Intro, FeaturedBooks, Blog, SeriesSection, PodCast, ExploreBooks. Section backgrounds alternate (paper with `border-t border-line`, then `bg-brand-soft`), so two neighbours never share a plain background. Section headings use `components/common/SectionHeading.tsx` (mono eyebrow + Literata `h2`). The «Boshlangʻich saboqlar» series is defined in `app/data/series.ts`: a book belongs to it when its `subtitle` is `SERIES_TITLE`, so never list series books by hand. `SeriesSection` (`components/Series/`) is a server component; its cover fan is pure CSS (`.series-fan*` in `styles/globals.css`). Route-specific components live next to their route (e.g. `app/about/AboutIntro.tsx`).
- **Book cards and 3D book**: `components/book/BookCard.tsx` is the single book card (used by `/books` and the home-page «Tanlangan kitoblar» slider). `components/book/Book3D.tsx` is a CSS-only 3D book (`size="sm" | "lg"`, `open`, `closed`: the cover never opens on hover/focus, used on the book page); its 3D styles are the `.book3d*` classes in `styles/globals.css`. Front = `cover` (flat cover image, optional), spine = `spineColor` (required `#RRGGBB`), thickness from `totalPage`. `image` is a mockup/photo, used only on the book page, gallery and OG image, never on the 3D book. Client components get `BookCardData` via `toCardData()` from `app/data/books.ts`, never the whole `books` array: a server component maps the data and passes it as props (see `FeaturedBooks` → `FeaturedBooksSlider`, `app/books/page.tsx` → `BooksClient`). This keeps book descriptions out of the client JS. Import `BookCardData` in client files with `import type`.
- **Spine colors**: `node scripts/cover-colors.mjs` finds each cover's dominant color and writes `spineColor` into `book.json`. It uses `cover`, or the mockup without its white background when there is no cover yet. Existing values are left alone because the user may have edited them; `--force` recalculates all of them.
- **Books page**: `app/books/page.tsx` is a server component that wraps the client-side `BooksClient` in `<Suspense>`. `BooksClient` reads `?category=` with `useSearchParams` (which needs that Suspense boundary in a static export) and handles search and category filtering on the client.
- **Categories (janrlar)**: the single list is `app/data/categories.ts` (`categories`, `categoryTitles`, `ALL_CATEGORIES = "Barchasi"`). It is used by the footer, the home-page `ExploreBooks` section and `BooksClient`. A `category` in `book.json` that isn't in this list throws in `app/data/books.ts` and fails the build. Don't hardcode category names anywhere else.
- **Navigation**: the menu links for the header, the mobile menu (`Burger`) and the footer live in `app/data/navigation.ts`. Links to home-page sections are written as `/#id` (`/#podcast`, `/#blog`), not `#id`, so they work from any page. The target `<section>` gets `scroll-mt-28` so the sticky header doesn't cover it.
- **Metadata / Open Graph**: build every page's metadata with `pageMetadata()` from `app/utils/metadata.ts`. Without it a page inherits the parent's `openGraph`, title included. The root layout sets `metadataBase` from `VERCEL_PROJECT_PRODUCTION_URL` (`http://localhost:3000` locally) and the `%s | Farengeyt Press` title template. Book pages use `generateMetadata` with data from `book.json`.
- **OG cover images**: the original covers are ~5 MB, too heavy for Telegram/Facebook previews. `scripts/og-images.mjs` runs as `prebuild` and writes 1200 px copies to `public/og/books/<id>.jpg`. The folder is gitignored, so after adding a book run `node scripts/og-images.mjs` (or a build) before checking it in `npm run dev`.
- **Carousels**: built with Swiper. Its CSS is imported globally in `styles/globals.css`. The podcast section gets video thumbnails from YouTube URLs via `app/utils/youtube.ts`.
- **Path alias**: `@/*` points to the repo root (e.g. `@/components/...`, `@/app/data/book.json`).

## Styling

The project uses Tailwind CSS v4 through `@tailwindcss/postcss`; there is no `tailwind.config.ts`. All colors and fonts are tokens in `styles/globals.css`: CSS variables on `:root` mapped in `@theme inline` to utilities such as `bg-paper`, `bg-card`, `text-ink`, `text-muted`, `border-line`, `bg-brand` (#29479E), `text-brand-ink`, `bg-brand-soft`, `text-ember`, and `font-display` / `font-body` / `font-mono`. Use these in new code. `primary` (= `brand`), `secondary`, `black` and `silver` remain only for old components.

Dark mode: the dark palette is already written in `globals.css` under `:root[data-theme="dark"]` but is intentionally off, because old sections still hardcode light colors. Turning it on is listed under «Dizayn tugagach qilinadigan ishlar» below.

Don't put unlayered element resets (`* { margin: 0 }` etc.) in `globals.css`: in Tailwind v4 they override every utility. Preflight already resets margins, padding and lists.

## Images

Large originals (5000 px covers, ~5 MB) live in `originals/images/`, outside `public/`. The folder is gitignored; the originals of the current covers are in Git history. Don't restore them with `git show … > file`: in PowerShell `>` corrupts binary files. Instead:
`git restore --source=07448b9 -- public/images/PUL.jpg` (puts the original in place of the resized copy), then move it to `originals/images/` and run `git restore -- public/images/PUL.jpg` to bring the resized copy back. `node scripts/resize-images.mjs` writes 2000 px copies with the same names to `public/images/`, which is what `book.json` references. For a new large image, put the original in `originals/images/` and run the script.

Flat front covers for the 3D book (one file per book, front only; crop spreads/print files and remove bleed and crop marks first):
1. Put the original (JPG/PNG; sharp can't read PDF) in `originals/covers/`.
2. Set `"cover": "/images/covers/<name>.jpg"` for that book in `book.json`.
3. Run `node scripts/resize-images.mjs`. It writes an 800 px JPG to `public/images/covers/`, but only for covers that some book's `cover` points to. Covers of books not yet on the site (e.g. `argument.jpg`, `povarnin.jpg`) stay only in `originals/covers/`. It also rewrites `app/data/cover-sizes.json` (pixel size of each cover; commit it). `Book3D` uses that ratio so the book has the cover's shape and the cover isn't cropped. A `cover` missing from that file fails the build.
4. Run `node scripts/cover-colors.mjs --force` (or delete just that book's `spineColor` and run it without `--force`).

## Dizayn tugagach qilinadigan ishlar

Do these once every page and section has moved to the new design (`design/prototip.html`):

- **Turn on dark mode.** First make sure no component hardcodes colors (`bg-white`, `bg-blue-100`, `text-primary`, hex values): use only the tokens. Then in `styles/globals.css` move the `:root[data-theme="dark"]` block into `@media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) { ... } }` and check every page with the phone/OS in dark mode.
