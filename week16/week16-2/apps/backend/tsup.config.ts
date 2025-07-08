import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],   // 👈 Add your real entry point here
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true
});
