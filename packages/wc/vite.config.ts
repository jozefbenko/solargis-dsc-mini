import { resolve } from 'node:path';
import { defineConfig, type PluginOption } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(import.meta.dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      // Lit is bundled — the WC dist is consumed both by npm packages and by
      // CDN/HTML artifacts that have no module resolver. Bundling Lit (~10kb gz)
      // makes the artifact path work without an importmap.
    },
    sourcemap: true,
    target: 'es2022',
  },
  esbuild: {
    target: 'es2022',
    supported: {
      decorators: false,
    },
  },
  plugins: [
    dts({
      include: ['src/**/*'],
      exclude: ['**/*.test.ts'],
      rollupTypes: true,
    }) as PluginOption,
  ],
});
