# 123THU.github.io

Rainy-night personal portfolio (Vite + vanilla JS).

## Local

```bash
source ~/.nvm/nvm.sh && nvm use 20
npm install
npm run dev
```

## Fix white screen on GitHub Pages

Local works because Vite compiles the site. GitHub cannot run Vite source directly.

One-time setup (pick either):

1. **Recommended / simplest**  
   Repo → **Settings → Pages → Build and deployment**  
   - Source: **Deploy from a branch**  
   - Branch: `main`  
   - Folder: `/docs`

2. **Or use Actions**  
   - Source: **GitHub Actions**

Then wait 1–2 minutes and hard-refresh https://123thu.github.io/
