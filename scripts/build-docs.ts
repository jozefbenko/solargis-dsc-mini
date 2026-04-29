/**
 * Assembles docs/ for GitHub Pages publishing.
 *
 * Layout:
 *   docs/
 *   ├── index.html         (committed)
 *   ├── tokens.css         (copied from packages/tokens/dist)
 *   ├── wc.js              (copied from packages/wc/dist)
 *   └── prompts/artifact-claude.md
 *
 * Stable URLs: tokens.css, wc.js, prompts/artifact-claude.md.
 * The MCP and HTML artifacts reference these directly.
 */
import { copyFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const DOCS = join(ROOT, 'docs');

const COPIES: Array<[string, string]> = [
  ['packages/tokens/dist/tokens.css', 'tokens.css'],
  ['packages/wc/dist/index.js', 'wc.js'],
  ['prompts/artifact-claude.md', 'prompts/artifact-claude.md'],
];

await mkdir(join(DOCS, 'prompts'), { recursive: true });

for (const [from, to] of COPIES) {
  const src = join(ROOT, from);
  const dst = join(DOCS, to);
  await copyFile(src, dst);
  console.log(`  ${from}  →  docs/${to}`);
}

console.log('\ndocs/ ready');
