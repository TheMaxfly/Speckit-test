# Quickstart

## Prerequisites

- Node.js LTS (for build tooling)
- npm (bundled with Node) or pnpm/yarn (optional)

## Install

```bash
cd web
npm install
```

## Develop

```bash
cd web
npm run dev
```

Open the printed local URL and verify:
- Landing shows one featured episode
- Episodes shows exactly 20 episodes
- About and FAQ load from navigation

## Build

```bash
cd web
npm run build
```

Expected output: a static artifact directory (e.g., `web/out/`) suitable for CDN/static hosting.

## Preview static build

```bash
cd web
npm run preview
```

## Test

```bash
cd web
npm test
```

Minimum expected checks:
- Navigation smoke test across `/`, `/episodes`, `/about`, `/faq`
- Basic accessibility smoke (keyboard navigation + visible focus)

## Notes

- Episode data is mocked/local (no real podcast feed required).
- Core content/navigation must remain usable without JavaScript; enhancements are optional.
- Verified: `npm run build` produces `web/out/` with static pages for `/`, `/episodes`, `/about`, `/faq`.
