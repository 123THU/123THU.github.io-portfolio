# Rain Memory

A rainy-night personal site, published as a GitHub Pages **project site**.

## URL

After the repository is renamed to `portfolio`:

https://123thu.github.io/portfolio/

## Local

```bash
source ~/.nvm/nvm.sh && nvm use 20
npm install
npm run dev
```

## Publish

```bash
npm run build
git add docs src
git commit -m "Update site"
git push
```

GitHub Pages setting for this project repo:

- Source: **Deploy from a branch**
- Branch: `main`
- Folder: `/docs`
