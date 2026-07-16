import { defineConfig } from 'vite';

export default defineConfig({
  // Project site URL: https://123thu.github.io/portfolio/
  base: '/portfolio/',
  build: {
    outDir: 'docs',
    assetsDir: 'assets',
    emptyOutDir: true
  }
});
