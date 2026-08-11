# Cloudflare Pages Setup

Use a single Cloudflare Pages project for the whole Kyzentria platform.

1. Create one Kyzentria repository
2. Build the Astro site
3. Deploy to Cloudflare Pages
4. Use kyzentria.pages.dev during development
5. Add kyzentria.com later
6. Submit sitemap to Google Search Console

Structure:

/
/calculator
/pdf
/image
/compare
/resume
/seo
/developer
/hosting
/prompt
/assets
/data
/robots.txt
/sitemap.xml

Do not create a different Cloudflare project for every tool. Keep all traffic, links, analytics, and authority under one brand.

GitHub repository:
https://github.com/mrkmlkantsrma/Kyzentria

Cloudflare dashboard:
https://dash.cloudflare.com/18a7f29569af3e43337e27a02aa85402/home

Build settings:
- Framework preset: Astro
- Build command: npm run build
- Build output directory: dist
- Node version: 22 or newer
