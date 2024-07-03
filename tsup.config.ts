import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./src/index.ts'],
  splitting: false,
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  minify: true,
  banner: {
    js: '#!/usr/bin/env node',
  },
})
