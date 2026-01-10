# Tasks: Sleek Static Podcast Website

**Input**: Design documents from `specs/001-building-modern-podcast/`
**Prerequisites**: `specs/001-building-modern-podcast/plan.md`, `specs/001-building-modern-podcast/spec.md`, `specs/001-building-modern-podcast/research.md`, `specs/001-building-modern-podcast/data-model.md`, `specs/001-building-modern-podcast/contracts/`

## Format: `[ID] [P?] [Story] Description (with file path)`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[US1]/[US2]/[US3]**: User story label (required in story phases)

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Initialize Next.js static-export project skeleton and tooling.

- [x] T001 Initialize Next.js + TypeScript app in `web/` (creates `web/package.json`, `web/next.config.*`, `web/src/app/`)
- [x] T002 Configure static export in `web/next.config.mjs` (`output: 'export'`, `images.unoptimized`, `trailingSlash`)
- [x] T003 [P] Add Tailwind CSS + global styles setup in `web/tailwind.config.*`, `web/postcss.config.*`, `web/src/app/globals.css`
- [x] T004 [P] Add lint/format scripts in `web/package.json` (Next lint + formatter of choice)
- [x] T005 [P] Add Playwright setup for e2e in `web/playwright.config.ts` and `web/tests/e2e/`
- [x] T006 Update `specs/001-building-modern-podcast/quickstart.md` for `web/` (dev, build, preview `web/out/`, test)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Shared UI framework, content model, navigation, and baseline UX/a11y conventions.

**⚠️ CRITICAL**: No user story work should start until this phase is complete.

- [x] T007 Create embedded mocked episodes source of truth in `web/src/content/episodes.ts` (20 episodes, exactly 1 `featured`, using `web/public/images/cover-default.svg` and `web/public/audio/silence-1s.wav`)
- [x] T008 [P] Add lightweight runtime validation/helpers in `web/src/content/episodes.ts` (unique `slug`, featured count, duration/date sanity)
- [x] T009 Create shared layout shell in `web/src/app/layout.tsx` (global styles, metadata, header/footer slots)
- [x] T010 [P] Implement primary navigation component in `web/src/components/Nav.tsx` (links: `/`, `/episodes`, `/about`, `/faq`)
- [x] T011 [P] Implement base page container component in `web/src/components/Layout.tsx` (responsive spacing/typography)
- [x] T012 [P] Implement episode UI primitives in `web/src/components/EpisodeCard.tsx` (title, description, date, duration, cover, play affordance)
- [x] T013 Define design tokens/theme (colors, type scale) in `web/tailwind.config.*` and apply in `web/src/app/globals.css`
- [x] T014 Add reduced-motion support in `web/src/app/globals.css` (respect `prefers-reduced-motion`)
- [x] T015 Create smoke e2e navigation test in `web/tests/e2e/navigation.spec.ts` (routes: `/`, `/episodes`, `/about`, `/faq`)
- [x] T016 Create basic accessibility smoke in `web/tests/e2e/a11y-smoke.spec.ts` (keyboard tab reaches nav, visible focus class present)

**Checkpoint**: Foundation ready — user story work can begin.

---

## Phase 3: User Story 1 - Visit landing & play featured episode (Priority: P1) 🎯 MVP

**Goal**: Landing page highlights 1 featured episode and supports accessible playback.

**Independent Test**: Open `/`, see featured episode metadata, start playback using keyboard, and confirm clear error state if audio missing.

- [x] T017 [US1] Render landing page in `web/src/app/page.tsx` using featured episode from `web/src/content/episodes.ts`
- [x] T018 [P] [US1] Implement featured hero UI in `web/src/components/FeaturedEpisode.tsx` (or inline in `web/src/app/page.tsx`)
- [x] T019 [P] [US1] Implement accessible audio player component in `web/src/components/Player.tsx` (native `<audio controls>` baseline)
- [x] T020 [US1] Wire hero play experience in `web/src/app/page.tsx` (keyboard + pointer usable; no-JS still shows `<audio controls>`)
- [x] T021 [US1] Add missing-audio and load-failure UI states in `web/src/components/Player.tsx`
- [x] T022 [US1] Add e2e test for landing featured content + play control presence in `web/tests/e2e/landing.spec.ts`

**Checkpoint**: US1 done — landing works and is demoable as MVP.

---

## Phase 4: User Story 2 - Browse episodes list (Priority: P2)

**Goal**: Episodes page displays exactly 20 episodes from embedded data and provides a consistent listening experience.

**Independent Test**: Open `/episodes`, verify 20 episodes render with metadata, and each has a usable playback control (or inline player) without breaking navigation.

- [x] T023 [US2] Render episodes list page in `web/src/app/episodes/page.tsx` from `web/src/content/episodes.ts`
- [x] T024 [P] [US2] Add episode list layout (responsive grid/list) in `web/src/app/episodes/page.tsx`
- [x] T025 [P] [US2] Reuse `web/src/components/EpisodeCard.tsx` for each episode with consistent metadata display
- [x] T026 [US2] Provide “listen” experience per episode (e.g., `<audio controls>` per card) in `web/src/components/EpisodeCard.tsx`
- [x] T027 [US2] Add empty-state handling in `web/src/app/episodes/page.tsx` (if episodes array unexpectedly empty)
- [x] T028 [US2] Add e2e test: episodes count = 20 and at least one playable control present in `web/tests/e2e/episodes.spec.ts`

**Checkpoint**: US2 done — browse + listen works from Episodes page.

---

## Phase 5: User Story 3 - Learn about the show & get answers (Priority: P3)

**Goal**: About and FAQ pages provide clear, accessible content.

**Independent Test**: Navigate to `/about` and `/faq` from the nav; content is readable on mobile and keyboard accessible.

- [x] T029 [US3] Implement About page content in `web/src/app/about/page.tsx` (semantic headings, readable layout)
- [x] T030 [US3] Implement FAQ content in `web/src/app/faq/page.tsx` using accessible markup (`<details>/<summary>` if collapsible)
- [x] T031 [US3] Add e2e test for About/FAQ presence and headings in `web/tests/e2e/content-pages.spec.ts`

**Checkpoint**: US3 done — all required pages exist and are navigable.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Make it “sleek/standout”, mobile-ready, and aligned with constitution constraints.

- [x] T032 Improve responsive navigation behavior in `web/src/components/Nav.tsx` (mobile layout, no-JS friendly)
- [x] T033 [P] Add SEO/social metadata in `web/src/app/layout.tsx` (title template, description, OG tags)
- [x] T034 [P] Optimize images usage for static export (avoid server-only image optimization; use `web/public/` assets)
- [x] T035 Ensure no mandatory network calls on initial load (audit `web/src/app/*` and `web/src/components/*`)
- [x] T036 [P] Add focus-visible styling in `web/src/app/globals.css` (consistent, high-contrast focus ring)
- [x] T037 Add simple “preview static build” script in `web/package.json` (serve `web/out/`) and document in `specs/001-building-modern-podcast/quickstart.md`
- [x] T038 Run `npm run build` in `web/` and confirm `web/out/` contains static pages for `/`, `/episodes`, `/about`, `/faq` (document outcome in `specs/001-building-modern-podcast/quickstart.md`)

---

## Dependencies & Execution Order

- Phase 1 → Phase 2 (blocks all stories)
- US1 is MVP and should be done first after Foundation
- US2 and US3 can proceed after Foundation (and ideally after US1 for shared UI reuse)

## Parallel Opportunities

- Phase 1: T003–T005 can run in parallel.
- Phase 2: T010–T014 can run in parallel once layout decision (T009) is known.
- Story phases: component tasks marked [P] can be parallelized across contributors.
