# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Rules

- **Always ask the user before any `git commit` or `git push`.** Pushing to `main` deploys to the live site immediately via Vercel.
- All site text is in Uzbek, Latin script (not Cyrillic).
- Book titles are written in «» quotes, e.g. «Pul».

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
- **Data source**: all book data lives in `app/data/book.json`. Always import it through `app/data/books.ts` (`import { books } from "@/app/data/books"`), which types it as `Book[]` (`app/type/Book.ts`). Then a missing or mistyped required field fails `tsc`/the build. `gallery` and `hamkor` (partner logo) are optional. A field added to the JSON but not to `Book` goes undetected, so update the type as well. To add a book, add an entry to the JSON and put its images in `public/images/`. `firebase` is listed as a dependency but isn't used anywhere yet.
- **Layout**: `app/layout.tsx` wraps every page with `Navbar`, `Header`, and `Footer`. The home page (`app/page.tsx`) stacks the section components from `components/` (Intro, FeaturedBooks, ExploreBooks, Blog, PodCast). Route-specific components live next to their route (e.g. `app/about/AboutIntro.tsx`).
- **Books page**: `app/books/page.tsx` is a server component that wraps the client-side `BooksClient` in `<Suspense>`. `BooksClient` reads `?category=` with `useSearchParams` (which needs that Suspense boundary in a static export) and handles search and category filtering on the client.
- **Categories (janrlar)**: the single list is `app/data/categories.ts` (`categories`, `categoryTitles`, `ALL_CATEGORIES = "Barchasi"`). It is used by the footer, the home-page `ExploreBooks` section and `BooksClient`. A `category` in `book.json` that isn't in this list throws in `app/data/books.ts` and fails the build. Don't hardcode category names anywhere else.
- **Carousels**: built with Swiper. Its CSS is imported globally in `styles/globals.css`. The podcast section gets video thumbnails from YouTube URLs via `app/utils/youtube.ts`.
- **Path alias**: `@/*` points to the repo root (e.g. `@/components/...`, `@/app/data/book.json`).

## Styling

The project uses Tailwind CSS v4 through `@tailwindcss/postcss`. Brand colors are defined in two places: as `@theme` tokens in `styles/globals.css`, which v4 actually uses, and in the legacy `tailwind.config.ts`. They don't match: primary is `#29479E` in the CSS but `#2242B4` in the config. Use the `primary`, `secondary`, `black`, and `silver` utility classes, and treat `globals.css` as the source of truth.
