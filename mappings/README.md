# DSC-mini × shadcn — mapping PoC

Fast PoC for the new artifact strategy. **We stop shipping CSS/JS to the
Claude-chat consumer.** Instead we ride on shadcn/ui (already CDN-allowed
in artifacts) and deliver two thin artifacts the MCP injects at session start:

| File | Purpose | Size |
|---|---|---|
| `brand-overrides.css` | Re-points shadcn's CSS variables (`--primary`, `--background`, `--destructive`, …) at DSC tokens. Adds `.sg-status-success/warning/info` utilities for variants shadcn doesn't ship. Also includes the DSC token block inline so it's fully self-contained. | ~3 kB |
| `shadcn-to-dsc.md` | Translation map for all 17 DSC-mini components. Each entry: shadcn primitive + variant/className recipe + edge-case notes (chip → Badge+X button, spinner → Loader2, indeterminate progress → custom div, etc.). | ~6 kB |

## How the MCP consumes it

Two plausible wire-ups (Claude van Context's call):

1. **Inline both into the artifact preamble** — same shape as the previous `{{INLINE_TOKENS_CSS}}` / `{{INLINE_WC_JS}}` placeholders, but the JS side is gone. The CSS goes into a `<style>` tag; the mapping doc goes into the system prompt as an instruction block.
2. **System-prompt only** — inject `shadcn-to-dsc.md` as guidance and have artifact-Claude paste `brand-overrides.css` into `<style>` from a verbatim copy. Lower runtime cost, slightly higher prompt size.

Either way: no external CDN fetch, no CSP fight, nothing to break when shadcn's defaults shift.

## What this leaves untouched

Per Jozef's call ("not dropping anything yet"):

- `packages/wc/` — Lit web components still build, still ship to GH Pages for the showcase + non-artifact consumers.
- `packages/tokens/` — Style Dictionary build is the source of truth; `brand-overrides.css` mirrors its output by hand for now.
- `prompts/artifact-claude.md` — the legacy WC-route prompt. Kept as the long-form reference until the MCP cuts over and we decide whether to retire it.

## Open questions for Claude van Context

1. Inline-both vs system-prompt-only injection? Affects how much per-artifact prompt budget we burn.
2. Do we need a tiny example artifact in `mappings/` to validate the recipes round-trip, or does Claude van Context test that on its end?
3. The `.sg-status-*` utilities use `color-mix()` for tinted backgrounds. CSS support is fine in modern artifact runtimes but if the iframe is locked to an older Chromium, we'd need to swap to fixed rgba values. Worth a smoke check.

## Next iterations (after PoC validation)

- Auto-generate `brand-overrides.css` from the Style Dictionary build so it can't drift from `tokens.css`.
- Add a per-component example screenshot or rendered HTML snippet to the mapping doc for higher-fidelity recipes.
- Cover the deferred Tier A+B (toast, tooltip, skeleton, empty-state, form-field, textarea) once shadcn versions are picked.
