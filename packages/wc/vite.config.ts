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
      external: [/^lit($|\/)/],
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
