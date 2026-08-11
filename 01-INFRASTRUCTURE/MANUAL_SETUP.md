# Manual Setup Checklist

These are the accounts and services to create manually for Kyzentria.

## 1. GitHub

Use GitHub to store the Kyzentria source code.

Link:
https://github.com/

Repository:
https://github.com/mrkmlkantsrma/Kyzentria

Manual steps:
1. Create a GitHub account.
2. Verify your email.
3. Create one repository named `Kyzentria`.
4. Push the Kyzentria site code there.

## 2. Cloudflare

Use Cloudflare Pages to host Kyzentria for free.

Links:
https://dash.cloudflare.com/sign-up
https://developers.cloudflare.com/pages/get-started/

Dashboard:
https://dash.cloudflare.com/18a7f29569af3e43337e27a02aa85402/home

Manual steps:
1. Create a Cloudflare account.
2. Verify your email.
3. Open Workers & Pages.
4. Create one Pages project.
5. Connect the GitHub `Kyzentria` repository.
6. Deploy to `kyzentria.pages.dev`.

Do not create a separate Cloudflare Pages project for every tool.

## 3. Domain

Buy one memorable domain when ready.

Examples:
- kyzentria.com
- kyzentria.tools
- kyzentria.io

Manual steps:
1. Buy one domain.
2. Add the domain to Cloudflare.
3. Connect it to the same Cloudflare Pages project.
4. Use routes like `/calculator`, `/pdf`, `/image`, `/compare`.

Do this later. Development can start on `kyzentria.pages.dev`.

## 4. Google Search Console

Use Search Console to submit the sitemap and track Google search performance.

Link:
https://search.google.com/search-console

Manual steps:
1. Sign in with a Google account.
2. Add the Kyzentria domain.
3. Verify ownership.
4. Submit `sitemap.xml`.

## 5. Google Analytics

Use Google Analytics to track traffic and user behavior.

Link:
https://analytics.google.com/

Manual steps:
1. Create a Google Analytics account.
2. Create a web property for Kyzentria.
3. Copy the measurement ID.
4. Add the tracking code to the site.

## 6. Microsoft Clarity

Use Clarity for heatmaps and session recordings.

Link:
https://clarity.microsoft.com/

Manual steps:
1. Create a Clarity account.
2. Add a Kyzentria project.
3. Copy the tracking code.
4. Add the script to the site head.

## 7. AdSense

Use Google AdSense for display ads after Kyzentria has useful content and traffic.

Link:
https://adsense.google.com/

Manual steps:
1. Wait until Kyzentria has original content and working pages.
2. Create an AdSense account.
3. Add Kyzentria as your site.
4. Connect the site to AdSense.
5. Wait for review.

Do not apply too early with an empty site.

## 8. Affiliate Accounts

Use affiliate programs on pages with buying intent.

Programs to research:
- Amazon Associates
- Namecheap
- Hostinger
- DigitalOcean
- Canva
- Semrush
- Grammarly
- Adobe
- Envato

Manual steps:
1. Build useful pages first.
2. Apply to relevant affiliate programs.
3. Add affiliate links only where helpful.
4. Add a clear affiliate disclosure.
5. Track affiliate clicks in analytics.

## Recommended Order

1. GitHub
2. Cloudflare
3. Cloudflare Pages deployment
4. Google Search Console
5. Google Analytics
6. Microsoft Clarity
7. Domain
8. Affiliate accounts
9. AdSense

Start with GitHub and Cloudflare. Everything else can come after the first version is live.
