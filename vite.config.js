import { defineConfig } from 'vite';

export default defineConfig({
  // Must match the GitHub repo name for project Pages.
  base: '/123THU.github.io-portfolio/',
  build: {
    outDir: 'docs',
    assetsDir: 'assets',
    emptyOutDir: true
  }
});
