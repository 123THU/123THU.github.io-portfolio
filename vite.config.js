import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  build: {
    // GitHub Pages (branch deploy) can serve this folder directly.
    outDir: 'docs',
    assetsDir: 'assets',
    emptyOutDir: true
  }
});
