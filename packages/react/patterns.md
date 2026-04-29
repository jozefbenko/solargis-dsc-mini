# DSC-mini × shadcn/React patterns

Conventions and scaffolds for using DSC-mini tokens in React artifacts. Consumed by the prototyping MCP.

## Setup

```tsx
// In a Claude React artifact
import '@solargis/dsc-mini-tokens/css';
import '@solargis/dsc-mini-react/styles';
```

shadcn primitives now render in Solargis brand colors via the CSS variable mapping in `styles/index.css`.

## Patterns

_TODO — populate as scaffolds stabilize._

- App shell (header + content + optional sidebar)
- Form (inputs + validation + submit row)
- Data view (table + filter bar + empty state)
- Dialog (confirm / form / detail)
