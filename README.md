# Rain Memory

A rainy-night personal site on GitHub Pages.

## Current URL

https://123thu.github.io/123THU.github.io-portfolio/

If you rename this repository to exactly `portfolio`, the URL can become:

https://123thu.github.io/portfolio/

Then change `base` in `vite.config.js` to `/portfolio/`, run `npm run build`, and push again.

## Local

```bash
source ~/.nvm/nvm.sh && nvm use 20
npm install
npm run dev
```

## Publish

```bash
npm run build
git add docs src vite.config.js
git commit -m "Update site"
git push
```

Pages setting:

- Source: Deploy from a branch
- Branch: `main`
- Folder: `/docs`
