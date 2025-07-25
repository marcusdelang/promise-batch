import { defineConfig } from 'tsup'

export default defineConfig([
  {
    entry: ['src/index.ts'],
    format: 'cjs',
    outDir: 'dist/cjs',
    dts: true,
    sourcemap: true,
    clean: true,
    minify: true,
  },
  {
    entry: ['src/index.ts'],
    format: 'esm',
    outDir: 'dist/esm',
    sourcemap: true,
    dts: false,
    clean: false,
    minify: true,
  }
])
