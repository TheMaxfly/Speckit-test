# Implementation Plan: Sleek Static Podcast Website

**Branch**: `001-building-modern-podcast` | **Date**: 2026-01-10 | **Spec**: `specs/001-building-modern-podcast/spec.md`
**Input**: Feature specification from `specs/001-building-modern-podcast/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Build a sleek, responsive, static-exported podcast website with four pages (Landing with one featured episode, Episodes with 20 mocked episodes, About, FAQ) and an accessible audio playback experience. Implement with Next.js configured for static export (no database, no server runtime required) and keep content embedded in the repo (mock episode data bundled at build time). Ensure baseline accessibility, performance, and security hygiene per the constitution.

## Technical Context

<!--
  ACTION REQUIRED: Replace the content in this section with the technical details
  for the project. The structure here is presented in advisory capacity to guide
  the iteration process.
-->

**Language/Version**: TypeScript (Node.js LTS for tooling)  
**Primary Dependencies**: Next.js (static export), React, Tailwind CSS  
**Storage**: N/A (no database); mocked content embedded in the repo and bundled at build time  
**Testing**: Playwright (navigation + accessibility smoke), plus Next.js lint/typecheck  
**Target Platform**: Modern browsers (latest stable Chrome/Edge/Firefox/Safari on desktop + mobile)  
**Project Type**: Web (static export)  
**Performance Goals**: Fast initial render; keep shipped JS reasonable; audio playback responsive to user input  
**Constraints**: Static export only (no server-only features); no mandatory network calls on initial load; usable with JS disabled for reading/navigating core content  
**Scale/Scope**: 4 pages, 20 mocked episodes, one featured episode, simple audio playback UX

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **Static-First**: PASS — site builds to a fully static output directory (e.g., `out/`) with no server runtime required.
- **Progressive Enhancement**: PASS — pages render content + navigation without JS; JS only powers optional enhancements (e.g., enhanced audio UI).
- **Accessibility Baseline**: PASS — semantic HTML, keyboard navigation, visible focus, reduced motion support; automated smoke checks via Playwright where practical.
- **Performance Baseline**: PASS — avoid heavy client bundles; prefer SSR/static rendering; optimize images; lazy-load non-critical assets.
- **Security Hygiene**: PASS — no secrets; no required third-party scripts; if any external assets are used, prefer SRI and a restrictive CSP.

## Project Structure

### Documentation (this feature)

```text
specs/001-building-modern-podcast/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)
<!--
  ACTION REQUIRED: Replace the placeholder tree below with the concrete layout
  for this feature. Delete unused options and expand the chosen structure with
  real paths (e.g., apps/admin, packages/something). The delivered plan must
  not include Option labels.
-->

```text
web/
  package.json
  next.config.*
  tailwind.config.*
  public/
    favicon.*
    images/
    audio/
  src/
    app/
      layout.tsx
      page.tsx             # landing (featured episode)
      episodes/
        page.tsx           # list of 20 episodes (embedded mock)
      about/
        page.tsx
      faq/
        page.tsx
    components/
      Layout.tsx
      Nav.tsx
      EpisodeCard.tsx
      Player.tsx           # minimal enhancement (error message)
      FeaturedEpisode.tsx
    content/
      episodes.ts          # embedded mocked data source of truth
  tests/
    e2e/
      navigation.spec.ts
      a11y-smoke.spec.ts
```

**Structure Decision**: Next.js app with static export; file-based routing in `src/app/`, and mocked content embedded in `src/content/episodes.ts` so pages can render at build time with no database or runtime dependencies.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |
