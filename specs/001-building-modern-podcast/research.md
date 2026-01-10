# Research

## Decisions

### Static site approach
- **Decision**: Use a React framework configured for static export to produce a fully static build artifact.
- **Chosen**: Next.js with static export (`output: 'export'`).
- **Rationale**: Matches the desired stack (Next.js) while still delivering a host-anywhere static output; supports file-based routing for the 4 pages and progressive enhancement for optional interactive pieces (e.g., an enhanced audio player UI).
- **Alternatives considered**:
  - Plain HTML/CSS/JS (simpler but less structured for scaling pages/components)
  - Astro (excellent SSG, but not the chosen stack)

### Styling
- **Decision**: Use a utility-first CSS framework for a “sleek/standout” look with fast iteration.
- **Chosen**: Tailwind CSS.
- **Rationale**: Rapid prototyping, consistent design system tokens, easy responsive and state styling without bespoke CSS sprawl.
- **Alternatives considered**:
  - Vanilla CSS with design tokens (works, but slower iteration for a tutorial-driven build)
  - CSS modules (more setup and still needs a design system)

### Mocked data source
- **Decision**: Keep podcast data local and deterministic.
- **Chosen**: Embedded content in the repo (e.g., `src/content/episodes.ts`) bundled at build time.
- **Rationale**: Meets requirement “no real feed” and “no database”, allows build-time rendering for static export, and supports stable UI for tests/demos.
- **Alternatives considered**:
  - JSON file (works; TS module is convenient for typed data and computed helpers)

### Audio playback baseline
- **Decision**: Rely on native browser capabilities for the core listening experience.
- **Chosen**: HTML5 `<audio>` for playback with accessible controls, optionally enhanced with lightweight JS.
- **Rationale**: Works without JS for core playback, supports keyboard interaction, and avoids heavy custom players.
- **Alternatives considered**:
  - Full custom player (more JS, higher a11y risk, unnecessary for MVP)

## Resolved Clarifications

- No `[NEEDS CLARIFICATION]` items in the spec; the plan assumes sensible defaults aligned to `.specify/memory/constitution.md`.
