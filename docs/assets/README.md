# DSC-mini hosted assets

Logos and other static images served via jsDelivr.

## Naming convention

- `logo.svg` — primary square mark (1:1 aspect)
- `wordmark.svg` — horizontal logotype with "Solargis" text
- `logo-{variant}.svg` — color or size variants (e.g. `logo-mono.svg`, `logo-white.svg`)

Always SVG when possible. Fall back to PNG (≥ 2× density) only when the asset is genuinely raster.

## CDN URL pattern

Every file in this directory is reachable at:

```
https://cdn.jsdelivr.net/gh/jozefbenko/solargis-dsc-mini@main/docs/assets/<filename>
```

For Claude artifacts, prefer this URL — jsDelivr is allowed in the artifact CSP, unlike `*.github.io`.

## Current contents

- `logo-placeholder.svg` — temporary brand-red mark with "S". Replace with the real Solargis logo when available.
- `wordmark-placeholder.svg` — temporary horizontal lockup. Replace with the real wordmark.
