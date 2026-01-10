# Static Web App Constitution

## Core Principles

### I. Static-First
Ship as static assets (HTML/CSS/JS + media) with no required server-side runtime; any build step must output a fully static, host-anywhere artifact.

### II. Progressive Enhancement
Core content and navigation must work without JavaScript; JavaScript only enhances UX and must fail gracefully.

### III. Accessibility Baseline
Meet WCAG 2.2 AA expectations for semantics, keyboard navigation, focus management, contrast, and reduced-motion support.

### IV. Performance Baseline
Optimize for fast load and interaction: minimize shipped JS, avoid blocking resources, and keep pages usable on mid-tier mobile devices.

### V. Security Hygiene
No secrets in the repo; avoid unnecessary third-party scripts; when external assets are used, prefer integrity protections (SRI) and a restrictive Content Security Policy.

## Technical Constraints

- Deliverable is a static artifact suitable for CDN/static hosting (e.g., `dist/` containing only static files).
- Support latest stable Chrome/Edge/Firefox/Safari (desktop + mobile); document any exceptions.
- Avoid mandatory network calls on initial load; if remote data is required, show a deterministic loading/empty state and handle failures.

## Development Workflow

- Every change includes a brief note on accessibility and performance impact (even “no impact”).
- Add automated checks where practical (format/lint/build); any introduced check must run in CI and be documented in quickstart.
- Prefer small, incremental PRs with a clear user-visible outcome.

## Governance
This constitution supersedes other conventions in the repo. Amendments require a documented rationale and a migration plan if behavior or supported environments change.

**Version**: 1.0.0 | **Ratified**: 2026-01-10 | **Last Amended**: 2026-01-10
