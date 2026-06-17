# Deploy (Cloudflare Pages)

The site is a static Astro build deployed to Cloudflare Pages.

## Project settings

| Setting | Value |
| --- | --- |
| Framework preset | **Astro** |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | 20+ |
| Production branch | `main` |

`astro.config.mjs` sets `site: 'https://wcsmn.com'` (used for the sitemap and
canonical URLs) and `@astrojs/sitemap` emits `/sitemap-index.xml`, which
`public/robots.txt` points to.

## Environment variables

| Variable | Used for |
| --- | --- |
| `PUBLIC_GOOGLE_CALENDAR_API_KEY` | The homepage custom calendar fetches events from the Google Calendar API with this key. **Set it in Cloudflare Pages** (and locally in `.env`). |
| `CF_PAGES_BRANCH` | Footer version: `main` shows the release version; other branches show `dev@<branch>`. Set automatically by Cloudflare. |
| `CF_PAGES_COMMIT_SHA` | Short SHA in the footer. Set automatically by Cloudflare. |

Only `PUBLIC_GOOGLE_CALENDAR_API_KEY` needs manual setup; the `CF_PAGES_*` vars
are provided by Cloudflare. See `src/lib/build.ts` and [RELEASING.md](RELEASING.md).

### Google Calendar API key setup

The key is a **client-side** key (it appears in the page's JS — expected for a
browser key). Lock it down in the Google Cloud Console:

1. Create an API key, then **restrict** it:
   - Application restriction → HTTP referrers → add `https://wcsmn.com/*` (plus
     your Cloudflare preview domains and `http://localhost:4321/*` for dev).
   - API restriction → Google Calendar API only.
2. Each organization's Google Calendar must be **public** ("Make available to
   public") for its events to be readable.
3. Add the key as `PUBLIC_GOOGLE_CALENDAR_API_KEY` in Cloudflare Pages →
   Settings → Environment variables (Production and Preview).

Without the key the homepage shows a graceful notice and the `<noscript>`
Google-embed fallback; the rest of the site is unaffected. See `.env.example`.

## Deploys and the version line

Every push to `main` triggers a Cloudflare deploy. Because releases are
automated (see [RELEASING.md](RELEASING.md)), a typical release produces two
deploys: one for your change, and one for the semantic-release commit that bumps
`package.json`. The footer reflects the new version after that second deploy.

## The contact form

The contact form (`src/pages/contact.astro`) posts to an external API at
`https://api.kaianolevine.com/v1/contact` and is protected by Cloudflare
Turnstile (site key in the page) plus a hidden honeypot field. That endpoint is
separate infrastructure — this site only submits to it; it does not host it.

## Local production check

```bash
npm run build && npm run preview
```

The build is fully static; there is no server runtime to configure.
