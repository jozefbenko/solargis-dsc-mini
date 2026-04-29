# Solargis DSC-mini

Design essentials as a standalone package for small projects — and a deterministic frontend vocabulary for Claude artifacts.

Tracking issue: [UX-559](https://solargis.atlassian.net/browse/UX-559)

## Why

Two problems, one shared spine:

- Small Solargis apps (auxiliary tools, prototypes) get one-off styling. The full DSC is too heavy for them, so they brand-drift.
- The Solargis prototyping MCP needs a deterministic frontend vocabulary that Claude renders into rather than invents.

## Architecture

Four parts sharing a token spine:

1. **Tokens** — CSS variables. Brand source of truth.
2. **Web Components** — `<sg-button>`, `<sg-input>`, `<sg-card>`, etc. The actual shipped library. Consumed by small Solargis apps (Angular/vanilla via custom elements) and by HTML artifacts in Claude (CDN script tag).
3. **React/shadcn theme** — tokens applied to shadcn primitives that ship with Claude React artifacts. Not a separate package — a CSS file + patterns doc, served by the MCP.
4. **MCP content layer** — scaffolds, patterns, and routing rules:
   - Inline visualizer → explanations (claude.ai-native, not branded)
   - HTML artifact with DSC-mini WCs → prototyping
   - Markdown/prose → default

## Scope

Full mirror of DSC in WC form: primitives (button, input, select, checkbox, radio, switch, card, modal, label, typography), navigation and layout, data display (table, list, badge, chip), feedback (toast, alert, progress), and the more complex widgets (date picker, autocomplete, tabs, accordion, tree). MCP content layer covers the full scaffold and pattern catalog.

Roughly matches DSC visually — not pixel-perfect.

## Principles

- **Opinionated over flexible** — tags encode visual decisions; few override knobs.
- **Claude modifies, doesn't decide** — MCP serves complete scaffolds; Claude edits, doesn't compose from scratch.
- **Tokens are the spine** — drift between DSC and DSC-mini is acceptable; drift within DSC-mini is not.

## Status

Early scaffolding — repo created, stack not yet chosen.
