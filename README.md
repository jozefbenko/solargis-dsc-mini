# Solargis DSC-mini

Design essentials as a standalone package for small projects — and a deterministic frontend vocabulary for Claude artifacts.

**Live:** [jozefbenko.github.io/solargis-dsc-mini](https://jozefbenko.github.io/solargis-dsc-mini/) · **Tracking:** [UX-559](https://solargis.atlassian.net/browse/UX-559)

## Use it in a Claude HTML artifact

Claude artifacts run in a sandboxed iframe whose CSP only allows scripts and styles from `cdnjs.cloudflare.com` and `claudeusercontent.com` (plus `fonts.googleapis.com` for styles). Both jsDelivr and GitHub Pages are **blocked**.

The working path is **inline injection** — the MCP includes the contents of `tokens.css` and `wc.js` in the system prompt; the artifact pastes them as inline `<style>` and `<script>` blocks. `'unsafe-inline'` is permitted for both directives, so this works reliably. See [`prompts/artifact-claude.md`](./prompts/artifact-claude.md) for the full preamble template.

## Use it in a regular web page

Outside the artifact sandbox, the CDN URLs are fine:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/jozefbenko/solargis-dsc-mini@main/docs/tokens.css">
<script type="module" src="https://cdn.jsdelivr.net/gh/jozefbenko/solargis-dsc-mini@main/docs/wc.js"></script>
```

Brand assets (logos) live under [`docs/assets/`](./docs/assets/) and are served from the same jsDelivr URL prefix; image-loading is more permissive even inside Claude artifacts.

## Why

Two problems, one shared spine:

- Small Solargis apps (auxiliary tools, prototypes) get one-off styling. The full DSC is too heavy for them, so they brand-drift.
- The Solargis prototyping MCP needs a deterministic frontend vocabulary that Claude renders into rather than invents.

## Architecture

Three packages on a token spine. The prototyping MCP is a **separate repo** that consumes the React/shadcn theme and patterns from this one.

1. **`@solargis/dsc-mini-tokens`** — CSS variables + JS object. Brand source of truth, built with Style Dictionary.
2. **`@solargis/dsc-mini-wc`** — `<sg-button>`, `<sg-input>`, `<sg-card>`, etc. Lit-based custom elements. Consumed by small Solargis apps (Angular/vanilla via custom elements) and by HTML artifacts in Claude (CDN script tag).
3. **`@solargis/dsc-mini-react`** — tokens applied to shadcn primitives via CSS variable mapping, plus a `patterns.md` doc. Static assets, served by the prototyping MCP for Claude React artifacts.

The MCP routes work to the right surface (inline visualizer / HTML artifact / markdown) and consumes (2) and (3) — but lives in its own repo.

## Scope

Full mirror of DSC in WC form: primitives (button, input, select, checkbox, radio, switch, card, modal, label, typography), navigation and layout, data display (table, list, badge, chip), feedback (toast, alert, progress), and the more complex widgets (date picker, autocomplete, tabs, accordion, tree).

Roughly matches DSC visually — not pixel-perfect.

## Principles

- **Opinionated over flexible** — tags encode visual decisions; few override knobs.
- **Claude modifies, doesn't decide** — the MCP serves complete scaffolds; Claude edits, doesn't compose from scratch.
- **Tokens are the spine** — drift between DSC and DSC-mini is acceptable; drift within DSC-mini is not.

## Stack

Maximally modern, minimal tool surface:

| Concern | Tool |
|---|---|
| Runtime, package manager, workspaces, test runner | **Bun 1.3** |
| Library bundler | **Vite 7** (Rollup-based, with esbuild transform) |
| Lint + format | **Biome 2** |
| WC framework | **Lit 3** (standard / stage-3 decorators) |
| Token compiler | **Style Dictionary 4** |

## Layout

```
packages/
├── tokens/   # Style Dictionary → CSS vars + JS
├── wc/       # Lit custom elements
└── react/    # CSS theme + patterns.md (no build)
```

## Common commands

```bash
bun install              # install everything
bun test                 # run tests across the workspace
bun run lint             # biome check
bun run check            # biome check --write (auto-fix)
bun run build            # build all packages

# Per-package
bun run --filter @solargis/dsc-mini-tokens build
bun run --filter @solargis/dsc-mini-wc dev
```

## Status

Scaffolding in place. `sg-button` is a smoke-test component proving the token → component pipeline. Component buildout begins next.
